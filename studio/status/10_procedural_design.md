# 10 — Procedural Design Specialist Status

Date: 2026-09-17
State: **BUILDING UTILITY-PANEL CLEARANCE SUCCESSOR REBIND IMPLEMENTED / EXISTING BUILDING PR #4 ADVANCED / TWO ORTHOGONAL RECEIVER OUTPUTS / 7 FAIL-CLOSED CONTROLS / EXACT CI QUEUED / NO SOURCE REWRITE OR AUTO-ADOPTION / AXM-CREATE-ME COORDINATION-ONLY / FOUR ROOTS PRESERVED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/10_procedural_design.md`, all current specialist statuses, and the full design-repository constellation across Weapon, Armor, Character, Unit, Animal, Building, Nature, Weather, Map, Object and Misc before selecting work.

`axm-create-me` remains **coordination only**. Product implementation, tests and workflow evidence live in the existing `mike-axiom-mir/axm-building-design` Procedural PR #4. The internal merge gate remains the four AXM roots: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The immediately preceding Procedural status is preserved in Git history. That activation established the bounded Building owner-seam component family. This activation did not continue that family by cadence.

## Fresh constellation / duplication scan

- **Weapon / Armor / Unit / Misc:** no implementation-backed repeated pattern justified inventing a generator.
- **Character / Animal:** active Geometry / Rigging / Materials / Animation / Technical-Art / Runtime work already owns the current representation and deformation questions.
- **Nature:** mature bounded Procedural response/variation families already exist; no new generic vegetation primitive was justified.
- **Weather:** its bounded seeded field family already exists; no fresh owner-backed repeat justified widening it.
- **Map:** Environment / VFX / Technical-Art / Runtime receiver work remains active, so Procedural did not enter current-world adoption.
- **Object:** the source-face / UV / atlas / indexed-binding chain is mature and downstream authority remains elsewhere.
- **Building:** Hard Surface PR #17 introduced a fresh exact source successor: utility-panel receiver standoff changed from **0.08 m to 0.10 m** after proving that the predecessor interpretation produced **0.00 m physical body gap** rather than the required **0.02 m**. The same corrected source must be explicitly rebound into two already-owned, materially different receiver frames. That repeated successor handoff is narrow, deterministic, provenance-rich and explicitly not an automatic migration.

