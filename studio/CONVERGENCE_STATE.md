# AXM 3D Studio convergence state

Recorded: `2026-09-19T18:04:32Z`

State: **BOUNDED CONVERGENCE COMPLETED FOR WEATHER AND BUILDING; THE WIDER STUDIO
REMAINS PARTIALLY HELD.** This record does not claim that every domain is integrated,
visually accepted, runtime accepted, CANON, production-ready, game-ready, or mastered.

The immutable freeze classification is
[`studio/convergence/OPEN_PR_MAP_2026-09-19.md`](convergence/OPEN_PR_MAP_2026-09-19.md).
It classified 191 open campaign/Wreckline PRs. Exact Building verification later exposed
Sticker Fabric as a direct donor; its two open PRs are classified in the map addendum rather
than silently rewritten into the earlier count.

## Repositories inspected

| Repository | Default head at record time | Open PRs | Convergence state |
|---|---|---:|---|
| `axm-character-design` | `634d96d34a876ec6a64ff8fd9853a37ca05ab217` | 9 | Bounded review006 lineage retained; visual/runtime gates open |
| `axm-animal-design` | `51250fa57bef17442cc5bb1ee3b07320f0509fe6` | 27 | Bounded forelimb lineage retained; Runtime/Animation rebind open |
| `axm-nature-design` | `e69b11529d06bd35693988413a843f474a9ab21f` | 26 | Indexed diagnostic lineage retained; connected junction and downstream rebinds open |
| `axm-object-design` | `de0cff81709f7329d6afb9b8c0c4678824523246` | 34 | Source-owned latch line retained; TA/Animation/Runtime rebind open |
| `axm-building-design` | `adae0a212a0790a433b388e2bb8aba5f5856d604` | 2 | Source/geometry/procedural convergence merged; Materials and target-device Runtime held |
| `axm-map-design` | `5c9f743af53bc9586a136d17e7fb29e384a6930c` | 47 | Current-world branches retained; accepted Building/Weather/Nature/Object rebinds incomplete |
| `axm-weather-design` | `be6ea1991435d7bcf1d35af29199bbb4b2e779f4` | 0 | Bounded source plus seeded procedural family merged and rechecked |
| `axm-weapon-design` | `fac273a6f2d752347b65927f944200f231af11db` | 0 | No open convergence lane |
| `axm-armor-design` | `57260d53977184bad70ef1e3af887f97d0f149d4` | 0 | No open convergence lane |
| `axm-unit-design` | empty repository | 0 | No source identity to integrate |
| `axm-misc-design` | `d8650bc792eaf86c2f864d75cbac89e80ec8aa3c` | 0 | No open convergence lane |
| `axm-universal-creation` | `5a4904f4b87a0b05ff5fda7a4878a1c516ca5053` | 4 | Generic observer capabilities retained; no new Studio promotion |
| `axm-profession-fabric` | `941bd05007eb5cd88e773e66c858c62cf9de38a9` | 2 | PRs #35/#37 remain experimental/retest holds |
| `axm-wreckline` | `22b8d1c0cf5f08c030e7db36c56eaac84c7c1650` | 6 | Stale provider bases and missing historical UC providers remain blockers |
| `axm-sticker-fabric` | `3aa93b0132eea9becefb20c716c6ec1a023ad28b` | 2 | Exact Building donor verified; unrelated growth PRs retained outside scope |
| `axm-create-me` | `2c643117904eb2b6734c337838ca091ec0e9b012` before record-carrier merge | 1 | Coordination carrier PR #2 |

Current open population at record time is 160: 157 in the original product/Wreckline
constellation, two late-discovered Sticker Fabric dependency PRs, and this one control-room PR.
The control-room merge reduces that to 159 without changing product-open state.

## PRs inspected and disposition basis

- Every current open PR in the original 191-PR freeze received exactly one classification.
- Sticker Fabric #4/#5 received late-dependency classifications in the same map.
- Relevant merged, closed, draft, ancestry, workflow, comment, status, handoff and retained-artifact
  identities referenced by those lanes were traced; PR titles and green badges were not used as
  proof by themselves.
