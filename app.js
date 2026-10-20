(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const KEYS = ["gp", "pm", "gen"];
  const TABS = ["experience", "projects", "skills"];

  /* The link alone decides what a visitor sees (nothing is remembered between visits):
       ?p=gp|pm|gen  (or #gp|#pm|#gen)  -> variant, Game Producer by default
       ?lang=es                          -> Spanish, English by default
       ?preview                          -> shows the variant switcher (only for Luis)
     Short links such as /project-manager/ or /es/ redirect here with these parameters. */
  function fromUrl() {
    const q = new URLSearchParams(location.search);
    const p = q.get("p") || location.hash.replace("#", "");
    return { lang: q.get("lang") === "es" ? "es" : "en", profile: KEYS.includes(p) ? p : "gp", preview: q.has("preview") };
  }
  const state = { ...fromUrl(), tab: "experience", role: null };

  const list = (a) => a.map((t) => `<li>${t}</li>`).join("");
  const chips = (a) => a.map((t) => `<span class="chip">${t}</span>`).join("");
  const ext = (href, label, cls = "btn btn-sm") => `<a class="${cls}" href="${href}" target="_blank" rel="noopener">${label} <span aria-hidden="true">↗</span></a>`;

  /* ---------- roadmap: milestones on a line, each with a short card ---------- */
  const milestones = () => MILESTONES.filter((m) => !m.only || m.only.includes(state.profile));

  function roadmapHTML(lang) {
    const items = milestones(), K = MILESTONE_KINDS[lang];
    return `
      <p class="hint">${UI[lang].timelineHint}</p>
      <ol class="roadmap" style="--n:${items.length}">${items.map((m) => `
        <li><button class="step ${m.kind}" type="button" data-step="${m.id}" aria-pressed="false">
          <span class="node" aria-hidden="true"></span><span class="sdate">${m.date}</span>
          <b>${m.title[lang]}</b><span class="sorg">${m.org}</span><span class="sline">${m.line[lang]}</span></button></li>`).join("")}</ol>
      <p class="legend">${["work", "game", "edu"].map((k) => `<span><i class="lg ${k}"></i>${K[k]}</span>`).join("")}</p>
      <div class="detail" id="detail" aria-live="polite"></div>`;
  }

  function showRole() {
    const lang = state.lang, U = UI[lang], box = $("#detail");
    if (!box) return;
    const P = PROFILES[state.profile];
    const m = milestones().find((x) => x.id === (state.role || P.firstRole)) || milestones()[0];
    if (m.detail) {
      const [title, where, note] = m.detail[lang];
      box.innerHTML = `<div class="dhead"><div><small class="tag edu">${MILESTONE_KINDS[lang].edu}</small><h4>${title}</h4><p class="place">${where}</p></div></div><p class="mission">${note}</p>`;
    } else if (m.id === "launch") {
      const g = GAMES.oup;
      box.innerHTML = `<div class="dhead"><div><small class="tag game">${MILESTONE_KINDS[lang].game}</small><h4>${g.title}</h4><p class="place">${g.studio} · ${g.role[lang]}</p></div><time>${U.launchDate}</time></div>
        <p class="mission">${g.shipped[lang]}</p><p class="award"><img src="${g.awardImg}" alt="" width="44" height="28">${g.award[lang]}</p>
        <div class="actions"><button class="btn btn-sm" type="button" data-tab="projects">${U.seeProject} →</button></div>`;
    } else {
      const q = ROLES[P.roles[m.id]][lang];
      box.innerHTML = `<div class="dhead"><div><small class="tag ${m.kind}">${q.tag}</small><h4>${q.title}</h4><p class="place">${q.place}</p></div><time>${q.when}</time></div>
        <p class="mission">${q.mission}</p><ul>${list(q.wins)}</ul>
        ${m.id === "fte" && state.profile !== "gen" ? `<div class="actions"><button class="btn btn-sm" type="button" data-tab="projects">${U.seeCase} →</button></div>` : ""}`;
    }
    state.role = m.id;
    $$(".step").forEach((b) => { const on = b.dataset.step === m.id; b.classList.toggle("on", on); b.setAttribute("aria-pressed", String(on)); });
  }

  /* ---------- tab panels ---------- */
  function experiencePanel(lang) {
    const P = PROFILES[state.profile];
    const extra = (P.extraRoles || []).map((k) => ROLES[k][lang]);
    return roadmapHTML(lang) + (extra.length ? `<h4 class="label">${UI[lang].also}</h4>${extra.map((q) =>
      `<div class="also"><b>${q.title}</b> <span>${q.place} · ${q.when}</span><p>${q.mission}</p></div>`).join("")}` : "");
  }

  function gameCard(id, lang, withCase) {
    const g = GAMES[id], U = UI[lang];
    return `<article class="project">
      <a class="pimg" href="${g.steam}" target="_blank" rel="noopener"><img src="${g.art}" alt="${g.title}" loading="lazy" width="460" height="215"></a>
      <div class="pbody">
        <h4>${g.title}</h4>
        <p class="meta">${g.studio} · <b>${g.role[lang]}</b> · ${g.when}</p>
        <p class="award"><img src="${g.awardImg}" alt="" width="44" height="28">${g.award[lang]}</p>
        <p>${g.shipped[lang]}</p>
        <div class="actions">${ext(g.steam, U.steam)}${g.trailer ? ext(g.trailer, U.trailer) : ""}</div>
      </div>
      ${withCase ? caseHTML(lang) : ""}
    </article>`;
  }

  function caseHTML(lang) {
    const C = CASE[lang], U = UI[lang];
    return `<div class="case">
      <h5 class="label">${U.caseStudy}</h5>
      <p class="challenge"><b>${C.challenge[0]}.</b> ${C.challenge[1]}</p>
      <h5 class="label">${U.whatIChanged}</h5>
      <ol class="changes">${C.changes.map(([t, d]) => `<li><b>${t}</b><p>${d}</p></li>`).join("")}</ol>
      <div class="result"><b>${C.result[0]}</b><ul>${list(C.result[1])}</ul></div>
      <h5 class="label">${U.keyContrib}</h5><div class="chips">${chips(C.contributions)}</div>
    </div>`;
  }

  function rumboCard(lang) {
    const R = RUMBO[lang], U = UI[lang];
    return `<article class="project client">
      <div class="pbody">
        <h4>${R.title}</h4>
        <p class="meta">${R.sub}</p>
        <p>${R.lead}</p>
        <ul>${list(R.points)}</ul>
        <h5 class="label">${U.clients}</h5>
        <div class="chips">${chips(R.clients)}</div>
        <div class="actions">${ext(RUMBO.url, U.visit)}</div>
      </div>
    </article>`;
  }

  function publicCard(lang) {
    const C = PUBLIC[lang];
    return `<article class="project client public">
      <div class="pbody">
        <h4>${C.title}</h4><p class="meta">${C.sub}</p><p>${C.lead}</p>
        <div class="pubgrid">${C.items.map(([t, r, x]) => `<div><b>${t}</b><small>${r}</small><p>${x}</p></div>`).join("")}</div>
        <div class="chips">${chips(C.skills)}</div>
      </div>
    </article>`;
  }

  function projectsPanel(lang) {
    const P = PROFILES[state.profile];
    return P.projects.map((id) => id === "rumbo" ? rumboCard(lang) : id === "public" ? publicCard(lang)
      : gameCard(id, lang, id === "oup" && state.profile !== "gen")).join("");
  }

  function skillsPanel(lang) {
    const p = PROFILES[state.profile][lang], U = UI[lang];
    return `<h4 class="label first">${U.howIWork}</h4>
      <div class="pillars">${p.pillars.map(([t, d]) => `<div class="pillar"><h4>${t}</h4><p>${d}</p></div>`).join("")}</div>
      <div class="toolbox">
        <h4>${U.tools}</h4><p class="hint">${U.toolsNote}</p>
        <div class="toolgroups">${TOOLS[lang].map(([g, items], i) => `<div class="tone-${i}"><h5>${g}</h5><div class="chips">${chips(items)}</div></div>`).join("")}</div>
      </div>`;
  }

  function renderBoard() {
    const lang = state.lang, U = UI[lang];
    $("#tabs").innerHTML = TABS.map((t, i) => `
      <button class="tab${t === state.tab ? " on" : ""}" role="tab" id="tab-${t}" aria-selected="${t === state.tab}" aria-controls="panel" tabindex="${t === state.tab ? 0 : -1}" data-tab="${t}">
        <span class="tnum">0${i + 1}</span><span class="ttext"><b>${U.tabs[t][0]}</b><small>${U.tabs[t][1]}</small></span></button>`).join("");
    const i = TABS.indexOf(state.tab), prev = TABS[i - 1], next = TABS[i + 1];
    const panel = $("#panel");
    panel.setAttribute("aria-labelledby", "tab-" + state.tab);
    panel.innerHTML = `<div class="pcontent">${{ experience: experiencePanel, projects: projectsPanel, skills: skillsPanel }[state.tab](lang)}</div>
      <div class="pnav">
        ${prev ? `<button class="btn btn-sm" type="button" data-tab="${prev}">← ${U.tabs[prev][0]}</button>` : "<span></span>"}
        ${next ? `<button class="btn btn-sm btn-primary" type="button" data-tab="${next}">${U.next}: ${U.tabs[next][0]} →</button>` : "<span></span>"}
      </div>`;
    if (state.tab === "experience") showRole();
    placeDoodles();
    if (typeof spy === "function") spy();
  }

  function openTab(tab, scroll) {
    if (!TABS.includes(tab)) return;
    state.tab = tab;
    renderBoard();
    if (scroll) $("#work").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  /* ---------- page ---------- */
  function render() {
    const { lang, profile } = state;
    const U = UI[lang], P = PROFILES[profile], p = P[lang];
    document.documentElement.lang = lang;
    document.title = `Luis Rodríguez — ${p.role}`;
    $("#topStatus").innerHTML = `<span class="dot" aria-hidden="true"></span>${U.available}`;
    $("#switch").dataset.lang = lang;
    $$(".lang").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    $("#nav").innerHTML = U.nav.map(([id, t]) => TABS.includes(id)
      ? `<a href="#work" data-tab="${id}" data-scroll>${t}</a>` : `<a href="#${id}">${t}</a>`).join("");

    const preview = state.preview ? `<p class="preview"><span>${U.view}:</span>${KEYS.map((k) =>
      `<button class="chip-btn" type="button" data-profile="${k}" aria-pressed="${k === profile}">${PROFILES[k][lang].tab}</button>`).join("")}</p>` : "";

    $("#hero").innerHTML = `
      <div class="hero-text">
        <p class="eyebrow">${p.role}</p>
        <h1>Luis Rodríguez</h1>
        <p class="headline">${p.headline}</p>
        <p class="intro">${p.intro}</p>
        ${preview}
      </div>
      <figure class="photo"><img src="${SITE.photo}" alt="Luis Rodríguez" width="400" height="500"></figure>`;

    $("#figures").innerHTML = p.figures.map(([n, l]) => `<div class="figure"><b>${n}</b><span>${l}</span></div>`).join("");

    $("#facts").innerHTML = `<h2 class="sr-only">${U.facts}</h2><dl>${FACTS[lang].map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}<div><dt>${U.lookingFor}</dt><dd>${p.seeking}</dd></div></dl>`;

    const R = RECOMMENDATION;
    $("#rec").innerHTML = `
      <figure>
        <figcaption class="label">${U.rec}</figcaption>
        <blockquote lang="en">“${R.excerpt}”</blockquote>
        <p class="who"><b>${R.name}</b> · ${R.role[lang]}</p>
        <details><summary>${U.readFull}</summary><blockquote lang="en">“${R.text}”</blockquote><p class="source">${R.source[lang]}</p></details>
      </figure>`;

    $("#workHead").innerHTML = `<h2>${U.boardTitle}</h2><p class="hint">${U.boardHint}</p>`;
    renderBoard();

    $("#contact").innerHTML = `
      <h2>${U.contactTitle}</h2>
      <div class="contact-card">
      <p class="contact-name"><img src="img/logo.png" alt="" width="40" height="40"><span><b>Luis Rodríguez</b><small>${p.role}</small></span></p>
      <div class="contact-grid">
        <div class="wanted"><h3 class="label">${U.lookingFor}</h3><p>${p.wanted}</p></div>
        <dl class="contact-list">
          <div><dt>${U.email}</dt><dd><a href="mailto:${SITE.email}" target="_blank" rel="noopener">${SITE.email}</a> <button class="btn btn-sm" type="button" data-copy>${U.copy}</button></dd></div>
          <div><dt>${U.linkedin}</dt><dd><a href="${SITE.linkedin}" target="_blank" rel="noopener">${SITE.linkedinLabel}</a></dd></div>
          <div><dt>${FACTS[lang][1][0]}</dt><dd>${FACTS[lang][1][1]}</dd></div>
          <div><dt>${FACTS[lang][0][0]}</dt><dd>${FACTS[lang][0][1]}</dd></div>
        </dl>
      </div>
      <div class="actions"><a class="btn btn-primary" href="mailto:${SITE.email}" target="_blank" rel="noopener">${U.emailMe}</a><a class="btn" href="${P.cv[lang]}" download target="_blank" rel="noopener">${U.cv}</a></div></div>`;

    const D = DUNE[lang], Z = COSMO[lang];
    $("#beyond").innerHTML = `
      <h2>${U.beyondTitle}</h2><p class="hint">${U.beyondLead}</p>
      <details class="fold">
        <summary><img src="img/duneverso-emblem.png" alt="" width="36" height="36"><span><b>Duneverso</b><small>${D.bar}</small></span></summary>
        <div class="fold-body">
          <p>${D.lead}</p><p class="muted">${D.role}</p>
          <div class="numbers">${D.numbers.map(([n, l]) => `<div><b>${n}</b><span>${l}</span></div>`).join("")}</div>
          <div class="shows">${D.shows.map((s) => `<article class="show">
            <a class="pimg video" href="${s.link}" target="_blank" rel="noopener"><img src="${s.img}" alt="${s.t}" loading="lazy" width="480" height="270"><span class="play" aria-hidden="true">▶</span></a>
            <div><small class="tag">${s.tag}</small><h4>${s.t}</h4><p>${s.d}</p>${ext(s.link, s.watch)}</div></article>`).join("")}</div>
          <p class="muted">${D.more}</p>
          <div class="builds">${D.builds.map((b) => `<article class="build"><img src="${b.img}" alt="" loading="lazy" width="96" height="96"><div><small class="tag">${b.tag}</small><h4>${b.t}</h4><p>${b.d}</p></div></article>`).join("")}</div>
          <div class="actions">${ext(LINKS.duneverso, D.visit)}${ext(LINKS.youtube, D.yt)}</div>
        </div>
      </details>
      <details class="fold">
        <summary><span class="fold-icon" aria-hidden="true"><svg viewBox="0 0 32 32" width="24" height="24"><path fill="currentColor" d="M3 6c4 2 9 2 13 0v9c0 5-3 9-6.5 9S3 20 3 15V6Zm4 5.2a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6Zm5 0a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6ZM6.5 17c1.8 2 4.2 2 6 0-.4 2.2-1.6 3.3-3 3.3s-2.6-1.1-3-3.3Z"/><path fill="currentColor" d="M24 4h5v3.5h-3V22a4 4 0 1 1-2-3.46V4Z"/></svg></span><span><b>Cosmozarza</b><small>${Z.bar}</small></span></summary>
        <div class="fold-body cosmo">
          <div><p>${Z.lead}</p><p class="role">${Z.role}</p><p>${Z.premiere}</p><p class="muted">${Z.org}</p>
            <h4>${Z.sintesTitle}</h4><ul>${list(Z.sintes)}</ul>
            <div class="actions">${ext(LINKS.cosmozarza, Z.follow)}</div></div>
          <div class="cphotos"><img src="img/cosmo-poster.jpg" alt="La medición de un sueño" loading="lazy"><img src="img/cosmo-stage.jpg" alt="CosmoCaixa, Barcelona" loading="lazy"></div>
        </div>
      </details>
      <details class="fold now">
        <summary><span class="fold-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="22" height="22"><path fill="currentColor" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-1 3h2v5.4l3.6 2.1-1 1.7L11 13.6V7Z"/></svg></span><span><b>${NOW[lang].title}</b><small>${NOW[lang].bar}</small></span></summary>
        <div class="fold-body"><p class="hint">${NOW[lang].lead}</p>
        <div class="now-grid">${NOW[lang].items.map((it) => `<article class="now-item${it.video ? " music" : ""}${!it.img && !it.video ? " plain" : ""}">
          ${it.img ? (it.link ? `<a href="${it.link}" target="_blank" rel="noopener"><img src="${it.img}" alt="${it.t}" loading="lazy" width="240" height="360"></a>` : `<img src="${it.img}" alt="${it.t}" loading="lazy" width="240" height="360">`) : ""}
          ${it.video ? `<a class="pimg video" href="https://www.youtube.com/watch?v=${it.video}" target="_blank" rel="noopener"><img src="${it.thumb}" alt="${it.t} · ${it.meta}" loading="lazy" width="480" height="270"><span class="play" aria-hidden="true">▶</span></a>` : ""}
          <div><small class="tag">${it.kind}</small><h4>${it.t}</h4><p>${it.meta}</p>${it.video ? ext("https://www.youtube.com/watch?v=" + it.video, "YouTube") : ""}${!it.img && !it.video && it.link ? ext(it.link, "Teatro Real") : ""}</div>
        </article>`).join("")}</div>
        </div>
      </details>
      <div class="interests"><h3 class="label">${U.interests}</h3><div class="chips">${chips(p.interests)}</div></div>
      <blockquote class="quote" lang="en">“${QUOTE}”</blockquote>`;

    $("#fabBtn").textContent = U.contactMe;
    $("#fabBtn").setAttribute("aria-label", U.menu);
    $("#fabPanel").innerHTML = `
        <p class="label">${U.email}</p><a href="mailto:${SITE.email}" target="_blank" rel="noopener">${SITE.email}</a>
        <button class="btn btn-sm" type="button" data-copy>${U.copy}</button>
        <p class="label">${U.linkedin}</p><a href="${SITE.linkedin}" target="_blank" rel="noopener">${SITE.linkedinLabel}</a>
        <a class="btn btn-sm btn-primary" href="#contact" data-close>${U.contactTitle} ↓</a>`;

    $("#footer").innerHTML = `<span>Luis Rodríguez · ${p.role}</span><span>${SITE.updated[lang]}</span><a href="#top">${U.back} ↑</a>`;
    document.documentElement.classList.add("ready");
    placeDoodles();
    spy();
  }

  /* ---------- margin pixel art: retro controllers, planets, stars (decorative only) ---------- */
  const SPRITES = {
    pad: ["..##########..", ".############.", "##.##....#a.##", "#...#....a.a.#", "##.##....#a.##", "##############", "####......####", "###........###"],
    planet: ["......bbbb......", "....bbbbbbbb....", "gggbbbbbbbbbbggg", "g..bbbbbbbbbb..g", ".ggggbbbbbbgggg.", "....bbbbbbbb....", "......bbbb......"],
    mars: ["..rrrr..", ".rrrrrr.", "rrr##rrr", "rrrrrrrr", "rr#rrrrr", ".rrrrrr.", "..rrrr.."],
    moon: ["..####.", ".##....", "##.....", "##.....", "##.....", ".##....", "..####."],
    star: ["..g..", "..g..", "ggggg", "..g..", "..g.."],
    spark: [".#.", "###", ".#."],
    coin: [".gggg.", "gg##gg", "g#gg#g", "g#gg#g", "gg##gg", ".gggg."],
    heart: [".aa.aa.", "aaaaaaa", "aaaaaaa", ".aaaaa.", "..aaa..", "...a..."],
    stick: ["..aa..", "..aa..", "...#..", "...#..", "######", "#b##b#", "######"],
    comet: ["......bb", "....bbbb", "..bb.bb.", "bb......"],
  };
  const PLAN = [["pad", 5, 0], ["star", 4, 1], ["planet", 5, 1], ["coin", 4, 0], ["mars", 5, 0], ["spark", 4, 1], ["moon", 5, 1], ["heart", 4, 0],
    ["comet", 5, 1], ["stick", 5, 0], ["star", 3, 1], ["planet", 4, 0], ["pad", 4, 1], ["mars", 4, 0], ["coin", 4, 1], ["star", 4, 0]];
  function sprite(rows, px) {
    const css = getComputedStyle(document.documentElement);
    const col = { "#": css.getPropertyValue("--soft").trim(), a: css.getPropertyValue("--accent").trim(), b: "#5fa8c9", g: css.getPropertyValue("--gold").trim(), r: "#c8553d" };
    let r = "";
    rows.forEach((row, y) => [...row].forEach((ch, x) => { if (col[ch]) r += `<rect x="${x}" y="${y}" width="1" height="1" fill="${col[ch]}"/>`; }));
    const w = Math.max(...rows.map((x) => x.length));
    return `<svg width="${w * px}" height="${rows.length * px}" viewBox="0 0 ${w} ${rows.length}" shape-rendering="crispEdges" aria-hidden="true">${r}</svg>`;
  }
  let doodleTimer;
  function placeDoodles() {
    clearTimeout(doodleTimer);
    doodleTimer = setTimeout(() => {
      const host = $("#doodles"), main = $("main");
      const gap = main.getBoundingClientRect().left;
      if (gap < 150) { host.innerHTML = ""; return; }
      host.style.height = "0px"; host.innerHTML = ""; // measure the page without the doodle layer itself
      const H = document.documentElement.scrollHeight, step = Math.max(300, (H - 300) / PLAN.length);
      host.style.height = H + "px";
      host.innerHTML = PLAN.map(([k, px, right], i) => {
        const y = 140 + i * step + (i % 3) * 50;
        if (y > H - 200) return "";
        const x = right ? main.getBoundingClientRect().right + gap * (0.3 + (i % 3) * 0.12) : gap * (0.2 + (i % 3) * 0.14);
        return `<span class="dd" style="left:${Math.round(x)}px;top:${Math.round(y)}px">${sprite(SPRITES[k], px)}</span>`;
      }).join("");
    }, 200);
  }
  window.addEventListener("resize", placeDoodles);

  /* scroll-spy: the top menu shows which part of the page you are in */
  const SPY = { work: "work", contact: "contact", beyond: "beyond" };
  function spy() {
    const mid = innerHeight * 0.35;
    let current = "top";
    Object.keys(SPY).forEach((id) => { const el = $("#" + id); if (el && el.getBoundingClientRect().top < mid) current = id; });
    document.documentElement.dataset.section = current;
    $$("#nav a").forEach((link) => {
      const target = link.hasAttribute("data-tab") ? "work" : link.getAttribute("href").slice(1);
      const on = target === current && (target !== "work" || link.dataset.tab === state.tab);
      link.classList.toggle("here", on);
    });
  }
  window.addEventListener("scroll", spy, { passive: true });
  document.addEventListener("toggle", placeDoodles, true);

  function setState(patch) {
    Object.assign(state, patch);
    const q = new URLSearchParams();
    if (state.profile !== "gp") q.set("p", state.profile);
    if (state.lang !== "en") q.set("lang", state.lang);
    if (state.preview) q.set("preview", "");
    const qs = q.toString().replace(/=(&|$)/g, "$1");
    history.replaceState(null, "", `${location.pathname}${qs ? "?" + qs : ""}`);
    render();
  }

  function toggleFab(force) {
    const panel = $("#fabPanel"), btn = $("#fabBtn");
    if (!panel) return;
    const open = force === undefined ? panel.hidden : force;
    panel.hidden = !open;
    btn.setAttribute("aria-expanded", String(open));
  }

  document.addEventListener("click", (e) => {
    const t = e.target;
    const prof = t.closest("[data-profile]");
    if (prof) { state.role = null; return setState({ profile: prof.dataset.profile }); }
    const l = t.closest(".lang");
    if (l) return setState({ lang: l.dataset.lang });
    const tab = t.closest("[data-tab]");
    if (tab) { e.preventDefault(); return openTab(tab.dataset.tab, tab.hasAttribute("data-scroll") || !!tab.closest(".pnav")); }
    const step = t.closest(".step");
    if (step) { state.role = step.dataset.step; return showRole(); }
    const copy = t.closest("[data-copy]");
    if (copy) {
      if (navigator.clipboard) navigator.clipboard.writeText(SITE.email);
      copy.textContent = UI[state.lang].copied;
      setTimeout(() => (copy.textContent = UI[state.lang].copy), 1600);
      return;
    }
    if (t.closest("#fabBtn")) return toggleFab();
    if (t.closest("[data-close]") || !t.closest(".contact-pop")) toggleFab(false);
  });

  // arrow keys move between tabs (WAI-ARIA tabs pattern)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") toggleFab(false);
    if (!e.target.closest || !e.target.closest(".tab")) return;
    const i = TABS.indexOf(state.tab);
    const n = e.key === "ArrowRight" ? i + 1 : e.key === "ArrowLeft" ? i - 1 : null;
    if (n !== null && TABS[n]) { openTab(TABS[n]); $("#tab-" + TABS[n]).focus(); }
  });

  // editing the address by hand (e.g. only the #part) re-renders without a reload
  const reroute = () => { Object.assign(state, fromUrl(), { role: null }); render(); };
  window.addEventListener("hashchange", reroute);
  window.addEventListener("popstate", reroute);

  render();
})();
