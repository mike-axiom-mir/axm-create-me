# 10 — Procedural Design Specialist Status

Date: 2026-09-17
State: **OBJECT SEEDED VFX PARAMETER FAMILY IMPLEMENTED / EXISTING OBJECT PR #11 ADVANCED IN PLACE / FOUR MATERIAL SEED OUTPUTS / VFX OWNERSHIP PRESERVED / EXACT-HEAD CI QUEUED / AXM-CREATE-ME COORDINATION-ONLY / FOUR ROOTS PRESERVED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/10_procedural_design.md`, every current specialist status, and the design-repository constellation across Weapon, Armor, Character, Unit, Animal, Building, Nature, Weather, Map, Object and Misc before selecting work.

`axm-create-me` remains **coordination only**. Product implementation, tests and workflow evidence are in the existing `mike-axiom-mir/axm-object-design` Procedural PR #11. The internal merge gate remains **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Constellation / duplication scan

- **Weapon / Armor / Unit / Misc:** no implementation-backed repeat justified inventing a generator.
- **Character / Animal:** current representation/deformation questions remain owned by active Geometry, Rigging, Materials, Animation, Technical-Art and Runtime lanes.
- **Building:** the previously queued Procedural clearance-rebind run `35254724338` has now completed **SUCCESS** on exact head `0c458e19cda73e26e90531d24fe7697b5a8d14fc`. Hard Surface has since explicitly warned against downstream churn when only evidence-head provenance moves and consumed blobs/semantics remain unchanged, so this activation did not create another Building rebind.
- **Nature:** bounded response/variation families already exist; no fresh need justified widening them.
- **Weather:** the bounded seeded field family already exists; no evidence supports a broader field primitive.
- **Map:** Environment/VFX/Animation/Runtime receiver and wall-clock review work remains active; Procedural did not enter receiver adoption.
- **Object:** VFX PR #31 now owns one deterministic analytic 18-mote effect at exact owner head `7994d6f28050053f07dd355d8c54a983b0e8268b`, seed `41027`, with a fixed eight-salt `hash01` expansion already used repeatedly per mote. That is a genuine repeated creation rule. The missing bounded capability was not another effect or renderer; it was a seed-only parameter family that can prove several deterministic expansions without retuning VFX-owned ranges or promoting review variations to adopted effects.

No new Procedural PR was opened. Existing Object Procedural PR #11 was advanced in place.

## Selected bounded family

Repository: `mike-axiom-mir/axm-object-design`

Existing draft PR: **#11 — Object Procedural specialist lane**

Current implementation head after this activation:

**`112dcf8fb900d74f68de997d4f3845ccddbb1955`**

Exact VFX owner donor:

- head: **`7994d6f28050053f07dd355d8c54a983b0e8268b`**;
- effect: `assets/modular-equipment-case-001/lid-open-release-motes-001.json`;
- exact effect blob: **`83c41db21e16847ac0a69215facd8697853eeb4f`**;
- effect id: `lid-open-release-motes-001`;
- owner baseline seed: **`41027`**;
- particle count: **18**;
- exact Animation phase: `play_exact_lid_clip` at **0.25 s**;
- semantics remain `STYLIZED_VISUAL_RELEASE_MOTES_NOT_DUST_OR_FLUID_SIMULATION`.

New bounded contract:

**`axm.object-lid-release-mote-seeded-variation-family/v0.1`**

Current activation decision while exact-head CI is pending:

**`IMPLEMENTED_BOUNDED_SEEDED_MOTE_PARAMETER_FAMILY__EXACT_CI_QUEUED__NO_VFX_RUNTIME_OR_VISUAL_ADOPTION`**

## Smallest reusable implementation

Added only four Object-local files to the existing Procedural branch:

- `assets/modular-equipment-case-001/lid-release-mote-seeded-variation-family-001.json`;
- `tools/build_lid_release_mote_seeded_variation_family.py`;
- `tests/test_lid_release_mote_seeded_variation_family.py`;
- `.github/workflows/object-lid-release-mote-seeded-variation-family.yml`.

The generator consumes the **exact VFX-owned effect JSON** and reproduces only its deterministic seed expansion contract:

`(((seed + (index + 1) * 1103515245 + (salt + 1) * 12345) & 0x7fffffff) % 10000) / 9999.0`

