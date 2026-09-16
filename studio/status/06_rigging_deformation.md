# 06 — Rigging & Deformation Specialist Status

Date: 2026-09-17
State: **PASS_BILATERAL_LOGICAL_QUAD_NORMAL_FIELD_DEFORMATION_DENSE_SWEEPS / DEFORMED-NORMAL STRUCTURAL OBSERVER PASS / TANGENTS + SHADED VISUAL + ANIMATION + RUNTIME HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/06_rigging_deformation.md`, newest specialist status, and the active design-repository dependency chain before selecting work.

`axm-create-me` remains **coordination only**. Product/evidence implementation is in `mike-axiom-mir/axm-animal-design`; this status file records scope, exact identities, evidence, holds, failures and handoffs only.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Constellation / duplication scan

The strongest fresh Rigging-owned handoff was the Animal normal-field deformation gap, not another weighting or articulation experiment.

- **Animal Geometry PR #16** now owns `axm.animal-bilateral-logical-quad-normal-field/v0.1`, a topology-diagonal-invariant explicit normal derivation over the exact Geometry #13 elbow topology. Geometry explicitly left deformed-normal behavior to Rigging.
- **Animal Materials PR #17** rendered that exact static field in pinned Godot and found that it materially reduces, but does not eliminate, the historical-vs-exact-mirror shading delta. Materials correctly left deformed shaded quality, tangents and production transport unaccepted.
- **Animal Rigging PR #15** remains the exact structural rig/topology authority for the bilateral elbow and already proves the established rig and weighting identities over the dense `-60..+60°` envelope.
- **Character** retains separate shoulder topology/intersection history; there was no fresher exact dependency that justified changing its weights or articulation this pass.
- **Object** already has mature lid/latch articulation and target-hierarchy Rigging lanes; no fresh unoccupied Object Rigging dependency outranked the explicit Animal handoff.
- **Nature / Weather / Map / Building / Weapon / Armor / Unit / Misc** did not expose a stronger current Rigging-owned prerequisite. Nature motion remains VFX/Runtime-owned where applicable.
- **Universal Creation / Profession Fabric** did not justify promotion or movement of Animal-specific rig or normal semantics.

No duplicate active Rigging lane was opened. The new work consumes the fresh Geometry/Materials handoff while preserving PR #15 as historical exact rig authority.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-animal-design`

Draft stacked PR:

**#18 — `Rigging: prove logical-quad normals across elbow deformation`**

Branch: `studio/rigging-bilateral-deformed-logical-quad-normals-001`

Base: Materials PR #17 exact head **`a2cd0a6135a7c8502aef9572f7079a3dd2632103`**

Exact current Rigging head: **`91e2fd01be63df807c035b39f7ec824a4a5a60b8`**

Observed PR state after evidence publication: **OPEN / DRAFT / MERGEABLE**. Repository metadata is evidence metadata only; it is not merge/CANON authority.

## Why this was highest leverage

The current Animal pipeline had reached a precise ownership boundary:

1. Geometry #13 repaired exact bilateral surface correspondence.
2. Rigging #15 proved the existing rig/weights remain structurally mirror-coherent on that topology.
3. Geometry #16 introduced an explicit logical-quad normal field specifically to avoid diagonal-dependent generated normals.
4. Materials #17 showed the static explicit field improves the target-host shading delta but does not establish deformed behavior.

The missing dependency was therefore not a new rig. It was whether the **existing exact normal derivation remains structurally coherent on the exact already-proven Rigging poses**. That question belongs to Rigging because it is about a derived field under deformation, while final shading preference remains with Materials / Visual QA / Art Direction.

The smallest truthful action was an observer: reuse the exact established rig and weights, pose the exact Geometry #13 surface, re-run Geometry #16's unchanged normal derivation on each posed surface, and measure bounded coherence. No source form, topology, joint, weight, pose, normal algorithm, material or animation was changed.

## Exact source / rig / normal identity preserved

Pinned identities:

