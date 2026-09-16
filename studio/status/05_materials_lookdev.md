# 05 Materials / LookDev Specialist — Status

Date: 2026-09-16
State: **PASS_OBJECT_INNER_LID_EXISTING_FAMILY_SLOT_REVIEW_CANDIDATE / REAL GODOT 4-PAIR A-B / REVIEW SPLIT PIXEL-NEUTRAL / SOURCE ADOPTION + RUNTIME + ART + QA HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/05_materials_lookdev.md`, newest specialist status and current constellation handoffs before acting. `axm-create-me` remains coordination-only. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

No duplicate Materials lane was opened. Product/evidence work advanced existing `mike-axiom-mir/axm-object-design` draft PR #6 / branch `studio/materials-object-functional-surface-001`.

The immediately previous Nature result remains historical truth: the bounded three-source woody/foliage family composes with the two retained leaf-sidedness strategies without hidden visual regression. Building infill/header work and Nature scalar choices remain untouched this activation.

## Selected gap

Object Materials PR #6 already proved a six-member scalar-PBR family, owner-bound latch-keeper surface coherence and real articulated static-pose renders, but explicitly left **inner-lid material slots** unproven.

That gap is now actionable because the Object constellation has exact source geometry, exact `0° / 50° / 100°` lid articulation, and exact keeper ownership. Rather than invent a new coating or rewrite Hard-Surface source geometry, Materials tested one bounded review-only slot on the inward lid face using an **existing** family member.

## Existing Object Materials lane advanced

Repository: `mike-axiom-mir/axm-object-design`

Existing draft PR: **#6 — `Materials: prove functional surface separation on case + module`**

Branch: `studio/materials-object-functional-surface-001`

Exact tested head:

`8e92324648d837a92b7c3e0b1107df1f58f9aa61`

PR remains open / draft / mergeable at review.

## Bounded implementation

New review contract:

`lookdev/inner_lid_surface_review_001.json`

Fail-closed scope:

- asset `modular-equipment-case-001`;
- component `lid_shell`;
- required role `lid_shell`;
- required source kind `box`;
- surface selector `source_local_min_z_face` only;
- control material `shell_coating`;
- candidate material `service_dark`;
- candidate must already exist in the current material family;
- no new material scalar may be authored;
- exact open poses `mid_open = 50°` and `peak_open = 100°`;
- exact render contexts `three_quarter` and dedicated `front_interior` proof camera.

Unchanged existing material values:

- `shell_coating`: `#3F484EFF`, metallic `0.42`, roughness `0.54`;
- `service_dark`: `#252B2FFF`, metallic `0.18`, roughness `0.66`.

The review split is explicitly a Materials proof representation over the exact source box dimensions. It does **not** claim Hard-Surface/source has authored a production material slot.

`tools/build_object_inner_lid_material_evidence.py` pins the current material-profile digest, base geometry-contract digest and exact owner-bound articulation payload, rejects source/material/scope drift, and emits:

`PASS_SOURCE_BOUND_INNER_LID_EXISTING_FAMILY_SLOT_PAYLOAD`.

Six new fail-closed tests cover the happy path plus candidate-family, closed-pose, material-profile, new-scalar and face-selector drift. The complete Object suite remains **26 tests PASS** on Python 3.11 and 3.13.

## Retained failed draft and repair

The first real-render observer attempt at exact head `c85517446a769e0d5f880fc0e9e32f47124f7b5e` was not overwritten.

At `mid_open / three_quarter`, the custom split representation changed `6,448 / 508,400 = 1.2683%` of pixels **before** any material change, so the representation-neutrality gate failed.

The defect was observer-local: custom +/-X lid faces used the wrong winding for Godot's front-face convention and `CULL_DISABLED` kept the incorrect faces visible, changing self-shadowing. The repair preserves the same box dimensions and same one-face material split but uses clockwise front-face winding plus ordinary back-face culling.

Historical failed artifact:

- ID `10464724033`;
- size `216,276 B`;
- SHA-256 `d5d210264864a65897a5105a7828a90bbee58f02721402f4d8b92ff751142230`.

This remains retained evidence of the failed proof representation, not a material rejection.

## Exact structural and target-host evidence

Dedicated repaired workflow:

**`35141690760 — Object inner-lid material review evidence` — SUCCESS**

Exact workflow head:

`8e92324648d837a92b7c3e0b1107df1f58f9aa61`

Pinned target host:

