// Proyek dari CV. Field bernilai null/kosong disembunyikan otomatis.
// Gambar (opsional): taruh di public/assets/projects/ lalu isi `image` dan `imageAlt`.
// Tanpa gambar, kartu menampilkan visual gradien berisi `badge` atau ikon.
export const projects = [
  {
    id: 'talentlink-campus',
    placeholder: false,
    title: 'TalentLink Campus',
    summary:
      'Digital Worker untuk kampus yang mencari, menilai, dan merekomendasikan mahasiswa untuk riset dosen dan tim lomba. Setiap rekomendasi menunjuk ke bukti yang bisa dibuka, dan setiap tindakan menunggu persetujuan manusia.',
    image: null,
    imageAlt: '',
    badge: 'Juara 1 Hackathon PENS 2026',
    tech: ['TypeScript', 'Next.js', 'React', 'Digital Worker'],
    status: null,
    role: null,
    features: [
      'Rekomendasi mahasiswa untuk riset dosen dan tim lomba',
      'Setiap rekomendasi disertai bukti yang bisa dibuka',
      'Setiap tindakan menunggu persetujuan manusia',
    ],
    github: 'https://github.com/rifqimaulanaakbar22/TalentLink-Campus',
    demo: null,
  },
  {
    id: 'ppdb-sma-padang',
    placeholder: false,
    title: 'Sistem PPDB SMA Kota Padang',
    summary:
      'Aplikasi web PPDB dengan pencarian dan filter sekolah, pemetaan lokasi serta zonasi interaktif, manajemen pengguna/admin, dan formulir pendaftaran untuk berbagai jalur penerimaan.',
    image: null,
    imageAlt: '',
    badge: 'PPDB',
    tech: ['PHP 8', 'MySQL/MariaDB', 'Bootstrap 5', 'JavaScript', 'Leaflet JS'],
    status: null,
    role: null,
    features: [
      'Pencarian dan filter sekolah',
      'Peta lokasi dan zonasi interaktif (Leaflet JS)',
      'Manajemen pengguna dan admin',
      'Formulir pendaftaran berbagai jalur penerimaan',
    ],
    github: 'https://github.com/rifqimaulanaakbar22/PPDBSMA',
    demo: null,
  },
  {
    id: 'manajemen-acara-hmj-tekinfo',
    placeholder: false,
    title: 'Sistem Manajemen Acara HMJ-TEKINFO',
    summary:
      'Sistem informasi berbasis web untuk mendukung administrasi dan kegiatan organisasi mahasiswa, dibangun dengan arsitektur modular yang memisahkan konfigurasi, layout, halaman, dan assets.',
    image: null,
    imageAlt: '',
    badge: 'HMJ-TEKINFO',
    tech: ['PHP Native', 'MySQL/MariaDB', 'HTML5', 'CSS3', 'Apache', 'Git/GitHub'],
    status: null,
    role: null,
    features: [
      'Autentikasi pengguna',
      'Manajemen data anggota (CRUD)',
      'Pencatatan presensi kegiatan dan rapat',
      'Dashboard statistik dan modul dokumentasi kegiatan',
    ],
    github: 'https://github.com/rifqimaulanaakbar22/PBL',
    demo: null,
  },
]
