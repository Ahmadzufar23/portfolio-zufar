/* =====================================================
   DATA SITUS — edit di sini saja untuk mengubah konten.
   Lihat README.md di root proyek untuk panduan lengkap.
   ===================================================== */

const site = {
  nama: "Ahmad Zufar Ginting",
  tagline: "Backend Developer & Project Manager",
  bio: 'Mahasiswa Sistem Informasi UPN "Veteran" Jakarta sekaligus ' +
       '<b>Founder PT Zufar Solusi Nawasena</b>. Aku membangun backend yang rapi dan ' +
       'terdokumentasi, lalu memastikan proyeknya sampai ke garis finis sebagai ' +
       'Project Manager. Disiplin seperti samurai: satu tebasan, tepat sasaran.',
  aboutText: 'Mahasiswa Sistem Informasi UPN "Veteran" Jakarta dengan IPK 3.84. Aku ' +
             'membangun backend yang rapi dan terdokumentasi, lalu memastikan produknya ' +
             'sampai rilis sebagai Product/Project Manager. Sehari-hari menjalankan ' +
             'bisnis infrastruktur jaringan sendiri, jadi terbiasa memegang teknis ' +
             'sekaligus operasional dari hulu ke hilir.',
  lokasi: "Jakarta, Indonesia",
  email: "ahmadzufarginting07@gmail.com",
  github: "https://github.com/Ahmadzufar23",
  linkedin: "https://www.linkedin.com/in/ahmad-zufar-ginting-632b5a2b6/",
  instagram: "https://www.instagram.com/ahmdzufarr/",
  cv: "assets/cv/cv-zufar.pdf", // TODO: pemilik akan menaruh file CV di path ini
  photoCutout: "assets/img/foto1-cutout.png", // foto hero utama — PNG transparan (cutout, tanpa background). Belum diunggah = otomatis pakai photoSrc di bawah.
  photoSrc: "assets/img/foto1.jpg", // fallback foto hero kalau photoCutout belum ada — kosong = fallback kanji 侍
  aboutPhoto: "assets/img/foto2.jpg" // foto section Tentang Saya — kosong = fallback kanji 侍
};

/* ---------- Pita berjalan (marquee di bawah hero) ----------
   accent:true memakai warna aksen merah (class .m-red).
   Urutan ini akan diulang oleh JS agar loop-nya mulus.
   ------------------------------------------------------ */
const marqueeItems = [
  { text: "BACKEND DEVELOPMENT", accent: true },
  { text: "侍", accent: false },
  { text: "PROJECT MANAGEMENT", accent: false },
  { text: "侍", accent: false }
];

/* ---------- Tools & Skills (dua grid di #tools) ----------
   group: "backend" | "pm" — menentukan grid mana tempat kartu dirender.
   Ikon: pakai salah satu dari dua field ini per item, tidak keduanya.
     - deviconClass : class ikon dari devicon (sudah dimuat di index.html)
     - iconImg      : path SVG lokal di assets/img/icons/ (dari Simple Icons,
                       dipakai untuk tool yang tidak ada di devicon)
   Kalau keduanya kosong, kartu tetap tampil tanpa ikon (nama saja).
   ------------------------------------------------------ */
