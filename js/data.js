/* =====================================================
   DATA SITUS — edit di sini saja untuk mengubah konten.
   Lihat README.md di root proyek untuk panduan lengkap.
   ===================================================== */

const site = {
  nama: "Ahmad Zufar Ginting",
  tagline: "Backend Developer × Project Manager",
  bio: 'Mahasiswa Sistem Informasi UPN "Veteran" Jakarta sekaligus ' +
       '<b>Founder PT Zufar Solusi Nawasena</b>. Aku membangun backend yang rapi dan ' +
       'terdokumentasi, lalu memastikan proyeknya sampai ke garis finis sebagai ' +
       'Project Manager. Disiplin seperti samurai: satu tebasan, tepat sasaran.',
  lokasi: "JAKARTA, INDONESIA",
  email: "ahmadzufarginting07@gmail.com",
  github: "https://github.com/Ahmadzufar23",
  linkedin: "https://www.linkedin.com/in/ahmad-zufar-ginting-632b5a2b6/",
  instagram: "https://www.instagram.com/ahmdzufarr/",
  cvBackend: "assets/cv/cv-backend.pdf", // TODO: ganti dengan file CV Backend Developer asli
  cvPm: "assets/cv/cv-pm.pdf", // TODO: ganti dengan file CV Project Manager asli
  photoSrc: ""
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

/* ---------- Proyek ----------
   accent   : kode hex warna aksen halaman detail proyek ini (judul, garis
              impact, panah before→after, tombol Preview Live, dll).
              Kosongkan/hapus field ini untuk pakai fallback merah --shu.
   liveUrl     : link demo / web live (tombol ▶ Preview Live)
   repoUrl     : link GitHub. Kosongkan ("") kalau repo tidak boleh publik
                 (mis. proyek client) — tombol GitHub Repo otomatis hilang.
   repoPrivate : true untuk menampilkan badge "Proyek Client — kode tertutup"
                 di tempat tombol GitHub, HANYA berlaku saat repoUrl kosong.
                 Kalau repoUrl kosong dan repoPrivate tidak diset, tidak ada
                 apa pun yang ditampilkan di situ.
   shotImg     : path screenshot proyek (opsional). Contoh: "assets/img/projects/safespace.png"
   ------------------------------------------------------ */
const projects = [
  {
    id: "safespace",
    kanji: "安",
    scriptWord: "Aman",
    kanjiWord: "安全な場所 — SAFE PLACE",
    title: "SafeSpace",
    role: "Backend Developer (Solo)",
    year: "2026",
    type: "Capstone — REST API",
    status: "Selesai",
    desc: "Backend capstone yang kukerjakan sendirian dari nol: 7 fitur penuh dengan dokumentasi OpenAPI lengkap.",
    about: "SafeSpace adalah backend capstone yang kuselesaikan secara solo — 7 fitur end-to-end mulai dari autentikasi hingga modul inti aplikasi, semuanya terdokumentasi rapi dalam spesifikasi OpenAPI. Proyek ini jadi bukti kemampuanku membangun API production-ready secara mandiri: arsitektur bersih, validasi ketat, dan dokumentasi yang bisa langsung dipakai tim frontend tanpa perlu bertanya.",
    impacts: [
      { before: "Tanpa dokumentasi API", after: "Full OpenAPI spec — frontend integrasi tanpa hambatan" },
      { before: "0 fitur", after: "7 fitur selesai 100% dikerjakan solo" }
    ],
    stack: ["Node.js", "Express", "TypeScript", "Drizzle ORM", "Supabase", "OpenAPI"],
    accent: "#3E6FA3",
    liveUrl: "https://9npc-safespace.vercel.app/",
    repoUrl: "https://github.com/orgs/Capstone-9NPC/repositories",
    shotImg: "assets/img/projects/safespace.png" // TODO: screenshot belum diunggah, fallback watermark kanji tetap tampil
  },
  {
    id: "haiphysio",
    kanji: "療",
    scriptWord: "Pulih",
    kanjiWord: "理学療法 — PHYSIOTHERAPY",
    title: "Hai Physio",
    role: "Team Lead + Backend Developer",
    year: "2026",
    type: "Web App — Kesehatan",
    status: "Selesai",
    desc: "Platform fisioterapi: 2 backend service + frontend Next.js. Aku memimpin tim sekaligus membangun backendnya.",
    about: "Hai Physio adalah platform layanan fisioterapi dengan arsitektur 2 backend service terpisah dan frontend Next.js. Di sini aku memegang dua pedang sekaligus: sebagai Team Lead aku mengatur pembagian kerja, timeline, dan koordinasi tim; sebagai Backend Developer aku membangun service inti dengan Drizzle ORM di atas PostgreSQL (Supabase).",
    impacts: [
      { before: "Koordinasi tim ad-hoc", after: "Timeline terstruktur, proyek selesai tepat target" },
      { before: "Monolith rencana awal", after: "2 backend service terpisah yang lebih mudah dirawat" }
    ],
    stack: ["Node.js", "Express", "TypeScript", "Drizzle ORM", "PostgreSQL", "Supabase", "Next.js"],
    liveUrl: "#",
    repoUrl: "#",
    shotImg: ""
  },
  {
    id: "siera",
    kanji: "催",
    scriptWord: "Event",
    kanjiWord: "行事管理 — EVENT MANAGEMENT",
    title: "SIERA",
    role: "Backend Developer",
    year: "2026",
    type: "Sistem Informasi Event",
    status: "Selesai",
    desc: "Sistem manajemen event — aku memegang spesifikasi API modul Events dan User Management.",
    about: "SIERA adalah sistem informasi manajemen event tempat aku bertanggung jawab atas spesifikasi API modul Events serta implementasi User Management. Fokusku: kontrak API yang jelas sejak awal, sehingga tim bisa bekerja paralel tanpa saling menunggu.",
    impacts: [
      { before: "Kontrak API tidak jelas", after: "API spec modul Events terdefinisi — tim kerja paralel" },
      { before: "Manajemen user manual", after: "Modul User Management dengan role & akses terstruktur" }
    ],
    stack: ["Bun", "Hono", "TypeScript", "PostgreSQL"],
    accent: "#1F7A54",
    liveUrl: "https://siera.veterantech.id/",
    repoUrl: "",
    repoPrivate: true,
    shotImg: "assets/img/projects/siera.png" // TODO: screenshot belum diunggah, fallback watermark kanji tetap tampil
  },
  {
    id: "urbancycle",
    kanji: "環",
    scriptWord: "Hijau",
    kanjiWord: "廃棄物管理 — WASTE MANAGEMENT",
    title: "UrbanCycle",
    role: "Android Developer",
    year: "2026",
    type: "Mobile App — Smart Waste",
    status: "Selesai",
    desc: "Aplikasi Android manajemen sampah pintar dengan klasifikasi berbasis TensorFlow Lite.",
    about: "UrbanCycle adalah aplikasi Android untuk manajemen sampah perkotaan yang lebih cerdas. Dibangun dengan Kotlin dan Jetpack Compose, aplikasi ini memakai TensorFlow Lite untuk mengklasifikasikan jenis sampah langsung dari kamera pengguna — menjembatani kebiasaan memilah sampah dengan teknologi yang mudah diakses.",
    impacts: [
      { before: "Pilah sampah manual & bingung", after: "Klasifikasi otomatis via kamera (on-device ML)" },
      { before: "UI XML tradisional", after: "Jetpack Compose — deklaratif & modern" }
    ],
    stack: ["Kotlin", "Jetpack Compose", "TensorFlow Lite", "Android"],
    liveUrl: "#",
    repoUrl: "#",
    shotImg: ""
  },
  {
    id: "silako",
    kanji: "珈",
    scriptWord: "Kopi",
    kanjiWord: "喫茶店 — COFFEE SHOP MIS",
    title: "SILAKO",
    role: "Project Manager",
    year: "2026",
    type: "Sistem Informasi Manajemen",
    status: "Selesai",
    desc: "MIS untuk coffee shop — aku memimpin sebagai PM: scope, timeline, dan koordinasi deliverables tim.",
    about: "SILAKO adalah sistem informasi manajemen untuk coffee shop. Di proyek ini aku murni bermain di sisi Project Manager: mendefinisikan scope, menyusun timeline, memfasilitasi komunikasi tim, dan memastikan setiap deliverable selesai sesuai standar. Proyek ini memperkuat jalur karier PM-ku dengan pengalaman memimpin dari perencanaan sampai serah terima.",
    impacts: [
      { before: "Scope melebar tanpa kendali", after: "Scope terkunci, deliverable jelas per milestone" },
      { before: "Progres tim tidak terlihat", after: "Tracking rutin — semua anggota tahu prioritasnya" }
    ],
    stack: ["Project Management", "Scope Definition", "Timeline Planning", "Team Coordination"],
    liveUrl: "#",
    repoUrl: "#",
    shotImg: ""
  },
  {
    id: "advika",
    kanji: "智",
    scriptWord: "Cerdas",
    kanjiWord: "学業助言 — ACADEMIC ADVISOR AI",
    title: "AdviKa",
    role: "Android Developer",
    year: "2026",
    type: "Mobile App — AI",
    status: "Dalam Pengembangan",
    desc: "Penasihat akademik berbasis AI di Android — Kotlin + Gemini API untuk membantu mahasiswa mengambil keputusan studi.",
    about: "AdviKa adalah aplikasi Android penasihat akademik bertenaga AI. Dibangun dengan Kotlin dan terintegrasi dengan Gemini API, AdviKa membantu mahasiswa merencanakan studi, memahami mata kuliah, dan mengambil keputusan akademik dengan rekomendasi yang dipersonalisasi.",
    impacts: [
      { before: "Konsultasi akademik terbatas jam dosen", after: "Advisor AI tersedia 24/7 di genggaman" },
      { before: "Saran generik", after: "Rekomendasi personal via Gemini API" }
    ],
    stack: ["Kotlin", "Android", "Gemini API", "AI Integration"],
    liveUrl: "#",
    repoUrl: "#",
    shotImg: ""
  }
];
