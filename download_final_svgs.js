const fs = require('fs');
const https = require('https');

const logos = [
    {
        name: "USDS.svg",
        url: "https://raw.githubusercontent.com/usds/website/refs/heads/master/img/usds-logo.svg" 
    },
    {
        name: "MSD.svg",
        url: "https://upload.wikimedia.org/wikipedia/commons/f/f7/MSD_2015_logo.svg" 
    },
    {
        name: "Gates.svg",
        url: "https://upload.wikimedia.org/wikipedia/commons/8/87/Bill_%26_Melinda_Gates_Foundation_logo.svg" 
    }
];

function download(url, dest, cb) {
  const request = https.get(url, {
      headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
  }, function(response) {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
           download(response.headers.location, dest, cb);
           return;
      }
      if (response.statusCode !== 200) {
          cb(new Error(`Status ${response.statusCode}`));
          return;
      }
      const file = fs.createWriteStream(dest);
      response.pipe(file);
      file.on('finish', () => file.close(() => cb(null)));
  }).on('error', (err) => cb(err));
}

function processLogo(index) {
    if (index >= logos.length) return;
    const logo = logos[index];
    const path = `public/logo/${logo.name}`;
    
    console.log(`Downloading ${logo.name}...`);
    download(logo.url, path, (err) => {
        if (err) {
            console.log(`Failed ${logo.name}: ${err.message}`);
        } else {
            console.log(`Success ${logo.name}`);
        }
        processLogo(index + 1);
    });
}

processLogo(0);
