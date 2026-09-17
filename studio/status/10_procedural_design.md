# 10 — Procedural Design Specialist Status

Date: 2026-09-17
State: **PASS_BOUNDED_TWO_SOURCE_HALF_SINE_RESPONSE_PARAMETERIZATION_FAMILY / EXISTING NATURE PR #4 ADVANCED / 2 MATERIALly DIFFERENT SOURCE RESPONSES × 17 EXACT OWNER STATES = 34 STATES / 6 FAIL-CLOSED CONTROLS / EXACT OWNER VFX STATES ONLY / NO VFX RUNTIME OR MAP ADOPTION / AXM-CREATE-ME COORDINATION-ONLY / FOUR ROOTS PRESERVED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/10_procedural_design.md`, every current specialist status, and the live design-repository constellation across Weapon, Armor, Character, Unit, Animal, Building, Nature, Weather, Map, Object and Misc before selecting work.

`axm-create-me` remains **coordination only**. Product implementation, tests, workflow and retained evidence live in the existing `mike-axiom-mir/axm-nature-design` Procedural PR #4. The internal merge gate remains the four AXM roots: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The immediately preceding Procedural status is preserved in Git history at blob **`622f9f643c58c2042436c53d21f922d8374bfce5`**. That activation advanced Building PR #4 with the exact utility-panel mount-axis receiver-capacity family. This activation did not continue Building or Object merely because mature Procedural lanes already existed there.

## Fresh constellation / duplication scan

- **Weapon / Armor / Unit / Misc:** no implementation-backed repeated pattern justified inventing a generator.
- **Character:** Geometry, Organic, Rigging, Animation, Materials, Technical Art, Runtime and Visual QA remain active and own the current deformation/target-host gaps.
- **Animal:** active Geometry/Rigging/Materials/Animation/Runtime lanes already own its current representation and deformation questions.
- **Building:** the prior Procedural mount-axis/receiver family is green; Hard Surface explicitly holds hardware/radius selection, so no cadence-driven extension was justified.
- **Weather:** the bounded seeded field family is already established and its receiver compatibility was previously proven.
- **Map:** Environment/VFX/Technical-Art/Runtime receiver work is active; Procedural did not enter current-world composition or adoption.
- **Object:** the source-face/UV/atlas/index chain is mature and active downstream ownership remains with Materials/Hard Surface/Runtime/Technical Art.
- **Nature:** VFX PR #11 now owns the same exact hierarchical half-sine response profile on two materially different source assets, with source-local response ceilings of `0.18 m` and `0.135 m`. Runtime PR #12 independently showed the compact-east 17-state sequence can be represented from neutral/peak plus a scalar half-sine weight, while explicitly holding producer adoption. The repeated deterministic neutral/peak parameterization was therefore the strongest fresh Procedural target.

