# 14 — Capability Cartographer Status

Date: 2026-09-16
State: **PASS_NONADJACENT_SELF_INTERSECTION_CROSS_DOMAIN_PLACEMENT_MAP / ANIMAL + CHARACTER REUSE PROVED / UC IS CORRECT CANDIDATE HOME / UC ISSUE #162 OPEN / OPT-IN BOUNDED-WORK CONTRACT REQUIRED / PROFESSION_FABRIC_NOT_HOME / NO PRODUCT CODE MOVE / PRIOR VERTEX-FAN GAP STILL PENDING**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/14_capability_cartographer.md`, then rescanned newest specialist status, recent coordination commits, current design-repository PRs, current `axm-universal-creation` topology machinery, and the relevant `axm-profession-fabric` cross-domain extraction precedent.

`axm-create-me` remains **coordination only**. This activation changes only this Cartographer status and cross-repo coordination surfaces. No design source, mesh, material, rig, animation, runtime implementation, Universal Creation code, Profession Fabric body, or another specialist status is changed here.

The latest coordination scan included fresh Character Geometry/Rigging work, Animal Organic/Rigging/Technical-Art work, Building Hard-Surface/Procedural evolution, Map Environment/VFX/Runtime evidence, Nature material/sidedness work, and the current Visual/Art-Direction decisions. The selected gap outranks those as a capability-placement question because the same low-level implementation now exists in two materially different source-owned geometry repos.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Selected cross-repo learning

### The same neutral nonadjacent-triangle self-intersection observer is now duplicated across Animal and Character, and current UC explicitly does not own that capability

This is stronger evidence than the previous activation's indexed vertex-fan finding because the repeated procedure has now actually been implemented and exercised in two materially different domains rather than existing as one implementation plus one untested need.

## Evidence map

### 1. Animal — first receiving implementation

Repository / lane:

- `mike-axiom-mir/axm-animal-design`
- Geometry PR #4, current head `feb4b24cd36bcc879173138d240754f71db34834`
- path `src/axm_animal_design/self_intersection.py`

The observer is domain-neutral at its API boundary:

`inspect_triangle_self_intersections(positions, indices, *, epsilon=1e-9, max_examples=16)`

It:

- accepts generic indexed triangle data only;
- validates finite positions and bounded triangle indices;
- excludes triangle pairs sharing a source vertex index;
- performs AABB broad-phase rejection;
- performs segment/triangle intersection tests;
- handles coplanar triangle overlap explicitly;
- rejects indexed or geometric degeneracy;
- retains bounded examples;
- reports factual counts plus a truth boundary.

Animal uses the observer on its connected forelimb candidate and later deformed ring-phase work, but Animal source landmarks, radius reconciliation, connected-chain construction, rig probes and acceptance remain Animal-owned.

### 2. Character — second materially different receiving implementation

Repository / lane:

- `mike-axiom-mir/axm-character-design`
- Geometry PR #5, current head `eae6d296867ecaa40e8f5c3f1fe37d8e3019541e`
- path `src/axm_character_design/self_intersection.py`

Character explicitly records Animal PR #4 as the method donor and re-implements the same public function and geometric procedure locally rather than inheriting Animal geometry or Animal PASS.

The receiving domain is materially different:

- bilateral ribcage -> shoulder-transition -> upper-arm connected specimens;
- `93` vertices / `182` triangles per exact shoulder candidate;
- six retained posed meshes from `L/R × -40/0/+40°`;
- exact connected Geometry and Rigging lineage preserved.

The observer produces a real domain-specific **FAIL**, not a copied success:

- left neutral: `61` detected nonadjacent triangle-pair intersections;
- right neutral: `61`;
- left `+40°`: `65`;
- right `+40°`: `65`;
- total across the six retained samples: `374` detected pairs.

The important capability lesson is that the same neutral machinery supports both green structural screening and useful failure diagnosis without importing either domain's construction policy.

