# AXM 3D Studio — Art Direction 039

Date: 2026-09-18

State: **PASS_ART_DIRECTION_OBJECT_TA_PARITY_CORRECTED_RIGID_SHELL_RETAINED_MATERIAL_CULL_REFERENCE_039 / DIRECTION_037_RENDERED_CULL_HOLD_CLOSED_FOR_EXACT_TA_PATH / FREEZE_CORRECTED_TRANSPORT_AS_VISUAL_REFERENCE__RETAIN_UNADAPTED_NEGATIVE / HOLD_FINAL_OBJECT_RIGID_SHELL_ADOPTION__RUNTIME_TARGET_DEVICE_PRODUCTION_SURFACE_SOURCE_ADOPTION_PENDING / COORDINATION_ONLY**

## Why this is the current Art gate

Direction 037 exposed a whole-object visual correctness failure: the Geometry owner-order candidate, when observed through a direct receiver without the real transport convention, lost large manufactured shell regions under ordinary backface culling. Art therefore held production adoption and explicitly returned the missing question to the existing Object Technical Art lane rather than mutating source geometry or choosing a universal winding rule.

That dependency chain has now returned complete exact-path evidence:

1. Hard Surface names source-owned exterior intent independently of stored winding.
2. Geometry preserves its coherent orientation candidate and binds it to that source exterior intent.
3. Technical Art proves the actual Object -> current UC/glTF coordinate map changes handedness (`determinant = -1`) and applies one exact parity correction at that transport boundary.
4. Materials renders the exact corrected and unadapted Technical-Art GLBs under the unchanged Object scalar-PBR family and ordinary backface culling.
5. Independent Visual Observer / QA reproduces the corrected-path coherence and the unadapted-path failure across all three retained contexts.

This closes the exact rendered/culling question Direction 037 asked. It does not authorize source adoption, a universal front-face convention, final Object surface quality, target-device acceptance or production readiness.

`axm-create-me` remains coordination-only. No Object, UC, Materials, Geometry, Hard Surface, Technical Art, Runtime or renderer product implementation is placed here.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Exact evidence inspected

Repository: `mike-axiom-mir/axm-object-design`

Materials PR #6: `Materials: prove functional surface separation on case + module`

Exact Materials head:

`2f92ff49e1099068a8e21b358b9abdede5e0f971`

Exact Technical Art donor:

`7fa10bff981e49c9ea3396b83c4c6d731a90d146`

Exact upstream identities retained:

- Object source SHA-256: `49b1f9ed9865893d6de6f1ec8f069576732df694853fde4e3fcff366de32644a`;
- Geometry orientation candidate lineage: `606d8189a3bf4502141d8038f08d35d421829dde`;
- Hard-Surface exterior-intent donor: `77a4058b305fab7fd04dab94781b9460f089727e`;
- current UC donor used by Technical Art: `7be1a28c43a88c7e40f7d0c039aefd753d5e70d9`;
- existing Object material-profile SHA-256: `dc200229d6c25fa84063aa51f66103abc022efa54b2167e4432a5b47fc40360c`.

Exact current-UC GLBs:

- parity-corrected: `c3326180d7626b224e16d372c2ff5f6fe47a6c9d13241d8225cea7629e58bd83`;
- unadapted negative: `708926421688fbc9cc727aadb21023b4e543b174ac1434fd5387d732c2d498a2`.

Materials workflow:

`35286641818 — Object material rigid-shell transport lookdev` — **SUCCESS**.

Retained artifact:

- ID `10524537275`;
- size `269,596 B`;
- GitHub SHA-256 `d11527607ef3bb725d27431b3f0272158832d0df61d244c83f1921002d208629`;
- Art independently downloaded the archive and reproduced the same `269,596 B` size and SHA-256 during this activation.

The retained packet contains 18 Godot PNGs plus exact receipts / GLBs. Art directly inspected all three material contexts and rebuilt the relevant integer PNG comparisons independently.

## Direct Art observations

Retained review contexts:

- `front_service`;
- `three_quarter`;
- `rear_hinge`.

Each rendered variant retains 31 mesh nodes / 31 material surfaces / 812 triangles. Material scalars are unchanged. No UV or texture change participates in this gate.

### 1. Corrected vs unadapted two-sided unshaded spatial control