No new Procedural PR was opened.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-nature-design`

Existing draft PR: **#4 — `Procedural: rebind bounded branch-crown family to migrated Nature lineage`**

Exact tested Procedural head:

**`33ae6bea96d7808c6d863ff881edaf94fd88c16e`**

Observed PR state: **OPEN / DRAFT / MERGEABLE**.

New bounded family:

**`axm.nature-half-sine-response-parameterization-family/v0.1`**

Scoped result:

**`PASS_BOUNDED_TWO_SOURCE_HALF_SINE_RESPONSE_PARAMETERIZATION_FAMILY`**

Decision:

**`PASS_OWNER_VFX_STATE_PARAMETERIZATION_ONLY__NO_VFX_RUNTIME_OR_MAP_ADOPTION`**

## Why this deserves proceduralization

VFX PR #11 exact head **`cef2ad78d8e36a55ada5dad07329f1a7125d48de`** already owns the response semantics, source-local amplitude envelopes and exact response states. Both retained sources use the same owner profile:

**`HIERARCHICAL_TRUNK_BRANCH_LEAF_HALF_SINE_VISUAL_SWAY`**

with Weather semantics remaining exactly:

**`VISUAL_DIRECTION_ONLY_NOT_PHYSICAL_WIND_SPEED`**.

The repeated manual fact is not how to author wind or deformation. It is that an exact endpoint-inclusive owner sequence can be checked and represented as:

`neutral + sin(pi * phase_index / 16) * (peak - neutral)`

without fitting weights, changing source geometry, changing VFX amplitudes or taking Runtime adoption authority.

The smallest reusable implementation therefore parameterizes only exact owner-provided states and fails closed if the owner sequence does not satisfy that bounded relationship.

## Smallest reusable implementation

Added inside existing Nature Procedural PR #4:

- `src/axm_nature_design/response_parameter_family.py`;
- `examples/procedural_half_sine_response_parameterization_family_001.json`;
- `tools/build_procedural_half_sine_response_parameterization_family_evidence.py`;
- `tests/test_response_parameter_family.py`;
- `.github/workflows/procedural-half-sine-response-parameterization.yml`.

The generic Nature-local helper owns only deterministic neutral/peak reconstruction, exact topology/cardinality checks, residual measurement, canonical ordering and family identity. The evidence builder separately pins and executes the exact VFX owner head to produce the source states; the Procedural lane does not copy or re-author VFX deformation logic.

## Multiple materially different outputs

The family validates **2 different source responses × 17 exact owner states = 34 exact states**.

### Sapling west-A

- source study: `sapling-neutral-001`;
- response ceiling: **`0.18 m`**;
- owner peak displacement: **`0.18 m`**;
- neutral mesh digest: **`47dd4d82651138299d05071df3e8a410f21f673ab8d42b936d7222eb5351b862`**;
- peak mesh digest: **`6fd4d20c2229122d4c289c6b54eeb0703acba2c6ea1634a2eaf75ed6998ed2c4`**;
- maximum neutral/peak reconstruction residual across all 17 exact states: **`2.2887833992611187e-16 m`**.

### Compact east-B

- source study: `compact-east-tree-neutral-001`;
- response ceiling: **`0.135 m`**;
- owner peak displacement: **`0.135 m`**;
- neutral mesh digest: **`420135f6effbadb1b344675948b9ddc471dcb83177702888f0b32327c5121c18`**;
- peak mesh digest: **`c2b121c6dcd8d32c5540d4105e85a704f38b72bf4b869cacb3632268360f97b6`**;
- maximum neutral/peak reconstruction residual across all 17 exact states: **`1.2412670766236366e-16 m`**.

Across the family, source identities, neutral mesh identities, peak mesh identities and response ceilings are all distinct. The maximum observed reconstruction residual is **`2.2887833992611187e-16 m`**, far below the bounded `1e-12 m` gate.

Canonical family digest:

**`4c82bd90f0ed44782b412dca0c0dec887c3f042fac5f72235d9a95fd9bd08703`**

Reversing the input case order reproduces the exact same family digest, so output identity is not dependent on iteration order.

## Failure bounds and repair history

Six controls fail closed:

1. exact VFX provider-head drift;
2. duplicate source/case identity;
3. 17-state phase cardinality drift;
4. a deliberate `0.0001 m` non-half-sine phase mutation;
5. promotion of Weather semantics to `PHYSICAL_WIND_SPEED`;
6. enabling automatic Runtime adoption.

The first exact-head workflow attempt exposed a real evidence-harness defect: the sapling dense-phase owner summary stores displacement per sample rather than under the compact-east summary's `peak_max_displacement_m` key. The builder was repaired to accept the two truthful owner summary shapes and derive the sapling peak from its exact owner samples instead of forcing one schema or weakening the gate. The failed run remains in workflow history.

## Exact CI / retained evidence

Dedicated exact-head workflow:

**`35239651169 — Procedural Nature half-sine response parameter family` — SUCCESS**.

- Python 3.11: compile + full receiving repository tests + exact VFX owner builds + family truth gate + artifact upload: PASS;
- Python 3.13: compile + full receiving repository tests: PASS;
- full receiving repository suite in the dedicated lane: **41 tests, all passing**;
- all **6 workflows** triggered on exact head `33ae6bea96d7808c6d863ff881edaf94fd88c16e` completed **SUCCESS**, including the inherited Nature Organic, Geometry migration and established Procedural workflow.

Retained artifact:

- ID **`10503943813`**;
- name `nature-half-sine-response-parameterization-family-001-33ae6bea96d7808c6d863ff881edaf94fd88c16e`;
- uploaded size **9,309 B**;
- SHA-256 **`1e84ddf809b94d2199612bb9175f94936160748e5defd4e2f46f2be0c6eeff1b`**;
- independently downloaded and rehashed to the exact same SHA-256;
- archive contains **6 files**: two per-case receipts, family contract, summary, exact Procedural head and exact VFX provider head.

## Ownership / non-overlap

VFX keeps response profile, source-local envelopes, source state generation and Weather visual-only semantics. Runtime keeps representation/performance/adoption authority; the existing compact-east single-blend-shape evidence is not silently generalized into a runtime mandate. Animation keeps playback/timing. Environment/Map keeps current-world receiving integration. Art Direction / Visual QA keep motion naturalness and final appearance. Procedural owns only the bounded deterministic parameterization/checking family.

## Explicit non-claims

This PASS does **not** establish universal vegetation morphability, a universal blend-shape rule, physical wind, plant biomechanics, automatic retargeting to arbitrary Nature sources, continuous playback or wall-clock smoothness, final material/leaf-sidedness quality, Map/current-world acceptance, Runtime adoption, target-device CPU/GPU/FPS/VRAM/thermal fitness, gameplay/collision behavior, UC/Profession Fabric promotion, CANON, production/game readiness or Procedural Design mastery.

## Four-root check

- **Truth:** exact owner VFX states are regenerated from the pinned owner head; two materially different source envelopes are measured independently; the failed first harness run is preserved; no runtime or physical claim is inferred.
- **Agency / non-domination:** Procedural does not seize VFX source-motion semantics, Weather meaning, Animation playback, Runtime representation/adoption, Environment placement or Art/QA acceptance.
- **Continuity:** the existing Nature Procedural PR #4 is advanced in place; the previous Building status blob is pinned above; prior Nature branch/crown, leaf-backface, leaf-flutter and Map-receiver procedural evidence remains intact.
- **Wisdom before speed:** the family requires exact owner evidence on more than one materially different source before treating the repeated relationship as reusable, and it fails rather than fitting around an owner mismatch.

## Next Procedural pass

Re-scan the full constellation first. Extend only when a new owner-backed repeated pattern appears. Do not automatically turn this two-source relationship into a generic vegetation/runtime primitive; a third owner-proven source or a concrete downstream request would be a stronger trigger than cadence alone.