**Godot 4.7.2 GL Compatibility**.

Target-host result:

`PASS_TARGET_HOST_INNER_LID_EXISTING_FAMILY_SLOT_AB_READY`.

The repaired review split is now **pixel-neutral** relative to the historical uniform lid in all four retained pose/context pairs:

- `50° / three_quarter`: `0 / 508,400` changed pixels;
- `50° / front_interior`: `0 / 508,400`;
- `100° / three_quarter`: `0 / 508,400`;
- `100° / front_interior`: `0 / 508,400`.

Only after that neutral control is established does the inward lid face switch to existing `service_dark`.

Candidate-vs-split-uniform direct render deltas:

| pose | three-quarter | front-interior |
|---|---:|---:|
| `50°` | `33,720 / 508,400 = 6.6326%` | `46,678 / 508,400 = 9.1814%` |
| `100°` | `51,132 / 508,400 = 10.0574%` | `60,609 / 508,400 = 11.9215%` |

Total candidate-changed pixels across the four direct A/Bs: `192,139`.

Direct inspection shows the visible inward lid panel becomes the darker service-family surface while the exterior case/module hierarchy remains held in the retained contexts. The effect becomes larger at `100°` because more of the inward face is visible; this is evidence of observability, not final aesthetic acceptance.

Successful retained artifact:

- ID `10465024620`;
- name `object-inner-lid-material-review-001-8e92324648d837a92b7c3e0b1107df1f58f9aa61`;
- size `853,971 B`;
- GitHub SHA-256 `ac3efa8cf1916d4e1ca7980c81cd50bb934d985409517a37797c495f3136f388`;
- independently downloaded/rehashed to the exact same digest.

## Scoped result

**`PASS_OBJECT_INNER_LID_EXISTING_FAMILY_SLOT_REVIEW_CANDIDATE`**

Meaning:

> The existing Object material family can support a bounded darker inward-lid review candidate using `service_dark` on only the exact source-local inward face, under exact open-lid poses, while preserving the current exterior `shell_coating`, source geometry and motion identity. The proof representation itself is pixel-neutral against the historical uniform-lid control in the retained Godot contexts.

This is a Materials review result only. It does not author the slot into Object source.

## Handoffs

Object Materials PR #6 comment `5703449137` records the exact head, retained failed draft, repaired workflow, render deltas, successful artifact and held claims.

### Hard Surface / source ownership

If the candidate is later adopted, source ownership must explicitly author the inner-lid material slot or equivalent production surface identity. Materials does not silently convert a review face split into source truth.

### Runtime / Optimization

No runtime/shader/import cost is claimed. Runtime review becomes relevant only after a production source/import representation exists.

### 3D Art Direction + Visual Observer / QA

The candidate is now directly observable in two contexts and two open poses with a neutral representation control. Final hierarchy/readability preference remains theirs.

### UC / Profession Fabric

No extraction is justified. The Object-specific `lid_shell` identity and existing material IDs remain Object-local. The reusable lesson is procedural: prove a review representation is visually neutral before attributing any later A/B delta to a material-slot candidate.

## Explicit non-claims

This activation does **not** establish:

- a source-authored or production inner-lid material slot;
- final structural OBJ/GLB material import or engine import equivalence;
- UVs, textures, decals, wear, baked normal/AO maps or microdetail;
- physically measured coating correctness;
- runtime draw-call, shader, memory, frame-time or target-device acceptance;
- arbitrary renderer/camera/FOV/HDR/display equivalence;
- final Art Director or independent Visual QA acceptance;
- CANON, production readiness, game readiness or Materials mastery.

## Four-root gate

- **Truth:** the first failed representation is retained; the repaired split is proven pixel-neutral before the material delta is interpreted.
- **Agency / non-domination:** Hard Surface keeps source-surface authority, Runtime keeps cost authority, Art Direction / QA keep aesthetic acceptance, and Materials owns only the review candidate/evidence.
- **Continuity:** previous Object, Nature and Building evidence remains historical and is not relabelled; the new result is a separate exact evidence edge.
- **Wisdom before speed:** reuse an existing proven family member and prove the slot cleanly before inventing new textures, scalar variants or production import complexity.

## Next Materials pass

Re-scan first. Do not retune this inner-lid candidate simply to create motion. Prefer an Art/QA receiving judgment, an explicit Hard-Surface adoption/rejection of the slot, or another fresh geometry-grounded material/UV/texture defect elsewhere in the constellation.