The parity-corrected and unadapted GLBs are **pixel-identical in all three two-sided unshaded contexts**:

- `front_service`: 0 changed pixels;
- `three_quarter`: 0 changed pixels;
- `rear_hinge`: 0 changed pixels.

This is the key attribution control: projected geometry / camera framing is held while front-face orientation differs.

### 2. Parity-corrected path under ordinary backface culling

Art independently compared each parity-corrected ordinary-cull render against the same corrected GLB rendered two-sided with the same lit material family.

Pixels above 1 LSB:

- `front_service`: **0**;
- `three_quarter`: **1**;
- `rear_hinge`: **1**;
- aggregate: **2**.

Direct native and enlarged inspection shows the manufactured shell remains visually closed and coherent in all three contexts. The two nonzero samples are isolated single-pixel edge/raster residuals and do not form a coherent missing face, hollow region, detached component or silhouette break.

This is sufficient for the bounded Art claim:

**the exact Technical-Art parity-corrected current-UC transport preserves the intended closed manufactured-shell read under the current Object material family and ordinary backface culling in the three retained review contexts.**

### 3. Unadapted negative under ordinary backface culling

Art independently compared the unadapted ordinary-cull render against its own two-sided lit reference.

Pixels above 1 LSB:

- `front_service`: **119,850**;
- `three_quarter`: **85,440**;
- `rear_hinge`: **56,526**;
- aggregate: **261,816**.

Maximum RGB channel deltas reach 225 / 242 / 248 LSB respectively.

Direct inspection shows the same qualitative failure Direction 037 was protecting against: large manufactured surfaces disappear, exposing a hollow/broken shell read. This is not a subtle shading preference.

The unadapted negative therefore remains retained and valuable. It is not deleted once the corrected path passes.

## Independent QA agreement

Visual Observer / QA separately reviewed the exact same artifact and exact donor identities and reports:

- `PASS_OBJECT_TA_PARITY_CORRECTED_TRANSPORT_ORDINARY_CULL_VISUAL_COHERENCE__THREE_RETAINED_CONTEXTS`;
- `PASS_OBJECT_TA_TRANSPORT_UNSHADED_SPATIAL_IDENTITY__THREE_RETAINED_CONTEXTS`;
- `FAIL_OBJECT_TA_UNADAPTED_TRANSPORT_ORDINARY_CULL_VISUAL_COHERENCE__THREE_RETAINED_CONTEXTS`.

QA also keeps final Object rigid-shell adoption blocked on Art / Runtime / target-device / production-surface boundaries. Direction 039 answers only the Art portion of that exact returned gate.

## Direction 039 contract

Selected visual direction:

**`PASS_ART_DIRECTION_OBJECT_TA_PARITY_CORRECTED_RIGID_SHELL_RETAINED_MATERIAL_CULL_REFERENCE_039`**

Direction-037 continuity result:

**`DIRECTION_037_RENDERED_CULL_HOLD_CLOSED_FOR_EXACT_TA_PATH`**

Reference policy:

**`FREEZE_CORRECTED_TRANSPORT_AS_VISUAL_REFERENCE__RETAIN_UNADAPTED_NEGATIVE`**

Final adoption state:

**`HOLD_FINAL_OBJECT_RIGID_SHELL_ADOPTION__RUNTIME_TARGET_DEVICE_PRODUCTION_SURFACE_SOURCE_ADOPTION_PENDING`**

### Preserve

- exact source / Hard-Surface / Geometry provenance;
- exact Technical-Art determinant-`-1` transport evidence;
- exact corrected current-UC GLB identity above;
- exact unadapted negative as the discriminating failure control;
- the unchanged Object material profile for this gate;
- ordinary backface culling as the actual review condition;
- the three retained review contexts;
- QA's independent exact-path verdicts.

### Do not

- rewrite the Object source merely to make a receiver pass;
- infer a universal clockwise / counter-clockwise / Godot / glTF front-face rule from this one exact transport;
- disable culling globally or make all surfaces two-sided as a workaround;
- retune albedo / metallic / roughness to hide missing surfaces;
- transfer this parity operation to Character, Animal, Building, Nature or another asset by analogy;
- call the current scalar-PBR proof family final production surface art;
- call retained-context coherence target-device acceptance;
- claim Geometry source adoption, CANON, production readiness or mastery.