- No `UNKNOWN_NEEDS_INSPECTION` row remains.
- No product repository was mutated before the original freeze map existed.

## Merged PRs

| Repository | PR | Exact merged head | Merge/main result | What was accepted |
|---|---:|---|---|---|
| Weather | #2 | `ca2eaba519e8449835b0ea6ef944b7080c3caa6a` | `9a2893633cd25a2a99661a064040531bf1a9dd02` | Bounded wind-atmosphere source baseline |
| Weather | #3 | `5d5dea20d392734c68673a9c37723d48581b1dd8` | `be6ea1991435d7bcf1d35af29199bbb4b2e779f4` | Bounded seeded Weather field family |
| Building | #2 | `a976af429b0ea90e0f0cc72d4a8bd4eb8fef22d3` | `a984c42e4a7e812ffad8bb5e10859556d1bf3ccc` | Initial source pavilion/interface proof |
| Building | #15 | `97120eb78a72b0a07aff1c65b9b92229d0a42aff` | `7bc5bdfd77d600b8202ea008f7865481480f8d0a` | Utility-panel service-surface domain |
| Building | #17 | `fbfa3b47048755b45dac91451171d5511c8d4f47` | `046c2a1ce15242cbf5463355a23944df46506e4c` | Source-owned receiver-clearance successor |
| Building | #18 | `02944a9f10528a051603df3a6fd7b3183730773f` | `fd9424ac71b1ad95ed254344f185f537fca2fced` | Exact historical-to-current clearance receiver rebind |
| Building | #4 | `588350afba56dd1aa0417148f03e12c6cfc81610` | `fcf3c2a0d3f2f7ee973fb0d7f090f65abf9b8c4e` | Building-local Procedural line containing Geometry/Hard-Surface ancestry |
| Building | #19 | `44e247410f2e02e5feeb2601e9f7a2af56b23456` | `adae0a212a0790a433b388e2bb8aba5f5856d604` | Exact integrated provenance repair and consolidated current CI gate |

## Closed or superseded without merge

All branches, commits, PR conversations and workflow history remain recoverable; no branch was
deleted.

- Character #3–#15: 13 absorbed historical shoulder search/rebind lanes.
- Animal #14/#15: two exact-mirror visual/rig lanes superseded by the logical-quad,
  tangent-frame and post-skin owner-frame line.
- Object #35: successor topology experiment superseded by #36 successor002 evidence.
- Object #37: successor003 explicitly rejected; rejection retained.
- Map #32: non-preferred temporal-exposure experiment; failure/comparison retained.
- Building #5–#9 and #11–#14: nine PRs whose exact heads are Git ancestors of merged Building
  PR #4; unique history remains in the merged ancestry and original PR records.

This is 27 non-merge closures. Combined with seven originally-open product merges, 34 of the
191 frozen open PRs were resolved. Building #19 was created and merged as bounded integration
repair, so it does not change the frozen-population subtraction.

## Retained historical evidence

- The full freeze map and exact PR heads remain in `studio/convergence/`.
- Building's first combined-main failure (145 tests; one failure, five errors, two dependency
  skips), its invalidated digests, and both predecessor/current identities are retained in
  `axm-building-design/docs/BUILDING_CONVERGENCE_PROVENANCE_REBIND_2026-09-19.md`.
- Building PR #19 head `86032bdbfc265d5d75fe4482165dfaa2263f918f` retains the first remote failure where historical
  single-experiment workflows rejected the integrated lineage before running current tests.
- The 22 Building specialist workflows remain replayable by manual dispatch and on their original
  push branches; they no longer masquerade as current global PR gates.
- Every closed PR listed above remains addressable. Failed experiments were not deleted or
  relabelled as current evidence.

## Current accepted and bounded lineages

`accepted` below means only the stated evidence boundary. A HOLD terminates the line; downstream
evidence is not promoted across it.

### Character

