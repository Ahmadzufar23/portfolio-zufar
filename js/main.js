/* =====================================================
   RENDER + INTERAKSI — tanpa data hardcode.
   Semua konten diambil dari js/data.js (site, tools, projects).
   ===================================================== */

/* ---------- foto dengan fallback kanji 侍 (dipakai hero & #about) ---------- */
function renderPhoto(containerId, src, fallbackClass){
  const el = document.getElementById(containerId);
  const fallbackHtml = `
    <div class="${fallbackClass}">
      <span class="kanji">侍</span>
      <span>FOTO ZUFAR DI SINI</span>
    </div>`;
  if (!src) { el.innerHTML = fallbackHtml; return; }
  const img = document.createElement("img");
  img.alt = site.nama;
  img.onerror = () => { el.innerHTML = fallbackHtml; }; // file gagal dimuat — jatuh ke fallback kanji
  img.src = src;
  el.innerHTML = "";
  el.appendChild(img);
}

/* ---------- foto hero: cutout (transparan, tanpa bingkai) dengan fallback bertingkat ---------- */
function renderHeroPhoto(){
  const el = document.getElementById("portrait");
  const fallbackHtml = `
    <div class="portrait-fallback">
      <span class="kanji">侍</span>
      <span>FOTO ZUFAR DI SINI</span>
    </div>`;
  el.classList.remove("portrait--cutout", "portrait--square");

  function useSquarePhoto(){
    if (!site.photoSrc) { el.innerHTML = fallbackHtml; return; }
    el.classList.add("portrait--square");
    const img = document.createElement("img");
    img.alt = site.nama;
    img.onerror = () => { el.classList.remove("portrait--square"); el.innerHTML = fallbackHtml; };
    img.src = site.photoSrc;
    el.innerHTML = "";
    el.appendChild(img);
  }

  if (!site.photoCutout) { useSquarePhoto(); return; }
  el.classList.add("portrait--cutout");
  const img = document.createElement("img");
  img.alt = site.nama;
  img.onerror = () => { el.classList.remove("portrait--cutout"); useSquarePhoto(); }; // cutout belum diunggah — jatuh ke foto persegi biasa
  img.src = site.photoCutout;
  el.innerHTML = "";
  el.appendChild(img);
}

/* ---------- hero ---------- */
(function renderHero(){
  document.getElementById("heroEyebrow").textContent = site.tagline;

  const namaParts = site.nama.trim().split(/\s+/);
  const first = namaParts[0];
  const rest = namaParts.slice(1);
  const last = rest.pop();
  document.getElementById("heroName").innerHTML =
    rest.length
      ? `${first}<br>${rest.join(" ")} <span class="red">${last}</span>`
      : `${first} <span class="red">${last || ""}</span>`;

  document.getElementById("heroBio").innerHTML = site.bio;
  document.getElementById("portraitCaption").textContent = site.lokasi;

  renderHeroPhoto();
})();

/* ---------- deskripsi + foto (#about) ---------- */
(function renderAboutIntro(){
  document.getElementById("aboutText").textContent = site.aboutText;
  renderPhoto("aboutPhoto", site.aboutPhoto, "about-photo-fallback");
})();

/* ---------- link sosial (dipakai hero & footer) ---------- */
const socialLinks = {
  github: { label: "GitHub", href: site.github, external: true, icon: "devicon-github-original" },
  linkedin: { label: "LinkedIn", href: site.linkedin, external: true, icon: "devicon-linkedin-plain colored" },
  instagram: { label: "Instagram", href: site.instagram, external: true, iconMask: "assets/img/icons/instagram.svg" },
  email: { label: "Email", href: `mailto:${site.email}`, external: false, iconMask: "assets/img/icons/gmail.svg" }
};
function renderSocialIcon(l){
  if (l.icon) return `<i class="${l.icon}"></i>`;
  if (l.iconMask) return `<span class="hero-social-icon" style="mask-image:url('${l.iconMask}');-webkit-mask-image:url('${l.iconMask}');"></span>`;
  return "";
}
function renderSocialLinks(containerId, order){
  const bar = document.getElementById(containerId);
  if (!bar) return;
  bar.innerHTML = order.map(key => {
    const l = socialLinks[key];
    return `<a class="hero-social-link" href="${l.href}"${l.external ? ' target="_blank" rel="noopener"' : ""}>${renderSocialIcon(l)}<span>${l.label}</span></a>`;
  }).join("");
}
renderSocialLinks("heroSocial", ["github", "linkedin", "instagram", "email"]);