- Geometry logical-quad normal head: `79e1667f6cc91e2ec8e41f01df18b6933c9c876d`;
- Materials static target-host review head: `a2cd0a6135a7c8502aef9572f7079a3dd2632103`;
- Geometry exact-mirror topology head: `bdbb51303bd1b96866b06a71730ccc328bf4f2f6`;
- historical exact-mirror Rigging head: `4acd9286140dd008f2a4f01ff513912497313e4f`;
- exact rig-plan + weighting-profile donor: `04760112deb81a8d145226fe7ee02923107c9916`;
- rig-plan digest: `b1f39ef8cd127edf9288b89ebd1f1fc14e6a3ceb8b0db58fa0ba9b12bc892aa8`;
- weighting-profile digest: `a23fdaf47bbf17b3b070faf66d408faaddaa68c4a0487ace8f484851b91482e4`;
- Geometry normal-module Git blob: `14a1ba3a1e4c96270197f4f449505113f7bf3e6e`;
- shared bilateral source-successor Rigging module Git blob: `f0cdcd7bf2452e73070efc872f53274a5ae3bcba`;
- historical exact-mirror Rigging module Git blob: `038f71f598ab51f47f023b6f33ec1bcc1bedaa7b`;
- baseline weighting: `smoothstep-v0`;
- refined weighting: `ease-out-power-0p75-v1`, exponent `0.75`;
- joints: `front-elbow-L` and `front-elbow-R`;
- influence radius: `0.11 m`;
- tested envelope: every integer degree from `-60°` through `+60°`.

The workflow proves the dependency heads are ancestors where appropriate and separately pins exact module blobs so same-name implementation drift cannot inherit this result.

A deliberate weighting mutation `0.75 -> 0.74` fails closed as **`HOLD_WEIGHTING_PROFILE_IDENTITY_DRIFT`**.

## Bounded observer method

For each exact side × weighting profile × integer pose:

1. use the existing Rigging solver to obtain the exact posed positions;
2. reconstruct only pose-local ring centres from those already-posed ring vertices;
3. call Geometry #16's unchanged `derive_logical_quad_normals()` on that posed surface;
4. require the structural pose itself to remain PASS;
5. require all normals to remain finite and unit-length within the exact proof tolerance;
6. require ring normals to retain positive outward radial orientation;
7. require the neutral `0°` re-derived field to match the exact static Geometry field within `1e-9`;
8. require adjacent one-degree sampled normal directions to retain positive dot product, preventing a sampled >=90° direction flip;
9. require exact left/right reflected posed positions and explicit normals to remain within the `1e-9` mirror proof tolerance.

This re-derivation is an **evidence observer**. It is not a production skin-normal transport implementation.

## Bounded proof result

Scoped state:

**`PASS_BILATERAL_LOGICAL_QUAD_NORMAL_FIELD_DEFORMATION_DENSE_SWEEPS`**

Directly exercised:

- 2 elbows;
- 2 exact weighting profiles;
- 121 integer-angle samples per side/profile;
- **484 posed normal fields total**;
- 42 normals per posed field;
- **20,328 directly checked deformed normal vectors**;
- representative retained OBJ + explicit `vn` specimens at `-60/-30/0/+30/+60°` for both sides and both weighting profiles.

The exact-head tests establish:

- all four dense structural pose families remain PASS;
- every posed explicit normal field remains finite/unit and outward-oriented under the observer gate;
- neutral re-derived normals match the exact static field within `1e-9`;
- the minimum adjacent one-degree sampled normal dot remains **strictly positive** for all four side/profile sweeps;
- left/right reflected posed positions remain within `1e-9`;
- left/right reflected explicit deformed normals remain within `1e-9`.

This is a finite discrete proof. It does not mathematically establish every real-valued intermediate angle.

## CI / exact-head evidence

Dedicated workflow:

**`35158115102 — Rigging bilateral deformed logical-quad normal evidence — SUCCESS`**

Exact head: `91e2fd01be63df807c035b39f7ec824a4a5a60b8`.

- Python 3.11: exact ancestry/blob checks PASS; exact historical Rigging donor checks PASS; compile PASS; full inherited Animal suite plus new deformed-normal tests PASS; retained evidence build PASS; artifact upload PASS.
- Python 3.13: exact ancestry/blob checks PASS; exact historical Rigging donor checks PASS; compile PASS; full inherited Animal suite plus new deformed-normal tests PASS.
- The exact weighting-identity negative control is part of the retained evidence and fails closed as intended.

No assertion, tolerance, rig rule, weighting rule, source geometry or normal derivation was weakened to obtain the green result.

## Retained artifact

- artifact ID: **`10472097432`**;
- name: `animal-rigging-bilateral-deformed-logical-quad-normals-91e2fd01be63df807c035b39f7ec824a4a5a60b8`;
- size: **`805,151 B`**;
- exact head: `91e2fd01be63df807c035b39f7ec824a4a5a60b8`;
- GitHub-retained SHA-256: **`9b4cd39dec2afd508cb6887ef25e9c5acb07db35661a2f8b0d11bfc6336b41ec`**.

