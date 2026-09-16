# 03 — Hard-Surface Specialist Status

Date: 2026-09-16
State: **BUILDING SOURCE / MAP-SLOT STRUCTURAL PASS / SECOND MANUFACTURED RECEIVER-FRAME DOMAIN OBSERVED / NO SHARED EXTRACTION / OBJECT + WRECKLINE PRIOR EVIDENCE RETAINED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/03_hard_surface.md`, the current Hard-Surface status, newest specialist handoffs, and the live PR constellation before selecting work.

The 11 design repos were scanned as a constellation rather than assuming Object should receive another increment:

- **Weapon** and **Armor** remain README-only and have no implementation-ready hard-surface consumer pressure.
- **Unit** remains empty.
- **Misc** remains README-only.
- **Character** has a source-owned organic A-rest study, but Armor/Unit fit is explicitly unproven, so inventing fitted hard-surface work there would be premature.
- **Animal**, **Nature**, **Weather** and **Map** have active specialist-owned lanes that are not Hard-Surface construction lanes.
- **Object** already has a mature stacked Hard-Surface -> Rigging -> Materials -> Technical-Art chain, including the exact source-owned case/module receiver proof from Hard-Surface PR #5. Adding another Object receiver now would mostly deepen one domain rather than test transfer.
- **Building** had no competing implementation PR and remained source-empty while Map still carries an explicit `proxy:building-pavilion` in the retained Environment baseline.
- **Map** therefore supplied a real independent receiving need rather than an abstraction-count exercise: its source baseline reserves an `8.0 x 2.4 x 3.6 m` building slot at `[0.0, 7.2, 1.8]`, while the readable path ends at `y=5.5 m` and requires a minimum `0.35 m` gap.

That made Building the highest-leverage unoccupied Hard-Surface target: create one real source-owned manufactured pavilion that fits the already-existing Map slot and independently exercises a source-owned receiver-frame + separate receiving-part pattern at a materially different scale and orientation from Object.

`axm-create-me` remains coordination-only. Product/source implementation in this activation is confined to `mike-axiom-mir/axm-building-design`.

## Selected bounded improvement

Opened draft PR:

**`mike-axiom-mir/axm-building-design#2 — Hard Surface: prove Map-sized pavilion panel receiver pattern`**

Branch:

`studio/hard-surface-pavilion-interface-001`

Exact tested head:

`4faa769b406bf3ad0ba9489a77141c27f122ce51`

PR state after CI:

**OPEN / DRAFT / MERGEABLE**

No merge/CANON authority is inferred.

## Source-owned Building candidate

Added:

- `service-pavilion-001` — schema `axm.building-hard-surface/v0.1`;
- `utility-access-panel-001` — schema `axm.building-utility-panel/v0.1`.

Map provenance is pinned to:

- repo: `mike-axiom-mir/axm-map-design`;
- source ref: `studio/environment-composition-baseline-001`;
- file: `examples/environment_baseline_001.json`;
- exact source blob SHA: `e0d61b4bb8e03d9515eed05fee7da601622b6330`;
- reserved asset: `proxy:building-pavilion`;
- reserved slot: `8.0 x 2.4 x 3.6 m`.

The pavilion is deliberately sparse proof geometry rather than a styled final building. It contains 17 deterministic box components forming slab, roof, columns, headers and rear infill, then exposes two source-owned `building-utility-panel` receiver frames:

1. `front-utility-bay` with outward normal `[0,-1,0]`;
2. `east-utility-bay` with outward normal `[+1,0,0]`.

The two receiver normals are orthogonal (`dot = 0.0`) rather than simple mirrored duplicates. Both use explicit normal/lateral/up frames, a `1.20 x 1.60 m` plate envelope and the same four source-authored mount locations.

A separate `utility-access-panel-001` source declares:

- interface footprint `1.10 x 1.50 m`;
- exact matching four-point mount pattern;
- `0.08 m` outward standoff;
- `0.08 m` proof-body depth;
- minimum required body clearance beyond the receiver plate `0.02 m`;
- local +X -> receiver outward normal, local +Y -> receiver lateral, local +Z -> receiver up.

This is a Building-owned physical interface contract. No Building construction semantics were moved into Universal Creation.

## Structural verification

Added `tools/build_service_pavilion.py` plus unit tests and a dedicated CI workflow.

The verifier requires:

- exact source identity and exact Map-slot provenance;
- finite deterministic proof geometry;
- combined pavilion + both placed panels remain inside the reserved Map slot;
- the existing readable-path gap remains above Map's declared minimum;
- receiver frames are unit-length and orthogonal;
- the same separate panel source fits both differently oriented frames;
- exact tag match;
- panel footprint remains inside the plate envelope;
- exact four-point mount-pattern agreement;
- bounded body clearance outside the plate;
- two receiver normals are materially different/orthogonal.

Negative controls must reject:

- `0.001 m` mount-pattern drift;
- oversized `1.30 m` panel footprint;
- insufficient `0.05 m` standoff.

Exact retained result:

**`PASS_BUILDING_PANEL_RECEIVER_PATTERN_PROOF`**

Measured results from the retained receipt:

- component boxes: `17`;
- placed panels: `2`;
- proof vertices: `152`;
- proof triangles: `228`;
- combined local bounds: min `[-3.8000000000000003, -1.12, 0.0]`, max `[3.92, 1.0, 3.4]`;
- combined size: `7.720000000000001 x 2.12 x 3.4 m`;
- reserved slot: `8.0 x 2.4 x 3.6 m`;
- remaining readable-path gap after placing the exact candidate in the reserved Map position: `0.5800000000000001 m` versus required `0.35 m`;
- receiver-normal dot product: `0.0`;
- mount-pattern residual: `0.0 m` on both receiver frames;
- footprint margin: approximately `0.10 m` in both plate dimensions on both frames;
- body clearance beyond plate: `0.04 m` on both frames.

Source/evidence identities:

- pavilion source SHA-256: `852038d2288ead9a0ee271e09f1a7f7207ec8fd74668e0c52e739e9a224f87d7`;
- panel source SHA-256: `df59fa135abc89f8c85317db1d6b9ce3d03920efc91271de61bfb6289a24c253`;
- deterministic OBJ SHA-256: `e429c354c259c1d87f217bca201ae194cdd09bfd96767ea1b73f223bbbf747da`.

## Exact-head CI and retained evidence

Workflow:

`35063062156 — Hard-surface building evidence`

Exact workflow head:

`4faa769b406bf3ad0ba9489a77141c27f122ce51`

Conclusion:

**SUCCESS**

The workflow compiles and tests on Python 3.11 and 3.13; the 3.11 lane additionally builds the deterministic OBJ + structural receipt and retains them as evidence.

Retained artifact:

- name: `service-pavilion-001-hard-surface-evidence`;
- artifact ID: **`10433320879`**;
- size reported by Actions: **`2,997 bytes`**;
- exact head binding: `4faa769b406bf3ad0ba9489a77141c27f122ce51`;
- archive SHA-256 reported by Actions: **`4689e4e82c3aed9cee15433ea2e7ccd6bded9d5f5d57fe8ec9094863e77f41ec`**.

The retained ZIP was downloaded in this activation and independently rehashed to the same SHA-256. Its `receipt.json` was parsed directly and the values above come from that exact retained artifact.

## Cross-domain hard-surface learning

Object already established one source-owned manufactured receiver family: a utility module fitting explicit case service frames by tag, plate envelope, mount pattern and clearance.

Building now independently exposes the same **class of need** for a materially different manufactured asset:

> **Keep physical receiver meaning in the source domain: an explicit local 3D frame, accepted tag, bounded plate/footprint, exact mount pattern and measurable outward clearance. A separate receiving part can then be tested against that contract without centralizing construction semantics.**

The Building evidence is not a copy of Object geometry or orientation:

- Object proves a compact bilateral case/module interface;
- Building proves one panel source across front and side receiver frames at building scale;
- Building is also constrained by an independently existing Map world slot and path gap.

This is now a real second manufactured domain, so Capability Cartography has stronger evidence that the **principle repeats**. It still does **not** authorize automatic extraction into UC or Profession Fabric. The next question is whether repeated executable mechanics truly require shared machinery, not whether the nouns look similar.

The Cartographer's current guardrail remains intact: source-owned 3D attachment frames are not the same thing as UC's bounded 2D physics translation mounts, and this static Building fit proof does not create a runtime attachment bridge.

## Previous Object and Wreckline evidence retained

Nothing in this activation rewrites the existing Object stack:

- Object Hard-Surface PR #2 remains source/interface owner for `modular-equipment-case-001`;
- Object Hard-Surface PR #5 retains `PASS_BILATERAL_SERVICE_MODULE_FIT_PROOF` for `utility-module-001` at exact tested head `9a0524319cc3fe33bdbb2d76505b2c89a7a9f190`;
- Object Rigging, Materials and Technical Art keep their own separate evidence/acceptance domains;
- the newer Object Technical Art source-frame -> UC GLB -> Godot handoff does not turn the Building panel into a runtime attachment claim.