/* ---------- tombol Unduh CV ---------- */
(function setupCvLink(){
  document.getElementById("cvLink").href = site.cv || "#";
})();

/* ---------- pita berjalan (marquee) ---------- */
(function renderMarquee(){
  const track = document.getElementById("marqueeTrack");
  const group = marqueeItems.map(it => `<span${it.accent ? ' class="m-red"' : ""}>${it.text}</span>`).join("");
  // digandakan agar animasi translateX(-50%) berputar mulus tanpa celah
  track.innerHTML = group + group;
})();

/* ---------- footer ---------- */
(function renderFooter(){
  const emailLink = document.getElementById("footerEmail");
  emailLink.href = `mailto:${site.email}`;
  emailLink.textContent = site.email;
  document.getElementById("footerCv").href = site.cv || "#";
  renderSocialLinks("footerSocial", ["linkedin", "github", "instagram", "email"]);
})();

/* ---------- tools grid (dua kelompok: backend & pm) ---------- */
(function renderTools(){
  function toolCard(t, i){
    let icon = "";
    if (t.deviconClass) icon = `<i class="${t.deviconClass}"></i>`;
    else if (t.iconImg) icon = `<img class="tool-icon-img" src="${t.iconImg}" alt="${t.nama}">`;
    return `
      <div class="tool reveal" data-delay="${i % 6}">
        ${icon}
        <div class="t-name">${t.nama}</div>
        <div class="t-role">${t.peran}</div>
      </div>
    `;
  }
  document.getElementById("toolsBackend").innerHTML =
    tools.filter(t => t.group === "backend").map(toolCard).join("");
  document.getElementById("toolsManagement").innerHTML =
    tools.filter(t => t.group === "pm").map(toolCard).join("");
})();

/* ---------- timeline pengalaman horizontal (#about) ---------- */
(function renderExperience(){
  const track = document.getElementById("aboutTimeline");
  function initials(name){
    return name.split(/\s+/).map(w => w[0]).join("").slice(0,3).toUpperCase();
  }
  track.innerHTML = experience.map((e, i) => `
    <div class="about-exp-item reveal" data-delay="${i}">
      <span class="about-exp-period">${e.period}</span>
      <span class="about-exp-role">${e.role}</span>
      <div class="about-exp-company">
        <div class="about-exp-logo">
          <img src="${e.logo}" alt="${e.company}" onerror="this.remove();this.parentElement.classList.add('about-exp-logo--fallback');this.parentElement.textContent='${initials(e.company)}';">
        </div>
        <span class="about-exp-name">${e.company}</span>
      </div>
    </div>
  `).join("");
})();

/* ---------- kartu proyek ---------- */
const kanjiNums = ["一","二","三","四","五","六","七","八","九","十"];
const grid = document.getElementById("projectGrid");

function cardStackItem(s){
  const icon = techIcons[s];
  if (icon && icon.deviconClass) {
    return `<span class="stack-icon" title="${s}" aria-label="${s}"><i class="${icon.deviconClass}"></i></span>`;
  }
  if (icon && icon.iconImg) {
    return `<span class="stack-icon" title="${s}" aria-label="${s}"><img src="${icon.iconImg}" alt=""></span>`;
  }
  return `<span class="stack-text">${s}</span>`;
}

projects.forEach((p, i) => {
  const card = document.createElement("article");
  card.className = "card reveal";
  card.dataset.delay = i % 6;
  card.tabIndex = 0;
  card.setAttribute("role","button");
  card.setAttribute("aria-label","Buka detail proyek " + p.title);
  card.style.setProperty("--accent", p.accent || "var(--shu-bright)");
  card.innerHTML = `
    <div class="card-thumb">
      <span class="card-thumb-kanji">${p.kanji}</span>
    </div>
    <div class="card-body">
      <div class="card-num">${kanjiNums[i] || (i+1)} / PROJECT ${String(i+1).padStart(2,"0")}</div>
      <h3>${p.title}</h3>
      <div class="role">${p.role} · ${p.year}</div>
      <p class="desc">${p.desc}</p>
      <div class="stack">${p.stack.slice(0,4).map(cardStackItem).join("")}</div>
      <span class="card-open">Buka Detail <span class="arr">→</span></span>
    </div>
  `;
  if (p.shotImg) {
    const img = document.createElement("img");
    img.alt = "";
    img.loading = "lazy";
    img.onerror = () => img.remove(); // gagal dimuat — biarkan fallback aksen + kanji di .card-thumb tetap tampil
    img.src = p.shotImg;
    card.querySelector(".card-thumb").appendChild(img); // ditambahkan setelah kanji supaya menutupinya saat berhasil dimuat
  }
  const open = () => openProject(p);
  card.addEventListener("click", open);
  card.addEventListener("keydown", e => { if(e.key === "Enter" || e.key === " "){ e.preventDefault(); open(); } });
  grid.appendChild(card);
});

