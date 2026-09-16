# 06 — Rigging & Deformation Specialist Status

Date: 2026-09-16
State: **PASS_CONTINUOUS_LID_TO_BILATERAL_SERVICE_MODULE_CLEARANCE / ATTACHMENT DYNAMICS + ANIMATION + RUNTIME HOLD**

## Current activation

The newest non-duplicative Rigging receiving handoff is now on Object rather than Character, Animal, Nature or Building.

The previous Object Rigging lane, `mike-axiom-mir/axm-object-design` PR #3, proved the exact `rear-lid-hinge-001` rigid lid envelope and then analytically closed continuous `body_shell` / `lid_shell` separation over `0..110°`. Its truth boundary explicitly held service modules and other attachments.

Hard-Surface PR #5 subsequently created a real source-owned `utility-module-001` that fits both bilateral service sockets, and Technical Art PR #7 proved one exact static source-frame target-host handoff. That made the attachment gap executable without inventing a generic rig or duplicating another specialist lane.

Selected bounded question:

**Can the exact fixed bilateral `utility-module-001` bodies coexist continuously with the already-proven rigid lid articulation envelope while preserving the exact host, module and donor-rig identities?**

Result: **`PASS_CONTINUOUS_LID_TO_BILATERAL_SERVICE_MODULE_CLEARANCE`**.

`axm-create-me` remains coordination-only.

## Constellation / overlap scan

- **Weapon / Armor / Unit / Misc:** no newer accepted articulation/deformation receiving handoff displaced the Object attachment gap.
- **Character:** PR #2 still exposes 13 named flex zones as `DECLARED_NOT_DEFORMATION_TESTED`; no direct visual/topology acceptance yet justifies Rigging authoring.
- **Animal:** Rigging PR #2's `ease-out-power-0p75-v1` weighting candidate remains numerically improved but still lacks the requested direct shaded/perspective A/B acceptance. Geometry PR #4's connected forelimb candidate has structural evidence but must not inherit the older disconnected-surface deformation PASS before its own visual/deformation gate.
- **Building:** Hard-Surface PR #2 now demonstrates two source-owned panel receiver frames on `service-pavilion-001`, but those panels are static fit evidence and do not yet expose a justified articulation request.
- **Nature:** source trees continue to declare flex zones as not deformation-tested; existing wind response is VFX-owned visual deformation and does not justify silently replacing it with a skeletal rig.
- **Weather / Map:** current dynamic work belongs to VFX / Environment / Runtime rather than Rigging.
- **Object:** PR #5 supplies the exact module source that the previous Rigging truth boundary named as missing. No competing Rigging lane tests lid motion against those attached modules.

A new Rigging PR was opened only for this attachment-specific constraint. Existing PR #3 remains the owner of the underlying lid/body articulation certificate.

## Exact source, module and rig identity

Repository: `mike-axiom-mir/axm-object-design`

Receiving source lane:

- Hard-Surface PR #5 — `Hard Surface: prove bilateral service-module fit contract`;
- branch: `studio/hard-surface-service-module-fit-001`;
- exact prerequisite head: `9a0524319cc3fe33bdbb2d76505b2c89a7a9f190`;
- host asset: `modular-equipment-case-001`;
- host source SHA-256: `49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`;
- module asset: `utility-module-001`;
- module source SHA-256: `ffd7b42294d3af71e02aa172157beccefa08c6af2c1198f88836862d2a50fc2e`;
- bilateral socket identities: `left-service-socket` / `right-service-socket`;
- exact socket normals: `[-1,0,0]` / `[+1,0,0]`.

Pinned donor rig identity:

- Rigging PR #3 exact donor commit: `4b72c9918c5fc1e89bd18a0be24fb4afac6e7775`;
- donor plan path: `assets/modular-equipment-case-001/articulation.json`;
- articulation plan digest: `0ad6dc2ca22676cf301579932e599a441eb7c4bccce31991d1b727aeb22ac422`;
- joint: `rear-lid-hinge-001`;
- hinge axis: exact source `+X`;
- moving component: `lid_shell`;
- fixed component: `body_shell`;
- envelope: `0..110°`;
- representative poses: `0 / 30 / 60 / 90 / 110°`.

New attachment-specific Rigging lane:

- PR #8 — `Rigging: certify lid clearance with bilateral service modules`;
- branch: `studio/rigging-object-module-lid-clearance-001`;
- base: exact Hard-Surface PR #5 branch;
- exact tested head: `8257980a17830819fde72f227154b3bf338572c0`;
- PR state after evidence verification: **OPEN / DRAFT / MERGEABLE**.

No host source, module source, hinge dimensions, socket descriptors, UC code, animation clip or runtime controller was rewritten.

