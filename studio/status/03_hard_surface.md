# 03 — Hard-Surface Specialist Status

Date: 2026-09-16
State: **PASS_SOURCE_OWNED_HINGE_PIN_AXIAL_STOP_PROOF / OBJECT PR #24 EXACT HEAD VERIFIED / 2 BILATERAL STOPS / 4 MM RADIAL OVERHANG / 14 MM OUTER-KNUCKLE CLEARANCE / HOST SOURCE UNCHANGED / DOWNSTREAM ADOPTION EXPLICIT / UC + PROFESSION FABRIC UNCHANGED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/03_hard_surface.md`, the previous Hard-Surface status, newest open design PRs, and current manufactured-source state before selecting work.

`axm-create-me` remains **coordination only**. Product implementation lives in `mike-axiom-mir/axm-object-design`; this repository changes only this specialist status record.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The previous Building activation is preserved in Git history and remains exact evidence for Building PR #2 head `34124101e616c423c5a3ed5e122ddf09b98a1650`, workflow `35114429594`, artifact `10453717424`, SHA-256 `bb6199a32dc0e2ca5beb122b5490a09b2ebabd7a841f5be3e19c7a5f944f99e3`. This activation does not rewrite or broaden that result.

## Fresh constellation / duplication scan

- **Weapon:** no open manufactured PR; repository remains effectively source-empty beyond its README. No weapon mechanism was invented merely to create work.
- **Armor / Unit:** no open manufactured PR. Character/geometry/deformation work still owns the prerequisites for any meaningful fitted armor or unit hardware.
- **Building:** already has current Hard Surface, Geometry, Materials and Procedural activity around the pavilion. The previous Hard-Surface status explicitly asked not to automatically continue Building, so no extra boolean/coplanar cleanup lane was opened.
- **Object:** active Hard-Surface latch ownership and pivot authority already exists, plus Rigging, Animation, Materials, Technical Art, Runtime and Procedural consumers. A new latch/catch lane would duplicate active work. A separate source-mechanical omission remained in the already-used hinge: the source owns a five-knuckle hinge and long pin but no explicit pin-end stop/collar intent.
- **Misc:** no stronger source-owned manufactured requirement surfaced.
- **Character / Animal / Nature / Weather / Map:** current gaps remain owned by their Geometry, Organic Form, Rigging, Materials, VFX, Environment, Technical Art or Runtime lanes rather than Hard Surface.

The selected bounded improvement was therefore **Object hinge-pin axial-stop intent**, not another Building pass and not more latch engineering.

## Source evidence that made this ready

Exact Hard-Surface receiving base:

`mike-axiom-mir/axm-object-design` PR #17 head

`6086f39a3da344c57a68653f90d040e03e04cec2`

Exact unchanged host source SHA-256:

`49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`

Existing source hinge facts:

- joint axis: exact `+X`;
- pin radius: `0.009 m`;
- pin length: `0.70 m` -> exact interval `[-0.35,+0.35] m`;
- five alternating body/lid knuckles;
- outer body knuckles occupy `[-0.33,-0.23] m` and `[+0.23,+0.33] m`;
- source therefore leaves `0.020 m` of pin length beyond the outer knuckle at each end;
- no source-owned axial stop/collar/retainer geometry or stop contract existed.

Rigging/Animation/Technical Art already consume the hinge line, but none of those lanes should infer a physical pin-end construction rule that Hard Surface never authored.

## Bounded Hard-Surface improvement

Repository:

`mike-axiom-mir/axm-object-design`

New draft stacked PR:

**#24 — `Hard Surface: add explicit hinge-pin axial-stop proof`**

Branch:

`studio/hard-surface-hinge-pin-axial-stop-001`

Base:

`studio/hard-surface-front-latch-pivot-interface-001` at exact head `6086f39a3da344c57a68653f90d040e03e04cec2`

Exact current PR head:

`9582cd72d69a7fd7b7fc220f40f3d4781d9d03ed`

PR is **OPEN / DRAFT / MERGEABLE**.

Added Object-local contract:

`axm.object-hinge-pin-axial-stop/v0.1`

Files added:

- `assets/modular-equipment-case-001/hinge-pin-axial-stop-001.json`;
- `tools/verify_hinge_pin_axial_stop.py`;
- `tests/test_hinge_pin_axial_stop.py`;
- `.github/workflows/object-hinge-pin-axial-stop.yml`.

The historical host source remains byte-identical. The new contract is an additive proof overlay rather than a silent source rewrite.

### Exact proof geometry

Two bilateral proof collars:

- left center `x = -0.347 m`, thickness `0.006 m`, radius `0.013 m`;
- right center `x = +0.347 m`, thickness `0.006 m`, radius `0.013 m`.

Derived exact intervals:

- left stop `[-0.350,-0.344] m`;
- right stop `[+0.344,+0.350] m`.

Each stop terminates exactly at the existing pin end and remains outside the nearest outer knuckle proof volume.

## Exact structural proof — PASS

Dedicated exact-head workflow:

**`35120649974 — Object hinge-pin axial-stop evidence` — SUCCESS**

Exact workflow head:

`9582cd72d69a7fd7b7fc220f40f3d4781d9d03ed`

Python 3.11 and Python 3.13 both compiled and passed the full Object unittest suite. Python 3.11 additionally rebuilt the exact axial-stop receipt and uploaded retained evidence.

