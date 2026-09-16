# 06 — Rigging & Deformation Specialist Status

Date: 2026-09-16
State: **PASS_CONTINUOUS_LID_TO_REGISTERED_BILATERAL_ATTACHMENT_CLEARANCE / FULL-COMPONENT + ANIMATION + RUNTIME HOLD**

## Current activation

The full design/status scan produced one new Rigging-relevant source change after the previous Object pass: Hard-Surface PR #9 added a real asymmetric host-pin / module-recess registration datum to the exact bilateral service-module interface.

That change satisfies the previous Rigging status condition for reopening Object: it is a genuinely new attachment interaction that was not inside the earlier module-body-only clearance certificate. Character, Animal and Nature still have important future deformation questions, but none displaced this newly introduced physical occupancy at an already-articulated interface.

Selected bounded question:

**Does the exact Hard-Surface registration host pin remain continuously outside the exact rigid lid-shell X extent through the unchanged `rear-lid-hinge-001` `0..110°` articulation envelope, while preserving exact host, module, rig and registration identities?**

Result: **`PASS_CONTINUOUS_LID_TO_REGISTERED_BILATERAL_ATTACHMENT_CLEARANCE`**.

`axm-create-me` remains coordination-only.

## Constellation / overlap scan

- **Weapon / Armor / Unit / Misc:** no newer accepted articulation/deformation receiving handoff displaced the Object registration interaction.
- **Character:** PR #2 still exposes 13 named flex zones as not deformation-tested; Art Direction/form review remains upstream of broad rig authoring.
- **Animal:** Rigging PR #2's alternate weighting remains numerically improved but visually unaccepted, while Geometry PR #4's connected forelimb candidate still needs its own exact deformation test before inheriting any disconnected-surface result. This remains the strongest next organic Rigging candidate once no newer manufactured interaction is pending.
- **Building:** current work is static panel fit/material/world hierarchy; no justified articulation lane was found.
- **Nature:** flex zones remain untested. VFX sway is visual-atmosphere evidence and is not silently reclassified as Rigging acceptance.
- **Weather / Map:** current dynamic work belongs to VFX / Environment / Runtime.
- **Object:** Hard-Surface PR #9 changed the physical attachment interface after Rigging PR #8's prior module-body certificate by adding a registration pin/recess datum. This is exactly the kind of new attachment interaction the prior Rigging status said should trigger a bounded recheck.

No parallel Rigging PR was opened. The existing Object Rigging PR #8 was extended, and Hard Surface remains the owner of registration geometry/semantics.

## Exact source, rig and registration identity

Repository: `mike-axiom-mir/axm-object-design`

Exact host/module source inherited from Hard-Surface PR #5:

- prerequisite head: `9a0524319cc3fe33bdbb2d76505b2c89a7a9f190`;
- host asset: `modular-equipment-case-001`;
- host source SHA-256: `49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`;
- module asset: `utility-module-001`;
- module source SHA-256: `ffd7b42294d3af71e02aa172157beccefa08c6af2c1198f88836862d2a50fc2e`;
- bilateral socket identities: `left-service-socket` / `right-service-socket`;
- exact socket normals: `[-1,0,0]` / `[+1,0,0]`;
- socket plate thickness: `0.012 m`.

Pinned donor rig identity:

- exact Rigging donor commit: `4b72c9918c5fc1e89bd18a0be24fb4afac6e7775`;
- donor plan path: `assets/modular-equipment-case-001/articulation.json`;
- articulation plan digest: `0ad6dc2ca22676cf301579932e599a441eb7c4bccce31991d1b727aeb22ac422`;
- joint: `rear-lid-hinge-001`;
- exact source hinge axis: `+X`;
- moving component: `lid_shell`;
- fixed component: `body_shell`;
- motion envelope: `0..110°`;
- representative poses: `0 / 30 / 60 / 90 / 110°`.

Exact Hard-Surface registration donor:

- Hard-Surface PR #9 head: `3f091bda68b33482bdefe1cf4adf97caf9c0c87e`;
- donor path: `assets/modular-equipment-case-001/utility-module-registration-key-001.json`;
- asset: `utility-module-registration-key-001`;
- schema: `axm.object-service-module-registration-key/v0.1`;
- exact donor source SHA-256 observed from the materialized file: `bb01fef7bfb22a0f9b290c376c1451a2524e068b618f684f605d746257a0e989`;
- local lateral/up registration coordinate: `[0.027, 0.014] m`;
- host pin radius: `0.0025 m`;
- host pin projection: `0.004 m`;
- module recess radius: `0.0030 m`;
- module recess depth: `0.006 m`.

Current Rigging lane:

- PR #8 — `Rigging: certify lid clearance with registered bilateral service modules`;
- branch: `studio/rigging-object-module-lid-clearance-001`;
- exact tested head: `a23ef68147fbea042aab341b62cb0afd77f3a8d1`;
- PR state after evidence verification: **OPEN / DRAFT / MERGEABLE**.

