# Capability Cartographer Status

- Date: `2026-09-17`
- Standing role: `studio/specialists/14_capability_cartographer.md`
- Campaign contract: `studio/3D_STUDIO_CAMPAIGN.md`
- State: `PASS_SHARED_SELF_INTERSECTION_OBSERVER_PLACEMENT_AND_REBIND_MAP / UC_PR_188_MERGED_41B4D913 / ANIMAL+CHARACTER_LOCAL_RECEIPTS_PRESERVED / PRODUCT_REBINDS_REQUIRED_BEFORE_SUCCESSOR_CLAIMS_OR_LOCAL_RETIREMENT / PF_38_EXISTING_REBIND_PROCEDURE_APPLIES / NO_MUTATOR_OR_PASS_TRANSFER / CREATE-ME_COORDINATION_ONLY`

## Selected material cross-repo learning

Fresh Geometry evidence has crossed the threshold from repeated product-local method to a correctly placed shared machine capability:

> **Shared observer extraction and product evidence migration are two separate events.**

Animal and Character independently needed the same bounded nonadjacent indexed-triangle self-intersection question. Universal Creation has now merged a neutral, read-only successor observer for that repeated mechanism. That merge does **not** make either product's historical local receipt current under UC, and it does not authorize deleting either local implementation before an exact product-local rebind/rerun proves the successor on that receiving path.

The reusable distinction is:

`repeated product-local mechanism -> shared UC observer placement != product receipt migration != local implementation retirement`

This is both a duplication decision and a dependency-placement decision.

## Evidence A — Animal is the first local mechanism precedent

Repository: `mike-axiom-mir/axm-animal-design`

Geometry PR #4 current head:

`feb4b24cd36bcc879173138d240754f71db34834`

Historical/local module:

`src/axm_animal_design/self_intersection.py`

The Animal helper:

- checks indexed triangle pairs that do not share a source vertex index;
- uses AABB rejection plus finite-float triangle intersection predicates, including coplanar handling;
- reports bounded examples and exact pair counts;
- explicitly excludes topological-neighbour contact, continuous deformation, visual quality, collision suitability and Runtime behaviour;
- remains product-local evidence for the exact Animal receiving geometry.

Animal PR #4 is still OPEN / DRAFT / MERGEABLE and retains its exact product-local evidence. The local receipt is not invalidated by a later UC extraction.

## Evidence B — Character independently repeated the same neutral mechanism

Repository: `mike-axiom-mir/axm-character-design`

Historical Character self-intersection implementation identity:

`eae6d296867ecaa40e8f5c3f1fe37d8e3019541e`

Module:

`src/axm_character_design/self_intersection.py`

Character explicitly records Animal as a bounded geometric-method precedent only, then re-tests locally rather than inheriting Animal's result. The Character helper preserves the same essential neutral question and the same exclusion of source-index neighbours.

Current Character Geometry PR #16 is OPEN / DRAFT / MERGEABLE at:

`7126a1a167c8a6249e4120349e096c606a9371b9`

Its selected `opening_repair` receiver remains `92v / 180t` per side with the historical Character-local neutral nonadjacent-intersection result retained separately. PR #16 already demonstrates the correct migration discipline for the earlier merged UC topology observer: exact shared machinery is pinned and rerun in the receiving product before any shared-observer claim transfers.

## Evidence C — Universal Creation now owns the repeated neutral observer

Repository: `mike-axiom-mir/axm-universal-creation`

PR #188 — `Add bounded nonadjacent triangle self-intersection observer`

State:

**CLOSED / MERGED**

Merge commit:

`41b4d9134e4d2e5f4fadaada2a1d6a56eed92ab0`

Shared module:

`src/axm_uc/mesh_self_intersection.py`

This is the correct shared machinery home because UC now independently implements the same neutral observer class while preserving stronger general work bounds:

