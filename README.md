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
│   ├── img/experience/    (logo perusahaan di timeline Tentang Saya)
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
  accent: "#3E6FA3",
  liveUrl: "https://link-demo-kamu.com",
  repoUrl: "https://github.com/username/repo",
  repoPrivate: false,
  shotImg: "assets/img/projects/proyek-baru.png"
}
```

Taruh file screenshot proyek di `assets/img/projects/`, lalu isi
`shotImg` dengan path relatifnya. Kalau `shotImg` dikosongkan (`""`)
atau filenya belum ada, halaman detail otomatis menampilkan watermark
kanji sebagai gantinya — tidak perlu ubah apa pun di HTML atau JS.

`accent` (opsional) adalah kode hex warna aksen khusus proyek ini —
dipakai di kata highlight judul, garis kotak impact, panah before→after,
tombol Preview Live, dan border/teks "Buka Detail" di kartu grid. Kosongkan
atau hapus field ini kalau proyek belum punya warna aksen; halaman detail
dan kartunya otomatis jatuh ke merah `--shu` seperti default.

`repoUrl` boleh dikosongkan (`""`) untuk proyek yang repo-nya tidak boleh
publik (mis. proyek client) — tombol "GitHub Repo" otomatis hilang dari
halaman detail. Kalau di situasi itu kamu juga set `repoPrivate: true`,
tempat tombol tadi akan menampilkan badge kecil "Proyek Client — kode
tertutup" sebagai gantinya. Kalau `repoUrl` kosong dan `repoPrivate` tidak
diisi/`false`, tidak ada apa pun yang ditampilkan di situ — tombol Preview
Live tidak terpengaruh sama sekali oleh field ini.

Urutan objek dalam array `projects` menentukan urutan tampil kartu
(nomor otomatis 一, 二, 三, ... mengikuti urutan ini).

## 2. Memasang foto, CV, dan link sosial

Semua ada di objek `site` pada bagian atas `js/data.js`:

```js
const site = {
  nama: "Ahmad Zufar Ginting",
  tagline: "Backend Developer × Project Manager",
  bio: "...",                 // boleh pakai <b>teks tebal</b>
  aboutText: "...",           // paragraf naratif singkat di section Tentang Saya (2-4 kalimat)
  lokasi: "JAKARTA, INDONESIA",
  email: "ahmadzufarginting07@gmail.com",
  github: "https://github.com/Ahmadzufar23",
  linkedin: "https://www.linkedin.com/in/ahmad-zufar-ginting-632b5a2b6/",
  instagram: "https://www.instagram.com/ahmdzufarr/",
  cvBackend: "",               // path CV versi Backend, mis. "assets/cv/cv-backend.pdf"
  cvPm: "",                    // path CV versi Project Manager
  photoCutout: "",             // foto utama hero — PNG transparan (background sudah dihapus), tanpa bingkai
  photoSrc: "",                // fallback foto hero kalau photoCutout belum ada — foto biasa (kotak, tanpa crop lengkung)
  aboutPhoto: ""                // foto di section Tentang Saya (terpisah dari foto hero)
};
```

- **Foto profil hero**: idealnya isi `photoCutout` dengan PNG transparan
  (background sudah dihapus) — tampil sebagai cutout bebas tanpa bingkai
  di depan splash tinta. Kalau file itu belum ada/gagal dimuat, otomatis
  jatuh ke `photoSrc` (foto biasa, ditampilkan kotak siku tanpa bingkai
  lengkung). Kalau keduanya kosong, fallback 侍 tetap muncul seperti
  biasa. `aboutPhoto` foto terpisah, khusus untuk section Tentang Saya.
- **CV**: taruh file PDF di `assets/cv/`, lalu isi `cvBackend` /
  `cvPm` dengan path-nya. Field ini disiapkan untuk tombol unduh CV
  bila suatu saat ingin ditambahkan ke tampilan.
- **Link sosial & email**: cukup ganti nilai `github`, `linkedin`,
  `instagram`, dan `email` — otomatis dipakai ulang di social bar
  (bagian atas) dan tombol email di footer.
- **Deskripsi diri**: `aboutText` adalah paragraf pengantar yang tampil
  di section Tentang Saya, di atas timeline pengalaman.

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

### Ikon stack di halaman detail proyek

Field `stack` tiap proyek (lihat bagian 1) juga tampil dengan ikon di
halaman detail (overlay), bukan cuma teks. Ikonnya diambil dari peta
`techIcons` di `js/data.js`, yang dibuat **otomatis** dari array `tools`
di atas — nama tool (`nama`) jadi key, `deviconClass`/`iconImg`-nya
dipakai ulang:

```js
const techIcons = {};
tools.forEach(t => {
  techIcons[t.nama] = { deviconClass: t.deviconClass, iconImg: t.iconImg };
});
```

Artinya: kalau sebuah tool sudah ada di array `tools`, otomatis dapat
ikon juga saat namanya dipakai di `stack` proyek manapun — tidak perlu
daftar ikon terpisah. Kalau nama di `stack` tidak ketemu di `tools`
(mis. `"OpenAPI"`, `"Jetpack Compose"`, label generik seperti
`"Scope Definition"`), tampilannya otomatis jatuh ke teks biasa tanpa
ikon — tidak error, tidak perlu ikon baru.

## 4. Section Tentang Saya (deskripsi, timeline, foto)

Section `#about` punya dua kolom: kiri berisi paragraf deskripsi diri
(`site.aboutText`) diikuti timeline pengalaman horizontal, kanan berisi
foto (`site.aboutPhoto`, lihat bagian 2) yang tingginya otomatis
menyamai kolom kiri.

