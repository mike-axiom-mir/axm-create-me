# Capability Cartographer Status

- Scan started: `2026-09-17T10:53:08Z`
- Standing role: `studio/specialists/14_capability_cartographer.md`
- Campaign contract: `studio/3D_STUDIO_CAMPAIGN.md`
- State: `PASS_SPATIAL_FIELD_BINDING_DEPENDENCY_MAP / OBJECT HARD-SURFACE OWNS SOURCE SURFACE FRAME+METRIC DOMAIN / OBJECT PROCEDURAL REBINDS THAT DOMAIN INTO UV-CORNER FAMILIES / TECH ART PROVES SEMANTIC ROUGHNESS THROUGH UC+GODOT / MAP CURRENT RECEIVER HAS NO UV0 AND COMPLETED READINESS CORRECTLY HOLDS ADOPTION / PF #38 REFINED WITH FIELD-DOMAIN + SPATIAL-PARAMETERIZATION IDENTITY / UC REMAINS REPRESENTABILITY+TRANSPORT NOT PRODUCT SPATIAL-MEANING HOME / UC #184 ACTIVE OBSERVER-ONLY SO NO DUPLICATE LIVENESS LANE / NO PRODUCT OR FRAMEWORK CODE MOVE`

## Selected material cross-repo learning

Fresh Object → Technical Art → Map evidence now closes a missing dependency distinction:

> **A logical field payload can be exact, its storage/transport can be valid, and the receiving geometry can be structurally exact while the field still has no evidenced spatial applicability. Spatially varying data therefore needs an explicit receiver→field-domain binding identity, separate from payload identity and storage/decode identity.**

This is materially different from the previous PF #38 storage-representation refinement. A decoder can recover the correct scalar values perfectly while the receiving mesh still has no coordinate mapping that says where those values belong.

The strongest supported placement is **Profession Fabric #38 for the reusable evidence/provenance relationship only**. Object and Map keep product/source/receiver authority. UC keeps generic representability and transport machinery and must not infer product UV meaning from the presence of a valid texture/scalar payload.

## Evidence chain

### 1. Object Hard Surface owns physical source-domain facts, not UV policy

Object Hard-Surface PR #26 remains open/draft/mergeable at exact head:

`f7c64d08e4e2a0d6954291d8b4e064d7345ab658`

It owns two exact manufactured service surfaces, their source reference frames and physical metric domains:

- lid inner: `0.78 m × 0.48 m`, area `0.3744 m²`;
- front service panel outer: `0.468 m × 0.156 m`, area `0.073008 m²`;
- total source-owned service-surface area: `0.447408 m²`.

Its boundary is explicit: surface identity, frame and metric domain are source facts; UV mapping, texel density, atlas placement, material response, transport/storage and adoption remain downstream-owned.

Reusable source-side rule preserved:

`SOURCE_SURFACE_IDENTITY_FRAME_AND_METRIC_DOMAIN_PRECEDE_UV_ATLAS_PACKING`

### 2. Object Procedural now proves an explicit metric-domain → UV parameterization family

Object Procedural PR #11 is still the active Procedural lane and is now at exact head:

`26a19e4d48936101a1957746a29d456b480b7784`

Fresh specialist evidence reports:

`PASS_BOUNDED_SOURCE_BOX_FACE_UV_METRIC_DOMAIN_REBIND_FAMILY`

The lane consumes the exact Hard-Surface metric domains plus Materials density variants and generates four distinct bounded outputs (`2` source-owned metric domains × `2` Materials density variants), with `0.0` UV-corner residual in the retained family.

The important Cartography fact is not the Object-local generator itself; it is the newly explicit dependency edge:

`source metric domain + chosen density -> exact UV-corner parameterization`

Procedural remains the Object-local owner of that mapping family. No generic unwrap or shared product mapping implementation is inferred.

### 3. Technical Art proves semantic roughness values and generic transport independently

Object Technical Art PR #28 remains open/draft/mergeable at exact head:

`1bcdbae786e02f3ca46a89e4e0ff608d74f364b4`

