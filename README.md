# Portofolio Ahmad Zufar Ginting

Situs statis (HTML/CSS/JS murni, tanpa framework, tanpa build step).
Semua konten yang bisa diedit pemilik ada di satu file: `js/data.js`.

## Struktur folder

```
├── index.html            (markup halaman)
├── css/
│   ├── tokens.css        (variabel warna & font)
│   ├── layout.css        (reset, navbar, hero, section, footer, rail)
│   ├── components.css    (tombol, kartu proyek, marquee, tools, hero social, dropdown CV)
│   └── overlay.css        (halaman detail proyek)
├── js/
│   ├── data.js           (KONTEN — edit di sini)
│   └── main.js           (render + interaksi, jangan diedit kecuali menambah fitur)
├── assets/
│   ├── img/               (foto profil, kamon.svg)
│   ├── img/projects/      (screenshot tiap proyek)
│   ├── img/icons/         (ikon Simple Icons untuk tool yang tak ada di devicon)
│   └── cv/                (file CV/PDF)
└── zufar-portfolio.html  (versi referensi/pembanding — jangan dihapus)
```

## 1. Menambah proyek baru

Buka `js/data.js`, cari array `projects`, lalu tambahkan objek baru
mengikuti pola yang sudah ada, misalnya:

```js
{
  id: "proyek-baru",
  kanji: "新",                         // satu karakter kanji untuk watermark kartu
  scriptWord: "Baru",                  // kata coretan tangan di halaman detail
  kanjiWord: "新しいプロジェクト — NEW PROJECT",
  title: "Nama Proyek",
  role: "Peranmu di proyek ini",
  year: "2026",
  type: "Jenis proyek",
  status: "Selesai",                   // atau "Dalam Pengembangan"
  desc: "Deskripsi singkat untuk kartu (1-2 kalimat).",
  about: "Deskripsi panjang untuk halaman detail.",
  impacts: [
    { before: "Kondisi sebelum", after: "Hasil sesudah" }
  ],
  stack: ["Teknologi1", "Teknologi2"],
  liveUrl: "https://link-demo-kamu.com",
  repoUrl: "https://github.com/username/repo",
  shotImg: "assets/img/projects/proyek-baru.png"
}
```

Taruh file screenshot proyek di `assets/img/projects/`, lalu isi
`shotImg` dengan path relatifnya. Kalau `shotImg` dikosongkan (`""`),
halaman detail otomatis menampilkan watermark kanji sebagai gantinya —
tidak perlu ubah apa pun di HTML atau JS.

Urutan objek dalam array `projects` menentukan urutan tampil kartu
(nomor otomatis 一, 二, 三, ... mengikuti urutan ini).

## 2. Memasang foto, CV, dan link sosial

Semua ada di objek `site` pada bagian atas `js/data.js`:

```js
const site = {
  nama: "Ahmad Zufar Ginting",
  tagline: "Backend Developer × Project Manager",
  bio: "...",                 // boleh pakai <b>teks tebal</b>
  lokasi: "JAKARTA, INDONESIA",
  email: "ahmadzufarginting07@gmail.com",
  github: "https://github.com/Ahmadzufar23",
  linkedin: "https://www.linkedin.com/in/ahmad-zufar-ginting-632b5a2b6/",
  instagram: "https://www.instagram.com/ahmdzufarr/",
  cvBackend: "",               // path CV versi Backend, mis. "assets/cv/cv-backend.pdf"
  cvPm: "",                    // path CV versi Project Manager
  photoSrc: ""                 // path foto profil, mis. "assets/img/foto-zufar.jpg"
};
```

- **Foto profil**: taruh file foto di `assets/img/`, lalu isi `photoSrc`
  dengan path-nya (mis. `"assets/img/foto-zufar.jpg"`). Kalau
  dikosongkan, tampilan fallback 侍 tetap muncul seperti sekarang.
- **CV**: taruh file PDF di `assets/cv/`, lalu isi `cvBackend` /
  `cvPm` dengan path-nya. Field ini disiapkan untuk tombol unduh CV
  bila suatu saat ingin ditambahkan ke tampilan.
- **Link sosial & email**: cukup ganti nilai `github`, `linkedin`,
  `instagram`, dan `email` — otomatis dipakai ulang di social bar
  (bagian atas) dan tombol email di footer.