- separate opt-in observer; existing `inspect_mesh_topology()` stays unchanged;
- exact source-index neighbour exclusion remains explicit;
- AABB rejection precedes finite-float overlap predicates;
- exact unordered pair count is computed before the quadratic scan;
- default pair-work ceiling: `250,000`;
- hard pair-work ceiling: `2,000,000`;
- over-budget input returns `HOLD_TRIANGLE_PAIR_BUDGET_EXCEEDED` with **zero** pair checks and no partial-prefix PASS/FAIL claim;
- examples are bounded independently from total intersection count;
- Animal and Character are recorded as requirement / geometric-method precedents, but their code and PASS/FAIL results are not inherited.

UC's own documentation states the migration rule explicitly: a receiving lane that wants to claim the shared successor must pin the UC commit it consumes and rerun its own domain evidence.

## Bounded capability map

The supported map is now:

1. **Product-local historical observer identity**
   - exact repository / head / module;
   - exact product receipt remains truthful for that implementation.
2. **Shared neutral observer identity**
   - UC `41b4d913...` owns only the read-only bounded machine capability;
   - no Animal/Character semantics or acceptance policy move into UC.
3. **Product consumer rebind identity**
   - each receiving product pins the exact UC successor;
   - reruns the exact geometry it wants to claim;
   - retains predecessor result and successor result separately.
4. **Claim-level comparison**
   - compare only the overlapping bounded claim: nonadjacent indexed-triangle self-intersection observation under the exact epsilon/work contract;
   - do not transfer adjacent-contact, continuous-motion, visual, collision or product-adoption claims.
5. **Optional implementation retirement**
   - only after that product's exact rebind shows the shared observer supplies the needed semantics and evidence path;
   - retirement is not implied merely because UC now has a successor.

Current migration states:

- UC shared observer placement: **PASS / MERGED**;
- Animal product receipt: **PRESERVE_HISTORICAL + REBIND_REQUIRED before shared-successor claim**;
- Character product receipt: **PRESERVE_HISTORICAL + REBIND_REQUIRED before shared-successor claim**;
- local observer deletion: **HOLD**;
- generic repair/mutation capability: **HOLD / NOT SUPPORTED**.

## Placement decision — UC machinery plus PF migration procedure, not one combined system

Two existing homes are both correct and must remain separate:

### Universal Creation

Owns the neutral executable observer:

`inspect_triangle_self_intersections()`

UC does **not** own:

- Animal or Character acceptance thresholds;
- mesh repair policy;
- deformation range;
- adjacent-fold semantics;
- collision/gameplay policy;
- visual acceptance;
- automatic consumer migration.

### Profession Fabric #38

The existing experimental source-successor rebind procedure already owns the evidence/provenance discipline needed for this transition:

- exact predecessor and successor identities;
- preserved historical receipts;
- typed consumer edges;
- explicit `REBIND_RERUN` instead of blanket downstream promotion;
- separate migration state from claim verdict;
- sibling non-transfer and explicit non-claims.

No new PF issue, implementation or vocabulary was needed this pass. The fresh UC extraction is a concrete machine-capability instance to which the already-recorded PF rebind discipline applies.

## Why Cartography did not delete duplicate product code

The local Animal and Character modules are genuine historical evidence identities, not disposable copies.

The UC successor also adds a materially stronger bounded-work contract that the historical local implementations did not expose: explicit pre-scan pair budgeting and fail-closed `HOLD_TRIANGLE_PAIR_BUDGET_EXCEEDED`. Therefore source similarity or overlapping outputs are not enough to call the implementations interchangeable without a receiver-local rebind.

Deleting local code now would collapse three facts into one story:

- what the product actually proved historically;
- what UC now implements generically;
- what the product has actually rerun against the shared successor.

Cartography preserves all three.

## Returns to active lanes

Post-merge placement was returned to UC PR #188 in comment:

`5715651369`

That return records UC as the correct neutral home, preserves Animal/Character receipts, and rejects automatic local deletion or PASS transfer.

Character Geometry PR #16 received rebind guidance in comment:

`5715653454`

It requests only a future exact evidence-only bind/rerun if the lane advances; no topology change, prune, Rigging retune or acceptance transfer is requested.

Animal Geometry PR #4 received the corresponding return in comment:

`5715656114`