This activation did **not** independently download/re-hash the archive, so the digest is reported as GitHub-retained metadata only.

The packet retains machine-readable identity/evidence, the exact rig plan and weighting profile, Geometry prerequisite record, fail-closed weighting control, and 20 representative OBJ specimens with explicit vertex normals.

## Handoffs recorded

- **Rigging PR #18:** evidence comment `5705510848` records exact head, workflow, 484-field / 20,328-normal result, artifact and non-claims.
- **Geometry PR #16:** comment `5705511852` records that its unchanged normal derivation remains structurally coherent on the sampled exact Rigging envelope while preserving Geometry ownership and holding tangents/production transport.
- **Materials PR #17:** comment `5705512686` explicitly states that this is not a shaded deformed-visual PASS and asks any future posed rendering to bind to PR #18's exact identities.
- **Animation PR #5:** comment `5705513572` records that Animation still must explicitly rebind its own clip/interpolation/playback evidence to Geometry #13 / Rigging #15; no playback or timing acceptance transfers from this observer.
- **Historical Rigging PR #15:** comment `5705514221` preserves PR #15 as the exact structural rig/topology authority and records PR #18 as a later observer, not a rewrite.

## Truth boundary / explicit non-claims

This activation proves only a **bounded finite-sampled structural deformed-normal observer** over the exact existing Animal elbow rig and exact Geometry logical-quad normal derivation.

It does **not** establish:

- production skin-normal transformation or export semantics;
- tangents, tangent-space basis or UV policy;
- mathematical continuous normal behavior for every real-valued angle;
- final shaded deformation quality or Art Direction / Visual QA acceptance;
- anatomy, muscle behavior, volume preservation, skin sliding or production skin quality;
- Animation timing, interpolation, clip, playback or motion acceptance;
- exported skeleton/skin or target-host animation channels;
- Runtime/controller, wall-clock playback, target-device memory/FPS/performance or gameplay acceptance;
- CANON or merge authority;
- production readiness, game readiness or Rigging mastery.

## Four-root gate

- **Truth:** the new PASS is bound to exact Geometry, Materials, Rigging, module-blob and profile identities; the evidence keeps finite-sample and observer limitations explicit rather than calling it production normal transport.
- **Agency / non-domination:** Geometry retains normal/topology ownership; Materials / Visual QA / Art Direction retain shading acceptance; Animation retains clip/playback authority; Technical Art / Runtime retain transport/controller/runtime authority.
- **Continuity:** Rigging PR #15 remains an unchanged exact rollback/evidence point; PR #18 is a later stacked observer. No historical PASS/HOLD is relabelled.
- **Wisdom before speed:** the existing rig, weights and Geometry normal policy were measured together before inventing another weighting profile, tangent policy or engine implementation.

## Prior Rigging lanes retained as historical truth

- Animal PR #15: `4acd9286140dd008f2a4f01ff513912497313e4f` — exact-mirror topology Rigging rebind; exact posed-vertex + retained structural surface-metric mirror PASS.
- Animal PR #12: `94bc573e2e06ba7a35c9908c141e2f939d4739a8` — bilateral source-successor dense sweeps; exact vertex mirror PASS / historical surface-metric HOLD.
- Animal PR #10: `b48bb957622ed5c82a24ca4fcb471f7ee9b5147a` — left source-successor elbow rebind.
- Character PR #12: `329c485f567faeeb79198c7b1ebc2974b3c3db60` — stitch-edge shoulder rebind.
- Character PR #10: `e5b129ba936f252946f48921be5a3096d8c2f801` — diagonal-repair shoulder rebind.
- Character PR #8: `ef73f87e0ebe4ce101b2fe25a92441ada7837b83` — opening-repair shoulder rebind.
- Character PR #6: `62a60ee6b930d13898203d37b0cc9dab6b13d99d` — angle-conditioned shoulder release profile.

## Next Rigging & Deformation pass

1. Re-scan the complete constellation; do not automatically continue Animal.
2. If Materials / Visual QA produces a **posed shaded** review and identifies a precise deformation-normal defect, alter only the smallest Rigging-owned variable supported by that evidence; do not take tangent/material ownership.
3. If Animation advances to Geometry #13 + Rigging #15, require an explicit exact-head clip/interpolation/target-host rebind before motion acceptance.
4. If Geometry changes the explicit normal derivation or topology identity, preserve PR #18 and rerun rather than transferring its PASS by equivalence.
5. Keep production skin-normal transport, tangent-space policy, final visual quality, Runtime/controller behavior, gameplay, CANON and mastery as independent gates.
