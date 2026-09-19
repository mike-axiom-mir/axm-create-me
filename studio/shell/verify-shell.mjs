import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const shellDir = path.dirname(fileURLToPath(import.meta.url));
const studioDir = path.dirname(shellDir);
const repoDir = path.dirname(studioDir);
const read = (relativePath) => fs.readFileSync(path.join(shellDir, relativePath));

const stateSource = read("studio-state.js").toString("utf8");
const sandbox = { window: {} };
vm.runInNewContext(stateSource, sandbox, { filename: "studio-state.js" });
const state = sandbox.window.AXM_STUDIO_STATE;

assert(state, "studio-state.js must publish AXM_STUDIO_STATE");
assert.match(state.recordedAt, /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/);
assert.match(state.controlRoomHead, /^[0-9a-f]{40}$/);
assert.equal(state.domains.length, 15, "the shell must represent all 15 connected repositories");
assert.equal(new Set(state.domains.map(({ id }) => id)).size, state.domains.length, "domain IDs must be unique");
assert.equal(new Set(state.domains.map(({ repo }) => repo)).size, state.domains.length, "repository names must be unique");
execFileSync("git", ["merge-base", "--is-ancestor", state.controlRoomHead, "HEAD"], { cwd: repoDir });

const expectedCounts = { accepted: 2, hold: 6, support: 3, empty: 4 };
const actualCounts = state.domains.reduce((counts, domain) => {
  counts[domain.state] = (counts[domain.state] ?? 0) + 1;
  return counts;
}, {});
assert.deepEqual({ ...actualCounts }, expectedCounts, "state summary must match the bounded convergence record");

const pngSignature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const provenance = [
  fs.readFileSync(path.join(studioDir, "CONVERGENCE_STATE.md"), "utf8"),
  fs.readFileSync(path.join(studioDir, "convergence", "OPEN_PR_MAP_2026-09-19.md"), "utf8")
].join("\n");
for (const domain of state.domains) {
  assert.match(domain.repoUrl, new RegExp(`^https://github\\.com/mike-axiom-mir/${domain.repo}$`));
  assert.match(domain.sourceUrl, new RegExp(`^https://github\\.com/mike-axiom-mir/${domain.repo}(?:/|$)`));
  assert(["accepted", "hold", "support", "empty"].includes(domain.state), `${domain.id} has an unknown state`);
  assert(domain.summary && domain.capability && domain.blocker && domain.next && domain.proof, `${domain.id} is missing truth-boundary copy`);
  if (domain.source !== "no source commit") {
    assert.match(domain.source, /[0-9a-f]{40}$/, `${domain.id} must expose a full source identity`);
    const exactCommit = domain.source.match(/[0-9a-f]{40}$/)[0];
    assert(provenance.includes(exactCommit), `${domain.id} source is not bound to the retained convergence evidence`);
  }
  if (domain.preview) {
    const preview = read(domain.preview);
    assert(preview.subarray(0, 8).equals(pngSignature), `${domain.id} preview must be a readable PNG`);
  }
}

assert.equal(state.seats.length, 14, "all 14 cross-domain Studio seats must be linked");
for (const [name, file] of state.seats) {
  assert(name && file, "seat entries need a name and status file");
  assert(fs.existsSync(path.join(studioDir, "status", file)), `${name} status target is missing: ${file}`);
}

const html = read("index.html").toString("utf8");
const css = read("styles.css").toString("utf8");
const app = read("app.js").toString("utf8");
for (const requiredId of ["domain-grid", "domain-search", "status-breakdown", "seat-grid", "domain-dialog", "dialog-content"]) {
  assert(html.includes(`id="${requiredId}"`), `index.html is missing #${requiredId}`);
}
assert(!/(?:src|href)=["']https?:\/\//.test(html), "the offline shell must not load remote page assets");
assert(css.includes("prefers-reduced-motion"), "reduced-motion behavior is required");
assert(app.includes("navigator.clipboard.writeText"), "identity copy behavior is missing");
assert(app.includes("activeFilter"), "domain filtering behavior is missing");

console.log(`PASS: ${state.domains.length} repositories, ${state.seats.length} seats, ${state.domains.filter(({ preview }) => preview).length} local previews`);
console.log(`PASS: states ${JSON.stringify(expectedCounts)}`);
console.log(`PASS: convergence control head ${state.controlRoomHead}`);
console.log("PASS: every source identity is present in retained convergence evidence");