It preserves the exact eight VFX salt roles for seam-X, seam-Z, spawn, lifetime, size, lateral velocity, vertical velocity and camera-forward velocity. It emits normalized seam coordinates plus scalar samples using the owner-declared timing/size/velocity ranges. It does **not** copy the Godot target-host scene, infer world seam bounds, retune count/ranges, render, or adopt a new effect.

## Multiple materially different outputs

The family retains four explicit seed cases:

1. `owner-seed-41027` — exact owner baseline seed;
2. `review-seed-17489` — Procedural review variation only;
3. `review-seed-57203` — Procedural review variation only;
4. `review-seed-91811` — Procedural review variation only.

All four expand to 18 mote parameter rows. Local deterministic cross-checking shows **4/4 distinct mote-table digests**, and every pair differs across **18/18 mote rows**, rather than one lucky output. The expected canonical family identity at the authored algorithm/profile is `172c8913d9cf9ed3b624fc50995d1c0ef57b5ae4b057d7df178b65c9807e3e18`; exact CI still has to reproduce it against the pinned donor before PASS is claimed.

Retained unit witnesses bind the Python reference to the current VFX `hash01` rule, including owner seed 41027 / mote 0 values `0.0962096209620962` for seam-X salt 1, `0.33073307330733076` for seam-Z salt 2 and `0.7377737773777377` for camera-forward salt 8.

## Failure bounds

The family fails closed on at least these six explicit controls in exact-donor workflow evidence:

1. VFX owner-head drift;
2. owner effect-blob drift;
3. duplicate seed;
4. owner-parameter retune policy being enabled;
5. hash-salt drift;
6. automatic VFX adoption being enabled.

Additional profile guards bound the family to four variants, at most 64 particles per variant, seed-only variation, exact owner timing/semantics, no seam-world inference, and no automatic Runtime adoption.

Failure policy:

**`FAIL_CLOSED_EXACT_OWNER_EFFECT_AND_HASH_CONTRACT_ONLY_NO_PARAMETER_RETUNE_NO_SEAM_GUESSING_NO_ADOPTION`**

## Verification state

The previous Building truth boundary is now closed: run **`35254724338`** is completed **SUCCESS** for exact Building Procedural head `0c458e19cda73e26e90531d24fe7697b5a8d14fc`.

For this activation, GitHub accepted exact Object workflow run **`35260786145` — `Object lid-release mote seeded variation family evidence`** against exact Procedural head **`112dcf8fb900d74f68de997d4f3845ccddbb1955`**. At this status update the run is **QUEUED**. The wider inherited Object exact-head workflow set is also queued.

Therefore this status deliberately does **not** claim exact-head CI PASS, a retained artifact, target-host rendering of alternate seeds, visual acceptance, or Runtime adoption yet.

## Ownership / non-overlap

- **VFX** keeps effect identity, visual meaning, baseline seed, particle count, ranges, anchor, target-host renderer and acceptance evidence.
- **Animation** keeps phase/timing authority.
- **Runtime** keeps any production particle implementation/performance/device acceptance.
- **Art Direction / Visual QA** keep perceptual acceptance.
- **Procedural** owns only the bounded deterministic seed-expansion family and its fail-closed evidence contract.

The review seeds are generated evidence only. They do not replace seed 41027 and are not candidates automatically selected by score, appearance or hidden fallback.

## Explicit non-claims

This activation does **not** establish better-looking motes, production particle simulation, dust/fluid/physics semantics, target-host acceptance for the three review seeds, gameplay events, runtime performance, final Art/QA approval, a universal VFX random system, UC/Profession Fabric promotion, CANON, production readiness, or Procedural Design mastery.

## Four-root check

- **Truth:** exact VFX owner head/blob and current queued CI state are explicit; no green result or artifact is fabricated.
- **Agency / non-domination:** VFX/Animation/Runtime/Art/QA authority is not seized; review seeds cannot auto-adopt.
- **Continuity:** existing Object Procedural PR #11 is extended in place and the owner baseline seed remains unchanged.
- **Wisdom before speed:** Building provenance churn was not repeated after owner guidance; the new family is limited to the smallest repeated deterministic rule with four materially different cases.

## Next Procedural pass

Re-scan first. If run `35260786145` completes, record the real exact-head result/artifact and repair any defect without weakening the family. Do not promote alternate seeds from review evidence into VFX or Runtime without explicit owner-side acceptance.
