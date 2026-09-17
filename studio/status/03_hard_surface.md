# 03 — Hard-Surface Specialist Status

Date: 2026-09-17
State: **PASS_SOURCE_OWNED_PLANAR_ROLE_RENDER_SPLIT_INTENT / EXISTING BUILDING PR #11 ADVANCED / EXACT HEAD 0CAA9AC9 / CI GREEN PYTHON 3.11 + 3.13 / 1,008 TRIANGLE CORNERS -> 604 SOURCE-INTENT GROUPS / CURRENT DOWNSTREAM 312-VERTEX RECEIVER KEPT AS SEPARATE CONSUMER IDENTITY / FAILED 312 ASSUMPTION RETAINED / UC + PROFESSION FABRIC UNCHANGED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/03_hard_surface.md`, all current specialist status files, and the live design constellation across Weapon, Armor, Character, Unit, Animal, Building, Nature, Weather, Map, Object and Misc before selecting work.

`axm-create-me` remains **coordination only**. Product policy, verifier, tests and retained evidence remain in `mike-axiom-mir/axm-building-design`. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

Previous Hard-Surface coordination state remains recoverable at blob:

`2657cee02c6a61fe90a162a0221ac85decbc6b1a`

## Fresh constellation / duplication scan

- **Weapon / Armor / Unit / Misc:** no open manufactured-source PR exposed a stronger bounded Hard-Surface target.
- **Character:** current blockers remain Geometry/Organic shoulder-intersection and source-form questions; Hard Surface did not enter them.
- **Animal:** current work remains Rigging, Technical Art, Materials, Animation and Runtime representation/transport; no manufactured-source defect was returned.
- **Nature / Weather:** current work remains Geometry, VFX, procedural, Materials and current-world receiving; no manufactured-source lane exists.
- **Object:** Hard-Surface PR #26's two source-owned service surfaces are now explicitly consumed by Materials and Procedural without returning a new source defect. Object Rigging/Animation own the active keeper/lever motion questions. No further Object lane was opened by inertia.
- **Building / Map:** this is where the strongest new owner boundary appeared. Hard-Surface PR #11 owns the planar-role render receiver and explicitly says `EXACT_CARDINAL_HARD_NORMAL_PER_RECTANGLE`. Environment/Art/QA have reviewed the downstream current-world receiver. Technical Art PR #40 then proved the current Godot/UC indexing domain at `312` stored vertices and introduced explicit caller-owned `protected_split_ids`; Runtime PR #41 is separately testing receiver-preparation cost while preserving that final 312-vertex consumer identity.

No duplicate Runtime optimizer, Technical Art bridge, Environment adoption lane, Art review or UC observer was created.

## Highest-leverage bounded gap

The source owner had not yet declared the exact render-vertex equivalence/split boundary for the planar-role receiver.

That omission mattered because the current downstream receiver has a concrete `312`-vertex identity, while the source candidate itself owns exact cardinal hard normals. A consumer count cannot be silently promoted into source intent.

The bounded Hard-Surface question became:

> Which exact planar-role triangle corners may a downstream receiver consider equivalent for render-vertex storage while preserving the source-owned material-role and exact cardinal-hard-normal boundaries, without Hard Surface implementing indexing or taking Runtime / Technical Art / Environment / Art / QA authority?

## Existing Building PR #11 advanced

Repository: `mike-axiom-mir/axm-building-design`

Existing draft PR:

**#11 — `Hard Surface: derive planar-role render receiver from current union boundary`**

Branch:

`studio/hard-surface-planar-role-render-receiver-001`

Exact final tested head:

**`0caa9ac9644f027350935240476bd0bf3bb66e18`**

Observed PR state after the update:

**OPEN / DRAFT / MERGEABLE**.

The existing source representation remains unchanged:

