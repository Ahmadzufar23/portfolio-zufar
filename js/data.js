/* =====================================================
   DATA SITUS — edit di sini saja untuk mengubah konten.
   Lihat README.md di root proyek untuk panduan lengkap.
   ===================================================== */

const site = {
  nama: "Ahmad Zufar Ginting",
  tagline: "Backend Developer & Project Manager",
  bio: 'Mahasiswa Sistem Informasi UPN "Veteran" Jakarta dan pendiri ' +
       '<b>PT Zufar Solusi Nawasena</b>. Saya fokus di backend dan terbiasa ' +
       'memimpin proyek dari perencanaan sampai rilis.',
  aboutText: 'Mahasiswa Sistem Informasi UPN "Veteran" Jakarta dengan IPK 3,84. Saya ' +
             'membangun backend dengan Node.js dan TypeScript, dan beberapa kali memegang ' +
             'peran Project Manager di proyek kampus maupun klien. Sejak 2023 saya juga ' +
             'menjalankan usaha infrastruktur jaringan sendiri, jadi terbiasa mengurus ' +
             'sisi teknis dan operasional sekaligus.',
  lokasi: "Jakarta, Indonesia",
  email: "ahmadzufarginting07@gmail.com",
  github: "https://github.com/Ahmadzufar23",
  linkedin: "https://www.linkedin.com/in/ahmad-zufar-ginting-632b5a2b6/",
  instagram: "https://www.instagram.com/ahmdzufarr/",
  cv: "https://drive.google.com/file/d/1nmCSU3lHqquY1qwov8OBiKu8MckIF5j6/view?usp=sharing", // link Google Drive CV
  photoCutout: "assets/img/foto1-cutout.png", // foto hero utama — PNG transparan (cutout, tanpa background). Belum diunggah = otomatis pakai photoSrc di bawah.
  photoSrc: "assets/img/foto1.jpg", // fallback foto hero kalau photoCutout belum ada — kosong = fallback kanji 侍
  aboutPhoto: "assets/img/foto2.jpg" // foto section Tentang Saya — kosong = fallback kanji 侍
};

/* ---------- Statistik di sisi kanan hero ----------
   num   : angka besar (pakai koma untuk desimal, mis. "3,84").
   label : keterangan kecil di bawah angka.
   ------------------------------------------------------ */
const stats = [
  { num: "10+", label: "Proyek selesai" },
  { num: "3,84", label: "IPK Sistem Informasi" },
  { num: "2", label: "Fokus karier: Backend & PM" }
];

/* ---------- Teks antarmuka (label, tombol, footer) ----------
   Teks kecil yang bukan milik satu proyek/pengalaman tertentu.
   ------------------------------------------------------ */
const ui = {
  toolsBackend: "Backend",
  toolsPm: "Manajemen Proyek",
  contactTitle: "Mari Berkolaborasi.",
  contactText: "Terbuka untuk peran Backend Developer maupun Project Manager. Silakan hubungi saya lewat email.",
  footerLine: "© 2026 Ahmad Zufar Ginting · Jakarta",
  // halaman detail proyek (overlay)
  labelRole: "Peran",
  labelYear: "Tahun",
  labelType: "Jenis",
  labelStatus: "Status",
  labelAbout: "Tentang Proyek",
  labelImpact: "Dampak: sebelum → sesudah",
  btnLive: "Lihat Situs",
  btnRepo: "Kode di GitHub",
  badgePrivate: "Proyek klien, kode tidak dipublikasikan",
  badgeDev: "Masih dalam pengembangan"
};

/* ---------- Teks dekoratif bernuansa Jepang ----------
   heroVertical : tulisan vertikal (tategaki) di tepi kiri hero, desktop saja.
   photoSeal    : 1–2 kanji di cap merah (hanko) pojok foto Tentang Saya.
                  Kosongkan ("") untuk menyembunyikan cap.
   ------------------------------------------------------ */