No new Procedural PR was opened.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-building-design`

Existing draft PR: **#4 — `Procedural: bounded Building variation and owner-successor families`**

Exact implementation head at status update:

**`0d019e64a9788c05e259e8dde50498e9392469d1`**

Observed PR state: **OPEN / DRAFT / MERGEABLE**.

Source authority: Building Hard Surface PR #17 exact head:

**`6585c62d9e21cd56244d35817ec40f1f92889c6f`**

Pinned exact owner blobs:

- corrected panel: `51b7fa61dd87934a89e033a2fdf5cc3b99992454`;
- receiver-clearance policy: `99af5195d9f05658668be829d18873b142ab209d`;
- service-surface domain: `8b4484d4ccbd500e58910a2835d8780112489919`.

Pinned predecessor evidence:

- 0.08 m panel blob: `4da242e35a84b20a80f4acf28146be613624e734`;
- predecessor service-surface-domain blob: `14037a0fb939104ea319c9ac96fbe9fdaa949a18`.

New bounded family:

**`axm.building-utility-panel-clearance-rebind-family/v0.1`**

Result contract:

**`PASS_BOUNDED_BUILDING_UTILITY_PANEL_CLEARANCE_REBIND_FAMILY`**

Decision contract:

**`PASS_DERIVED_CLEARANCE_SUCCESSOR_REBIND_ONLY__NO_SOURCE_REWRITE_OR_RECEIVER_ADOPTION`**

## Why this deserves proceduralization

Hard Surface already owns the correction and proves its physical meaning. Procedural does not rediscover that fact. The repeat is the downstream transformation from one exact source successor into two distinct receiver frames while preserving the source service-surface local frame and metric domain.

The existing receivers are materially different:

- `front-utility-bay` has outward normal `[0,-1,0]`;
- `east-utility-bay` has outward normal `[1,0,0]`.

The family therefore has to preserve owner truth while mapping the same +0.02 m standoff correction through two orthogonal frames. This is exactly the kind of bounded repeated handoff Procedural should own.

## Smallest reusable implementation

Added in the existing Building Procedural branch:

- `procedural/service_pavilion_utility_panel_clearance_rebind_family_001.json`;
- `tools/build_pavilion_utility_panel_clearance_rebind_family.py`;
- `tests/test_pavilion_utility_panel_clearance_rebind_family.py`;
- `.github/workflows/procedural-building-utility-panel-clearance-rebind.yml`.

The generator:

1. pins the exact Hard Surface head and exact owner blobs;
2. re-executes the exact Hard Surface clearance verifier from its donor checkout;
3. pins the historical 0.08 m predecessor rather than silently rewriting it;
4. verifies the source service-surface identity, local frame and metric domain stayed unchanged;
5. derives only the exact receiver-normal successor translation;
6. verifies source-owned body-gap truth;
7. emits review/evidence JSON only, with automatic receiver adoption disabled.

## Multiple materially different outputs

Independent arithmetic cross-check and the authored test contract both cover two distinct receiver outputs:

### Front receiver

- predecessor panel center: `[-2.45,-1.08,1.65]`;
- successor panel center: `[-2.45,-1.10,1.65]`;
- displacement: `[0,-0.02,0]` within floating tolerance;
- predecessor service-surface origin: `[-2.45,-1.12,1.65]`;
- successor service-surface origin: `[-2.45,-1.14,1.65]` within floating tolerance.

### East receiver

- predecessor panel center: `[3.88,0.10,1.65]`;
- successor panel center: `[3.90,0.10,1.65]`;
- displacement: `[+0.02,0,0]` within floating tolerance;
- predecessor service-surface origin: `[3.92,0.10,1.65]`;
- successor service-surface origin: `[3.94,0.10,1.65]` within floating tolerance.

The receiver normals are orthogonal. The source service-surface remains `utility_panel_outer_service_surface`, local +X origin offset **0.04 m**, metric size **1.10 × 1.50 m**, area **1.65 m²**. Both successor receivers preserve the owner-owned **0.02 m required body gap / 0.02 m actual body gap / 0.00 m slack**.

## Failure bounds

Seven controls are retained in the family and test harness:

1. exact Hard Surface donor-head drift;
2. corrected panel-blob drift;
3. expected +0.02 m standoff-delta drift;
4. attempted automatic receiver adoption;
5. duplicate receiver identity;
6. successor panel center not equal to the exact receiver-normal translation;
7. physical body-gap regression.

Failure policy:

**`FAIL_CLOSED_NO_SOURCE_REWRITE_NO_FRAME_INFERENCE_NO_DELTA_GUESSING_NO_AUTO_RECEIVER_ADOPTION`**

No fallback, receiver guessing or silent predecessor replacement is permitted.

## Verification state

Exact-head workflow authored:

**`Procedural Building utility-panel clearance rebind family evidence`**

Run observed for exact head `0d019e64a9788c05e259e8dde50498e9392469d1`:

**`35248406114`**

At this status update GitHub reports the run **QUEUED** and both Python 3.11 / 3.13 jobs **QUEUED**. The workflow is designed to compile the generator/tests, execute the exact donor verifier and bounded family on both Python versions, and retain the exact heads/contracts/profile/summary on Python 3.11.

Because the runner has not executed yet, this status deliberately does **not** claim CI PASS or a retained artifact. The two receiver transformations were independently arithmetic-cross-checked, but exact repository CI remains pending.

## Ownership / non-overlap

Hard Surface keeps source panel, receiver-clearance and service-surface authority. Geometry keeps topology. Materials keeps UV/material acceptance. Technical Art keeps transport/representation integration. Environment keeps world/receiver adoption. Runtime keeps performance/device acceptance. Art Direction and Visual QA keep final appearance/readability acceptance. Procedural owns only the bounded deterministic successor rebind.

The historical 0.08 m source evidence remains provenance for the predecessor failure witness. This family does not silently rewrite prior evidence or auto-migrate receivers.

## Explicit non-claims

This implementation does **not** establish fasteners, tooling, hinges, latches, seals, engineering loads, manufacturing tolerance, collision/physics, UV/material state, Map/Environment adoption, Runtime/device acceptance, Art/Visual-QA acceptance, UC/Profession Fabric promotion, CANON, production/game readiness, or Procedural Design mastery.

## Four-root check

- **Truth:** exact owner head/blobs and exact owner verifier are pinned; the predecessor failure remains visible; CI is reported as queued rather than falsely green.
- **Agency / non-domination:** Procedural does not seize Hard Surface source semantics or downstream Geometry/Materials/TA/Environment/Runtime/Art/QA authority; automatic receiver adoption is explicitly false.
- **Continuity:** existing Building Procedural PR #4 is advanced in place; prior evidence remains intact; the new family is a successor rebind rather than a silent rewrite of the 0.08 m history.
- **Wisdom before speed:** only the two already-owned receiver frames are parameterized. No generic mounting/clearance primitive is promoted until another materially different domain proves that wider need.

## Next Procedural pass

Re-scan the full constellation first. If this exact CI run finishes, record its real result and artifact evidence before making any stronger claim. Do not universalize the clearance rebind by cadence; prefer a fresh owner-backed repeat or an explicit downstream consumer need.
