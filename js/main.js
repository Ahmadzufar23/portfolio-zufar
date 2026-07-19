/* =====================================================
   RENDER + INTERAKSI — tanpa data hardcode.
   Semua konten diambil dari js/data.js (site, tools, projects).
   ===================================================== */

/* ---------- dev toggle: paksa animasi via ?motion=on ---------- */
(function applyForceMotion(){
  if (new URLSearchParams(location.search).get("motion") === "on") {
    document.body.classList.add("force-motion");
  }
})();

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

  const portrait = document.getElementById("portrait");
  if (site.photoSrc) {
    portrait.innerHTML = `<img src="${site.photoSrc}" alt="${site.nama}">`;
  } else {
    portrait.innerHTML = `
      <div class="portrait-fallback">
        <span class="kanji">侍</span>
        <span>FOTO ZUFAR DI SINI</span>
      </div>`;
  }
})();

/* ---------- hero social links ---------- */
(function renderHeroSocial(){
  const bar = document.getElementById("heroSocial");
  const links = [
    { label: "GitHub", href: site.github, external: true, icon: "devicon-github-original" },
    { label: "LinkedIn", href: site.linkedin, external: true, icon: "devicon-linkedin-plain colored" },
    { label: "Instagram", href: site.instagram, external: true, iconMask: "assets/img/icons/instagram.svg" },
    { label: "Email", href: `mailto:${site.email}`, external: false, iconMask: "assets/img/icons/gmail.svg" }
  ];
  function renderIcon(l){
    if (l.icon) return `<i class="${l.icon}"></i>`;
    if (l.iconMask) return `<span class="hero-social-icon" style="mask-image:url('${l.iconMask}');-webkit-mask-image:url('${l.iconMask}');"></span>`;
    return "";
  }
  bar.innerHTML = links.map(l => `
    <a class="hero-social-link" href="${l.href}"${l.external ? ' target="_blank" rel="noopener"' : ""}>${renderIcon(l)}<span>${l.label}</span></a>
  `).join("");
})();

/* ---------- dropdown Unduh CV ---------- */
(function setupCvDropdown(){
  const dropdown = document.getElementById("cvDropdown");
  const toggle = document.getElementById("cvToggle");
  const menu = document.getElementById("cvMenu");
  document.getElementById("cvBackendLink").href = site.cvBackend || "#";
  document.getElementById("cvPmLink").href = site.cvPm || "#";

  function outsideClick(e){
    if(!dropdown.contains(e.target)) closeMenu(false);
  }
  function openMenu(){
    menu.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
    document.addEventListener("click", outsideClick);
  }
  function closeMenu(focusToggle){
    menu.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
    document.removeEventListener("click", outsideClick);
    if(focusToggle) toggle.focus();
  }
  toggle.addEventListener("click", e => {
    e.stopPropagation();
    if(menu.hidden) openMenu(); else closeMenu(false);
  });
  document.addEventListener("keydown", e => {
    if(e.key === "Escape" && !menu.hidden) closeMenu(true);
  });
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
})();

/* ---------- tools grid (dua kelompok: backend & pm) ---------- */
(function renderTools(){
  function toolCard(t){
    let icon = "";
    if (t.deviconClass) icon = `<i class="${t.deviconClass}"></i>`;
    else if (t.iconImg) icon = `<img class="tool-icon-img" src="${t.iconImg}" alt="${t.nama}">`;
    return `
      <div class="tool">
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
  card.className = "card";
  card.tabIndex = 0;
  card.setAttribute("role","button");
  card.setAttribute("aria-label","Buka detail proyek " + p.title);
  card.style.setProperty("--accent", p.accent || "var(--shu)");
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

  document.getElementById("ovLive").href = p.liveUrl || "#";

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