const decor = {
  heroVertical: "武士道 ・ 一刀入魂",
  photoSeal: "侍"
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
   period: pakai tanda – (en dash) di antara dua tanggal, bukan "-".
   type  : label jenis kecil di samping periode, mis. "Full-time",
           "Organisasi", "Tim Independen". Kosongkan untuk menyembunyikan.
   url   : situs resmi perusahaan/organisasi. Kalau diisi, logo + nama jadi
           link (tab baru) dengan tanda ↗. Kosongkan ("") kalau belum ada.
   logo: path PNG/SVG di assets/img/experience/. Kalau file tidak ada,
   otomatis tampil inisial perusahaan (lihat img.onerror di js/main.js).
   ------------------------------------------------------ */
const experience = [
  {
    company: "PT Zufar Solusi Nawasena",
    role: "Founder & Director",
    period: "Agustus 2023 – Sekarang",
    type: "Perusahaan Sendiri",
    url: "", // TODO: isi alamat situs PT Zufar Solusi Nawasena
    logo: "assets/img/experience/zsn.png"
  },
  {
    company: "Veterantech",
    role: "People Operations",
    period: "Maret 2026 – Sekarang",
    type: "Organisasi",
    url: "https://veterantech.id/",
    logo: "assets/img/experience/veterantech.png"
  },
  {
    company: "Hyungtang",
    role: "Founder, Backend Developer & PM",
    period: "Mei 2026 – Sekarang",
    type: "Tim Independen",
    url: "",
    logo: "assets/img/experience/hyungtang.png"
  },
  {
    company: "PT Prismatama Cipta Teknologi",
    role: "Fullstack Developer",
    period: "September 2026 – Sekarang",
    type: "Full-time",
    url: "", // TODO: isi alamat company profile PT Prismatama Cipta Teknologi
    logo: "assets/img/experience/pct.png"
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
   repoPrivate : true untuk menampilkan badge ui.badgePrivate
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
    kanjiWord: "安全な場所 · SAFE PLACE",
    title: "SafeSpace",
    role: "Backend Developer (Solo)",
    year: "2026",
    type: "Capstone · REST API",
    status: "Selesai",
    desc: "Backend platform pelaporan kekerasan dan pelecehan di kampus, dirancang untuk melayani 1.000+ mahasiswa.",
    about: "SafeSpace adalah backend platform pelaporan kekerasan dan pelecehan di kampus, proyek capstone yang saya kerjakan sendiri. Saya merancang arsitektur, autentikasi, dan kontrol akses agar identitas pelapor tetap rahasia, lalu mendokumentasikan seluruh API dengan OpenAPI. Ada 7 fitur, mulai dari unggah bukti dan pelacakan status sampai ekspor PDF dan dashboard admin.",
    impacts: [
      { before: "Laporan insiden diproses manual", after: "Alur laporan lengkap dalam 7 fitur, dari unggah bukti sampai dashboard admin" },
      { before: "Kerahasiaan pelapor sulit dijaga", after: "Autentikasi dan kontrol akses per peran, seluruh API terdokumentasi dengan OpenAPI" }
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
    kanjiWord: "理学療法 · PHYSIOTHERAPY",
    title: "Hai Physio",
    role: "Product Lead · Proyek Klien",
    year: "2026",
    type: "Web App · Kesehatan",
    status: "Dalam Pengembangan",
    desc: "Platform klinik fisioterapi untuk booking, rekam medis pasien, dan layanan. Dikerjakan tim 2 orang, masih dalam pengembangan.",
    about: "Hai Physio adalah platform klinik fisioterapi untuk booking, rekam medis pasien, dan layanan, yang saya kerjakan bersama tim 2 orang. Sebagai Product Lead, saya menyusun PRD, merancang skema database 33 tabel, dan menulis kontrak API untuk 33 endpoint. Dokumen ini menjadi acuan bersama antara klien dan tim engineering. Proyek masih dalam pengembangan.",
    impacts: [
      { before: "Alur kerja klinik belum terdokumentasi", after: "PRD lengkap dengan prioritas fitur yang jelas" },
      { before: "Belum ada acuan teknis bersama", after: "Skema 33 tabel dan kontrak 33 endpoint API sebagai acuan klien dan engineering" }
    ],
    stack: ["Node.js", "Next.js", "PRD & Kontrak API"],
    accent: "#F5C518",
    liveUrl: "", // isi setelah rilis
    repoUrl: "",
    shotImg: ""
  },
  {
    id: "siera",
    kanji: "迎",
    scriptWord: "Orientasi",
    kanjiWord: "新入生歓迎 · STUDENT ORIENTATION",
    title: "SIERA",
    role: "Backend Developer",
    year: "Mar–Jun 2026",
    type: "Sistem Informasi Orientasi Mahasiswa",
    status: "Selesai",
    desc: "Platform orientasi mahasiswa baru UPNVJ yang dipakai 4.500+ mahasiswa.",
    about: "SIERA adalah platform orientasi mahasiswa baru UPNVJ untuk 4.500+ mahasiswa. Saya membangun backend administrasi pengguna, termasuk daftar pengguna, kartu ringkasan, dan kontrol akses berbasis 13 peran (RBAC). Saya juga menulis spesifikasi API untuk modul Events dan skema Admin-group, sehingga tim backend dan frontend bisa bekerja paralel.",
    impacts: [
      { before: "Data pengguna belum dikelola terpusat", after: "Backend administrasi pengguna dengan RBAC 13 peran untuk 4.500+ akun" },
      { before: "Frontend harus menunggu backend selesai", after: "Spesifikasi API modul Events dan Admin-group, kedua tim bisa bekerja paralel" }
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
    kanjiWord: "催事管理 · EVENT MANAGEMENT",
    title: "SIEKA",
    role: "Project Manager & Backend Developer",
    year: "2025",
    type: "Sistem Informasi Manajemen Event Kampus (Desktop)",
    status: "Selesai",
    desc: "Aplikasi desktop untuk mengelola event kampus, mulai dari pendaftaran, pembayaran, dan kehadiran sampai penerbitan sertifikat.",
    about: "SIEKA adalah aplikasi desktop untuk mengelola event kampus, mulai dari pembuatan event, pendaftaran, pembayaran, dan kehadiran sampai penerbitan sertifikat. Saya merangkap Project Manager dan Backend Developer. Saya merancang arsitektur berlapis (MVC, DAO, dan Service) dengan tiga peran pengguna, yaitu Admin, Panitia, dan Peserta, masing-masing dengan hak akses sendiri.",
    impacts: [
      { before: "18 event dikelola manual", after: "43 event dikelola dalam satu sistem (+139%)" },
      { before: "Pendaftaran sampai sertifikat diurus terpisah", after: "Satu alur dari pendaftaran sampai sertifikat otomatis, dengan hak akses per peran" }
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
    kanjiWord: "廃棄物管理 · WASTE MANAGEMENT",
    title: "UrbanCycle",
    role: "Android Developer",
    year: "2026",
    type: "Aplikasi Android · Pengelolaan Sampah",
    status: "Selesai",
    desc: "Aplikasi Android untuk membantu memilah sampah, dengan klasifikasi jenis sampah lewat kamera menggunakan TensorFlow Lite.",
    about: "UrbanCycle adalah aplikasi Android untuk membantu pengguna memilah sampah. Aplikasi ini dibangun dengan Kotlin dan Jetpack Compose, dan memakai model TensorFlow Lite untuk mengenali jenis sampah langsung dari kamera. Klasifikasi berjalan di perangkat, tanpa perlu mengirim foto ke server.",
    impacts: [
      { before: "Pengguna sering ragu menentukan jenis sampah", after: "Klasifikasi otomatis dari kamera, diproses langsung di perangkat" }
    ],
    stack: ["Kotlin", "Jetpack Compose", "TensorFlow Lite", "Android"],
    accent: "#3E6B4F",
    liveUrl: "",
    repoUrl: "https://github.com/Ahmadzufar23/UrbanCycle.git",
    shotImg: "assets/img/projects/urbancycle.png" // TODO: screenshot belum diunggah, fallback watermark kanji tetap tampil
  }
];