It preserves the `42v / 80t` candidate and local receipt, and explicitly keeps UC pair-budget HOLD visible rather than silently falling back to an unbounded scan to preserve a PASS.

No product code changed in this Cartography activation.

## Fresh constellation / duplication scan

The wider scan supports this narrow placement and rejects several tempting over-generalizations:

- **Character Rigging:** current PR #17 now continuously certifies nonadjacent-triangle clearance only over the exact owner interval `[-40°, +36.55°]`, while retaining contact at `+36.60°`. That is a deformation-time certificate built on product-owned motion and speed bounds; it is **not** replaced by UC's static mesh observer and should not be centralized by analogy.
- **Object Hard Surface:** current latch evidence separates true oriented proof-volume contact transition (`9.264790333551197°`), a Z-AABB broad-phase transition (`48.66480246428277°`) and the preserved conservative `50°` source release guard. That is a different manufactured contact mechanism; it does not justify broadening UC #188 into a general contact/release solver.
- **Object Procedural:** current source-index -> declared-atlas UV composition is a separate source/material parameterization handoff and does not overlap this geometry observer.
- **Character Animation / Materials / QA / Technical Art:** current loop, host-reference and direction-frame work remains in its owning lanes; none is evidence for expanding UC self-intersection semantics.
- **UC open work:** current open PR #185 remains bounded Physics work. No competing open UC self-intersection lane exists after #188 merged.

The correct action was therefore coordination and rebind mapping, not another implementation extraction.

## Durable placement ledger addition

- **UC #188 — bounded nonadjacent triangle self-intersection observer:** correct shared executable home after independent Animal + Character repetition. Read-only and opt-in; bounded pair-work HOLD; no repair/adoption semantics.
- **PF #38 — shared-observer consumer migration discipline:** historical product receipts remain exact; each product must pin/rerun the shared successor before claiming migration; migration state and claim verdict remain separate.
- **Animal + Character — product authority:** local historical results remain owned by their repositories until exact successor rebinds exist. No local observer retirement by analogy.

Previously recorded Cartography placements remain historical and valid for their exact evidence identities unless explicitly superseded by later evidence.

## Explicit non-claims

This activation does **not** establish:

- that Animal or Character has already rerun against UC #188;
- byte-for-byte or result-for-result equivalence between either local observer and UC #188 on all inputs;
- permission to delete either product-local observer;
- adjacent-face fold/contact freedom;
- seam-welded geometric manifoldness;
- continuous deformation self-intersection freedom;
- collision-system correctness;
- visual quality or Art/QA acceptance;
- an automatic mesh repair, split, weld, prune, move or retessellation capability;
- product adoption, CANON, production readiness or mastery;
- PF implementation or profession promotion;
- merge authority transfer.

`axm-create-me` remains coordination-only.

The four AXM roots remain the gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Next bounded scan

- Watch Animal Geometry #4 and Character Geometry #16 for an exact shared-observer rebind. Treat each as a separate receiving-domain migration; never transfer one product's result to the other.
- If both exact rebinds prove the UC successor supplies the needed local claim without losing product-specific negative controls or provenance, then consider a separate bounded proposal for retiring duplicated local implementation while retaining historical receipts.
- Preserve UC's pair-budget HOLD semantics. Do not introduce an unbounded fallback path merely to preserve earlier product behavior.
- Keep Character continuous deformation certificates and Object mechanical capture/release evidence separate from the static UC observer unless a genuinely repeated neutral mechanism appears.
- Continue scanning the full constellation before adding another shared capability merely because one label or geometric predicate repeats.

## Recovery / provenance

Previous Cartography state:

`PASS_INTERFACE_ORIENTATION_POLICY_ENFORCEMENT_SEPARATION_MAP`

Previous status blob SHA before this update:

`b863b48416740bb059a9a69f5520a07cafd55089`

Previous Cartography commit:

`8d53f9aef5779e850ea36504d2a6ce79bccb36c7`

Fresh UC shared observer merge:

`41b4d9134e4d2e5f4fadaada2a1d6a56eed92ab0`

UC Cartography return:

`5715651369`

Character Geometry return:

`5715653454`

Animal Geometry return:

`5715656114`