Organic #2 `e2706747...` -> Geometry #16 `3519289f...` -> Rigging #17 `0b5b6c99...` ->
Animation diagnostic #19 `bd7c5792...`.

Materials #18, Technical Art #21, target-host Animation #22 and Runtime #20/#23 remain bounded
evidence. Independent final motion/shading Art and Visual-QA gates and target-device Runtime are
open. Nothing here was merged.

### Animal

Organic #1/#8 -> connected Geometry #4/#9/#11/#13/#16/#20 -> Rigging
#6/#10/#12/#18/#22/#25 -> Materials target-host diagnostic #24.

This is the strongest bounded elbow/mirror/logical-quad/tangent line. Animation #5 is stale, and
Runtime #30 head `5a932f00...` contains the corrected 31-key physical-angle candidate but consumes
the stale Animation owner. It remains `NEEDS_REBIND`, then needs visual and device evidence.

### Nature

Organic east-rear source #8 `8533e9d5...` -> source winding Geometry #9 `9b451ba1...` -> indexed
Geometry diagnostic #30 `8ab55271...` -> Rigging owner lineage containing `efe99261...` / current
PR #14 -> Procedural #4 `aeddab24...` -> Technical Art #3 `32b0768c...`.

The indexed line still lacks an authored connected branch/trunk cut and junction. Animation #26
and VFX #29 prove the older analytic representation and require rebind; Map #53 also consumes an
older Nature identity. No analytic PASS transfers to indexed geometry.

### Object

Hard Surface #2 -> #5 -> #9 -> #12 -> keeper/latch source owners #14 `37217b24...` and
#17 `88bbaebc...` -> Rigging #23 `e5d4102b...`.

Technical Art #16 `089e31b9...` is stale and still has a real keeper-seat gate; Animation #10,
TA #21 and Runtime #22 therefore remain stale consumers. Geometry #36 successor002 is preferred
but remains a retest hold. VFX #31 and Runtime #32 remain visual/device holds.

### Building

Accepted bounded main is `adae0a212a0790a433b388e2bb8aba5f5856d604`:

source pavilion #2 -> service-surface predecessor #15 -> clearance source owner #17 -> historical
clearance receiver #18 -> contained topology/normal/Procedural ancestry in #4 -> exact provenance
repair #19.

Current receiver chain is exact PR #17 panel placement -> current world service surfaces ->
mount-axis capacity receivers. Historical 0.08 m predecessor data is read from exact #15 head
`97120eb7...`; current 0.10 m data is not used as a provenance substitute. Sticker Fabric main
`3aa93b01...` supplies only the pinned neutral rigid-frame transform.

Building Materials #3 still needs exact current-source rebind and clean workflows. Building
Runtime #10 remains a proof-host/target-device hold. No final visual or material claim was merged.

### Map / Weather / VFX

Weather main `be6ea199...` is the accepted bounded source plus seeded procedural family.

Map has no newly accepted current-world convergence head. #24 remains a retest hold with Building
workflow failures; #25 has a Weather timing/visual gate; #35 has a Nature flutter visual gate;
#27/#45/#53 need Building/Object/Nature rebinds; Map Runtime branches remain proof-host/device
evidence. Accepted Weather and Building state must be rebound into Map before downstream promotion.

### Weapon / Armor / Unit / Misc

No open PR lineage was available. Existing main heads were inspected; Unit is empty. No capability
was invented to fill the absence.

## Current accepted cross-repo dependency chain

1. Building source authority stays in Building PR #17 and current Building main.
2. Historical Building predecessor evidence stays pinned to #15; it is never derived from current
   bytes by equal numeric values.
3. Building consumes Sticker Fabric main `3aa93b...` only for an exact neutral rigid-frame helper;
   Building retains receiver IDs, shape, fit, clearance and adoption authority.
4. Weather source/procedural authority stays in Weather main `be6ea199...`.
5. UC observers are optional read-only evidence providers; product owners retain semantics.
6. Map, Technical Art, Runtime, Animation and Procedural consumers that pin older identities remain
   held until explicit rebind and only their invalidated gates are rerun.

