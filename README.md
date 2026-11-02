# HAUSER BUILD — firemný web

Statický web pre HAUSER BUILD s.r.o. — interiérové, exteriérové a dekoratívne omietky.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Static export (`output: "export"`)
- Kontaktný formulár: [Web3Forms](https://web3forms.com/) (client-side)

## Spustenie

```bash
npm install
cp .env.example .env.local
# doplňte NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
npm run dev
```

## Production build

```bash
npm run build
```

Výstup: `out/`

## Kde upraviť obsah

| Súbor | Obsah |
|---|---|
| `lib/site.ts` | Firma, telefón, e-mail, adresa, URL |
| `lib/services.ts` | Texty služieb |
| `lib/projects.ts` | Galéria |
| `lib/about.ts` | O nás |
| `.env.local` | Web3Forms Access Key |

## GitHub Pages

Push na `main` spustí deploy cez `.github/workflows/deploy.yml`.

Lokálny build so subpath (ako na Pages):

```bash
# PowerShell
$env:BASE_PATH="/Tonhauser"; $env:NEXT_PUBLIC_BASE_PATH="/Tonhauser"; $env:NEXT_PUBLIC_SITE_URL="https://USER.github.io/Tonhauser"; npm.cmd run build
```

Po vytvorení repozitára: **Settings → Pages → Source: GitHub Actions**.
