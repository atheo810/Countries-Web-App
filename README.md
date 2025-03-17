# Atlasia — Countries Web App

Jelajahi profil setiap negara di dunia: populasi, ibu kota, region, dan bendera — dalam satu tempat yang gampang dijelajahi.

Dibangun dengan **React + Vite**, di-styling dengan **Tailwind CSS v4**

## Fitur

- Cari negara berdasarkan nama
- Filter negara berdasarkan region (Africa, Americas, Asia, Europe, Oceania)
- Kombinasi search + filter region sekaligus
- Halaman terpisah: Home (landing), Explore (pencarian + grid negara), About
- Tampilan responsif, dioptimasi untuk mobile
- Tema visual "atlas/kartografi" custom dengan Tailwind

## Tech Stack

| Kebutuhan | Tools |
|---|---|
| Framework | React 19 + Vite |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Routing | react-router-dom |
| Data negara | [REST Countries API](https://restcountries.com) (v5) |
| Hosting | Cloudflare Pages |

## Menjalankan Secara Lokal

### 1. Clone & install dependencies

```bash
git clone https://github.com/atheo810/Countries-Web-App.git
cd Countries-Web-App
npm install
```

### 2. Dapatkan API key REST Countries

Project ini pakai [REST Countries API v5](https://restcountries.com), yang mengharuskan API key gratis.

1. Sign up di [restcountries.com/sign-up](https://restcountries.com/sign-up)
2. Buat API key di [restcountries.com/api-keys](https://restcountries.com/api-keys)
3. Di pengaturan key tersebut, isi **CORS Allowed Origins** dengan hostname polos (tanpa `http://`, tanpa port):
   ```
   localhost
   ```
   Kalau sudah deploy ke Cloudflare Pages, tambahkan juga hostname production-nya, dipisah koma, misal:
   ```
   localhost, atlasia.pages.dev
   ```

### 3. Setup environment variable

Buat file `.env` di root project:

```env
VITE_RESTCOUNTRIES_API_KEY=api_key_kamu_di_sini
```

> ⚠️ Jangan commit file `.env` ke git — pastikan sudah ada di `.gitignore`.

### 4. Jalankan dev server

```bash
npm run dev
```

Buka [http://localhost:5173](http://localhost:5173) di browser.

## Struktur Project

```
src/
├── api/
│   ├── client.js       # wrapper fetch dasar + autentikasi API key
│   └── countries.js    # fungsi pencarian negara (search + filter region)
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx         # form search + filter region
│   ├── CountryList.jsx  # grid hasil pencarian (loading/error/empty state)
│   ├── CountryCard.jsx  # satu kartu negara
│   └── Footer.jsx
├── hooks/
│   └── useCountries.js  # custom hook: fetch + loading + error state
├── pages/
│   ├── Home.jsx         # landing page
│   ├── Explore.jsx      # halaman pencarian negara
│   └── About.jsx        # tentang project
├── App.jsx              # routing utama
├── main.jsx             # entry point + router provider
└── index.css            # import Tailwind + theme tokens
```

## Build untuk Production

```bash
npm run build
```

Output ada di folder `dist/`.

## Sumber Data

Data negara disediakan oleh [REST Countries API](https://restcountries.com) — 250+ negara dengan 90+ field, di-update berkala.

## Lisensi

Bebas dipakai untuk keperluan belajar.