Timeline pengalaman dirender dari array `experience` di `js/data.js`:

```js
const experience = [
  {
    company: "Nama Perusahaan",
    role: "Peranmu di sana",
    period: "Bulan Tahun — Sekarang",   // atau "Bulan Tahun — Bulan Tahun"
    logo: "assets/img/experience/nama-file.png"
  },
  // ...
];
```

- Urutan array = urutan tampil dari kiri ke kanan. Saat ini diurutkan
  dari yang **terlama ke terbaru**.
- `logo`: taruh file logo perusahaan di `assets/img/experience/`. Kalau
  filenya belum ada/gagal dimuat, tampilan otomatis jatuh ke kotak
  berisi inisial perusahaan (mis. "ZSN") — tidak perlu ubah apa pun di
  HTML/JS.
- Di layar sempit (mobile), timeline otomatis bertumpuk vertikal dan
  foto pindah ke bawah deskripsi/timeline.

## 5. Mengubah warna

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

## 6. Deploy

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

## 7. Animasi

Atas keputusan sadar pemilik, semua animasi visual (pita berjalan
`.marquee-track`, denyut hinomaru `.hinomaru`, reveal-on-scroll `.reveal`,
efek hover) berjalan untuk semua pengunjung tanpa syarat — tidak ada
gerbang `prefers-reduced-motion` dan tidak ada toggle `?motion=on` lagi.

Hero mendapat animasi masuk begitu halaman siap (tanpa perlu scroll):
eyebrow → nama → bio → sosial → stats → tombol muncul berurutan
fade-up dengan stagger, foto dan hinomaru ikut fade-in. Section
lainnya (About, Tools, Proyek, Footer) memakai reveal-on-scroll —
elemen dengan class `.reveal` (opsional `data-delay="N"` untuk stagger)
di-observe oleh `js/reveal.js` dan diberi class `.is-visible` setiap kali
masuk viewport, dan class itu dilepas lagi saat elemen keluar viewport
sepenuhnya — jadi animasinya replay tiap kali discroll ulang, bukan
sekali seumur hidup halaman.

Marquee (`.marquee-track`) dirender dua grup konten identik dan
digeser `translateX(-50%)`; setiap `span` punya `margin-right` seragam
(bukan `gap`/margin dua sisi) supaya jarak di titik sambungan grup
persis sama dengan jarak antar item lain — ini yang membuat loop-nya
benar-benar mulus tanpa lompatan di seam.

## 8. Tema visual "washi & tinta sumi-e"

- **Tekstur kertas**: `body` dan `.projects` punya dua layar
  `background-image` (noise SVG + speckle SVG, keduanya di
  `css/tokens.css` sebagai `--washi-noise` / `--washi-speckle`)
  di-blend `multiply` di atas warna washi. Sangat subtle — jangan
  naikkan opacity di dalam SVG itu tanpa alasan kuat, tujuannya cuma
  terasa sebagai serat kertas, bukan pola yang mencolok.
- **Splash tinta hero**: SVG organik (`feTurbulence` + `feDisplacementMap`
  pada blob path) di `.hero-splash`, ditaruh sebagai anak pertama
  `.portrait-wrap` supaya tampil di belakang hinomaru + foto. Ini
  pusat drama visual situs — jangan digandakan di section lain.
- **Ink fleck**: aksen kecil di sudut About & Proyek, pakai `<symbol
  id="inkFleck">` yang didefinisikan sekali di awal `<body>` lalu
  dipakai ulang lewat `<use>` dengan class `.ink-fleck--*` untuk
  posisi/rotasi berbeda tiap instance.
- **Divider antar-section**: `.section-divider` (sapuan kuas horizontal,
  `<symbol id="brushDivider">`) dipasang di antara About→Tools,
  Tools→Proyek, dan Proyek→Footer. Hero→About tetap memakai marquee
  sebagai satu-satunya pembatas — jangan tambah divider di situ.
