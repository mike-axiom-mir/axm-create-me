# AXM 3D Studio convergence state

Recorded: `2026-09-19T18:04:32Z`

Latest append-only update: `2026-09-20T01:01:06Z`

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

## Building Materials and specialist-tool addendum — 2026-09-20T00:08:31Z

This addendum supersedes only the stale Building Materials action in the earlier record. It does
not rewrite the original freeze, old Materials evidence, or the wider held domains.

### Repositories and PR actions

- `axm-create-me` PR #5 exact head `79f3d25c5b3a61b8c440182d503388bc0df7942d` merged as
  `9544b335075b5c0e620a714d2943c90c4b4ab8e1`. It adds the shared specialist-tool architecture
  and machine-readable manifest schema; it does not promote any product capability by itself.
- `axm-building-design` PR #20 exact final head
  `496c5a070b56acad7c319bc52caf0d52679c5b00` merged as
  `0df875379df67d7d940accc98c61e6071b733a65`.
- Building Materials PR #3 exact head `eb31efc1639f58f2797bac44ce7f1bad774841ef`
  was closed as `SUPERSEDED` only after PR #20 preserved it as merge ancestry and recorded its
  historical evidence. Its branch, PR discussion, artifacts, and failed runs were not deleted.
- Building open PR population moved from two to one. Runtime PR #10 remains open and held.

### Accepted bounded Building lineage

Building main is now `0df875379df67d7d940accc98c61e6071b733a65`:

source pavilion #2 -> service-surface predecessor #15 -> clearance source owner #17 -> historical
clearance receiver #18 -> contained topology/normal/Procedural ancestry in #4 -> exact provenance
repair #19 -> retained Materials lineage #3 rebound through convergence #20.

PR #20 kept accepted current Building source bytes while preserving the Materials parent. The
current material packet binds 19 components, 228 outward triangles, zero inward triangles, current
front/east receiver centers, and 0.02 m panel-body clearance. Historical 0.08 m and earlier 0.04 m
measurements remain historical evidence, not equal-provenance substitutes.

### Verification and retained visual evidence

- Local exact-donor suite before publication: 190 tests PASS, zero skips.
- PR head `496c5a07...`: all 14 triggered workflows PASS.
- Current integrated run `35477806639`: Python 3.11 and 3.13 exact-donor jobs PASS with 190 tests.
- Current-source Godot run `35477806689`: structural rebind and Godot 4.7.2 A/B render PASS in
  front, east, and three-quarter contexts.
- Final-head visual artifact `10594932198`, digest
  `37bbbdce02fd27a165d2fae52879f4808e81414f12c9557aeb46a6ef2f77ea5d`, retains six PNGs,
  material payload, structural receipt, and target-host runtime receipt.
- The final-head PNGs are byte-identical to the independently inspected first-head images. Visible
  evidence preserves the silhouette, openings, frame spacing, and both receiver placements while
  the candidate adds a darker five-material hierarchy and ochre service panels. The east-facing
  panel is dark under the proof light; no final aesthetic acceptance is inferred.

The post-merge commit has the verified PR tree and a fresh local exact-commit donor-bound run at
`0df87537...` completed all 190 tests with zero skips. No production target-device workflow was
inferred from the Godot proof host.

### First bounded AI-callable specialist tool

`axm.building.materials.packet` is the first tool registered as `AI_CALLABLE`. Its implementation,
request schema, result schema, manifest, tests, and fail-closed controls remain in
`axm-building-design`. It performs only deterministic structural material-packet generation.

It rejects source-head mismatch, dirty tracked source, unknown request fields, invalid profile or
topology, and accidental replacement without explicit permission. Its receipt binds the exact Git
head and implementation, builder, manifest, request, payload, and receipt digests.

The human layer is `absent`; the intent layer is `absent`. Visual/art-direction acceptance,
physical material validation, Environment adoption, Map integration, target-device Runtime,
gameplay, CANON, and final Materials acceptance remain open. No other specialist is promoted by
analogy.

### UC / Profession Fabric boundary

No Building material values, component assignments, receiver semantics, or source ownership moved
to UC or Profession Fabric. Create-Me owns discovery/orchestration contracts only. UC remains an
optional generic observer/adapter provider at its previously demonstrated boundaries; Profession
Fabric remains a candidate home for reusable evidence procedures, not product semantics.

