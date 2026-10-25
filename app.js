(() => {
  const projects = window.PROJECTS || [];
  const activity = window.ACTIVITY || {};
  const $ = (sel, root = document) => root.querySelector(sel);
  const el = (tag, attrs = {}, children = []) => {
    const node = document.createElement(tag);
    for (const [key, value] of Object.entries(attrs)) {
      if (value === undefined || value === null || value === false) continue;
      if (key === "class") node.className = value;
      else if (key === "text") node.textContent = value;
      else if (key.startsWith("on")) node.addEventListener(key.slice(2), value);
      else node.setAttribute(key, value);
    }
    for (const child of [].concat(children)) {
      if (child === null || child === undefined) continue;
      node.append(child instanceof Node ? child : document.createTextNode(child));
    }
    return node;
  };

  const CATEGORIES = [
    { id: "all", label: "Everything" },
    { id: "game", label: "Games" },
    { id: "app", label: "Desktop apps" },
    { id: "web", label: "Web products" },
    { id: "ai", label: "AI and creative pipelines" },
    { id: "tool", label: "Tools for agents" },
    { id: "client", label: "Client demos" },
  ];
  const STATUS_LABEL = {
    live: "Live",
    shipped: "Shipped",
    "playable-prototype": "Playable prototype",
    "in-progress": "In progress",
    concept: "Concept",
  };

  const initials = (title) => title.replace(/[^A-Za-z0-9 ]/g, "").split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("");

  /* Stats */
  const statValues = {
    projects: projects.length,
    live: projects.filter((p) => p.liveUrl).length,
    commits: activity.totalCommits || 0,
    days: activity.activeDays || 0,
  };
  document.querySelectorAll("[data-stat]").forEach((node) => {
    const value = statValues[node.dataset.stat];
    if (value !== undefined) node.textContent = value.toLocaleString("en-US");
  });

  /* Screenshot marquee under the hero */
  // Alternate two visual projects (games, art, tools) with one interface shot so the strip reads as varied.
  const withShots = projects.filter((p) => p.shots && p.shots[0]).sort((a, b) => (b.score || 0) - (a.score || 0));
  const visual = withShots.filter((p) => ["game", "ai", "tool"].includes(p.category));
  const ui = withShots.filter((p) => !["game", "ai", "tool"].includes(p.category));
  const marqueeShots = [];
  while ((visual.length || ui.length) && marqueeShots.length < 20) {
    marqueeShots.push(...visual.splice(0, 2), ...ui.splice(0, 1));
  }
  const marquee = $("#marquee");
  for (const round of [0, 1]) {
    for (const p of marqueeShots) {
      marquee.append(el("button", { class: "mq", type: "button", tabindex: "-1", onclick: () => openProject(p) }, [
        el("img", { src: p.shots[0], alt: "", loading: round ? "lazy" : "eager" }),
        el("span", { text: p.title }),
      ]));
    }
  }

  /* Featured */
  const featuredRoot = $("#featured");
  const featured = (window.FEATURED || []).map((id) => projects.find((p) => p.id === id)).filter(Boolean);
  for (const p of featured) {
    featuredRoot.append(
      el("button", { class: "feat reveal", type: "button", onclick: () => openProject(p), "aria-label": `Open ${p.title}` }, [
        p.shots && p.shots[0] ? el("img", { src: p.shots[0], alt: "", loading: "lazy" }) : null,
        p.liveUrl ? el("span", { class: "badge-live", text: "Live" }) : null,
        el("div", { class: "meta" }, [
          el("div", { class: "mono", text: (p.stack || []).slice(0, 3).join(" / ") }),
          el("h3", { text: p.title }),
          el("p", { text: p.oneLiner }),
        ]),
      ])
    );
  }

  /* Filters + grid */
  const filterRoot = $("#filters");
  const gridRoot = $("#grid");
  let active = "all";
  const counts = Object.fromEntries(CATEGORIES.map((c) => [c.id, c.id === "all" ? projects.length : projects.filter((p) => p.category === c.id).length]));

  const renderFilters = () => {
    filterRoot.replaceChildren(
      ...CATEGORIES.filter((c) => counts[c.id] > 0).map((c) =>
        el("button", {
          class: "chip", type: "button", "aria-pressed": String(c.id === active),
          onclick: () => { active = c.id; renderFilters(); renderGrid(); },
        }, [c.label, el("span", { class: "c", text: String(counts[c.id]) })])
      )
    );
  };

  const statusRank = { live: 0, shipped: 1, "playable-prototype": 2, "in-progress": 3, concept: 4 };
  const sorted = [...projects].sort((a, b) => (b.score || 0) - (a.score || 0) || (statusRank[a.status] ?? 9) - (statusRank[b.status] ?? 9));

  const renderGrid = () => {
    const list = sorted.filter((p) => active === "all" || p.category === active);
    gridRoot.replaceChildren(
      ...list.map((p) =>
        el("button", { class: "card", type: "button", onclick: () => openProject(p), "aria-label": `Open ${p.title}` }, [
          el("div", { class: "thumb" }, [
            p.shots && p.shots[0]
              ? el("img", { src: p.shots[0], alt: "", loading: "lazy" })
              : p.icon
                ? el("div", { class: "iconart" }, [el("img", { src: p.icon, alt: "", loading: "lazy" })])
                : el("div", { class: "noimg", text: initials(p.title) }),
          ]),
          el("div", { class: "body" }, [
            el("div", { class: `mono status ${p.status}`, text: STATUS_LABEL[p.status] || p.status }),
            el("h3", { text: p.title }),
            el("p", { text: p.oneLiner }),
            el("div", { class: "tags" }, (p.stack || []).slice(0, 4).map((s) => el("span", { class: "tag", text: s }))),
          ]),
        ])
      )
    );
  };
  renderFilters();
  renderGrid();

  /* Range */
  const rangeRoot = $("#range-root");
  const usesTech = (p, prefixes) => (p.stack || []).some((s) => prefixes.some((m) => s.toLowerCase().startsWith(m.toLowerCase())));
  let techCount = 0;
  for (const group of window.RANGE || []) {
    const rows = group.items
      .map((item) => ({ name: item.name, n: projects.filter((p) => usesTech(p, item.match)).length }))
      .filter((r) => r.n > 0)
      .sort((a, b) => b.n - a.n);
    if (!rows.length) continue;
    techCount += rows.length;
    const max = Math.max(...rows.map((r) => r.n));
    rangeRoot.append(
      el("div", { class: "range-col reveal" }, [
        el("h3", { text: group.title }),
        ...rows.map((r) =>
          el("div", { class: "tech" }, [
            el("span", { class: "name", text: r.name }),
            el("span", { class: "cnt", text: `${r.n} ${r.n === 1 ? "project" : "projects"}` }),
            el("span", { class: "bar" }, [el("i", { style: `width:${Math.max(8, (r.n / max) * 100)}%` })]),
          ])
        ),
      ])
    );
  }

  document.querySelectorAll('[data-stat="stacks"]').forEach((node) => { node.textContent = String(techCount); });

  /* Activity heatmap */
  const heatRoot = $("#heat");
  const monthRoot = $("#heat-months");
  if (activity.days && heatRoot) {
    const start = new Date(activity.start + "T00:00:00Z");
    const end = new Date(activity.end + "T00:00:00Z");
    const dayMs = 86400000;
    const startDow = (start.getUTCDay() + 6) % 7;
    const values = Object.values(activity.days);
    const max = Math.max(...values);
    const level = (n) => (n <= 0 ? 0 : n < max * 0.08 ? 1 : n < max * 0.22 ? 2 : n < max * 0.5 ? 3 : 4);
    const weeks = Math.ceil((Math.round((end - start) / dayMs) + 1 + startDow) / 7);
    const sizeCells = () => {
      const room = heatRoot.parentElement.clientWidth;
      const cell = Math.max(11, Math.min(24, Math.floor((room - (weeks - 1) * 4) / weeks)));
      heatRoot.parentElement.style.setProperty("--cell", `${cell}px`);
    };
    sizeCells();
    addEventListener("resize", sizeCells);
    for (let i = 0; i < startDow; i++) heatRoot.append(el("i", { class: "pad" }));
    let lastMonth = -1;
    const totalDays = Math.round((end - start) / dayMs) + 1;
    for (let d = 0; d < totalDays; d++) {
      const date = new Date(start.getTime() + d * dayMs);
      const key = date.toISOString().slice(0, 10);
      const n = activity.days[key] || 0;
      heatRoot.append(el("i", { "data-l": String(level(n)), title: `${key}: ${n} commit${n === 1 ? "" : "s"}` }));
      const cell = d + startDow;
      if (cell % 7 === 0 || d === 0) {
        const m = date.getUTCMonth();
        monthRoot.append(el("span", { text: m !== lastMonth ? date.toLocaleString("en-US", { month: "short", timeZone: "UTC" }) : "" }));
        lastMonth = m;
      }
    }
  }
  if (activity.busiest) {
    const busiestMonth = (activity.months || []).reduce((a, b) => (b.commits > a.commits ? b : a), { commits: 0 });
    const busiestDate = new Date(activity.busiest.date + "T00:00:00Z").toLocaleString("en-US", { month: "long", day: "numeric", timeZone: "UTC" });
    $("#heat-facts").append(
      ...[
        ["Busiest day", `${activity.busiest.commits}`, `commits on ${busiestDate}`],
        ["Longest streak", `${activity.longestStreak}`, "days in a row"],
        ["Busiest month", busiestMonth.commits.toLocaleString("en-US"), `commits in ${busiestMonth.label}`],
      ].map(([k, n, l]) => el("div", { class: "hf" }, [el("div", { class: "mono", text: k }), el("div", { class: "n", text: n }), el("div", { class: "l", text: l })]))
    );
  }

  const monthsRoot = $("#months");
  for (const m of activity.months || []) {
    monthsRoot.append(
      el("div", { class: "month reveal" }, [
        el("div", { class: "mono", text: m.label }),
        el("div", { class: "n", text: m.commits.toLocaleString("en-US") }),
        el("div", { class: "mono", text: "commits" }),
        el("ul", {}, m.notes.map((t) => el("li", { text: t }))),
      ])
    );
  }

  /* Method + toolbelt */
  const site = window.SITE || {};
  $("#steps").append(
    ...(site.steps || []).map((s, i) => {
      const body = el("p");
      body.innerHTML = s.body;
      return el("div", { class: "step reveal" }, [el("div", { class: "k", text: String(i + 1).padStart(2, "0") }), el("h3", { text: s.title }), body]);
    })
  );
  const pills = (id, names, cls) => $(id).append(...(names || []).map((n) => el("span", { class: cls ? `pill ${cls}` : "pill", text: n })));
  pills("#pills-agents", site.agents);
  pills("#pills-mcp", site.mcp);
  pills("#pills-local", site.local);
  $("#own-tools").append(
    ...(site.ownTools || []).map((t) => el("li", {}, [el("strong", { text: t.name }), ` ${t.body}`]))
  );

  /* Dialog */
  const dialog = $("#project");
  function openProject(p) {
    const links = [];
    if (p.liveUrl) links.push(el("a", { class: "btn", href: p.liveUrl, target: "_blank", rel: "noopener" }, ["Open live", " ↗"]));
    if (p.github && p.github.visibility === "public" && p.github.repo) {
      links.push(el("a", { class: "btn ghost", href: `https://github.com/${p.github.repo}`, target: "_blank", rel: "noopener" }, ["Source on GitHub", " ↗"]));
    }
    const facts = [
      ["Status", STATUS_LABEL[p.status] || p.status],
      ["Built", p.period],
      ["Stack", (p.stack || []).join(", ")],
      p.metrics && p.metrics.length ? ["By the numbers", p.metrics.join(" · ")] : null,
      p.github && p.github.visibility === "private" ? ["Source", "Private repository"] : null,
    ].filter((f) => f && f[1]);
    const media = p.shots && p.shots.length
      ? el("div", { class: "dlg-media" }, p.shots.map((s, i) => el("img", { src: s, alt: `${p.title} screenshot ${i + 1}` })))
      : null;
    const dots = media && p.shots.length > 1
      ? el("div", { class: "dlg-dots" }, p.shots.map((_, i) =>
          el("button", { type: "button", "aria-label": `Show screenshot ${i + 1}`, "aria-current": String(i === 0), onclick: () => media.scrollTo({ left: i * media.clientWidth, behavior: "smooth" }) })))
      : null;
    if (dots) {
      media.addEventListener("scroll", () => {
        const current = Math.round(media.scrollLeft / media.clientWidth);
        [...dots.children].forEach((d, i) => d.setAttribute("aria-current", String(i === current)));
      }, { passive: true });
    }
    dialog.replaceChildren(
      el("button", { class: "dlg-close", type: "button", "aria-label": "Close", onclick: () => dialog.close(), text: "×" }),
      media,
      dots,
      el("div", { class: "dlg-body" }, [
        el("div", { class: `mono status ${p.status}`, text: CATEGORIES.find((c) => c.id === p.category)?.label || "" }),
        el("h2", {}, [p.icon ? el("img", { class: "dlg-icon", src: p.icon, alt: "" }) : null, p.title]),
        el("p", { class: "one", text: p.oneLiner }),
        el("div", { class: "dlg-cols" }, [
          el("div", {}, [el("div", { class: "mono", text: "What makes it interesting" }), el("ul", { class: "hl" }, (p.highlights || []).map((h) => el("li", { text: h })))]),
          el("div", { class: "facts" }, facts.map(([k, v]) => el("div", { class: "fact" }, [el("span", { class: "mono", text: k }), el("div", { text: v })]))),
        ]),
        links.length ? el("div", { class: "dlg-links" }, links) : null,
      ])
    );
    dialog.showModal();
    dialog.scrollTop = 0;
  }
  dialog.addEventListener("click", (e) => { if (e.target === dialog) dialog.close(); });

  /* Theme toggle */
  const themeBtn = $("#theme");
  const applyTheme = (t) => {
    if (t) document.documentElement.dataset.theme = t;
    themeBtn.textContent = (document.documentElement.dataset.theme || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark")) === "light" ? "☾" : "☀";
  };
  try { applyTheme(localStorage.getItem("theme")); } catch (err) { applyTheme(null); }
  themeBtn.addEventListener("click", () => {
    const current = document.documentElement.dataset.theme || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    const next = current === "light" ? "dark" : "light";
    applyTheme(next);
    try { localStorage.setItem("theme", next); } catch (err) { /* storage blocked: theme still applies for this visit */ }
  });

  /* Reveal on scroll */
  const io = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px" })
    : null;
  document.querySelectorAll(".reveal").forEach((node) => (io ? io.observe(node) : node.classList.add("in")));
})();
