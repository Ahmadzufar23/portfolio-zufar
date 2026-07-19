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
  email: "email@kamu.com",
  github: "https://github.com/username-kamu",
  linkedin: "https://linkedin.com/in/username-kamu",
  instagram: "https://instagram.com/username-kamu",
  cvBackend: "",
  cvPm: "",
  photoSrc: ""
};

/* ---------- Tools & Skills (grid #tools) ---------- */
const tools = [
  { deviconClass: "devicon-nodejs-plain colored", nama: "Node.js", peran: "Backend Runtime" },
  { deviconClass: "devicon-typescript-plain colored", nama: "TypeScript", peran: "Bahasa Utama" },
  { deviconClass: "devicon-express-original", nama: "Express", peran: "Web Framework" },
  { deviconClass: "devicon-postgresql-plain colored", nama: "PostgreSQL", peran: "Database" },
  { deviconClass: "devicon-supabase-plain colored", nama: "Supabase", peran: "BaaS / DB Hosting" },
  { deviconClass: "devicon-kotlin-plain colored", nama: "Kotlin", peran: "Android Dev" },
  { deviconClass: "devicon-java-plain colored", nama: "Java", peran: "OOP Foundation" },
  { deviconClass: "devicon-python-plain colored", nama: "Python", peran: "Data Science" },
  { deviconClass: "devicon-git-plain colored", nama: "Git & GitHub", peran: "Version Control" },
  { deviconClass: "devicon-docker-plain colored", nama: "Docker", peran: "Containerization" },
  { deviconClass: "devicon-nextjs-original", nama: "Next.js", peran: "Frontend" },
  { deviconClass: "devicon-notion-plain", nama: "Notion & PM Tools", peran: "Project Management" }
];

/* ---------- Proyek ----------
   liveUrl  : link demo / web live (tombol ▶ Preview Live)
   repoUrl  : link GitHub
   shotImg  : path screenshot proyek (opsional). Contoh: "assets/img/projects/safespace.png"
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
    liveUrl: "#",
    repoUrl: "#",
    shotImg: ""
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
    stack: ["Node.js", "Express", "TypeScript", "API Specification", "PostgreSQL"],
    liveUrl: "#",
    repoUrl: "#",
    shotImg: ""
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