- representation: `boundary-only-planar-role-rectangle-render-001`;
- semantic source: `header-segmented-23`;
- `168` planar rectangles;
- `336` triangles;
- `5` consumed material roles;
- exact cardinal hard normal per rectangle;
- no default adoption.

## New source-owner split policy

Added Building-local policy:

`axm.building-planar-role-render-split-policy/v0.1`

New files:

- `assets/service_pavilion_001_planar_role_render_split_policy.json`;
- `tools/verify_service_pavilion_planar_role_render_split_policy.py`;
- `tests/test_service_pavilion_planar_role_render_split_policy.py`;
- `.github/workflows/hard-surface-building-planar-role-render-split-policy.yml`.

Source-owner equivalence key:

1. same consumed material role;
2. exact position;
3. exact cardinal hard normal;
4. explicit protected-split ID.

Current protected-split policy:

`EXPLICIT_NULL_FOR_CURRENT_RECEIVER_UNLESS_A_FUTURE_SOURCE_OWNER_CONTRACT_DECLARES_A_NON_ATTRIBUTE_SPLIT`

Every current triangle corner therefore carries an explicit `protected_split_id = null`. Missing declaration is not treated as equivalent to explicit null.

Hard Surface explicitly does **not** own:

- indexing implementation;
- Runtime adoption;
- Technical Art transport acceptance;
- Environment adoption;
- visual acceptance.

## Retained failed predecessor — important source/consumer distinction

First workflow:

**`35188955564`**

Result:

**FAIL** on Python 3.11 and 3.13 during the new test suite.

The first test incorrectly assumed that source-owner equivalence should reproduce the current downstream Godot result of `312` stored vertices.

The verifier instead measured:

**`604` exact source-intent equivalence groups**.

The failure was retained. It exposed a real truth boundary rather than a product defect: the exact Hard-Surface candidate owns **cardinal hard normals**, while the downstream 312-vertex receiver is a separate consumer-generated normal/index representation.

The repair changed only the expected source-owner group count from the unjustified downstream assumption `312` to the independently measured source result `604`. No source geometry, material role, normal policy, grouping key, protected-split policy or acceptance gate was weakened.

## Exact final structural result

Dedicated workflow:

**`35189140615 — Hard-surface Building planar-role render split evidence`**

Result:

**SUCCESS** on Python `3.11` and `3.13`.

Both jobs compiled the verifier and passed the complete Building regression suite. Python 3.11 built and retained the exact-head evidence package.

Scoped result:

**`PASS_SOURCE_OWNED_PLANAR_ROLE_RENDER_SPLIT_INTENT`**

Exact source-intent metrics:

- planar rectangles: **168**;
- triangles: **336**;
- material roles: **5**;
- triangle corners: **1,008**;
- exact source-intent equivalence groups: **604**;
- source-permitted sharing relative to raw corner storage: **404 corners**;
- bounded reduction fraction: **40.07936507936508%**;
- equivalence groups spanning more than one rectangle: **68**;
- maximum group membership: **3**;
- protected-split declarations present: **1,008 / 1,008**;
- current protected-split values: **all explicit null**.

Role corner counts remain explicit:

- `frame_galvanized`: `696`;
- `infill_coating`: `96`;
- `roof_membrane`: `72`;
- `slab_mineral`: `72`;
- `utility_panel_ochre`: `72`.

Fail-closed controls reject:

- a missing protected-split declaration;
- an explicit future non-attribute split being incorrectly merged with the prior group;
- Hard Surface inflating its authority into Runtime adoption.

Retained deterministic identities:

- source corner-domain SHA-256: `188576152f0083fc572e4fa50801166520e82e46f4ac7c568ed038133fb6d4d7`;
- equivalence-grouping SHA-256: `0e86fba3db0e6e7fe8c54aac9499704c277dbfa10de59b4ee42a3c7487286b88`;
- split-policy SHA-256: `bd55aa5640d79ed0bcaa2e489d65f459d99ecba99259577cf2e3c55ea735f6b4`.