There is no accepted full source -> Map -> production Runtime chain yet.

## Verification performed

### Weather

- PR #2 exact head: Python 3.12 compile, 13 tests, receipt checks and current workflow PASS.
- PR #3 exact head after retarget: workflow runs `35183062819`, `35183062828`, and `35183062821`
  PASS.
- Post-merge main `be6ea199...`: compile, 13 tests, source-digest/variation receipts and
  `git diff --check` PASS.

### Building

- Pre-repair combined main `fcf3c2a0...`: 145 tests exposed one failure and five errors; preserved.
- Final exact PR #19 tree `429604a5170f45acad236c24cc44c5eb7276c831`: local 173 tests with exact
  Building and Sticker donors, no skips; workflow syntax/ancestry/blob gates and rebuilds PASS.
- PR head `44e24741...`: GitHub run `35459758315`, Python 3.11 and 3.13 jobs PASS, 173 tests per
  job, retained integrated artifact.
- Post-merge main `adae0a21...`: identical tree, local 173 tests PASS; GitHub push run
  `35459864488`, Python 3.11 and 3.13 jobs PASS.

These are structural/provenance/target-host proof checks only. No visual acceptance or real
target-device performance result was inferred from them.

## Unresolved blockers and stale evidence requiring rebind

- Character: independent visual/motion acceptance and target-device Runtime.
- Animal: Runtime #30 and Animation owner rebind; subsequent visual/device gates.
- Nature: connected indexed junction; Rigging inherited red workflows; Animation/VFX/Map rebind.
- Object: TA #16 keeper-seat/source-authority repair; downstream Animation/TA/Runtime rebind;
  successor002 retest.
- Building: Materials #3 rebind; Runtime #10 device evidence.
- Map: current Building/Weather/Nature/Object rebind, current-world retest, named visual gates and
  target-device runtime measurements.
- Wreckline: #3–#5 stale provider bases; #6/#8 require absent historical UC providers
  `axm_uc.hard_surface` and `axm_uc.vehicle_hardpoints`.
- Profession Fabric: #35/#37 exact-head retest and cross-domain evidence.

## Universal Creation / Profession Fabric

Current Studio-demonstrated UC generic capabilities are limited to:

- merged directional texel-density / UV-anisotropy observation from UC #194, contained by current
  UC main;
- merged opt-in closed-shell orientability / signed-orientation observation from UC #200, contained
  by current UC main.

Neither capability carries product density targets, repair policy, outward labels, renderer policy,
visual acceptance, collision, Runtime, CANON or production authority. No Building, Nature, Object,
Animal, Character, Weather or Map semantics were centralized into UC during convergence.

Profession Fabric remains a candidate home for reusable evidence/provenance procedures, not for
domain assets or automatic authority. PR #35 (3D game-asset specialist body) and stacked PR #37
(bounded variation evidence procedure) remain experimental `NEEDS_RETEST` lanes. One Wreckline
proof family is not sufficient cross-executor/cross-domain promotion evidence.

## Deliberately not merged

- Any branch stopped by a visual, target-runtime, dependency, rebind or retest gate.
- Any branch whose green CI proved only a historical or proof-host contract.
- Sticker Fabric #4/#5: valid independent growth lanes, but unrelated to recovery glue.
- UC #151/#153/#215/#216: no demonstrated need to merge them for this recovery pass.
- PF #35/#37: experimental and not cleanly retested.
- Mass Map, Character, Animal, Nature or Object stacks: their first unresolved owner gate remains.

## Rollback points

- Control-room pre-convergence main: `2c643117904eb2b6734c337838ca091ec0e9b012`.
- Weather pre-convergence main: `8547e98c44c2ff9b68e8a1316ad0d9721f8895d8`.
- Weather bounded merge points: `9a2893633cd25a2a99661a064040531bf1a9dd02`,
  `be6ea1991435d7bcf1d35af29199bbb4b2e779f4`.
