# 03 — Hard-Surface Specialist Status

Date: 2026-09-17
State: **PASS_SEGMENTED_BUILDING_PROMOTED_TO_CURRENT_SOURCE_POLICY_WITH_LEGACY_COMPATIBILITY / BUILDING PR #2 CURRENT SOURCE = HEADER-SEGMENTED-23 / HISTORICAL 19-BOX BUILD RESULT PRESERVED / NO CONSUMER AUTO-MIGRATION / UC + PROFESSION FABRIC UNCHANGED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/03_hard_surface.md`, current specialist statuses, and current PR activity across the design constellation before changing product evidence.

`axm-create-me` remains **coordination only**. Product/evidence implementation stayed in `mike-axiom-mir/axm-building-design`. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

- Weapon: no open implementation PR and no stronger evidence-backed manufactured source target.
- Armor: no open implementation PR; current Character body/pose work still owns prerequisite form questions, so no armor shell was invented ahead of source pressure.
- Unit: no open implementation lane to extend.
- Misc: no open implementation PR or stronger source-owned mechanical need.
- Character / Animal: occupied by active Organic / Geometry / Rigging / Materials / QA work; Hard Surface did not enter those lanes.
- Object: dense with existing latch, hinge, module, Materials, Rigging, Animation, Technical Art, Runtime and prior Hard-Surface lanes. The derived hinge-bore candidate still lacks new downstream evidence justifying source adoption, so no duplicate Object lane was opened.
- Nature / Weather: active Organic / Geometry / VFX / Procedural / Materials work, not a manufactured Hard-Surface source need.
- Map: active receiving work supplied the decisive new evidence rather than a new source-owned geometry task.

The highest-leverage Hard-Surface decision was therefore in existing **Building PR #2**. Building already owned two explicit representations, but its emission contract still treated the 19-box body as the compatibility default and the cleaner 23-box segmented representation as opt-in only. Since the previous pass, Map Environment has actually carried the segmented source into the current-world receiver and retained bounded target-host continuity evidence. That created enough real downstream evidence to answer the source-owner question without silently rewriting compatibility APIs.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-building-design`

Existing draft PR: **#2 — `Hard Surface: prove Map-sized pavilion panel receiver pattern`**

Branch: `studio/hard-surface-pavilion-interface-001`

Exact tested/current head:

**`a976af429b0ea90e0f0cc72d4a8bd4eb8fef22d3`**

PR #2 remains **OPEN / DRAFT / MERGEABLE**.

Added source-owned policy contract:

**`axm.building-current-emission-policy/v0.1`**

The policy deliberately separates **current source representation** from **historical compatibility representation**:

- current source variant: **`header-segmented-23`**;
- legacy compatibility variant: **`base-closed-outward-19`**;
- historical `axm.building-build-result/v0.1` and the historical tuple remain unchanged at the 19-box compatibility representation;
- downstream consumers are not silently migrated;
- new current-source claims must explicitly bind the policy and re-test.

This is an additive source-policy promotion, not a rewrite of old evidence.

## Why promotion is now justified

Source-local evidence had already established:

- `base-closed-outward-19`: 19 boxes / 152 vertices / 228 triangles / 4 positive-volume header/post intersections;
- `header-segmented-23`: 23 boxes / 184 vertices / 276 triangles / 0 positive-volume intersections;
- exact occupied union equivalence;
- exact assembled bounds equivalence;
- exact receiver identity / mount-fit equivalence;
- exact logical source-component parent identity for segmented headers.

The missing piece was real receiving evidence. Map Environment PR #24 then consumed the source-owned `service-pavilion-001/interpenetration-free-header-segmentation-003` representation in the current world:

- exact receiving implementation: `dfd4e1d662ab7d6d9f1a5c8dd35b571418154f6e`;
- review head: `bd065c8ee23ddee922c4aa9b4aa6e3d9504ffb06`;
- workflow: **`35130502118` — SUCCESS**;
- scoped result: **`PASS_CURRENT_WORLD_BUILDING_HEADER_SEGMENTATION_BOUNDED_CONTINUITY`**.

That receiver evidence retained the zero-intersection 23-box body while preserving occupied union, world bounds, receiver mounts and explicit material bindings. The strict first hypothesis of no RGB delta above one LSB had failed and remains retained as failure provenance; the successful bounded continuity review did not erase it.

## Exact structural result — PASS

New dedicated workflow:

**`35161689737 — Hard-surface Building current-source policy evidence` — COMPLETED / SUCCESS**

Python 3.11 and 3.13 both passed compile plus the complete Building test suite. Python 3.11 additionally rebuilt and retained the exact current-source policy evidence.

The inherited full Hard-Surface workflow also remained green on the same exact head:

**`35161689739 — Hard-surface building evidence` — COMPLETED / SUCCESS**

Scoped result:

**`PASS_SEGMENTED_BUILDING_PROMOTED_TO_CURRENT_SOURCE_POLICY_WITH_LEGACY_COMPATIBILITY`**

Current source vs legacy compatibility representation:

| Measure | current `header-segmented-23` | legacy `base-closed-outward-19` |
|---|---:|---:|
| emitted boxes | 23 | 19 |
| vertices | 184 | 152 |
| triangles | 276 | 228 |
| positive-volume intersections | 0 | 4 |
| occupied union | 9.49832 m³ | 9.49832 m³ |
| max receiver mount residual | 0.0 m | 0.0 m |