### Rollback and retained identities

- pre-Materials Building main: `adae0a212a0790a433b388e2bb8aba5f5856d604`;
- retained historical Materials head: `eb31efc1639f58f2797bac44ce7f1bad774841ef`;
- verified convergence head: `496c5a070b56acad7c319bc52caf0d52679c5b00`;
- merged bounded Building main: `0df875379df67d7d940accc98c61e6071b733a65`;
- pre-tool-architecture Create-Me main: `a37e24bc372962e40d502b28f9d8e1445575c34d`;
- merged tool-architecture Create-Me main: `9544b335075b5c0e620a714d2943c90c4b4ab8e1`.

### Four-root check

- **Truth:** the tool claims structural packet generation only; exact identities, visual receipts,
  dark east-light behavior, and open acceptance gates remain explicit.
- **Agency / non-domination:** Materials does not own Building geometry, Art, Environment, Runtime,
  or intent; Create-Me does not absorb domain semantics.
- **Continuity:** PR #3 is preserved in ancestry and history; exact pre/post merge rollback points
  and both old and fresh artifacts remain addressable.
- **Wisdom before speed:** one proven existing builder received thin contracts after source rebind;
  no mass conversion, speculative material family, human UI, or intent automation was added.

### Next five highest-leverage convergence actions

1. Give Create-Me a read-only registry/plan view for the accepted Building Materials manifest and
   receipt before building any editing UI; keep invocation in the Building owner repository.
2. Repair Object TA #16 against source owners #14/#17, including the real keeper-seat gate; then
   rebind existing Animation/TA/Runtime consumers upstream-to-downstream.
3. Reconcile Map #24/#27/#45/#53 with accepted Weather, Building, Object and indexed Nature owners;
   keep visual and runtime gates separate.
4. Rebind Animal Animation/Runtime to the current Rigging owner and 31-key physical-angle candidate;
   rerun deformation, visual and device gates in that order.
5. Decide Nature's connected indexed branch/trunk junction in Geometry, then rebind Rigging ->
   Animation/VFX -> Technical Art -> Map without transferring analytic evidence by analogy.


## Create-Me specialist-tool registry addendum — 2026-09-20T00:48:39Z

This addendum completes the prior action to expose the accepted Building Materials tool through
Create-Me. It changes discovery and explanation only. It does not add specialist execution,
a human editing layer, intent compilation, or any new Building capability.

### Repository and PR action

- `axm-create-me` PR #7 exact head `0a840ad44155053f3475dec8904bc70e77524421`
  merged as `879fb598cbb0c99f3b306021c7788870103916aa`.
- The shell's retained control-room input is prior accepted Create-Me main
  `f742ed67478ada463eee098909e8943958558209`; it is an ancestor and rollback point, not a
  disguised claim that the page generated its own identity.
- The accepted specialist owner remains `axm-building-design` main
  `0df875379df67d7d940accc98c61e6071b733a65`. Its manifest blob is
  `bc1889a08379fcc319a2891164269d68190ea0ff`, and its verified convergence head remains
  `496c5a070b56acad7c319bc52caf0d52679c5b00`.

### Registry boundary and visible state

Create-Me now shows one registry entry, `axm.building.materials.packet`, with the exact owner,
source head, manifest, structural evidence scope, request/result boundary, explicit HOLD
conditions, nonclaims, and a read-only five-step plan. The visible execution rail is:

request -> Building owner -> receipt.

The registry deliberately reports:

- AI-callable layer: **verified**;
- human layer: **absent**;
- intent layer: **absent**;
- Create-Me execution: **disabled by contract**;
- execution authority: `axm-building-design`.

No material values or Building semantics were copied into Create-Me. The shell contains an index
and plan view; the specialist repository retains the implementation and invocation command.

### Exact-head verification and retained evidence

- Local structural shell gate PASS on the six-file change.
- Local Playwright interaction/render PASS at 1440x1000 and 390x844.
- Exact PR head workflow run `35479627476`: `verify` PASS and `render` PASS.
- Retained browser artifact `10595730646`, digest
  `17d392a2d3407fc90c54b299b954edb58700334e9734f61d6e236a41e1947362`, contains desktop
  and mobile overview, tool-detail, existing domain-detail, observations, and failure traces if
  produced.
