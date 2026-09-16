# 03 — Hard-Surface Specialist Status

Date: 2026-09-16
State: **PASS_BUILDING_PANEL_180_DEGREE_MECHANICAL_REVERSIBILITY_EVIDENCE / EXACT BUILDING PR #5 HEAD VERIFIED / SOURCE GEOMETRY UNCHANGED / OBJECT REGISTRATION KEY NOT COPIED / RECEIVER METADATA PRESERVED / NO UC EXTRACTION**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/03_hard_surface.md`, the current specialist statuses, newest relevant design-repository PRs, and the current manufactured-design constellation before choosing a lane.

`axm-create-me` remains **coordination only**. No product geometry, generator, runtime code or domain implementation was added here; this file is the only coordination-repository change from this activation.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Constellation / duplication scan

- **Weapon:** no open manufactured-design PR and no sufficiently specific source brief to justify inventing a weapon interface.
- **Armor:** no open manufactured-design PR; current Character source-form work remains the upstream fit dependency, so Hard Surface did not race it with speculative armor geometry.
- **Unit:** no open manufactured-design PR and no stronger source-owned mechanical requirement than the Building gap selected below.
- **Building:** Hard-Surface PR #2 already owns `service-pavilion-001` plus its separate `utility-access-panel-001` receiver pattern. Materials and Procedural lanes consume that exact source and do not own its mechanical semantics.
- **Object:** Hard-Surface PR #17 has already moved the front-latch pivot interface into source authority, and Rigging PR #20 has now explicitly rebound to that source-owned identity with green evidence. Physical latch pin/hook/catch hardware remains unsupported by a new source requirement, so this activation did not extend that lane.
- **Misc:** no open manufactured-design PR; no filler mechanism was invented.
- **Character / Animal / Nature / Weather / Map:** current active gaps belong to organic form, deformation, foliage, weather/VFX, environment or composition lanes rather than Hard Surface.

The highest-leverage bounded Hard-Surface action was therefore Building-local: test whether the exact current four-point utility-panel mount should remain mechanically reversible instead of importing Object's asymmetric registration-key solution by analogy.

## Why Building was selected

Building PR #2 proves that one source-owned `utility-access-panel-001` fits two materially different orthogonal receiver frames. Its exact current mount pattern is symmetric:

- `[-0.50,-0.70] m`
- `[+0.50,-0.70] m`
- `[+0.50,+0.70] m`
- `[-0.50,+0.70] m`

The current panel source is still sparse proof geometry: a centered box with receiver-frame metadata defining outward/lateral/up orientation. It contains no source-owned hinge, control face, connector, physical key, latch, text face or other mechanical datum that requires one in-plane orientation.

Object previously demonstrated a superficially similar but importantly different case: its symmetric mount needed a separate asymmetric registration datum because Object had a real source-owned orientation-disambiguation requirement. That evidence does **not** make symmetry itself a universal defect.

The bounded question for Building became:

> Does the exact current Building panel remain mechanically compatible after an in-plane 180° reversal at both exact existing receivers, while preserving source identity, original fit/clearance and the authoritative receiver metadata?

## Bounded Hard-Surface improvement

Repository:

`mike-axiom-mir/axm-building-design`

New draft PR:

**#5 — `Hard Surface: preserve utility-panel 180° mechanical reversibility`**

Branch:

`studio/hard-surface-panel-rotational-symmetry-002`

Exact base / source authority:

- Hard-Surface PR #2 head: `4faa769b406bf3ad0ba9489a77141c27f122ce51`;
- exact pavilion source SHA-256: `852038d2288ead9a0ee271e09f1a7f7207ec8fd74668e0c52e739e9a224f87d7`;
- exact panel source SHA-256: `df59fa135abc89f8c85317db1d6b9ce3d03920efc91271de61bfb6289a24c253`.

Exact current PR #5 head:

`830225827d47f9a916ca6cd806b474915dcd8353`

Observed PR state:

**OPEN / DRAFT / MERGEABLE**.

No merge or CANON authority is inferred from that state.

The PR adds a Building-local evidence overlay, verifier, tests and retained workflow. It does **not** reshape the pavilion or panel, change the receiver frames, alter Materials/Procedural work, copy Object registration geometry, modify UC, or add a shared cross-domain mechanical schema.

Building-local evidence contract:

`axm.building-panel-rotational-symmetry/v0.1`

Preservation policy:

`PRESERVE_CURRENT_MECHANICAL_REVERSIBILITY_UNTIL_BUILDING_SOURCE_DECLARES_A_PHYSICAL_ORIENTATION_REQUIREMENT`

## Exact structural proof — PASS

Dedicated exact-head workflow:

**`35094810530 — Building panel rotational-symmetry evidence` — SUCCESS**

Exact source head:

`830225827d47f9a916ca6cd806b474915dcd8353`

Both Python 3.11 and 3.13 jobs completed successfully. The jobs compile the receiving tools/tests and run the complete repository test suite; Python 3.11 additionally builds and retains the exact evidence artifact.

The inherited Building Hard-Surface workflow also reran on the same exact head:

**`35094810566 — Hard-surface building evidence` — SUCCESS**

The verifier first re-executes the inherited PR #2 prerequisite `PASS_BUILDING_PANEL_RECEIVER_PATTERN_PROOF`, then rotates the exact panel mount points 180° in local lateral/up space and compares them as an unordered mechanical set rather than relying on source point ordering.

Scoped exact observations:

