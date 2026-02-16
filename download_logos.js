const fs = require('fs');
const https = require('https');

const logos = [
    {
        name: "Gates",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Bill_%26_Melinda_Gates_Foundation_logo.svg/512px-Bill_%26_Melinda_Gates_Foundation_logo.svg.png"
    },
    {
        name: "USDS",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/U.S._Digital_Service_Logo.svg/512px-U.S._Digital_Service_Logo.svg.png"
    },
    {
        name: "MSD",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/MSD_2015_logo.svg/512px-MSD_2015_logo.svg.png"
    }
];

logos.forEach(logo => {
    const file = fs.createWriteStream(`public/logo/${logo.name}.png`);
    https.get(logo.url, {
        headers: { 'User-Agent': 'Mozilla/5.0' }
    }, response => {
        if (response.statusCode === 200) {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded ${logo.name}.png`);
            });
        } else {
            console.error(`Failed to download ${logo.name}: Status ${response.statusCode}`);
            fs.unlink(`public/logo/${logo.name}.png`, () => { }); // Delete empty file
        }
    }).on('error', err => {
        fs.unlink(`public/logo/${logo.name}.png`, () => { });
        console.error(`Error downloading ${logo.name}: ${err.message}`);
    });
});