- Direct screenshot observation found the execution boundary and all three layer states visible
  without observed clipping in the tested desktop and mobile viewports. This is interface evidence,
  not Building art, environment, gameplay, or device-runtime acceptance.

### What remains open

Final Building aesthetic acceptance, physical-material validation, Map/environment adoption,
production target-device Runtime, every other specialist tool conversion, all human editing
surfaces, and deterministic intent compilation remain open. No other domain becomes AI-callable by
analogy.

### Rollback and four-root check

Rollback points are pre-registry Create-Me main
`f742ed67478ada463eee098909e8943958558209`, exact registry PR head
`0a840ad44155053f3475dec8904bc70e77524421`, and merged registry main
`879fb598cbb0c99f3b306021c7788870103916aa`.

- **Truth:** exact owner/source/manifest/evidence identities and absent layers are visible.
- **Agency / non-domination:** execution and Building decisions remain in the Building owner.
- **Continuity:** the earlier shell and convergence record remain intact with explicit rollback.
- **Wisdom before speed:** one proven tool is exposed; no mass conversion or intent automation was
  added.

### Next five highest-leverage convergence actions

1. Repair Object TA #16 against source owners #14/#17, including the real keeper-seat gate; then
   rebind existing Animation/TA/Runtime consumers upstream-to-downstream.
2. Reconcile Map #24/#27/#45/#53 with accepted Weather, Building, Object and indexed Nature owners;
   keep visual and runtime gates separate.
3. Rebind Animal Animation/Runtime to the current Rigging owner and 31-key physical-angle candidate;
   rerun deformation, visual and device gates in that order.
4. Decide Nature's connected indexed branch/trunk junction in Geometry, then rebind Rigging ->
   Animation/VFX -> Technical Art -> Map without transferring analytic evidence by analogy.
5. Keep the Building tool at AI-callable only until a later task explicitly justifies a human
   interface; intent compilation remains last and must not be inferred from UI availability.


## Object Technical Art receiver repair addendum — 2026-09-20T01:01:06Z

This addendum records a branch-level convergence repair in `axm-object-design`. It does not merge
Object to default main, accept the whole Object domain, or erase any historical failure or rejected
visual candidate.

### Exact lineage and PR actions

- Hard-Surface keeper-seat owner PR #14 remains open draft at exact head
  `37217b244046055a40d9050b61eff2876566bad8`.
- Technical Art PR #16 pre-repair head was
  `089e31b9f0e921b728378af728783c4f453c9fbc`; it was 21 TA commits ahead and four owner
  commits behind the current keeper-seat owner, with common ancestor
  `d3fa10a270faae7925811f44f03381fe5c5d0215`.
- Integration PR #38 merged the complete four-file owner payload into the existing TA branch as
  `de1cd4e148728fbfab7aaffdec0b3b0d56b6e6ca`. It did not copy fragments or weaken the
  keeper-seat verifier.
- Guard-repair PR #39 exact head `7c0bf1cb119f5ceed9db600670f04d4b7db3478c`
  merged into the TA branch as current PR #16 head
  `b9848c62b2adde84e9e0afc219088113216799d6`.
- PR #16 remains open draft and is now based on current owner head
  `37217b244046055a40d9050b61eff2876566bad8`.

Hard-Surface PR #17 remains the source mechanical-interface/capture owner at its own exact lineage.
PR #16 does not absorb that mechanical authority. Current downstream latch target Rigging PR #23
still pins historical TA/source donors and therefore remains a separate rebind gate.

### Failure diagnosis and repair boundary

The original current-head keeper-seat failure `35346551798` was real: TA #16 lacked the complete
current owner contract, verifier, tests, and workflow. The four-file source payload was merged
unchanged.

Integration PR #38 run `35479915582` is retained as historical context. Its UC job checked out the
special PR's owner head `37217b24...` rather than a combined tree, so the TA builder was absent and
the job failed with an exact missing-file error. This was not relabelled as a receiver PASS. The
resulting combined TA head reran and passed that UC family.