## Bounded improvement — analytic attached-module clearance certificate

Added Object-local evidence machinery only:

- constraint: `assets/modular-equipment-case-001/attached-module-lid-clearance.json`;
- verifier: `tools/certify_attached_module_lid_clearance.py`;
- certificate schema: `axm.object-attached-module-lid-clearance-certificate/v0.1`.

The certificate deliberately avoids pretending to be a general 3D collision engine. It uses the exact mechanical relationship already present in the source:

1. The lid rotates about the exact source `+X` hinge.
2. Rotation around `+X` preserves every rigid lid-shell vertex X coordinate for every angle, not just sampled angles.
3. Host width is `0.78 m`, so the rigid lid-shell rectangular X interval remains exactly `[-0.39,+0.39] m` across the full `0..110°` envelope.
4. With the exact source socket frames and exact module `0.030 m` standoff / `0.095 m` body depth, the fixed module-body X intervals are:
   - left: `[-0.515,-0.420] m`;
   - right: `[+0.420,+0.515] m`.
5. The nearest module face therefore stays **`0.030 m`** outside the lid X boundary on each side for every permitted lid angle.

Continuous certified minimum lid-to-module body separation: **`0.030 m`**.

Both modules may be present simultaneously under this exact X-separation certificate.

This closes one specific attachment collision non-claim from the earlier shell certificate; it does not relabel the product as fully collision-certified.

## Representative poses and motion boundary

The retained certificate binds to the exact donor rig and records all required representative poses:

| Open angle | Lid X interval | Left module clearance | Right module clearance | Result |
|---:|---:|---:|---:|---|
| `0°` | `[-0.39,+0.39] m` | `0.030 m` | `0.030 m` | PASS |
| `30°` | `[-0.39,+0.39] m` | `0.030 m` | `0.030 m` | PASS |
| `60°` | `[-0.39,+0.39] m` | `0.030 m` | `0.030 m` | PASS |
| `90°` | `[-0.39,+0.39] m` | `0.030 m` | `0.030 m` | PASS |
| `110°` | `[-0.39,+0.39] m` | `0.030 m` | `0.030 m` | PASS |

These five rows are representative evidence, while the continuous claim comes from the hinge-axis invariance itself rather than interpolation between those poses.

Fail-closed controls reject:

- a changed donor rig envelope;
- a non-`+X` hinge, because the X-invariance proof would no longer apply;
- a synthetic module standoff reduced until its body merely touches the lid X boundary.

## Exact-head CI and retained evidence

Exact tested head: `8257980a17830819fde72f227154b3bf338572c0`.

All exact-head workflow families are green:

- `35063989682 — Object rigging attached-module clearance evidence` — **SUCCESS**;
  - compile + full repository tests pass on Python 3.11 and 3.13;
  - exact pinned donor plan materialization passes;
  - exact certificate build passes;
  - retained artifact upload passes.
- `35063989616 — Object service-module fit evidence` — **SUCCESS**.
- `35063989585 — Object hard-surface interface evidence` — **SUCCESS**.

Retained artifact:

- name: `modular-equipment-case-001-attached-module-clearance-evidence`;
- artifact ID: `10433607109`;
- size: `4,861` bytes;
- workflow head: `8257980a17830819fde72f227154b3bf338572c0`;
- archive SHA-256: `34796130bb5748ec7dfae97e7515a96fecf08f8425a2858d4d20778d25f222a8`.

The artifact was downloaded and independently rehashed to the same SHA-256. Its retained `exact-head.txt` independently records the same exact head. The archive contains:

- `host-source.json`;
- `module-source.json`;
- `constraint.json`;
- `donor-articulation-plan.json` materialized from exact commit `4b72c991...`;
- `continuous-lid-to-module-clearance.certificate.json`;
- `exact-head.txt`.

## What this proves

For the exact host bytes, exact module bytes, exact bilateral source frames and exact donor articulation plan:

- the existing `rear-lid-hinge-001` identity and `0..110°` motion boundary remain unchanged;
- the fixed left and right `utility-module-001` body boxes each remain continuously disjoint from the rigid lid-shell rectangular X extent;
- the continuous minimum separation in the proved axis is `0.030 m`;
- the same result holds with both exact modules attached simultaneously;
- the evidence fails closed when the invariant-axis or positive-separation assumptions are removed.

## Truth boundary / non-claims

This activation does **not** establish:

- full-component collision freedom involving hinge knuckles, latches, socket plates, guards, bolts, cables or future attachments;
- dynamic attach/detach behavior;
- attachment retention, threaded-fastener engagement, load capacity, fatigue, vibration, waterproofing or manufacturing tolerance stack;
- collision-engine behavior or physical simulation;
- skeletal export or a generic mechanical rig/constraint system;
- animation timing, easing, motion style, clip quality or Animation acceptance;
- target-engine/controller/state-machine playback;
- runtime physics, performance or Runtime acceptance;
- gameplay interaction or gameplay acceptance;
- shaded/perspective appearance or Art Director / Visual Observer acceptance;
- UC / Profession Fabric promotion;
- CANON, production readiness or Rigging mastery.

The PASS is for exact fixed module **body boxes versus the rigid lid-shell rectangular X extent** only. It must not be expanded into a claim about every detailed component on the manufactured case.

## Previous evidence retained

The earlier Object PR #3 certificate remains independently valid for its own scope:

- continuous `body_shell` / `lid_shell` separation over every angle in `0..110°`;
- certified continuous lower bound `0.012 m` for the exact shell abstraction;
- 111/111 integer-degree cross-check PASS;
- exact head `4b72c9918c5fc1e89bd18a0be24fb4afac6e7775`;
- retained artifact `10431936657`, SHA-256 `52e293d5ffdaa40773722a415d3309218c31dfbf0155ff9ef0d03fee10530940`.

The Animal weighting lane also remains unchanged and unpromoted:

- rig-plan digest `b1f39ef8cd127edf9288b89ebd1f1fc14e6a3ceb8b0db58fa0ba9b12bc892aa8`;
- `ease-out-power-0p75-v1` remains a numeric `PASS_SCOPED_WEIGHTING_REFINEMENT` candidate;
- direct shaded/perspective A/B acceptance is still missing;
- connected Animal topology must receive its own deformation evidence if adopted.

## Root gate

- **Truth:** the new certificate is pinned to exact host, module and rig identities and closes only one prior attachment non-claim. Its analytic assumption is named explicitly, negative controls fail closed, and dynamic/runtime/animation claims remain withheld.
- **Agency / non-domination:** Hard Surface retains source/interface ownership; Technical Art / Runtime retain target-host and dynamic attachment ownership; Animation retains timing/performance ownership; Visual Observer / Art Direction retain perceptual acceptance. Rigging does not turn a structural PASS into merge/CANON authority.
- **Continuity:** PR #8 stacks on the exact Hard-Surface module source while pinning the existing PR #3 rig plan by commit + digest instead of copying or silently redefining it. Exact evidence is retained and rollback remains available through Git history.
- **Wisdom before speed:** the smallest invariant-axis certificate was used rather than building a generic collision solver, attachment framework or UC abstraction from one manufactured family.

## Handoffs

- **Hard Surface / Object PR #5:** the exact bilateral module source now has a bounded Rigging coexistence certificate against the current lid shell. Do not alter socket frame, module standoff, host width or hinge axis while inheriting this PASS without rerunning the certificate.
- **Existing Object Rigging PR #3:** PR #8 consumes the exact plan by pinned commit/digest and does not supersede the original lid/body shell certificate.
- **Technical Art / UC Integration / Object PR #7:** static target-host placement plus this structural articulation clearance still does **not** prove dynamic attach/detach or engine playback. If dynamic attachment is attempted, preserve the source-owned frame semantics and test the actual runtime path.
- **3D Animation & Motion:** no clip was authored or accepted. Any future lid clip must remain inside the exact `0..110°` rig envelope and must not inherit runtime or visual acceptance from this certificate.
- **Runtime / Optimization:** no engine constraint, physics body, collision shape, controller or runtime budget was exercised here.
- **Visual Observer / QA:** no new rendered pose board was required to prove the invariant X separation, but any perceptual/mechanical plausibility claim remains theirs.
- **Capability Cartographer:** Object now has two related but distinct contracts—source-owned 3D attachment fit and source-owned lid articulation coexistence. This is still one manufactured family; do not centralize a generic attachment-articulation solver yet.
- **Animal / Character / Nature:** none of their deformation decisions inherit this rigid manufactured-axis result.

## Next Rigging & Deformation pass

1. Re-scan the constellation for a new direct Rigging receiving handoff rather than extending Object automatically.
2. If Technical Art / Runtime attempts dynamic service-module attach/detach, test the exact runtime attachment transform and collision representation rather than inferring it from this source-space certificate.
3. If Animal receives the requested shaded/perspective weighting review, act on that evidence before further weighting tuning.
4. If the connected Animal topology clears its visual gate, deformation-test that exact topology independently.
5. If Character flex zones clear visual/topology review, choose one representative flex boundary before attempting a full humanoid rig.
6. Do not extract generic articulation or attachment machinery until materially different domains reproduce the same executable need.
