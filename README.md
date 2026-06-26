# Danawangsa Capital

Website korporasi **Strategic Business & Financial Advisory** — Next.js 15, TypeScript, Tailwind CSS, shadcn/ui.

## Struktur Proyek

```
app/
├── layout.tsx
├── page.tsx
├── privasi/page.tsx
├── syarat-konsultasi/page.tsx
├── globals.css
└── actions/consultation.ts

components/
├── ui/
├── sections/
├── layout/
├── legal/
├── shared/
└── consultation/

lib/
├── metadata.ts
├── site-config.ts
├── validations/consultation.ts
└── data/content.ts, legal-content.ts

public/
└── og-image.png

scripts/
├── og-image.svg
└── generate-og-image.mjs
```

## Menjalankan Secara Lokal

```bash
npm install
cp .env.example .env.local
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000)

## Environment Variables

| Variable | Deskripsi |
|----------|-----------|
| `NEXT_PUBLIC_SITE_URL` | URL production (Open Graph & canonical) |
| `NEXT_PUBLIC_CONTACT_PHONE` | Nomor telepon tampilan |
| `NEXT_PUBLIC_CONTACT_PHONE_RAW` | Nomor WA (628xxx) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Email kontak |
| `CONSULTATION_WEBHOOK_URL` | Webhook form konsultasi (Formspree / n8n) |

## OG Image

Preview share (WhatsApp, LinkedIn, Twitter) memakai `public/og-image.png` (1200×630).

**Update desain:**

1. Edit `scripts/og-image.svg`
2. Jalankan `npm run generate:og`
3. Commit `public/og-image.png` dan deploy ulang

## Deploy ke Vercel

```bash
vercel login
vercel
vercel env add CONSULTATION_WEBHOOK_URL
vercel --prod
```

Atau hubungkan repo GitHub di [vercel.com/new](https://vercel.com/new).

## Scripts

| Command | Fungsi |
|---------|--------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run generate:og` | Regenerate OG image PNG |