After owner integration, ten of eleven families passed. The remaining Direction 048 red was the
previously documented whole-branch cumulative-diff false positive: unrelated keeper-seat and sibling
TA evidence made an old exact-file-set equality guard fail before visual execution. PR #39 reused
the already-proven Object-local `axm.ta-evidence-lane-continuity/v0.1` helper to protect only the
three immutable Direction 048 payload files, added a deliberate protected-file mutation negative,
and left every owner/UC/Godot/evidence gate intact.

### Exact final-head verification

All 11 observed workflow families completed SUCCESS on exact PR #16 head
`b9848c62b2adde84e9e0afc219088113216799d6`:

- keeper-seat run `35480153206`, artifact `10595566611`, digest
  `da298fa00d9e82dd4f77e075cc1d14a57725172747c7b79aa00c8a1c3683a37f`;
- UC rigid-scene run `35480153210`, artifact `10595113363`, digest
  `7556732c2677f076e4ac121a190965f35d01ce77e1f26df53869068980543f2f`;
- current-UC continuity run `35480153195`, artifact `10594384401`, digest
  `e32386927939d167e15b8c42b4b0e956b37f1ea3bf9515e172a4f7daab8c37f6`;
- successor002 run `35480153215`, artifact `10595711396`, digest
  `79ebafbc643e70279cdb2d29b75859a5cb86315e909f1d46e11211023a854aab`;
- front-face run `35480153204`, artifact `10595876120`, digest
  `450ce6b53976c881f586c33e7502677524a265f09763c2287a589bf0901d141a`;
- normal-evidence replay `35480153191`, artifact `10595576725`, digest
  `61986ea193c977214343c8e4a2a8bb7c43f80ff166eb242dddd4a55bd910548c`.

The remaining inherited Hard-Surface interface, service-module fit, registration, clearance, and
front-latch ownership workflow families also completed SUCCESS on that head.

### Preserved failure and acceptance state

Art Direction 051 and independent Visual QA still reject the analytic-radial outer-normal candidate.
The fresh successful replay proves reproducibility only. Successor002 remains the frozen visual
control. No rejected visual evidence became accepted evidence.

Current PR #16 classification is:

`KEEP_CURRENT / DOWNSTREAM_REBIND_REQUIRED`

It is the strongest truthful current Technical-Art receiver base, not an accepted Object main.
Rigging #18, latch target Rigging #23, Animation, later TA bridges, Runtime, and Map consumers still
require explicit identity rebind and their invalidated gates must rerun.

### Rollback and four-root check

Rollback points:

- pre-owner-rebind TA: `089e31b9f0e921b728378af728783c4f453c9fbc`;
- owner-integrated TA: `de1cd4e148728fbfab7aaffdec0b3b0d56b6e6ca`;
- guard-repair candidate: `7c0bf1cb119f5ceed9db600670f04d4b7db3478c`;
- current repaired TA: `b9848c62b2adde84e9e0afc219088113216799d6`.

- **Truth:** the real source-owner failure and the separate false-red guard are distinguished; the
  rejected visual verdict remains rejected.
- **Agency / non-domination:** Hard Surface retains keeper-seat/mechanical authority; TA retains only
  transport/receiver authority; Art/QA retain visual acceptance.
- **Continuity:** both parent histories, failed runs, previous green artifacts, and exact rollback
  heads remain addressable.
- **Wisdom before speed:** the repair merged four owner files and changed one workflow guard; it did
  not redesign geometry, normals, UC, or downstream behavior.

### Next five highest-leverage convergence actions

1. Rebind Object Rigging #18 and current latch target Rigging #23 to repaired TA #16
   `b9848c62...`, preserving separate lid and latch authority.
2. Rebind Object Animation and later TA/Runtime consumers upstream-to-downstream; rerun only gates
   invalidated by the new receiver identity.
3. Reconcile Map #24/#27/#45/#53 with accepted Weather/Building and current Object/Nature owners;
   keep visual and runtime gates separate.
4. Rebind Animal Animation/Runtime to the current Rigging owner and 31-key physical-angle candidate.
5. Decide Nature's connected indexed branch/trunk junction before rebinding its downstream chain.


## Map Object receiver tool convergence addendum — 2026-09-20T03:39:14Z

This addendum records the current Object → Map → Runtime convergence and the second verified
AI-callable specialist tool. It does not merge Object or Map experimental lanes to default main,
does not change the standing Object Art/QA rejection, and does not grant Environment or target-device
Runtime acceptance.

