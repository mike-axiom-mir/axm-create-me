(() => {
  "use strict";

  const state = window.AXM_STUDIO_STATE;
  const grid = document.querySelector("#domain-grid");
  const template = document.querySelector("#domain-card-template");
  const dialog = document.querySelector("#domain-dialog");
  const dialogContent = document.querySelector("#dialog-content");
  const toolGrid = document.querySelector("#tool-grid");
  const toolDialog = document.querySelector("#tool-dialog");
  const toolDialogContent = document.querySelector("#tool-dialog-content");
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
    document.querySelector("#control-head").textContent = state.controlRoomHead.slice(0, 12);
  }

  function renderConstellation() {
    const container = document.querySelector(".source-nodes");
    container.innerHTML = state.domains.map((domain, index) => {
      const ring = index % 3;
      const positions = [5, 5, 5];
      const position = Math.floor(index / 3);
      const angle = (360 / positions[ring]) * position + (ring * 24);
      return `<span class="source-node ${escapeHtml(domain.state)} ring-${ring + 1}" style="--angle:${angle}deg;--delay:${index * -0.31}s" title="${escapeHtml(domain.name)}"></span>`;
    }).join("");
  }

  function cardFor(domain, index) {
    const card = template.content.firstElementChild.cloneNode(true);
    card.dataset.state = domain.state;
    card.dataset.domain = domain.id;
    card.style.setProperty("--card-order", index);
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

  function listMarkup(items) {
    return items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  }

  function layerMarkup(layers) {
    return Object.entries(layers).map(([layer, value]) => `
      <span class="tool-layer ${escapeHtml(value)}">
        <small>${escapeHtml(layer)}</small>
        <b>${escapeHtml(value)}</b>
      </span>`).join("");
  }

  function renderTools() {
    const counts = state.tools.reduce((result, tool) => {
      Object.entries(tool.layers).forEach(([layer, value]) => {
        if (value === "verified") result[layer] = (result[layer] || 0) + 1;
      });
      return result;
    }, {});
    document.querySelector("#tool-summary").innerHTML = [
      [counts.ai || 0, "AI callable"],
      [counts.human || 0, "human wrapped"],
      [counts.intent || 0, "intent compiled"]
    ].map(([value, label]) => `<span><b>${value}</b>${label}</span>`).join("");
    toolGrid.innerHTML = state.tools.map((tool, index) => `
      <article class="tool-card">
        <div class="tool-card-head">
          <div><span>TOOL / ${String(index + 1).padStart(2, "0")}</span><small>${escapeHtml(tool.owner)}</small></div>
          <span class="tool-status">${escapeHtml(tool.status.replaceAll("_", " "))}</span>
        </div>
        <div class="tool-card-main">
          <div class="tool-copy">
            <p class="eyebrow">${escapeHtml(tool.repo)}</p>
            <h3>${escapeHtml(tool.name)}</h3>
            <code>${escapeHtml(tool.toolId)}</code>
            <p>${escapeHtml(tool.proof)}</p>
          </div>
          <div class="execution-rail" aria-label="Request routed to specialist owner and returned as a receipt">
            <span><small>INPUT</small><b>request.json</b></span>
            <i aria-hidden="true">→</i>
            <span class="rail-owner"><small>OWNER</small><b>Building</b></span>
            <i aria-hidden="true">→</i>
            <span><small>OUTPUT</small><b>receipt.json</b></span>
          </div>
        </div>
        <div class="tool-layers" aria-label="Tool interface layers">${layerMarkup(tool.layers)}</div>
        <div class="tool-card-foot">
          <span><small>SOURCE HEAD</small><code>${escapeHtml(tool.sourceHead)}</code></span>
          <button type="button" data-open-tool="${escapeHtml(tool.id)}">Inspect tool &amp; plan <i aria-hidden="true">↗</i></button>
        </div>
      </article>`).join("");
    toolGrid.querySelectorAll("[data-open-tool]").forEach((button) => {
      button.addEventListener("click", () => openTool(button.dataset.openTool));
    });
  }

  function openTool(id) {
    const tool = state.tools.find((item) => item.id === id);
    if (!tool) return;
    toolDialogContent.innerHTML = `
      <div class="tool-dialog-hero">
        <div>
          <p class="eyebrow">VERIFIED MACHINE CONTRACT</p>
          <span class="tool-status">${escapeHtml(tool.status.replaceAll("_", " "))}</span>
          <h2 id="tool-dialog-title">${escapeHtml(tool.name)}</h2>
          <code>${escapeHtml(tool.toolId)}</code>
        </div>
        <div class="tool-layers">${layerMarkup(tool.layers)}</div>
      </div>
      <div class="dialog-body tool-dialog-body">
        <div class="execution-boundary">
          <span>EXECUTION BOUNDARY</span>
          <strong>Create-Me plans and reads receipts. ${escapeHtml(tool.executionOwnerRepo)} executes and retains authority.</strong>
        </div>
        <div class="request-result-grid">
          <section><span>Request contract</span><ul>${listMarkup(tool.request)}</ul></section>
          <div class="command-channel"><span>OWNER COMMAND</span><code>${escapeHtml(tool.command)}</code></div>
          <section><span>Result contract</span><ul>${listMarkup(tool.result)}</ul></section>
        </div>
        <section class="tool-plan">
          <span>Read-only plan</span>
          <ol>${tool.plan.map((step, index) => `<li><b>${String(index + 1).padStart(2, "0")}</b><p>${escapeHtml(step)}</p></li>`).join("")}</ol>
        </section>
        <div class="authority-grid">
          <section><span>Tool owns</span><ul>${listMarkup(tool.owns)}</ul></section>
          <section><span>Tool does not own</span><ul>${listMarkup(tool.doesNotOwn)}</ul></section>
          <section class="hold-panel"><span>Explicit HOLD conditions</span><ul>${listMarkup(tool.holdConditions)}</ul></section>
          <section><span>Nonclaims</span><ul>${listMarkup(tool.nonclaims)}</ul></section>
        </div>
        <div class="identity-stack">
          <span><small>Accepted source</small><code>${escapeHtml(tool.source)}</code></span>
          <span><small>Verified PR head</small><code>${escapeHtml(tool.verifiedHead)}</code></span>
          <span><small>Manifest blob</small><code>${escapeHtml(tool.manifestBlob)}</code></span>
          <span><small>Evidence scope</small><code>${escapeHtml(tool.evidenceScopes.join(", "))}</code></span>
        </div>
        <div class="dialog-actions">
          <a href="${escapeHtml(tool.manifestUrl)}" target="_blank" rel="noreferrer">Open exact manifest ↗</a>
          <a class="repo-action" href="${escapeHtml(tool.workflowUrl)}" target="_blank" rel="noreferrer">Evidence run ↗</a>
          <button type="button" data-copy-source="${escapeHtml(tool.sourceHead)}">Copy source head</button>
        </div>
      </div>`;
    toolDialogContent.querySelector("[data-copy-source]").addEventListener("click", async (event) => {
      const button = event.currentTarget;
      try {
        await navigator.clipboard.writeText(button.dataset.copySource);
        button.textContent = "Source head copied";
      } catch {
        button.textContent = button.dataset.copySource;
      }
    });
    if (typeof toolDialog.showModal === "function") toolDialog.showModal();
    else toolDialog.setAttribute("open", "");
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
  toolDialog.addEventListener("click", (event) => {
    if (event.target === toolDialog) toolDialog.close();
  });

  document.querySelector("#seat-grid").innerHTML = state.seats.map(([name, file], index) => `
    <a href="../status/${file}"><span>${String(index + 1).padStart(2, "0")}</span><strong>${escapeHtml(name)}</strong><i>↗</i></a>
  `).join("");

  renderSummary();
  renderConstellation();
  renderTools();
  renderDomains();
  window.AXMStudioShell = Object.freeze({ openDomain, openTool, state });
})();