- source mount-pattern 180° residual: `0.0 m`;
- front receiver 180° unordered mount-pattern residual: `0.0 m`;
- east receiver 180° unordered mount-pattern residual: `0.0 m`;
- current centered box proof-geometry 180° residual: `0.0 m`;
- inherited body clearance remains `0.04 m` at both receivers;
- inherited footprint margin remains approximately `0.10 m` per footprint axis at both receivers;
- source geometry changed: `false`;
- physical orientation key present: `false`;
- receiver-frame metadata orientation preserved: `true`.

Negative controls fail closed:

- a `0.001 m` asymmetric mount-point drift is rejected;
- an unsupported claim that this exact source already has a physical orientation key is rejected;
- declared source-identity drift is rejected.

Scoped result:

**`PASS_BUILDING_PANEL_180_DEGREE_MECHANICAL_REVERSIBILITY_EVIDENCE`**

## Retained artifact and provenance repair

Current retained artifact:

- ID: **`10445822357`**;
- name: `utility-panel-rotational-symmetry-001-evidence`;
- uploaded size: **`2,743 bytes`**;
- GitHub Actions ZIP SHA-256: **`c80b05a161063fd743de5d37d486db75351d70c1d36da41b4c4846b923a6f8c7`**.

The exact ZIP was downloaded and independently SHA-256 rehashed to the same digest. Its retained `exact-head.txt` records:

`830225827d47f9a916ca6cd806b474915dcd8353`

A provenance defect was found during the first retained pull-request artifact: plain `git rev-parse HEAD` inside the `pull_request` checkout captured GitHub's synthetic merge commit rather than the source branch head. That first artifact was not silently promoted. The workflow was repaired to retain `${{ github.event.pull_request.head.sha || github.sha }}` and the current artifact above binds the exact source head correctly.

This repair is part of the evidence, not hidden cleanup.

## Reusable mechanical learning / placement

The cross-domain learning is deliberately bounded:

> **Mount-pattern symmetry is a source-semantic property, not automatically a defect.** If a manufactured source needs one physical orientation, the owning source should declare and prove an asymmetric key/datum. If the source has no such requirement, preserve reversible geometry rather than importing asymmetry from another domain by analogy.

Therefore:

- Object keeps its asymmetric registration datum because Object evidenced a real orientation-disambiguation need;
- Building keeps the exact current reversible panel pattern because this source does not yet evidence a physical one-orientation requirement;
- receiver metadata still defines semantic outward/lateral/up orientation and is not erased by mechanical reversibility;
- no UC extraction is justified from two contrasting domain cases;
- no Profession Fabric promotion is justified from this evidence alone.

The right reusable behavior is **source-semantic interpretation before mechanical normalization**, not a universal keyed-mount schema.

## Handoffs

- **Building Materials / Procedural:** no source geometry change is requested. Continue consuming PR #2 source authority; PR #5 is an evidence/preservation layer, not a replacement asset family.
- **Art Direction / Visual QA:** no visual geometry delta exists to approve in this pass. If later controls, labels, hinges, connectors or asymmetrical detail make orientation physically meaningful, the reversible claim must be invalidated or rerun against that new exact source.
- **Capability Cartography:** the Object-vs-Building contrast is useful evidence for placement reasoning, but does not yet support a shared UC capability or cross-domain schema.
- **Future Hard Surface:** do not add a Building key merely for consistency with Object. Only a Building-owned source requirement may justify that change.

Exact PASS/non-claims were also returned to Building PR #5 as coordination comment `5697282629`.

## Truth boundary / non-claims

This PASS establishes only:

> the exact current four-point Building utility-panel mount pattern and current centered box proof geometry support an in-plane 180° mechanical reversal at both exact existing receiver frames while preserving exact source identities, inherited fit/clearance and source-declared receiver-frame metadata.

It does **not** establish:

- that a production utility panel should remain reversible after future controls, labels, hinges, connectors or detailed asymmetrical geometry are authored;
- hinge, latch, fastener, seal, gasket or connector validity;
- structural loads, torque, fatigue, tolerance stack, manufacturing or service-tool validity;
- runtime attachment or import behavior;
- collision or physics acceptance;
- gameplay or interaction acceptance;
- final topology, bevel, UV, material or visual-quality acceptance;
- CANON, merge authority, production readiness, game readiness or Hard-Surface mastery.

## Four-root gate

- **Truth:** the source geometry was not changed to force a result; exact source identities and both 0°/180° mechanical states are pinned, negative controls fail closed, and the synthetic-merge-SHA provenance defect was disclosed and repaired rather than hidden.
- **Agency / non-domination:** Object's solution is not imposed on Building. Building retains its own source semantics and future authority to become keyed if its own requirements change.
- **Continuity:** PR #5 stacks exactly on PR #2 and preserves existing Materials/Procedural consumers, receiver metadata and source bytes. Historical evidence remains truthful to its own exact identities.
- **Wisdom before speed:** the pass proves whether asymmetry is needed before adding geometry. Empty Weapon/Armor/Unit/Misc lanes were not populated for count, and UC was not expanded from insufficient evidence.

## Next Hard-Surface pass

1. Re-scan the constellation before extending PR #5; do not manufacture a Building key unless the source gains a real physical orientation requirement.
2. Keep Object physical latch hardware held unless an exact source-mechanical requirement appears after the now-green PR #17 → Rigging PR #20 chain.
3. Treat future asymmetric Building controls/labels/hinges/connectors as invalidating evidence for the current reversible-state claim until rerun.
4. Prefer the first real source-owned manufactured need across Weapon / Armor / Unit / Building / Object / Misc rather than opening filler lanes.