### Current exact downstream chain

- Object Technical Art remains draft/open at `b9848c62b2adde84e9e0afc219088113216799d6`;
  its analytic-radial normal candidate remains rejected by Art Direction / independent Visual QA.
- Object Animation current exact owner sequence head is
  `86bdbe9771bf9eb1bc92bd4160442941763fab1d`; the frozen 2.5 s / 40 Hz / 101-key sequence
  digest remains `0a3523cf792264f610881552fd2ebd438aabdfd05e30e92af9dbb33ded1fa2d3`.
- Map Technical Art current Object receiver head is
  `fc567fd6dd061ccb5e8232bd17ee0af3d2e064b7`.
- Map Animation wall-clock receiver head is
  `51f1c0002f58f138911cce7d95a30add9a1e03af`; exact workflow
  `35484291824` completed SUCCESS with 73 distinct owner samples observed, zero maximum pose
  disagreement, natural completion, zero endpoint drift and no Runtime/device authority.
- Environment service-clearance core is retained at
  `04c7f27a749c634daef4bde98dc330fb83e13f91`: the predecessor reaches about 40.659 mm
  minimum inner clearance at owner sample 40 / 1.0 s; the Environment-owned +20 mm rear-edge
  successor restores about 60.659 mm. Environment adoption remains false.
- Environment review/atlas lineage reaches `fe30c647933107aa4c535590a4238de009156842`.
  Exact successful render-review source head `317d4b177180d0ca62beafc6412bd59a12f06b95`
  retained 136 changed comparison frames with deltas localized to the projected service-frame area;
  atlas run `35486468850` is green. These are review surfaces, not Art/QA acceptance.
- Runtime current successor head is
  `3c675de8a6aacf0e318312a985168dc4d6362c78`. Fresh Godot measurement, not inherited
  counters, proves 31 semantic components / 7 moving / 24 current-sequence-static components;
  33 → 14 rendered surfaces, 103 → 65 draw calls at all retained samples, -89,360 B proof-host
  buffer delta, unchanged 812 triangles, and zero A/B changed pixels. Target-device performance
  remains unaccepted.

### Second bounded AI-callable specialist tool

Map PR #54 exact verified head is
`abeaa79b7f69e114a5457f00e6e62c7ca4167d4a`, draft/open and not merged to default main.

Tool ID: `axm.map.object.receiver.packet`.

The exact branch tree preserves Environment head
`fe30c647933107aa4c535590a4238de009156842`, Runtime head
`3c675de8a6aacf0e318312a985168dc4d6362c78`, and the five current Map Animation files
byte-identically from `51f1c0002f58f138911cce7d95a30add9a1e03af`.

Its manifest blob is `4a7342b8b84a44190747df08aec48c9b397d1193`. Exact push workflow
`35487122907` completed SUCCESS. Retained tool artifact `10598575773`, SHA-256
`cb8cf3c62b79305e55d83543cb1ecc1985443a5d46e5a394f0c9d1a6ad6a264d`.

The non-interactive tool validates exact current component-map, motion-plan, Environment-clearance
and Runtime receipt bytes, then emits one deterministic receiver packet plus an exact-head receipt.
It supports bounded owner sample selection, historical versus +20 mm Environment service frame,
and unbatched versus current-sequence 24-static representation. Alternate valid selection passes;
mutated donor bytes and unknown request fields reject closed.

The tool evidence scope is `structural` only. AI layer is verified; human layer is absent; intent
layer is absent. Create-Me may discover and explain the contract but may not execute it.

Open holds remain: Object final Art/QA, Environment production adoption, target-device Runtime,
future sequences that invalidate current static classification, gameplay/physics/collision/navigation,
CANON and production readiness.

### Rollback / continuity

- Create-Me pre-second-registry main: `8ac3c3d3c8e36a021ed8e620d2bbf97dc9295cf1`.
- Map Environment review/atlas head: `fe30c647933107aa4c535590a4238de009156842`.
- Map Runtime fresh-measurement head: `3c675de8a6aacf0e318312a985168dc4d6362c78`.
- Map tool pre-tree-repair head: `fd4df33be0a31d17b873e8a37f39b738845b3635`.
- Map tool verified convergence head: `abeaa79b7f69e114a5457f00e6e62c7ca4167d4a`.

