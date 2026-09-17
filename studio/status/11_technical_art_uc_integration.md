# 11 — Technical Art / UC Integration Specialist Status

Date: 2026-09-17
State: **PASS_EXACT_RUNTIME_U16_WEIGHT_CANDIDATE_TO_BOUNDED_UC_RECEIVER / UC_PR_176_DRAFT / ANIMAL_TECH_ART_PR_3_DRAFT / PRODUCER_WEIGHT_WIDTH_ADOPTION_STILL_HELD / VISUAL_QA_HOLD_PRESERVED / DEFORMED_DIRECTION_FRAME_HOLD_PRESERVED**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md`, `studio/specialists/11_technical_art_uc_integration.md`, current specialist status, the live Animal design constellation, current `axm-universal-creation`, Runtime PR #27, Capability Cartographer's UC receiver finding, and the existing Animal Technical Art lane before selecting work.

`axm-create-me` remains **coordination only**. No product implementation or retained execution artifact was placed here. The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation / duplication scan

The previous Technical Art result remains true at Animal Technical Art head `54c9c11505e798a56619ebc14e9ab41f522eef70`: the real producer now emits `JOINTS_0` using the smallest legal glTF unsigned width for the exact joint domain, and the known deformed normal/tangent direction-frame HOLD remains active.

The strongest new cross-repo gap came from two fresh, non-overlapping specialist findings:

- Runtime PR #27, exact head **`e7874c4a8dca1db48bc66f3546c2134f7d724456`**, measured a bounded normalized-u16 `WEIGHTS_0` candidate from the exact current Technical Art producer. It reduced the weight payload from `1,344 B` FLOAT32 to `672 B` normalized u16 and the GLB from `10,948 B` to `10,296 B`, while preserving every non-WEIGHTS accessor payload. Godot 4.7.2 imported both and retained zero pose-receipt delta, but two fixed views changed **224 pixels total / max 1 LSB**, so visual acceptance remains held.
- Capability Cartographer opened UC issue #174 after finding that UC's Python `game_pose_runtime` already accepts normalized integer skin weights correctly, while the shared JavaScript `rigged-gltf-codec.js` still rejected the same legal representation with `WEIGHTS_0 accessor invalid`.

No existing UC implementation PR owned that receiver mismatch. The gap was therefore generic UC receiver consistency, not Animal domain semantics and not a duplicate specialist lane.

## Selected bounded gap

Question:

> Can UC's two neutral rigged-glTF receivers share the same fail-closed normalized skin-weight contract, and can the exact Runtime #27 Animal candidate then traverse that repaired receiver without granting producer adoption or visual acceptance?

This is a reusable **receiver semantics** repair only. Runtime keeps the quantizer and measured storage tradeoff; Technical Art keeps producer adoption authority; Art Direction / Visual QA keep appearance acceptance; Rigging keeps deformation authority.

## Universal Creation repair

Current UC main before repair:

**`e768b4810bfa9da09c9b927bb719c363e0494612`**

Historical shared JavaScript codec blob:

**`b1f2e68bb6c6800af5496decc95a8044d141edc9`**

Existing Python `game_pose_runtime` already supported:

- FLOAT `WEIGHTS_0` when not normalized;
- normalized `UNSIGNED_BYTE / 5121`;
- normalized `UNSIGNED_SHORT / 5123`;
- semantic integer normalization before weight validation;
- rejection of normalized FLOAT and non-normalized integer weight encodings.

The JavaScript receiver was the inconsistent side. A new bounded UC lane was opened because no competing implementation lane existed:

- UC draft PR: **#176 — `Align normalized skin-weight acceptance across rigged glTF receivers`**;
- branch: `studio/uc-normalized-skin-weight-receiver-001`;
- exact final head: **`fbb75738210c676d4d76398bd3c3deb9a6dde920`**;
- exact repaired codec blob: **`02b69b6c7368ba6e34f226ca545293d26d208922`**;
- PR state at final check: **OPEN / DRAFT / MERGEABLE**.

Smallest reusable repair:

1. preserve FLOAT / `5126` weights when `normalized` is absent or false;
2. accept `5121` and `5123` only when `normalized: true`;
3. decode normalized u8/u16 into semantic float weights before existing range/sum/deformation checks;
4. reject normalized FLOAT;
5. reject integer weights with missing/false normalization;
6. reject non-boolean `normalized` fields rather than treating JSON `null` as absence;
7. retain existing bounded sparse/interleaved/extension behavior rather than widening unrelated glTF support.

Focused UC workflow **`35176055645 — Normalized skin-weight receiver parity`** completed **SUCCESS** on exact head `fbb75738...`. Its fixture proves semantically identical one-hot FLOAT, normalized-u8 and normalized-u16 weights through the JavaScript receiver, cross-checks the already-supporting Python receiver, and exercises non-normalized u8/u16, `normalized: null`, and normalized FLOAT as fail-closed controls.

Two earlier bootstrap workflow failures are retained as tooling provenance rather than hidden. They were YAML-definition failures caused by an over-embedded temporary patch script; no receiver test had executed. The bootstrap was reduced to a YAML-safe exact-source patch step, completed successfully, and removed itself from the final PR diff. Final UC PR #176 changes only three durable files: the shared codec, focused selftest, and focused workflow.

## Exact Animal cross-repo rebind

The existing Animal Technical Art PR #3 was advanced instead of opening a duplicate Technical Art lane.

Exact Technical Art head:

**`0c31eb46cbec354c168e3c732bdb402e352d9e2b`**

Dedicated workflow:

**`35176109234 — UC normalized skin-weight receiver rebind` — SUCCESS**

The workflow downloads Runtime PR #27's retained artifact by exact ID and archive digest, then verifies the exact candidate:

- Runtime exact head: **`e7874c4a8dca1db48bc66f3546c2134f7d724456`**;
- Runtime artifact: **`10477292250`**;
- Runtime archive SHA-256: **`76455589e0dde3327f72ebff6a117a2ce12ff57edaaf1d0e61304056d03063c3`**;
- normalized-u16 candidate: **10,296 B**;
- candidate SHA-256: **`81c5422f8cf13ca65a253d3b05ebcf88fc0b20601dfb466b3c92f0d5e28dafcb`**;
- `WEIGHTS_0`: `VEC4 / UNSIGNED_SHORT / 5123 / normalized:true`.

Historical receiver check:

- UC `e768b481...` / codec `b1f2e68b...` still accepts the exact FLOAT control;
- the exact normalized-u16 candidate fails with `WEIGHTS_0 accessor invalid` and invalid raw integer weight sums.

Repaired receiver check:

- UC PR #176 head `fbb75738...` / codec `02b69b6c...` accepts the exact FLOAT control;
- the same exact normalized-u16 candidate now passes;
- candidate remains **84 vertices / 80 triangles / 2 skin joints / 1 animation channel / 41 keys / 1.0 s**;
- weight sums and joint indices pass;
- CPU deformation observation remains finite and changing.

Scoped result:

**`PASS_EXACT_RUNTIME_U16_WEIGHT_CANDIDATE_TO_BOUNDED_UC_RECEIVER`**

This is receiver compatibility only. It does **not** grant Technical Art producer adoption of normalized-u16 weights.

## Retained evidence

Technical Art rebind artifact:

- ID: **`10478363684`**;
- name: `animal-uc-normalized-weight-receiver-rebind-0c31eb46cbec354c168e3c732bdb402e352d9e2b`;
- size: **8,961 B**;
- GitHub archive SHA-256: **`cd6094cf69a94b6b791bb114bd81b6ce0757402cd8e989b15250eb49183214e9`**;
- independently downloaded and rehashed SHA-256: **same value**;
- retained candidate GLB size/SHA: **10,296 B / `81c5422f8cf13ca65a253d3b05ebcf88fc0b20601dfb466b3c92f0d5e28dafcb`**;
- retained receipt schema: `axm.animal-uc-normalized-weight-receiver-rebind/v0.1`.

The archive retains the exact Technical Art, Runtime and UC identities, old/new UC inspections, candidate GLB, and explicit HOLD statements.

## Authority / truth boundary

- **Runtime** owns the normalized-u16 quantizer and measured storage/engine evidence.
- **Technical Art** owns whether a representation is adopted by the producer and owns this cross-repo receiver proof.
- **UC** owns the generic reusable receiver contract only; no Animal weight policy, anatomy, topology or motion semantics were centralized there.
- **Rigging** retains the known deformed normal/tangent direction-frame HOLD.
- **Art Direction / Visual QA** retain the 224-pixel / max-1-LSB appearance tradeoff decision.
- **Animation** retains clip/key timing and motion authority.

The repaired UC receiver does not prove broad arbitrary glTF support, sparse/interleaved/multi-primitive/multi-skin safety, producer quantization quality, target-device performance improvement, final shaded equivalence, deformed tangent-frame correctness, engine/controller/gameplay readiness, CANON, Profession Fabric promotion or production readiness.

## Four-root gate

- **Truth:** old rejection and new acceptance are proven against the same exact Runtime-owned candidate, and the visual/deformation holds remain explicit.
- **Agency / non-domination:** Runtime owns quantization evidence, Technical Art owns producer adoption, UC owns only generic receiving semantics, and visual specialists retain appearance acceptance.
- **Continuity:** existing Animal Technical Art PR #3 is advanced; Runtime artifact identity and the pre-repair UC receiver are retained instead of silently rewritten.
- **Wisdom before speed:** the narrow receiver inconsistency is repaired first; storage adoption remains held until its separate visual tradeoff is accepted rather than being inferred from green compatibility CI.

## Current state

`PASS_EXACT_RUNTIME_U16_WEIGHT_CANDIDATE_TO_BOUNDED_UC_RECEIVER / TECH_ART_HEAD_0C31EB46 / RUNTIME_HEAD_E7874C4A / RUNTIME_ARTIFACT_10477292250 / U16_CANDIDATE_10296_B_SHA_81C5422F / OLD_UC_E768B481_CODEC_B1F2E68B_REJECTS / UC_PR_176_HEAD_FBB75738_CODEC_02B69B6C_ACCEPTS / UC_PARITY_WORKFLOW_35176055645_SUCCESS / ANIMAL_REBIND_WORKFLOW_35176109234_SUCCESS / EVIDENCE_ARTIFACT_10478363684_SHA_CD6094CF / PRODUCER_WEIGHT_WIDTH_ADOPTION_HOLD / VISUAL_QA_224_PIXEL_MAX_1_LSB_HOLD / DEFORMED_DIRECTION_FRAME_HOLD / HOLD_CANON_PRODUCTION_READINESS`