## 3. Menambah/mengubah Tools & Skills

Seksi Tools tampil sebagai dua grid berlabel ("BACKEND —" dan
"MANAGEMENT —"), keduanya dirender dari satu array `tools` di
`js/data.js`:

```js
const tools = [
  { group: "backend", deviconClass: "devicon-nodejs-plain colored", nama: "Node.js", peran: "Backend Runtime" },
  { group: "backend", iconImg: "assets/img/icons/drizzle.svg", nama: "Drizzle ORM", peran: "ORM / Query Builder" },
  { group: "pm", iconImg: "assets/img/icons/notion.svg", nama: "Notion", peran: "Workspace & Docs" },
  // ...
];
```

- `group`: `"backend"` masuk grid BACKEND, `"pm"` masuk grid MANAGEMENT.
- Ikon — pakai **salah satu** dari dua field berikut per item:
  - `deviconClass`: nama class dari [devicon](https://devicon.dev/) untuk
    tool yang tersedia di sana (mis. `"devicon-docker-plain colored"`).
  - `iconImg`: path ke file SVG lokal di `assets/img/icons/` untuk tool
    yang tidak ada di devicon. Unduh ikon resminya dari
    [Simple Icons](https://simpleicons.org/) — file mentahnya polos
    (tanpa warna), jadi tambahkan atribut `fill="#kodewarnabrand"` pada
    tag `<svg>` sebelum disimpan supaya warnanya sesuai brand asli.
  - Kalau keduanya dikosongkan, kartu tetap tampil tanpa ikon (nama saja).
- `peran`: sub-label singkat di bawah nama tool.

Urutan item dalam array menentukan urutan tampil di dalam grid
masing-masing kelompok.

## 4. Mengubah warna

Semua warna diatur lewat variabel di `css/tokens.css`:

```css
:root{
  --washi:#F6F2EA;      /* putih kertas washi (background) */
  --sumi:#121212;       /* hitam tinta sumi (teks utama) */
  --shu:#BC002D;        /* merah hinomaru (aksen utama) */
  --shu-bright:#E3123B; /* merah terang (hover/aksen overlay) */
  --ink-gray:#6E6A63;   /* abu-abu untuk teks sekunder */
  ...
}
```

Ubah nilai hex di sana saja — seluruh halaman (navbar, tombol, kartu,
overlay) otomatis ikut berubah karena semua file CSS memakai variabel
yang sama.

## 5. Deploy

### GitHub Pages
1. Push seluruh isi folder ini ke repository GitHub.
2. Buka **Settings → Pages**.
3. Pada **Source**, pilih branch `main` dan folder `/ (root)`.
4. Simpan — situs akan tersedia di `https://username.github.io/nama-repo/`.

### Vercel
1. Import repository ini di [vercel.com/new](https://vercel.com/new).
2. Framework preset pilih **Other** (situs statis, tanpa build step).
3. Biarkan *Build Command* dan *Output Directory* kosong/default.
4. Klik **Deploy** — Vercel otomatis menyajikan `index.html` sebagai halaman utama.

Karena tidak ada proses build, kedua platform hanya perlu men-serve
file apa adanya.

## 6. Menguji animasi saat mode reduce-motion aktif (dev toggle)

Situs ini menghormati preferensi aksesibilitas `prefers-reduced-motion`
milik pengunjung: kalau OS/browser diset "kurangi gerakan", animasi pita
berjalan (`.marquee-track`) dan denyut hinomaru (`.hinomaru`) otomatis
dimatikan. Ini disengaja dan tidak boleh dihapus.

Kalau kamu sedang mengembangkan di perangkat yang settingnya sendiri
"kurangi gerakan", tanpa perlu mengubah setelan OS, buka situs dengan
parameter berikut untuk memaksa animasi tetap berjalan hanya di sesi
browser itu:

```
index.html?motion=on
```

Ini menambahkan class `force-motion` ke `<body>` (lihat `js/main.js`)
yang meng-override aturan reduce-motion khusus untuk pita berjalan dan
hinomaru. Pengunjung biasa yang tidak memakai parameter ini tetap
mendapat perilaku default yang menghormati preferensi mereka.