Wreckline remains held on incomplete historical provider closure. No authentic missing provider appeared in this activation, so its prior Hard-Surface/LOD hold remains unchanged.

## Truth boundary / non-claims

This activation proves only, for exact Building PR #2 head `4faa769b406bf3ad0ba9489a77141c27f122ce51` and the pinned Map baseline slot:

- one deterministic Building source plus two placed panels fit inside the exact reserved building-proxy envelope;
- the existing Map readable-path minimum gap remains satisfied in the bounded source-space placement check;
- one separate panel source fits two orthogonally oriented source-owned receiver frames;
- tag, footprint, four-point mount pattern and bounded outward clearance pass on both frames;
- three explicit malformed variants are rejected;
- exact CI and retained artifact identity are recorded.

It does **not** establish:

- architectural engineering, structural loads, wind/snow/seismic behavior or code compliance;
- foundations, weather sealing, drainage, doors, windows, interior layout or occupancy safety;
- threaded fasteners, clamps, latches, retention, tolerance stacks, fatigue or manufacturing feasibility;
- full mesh collision, navigation, traversal or gameplay suitability;
- runtime attach/detach, constraint behavior, physics or connected-body collision policy;
- final topology, bevel/detail discipline, UVs, materials, wear or LookDev;
- target-engine import or target-device performance;
- Environment integration or replacement of the current Map building proxy;
- Art Director / Visual Observer acceptance of pavilion form, hierarchy or style;
- a universal hard-surface receiver fitter;
- that UC's 2D translation-mount capability implements these 3D source frames;
- Profession Fabric promotion;
- CANON, production readiness, merge authority or Hard-Surface mastery.

## Handoffs

- **Environment / World Art:** Building now has a source-owned candidate structurally bounded to the exact original `proxy:building-pavilion` slot with `0.58 m` measured path gap. If Environment chooses to consume it, make a separate exact proxy-vs-source scene A/B; do not silently replace the Map proxy from this structural PASS.
- **3D Art Director / Visual Observer:** no aesthetic PASS is claimed. If this source becomes a scene candidate, inspect entrance/readability, massing, silhouette and whether the sparse frame reads as intentional rather than final architecture.
- **Capability Cartographer:** Object -> Building is now a real second manufactured-domain repetition of source-owned 3D receiver-frame/tag/footprint/mount-pattern/clearance discipline. Re-evaluate placement as evidence, but do not equate it with UC 2D physics mounts or auto-extract shared machinery.
- **Technical Art / UC Integration:** no UC change is requested. A future Building import/attachment path should preserve the source frame contract explicitly rather than infer generic renderer meaning from names or Euler fields.
- **Runtime / Optimization:** no measurement requested until Environment/Technical Art has a real imported/rendered Building consumer worth retaining.
- **Materials / LookDev:** the panel and pavilion are proof geometry only; surfacing should follow a visual/form gate, not precede it.
- **Object:** preserve its existing receiver evidence unchanged. Building is independent cross-domain evidence, not permission to rewrite Object around a new generic schema.
- **Weapon / Armor / Unit / Misc:** remain unpopulated by this pass; do not clone the pattern merely to raise example count.
- **Wreckline:** retain provider HOLD until authentic closure exists.

## Root gate

- **Truth:** the Building PASS is structural and source-space only; Map integration, visuals, engineering, runtime and gameplay remain separate unclaimed layers.
- **Agency / non-domination:** Building owns pavilion/panel construction semantics; Map owns scene integration; Object retains its own interface semantics; UC is unchanged; no specialist or CI result gains merge authority.
- **Continuity:** the candidate is pinned to the exact existing Map baseline blob and exact PR head; prior Object and Wreckline evidence remain traceable rather than overwritten.
- **Wisdom before speed:** the second-domain test was opened only because Building had a real existing Map proxy slot and no competing implementation lane. It tests transfer without inventing a universal system or filling empty repos for counting purposes.

## Next Hard-Surface pass

1. Re-scan for Art Director / Visual Observer feedback on the new Building candidate and Object materials/form surfaces.
2. If Environment elects to test the pavilion, keep Map integration in Environment ownership and answer only specific hard-surface defects that the receiving A/B exposes.
3. Ask Capability Cartography to treat Object -> Building as repeated source-frame/interface evidence, but preserve the existing no-automatic-extraction guardrail.
4. Do not create Weapon/Armor/Unit/Misc copies without an independent product need.
5. If authentic Wreckline provider closure appears, resume its existing LOD candidate instead of rebuilding from scratch.
