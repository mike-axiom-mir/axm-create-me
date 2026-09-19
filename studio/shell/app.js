(() => {
  "use strict";

  const state = window.AXM_STUDIO_STATE;
  const grid = document.querySelector("#domain-grid");
  const template = document.querySelector("#domain-card-template");
  const dialog = document.querySelector("#domain-dialog");
  const dialogContent = document.querySelector("#dialog-content");
  const emptyResults = document.querySelector("#empty-results");
  const search = document.querySelector("#domain-search");
  const filters = [...document.querySelectorAll("[data-filter]")];
  let activeFilter = "all";

  const stateNames = {
    accepted: "Accepted main",
    hold: "Held",
    support: "Support",
    empty: "No visual lane"
  };

  const escapeHtml = (value) => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  function counts() {
    return state.domains.reduce((result, domain) => {
      result[domain.state] = (result[domain.state] || 0) + 1;
      return result;
    }, {});
  }

  function renderSummary() {
    const summary = counts();
    document.querySelector("#domain-total").textContent = state.domains.length;
    document.querySelector("#status-breakdown").innerHTML = [
      ["accepted", "accepted"], ["hold", "held"], ["support", "support"], ["empty", "without output"]
    ].map(([key, label]) => `<span><b>${summary[key] || 0}</b>${label}</span>`).join("");
    document.querySelector("#recorded-at").textContent = `STATE ${state.recordedAt.slice(0, 10)}`;
  }

  function cardFor(domain, index) {
    const card = template.content.firstElementChild.cloneNode(true);
    card.dataset.state = domain.state;
    card.dataset.domain = domain.id;
    card.setAttribute("aria-label", `Inspect ${domain.name}: ${domain.label}`);
    card.querySelector(".card-index").textContent = String(index + 1).padStart(2, "0");
    const badge = card.querySelector(".state-badge");
    badge.textContent = domain.label;
    badge.classList.add(domain.state);
    card.querySelector("h3").textContent = domain.name;
    card.querySelector(".card-summary").textContent = domain.summary;
    card.querySelector(".card-source code").textContent = domain.source;
    const image = card.querySelector("img");
    const fallback = card.querySelector(".no-preview");
    if (domain.preview) {
      image.src = domain.preview;
      image.alt = `${domain.name} convergence-stage preview`;
      image.addEventListener("error", () => {
        image.hidden = true;
        fallback.hidden = false;
      });
    } else {
      image.hidden = true;
      fallback.hidden = false;
    }
    card.addEventListener("click", () => openDomain(domain.id));
    return card;
  }

  function renderDomains() {
    const term = search.value.trim().toLowerCase();
    const visible = state.domains.filter((domain) => {
      const matchesFilter = activeFilter === "all" || domain.state === activeFilter;
      const haystack = [domain.name, domain.repo, domain.owner, domain.summary, domain.blocker].join(" ").toLowerCase();
      return matchesFilter && (!term || haystack.includes(term));
    });
    grid.replaceChildren(...visible.map((domain) => cardFor(domain, state.domains.indexOf(domain))));
    emptyResults.hidden = visible.length !== 0;
  }

  function dependencyMarkup(domain) {
    if (!domain.dependsOn.length) return '<span class="none">No named upstream dependency in this bounded view.</span>';
    return domain.dependsOn.map((item) => `<span>${escapeHtml(item)}</span>`).join("");
  }

  function openDomain(id) {
    const domain = state.domains.find((item) => item.id === id);
    if (!domain) return;
    dialogContent.innerHTML = `
      <div class="dialog-hero ${escapeHtml(domain.state)}">
        ${domain.preview ? `<img src="${escapeHtml(domain.preview)}" alt="${escapeHtml(domain.name)} convergence-stage preview">` : '<div class="dialog-placeholder">NO STANDALONE VISUAL OUTPUT</div>'}
        <span class="state-badge ${escapeHtml(domain.state)}">${escapeHtml(domain.label)}</span>
      </div>
      <div class="dialog-body">
        <p class="eyebrow">${escapeHtml(domain.repo)}</p>
        <h2 id="dialog-title">${escapeHtml(domain.name)}</h2>
        <p class="dialog-summary">${escapeHtml(domain.summary)}</p>
        <div class="detail-grid">
          <section><span>Current capability</span><p>${escapeHtml(domain.capability)}</p></section>
          <section><span>Unresolved gate</span><p>${escapeHtml(domain.blocker)}</p></section>
          <section><span>Recommended next action</span><p>${escapeHtml(domain.next)}</p></section>
          <section><span>Evidence boundary</span><p>${escapeHtml(domain.proof)}</p></section>
        </div>
        <div class="dependency-list"><span>Dependencies</span><div>${dependencyMarkup(domain)}</div></div>
        <div class="identity-row"><span>Exact identity</span><code>${escapeHtml(domain.source)}</code></div>
        <div class="dialog-actions">
          <a href="${escapeHtml(domain.sourceUrl)}" target="_blank" rel="noreferrer">Open exact source ↗</a>
          <a class="repo-action" href="${escapeHtml(domain.repoUrl)}" target="_blank" rel="noreferrer">Repository ↗</a>
          <button type="button" data-copy-source="${escapeHtml(domain.source)}">Copy identity</button>
        </div>
      </div>`;
    dialogContent.querySelector("[data-copy-source]").addEventListener("click", async (event) => {
      const button = event.currentTarget;
      try {
        await navigator.clipboard.writeText(button.dataset.copySource);
        button.textContent = "Identity copied";
      } catch {
        button.textContent = button.dataset.copySource;
      }
    });
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
  }

  filters.forEach((button) => button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filters.forEach((item) => item.classList.toggle("active", item === button));
    renderDomains();
  }));
  search.addEventListener("input", renderDomains);
  document.querySelectorAll("[data-open-domain]").forEach((button) => {
    button.addEventListener("click", () => openDomain(button.dataset.openDomain));
  });
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });

  document.querySelector("#seat-grid").innerHTML = state.seats.map(([name, file], index) => `
    <a href="../status/${file}"><span>${String(index + 1).padStart(2, "0")}</span><strong>${escapeHtml(name)}</strong><i>↗</i></a>
  `).join("");

  renderSummary();
  renderDomains();
  window.AXMStudioShell = Object.freeze({ openDomain, state });
})();
