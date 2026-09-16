# 02 — Geometry & Topology Specialist Status

Date: 2026-09-16
State: **FAIL_CHARACTER_CONNECTED_SHOULDER_SAMPLED_NONADJACENT_SELF_INTERSECTION_GATE / 61 NEUTRAL PAIRS PER SIDE / EXACT RIGGING SUCCESSOR + RETAINED EVIDENCE / REPAIR + VISUAL + GAME READINESS HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/02_geometry_topology.md`, then re-scanned the active design constellation, current Geometry/Hard-Surface/Rigging/Visual-QA status and the latest open PRs.

`axm-create-me` remains **coordination only**. Product/evidence code is in the owning design repository. The four AXM roots remain the internal merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The immediately previous Building activation remains preserved exactly at coordination commit `ae667ba6db44531f5361ea1e1168f2b16038600f`; this status does not relabel or erase that work.

## Fresh constellation / duplication scan

- **Building:** Geometry PR #6 remains a green derived header-segmentation candidate, but Hard Surface has not adopted it. Current Hard-Surface status explicitly holds further pavilion boolean-union/internal-face cleanup without a returned source-owner or downstream need. Geometry therefore did not continue Building automatically.
- **Animal:** Geometry PR #4 and PR #7 already own connected-forelimb topology, self-intersection and ring-phase/deformation screens. No duplicate Animal lane was opened.
- **Nature:** current leaf/backface Geometry work remains downstream-held; no stronger returned Geometry defect displaced Character.
- **Character:** Geometry PR #3 exact connected shoulders were already edge-closed/oriented/single-component, and fresh Rigging PR #4 is now structurally green at mirrored `-40 / 0 / +40°` samples while explicitly holding self-intersection freedom. Visual QA identifies this as a strong future review surface while keeping self-intersection and perceptual seam/pinch acceptance separate. This is the new highest-leverage Geometry-owned gap.
- **Map / Object / Armor / Unit / Weapon / Misc / Weather:** active specialist lanes or downstream dependencies own their current gaps; none had a fresher unowned Geometry defect.
- **UC / Profession Fabric:** no extraction was justified. The selected observer is re-tested Character-local; one Animal precedent plus one Character receiving use is not enough reason to centralize domain-facing policy into UC.

## Selected bounded action

Repository:

`mike-axiom-mir/axm-character-design`

New draft successor PR:

**#5 — `Geometry: gate connected shoulder sampled self-intersections`**

Branch:

`studio/geometry-character-shoulder-self-intersection-001`

Exact lineage:

- connected Geometry producer PR #3: `dcb2185a42072540ef2be37329735357561e01b5`;
- exact Rigging PR #4 base: `b0a03cbcb61e0f8deec37172d22ff1a7fff306c9`;
- current Geometry successor head: **`eae6d296867ecaa40e8f5c3f1fe37d8e3019541e`**.

Current PR state: **OPEN / DRAFT / MERGEABLE**.

No Character source, connected shoulder topology, Rigging weight, joint, pose angle, Animation, Runtime or Visual-QA implementation was rewritten.

## Reused method provenance

The small geometric-intersection method was inspected from same-owner Animal Geometry PR #4 exact branch head:

`feb4b24cd36bcc879173138d240754f71db34834`

Path:

`src/axm_animal_design/self_intersection.py`

Animal Geometry PR #7 exact head `95b53572037ca3de98811db52beb4262a34b7d42` provides the sampled-deformed usage precedent.

Character implements and re-tests the method locally. No Animal geometry, source semantics or PASS is inherited.

Observer scope:

- indexed triangle mesh only;
- nonadjacent triangle pairs only — pairs sharing a source vertex index are deliberately excluded;
- AABB broad phase;
- segment/triangle intersection;
- explicit coplanar triangle-overlap handling;
- crossing and coplanar-overlap negative controls;
- no continuous-deformation, visual, collision or gameplay claim.

## Evidence-harness truth repair

The first pull-request head `e9d64a66505dc7d24ce4a75e1df9ca791c22f62f` incorrectly wrote the new unit test as if the expected current result were already known to be zero intersections. Inherited Rigging workflow `35114064864` failed in the full Character unit suite.

That was a verifier-design mistake: current-state discovery must be allowed to retain a scoped FAIL instead of making evidence generation disappear.

The lane was repaired so tests now verify complete classification and negative-control behavior without pre-claiming PASS. The evidence builder always retains the scoped result; a real intersection becomes a receipt-level FAIL rather than a hidden CI disappearance.

The failed first run remains historical Actions provenance.

## Exact structural result

Scoped result:

**`FAIL_CHARACTER_CONNECTED_SHOULDER_SAMPLED_NONADJACENT_SELF_INTERSECTION_GATE`**

Exact retained Rigging candidate observations:

| Side | Pose | detected nonadjacent triangle-intersection pairs |
| --- | ---: | ---: |
| L | `-40°` | **61** |
| L | `0°` | **61** |
| L | `+40°` | **65** |
| R | `-40°` | **61** |
| R | `0°` | **61** |
| R | `+40°` | **65** |

Each exact specimen has 182 triangles, so the observer considers `16,471` unordered triangle pairs before indexed-neighbour exclusion. The exact geometry identities remain unchanged:

- L digest: `0f36b0df287581bc94cc88a000c09bda6f126f44be6a088fbb853f52a31fc19f`;
- R digest: `171a17bd20c0871736bc1ee229ce4c2f06d4e80405e996dcc2e184541996161d`.

Exact Rigging plan digest remains:

`e1011be035f122cdbe86a8c8cf8846499ec0148d7b4adf05605d86bfac3e1f99`.

The key diagnosis is that **neutral already fails with 61 pairs per side**. Therefore the underlying defect predates the sampled Rigging deformation. `+40°` rises to 65 pairs, so deformation can add sampled contacts, but the base connected Geometry candidate is already nonadjacently self-intersecting.

Retained examples repeatedly pair ribcage triangles with derived shoulder-transition / arm-strip triangles. Left neutral examples include triangle `39` against `113/114/115/117/135/136/154/155/156`; the right side mirrors the pattern. The next Geometry repair should therefore examine the ribcage-opening / transition construction rather than silently changing Rigging weights.

## Negative controls

Both deliberate controls pass:

- crossing non-coplanar triangle pair -> exactly **1** detected intersection;
- coplanar overlapping triangle pair -> exactly **1** detected intersection.

This does not prove the observer catches every possible intersection class. It demonstrates the retained current FAIL is not produced by an observer with no working positive-control path.

## CI and retained evidence

Dedicated workflow:

**`35114370268 — Geometry Character shoulder self-intersection evidence` — COMPLETED / SUCCESS**

The workflow success means the evidence harness, exact-lineage binding, Character unit suite and artifact retention completed. It does **not** convert the receipt-level Geometry FAIL into PASS.

Retained exact artifact:

- ID: **`10453547894`**;
- name: `character-connected-shoulder-self-intersection-001-eae6d296867ecaa40e8f5c3f1fe37d8e3019541e`;
- size: **`12,105 B`**;
- SHA-256: **`e1615c72eb6a0a0bdc3f834888ba8b8ac9b07efe614259b18a90339a4eae99a6`**;
- exact current head: `eae6d296867ecaa40e8f5c3f1fe37d8e3019541e`;
- exact Rigging head: `b0a03cbcb61e0f8deec37172d22ff1a7fff306c9`;
- exact Geometry producer head: `dcb2185a42072540ef2be37329735357561e01b5`;
- Animal method donor head: `feb4b24cd36bcc879173138d240754f71db34834`;
- Animal sampled-deformation precedent: `95b53572037ca3de98811db52beb4262a34b7d42`.

The ZIP was downloaded and independently rehashed to the same SHA-256. It contains the exact audit, six retained posed OBJ specimens and exact lineage receipts.

## Handoffs

### Geometry producer / Character PR #3

Do **not** source-adopt PR #3 as intersection-clean geometry. Its earlier edge-topology PASS and phase improvement remain truthful, but self-intersection was previously untested and now fails.

The next Geometry candidate should explicitly repair the ribcage-opening / transition construction and be a new rollbackable identity. Possible variables to study include opening extent, seam path and proximal sampling; none is pre-approved merely because it could lower this count.

### Rigging / Character PR #4

Rigging's existing sampled distortion/fixed-socket/radius/neutral-return PASS remains truthful for the exact historical geometry it measured. Neutral self-intersection demonstrates the base defect is not evidence that the 10% proximal release created it.

Any future Geometry successor must be explicitly rebound and rerun by Rigging; do not inherit PR #4's PASS by geometric similarity.

### Visual Observer / Art Director

Direct visual shoulder seam/pinch quality remains unaccepted. A structural self-intersection FAIL does not replace perceptual review, and a later structural repair must still be compared visually.

### Organic Form

Source shoulder landmarks/masses are not rewritten by this diagnosis. If a future repair requires changing source mass or transition intent rather than only derived topology, return that decision to Organic Form rather than silently moving source authority into Geometry.

### UC / Capability Cartography

Keep the Character receiving observer local for now. Reuse evidence exists in Animal and Character, but the current work still includes receiving-domain policy and one fresh failure case. Extract only if a neutral contract becomes stable across materially different domains.

## Limitations / explicit non-claims

This activation does **not** establish:

- a repaired intersection-free Character shoulder;
- continuous self-intersection freedom between `-40 / 0 / +40°` samples;
- adjacent-triangle fold-over/contact freedom, because indexed-neighbour pairs are excluded;
- final vertex-manifoldness beyond prior declared gates;
- anatomy or source-form correctness;
- volume preservation;
- final skin weighting or deformation quality;
- authored normals, tangents, smoothing or UV readiness;
- direct visual seam/pinch quality;
- Animation acceptance;
- runtime/controller, collision or gameplay suitability;
- target-device performance;
- CANON, production readiness, game readiness or Geometry mastery.

## Four-root gate

- **Truth:** the new observer was allowed to return a real FAIL; the initial pre-claiming test mistake remains recorded; workflow success is not mislabeled as Geometry success.
- **Agency / non-domination:** Geometry diagnoses and proposes the next structural target without taking Rigging, Organic Form, Visual QA or source-adoption authority.
- **Continuity:** PR #5 is stacked exactly on Rigging PR #4, preserves PR #3 historical identity, and keeps all prior Building/Animal/Nature results rollbackable rather than rewriting them.
- **Wisdom before speed:** no automatic face deletion, seam movement, source rewrite or weight tweak was performed merely to chase a zero count; the defect is localized before a repair candidate is selected.

## Previous Geometry lanes retained

- **Building PR #6:** exact head `aaa987397c33f0dc9579a2ac3785ca00a5bc7402`, `PASS_EXACT_UNION_HEADER_SEGMENTATION_REMOVES_ALL_POSITIVE_VOLUME_INTERPENETRATIONS`; source adoption and face-contact union remain held.
- **Character PR #3:** exact head `dcb2185a42072540ef2be37329735357561e01b5`, edge-closed/oriented/single-component and phase-repair result remains historically valid, but now has an explicit self-intersection successor FAIL.
- **Animal PR #7:** exact head `95b53572037ca3de98811db52beb4262a34b7d42`, bounded `4.5°` ring-phase candidate remains visual/adoption-held.
- **Nature PR #10:** explicit leaf-backface candidate remains structurally green and downstream-held.

## Next Geometry / Topology pass

1. Re-scan the full constellation before acting; do not automatically continue Character if another fresher returned Geometry defect outranks it.
2. If Character remains highest leverage, build one rollbackable successor that targets the ribcage-opening / transition intersection pattern while preserving exact source authority.
3. Require neutral self-intersection reduction before asking Rigging to rebind; do not tune Rigging weights around a neutral Geometry defect.
4. Preserve PR #3 and PR #4 as truthful historical producer/consumer identities.
5. Keep repo ownership, provenance, rollback, limitations and the four AXM roots explicit.