Four-root result: Truth keeps changed provenance separate from semantic equality and keeps proof-host
Runtime/visual evidence non-transitive; Agency keeps source, motion, Environment, Runtime and Art/QA
authority with their owners; Continuity retains old heads/failures and exact rollback identities;
Wisdom adds one thin deterministic packet contract only after the downstream chain was freshly
rebound and measured.


## Map Object receiver human-wrapper addendum — 2026-09-20T05:14:00Z

This addendum records stage 2 of the Map Object receiver specialist tool: a bounded human interface
over the already-verified deterministic contract. It does not add a second creation path, does not
promote intent compilation, and does not transfer execution authority into Create-Me.

### Exact owner implementation and evidence

- prior AI-only rollback head: `abeaa79b7f69e114a5457f00e6e62c7ca4167d4a`;
- current human-wrapped owner head: `b0e7be908b2fe5a4b05c7f167f5dc27cef3b13dd`;
- current manifest blob: `9c79f8fc6aa1844ce784d20f8acbfd09caf117d0`;
- manifest status: `AI_CALLABLE_HUMAN_WRAPPED`;
- layers: AI **verified**, Human **verified**, Intent **absent**;
- deterministic owner-tool run `35491105884`: SUCCESS;
- deterministic tool artifact `10598713335`, SHA-256 `81c235357a052324ad9297d4b7fff41349debf1fa592d3c88a02cf29c210a212`;
- exact desktop/mobile human-wrapper run `35491108283`: SUCCESS;
- human-wrapper artifact `10598847966`, SHA-256 `ebb2ad8c0a795aef4008b8c3213692009627b282b85c00f2f7f73ccf6c650373`.

The human surface is `tools/serve_map_object_receiver_ui.py` plus the local browser files under
`tooling/human/map-object-receiver/`. The server binds to `127.0.0.1` only. It accepts the same
five-field request contract, writes that request to a temporary JSON file, and invokes the existing
`tools/run_map_object_receiver_tool.py` subprocess with the exact evidence files. Packet generation
is not duplicated in the browser or bridge.

### Browser proof

Both 1440×1000 desktop and 390×844 mobile drove the exact loopback bridge successfully.

The retained proof exercised two bounded requests:

1. owner sample 40 / 1.0 s, repaired +20 mm service frame, current-sequence 7-moving / 24-static
   batching: PASS, ~60.659 mm minimum clearance, 14 render surfaces;
2. owner sample 0 / neutral, historical service frame, unbatched representation: PASS, historical
   clearance miss retained honestly, 33 render surfaces.

The receipt returned by the same owner runner reports Human `verified`. The wrapper itself owns no
new geometry, motion, Environment, Runtime, or aesthetic semantics.

### Preserved failure trail

- the first human-workflow attempt retained a checkout failure caused by a literal backslash before
  the GitHub exact-head expression;
- the next browser run retained a selector-only failure after the repaired/batched scenario had
  already passed on both viewports; the test had required the accessible label to equal the single
  word `Historical` despite its explanatory text;
- inherited Animation/tool exact-delta guards also produced retained reds when legitimate downstream
  files were added. They were repaired to protect the exact Animation payload blobs instead of
  forbidding descendants. Final Animation continuity and deterministic tool runs are green.

No failed evidence was deleted or relabelled.

### Create-Me boundary

Create-Me may display that the Map tool has a verified human wrapper and may link to its exact owner
entrypoint and evidence. Create-Me still does **not** execute the tool. Execution and evidence
retention remain in `axm-map-design`.

The Building Materials tool remains AI-only; its Human layer stays absent. No other specialist gains
a human interface by analogy.

Intent compilation remains absent and is the later third layer, not inferred from the existence of a
form.

### Holds unchanged

Object final Art Direction / independent Visual QA, Environment production adoption, target-device
Runtime performance, arbitrary future articulation, gameplay/physics/collision/navigation, CANON,
and production readiness remain open.

Four-root result: Truth keeps the UI bound to the same exact request/runner/receipt; Agency keeps
execution and domain decisions in Map; Continuity preserves the AI-only rollback and all failed
runs; Wisdom adds one thin human surface only after the machine contract was proven.