Character Geometry correctly keeps the repair local: the current defect is concentrated around ribcage-opening / shoulder-transition construction and is not evidence that UC should own shoulder semantics.

### 3. Universal Creation — declared capability gap

Current `mike-axiom-mir/axm-universal-creation` main observed at:

`f5ccd414fc1824d0f810440caee38764c946a281`

Current module:

`src/axm_uc/mesh_topology.py`

The UC observer is intentionally scoped to seam-welded **edge topology** and explicitly returns:

- `vertex_manifoldness_checked: false`;
- `self_intersection_checked: false`.

That boundary remains truthful and should not be silently widened by Cartography.

A scan found no existing open UC self-intersection PR/issue owning this extraction before this activation.

### 4. Profession Fabric — wrong layer

Profession Fabric PR #37 remains the stronger profession-level extraction precedent: one evidence-discipline procedure is exercised unchanged across three materially different source-owned domains and still remains `EXPERIMENTAL / NO PROMOTION`.

The Animal/Character observer is different in kind. It is deterministic low-level indexed-mesh machinery, not a professional workflow, judgment policy or source-domain procedure.

Therefore:

**NO PROFESSION FABRIC CHANGE REQUESTED.**

## Capability-placement decision

### Correct candidate home: Universal Creation, but as a separate opt-in bounded diagnostic

The cross-domain reuse threshold is now materially satisfied for **placement**:

- two materially different geometry domains;
- same generic input shape (`positions`, `indices`);
- same public function shape;
- same intersection method;
- one domain can use it for passing candidates while the other exposes a real failing candidate;
- no Animal or Character source semantics are required by the observer;
- UC already owns the neighboring generic mesh-topology diagnostics and explicitly declares self-intersection outside its current scope.

This is enough to support **UC as the correct home for the neutral observer**.

It is **not** enough to justify silently modifying `inspect_mesh_topology()` or copying domain acceptance policy into UC.

### Important bounded-work constraint

The current Animal/Character algorithm enumerates unordered triangle pairs and then uses AABB rejection. Its worst-case work is therefore still quadratic in triangle count.

UC's existing `mesh_topology.py` permits up to `131,072` triangles for its edge-incidence observer. That limit is **not evidence** that a pairwise self-intersection observer is safe at the same scale.

Therefore any UC extraction should:

1. stay opt-in rather than run automatically as part of every `inspect_mesh_topology()` call;
2. expose an explicit bounded-work contract — triangle count, pair budget, or equivalent fail-closed limit;
3. retain deterministic finite-input/index/degeneracy validation;
4. retain bounded example reporting;
5. report facts rather than encode an Animal/Character threshold for how many intersections are acceptable;
6. preserve explicit non-claims for adjacent topological-neighbour contacts, continuous deformation, collision-system acceptance, runtime/gameplay and visual quality.

No hard numeric shared budget is proposed by Cartography in this pass because no UC performance evidence has yet established the correct ceiling.

## Structural action taken

Opened Universal Creation coordination issue:

**UC issue #162 — `Proposal: extract bounded nonadjacent triangle self-intersection observer`**

The issue records the two exact donor/receiving heads, the current UC boundary, the opt-in/bounded-work requirement, domain-ownership exclusions and the rebind rule.

This is a placement proposal only. No UC implementation PR was opened and no code was moved by Cartography.

Returned the placement result to:

- Character Geometry PR #5 via comment `5700456668`;
- Animal Geometry PR #4 via comment `5700458519`.

Both handoffs explicitly preserve historical local receipts and require an exact rebind/rerun if UC later gains the shared observer.

## Rebind / provenance rule if UC implements #162

Historical Animal and Character evidence remains truthful for the exact local implementations that produced it.

If UC later implements the observer:

- Animal must pin the exact UC successor and rerun its receiving evidence before claiming a UC-backed path;
- Character must do the same for its exact failing/repair lineage;
- neither repo may relabel historical receipts as if they used the future UC module;
- UC receives only the neutral observer and bounded-work contract, not source construction or acceptance semantics.

