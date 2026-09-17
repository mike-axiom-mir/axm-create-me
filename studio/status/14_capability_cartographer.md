# Capability Cartographer Status

- Date: `2026-09-18`
- Standing role: `studio/specialists/14_capability_cartographer.md`
- Campaign contract: `studio/3D_STUDIO_CAMPAIGN.md`
- State: `PASS_PAYLOAD_SEMANTIC_FRAME_TRANSFORM_IDENTITY_MAP / ANIMAL_MAP_OBJECT_REPEAT_THRESHOLD_MET / PF38_EVIDENCE_VOCABULARY_REFINED / ADAPTATION_STAGE_AND_ORIENTATION_EQUIVALENCE_SEPARATED / NO_NEW_UC_EXTRACTION / UC200_ACTIVE_NONOVERLAP / CREATE_ME_COORDINATION_ONLY`

## Current activation

Re-read the 3D Studio campaign and Capability Cartographer standing role, then rescanned newest specialist status, current product PRs, Universal Creation main/open shared lanes, Profession Fabric continuity and the shared-capability execution-claim registry before changing coordination state.

`axm-create-me` remains **coordination only**. No product geometry, coordinate adapter, winding, receiver implementation, Animation source motion, Universal Creation implementation, Profession Fabric implementation, Art/QA verdict, CANON state, specialist authority or merge authority moved into this repository.

The four AXM roots remain the gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh shared-work / overlap scan

Current shared-system continuity:

- Universal Creation current merged main observed in the fresh scan: `7be1a28c43a88c7e40f7d0c039aefd753d5e70d9` (merged Physics PR #198; unrelated to frame-semantics evidence).
- UC issue #199 now has one active implementation lane, PR #200, exact head `51fa006cd3d08648a5965c09eaf55d2936b1ee2c`, open/draft/mergeable. Its dedicated workflow `35281398491` and inherited topology workflow `35281398747` are green. The coordination registry already marks that scope `IMPLEMENTING`.
- PR #200 is the previous Cartography run's closed-shell orientability / signed-orientation observer scope. It does not own source-to-transport-to-host frame adapters or rotation representation semantics.
- The shared-capability registry contains no active implementation claim for the frame-semantics scope selected here.
- Profession Fabric PR #37 remains the separate experimental bounded-variation evidence procedure. It does not implement frame conversion.
- Profession Fabric issue #38 already contains the experimental provenance/rebind vocabulary for coordinate frames and directional fields; therefore the correct action here is a bounded vocabulary refinement, not a second PF framework or implementation lane.

No new UC issue, UC PR, PF PR or execution claim was opened.

## Selected material cross-repo learning

Fresh Animal + Object/Map evidence now crosses the repeat threshold for a narrower transform/provenance rule:

**`SAME_FRAME_TRANSFORM != SAME_TRANSFORM_LAW_FOR_EVERY_PAYLOAD_CLASS`**

A coordinate conversion is not fully specified by saying which XYZ basis maps to which. Evidence must also preserve **what semantic quantity is being transformed**, **which rule is used for that quantity**, and **whether an earlier stage already applied a handedness/sign adaptation**.

The practical failure mode is double or wrong adaptation: positions may look correct while face orientation or rotations are wrong because a downstream consumer reused the point/vector rule for an oriented or axial quantity.

## Evidence A — Animal static surface transport

Repository: `mike-axiom-mir/axm-animal-design`

Technical Art PR #3 current head:

`1ca28d29c7e1aaa095c11aaa6085716669230cb3`

The retained Animal bridge explicitly maps the Animal source convention:

`+X forward, +Y left, +Z up`

to UC's portable Y-up / +Z-forward surface convention.

That conversion changes handedness. Technical Art therefore also reverses triangle winding while transporting the exact product surface. The important distinction is not merely that both operations happen in one adapter; it is that they are **different semantic consequences of the same declared frame map**:

- source positions are coordinate values transformed into the target frame;
- oriented triangle order carries orientation/chirality information and therefore cannot be treated as a position payload;
- source/product topology authority does not move merely because a transport adapter reverses target-side winding.

The bridge preserves its own exact producer identities and does not convert this receiving operation into source adoption, visual acceptance or a generic UC policy.

## Evidence B — Object owner motion into the current-world Godot receiver

Repository: `mike-axiom-mir/axm-map-design`

Technical Art PR #45 current exact head:

`e085437f6cc958bbf7c5c6464578923d542962b0`

The fresh real-host failure exposed the dynamic version of the same semantic distinction.

The owner/UC path uses:

`source [x,y,z] -> UC/glTF [x,z,y]`

which changes handedness. The existing owner motion plan already encodes the corresponding angle-sign consequence.

The actual current-world Godot host uses:

`source [x,y,z] -> Godot [x,z,-y]`

which is a proper rotation.

The old bridge silently treated these receiver frames as if the same scalar angle convention could simply pass through. Real Godot then failed the rigid-placement invariants even though the underlying owner motion was unchanged.

The bounded Technical-Art repair remains product/receiver-owned:

`UC_GLTF_TO_GODOT_CURRENT_WORLD_REFLECTION_Z__NEGATE_OWNER_ROTATION_ANGLE_AFTER_WORLD_AXIS_PLACEMENT`

It:

1. keeps the owner and UC/glTF frame identity explicit;
2. keeps the actual Godot host frame explicit;
3. reflects receiver Z into the host convention;
4. maps the already world-placed owner hinge axis into that host frame;
5. negates the already-handedness-adjusted owner angle exactly once;
6. leaves UC product code unchanged.

Final workflow `35279024982` succeeds. Retained receiver observations include quaternion errors `0.0`, neutral/endpoint closure with zero drift, owner latch `-50°` appearing as Godot-host `+50°`, and owner lid `+100°` appearing as Godot-host `-100°` at the retained samples.

This is direct evidence that **adaptation stage identity matters**: a sign change that is already present in an upstream owner/transport plan must not be applied a second time merely because another frame boundary also exists downstream.

## Evidence C — Animation independently selects the correct orientation comparison primitive

Repository: `mike-axiom-mir/axm-map-design`

Animation PR #48 exact current head:

`343668b80acd52367e3427f3ef97d1662625c18f`

Animation explicitly replays the frozen Object owner sequence on the exact `e085...` Technical-Art receiver instead of inheriting its older wall-clock PASS by ancestry.

The important Cartography evidence is its observer repair:

- scalar source/host Euler-X comparison was too weak for the adapted receiver;
- Animation now compares the **actual pivot quaternions** with quaternions generated from Technical Art's already-adapted target plan about the exact host axis;
- it does **not** apply another frame/sign conversion;
- exact owner timing, keys, easing and amplitudes remain frozen.

Workflow `35283767586` succeeds with maximum receiver-frame quaternion disagreement `0.0°`, correct phase order, peak traversal and endpoint closure. The same receipt explicitly keeps `74 / 101` observed source slots as incomplete display/source-slot coverage rather than relabelling it complete 40 Hz delivery.

This independently demonstrates another part of the rule: **orientation equivalence has its own representation/observer identity**. Scalar Euler equality is not the general acceptance primitive for a receiver whose orientation has already been adapted into another frame.

## Cross-repo capability map

The reusable evidence chain is now:

`source_frame_identity`

→ `frame_transform_identity + parity/chirality`

→ `payload_semantic_class`

→ `payload_transform_rule_identity`

→ `adaptation_stage_identity`

→ `receiver_frame_application_identity`

→ `orientation/geometry observation-space identity`

→ bounded claim verdict.

The following distinctions must stay explicit:

- `POINT_POSITION` / ordinary positional coordinate;
- `POLAR_DIRECTION` where appropriate;
- `NORMAL_COVECTOR` / normal-specific transform rule;
- `TANGENT_PLUS_HANDEDNESS` where tangent sign semantics exist;
- `ORIENTED_TRIANGLE_ORDER` / winding parity;
- `ROTATION_ORIENTATION` / matrix, quaternion or axis-angle semantics.

The transform matrix alone does not prove those semantic rules are interchangeable.

## Profession Fabric placement action

Refined existing Profession Fabric issue #38 with comment:

`5722327764`

The refinement extends the already-existing frame/directional evidence vocabulary with:

- `frame_transform_identity`;
- `frame_transform_parity` (`PROPER | IMPROPER | NOT_EVALUATED`, or exact determinant sign when applicable);
- `payload_semantic_class`;
- `payload_transform_rule_identity`;
- `orientation_representation_identity`;
- `adaptation_stage_identity`;
- `orientation_equivalence_observer_identity`;
- explicit separation from renderer front-face/culling policy.

The bounded non-transfer rules are:

1. position equivalence does not prove orientation equivalence;
2. one frame map does not authorize one transform law for every payload class;
3. improper frame conversion can affect oriented topology and rotation/axial semantics differently from points/directions;
4. an adaptation already encoded upstream must not be applied again downstream;
5. scalar Euler equality is not sufficient where the claim is full orientation equivalence;
6. coordinate-frame parity still does not choose a renderer's front-face/culling policy.

This is **evidence/provenance vocabulary only**. PF does not receive an executable frame adapter, target-host rule or product acceptance authority.

## Why no new Universal Creation lane was opened

The evidence is repeated, but the executable mechanisms are not yet one neutral implementation contract:

- Animal's adapter is a product-source → portable-surface transport boundary and includes target-side winding treatment;
- Map Technical Art's adapter is an owner/UC-glTF → Godot current-world receiving boundary with already-adapted rotation semantics;
- Animation is an observer/replay consumer of that exact receiver, not a third frame-conversion implementation.

UC should remain generic until multiple materially different receivers need the same neutral executable transform machinery. At this point the shared reusable result is the **semantic contract/evidence identity**, which belongs in PF #38.

Current UC PR #200 remains active for the separate closed-shell orientation observer; no sibling implementation was opened or disturbed.

## Product returns

Returned the map without changing product code:

- Profession Fabric issue #38 comment `5722327764`;
- Map Technical Art PR #45 comment `5722328940`;
- Animal Technical Art PR #3 comment `5722329946`;
- Map Animation PR #48 comment `5722331146`.

No source, receiver, motion, frame adapter, renderer policy or acceptance threshold was changed by Cartography.

## Bounded placement table

| Layer | Correct home | Current evidence | Explicitly not implied |
|---|---|---|---|
| product/source coordinate convention | owning product source / Technical Art boundary | Animal PR #3; Object owner data | global UC convention adoption |
| exact product/receiver adapter | owning Technical Art lane | Animal #3; Map #45 | shared engine extraction |
| receiver orientation comparison | owning Animation/QA evidence lane | Map Animation #48 | retime, controller or Art acceptance |
| reusable semantic transform/provenance vocabulary | Profession Fabric #38 experimental procedure | current Cartography refinement | executable adapter or automatic conversion |
| generic neutral executable transform machinery | Universal Creation only after stronger repeat evidence | **not opened this pass** | host-specific frame policy |
| renderer front-face/culling policy | Materials / Technical Art receiver | prior Object receiving evidence | source/coordinate truth |
| shared-work collision avoidance | `axm-create-me` coordination registry | UC #200 active only | ownership / merge priority |

## Explicit non-claims

This activation does **not** establish:

- one universal source/host coordinate convention;
- one universal automatic coordinate adapter;
- a generic quaternion/Euler conversion policy;
- automatic winding repair or source winding adoption;
- normal/tangent production correctness merely from the new vocabulary;
- target-renderer front-face/culling correctness;
- Animation retiming or full 101-slot display delivery;
- Runtime/controller/device acceptance;
- Art Direction / independent Visual QA acceptance;
- a UC implementation for frame conversion;
- a PF implementation or profession promotion;
- CANON;
- production/game readiness;
- mastery;
- merge authority transfer.

`axm-create-me` remains coordination-only.

## Four-root gate

**Truth:** the real Map/TA failure is preserved; the distinction is based on exact receiver evidence, not inferred from green position transport. Animal's historical handedness/winding bridge remains its own product proof, and Animation's `74/101` wall-clock observation is not inflated into full cadence delivery.

**Agency / non-domination:** Animal and Map Technical Art keep adapter ownership; Animation keeps playback/orientation observation; Runtime, Environment, Materials, Art and QA keep their existing authority. PF receives vocabulary only; UC is not expanded without stronger implementation evidence.

**Continuity:** prior frame/directional PF vocabulary is extended rather than replaced. Existing Animal and Map histories, failed receivers, exact donor heads, UC #199/#200 execution claim, and all earlier Cartography maps remain addressable.

**Wisdom before speed:** the repeated semantic bug is captured at the smallest reusable layer first. No generic conversion engine is invented from two adapters with different receiving responsibilities.

The four AXM roots remain the merge gate.

## Recovery / provenance

Previous Cartography state:

`PASS_CLOSED_SHELL_ORIENTABILITY_SIGNED_ORIENTATION_PLACEMENT_MAP`

Previous status blob SHA:

`7b61ba3a36f3851658e0d934febd3207b85d0dbe`

Previous shared proposal continuity:

- UC issue #199 remains the proposal identity;
- UC PR #200 is the single active implementation claim at head `51fa006cd3d08648a5965c09eaf55d2936b1ee2c`;
- no product consumer inherits #200 until an exact merged UC identity exists and it explicitly rebinds/reruns.

Current Cartography returns:

- PF #38 comment `5722327764`;
- Map TA #45 comment `5722328940`;
- Animal TA #3 comment `5722329946`;
- Map Animation #48 comment `5722331146`.