const tools = [
  // — Backend —
  { group: "backend", deviconClass: "devicon-nodejs-plain colored", nama: "Node.js", peran: "Backend Runtime" },
  { group: "backend", deviconClass: "devicon-typescript-plain colored", nama: "TypeScript", peran: "Bahasa Utama" },
  { group: "backend", deviconClass: "devicon-express-original", nama: "Express", peran: "Web Framework" },
  { group: "backend", deviconClass: "devicon-postgresql-plain colored", nama: "PostgreSQL", peran: "Database" },
  { group: "backend", iconImg: "assets/img/icons/supabase.svg", nama: "Supabase", peran: "BaaS / DB Hosting" },
  { group: "backend", iconImg: "assets/img/icons/drizzle.svg", nama: "Drizzle ORM", peran: "ORM / Query Builder" },
  { group: "backend", deviconClass: "devicon-docker-plain colored", nama: "Docker", peran: "Containerization" },
  { group: "backend", deviconClass: "devicon-git-plain colored", nama: "Git & GitHub", peran: "Version Control" },
  { group: "backend", deviconClass: "devicon-nextjs-original", nama: "Next.js", peran: "Frontend Framework" },
  { group: "backend", deviconClass: "devicon-kotlin-plain colored", nama: "Kotlin", peran: "Android Dev" },
  { group: "backend", deviconClass: "devicon-java-plain colored", nama: "Java", peran: "OOP Foundation" },
  { group: "backend", deviconClass: "devicon-python-plain colored", nama: "Python", peran: "Data Science" },
  { group: "backend", iconImg: "assets/img/icons/bun.svg", nama: "Bun", peran: "JS Runtime" },
  { group: "backend", iconImg: "assets/img/icons/hono.svg", nama: "Hono", peran: "Web Framework" },

  // — Management —
  { group: "pm", iconImg: "assets/img/icons/notion.svg", nama: "Notion", peran: "Workspace & Docs" },
  { group: "pm", iconImg: "assets/img/icons/googlecalendar.svg", nama: "Google Calendar", peran: "Jadwal & Timeline" },
  { group: "pm", iconImg: "assets/img/icons/googlesheets.svg", nama: "Google Sheets", peran: "Tracking & Laporan" },
  { group: "pm", iconImg: "assets/img/icons/figma.svg", nama: "Figma", peran: "Design & Handoff" },
  { group: "pm", iconImg: "assets/img/icons/jira.svg", nama: "Jira", peran: "Backlog & Sprint" },
  { group: "pm", iconImg: "assets/img/icons/trello.svg", nama: "Trello", peran: "Board Kanban" }
];

/* ---------- Peta ikon stack (dipakai stack proyek di overlay detail) ----------
   Diturunkan otomatis dari `tools` di atas — nama tool jadi key, ikonnya
   dipakai ulang (tidak ada aset baru). Kalau sebuah nama di `stack` suatu
   proyek tidak ketemu di peta ini (mis. "OpenAPI", "Jetpack Compose"),
   render otomatis jatuh ke teks biasa tanpa ikon — tidak error.
   Tambah entri baru di `tools` (dengan deviconClass/iconImg) untuk membuat
   nama itu otomatis punya ikon di stack proyek juga.
   ------------------------------------------------------ */
const techIcons = {};
tools.forEach(t => {
  techIcons[t.nama] = { deviconClass: t.deviconClass, iconImg: t.iconImg };
});

/* ---------- Pengalaman (timeline horizontal di #about) ----------
   Urutan array = urutan tampil (kiri ke kanan, terlama dulu).
   logo: path PNG/SVG di assets/img/experience/ — TODO: file logo belum
   diunggah, jadi fallback otomatis menampilkan inisial perusahaan
   (lihat img.onerror di js/main.js).
   ------------------------------------------------------ */
const experience = [
  {
    company: "PT Zufar Solusi Nawasena",
    role: "Founder & Director",
    period: "Agustus 2023 - Sekarang",
    logo: "assets/img/experience/zsn.png" // TODO: unggah logo PT Zufar Solusi Nawasena
  },
  {
    company: "Veterantech",
    role: "People Operations",
    period: "Maret 2026 - Sekarang",
    logo: "assets/img/experience/veterantech.png" // TODO: unggah logo Veterantech
  },
  {
    company: "Hyungtang",
    role: "Founder, Backend & PM",
    period: "Mei 2026 - Sekarang",
    logo: "assets/img/experience/hyungtang.png" // TODO: unggah logo Hyungtang
  }
];

/* ---------- Proyek ----------
   accent   : kode hex warna aksen halaman detail proyek ini (judul, garis
              impact, panah before→after, tombol Preview Live, dll).
              Kosongkan/hapus field ini untuk pakai fallback merah --shu.
   liveUrl     : link demo / web live (tombol ▶ Preview Live). Kosongkan ("")
                 untuk menyembunyikan tombol — dipakai untuk proyek yang
                 belum rilis.
   repoUrl     : link GitHub. Kosongkan ("") kalau repo tidak boleh publik
                 (mis. proyek client) — tombol GitHub Repo otomatis hilang.
   repoPrivate : true untuk menampilkan badge "Proyek Client — kode tertutup"
                 di tempat tombol GitHub, HANYA berlaku saat repoUrl kosong.
                 Kalau repoUrl kosong dan repoPrivate tidak diset, tidak ada
                 apa pun yang ditampilkan di situ.
   Kalau liveUrl DAN repoUrl sama-sama kosong serta status masih
   "Dalam Pengembangan", overlay otomatis menampilkan badge
   "Dalam Pengembangan" menggantikan kedua tombol.
   shotImg     : path screenshot proyek (opsional). Contoh: "assets/img/projects/safespace.png"
   ------------------------------------------------------ */