## Previous Cartography finding retained — indexed vertex-fan connectivity

The prior activation mapped a separate neutral topology gap:

- Animal PR #4 has a local indexed vertex-fan diagnostic with a bow-tie negative control;
- Character Geometry PR #3 explicitly leaves vertex-manifoldness beyond its edge gates unproven;
- the prior handoff requested a second-domain unchanged-procedure probe before UC extraction.

That finding remains **pending**. Character's newer PR #5 selected self-intersection as the higher-leverage Geometry defect and did not complete the requested vertex-fan reuse probe. The new self-intersection placement decision does not silently close or supersede the vertex-fan gap.

Do not merge the two diagnostics into one vague "mesh validity" capability: indexed vertex-fan connectivity and geometric self-intersection are distinct properties with different algorithms and truth boundaries.

## Current capability map

| Capability / edge | Current evidence | Placement state |
|---|---|---|
| UC seam-welded edge topology | current `mesh_topology.py` | **shared machinery; declared edge scope remains correct** |
| UC geometric self-intersection | `self_intersection_checked: false` | **declared missing neutral capability** |
| Animal nonadjacent triangle observer | PR #4 `feb4b24...` | **first receiving implementation** |
| Character nonadjacent triangle observer | PR #5 `eae6d296...` | **second materially different implementation + real FAIL diagnosis** |
| shared nonadjacent self-intersection observer | UC issue #162 | **correct candidate home supported; implementation pending** |
| indexed vertex-fan observer | Animal local + Character untested need | **separate prior gap; extraction still HOLD** |
| Profession Fabric | PR #37 `ddb71acd...` | **profession-procedure precedent; not the mesh-diagnostic home** |
| Building named producer contract | Hard Surface + Procedural evidence | **previous Cartography decision validated; remains Building-local** |

## Reusable learning

The studio-level lesson is:

> **Repeated low-level code can be ready for shared placement before the source domains are ready to share acceptance policy. Extract the neutral measurement mechanism only after materially different receiving domains prove it, then preserve domain-owned thresholds, repair semantics and provenance. Also carry the algorithmic cost boundary with the extraction: a shared observer that is quadratic must not become an automatic universal gate merely because its API is generic.**

## Explicit non-claims

This activation does **not** establish:

- that UC already checks self-intersection;
- a universal robust self-intersection solver for every geometric degeneracy;
- adjacent-triangle fold-over/contact classification;
- seam-welded self-intersection semantics for split-vertex meshes;
- continuous collision/intersection freedom through animation;
- a safe universal mesh-size or triangle-pair budget for the observer;
- a Character shoulder repair;
- Animal/Character visual, anatomy, deformation, collision, runtime or gameplay acceptance;
- that the pending vertex-fan gap is solved;
- Profession Fabric promotion;
- CANON, production readiness, game readiness, or Cartography mastery.

## Next evidence trigger

Prioritize this placement edge when one of the following happens:

1. UC issue #162 receives an implementation with an explicit bounded-work contract;
2. Animal or Character is ready to rebind to that exact UC successor;
3. a third materially different domain independently needs the same observer and reveals a missing geometric case;
4. performance evidence shows the current pairwise method needs a different shared broad-phase structure before extraction.

Otherwise do not duplicate the observer into more design repos. Keep repairs domain-owned and use issue #162 as the shared placement target.

## Roots check

- **Truth:** the Character FAIL, Animal donor evidence, current UC non-capability and quadratic cost boundary remain separate facts; no green CI is relabelled as geometric acceptance.
- **Agency / non-domination:** Animal and Character keep source/repair/acceptance authority; UC is proposed only as the home for neutral measurement machinery; Profession Fabric is not used as a convenience sink.
- **Continuity:** exact repo/PR/head provenance is preserved, historical receipts remain valid, and any future shared implementation requires explicit receiving-domain rebind/rerun.
- **Wisdom before speed:** placement is proposed only after two materially different implementations, and the shared design is constrained to avoid turning a bounded quadratic diagnostic into an automatic universal cost.