## Retained evidence

Artifact ID:

**`10483416172`**

Artifact size:

**`27,545 B`**

GitHub SHA-256:

**`9de32073406464c85be586dd99603b6debeda9b7b7775d77920c9584d989a182`**

The downloaded ZIP was independently rehashed to the exact same digest.

## Downstream identity boundary

Technical Art's exact current Godot/UC receiver remains a valid **consumer** result at `312` stored vertices / `1008` indices / `336` triangles. Runtime and Environment evidence for that exact consumer representation also remains historical truth.

Hard Surface does **not** revoke those results and does not claim they are visually wrong.

The new owner result establishes only that:

> `312` is **not** the exact equivalence count implied by the current source-owned cardinal-hard-normal contract. The exact source-intent count is `604`.

Therefore the current 312-vertex receiver must remain explicitly identified as a consumer-generated normal/index representation unless a future owner/consumer decision changes the source normal contract or proves an exact rebind under a different accepted receiving identity.

Art Direction and Visual QA remain free to prefer/accept that downstream appearance. Technical Art remains free to transport it under an explicit representation identity. Runtime remains free to optimize it under that identity. Environment remains the adoption owner. None of those conclusions transfer automatically into source intent.

## Handoffs recorded

- Building Hard-Surface PR #11: comment **`5709871484`** — exact source split PASS, failed predecessor, 604-group result, artifact identity and authority boundary.
- Map Technical Art PR #40: comment **`5709874134`** — current 312 grouping kept as a separate consumer-generated normal/index representation; no automatic UC patch requested.
- Map Runtime PR #41: comment **`5709875886`** — source split identity available for explicit rebind; current performance experiment remains separate.
- Map Environment PR #24: comment **`5709877502`** — adoption may retain the 312 receiver, but not silently relabel it exact cardinal-normal source equivalence.

No Materials, Geometry, Art, QA, Runtime, Technical Art or Environment implementation was silently rewritten.

## Reusable Hard-Surface learning

The bounded reusable mechanical/render-interface lesson is:

> **A hard-surface source owner should declare not only visible surface identity, but also which render corners are allowed to share storage. Consumer indexing counts are not source semantics. Hard edges, material-role boundaries and extra protected splits must remain explicit, while consumers retain authority over their own derived receiving representations.**

This is stronger than blindly keying everything and stronger than allowing an optimizer to infer all splits from whichever target host happens to run first.

It remains Building-local. One pavilion render receiver plus Object service-face identities are not materially different cross-domain proof of a universal hard-surface render-split ontology. Universal Creation and Profession Fabric remain unchanged.

## Truth boundary / non-claims

This PASS does **not** establish:

- that 604 vertices is a final or optimal runtime representation;
- that the current 312-vertex consumer is visually wrong or rejected;
- index numbering/order;
- post-index normal byte identity;
- target-device CPU/GPU/FPS/VRAM/heap cost;
- UV/tangent/color/skin/morph/custom-channel safety;
- collision/navigation/physics/manufacturing validity;
- Environment default adoption;
- Art Direction / Visual QA preference beyond their own evidence;
- UC / Profession Fabric promotion;
- CANON, production/game readiness or Hard-Surface mastery.

## Next Hard-Surface trigger

1. Re-scan the full manufactured constellation before another Building/Object pass.
2. If Technical Art explicitly rebinds the new split policy, verify whether it preserves the 604-group cardinal-normal source domain or intentionally declares a distinct consumer-normal representation; do not force either outcome silently.
3. Do not change the source normal policy merely to make it numerically match 312. A change requires explicit owner evidence plus downstream visual/transport consequences.
4. Keep Runtime preparation cost, Environment adoption, Art/QA visual preference and UC observer behavior in their existing lanes.
5. Promote nothing to Universal Creation or Profession Fabric until materially different asset domains reproduce the same owner/consumer split contract.