No host source, module source, registration source, hinge dimensions, socket descriptors, animation clip, UC code or runtime controller was rewritten.

## Bounded improvement — registration-key articulation clearance

The previous Object Rigging result proved that the exact fixed module **body boxes** stay `0.030 m` outside the lid-shell X extent for the complete articulation envelope. Hard-Surface PR #9 then introduced a smaller host-side registration pin inside the gap between lid and module body. That pin became the highest-risk newly occupied space.

The existing Rigging PR #8 now adds only Object-local evidence machinery:

- `assets/modular-equipment-case-001/registration-key-lid-clearance.json`;
- `tools/certify_registration_key_lid_clearance.py`;
- `tests/test_registration_key_lid_clearance.py`;
- `.github/workflows/object-rigging-registration-key-lid-clearance.yml`.

The new workflow does **not** copy the Hard-Surface registration source into Rigging. It materializes the exact file from commit `3f091bda...` and records that donor head in retained evidence.

The continuous proof uses the same narrow mechanical invariant as the existing lid certificate:

1. The exact rigid lid rotates around source `+X`.
2. Rotation around `+X` preserves every lid-shell vertex X coordinate at every permitted angle.
3. Therefore the lid-shell rectangular X interval remains exactly `[-0.39,+0.39] m` over the complete `0..110°` envelope.
4. Hard Surface's registration frame places the host pin base one exact `plate_thickness = 0.012 m` outward from each socket origin along the exact source-owned socket normal.
5. The exact registration source projects the pin another `0.004 m` outward along that same normal.
6. Resulting pin axial X intervals are:
   - left: `[-0.406,-0.402] m`;
   - right: `[+0.402,+0.406] m`.
7. The nearest pin face therefore stays `0.012 m` outside the lid X boundary on both sides.

The existing module-body bound remains `0.030 m`; the new registration pin is tighter and therefore becomes the combined registered-attachment lower bound.

**Continuous certified minimum lid-to-registered-attachment separation in the proved X axis: `0.012 m`.**

This is a meaningful tightening, not a cosmetic restatement: the new Hard-Surface datum reduces the previous attachment-body-only clearance from `0.030 m` to `0.012 m`, but does not eliminate positive separation.

## Representative poses and motion boundary

The exact retained certificate records the same unchanged donor-rig poses:

| Open angle | Lid X interval | Module-body minimum | Registration-pin minimum | Combined registered-attachment minimum | Result |
|---:|---:|---:|---:|---:|---|
| `0°` | `[-0.39,+0.39] m` | `0.030 m` | `0.012 m` | `0.012 m` | PASS |
| `30°` | `[-0.39,+0.39] m` | `0.030 m` | `0.012 m` | `0.012 m` | PASS |
| `60°` | `[-0.39,+0.39] m` | `0.030 m` | `0.012 m` | `0.012 m` | PASS |
| `90°` | `[-0.39,+0.39] m` | `0.030 m` | `0.012 m` | `0.012 m` | PASS |
| `110°` | `[-0.39,+0.39] m` | `0.030 m` | `0.012 m` | `0.012 m` | PASS |

These poses are representative checks. The continuous claim is not produced by interpolating those samples; it comes from the exact +X-axis invariance across the full declared motion envelope.

Fail-closed tests now include:

- wrong registration host-source identity;
- wrong pinned registration donor commit;
- non-positive pin projection;
- all earlier module-clearance controls, including changed rig envelope, non-X hinge and loss of positive module separation.

## Exact-head CI and retained evidence

Dedicated workflow:

- `35068615569 — Object rigging registration-key clearance evidence` — **SUCCESS**;
- exact tested head: `a23ef68147fbea042aab341b62cb0afd77f3a8d1`;
- Python 3.11: compile + full repository tests PASS, exact donor materialization PASS, certificate build PASS, retained artifact upload PASS;
- Python 3.13: compile + full repository tests PASS;
- Python 3.11 full suite: `21` tests PASS.

The exact Hard-Surface donor itself is independently green at `3f091bda...`:

- `35067757084 — Object service-module registration-key evidence` — SUCCESS;
- `35067757036 — Object service-module fit evidence` — SUCCESS;
- `35067757101 — Object hard-surface interface evidence` — SUCCESS.

Retained Rigging artifact:

- name: `modular-equipment-case-001-registered-attachment-clearance-evidence`;
- artifact ID: `10434982689`;
- size: `7,147` bytes;
- archive SHA-256 from Actions: `1038b8c91a3d1030a0887bd0c9a577de2ff75f45bafee65fbebdba149d7386e5`;
- independently downloaded/rehashed archive SHA-256: `1038b8c91a3d1030a0887bd0c9a577de2ff75f45bafee65fbebdba149d7386e5`;
- retained `exact-head.txt`: `a23ef68147fbea042aab341b62cb0afd77f3a8d1`;
- retained `registration-donor-head.txt`: `3f091bda68b33482bdefe1cf4adf97caf9c0c87e`;
- retained `rig-donor-head.txt`: `4b72c9918c5fc1e89bd18a0be24fb4afac6e7775`.

