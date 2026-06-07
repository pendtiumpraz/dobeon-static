---
title: Modules
tags:
  - dobeon-static
  - modules
created: 2026-06-07
---

# Modules

## Struktur Direktori

```
dobeon-static/
├── app/
│   ├── about/
│   │   └── page.tsx              # Halaman Tentang
│   ├── api/contact/
│   │   └── route.ts              # API endpoint kontak
│   ├── contact/
│   │   ├── actions.ts            # Server action form kontak
│   │   └── page.tsx              # Halaman Kontak
│   ├── services/
│   │   └── page.tsx              # Halaman Layanan
│   ├── layout.tsx                # Layout global (Header + Footer)
│   ├── page.tsx                  # Halaman Beranda
│   ├── globals.css               # CSS global + Tailwind
│   ├── loading.tsx               # Loading state
│   ├── not-found.tsx             # Halaman 404
│   ├── sitemap.ts                # Sitemap generation
│   ├── robots.ts                 # Robots.txt generation
│   └── manifest.ts               # PWA manifest
├── components/
│   ├── UI Components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── GlassCard.tsx
│   │   ├── Section.tsx
│   │   └── PlaceholderImage.tsx
│   ├── Navigation
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Logo.tsx / LogoLine.tsx
│   ├── Animation Components
│   │   ├── ParticleBackground.tsx
│   │   ├── FloatingShapes.tsx
│   │   ├── FloatingIcons.tsx
│   │   ├── HUDBackground.tsx
│   │   ├── HUDCard.tsx
│   │   ├── StatCounter.tsx
│   │   ├── WaveDivider.tsx
│   │   └── Engagement.tsx
│   ├── Content Components
│   │   ├── Hero.tsx
│   │   ├── TeamMemberCard.tsx
│   │   ├── TeamAvatar.tsx
│   │   └── ImageCarousel.tsx
│   ├── Branding
│   │   ├── UnsplashImage.tsx
│   │   └── illustrations/
│   └── SEO
│       └── StructuredData.tsx
├── lib/
│   └── structured-data.ts        # Helper data terstruktur JSON-LD
├── public/
│   ├── logo/
│   │   └── (client logos)
│   ├── assets/
│   │   └── (images, SVGs)
│   └── (favicon, icons)
└── (root config files)
```

## Client Logos (public/logo/)

Logo mitra/klien Dobeon, termasuk ADB, Alvarez, Biofarma, Boston Consulting, dll.

## Dokumentasi Animasi

| File | Deskripsi |
|------|-----------|
| `ANIMATIONS.md` | Dokumentasi lengkap animasi |
| `ANIMATION_IMPLEMENTATION_SUMMARY.md` | Ringkasan implementasi |
| `ANIMATION_QUICK_REFERENCE.md` | Referensi cepat animasi |
| `ILLUSTRATIONS_COMPLETE.md` | Dokumentasi ilustrasi |
| `ILLUSTRATIONS_GUIDE.md` | Panduan ilustrasi |

## Lihat Juga

- [[architecture|Arsitektur]]
- [[features|Fitur]]
- [[tech-stack|Tech Stack]]