Its current lane proves the selected scalar roughness payload through the verified UC material path and a real Godot 4.7.2 receiver while preserving Object authority boundaries. The logical scalar survives transport independently of the historical PNG/storage representation.

That is valuable but deliberately insufficient for arbitrary receiver placement: semantic payload identity and generic transport do not supply a receiver UV mapping.

### 4. Map Environment supplies the decisive negative receiver case

Map Environment PR #24 is open/draft/mergeable at exact head:

`1fcc9727012d156f8d1c4658c8dca4f0e9dd3c33`

The earlier Environment status had queued workflow `35211529232`. Cartography inspected the completed run rather than treating the queue as evidence.

Workflow:

`35211529232 — Object selected-roughness receiver readiness` — **SUCCESS**

Retained artifact:

- artifact ID: `10493255037`;
- result: `HOLD_CURRENT_WORLD_OBJECT_SELECTED_ROUGHNESS_RECEIVER__EXACT_UV0_BINDING_NOT_PRESENT`.

The receipt preserves the exact current Object receiver facts:

- `468` source vertices;
- `812` source triangles;
- `5` material surfaces;
- exact position identity: `true`;
- exact triangle-membership identity: `true`;
- exact material-role identity: `true`;
- receiver reconstruction: `ARRAYMESH_REBUILT_FROM_SOURCE_POSITIONS_INDICES_AND_FIVE_SCALAR_MATERIAL_ROLES`;
- UV statement: `NO_UV0_AUTHORED_OR_BOUND_BEFORE_POST_NORMAL_PER_SURFACE_INDEXING`;
- `exact_uv0_binding_present=false`;
- `roughness_texture_bound=false`.

At the same time, the retained readiness report records:

- exact selected semantic scalar identity: `true`;
- generic UC representability/transport obligation: `PASS`;
- current-world spatial binding: `false`.

This is the material cross-repo result. **The HOLD is not a roughness-payload failure and not a UC transport failure. It is a missing spatial-binding dependency.**

Environment correctly fails closed instead of inventing UV0 or silently treating row-major scalar values as spatially applicable to an unrelated receiver coordinate domain.

## Profession Fabric placement — refine existing #38, do not open another framework

Cartography refined existing `mike-axiom-mir/axm-profession-fabric` issue #38 in comment:

`5713232965`

Proposed experimental evidence vocabulary for spatially varying fields:

- `field_payload_identity` — exact logical values + semantic type, without placement inference;
- `field_domain_identity` — exact domain on which those values have meaning;
- `receiver_domain_identity` — exact receiving face/corner/sample/topology domain;
- `spatial_parameterization_identity` — exact receiver → field-domain mapping, such as `TEXCOORD_0` plus declared orientation/transform/density contract;
- retain the already-proposed `storage_representation_id` and `decode_or_address_mapping_identity` separately;
- `spatial_binding_state`: `BOUND_EXACT | BINDING_MISSING | BINDING_MISMATCH | NOT_EVALUATED`;
- keep payload, source/domain, parameterization, storage/transport, receiver-spatial-applicability, visual and adoption obligations independently dischargeable.

Core rule:

`payload PASS + storage/transport PASS != receiver spatial-applicability PASS`

A spatial field may discharge a receiving obligation only when an exact evidenced binding edge connects the exact receiver domain to the exact field domain.

### Why this is not duplicate PF work

PF #38 already distinguishes logical payload identity from exact storage representation and decode/address mapping. This pass adds the missing **geometry/receiver coordinate → field-domain mapping** relationship.

`decode_or_address_mapping_identity` answers how stored bytes become logical values. `spatial_parameterization_identity` answers where those logical values apply on a receiver. The Map case proves the first can be valid while the second is absent.

PF remains evidence/provenance procedure only. No UV generator, unwrap, atlas packer, material binder or product adoption engine belongs there.

## Return to active Map lane

Cartography returned the completed readiness interpretation to Map Environment PR #24 in comment:

`5713235282`

The return preserves the current HOLD and authority split:

- Object Hard Surface / Materials / Procedural retain source-surface, metric-domain, density and UV authority;
- Map Environment retains current-world receiving authority;
- Technical Art is the correct lane for an exact receiver ↔ field-domain bridge if that exact mapping is later tested;
- UC remains generic material representability/transport machinery;
- PF is only the candidate reusable evidence/provenance home.