- Building pre-convergence main: `55667bbf3197e21150a142d9829a34afdd24348c`.
- Building bounded merge points: `a984c42e4a7e812ffad8bb5e10859556d1bf3ccc`,
  `7bc5bdfd77d600b8202ea008f7865481480f8d0a`, `046c2a1ce15242cbf5463355a23944df46506e4c`,
  `fd9424ac71b1ad95ed254344f185f537fca2fced`, `fcf3c2a0d3f2f7ee973fb0d7f090f65abf9b8c4e`,
  and `adae0a212a0790a433b388e2bb8aba5f5856d604`.
- Building first repair failure head: `86032bdbfc265d5d75fe4482165dfaa2263f918f`.
- Every closed PR exact head remains in the freeze map and GitHub PR history.

## Four-root check

- **Truth:** exact heads, failed runs, stale provenance and scope boundaries remain explicit. Green
  CI was never substituted for source, visual, gameplay or device evidence.
- **Agency / non-domination:** domain source owners retain semantics; consumers and UC/PF do not
  seize authority; unresolved Art, QA and Runtime gates remain with their owners.
- **Continuity:** no history or branch was rewritten/deleted; failed experiments and old evidence
  remain addressable; rollback commits are exact.
- **Wisdom before speed:** only Weather and the evidence-cleared/repaired Building line were merged.
  Other domains stop at their first real gate, and no speculative growth was added.

## Next five highest-leverage convergence actions

1. Rebind Building Materials #3 to Building main `adae0a21...`; rerun only source/topology/material
   gates and retain any visual hold.
2. Repair Object TA #16 against source owners #14/#17, including the real keeper-seat gate; then
   rebind the existing Animation/TA/Runtime consumers upstream-to-downstream.
3. Reconcile Map #24/#27/#45/#53 with accepted Weather, Building, Object and indexed Nature owners;
   keep visual/runtime gates separate.
4. Rebind Animal Animation/Runtime to the current Rigging owner and the 31-key physical-angle
   candidate; rerun deformation, visual and device gates in that order.
5. Decide Nature's connected indexed branch/trunk junction in Geometry, then rebind Rigging ->
   Animation/VFX -> Technical Art -> Map without transferring analytic evidence by analogy.

## Post-record live-drift addendum — 2026-09-19T23:31:32Z

This addendum preserves the earlier record rather than rewriting it as if later work had already
existed at `2026-09-19T18:04:32Z`.

- A fresh census found the Character, Animal, Nature, Object, Building, Map, Weather, Weapon,
  Armor, Unit, Misc, Profession Fabric, Wreckline and Sticker Fabric default heads and open-PR
  populations unchanged from the bounded post-convergence state recorded above.
- Universal Creation advanced independently to main
  `9381bd850a32c9c76a9aff4a04d4687f5a87b1ae`. PRs #151, #215, #216 and #217 merged; #153 closed
  unmerged after its bounded mechanism was reconciled by #217; #218 is now the sole open UC PR.
- UC #218 exact head `3051be9cf033983605a3d8beca24687141567a74` is `KEEP_CURRENT` as independent growth, not a
  Studio merge dependency. Its exact-head CI is green except for the intentionally skipped
  optional workshop-render job; no Studio consumer or acceptance claim is rebound by that fact.
- The Studio-demonstrated generic UC capability set remains limited to the two observers already
  named above. Newer UC main capabilities may be evaluated by a future exact consumer rebind, but
  are not adopted here by containment or recency.
- Create-Me's read-only 3D Studio shell PR #3 was accepted by the user and merged at
  `2caa4b6a7ea8a8481c5e7898d2c69e3f07948b81`. It changes presentation only and is a rollback
  point for the pre-drift shell state.

Four-root result: Truth required correcting the stale UC card; Agency keeps all UC and product
adoption decisions with their owners; Continuity retains the original freeze and later drift as
separate timed facts; Wisdom limits the repair to provenance and does not pull UC growth into the
Studio convergence path.