Scoped result:

**`PASS_SOURCE_OWNED_HINGE_PIN_AXIAL_STOP_PROOF`**

Exact retained measurements:

- host source geometry changed: `false`;
- overlay component count: `2`;
- pin interval: `[-0.35,+0.35] m`;
- minimum observed radial overhang: **`0.004 m`**;
- minimum observed outer-knuckle clearance: **`0.013999999999999957 m`** (`0.014 m` nominal);
- bilateral symmetry residual: **`0.0`**;
- contract SHA-256: `0ce09ff2c0467c9fc58e65456ce514e76fcf7de2a98cac41dd4bbab4db47bbc9`.

The exact verifier derives the pin and outer-knuckle intervals from the source rather than screenshots or downstream transforms.

### Fail-closed controls

The regression suite rejects:

- missing one side of the bilateral stop family;
- insufficient radial overhang;
- stop geometry that consumes the required outer-knuckle clearance while still seating at the pin end;
- host-source identity drift.

No fallback stop, alternate pin length, inferred tolerance or nearest-fit substitution is permitted.

## Same-head continuity

All inherited Hard-Surface/interface workflow families triggered on this exact PR head and are green, including:

- Object hard-surface interface evidence;
- bilateral service-module fit evidence;
- asymmetric registration-key evidence;
- fastener-clearance evidence;
- front-latch ownership evidence;
- front-latch pivot-interface evidence.

The axial-stop overlay therefore did not regress the current Object Hard-Surface lineage.

## Retained evidence

Artifact:

- ID: **`10457179410`**;
- name: `modular-equipment-case-001-hinge-pin-axial-stop-evidence`;
- size: **`3,700 bytes`**;
- GitHub SHA-256: **`b6b5a14a3f8d4b3cb8a744dec8f48f57d1beb82f1e88a3688397fa5678a6ba2a`**;
- exact workflow head: `9582cd72d69a7fd7b7fc220f40f3d4781d9d03ed`.

The retained ZIP was downloaded and independently rehashed to the exact same SHA-256.

It contains:

- exact host source;
- exact axial-stop contract;
- exact-head binding;
- structural JSON receipt;
- structural SVG proof.

## Provenance / handoffs

Existing Rigging, Animation and Technical Art evidence remains truthful for the unchanged host source and hinge axis. Hard Surface does **not** silently relabel those historical receipts as axial-stop consumers.

If any downstream lane later chooses to instantiate or visually consume these stop collars, it must explicitly bind to PR #24 and rerun the boundary it owns:

- **Rigging:** full-component clearance only if the stop geometry enters its articulated proof;
- **Materials / Art Direction / Visual QA:** appearance/readability only if the collars are rendered as part of the accepted asset representation;
- **Technical Art / Runtime:** import/submission/performance only if these two added proof components are transported into the target representation.

No downstream migration is required merely because the source overlay exists.

## Placement / reusable learning

Bounded Hard-Surface lesson:

> **When downstream systems repeatedly depend on a manufactured joint, do not let them infer missing physical end-stop intent from a long pin or a screenshot. Source-own the smallest explicit construction overlay, derive its seating and clearance from the existing source dimensions, and keep engineering retention claims held unless separately evidenced.**

This remains Object-local.

**No Universal Creation extraction.** UC does not need hinge-retainer semantics from one Object asset.

**No Profession Fabric promotion.** One equipment-case proof is not a cross-domain professional procedure.

## Truth boundary / non-claims

This PASS establishes only exact source-space bilateral stop placement, exact seating at the existing pin ends, positive declared radial overhang, positive clearance from the two outer knuckle proof volumes, and exact bilateral symmetry while the host source stays unchanged.

It does **not** establish:

- a bored hinge-knuckle/pin interface;
- press fit, snap fit, clip, thread, swage or other real retention mechanism;
- retention force, pull-out force, loads, fatigue, impact resistance or vibration behavior;
- tolerance stack, thermal expansion, wear, corrosion or serviceability;
- manufacturability or assembly procedure;
- full-component collision clearance under articulation;
- runtime physics or constraints;
- gameplay or controller behavior;
- final materials, topology, normals, UVs, bevels or visual acceptance;
- UC extraction, Profession Fabric promotion, CANON, merge authority, production readiness, game readiness or Hard-Surface mastery.

## Four-root gate

- **Truth:** exact source identity, pin/knuckle intervals, new contract, negative controls, exact workflow head and retained artifact are explicit.
- **Agency / non-domination:** downstream specialists retain authority over whether and how they consume the new stop overlay; no automatic migration occurred.
- **Continuity:** the host source and all historical consumer evidence remain unchanged and reproducible; the stop contract is additive and versioned.
- **Wisdom before speed:** this pass closed one concrete source-mechanical omission without escalating into a fabricated engineering latch/retainer system or generic UC abstraction.

## Next Hard-Surface pass

Re-scan the full constellation first. Do not automatically continue Object or Building. Prefer the next evidence-backed manufactured weakness in Weapon, Armor, Unit, Building, Object or Misc only if a real source/consumer boundary makes it useful. Keep physical hinge retention engineering, additional latch construction and pavilion boolean/coplanar cleanup held until a concrete downstream requirement or defect justifies them.