Measured promotion delta:

- occupied-union residual: **`0.0 m³`**;
- emitted boxes: **`+4`**;
- vertices: **`+32`**;
- triangles: **`+48`**;
- positive-volume intersections: **`-4`**;
- assembled bounds equal: **true**;
- receiver IDs equal: **true**;
- receiver residual equal: **true**.

Current-source payload SHA-256: `0e4ca6a8b9b4e98d05d795611cb9d6d33f2e871ee63b0ebdda8ac3754f3f9239`.

Legacy-compatibility payload SHA-256: `4fcc8cd4681a336a3429a7dff39b14a3afb277db6401d7f0b6d9def293e0e2b3`.

## Fail-closed controls

The new policy verifier rejects:

- regressing the current-source identity back to `base-closed-outward-19`;
- introducing an implicit / best-effort fallback policy;
- collapsing current-source and legacy-compatibility identities into the same variant.

The existing emission-variant verifier still rejects unknown variant IDs. No consumer receives the current source through silent fallback.

## Retained evidence

Artifact:

- ID: **`10473680276`**;
- name: `service-pavilion-001-current-emission-policy-evidence`;
- exact head: `a976af429b0ea90e0f0cc72d4a8bd4eb8fef22d3`;
- size: **`3,127 bytes`**;
- GitHub artifact digest: **`sha256:33ca517d6d185453188257b4039cd3f26f25677622418cff9f989215b59f12eb`**.

The downloaded archive was independently rehashed and reproduced the exact GitHub digest. Its retained `exact-head.txt` binds to `a976af429b0ea90e0f0cc72d4a8bd4eb8fef22d3`.

Policy file SHA-256: **`c26f25c789404919bdb8e40f35d517c444e35f0a7aaf9358ad399296a7afe47a`**.

## Reusable hard-surface learning

**A structurally cleaner manufactured representation should not become “current source” merely because it exists; promote it only after source equivalence and a real receiving path are both proven, while preserving the old compatibility identity.**

The reusable method is:

1. keep the candidate source-owned and explicitly named;
2. prove the mechanical / geometric invariant against the predecessor;
3. carry the candidate through at least one real receiver without hiding failures;
4. promote a separate source-policy identity rather than silently changing a compatibility API;
5. require downstream consumers to explicitly rebind/retest before claiming current-source provenance.

This is strong enough to retain as a Hard-Surface working pattern. It is **not** yet a Universal Creation or Profession Fabric abstraction: the evidence is still one Building source family plus its receivers, not broad cross-domain repetition.

## Propagation / handoff

Building PR #2 received exact result comment **`5705935907`**.

Building PR #5 received handoff **`5705937400`**: its cross-variant panel reversibility result remains truthful, but wording that calls the 19-box representation current is now historical and must explicitly rebind before claiming the new source policy.

Building Procedural PR #4 received handoff **`5705939007`**: its explicit-variant machinery remains truthful, but a current-source claim now requires binding the new policy. No row-grammar change is inferred.

Map Environment PR #24 received handoff **`5705940837`**: its exact segmented receiving evidence remains truthful for the geometry it tested; the new policy identity is not inherited automatically.

Map Technical Art PR #27 received handoff **`5705942505`**: `axm.building-build-result/v0.1` remains the historical compatibility API, while current-source delivery now requires explicit policy binding to `header-segmented-23`.

No Materials, Runtime, Object, Universal Creation or Profession Fabric code was changed.

## Truth boundary / non-claims

This PASS proves only that Building now has an explicit source-owned policy naming the already-proven segmented 23-box representation as the current source representation, while preserving the old 19-box build result as an exact compatibility interface and requiring downstream rebinding.

It does **not** establish:

- silent migration of Map, Materials, Procedural, Runtime or any other consumer;
- a boolean-unioned or globally vertex-manifold pavilion shell;
- removal of coplanar internal faces where components intentionally touch;
- architectural engineering, structural loads, code compliance or manufacturing validity;
- final normals/tangents/UVs/materials/weathering;
- final Art Direction / Visual QA acceptance;
- target-device runtime acceptance;
- collision, navigation, physics or gameplay acceptance;
- a universal UC source-promotion framework;
- Profession Fabric promotion;
- CANON, merge authority, production/game readiness or Hard-Surface mastery.

## Four-root gate

- **Truth:** current-source and compatibility identities are now explicit instead of overloading the historical 19-box default with two meanings.
- **Agency / non-domination:** no receiver is auto-migrated; each downstream owner keeps the choice and must rebind/retest explicitly.
- **Continuity:** the 19-box tuple/named-result API and all historical evidence remain intact, while the promoted current-source policy is additive and exact-head bound.
- **Wisdom before speed:** promotion waited for both source-local equivalence and real current-world receiving evidence instead of declaring the cleaner geometry current as soon as it was generated.

## Next Hard-Surface pass

Re-scan the full constellation first. Do not automatically continue Building or Object. Prefer a fresh manufactured source need, a repeated cross-domain mechanical pattern with real evidence, or a downstream failure that specifically requires Hard-Surface ownership.