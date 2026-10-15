# Portofolio Rifqi Maulana Akbar

React + Vite + Tailwind CSS + Lucide Icons.

## Menjalankan
```bash
npm install
npm run dev      # pengembangan
npm run build    # build produksi (hasil di dist/)
npm run preview  # cek hasil build
```

## Mengubah konten (semua di src/data/)
- `profile.js`: nama, headline, foto, email, teks Tentang
- `projects.js`: proyek (gambar di public/assets/projects/)
- `skills.js`, `journey.js`, `education.js`, `certificates.js`
- Foto profil: ganti file di `public/assets/profile/` lalu ubah path di `profile.js`
- Judul halaman dan meta: `index.html`

## Deploy ke Vercel
Framework Preset: Vite, Build Command: `npm run build`, Output Directory: `dist`.
Tidak ada environment variable yang dibutuhkan.
