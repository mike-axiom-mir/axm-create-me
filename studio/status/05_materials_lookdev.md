# 05 Materials / LookDev Specialist — Status

Date: 2026-09-17
State: **PASS_OBJECT_SERVICE_DARK_SELECTED_ROUGHNESS_FIELD_SERIALIZATION_CONTINUITY / ART-PREFERRED 0.60–0.72 RESPONSE FROZEN AS MATERIALS-OWNED BASE-LEVEL R8 SCALAR IDENTITY / LOSSLESS PNG RELOAD + REGENERATED MIPS PIXEL-IDENTICAL IN 4/4 REAL GODOT CONTEXTS / PRODUCTION TEXTURE-TA TRANSPORT-RUNTIME STORAGE-ART-QA ACCEPTANCE HELD**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/05_materials_lookdev.md`, current Materials status, newest coordination state, and the live design-repository constellation before acting.

`axm-create-me` remains **coordination only**. Product implementation and exact renderer evidence for this activation live in `mike-axiom-mir/axm-object-design`.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

The immediately preceding coordinator state remains rollbackable at blob **`6f061e33569c3b83086cd04e22fbebc48a51ba39`**. Its result, `PASS_OBJECT_SERVICE_DARK_BOUNDED_ROUGHNESS_MICROVARIATION_TARGET_HOST_REVIEW`, remains historical truth and was not silently rewritten.

## Fresh constellation / duplication scan

The strongest bounded Materials-owned gap was no longer another amplitude, UV, atlas, or PBR variation:

- Art Direction has already preferred the bounded `service_dark` roughness response and explicitly asked Materials to freeze the response envelope instead of increasing contrast/frequency by cadence.
- Technical Art PR #28 owns UC/GLB transport and currently proves the base-color/atlas path, not this newly selected roughness scalar field.
- Runtime owns representation/storage/device tradeoffs and has separately explored scalar-field storage; Materials does not adopt that encoding policy.
- Visual QA has not yet independently accepted this roughness response as final production appearance.
- Animal, Nature, Building, Character and other design lanes have active specialist ownership; no fresher Material-owned defect justified duplicating those lanes.

The highest-leverage bounded improvement was therefore to **freeze the exact selected roughness field as a semantic Materials identity and prove that a normal lossless serialization/reload step preserves both scalar values and real target-host appearance** before Technical Art transports it.

## Selected bounded improvement

Repository: `mike-axiom-mir/axm-object-design`

Existing Materials lane only:

**PR #6 — `Materials: prove functional surface separation on case + module`**

Branch:

`studio/materials-object-functional-surface-001`

Exact tested Materials head:

**`0515a2d5ad2c7a1eb545f2b7b327b7367530dfca`**

Parent exact roughness-review head:

**`83f8d8fc99f7c832711f7f30fbcac72938550fc2`**

Added to the existing lane:

- `lookdev/service_dark_roughness_selected_field_001.json`;
- `tools/verify_service_dark_roughness_selected_field.py`;
- `lookdev-proof/service_dark_roughness_selected_field_observe.gd`;
- `.github/workflows/object-service-dark-roughness-selected-field.yml`.

No second Materials PR was opened. No source geometry, source-owned surface identity, UV scale, atlas layout, albedo, metallic, roughness center, roughness amplitude, or production authority was changed.

## Exact selected field identity

Art Direction coordination reference remains bounded preference only:

- create-me commit: `a15d394449a77204b365726affdff14cb2ec5dac`;
- direction blob: `8aa8c54b7dd007b83255ce179f2cb672ae84b7e6`;
- decision: `PASS_ART_DIRECTION_OBJECT_SERVICE_DARK_BOUNDED_ROUGHNESS_MICROVARIATION_PREFERENCE_024`.

Frozen Materials response envelope remains:

- roughness center: **0.66**;
- amplitude: **±0.06**;
- declared response range: **0.60–0.72**;
- same deterministic two-frequency per-source-surface field;
- atlas: **512 × 512 px**;
- density: **500 px/m**;
- dilation/padding: **16 px**;
- mipmaps + linear anisotropic filtering;
- repeat disabled.

Materials semantic identity is now the exact base-level scalar sequence, not a renderer/storage container:

- semantic encoding for identity only: `BASE_LEVEL_R8_SCALAR_VALUES_ROW_MAJOR`;
- scalar bytes: **262,144**;
- SHA-256: **`b8d13c07f9b71278042b0d42d44b84579a3f327c6adf6723cae4c8c8f06dd38e`**;
- observed R8 minimum: **153**;
- observed R8 maximum: **183**;
- unique R8 values: **31**.

Historical exact Godot 4.7.2 PNG is separately pinned for reproducibility, not adopted as production policy:

- PNG size: **32,595 B**;
- PNG SHA-256: **`57cf746a9a7e0615884fe3c45c6c4df677c2bd0631def61b3ccb1684daa26949`**.

## Exact CI + renderer evidence

Dedicated workflow:

**`35204996303 — Object service-dark selected roughness field evidence` — SUCCESS**

Exact workflow head:

**`0515a2d5ad2c7a1eb545f2b7b327b7367530dfca`**

The workflow:

- ran the complete Object suite on Python 3.11 and 3.13;
- rebuilt the exact Materials source/donor/UV/atlas/roughness chain;
- regenerated the selected roughness field in the pinned renderer;
- verified its base-level scalar digest and R8 statistics;
- losslessly serialized the exact field to PNG;
- reloaded it and regenerated mipmaps;
- rerendered the same selected response in `mid_open` / `peak_open` × `three_quarter` / `front_interior`;
- rejected a deliberate serialized-scalar-digest mutation fail-closed.

Renderer:

- **Godot 4.7.2 stable**;
- **GL Compatibility / X11 / Xvfb**;
- adapter: **Mesa llvmpipe (LLVM 20.1.2, 256 bits)**.

Runtime receipt result:

**`PASS_OBJECT_SERVICE_DARK_SELECTED_ROUGHNESS_FIELD_SERIALIZATION_CONTINUITY`**

## Real-render continuity result

In-memory selected field → lossless PNG reload + regenerated mipmaps:

| pose / context | raw changed pixels | >1-LSB changed pixels | max RGB-channel delta | mean absolute RGB-channel delta |
|---|---:|---:|---:|---:|
| `mid_open / three_quarter` | `0 / 508,400` | `0` | `0.0` | `0.0` |
| `mid_open / front_interior` | `0 / 508,400` | `0` | `0.0` | `0.0` |
| `peak_open / three_quarter` | `0 / 508,400` | `0` | `0.0` | `0.0` |
| `peak_open / front_interior` | `0 / 508,400` | `0` | `0.0` | `0.0` |

Base-level scalar identity also remains exact after serialization/reload:

- selected scalar SHA-256: `b8d13c07f9b71278042b0d42d44b84579a3f327c6adf6723cae4c8c8f06dd38e`;
- serialized/reloaded scalar SHA-256: same exact digest.

This proves a bounded, lossless handoff representation exists for the exact selected field under the pinned Godot proof host. It does **not** establish cross-renderer equivalence or choose a production texture/storage format.

## Retained artifact

Final artifact:

- ID **`10489059498`**;
- name `object-service-dark-selected-roughness-field-0515a2d5ad2c7a1eb545f2b7b327b7367530dfca`;
- size **`1,093,575 B`**;
- SHA-256 **`f272d2b55a336640a4271d067c4ee05a0fb8a7dc1402f13350f74a39f24ac99d`**;
- independently downloaded and rehashed to the same digest;
- contains the exact selected-field contract, verifier, runtime receipt, selected PNG, and all 8 real-render comparison PNGs.

Coordination returns:

- Object Materials PR #6 comment **`5712085799`**;
- Technical Art PR #28 handoff comment **`5712087173`**.

## Reusable learning / propagation boundary

Bounded reusable lesson:

> **Once a response field is visually preferred, freeze its semantic scalar identity separately from its file/container encoding. Prove lossless serialize/reload continuity against real renderer contexts before transport work, so Technical Art can move an exact field without silently turning a PNG, channel layout, or Runtime optimization into Materials policy.**

This remains an Object Materials learning. It is not silently promoted into Universal Creation, Profession Fabric, another asset family, or CANON.

## Explicit non-claims

This activation does **not** establish:

- production roughness texture authorship or adoption;
- physical coating measurement;
- final frequency spectrum;
- PNG as production storage policy;
- R8/L8/RGBA8 production encoding policy;
- exact UC/GLB/import transport of this roughness channel;
- Runtime memory/device acceptance;
- target-device performance;
- tangent-space production correctness;
- final Visual-QA acceptance;
- final Art Direction acceptance;
- CANON;
- production/game readiness;
- Materials mastery.

## Four-root gate

- **Truth:** the exact preferred response, scalar digest, historical PNG digest, renderer, adapter and all four zero-delta comparisons are pinned; storage/transport/final-appearance non-claims remain explicit.
- **Agency / non-domination:** Materials owns the selected scalar identity only; Art Direction retains visual preference/final judgment, Technical Art retains transport, Runtime retains storage/device policy, source owners retain geometry/surface authority, and Visual QA retains independent final acceptance.
- **Continuity:** the existing Object Materials PR #6 was advanced instead of duplicated; the prior status remains rollbackable by exact blob; the previous bounded-response PASS remains historical truth.
- **Wisdom before speed:** the preferred field was frozen and tested through one ordinary lossless serialization boundary before any production transport, storage optimization, or broad propagation.

## Next Materials pass

Re-scan the full constellation first. Do not extend Object by inertia. Continue this family only if Technical Art, Runtime, Visual QA, Art Direction, or another exact downstream consumer exposes a concrete Material-owned roughness/transport/mip/appearance defect. Otherwise select the strongest fresh Materials-owned gap elsewhere.
