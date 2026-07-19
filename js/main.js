/* =====================================================
   RENDER + INTERAKSI — tanpa data hardcode.
   Semua konten diambil dari js/data.js (site, tools, projects).
   ===================================================== */

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

/* ---------- social bar ---------- */
(function renderSocialBar(){
  const bar = document.getElementById("socialBar");
  const links = [
    { label: "GitHub", href: site.github, external: true },
    { label: "LinkedIn", href: site.linkedin, external: true },
    { label: "Instagram", href: site.instagram, external: true },
    { label: "Email", href: `mailto:${site.email}`, external: false }
  ];
  bar.innerHTML = links.map(l => `
    <a class="social-chip" href="${l.href}"${l.external ? ' target="_blank" rel="noopener"' : ""}><span class="dot"></span>${l.label}</a>
  `).join("");
})();

/* ---------- footer ---------- */
(function renderFooter(){
  const emailLink = document.getElementById("footerEmail");
  emailLink.href = `mailto:${site.email}`;
  emailLink.textContent = site.email;
})();

/* ---------- tools grid ---------- */
(function renderTools(){
  const grid = document.getElementById("toolsGrid");
  grid.innerHTML = tools.map(t => `
    <div class="tool">
      <i class="${t.deviconClass}"></i>
      <div class="t-name">${t.nama}</div>
      <div class="t-role">${t.peran}</div>
    </div>
  `).join("");
})();

/* ---------- kartu proyek ---------- */
const kanjiNums = ["一","二","三","四","五","六","七","八","九","十"];
const grid = document.getElementById("projectGrid");

projects.forEach((p, i) => {
  const card = document.createElement("article");
  card.className = "card";
  card.tabIndex = 0;
  card.setAttribute("role","button");
  card.setAttribute("aria-label","Buka detail proyek " + p.title);
  card.dataset.kanji = p.kanji;
  card.innerHTML = `
    <div class="card-num">${kanjiNums[i] || (i+1)} / PROJECT ${String(i+1).padStart(2,"0")}</div>
    <h3>${p.title}</h3>
    <div class="role">${p.role} · ${p.year}</div>
    <p class="desc">${p.desc}</p>
    <div class="stack">${p.stack.slice(0,4).map(s => `<span>${s}</span>`).join("")}</div>
    <span class="card-open">Buka Detail <span class="arr">→</span></span>
  `;
  const open = () => openProject(p);
  card.addEventListener("click", open);
  card.addEventListener("keydown", e => { if(e.key === "Enter" || e.key === " "){ e.preventDefault(); open(); } });
  grid.appendChild(card);
});

/* ---------- overlay detail ---------- */
const overlay = document.getElementById("overlay");
const ovClose = document.getElementById("ovClose");

function openProject(p){
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

  document.getElementById("ovStack").innerHTML =
    p.stack.map(s => `<span>${s}</span>`).join("");

  document.getElementById("ovLive").href = p.liveUrl || "#";
  document.getElementById("ovRepo").href = p.repoUrl || "#";

  // screenshot proyek (opsional)
  const shot = document.getElementById("ovShot");
  const oldImg = shot.querySelector("img");
  if(oldImg) oldImg.remove();
  if(p.shotImg){
    const img = document.createElement("img");
    img.src = p.shotImg;
    img.alt = "Screenshot " + p.title;
    shot.prepend(img);
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