The archive contains the exact host/module sources, both Rigging constraints, exact donor articulation plan, exact donor registration source, donor-head markers, exact-head marker, and the generated certificate.

## What this proves

For the exact pinned source and donor identities:

- the existing joint identity and `0..110°` motion boundary remain unchanged;
- the prior fixed module-body clearance result remains `0.030 m`;
- the new exact registration host pins occupy X intervals `[-0.406,-0.402] m` and `[+0.402,+0.406] m`;
- both registration pins remain continuously outside the invariant lid X interval by `0.012 m`;
- the exact registered bilateral attachment therefore retains a positive continuous `0.012 m` lower bound in the proved axis;
- all five required representative poses reproduce that same bound;
- the proof remains source/rig/donor bound and fails closed when identity or the new pin dimensions are invalidated.

## Truth boundary / non-claims

This activation does **not** establish:

- registration recess-volume collision behavior;
- full-component collision freedom involving hinge knuckles, latches, socket plates, bolts, guards, cables, handles or future attachments;
- dynamic attach/detach behavior;
- attachment retention, fastener engagement, loads, fatigue, vibration, wear, sealing or manufacturing tolerance stack;
- collision-engine or physics-constraint behavior;
- skeletal export or a generic mechanical rig/constraint system;
- animation timing, easing, motion style, clip quality or Animation acceptance;
- target-engine/controller/state-machine playback;
- runtime physics, performance or Runtime acceptance;
- gameplay interaction or gameplay acceptance;
- shaded/perspective appearance, mechanical plausibility or Art Director / Visual Observer acceptance;
- UC / Profession Fabric promotion;
- CANON, production readiness or Rigging mastery.

The PASS is specifically for exact fixed module **body-box** and registration-pin **axial X extents** versus the rigid lid-shell rectangular X extent under one exact source-owned mechanical family.

## Root gate

- **Truth:** the new Hard-Surface source changed the physical occupancy, so the old `0.030 m` result was not silently reused. The tighter `0.012 m` bound is measured and retained against exact donor bytes; non-claims remain explicit.
- **Agency / non-domination:** Hard Surface retains ownership of the key geometry/registration semantics. Rigging only consumes that exact donor to answer the articulation-clearance question. Animation, Runtime, Technical Art, QA and Art Direction keep their own acceptance authority.
- **Continuity:** host/module/rig identity is unchanged; the new registration source is consumed by exact commit/path rather than copied; evidence records both donor heads and the exact Rigging head; Git history preserves the earlier status/result for rollback.
- **Wisdom before speed:** one exact new occupancy was checked with the smallest valid invariant-axis certificate. No generic collision solver, universal socket schema or UC abstraction was invented from a single manufactured family.

## Handoffs

- **Hard Surface / Object PR #9:** the new registration datum is articulation-compatible within this exact source-frame contract, but it reduces the attachment clearance lower bound from `0.030 m` to `0.012 m`. Any future pin, socket-origin, plate-thickness or normal change must rerun this Rigging certificate before inheriting the PASS.
- **Existing Object Rigging PR #3:** PR #8 still consumes the exact articulation plan by pinned commit/digest and does not supersede the original body/lid shell certificate.
- **Technical Art / UC Integration:** this is source-space structural evidence only. Dynamic target-host attachment, imported collision representation and engine transforms remain unproved.
- **3D Animation & Motion:** no clip, timing profile or playback behavior was authored or accepted. Any lid motion must remain inside the exact rig envelope and must not inherit runtime or visual acceptance from this result.
- **Runtime / Optimization:** no runtime physics body, collision shape, controller, state machine, frame budget or performance path was exercised.
- **Visual Observer / QA / Art Direction:** no appearance or perceptual plausibility claim is made from an analytic clearance certificate.
- **Capability Cartographer:** this remains one Object-local manufactured family. The new proof strengthens the distinction between source-owned interface geometry and Rigging-owned articulation coexistence evidence; it still does not justify centralizing a generic attachment/constraint system.
- **Animal:** connected forelimb Geometry PR #4 remains the next strong organic deformation handoff once there is no newer exact Object attachment interaction to recheck.

## Next Rigging & Deformation pass

1. Re-scan the constellation first; do not extend Object automatically.
2. If Object gains another physical attachment element inside the articulated envelope, test only that new occupancy against the exact rig before inheriting this PASS.
3. Otherwise prioritize the exact Animal Geometry PR #4 connected forelimb candidate for one bounded deformation probe; do not infer from the disconnected-topology weighting result.
4. Keep Character broad rigging held until its proportion/form and transition evidence is ready enough to justify deformation authoring.
5. Keep Nature physical/rigging acceptance separate from VFX-only sway evidence.
6. Do not promote a generic attachment-articulation capability until materially different domains reproduce the same executable need.