/* ---------- overlay detail ---------- */
const overlay = document.getElementById("overlay");
const ovClose = document.getElementById("ovClose");

function openProject(p){
  overlay.style.setProperty("--accent", p.accent || "var(--shu)");
  document.getElementById("ovTitle").textContent = p.title;
  document.getElementById("ovScript").textContent = p.scriptWord;
  document.getElementById("ovKanjiWord").textContent = p.kanjiWord;
  document.getElementById("ovRole").textContent = p.role;
  document.getElementById("ovYear").textContent = p.year;
  document.getElementById("ovType").textContent = p.type;
  document.getElementById("ovStatus").textContent = p.status;
  document.getElementById("ovAbout").textContent = p.about;
  document.getElementById("ovShotKanji").textContent = p.kanji;

  document.getElementById("ovImpacts").innerHTML = p.impacts.map(im => `
    <div class="impact-line">
      <span class="before">${im.before}</span>
      <span class="arrow">→</span>
      <span class="after">${im.after}</span>
    </div>
  `).join("");

  document.getElementById("ovStack").innerHTML = p.stack.map(s => {
    const icon = techIcons[s];
    let iconHtml = "";
    if (icon && icon.deviconClass) iconHtml = `<span class="tech-icon"><i class="${icon.deviconClass}"></i></span>`;
    else if (icon && icon.iconImg) iconHtml = `<span class="tech-icon"><img src="${icon.iconImg}" alt=""></span>`;
    return `<span>${iconHtml}${s}</span>`;
  }).join("");

  const liveBtn = document.getElementById("ovLive");
  if (p.liveUrl) {
    liveBtn.href = p.liveUrl;
    liveBtn.hidden = false;
  } else {
    liveBtn.hidden = true;
  }

  const repoBtn = document.getElementById("ovRepo");
  const repoBadge = document.getElementById("ovRepoBadge");
  if (p.repoUrl) {
    repoBtn.href = p.repoUrl;
    repoBtn.hidden = false;
    repoBadge.hidden = true;
  } else {
    repoBtn.hidden = true;
    repoBadge.hidden = !p.repoPrivate;
  }

  document.getElementById("ovDevBadge").hidden =
    !(!p.liveUrl && !p.repoUrl && !p.repoPrivate && p.status === "Dalam Pengembangan");

  document.getElementById("ovShotUrl").textContent =
    (p.liveUrl && p.liveUrl !== "#") ? p.liveUrl.replace(/^https?:\/\//i, "").replace(/\/$/, "") : "—";

  // screenshot proyek (opsional) — mockup jendela browser di sekelilingnya tetap tampil
  const shotBody = document.getElementById("ovShotBody");
  const oldImg = shotBody.querySelector("img");
  if(oldImg) oldImg.remove();
  shotBody.classList.remove("has-image");
  if(p.shotImg){
    const img = document.createElement("img");
    img.alt = "Screenshot " + p.title;
    img.onerror = () => { img.remove(); shotBody.classList.remove("has-image"); }; // file screenshot belum ada — fallback watermark kanji tetap di dalam bingkai
    img.onload = () => shotBody.classList.add("has-image");
    img.src = p.shotImg;
    shotBody.prepend(img);
  }

  overlay.classList.add("open");
  overlay.scrollTop = 0;
  document.body.style.overflow = "hidden";
  ovClose.focus();
}

function closeProject(){
  overlay.classList.remove("open");
  document.body.style.overflow = "";
}

ovClose.addEventListener("click", closeProject);
document.addEventListener("keydown", e => { if(e.key === "Escape" && overlay.classList.contains("open")) closeProject(); });