const projects = [
  {
    id: "safespace",
    kanji: "安",
    scriptWord: "Aman",
    kanjiWord: "安全な場所 - SAFE PLACE",
    title: "SafeSpace",
    role: "Backend Developer (Solo)",
    year: "2026",
    type: "Capstone - REST API",
    status: "Selesai",
    desc: "Platform pelaporan insiden kampus yang dirancang memberi 1000+ mahasiswa kanal aman melaporkan kekerasan & pelecehan, menggantikan proses manual yang menakutkan korban.",
    about: "SafeSpace adalah backend capstone yang kuselesaikan secara solo, dirancang memberi 1000+ mahasiswa kanal aman untuk melaporkan kekerasan & pelecehan, menggantikan proses manual yang menakutkan korban. Aku membangun fondasi teknis dari nol: arsitektur sistem, model autentikasi, dan kontrol akses yang menjamin kerahasiaan pelapor, terdokumentasi penuh via OpenAPI. 7 fitur menutup seluruh siklus pelaporan: submisi bukti, pelacakan status, notifikasi, ekspor PDF, hingga dashboard admin, agar laporan ditangani tanpa proses manual.",
    impacts: [
      { before: "Tanpa arsitektur & kontrol akses terdokumentasi", after: "Fondasi sistem, autentikasi & kontrol akses kerahasiaan pelapor, terdokumentasi penuh via OpenAPI" },
      { before: "Pelaporan insiden manual, menakutkan korban", after: "7 fitur siklus penuh: submisi bukti, tracking, notifikasi, ekspor PDF, dashboard admin" }
    ],
    stack: ["Express", "TypeScript", "Drizzle ORM", "Supabase", "OpenAPI"],
    accent: "#3E6FA3",
    liveUrl: "https://9npc-safespace.vercel.app/",
    repoUrl: "https://github.com/orgs/Capstone-9NPC/repositories",
    shotImg: "assets/img/projects/safespace.png" // TODO: screenshot belum diunggah, fallback watermark kanji tetap tampil
  },
  {
    id: "haiphysio",
    kanji: "療",
    scriptWord: "Pulih",
    kanjiWord: "理学療法 - PHYSIOTHERAPY",
    title: "Hai Physio",
    role: "Product Lead - Client Project",
    year: "2026",
    type: "Web App - Kesehatan",
    status: "Dalam Pengembangan",
    desc: "Platform klinik fisioterapi end-to-end (booking, rekam pasien, layanan) oleh tim 2 orang. Masih dalam pengembangan.",
    about: "Hai Physio adalah platform klinik fisioterapi end-to-end (booking, rekam pasien, hingga layanan) yang kubangun bersama tim 2 orang. Sebagai Product Lead aku mendefinisikan produk dari nol: PRD lengkap, skema 33 tabel, dan kontrak API 33 endpoint, mengubah alur kerja klinik yang tadinya ambigu menjadi spesifikasi terprioritas dan siap bangun, menjaga klien dan engineering pada satu sumber kebenaran. Proyek ini masih dalam pengembangan.",
    impacts: [
      { before: "Sistem manual, 12 pasien/minggu", after: "PRD lengkap (33 tabel, 33 endpoint API), 31 pasien/minggu (+158%)" },
      { before: "Alur kerja klinik ambigu", after: "Spesifikasi terprioritas & siap bangun, klien & engineering satu sumber kebenaran" }
    ],
    stack: ["Node.js", "Next.js", "PRD & API Contract"],
    accent: "#F5C518",
    liveUrl: "", // TODO: isi setelah rilis (target 2 Agustus)
    repoUrl: "",
    shotImg: ""
  },
  {
    id: "siera",
    kanji: "迎",
    scriptWord: "Orientasi",
    kanjiWord: "新入生歓迎 - STUDENT ORIENTATION",
    title: "SIERA",
    role: "Backend Developer",
    year: "Mar - Jun 2026",
    type: "Sistem Informasi Orientasi Mahasiswa",
    status: "Selesai",
    desc: "Platform orientasi mahasiswa baru untuk 4.500+ mahasiswa UPNVJ.",
    about: "SIERA adalah platform orientasi mahasiswa baru untuk 4.500+ mahasiswa UPNVJ. Aku membangun backend administrasi pengguna (daftar user, kartu ringkasan, kontrol akses) dalam arsitektur RBAC 13 peran, serta menulis spesifikasi API Modul Events dan skema Admin-group agar backend dan frontend bisa bekerja paralel tanpa saling menunggu integrasi.",
    impacts: [
      { before: "Tanpa administrasi pengguna terstruktur", after: "Backend admin pengguna, RBAC 13 peran, akses lintas 4.500+ akun mahasiswa" },
      { before: "Backend & frontend menunggu integrasi", after: "Spesifikasi API Modul Events & skema Admin-group, kerja paralel, tanpa delay integrasi" }
    ],
    stack: ["Bun", "Hono", "Drizzle ORM", "PostgreSQL"],
    accent: "#1F7A54",
    liveUrl: "https://siera.veterantech.id/",
    repoUrl: "",
    repoPrivate: true,
    shotImg: "assets/img/projects/siera.png" // TODO: screenshot belum diunggah, fallback watermark kanji tetap tampil
  },
  {
    id: "sieka",
    kanji: "祭",
    scriptWord: "Acara",
    kanjiWord: "催事管理 - EVENT MANAGEMENT (DESKTOP)",
    title: "SIEKA",
    role: "Project Manager & Backend Developer",
    year: "2025",
    type: "Sistem Informasi Manajemen Event Kampus (Desktop)",
    status: "Selesai",
    desc: "Aplikasi desktop manajemen event kampus yang mengelola siklus lengkap event: pembuatan, pendaftaran, pembayaran, kehadiran, hingga penerbitan sertifikat.",
    about: "SIEKA adalah aplikasi desktop untuk manajemen event kampus, mengelola siklus lengkap dari pembuatan event, pendaftaran, pembayaran, kehadiran, hingga penerbitan sertifikat. Aku merangkap Project Manager dan Backend Developer, merancang arsitektur berlapis (MVC + DAO + Service) dengan 3 peran (Admin, Panitia, Peserta) dan kontrol akses per peran, menggantikan pengelolaan event manual dengan sistem terpusat.",
    impacts: [
      { before: "18 event dikelola manual", after: "43 event, sistem terpusat (+139%)" },
      { before: "Tanpa arsitektur berlapis & kontrol akses peran", after: "Arsitektur MVC + DAO + Service, 3 peran, siklus end-to-end sampai sertifikat otomatis" }
    ],
    stack: ["Java", "Java Swing", "SQLite", "Maven"],
    accent: "#B3852C",
    liveUrl: "",
    repoUrl: "https://github.com/Ahmadzufar23/SIEKA.git",
    shotImg: "assets/img/projects/sieka.png"
  },
  {
    id: "urbancycle",
    kanji: "環",
    scriptWord: "Hijau",
    kanjiWord: "廃棄物管理 - WASTE MANAGEMENT",
    title: "UrbanCycle",
    role: "Android Developer",
    year: "2026",
    type: "Mobile App - Smart Waste",
    status: "Selesai",
    desc: "Aplikasi Android manajemen sampah pintar dengan klasifikasi berbasis TensorFlow Lite.",
    about: "UrbanCycle adalah aplikasi Android untuk manajemen sampah perkotaan yang lebih cerdas. Dibangun dengan Kotlin dan Jetpack Compose, aplikasi ini memakai TensorFlow Lite untuk mengklasifikasikan jenis sampah langsung dari kamera pengguna, menjembatani kebiasaan memilah sampah dengan teknologi yang mudah diakses.",
    impacts: [
      { before: "Pilah sampah manual & bingung", after: "Klasifikasi otomatis via kamera (on-device ML)" },
      { before: "UI XML tradisional", after: "Jetpack Compose, deklaratif & modern" }
    ],
    stack: ["Kotlin", "Jetpack Compose", "TensorFlow Lite", "Android"],
    accent: "#3E6B4F",
    liveUrl: "",
    repoUrl: "https://github.com/Ahmadzufar23/UrbanCycle.git",
    shotImg: "assets/img/projects/urbancycle.png" // TODO: screenshot belum diunggah, fallback watermark kanji tetap tampil
  }
];