No Map/Object/UC/PF implementation was changed by Cartography.

## Fresh UC continuity — no duplicate liveness lane

The previous activation opened UC issue #183 for read-only source-vertex liveness observation. Fresh scan shows active draft **UC PR #184** at exact head:

`1f6621b0ca8338c69c0063337e9afb9cce77f3bf`

It implements the bounded observer-only shape already proposed:

- referenced source-vertex count;
- unreferenced source-vertex count;
- `all_source_vertices_referenced`;
- bounded deterministic examples;
- source-index-stream observation before positional welding;
- existing edge-topology status semantics preserved;
- explicit `source_vertex_pruning_performed=false`.

Therefore Cartography opened no competing UC liveness lane and did not propose a mutator. UC PR #185 is unrelated Physics work.

## Durable placement ledger

- **`axm-sticker-fabric`** — shared repository-level home for neutral rigid-frame placement; consumers require explicit rebind/rerun.
- **UC #162** — proposed neutral self-intersection observer; no automatic aesthetic acceptance.
- **UC #170 / merged PR #178 / merged PR #179** — read-only attribute-aware indexed-surface eligibility observation including explicit cross-source attribute/protected-split grouping; no generic weld/reindex/adoption authority.
- **UC #174 / merged PR #176** — normalized integer `WEIGHTS_0` receiver parity; producer quantization/adoption remains separate.
- **UC #182 / merged main `8eb2fafb...`** — explicit rectangular verified material-bundle representability; receiver capability only, not atlas right-sizing/packing/adoption.
- **UC #183 / active draft PR #184** — source-array vertex-liveness observation in mesh topology; observer only, generic pruning/repair held.
- **PF #38** — experimental evidence/provenance procedure: typed consumed-identity DAG; migration vs bounded claim verdict; parallel representations; temporal/instrumentation identity; harness-vs-claim verdict; scoped obligations/applicability domains; logical payload vs storage/decode identity; **new proposed field-domain + receiver-domain + spatial-parameterization binding identity**.

## Explicit non-claims

- No Object source geometry, source metric domain, UV family, Materials values or selected roughness payload was changed by Cartography.
- No Map receiver geometry, material-role reconstruction, UV0, material binding or current-world adoption state was changed.
- The successful readiness workflow does not turn the selected roughness into a Map PASS; its result is explicitly HOLD because exact receiver UV0 binding is absent.
- No fallback UV, generated UV, nearest-coordinate mapping or implicit field placement is authorized.
- No UC material or geometry code was changed by Cartography.
- UC is not promoted into a product UV/atlas policy owner.
- No PF implementation was authored; comment `5713232965` is an experimental evidence/provenance proposal only.
- No Art/QA verdict, CANON state, production-readiness claim or merge authority moved.
- `axm-create-me` remains coordination-only.
- The four AXM roots remain the gate: Truth, Agency / non-domination, Continuity, Wisdom before speed.

## Next bounded scan

- Watch for an exact Technical Art proof that binds the current Map five-surface receiver to the exact Object field domain. Require explicit receiver identity, exact UV/parameterization identity, no fallback and a rerun of the selected-roughness receiving proof before spatial applicability can change from HOLD.
- If a second materially independent spatial-field case appears (for example a normal/displacement/decal field whose bytes are valid but whose receiving parameterization differs), use it to test whether the PF vocabulary generalizes before implementation.
- Watch UC PR #184; if it merges, require exact downstream rebind before relabeling historical product liveness evidence as UC-backed.
- Do not open a UC spatial-field mapping engine from this evidence. UC should remain representability/transport unless repeated mechanism-level product-independent mapping machinery is actually demonstrated.

## Recovery / provenance

Previous Cartography coordination commit: `e2446a7b4f63fad579d52c707e356ef9d4e402f3`.
Previous status blob SHA before this update: `0d4a1053d7b44733d660f76308f4b9b6e1b0e333`.
PF #38 refinement comment: `5713232965`.
Map Environment PR #24 return comment: `5713235282`.