## Next exact handoffs

### Materials / Object PR #6

Freeze exact Materials head `2f92ff49...` and its current scalar-PBR family as the retained visual reference for this transport/culling question. No material-value retune is requested to solve winding/front-face behavior.

Materials may continue separate surface-quality work, but future production-surface changes must preserve this closed-shell ordinary-cull behavior rather than masking it through two-sided rendering.

### Technical Art / Object PR #16

The exact parity-corrected path at `7fa10bff...` is now the Art-preferred current-UC receiving reference for this Object shell. Preserve the unadapted negative. Do not generalize the exact Object transport repair into a universal renderer rule without independent cross-asset evidence.

### Runtime / target-device owner

The next bounded receiving question is **target-device preservation of the exact corrected visual reference**, not another source or material mutation.

Consume the exact corrected GLB / current material reference under ordinary culling, retain the same three review contexts where practical, and report:

- whether any coherent shell region disappears or changes culling behavior;
- device/runtime rendering path and cull/front-face state actually used;
- target-device CPU/GPU/FPS/VRAM/thermal metrics only where the device harness can measure them honestly;
- any representation optimization separately from visual acceptance.

Art does not prescribe which Runtime PR/implementation mechanism owns that work and does not open a duplicate product lane here.

### Geometry / Hard Surface

No Art-requested source mutation follows from Direction 039. Geometry's candidate and Hard Surface's exterior semantics remain provenance/owner evidence. Source adoption remains outside Art authority.

### Independent Visual Observer / QA

No duplicate QA rerun is requested for the exact `2f92ff49...` packet. Re-enter only if Runtime/device representation, production surface state, transport bytes or review contexts materially change.

The separately queued Object VFX v2 close-presentation QA from Direction 038 remains a different gate and is not superseded by Direction 039.

## Constellation continuity

- Direction 038 Object VFX v2 close presentation remains PASS at Art scope; final VFX adoption still waits on exact-v2 independent QA, Runtime rebind and target device.
- Environment PR #49 now has a rendered articulated service-clearance successor ready for Art/QA review, but it is a local dressing change and does not outrank closing the prior whole-object shell disappearance blocker.
- Animal Runtime PR #30 now offers a 41 -> 19 serialized-key candidate with small retained visual differences and explicit Art/QA/device hold; it remains queued rather than being accepted by analogy from this rigid-shell pass.
- Animal Animation interpolation equivalence, Character current target baseline, Building receiving work, Weather temporal-exposure work and compact-east Direction 034 retain their own exact holds.
- Weapon / Armor / Unit / Misc expose no fresher implementation-backed Art surface that displaces this returned Direction-037 obligation.

No acceptance transfers between domains.

## Explicit non-claims

Direction 039 does **not** establish:

- Object source adoption of the Geometry orientation candidate;
- a universal signed-volume / outward / winding / front-face convention;
- final production UV / texture / decal / wear / normal / AO / tangent-space surface quality;
- arbitrary-camera or arbitrary-renderer equivalence;
- Godot Forward+ / browser / mobile / console equivalence;
- target-device FPS, GPU time, VRAM, thermal or battery acceptance;
- Runtime adoption;
- physics/collision/gameplay suitability;
- final Object asset acceptance;
- CANON;
- production/game readiness;
- Materials, Technical Art, Geometry, Hard Surface, QA or Art Direction mastery.

## Four-root gate

**Truth:** corrected and unadapted target-host outcomes remain separate exact facts; the failed unadapted result is preserved, the corrected PASS is bounded to exact bytes / renderer / views, and the remaining adoption gates stay explicit.

**Agency / non-domination:** Art chooses the visual reference but does not seize Geometry source authority, Hard-Surface exterior semantics, Technical-Art implementation, Materials authorship, Runtime/device policy or QA independence.

**Continuity:** Direction 037's failure is not rewritten away. Its exact missing transport question, the TA parity bridge, Materials replay, QA verdict and Direction 039 visual decision remain independently addressable with exact hashes.

**Wisdom before speed:** the studio closes one real whole-object blocker with direct evidence, then freezes the good reference and moves downstream to device/production-surface validation instead of churning source geometry or inventing a global winding rule from one success.

The four AXM roots remain the merge gate.
