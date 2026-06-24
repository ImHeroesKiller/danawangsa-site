# Danawangsa Capital

Website korporasi **Strategic Business & Financial Advisory** — dibangun dengan Next.js 15, TypeScript, Tailwind CSS, dan shadcn/ui.

## Struktur Proyek

```
app/
├── layout.tsx          # Root layout, metadata, providers
├── page.tsx            # Homepage (semua sections)
├── globals.css         # Tailwind + custom brand styles
└── actions/
    └── consultation.ts # Server Actions (form submission)

components/
├── ui/                 # shadcn/ui primitives
├── sections/           # Hero, Services, Fee, FAQ, dll.
├── layout/             # Navbar, Footer, StickyCTA, WhatsApp
├── shared/             # Reusable cards & headers
└── consultation/       # Modal + context

lib/
├── utils.ts            # cn() helper
├── site-config.ts      # Env-based configuration
└── data/content.ts     # Static content (CMS-ready)

types/
└── index.ts            # TypeScript interfaces

legacy/
└── danawangsa-capital.html  # Original HTML reference
```

## Menjalankan Secara Lokal

```bash
# 1. Install dependencies
npm install

# 2. Copy environment variables
cp .env.example .env.local

# 3. Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000)

## Deploy ke Vercel

### Via CLI

```bash
npm i -g vercel
vercel login
vercel
```

### Via GitHub

1. Push repo ke GitHub
2. Import project di [vercel.com/new](https://vercel.com/new)
3. Set environment variables dari `.env.example`
4. Deploy

## Environment Variables

| Variable | Deskripsi |
|----------|-----------|
| `NEXT_PUBLIC_SITE_URL` | URL production untuk Open Graph |
| `NEXT_PUBLIC_CONTACT_PHONE` | Nomor telepon tampilan |
| `NEXT_PUBLIC_CONTACT_PHONE_RAW` | Nomor WA tanpa format (628xxx) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Email kontak |
| `CONSULTATION_WEBHOOK_URL` | Webhook untuk form submission (opsional) |

## Langkah Selanjutnya

- [ ] Integrasi form ke Resend / webhook / CRM
- [ ] Halaman legal (Privasi & Syarat Konsultasi)
- [ ] OG image branded (`public/og-image.png`)
- [ ] Google Analytics / Meta Pixel
- [ ] Admin dashboard untuk lead management