# 14 — Capability Cartographer Status

Date: 2026-09-17
State: **PASS_NORMALIZED_SKIN_WEIGHT_RECEIVER_CONTRACT_MAP / UC INTERNAL RECEIVER DRIFT CONFIRMED / ANIMAL RUNTIME #27 PROVIDES REAL RECEIVING-DOMAIN HOLD / UC #174 OPEN FOR BOUNDED RECEIVER PARITY / QUANTIZER + AUTO-ADOPTION + VISUAL ACCEPTANCE HELD / PROFESSION FABRIC NOT IMPLEMENTATION HOME / NO PRODUCT OR UC CODE MOVE**

## Current activation

Re-read `studio/3D_STUDIO_CAMPAIGN.md` and `studio/specialists/14_capability_cartographer.md`, then rescanned newest coordination commits, specialist status, active design PRs, current Universal Creation and current Profession Fabric before selecting one bounded Cartography action.

`axm-create-me` remains **coordination only**. This activation changes only this Cartography status plus evidence-linked issue/PR coordination. No Animal, Nature, Map, Building, Object, Character, Weather, Weapon, Armor, Unit or Misc product code was changed. No Universal Creation implementation, Profession Fabric implementation, acceptance threshold, merge state or CANON state was changed.

The previous protected-render-partition Cartography result remains historical truth at coordination commit:

`16eabb1538c13483c837e81c9645ae182e0a07bb`

That pass remains the active history for UC #170 and the Animal/Nature source-to-render indexing boundary. This activation does not rewrite or merge that result into the new glTF receiver question.

The four AXM roots remain the merge gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Fresh constellation scan

New movement after the prior Cartography pass includes:

- Animal Runtime PR #26 proving a bounded `JOINTS_0` component-width reduction and handing producer choice to Technical Art;
- Animal Technical Art PR #3 adopting that exact joint-index width rule at the producer while reusing current UC unchanged;
- Animal Runtime PR #27 opening a different storage experiment for `WEIGHTS_0` and discovering that the current UC shared JS rigged-glTF receiver blocks a representation that another current UC receiver already understands;
- Animal Rigging PR #25 proving a bounded post-skin owner-frame reconstruction while preserving the older direct transported normal/tangent direction-frame HOLD;
- Nature Procedural PR #4 applying the exact Geometry leaf-backface provider across nine existing procedural outputs without copying the provider;
- Nature VFX PR #11 adding a bounded deterministic leaf-local flutter candidate with exact neutral endpoints and real Godot evidence.

Those Rigging, Nature Procedural and Nature VFX lanes have clear owners and do not need Cartography-owned implementation. The fresh material cross-repo placement signal is the **UC receiver-contract mismatch** exposed by Animal Runtime #27.

## Receiving-domain evidence — Animal Runtime #27

Repository:

`mike-axiom-mir/axm-animal-design`

Draft PR:

**#27 — `Runtime: compact Animal skin weights to normalized u16`**

Exact tested head:

`e7874c4a8dca1db48bc66f3546c2134f7d724456`

Pinned Technical Art parent / control:

- Technical Art head: `54c9c11505e798a56619ebc14e9ab41f522eef70`;
- control GLB SHA-256: `8d9bfb80369bda09eaad786a35833cd5e04da5e608211f53648daaa1cde29566`;
- control GLB size: `10,948 B`;
- `WEIGHTS_0`: FLOAT32 VEC4;
- exact weight payload: `1,344 B`.

Runtime candidate:

- `WEIGHTS_0`: normalized `UNSIGNED_SHORT / 5123` VEC4;
- exact weight payload: `672 B`;
- payload reduction: **`672 B / 50%`**;
- candidate GLB size: **`10,296 B`**;
- candidate SHA-256: `81c5422f8cf13ca65a253d3b05ebcf88fc0b20601dfb466b3c92f0d5e28dafcb`;
- maximum decoded scalar weight error: `6.656398159820068e-06`;
- decoded candidate row-sum error: `0.0` after the deterministic integer allocation;
- every non-`WEIGHTS_0` accessor payload hash remains unchanged.

Exact workflow:

`35172575874 — Runtime Animal weight width budget evidence` — **SUCCESS**

Retained artifact:

- ID `10477292250`;
- archive digest `sha256:76455589e0dde3327f72ebff6a117a2ce12ff57edaaf1d0e61304056d03063c3`;
- exact Runtime head `e7874c4a8dca1db48bc66f3546c2134f7d724456`.

The workflow is green because the evidence pipeline correctly proves and retains the current HOLD; it is **not** a UC acceptance PASS.

Real Godot 4.7.2 GL Compatibility imports both control and candidate and keeps the bounded five-pose geometry observations inside the retained tolerance. Current UC's shared JS rigged-glTF receiver rejects the candidate with:

`WEIGHTS_0 accessor invalid`

so Runtime's correct current decision remains:

**`HOLD_TECHNICAL_ART_WEIGHT_STORAGE_ADOPTION__CURRENT_UC_RIGGED_CODEC_FLOAT_ONLY`**.

## Fresh UC cross-repo learning — internal receiver contract drift

Current Universal Creation main inspected this activation:

`e6826acbc7296ba77d25534c8d3d3770ff3fa747`

Current shared JS receiver:

`capabilities/platform-hands/shared/asset-hands/rigged-gltf-codec.js`

Exact blob:

`b1f2e68bb6c6800af5496decc95a8044d141edc9`

Its current validation requires `WEIGHTS_0` to be:

- `VEC4`;
- component type `5126 / FLOAT`.

Normalized integer weight accessors are rejected even when their semantic values are otherwise valid.

On the **same UC main**, a different neutral receiver already has the broader bounded semantics:

`src/axm_uc/game_pose_runtime.py`

It accepts `WEIGHTS_0` component types:

- `5126 / FLOAT`;
- `5121 / UNSIGNED_BYTE`;
- `5123 / UNSIGNED_SHORT`.

For integer weights it requires `normalized: true`, decodes by the correct integer divisor, validates finite `0..1` values and row sums, and then uses semantic float weights for deformation.

Its current test suite includes:

`test_normalized_integer_weights_are_supported`

which exercises normalized integer `WEIGHTS_0` rather than merely documenting it.

This means the new Animal HOLD does **not** expose a missing Animal-specific trick. It exposes a current UC capability-placement inconsistency:

> **two neutral UC rigged-glTF receiving paths disagree on the accepted representation of the same standard skin-weight semantic.**

The correct reusable layer is therefore **UC receiver semantics / format contract parity**, not Runtime, Technical Art or Profession Fabric.

## Why this is not yet a generic optimizer

Runtime #27 has one bounded real asset and a deterministic quantization candidate, but that does not justify moving the quantizer or a "smallest weight width" policy into UC.

The evidence currently supports only the smaller shared statement:

1. normalized integer glTF skin weights are a valid neutral representation family;
2. one current UC path already understands them;
3. another current UC path rejects them;
4. a real design-domain asset reaches Godot successfully with normalized-u16 weights;
5. therefore receiver parity is the first shared dependency to repair before discussing producer automation.

Automatic quantization would need materially broader source/skin/layout evidence, explicit error policy and its own ownership contract.

## Visual truth remains separate

Runtime #27's retained fixed-view comparison is **not pixel-neutral**.

Coverage masks remain identical, but:

- `view-00`: `21` changed pixels;
- `view-01`: `203` changed pixels;
- total: `224` changed pixels;
- maximum channel delta: `1` LSB.

That is small bounded evidence, not permission for Cartography or UC to call the candidate visually equivalent. Art Direction / Visual QA retain that decision. UC receiver support would establish only that the representation can be correctly decoded/validated inside its declared contract.

The existing Animal deformed normal/tangent direction-frame HOLD also remains independent. Weight storage-width acceptance cannot be used to relabel or repair that surface.

## Placement action — UC issue #174

No existing active UC issue was found for normalized integer `WEIGHTS_0` receiver parity, and current UC main changes are unrelated physics/preflight work.

Opened:

**UC #174 — `Proposal: unify normalized skin-weight acceptance across UC rigged glTF receivers`**

This is a bounded **receiver-first proposal**, not an implementation claim.

Minimum proposed contract:

1. preserve existing FLOAT `WEIGHTS_0` support;
2. permit `UNSIGNED_BYTE / 5121` and `UNSIGNED_SHORT / 5123` only with `normalized: true`;
3. reject normalized FLOAT and non-normalized integer weight accessors;
4. decode integer weights to semantic float values before existing range/sum validation;
5. add semantic cross-receiver fixtures for FLOAT, normalized-u8 and normalized-u16;
6. compare the JS receiver with the already-supporting Python `game_pose_runtime` path instead of inventing a second new interpretation;
7. preserve fail-closed unsupported sparse/interleaved/extension boundaries unless separately evidenced;
8. if implemented, rerun the exact Animal Runtime #27 candidate against the exact new UC head.

Explicitly outside #174:

- a generic quantizer;
- automatic smallest-width selection;
- automatic Technical Art producer adoption;
- visual acceptance;
- arbitrary glTF import support;
- direction-frame repair;
- target-device performance;
- CANON / production readiness.

If receiver parity cannot be added without weakening unrelated fail-closed boundaries, the correct result is to keep the Runtime HOLD rather than force support.

## Downstream handoff

Returned this placement result to Animal Runtime PR #27 in comment:

**`5707323954`**

The handoff explicitly keeps Runtime's current HOLD truthful, forbids copying/bypassing the decoder in Animal, requires an exact-head rerun if UC #174 later changes receiver behavior, and preserves the `224`-pixel / `1`-LSB visual delta as Art/QA evidence rather than format acceptance.

No Technical Art code or producer representation was changed.

## Profession Fabric boundary

Current Profession Fabric main remains:

`941bd05007eb5cd88e773e66c858c62cf9de38a9`

PF issue #38 remains the experimental home for **source-successor / dependency rebind evidence procedure**. It can describe which consumer must rerun when an identity or representation changes, but it is not the implementation home for glTF binary accessor component types, normalized decoding or receiver validation.

No PF issue, implementation or profession promotion was added this activation.

## Current capability / placement map

| Capability / dependency | Current placement state |
|---|---|
| normalized integer `WEIGHTS_0` receiver semantics | **NEW: UC #174 neutral receiver-parity proposal** |
| Animal normalized-u16 weight compaction candidate | **Animal Runtime #27-owned; HOLD on current UC JS receiver + Art/QA visual decision** |
| automatic skin-weight quantizer / smallest-width policy | **HOLD extraction; one bounded asset is insufficient** |
| `JOINTS_0` producer width selection for exact Animal joint domain | **Animal Technical Art-owned adoption; current UC reused unchanged** |
| source-successor identity migration / typed dependency DAG | **PF issue #38 experimental evidence-procedure candidate** |
| neutral rigid-frame placement | **shared home confirmed = `axm-sticker-fabric`; UC compatible standalone copy preserved** |
| nonadjacent triangle self-intersection observer | **UC issue #162 separate candidate** |
| indexed vertex-fan diagnostic | **HOLD extraction; unchanged-method second-domain proof still missing** |
| indexed surface eligibility / source->render domains | **UC issue #170 observer/report candidate** |
| attribute-semantic protected split identity | **UC #170 candidate; Animal evidence** |
| index/topology-semantic protected partition identity | **UC #170 candidate; Nature evidence** |
| generic mutating reindex / auto-weld | **HOLD** |
| Animal post-skin owner-frame reconstruction | **Animal Rigging-owned; Technical Art adoption + shaded receiver still held** |
| Nature leaf-backface family derivation | **Nature Geometry-owned operation, Procedural consumes exact donor** |
| Nature bounded leaf flutter | **Nature VFX-owned visual candidate; final look/perf/physics held** |

## Explicit non-claims

This activation does **not** establish:

- that UC #174 is implemented or should merge automatically;
- that Animal Runtime PR #27 should merge or become CANON;
- that normalized-u16 is the preferred production weight storage for Animal;
- that the `224` changed pixels are visually acceptable or unacceptable;
- pixel-neutral weight quantization;
- automatic u8/u16 quantization or error-threshold policy;
- arbitrary sparse/interleaved/multi-skin/multi-primitive glTF safety;
- target-device CPU/GPU/FPS/VRAM/heap or import-speed improvement;
- repair of Animal normal/tangent direction-frame transport;
- any change to UC #170, UC #162 or PF #38;
- PF implementation or profession promotion;
- CANON, production readiness, game readiness or Cartography mastery.

## Next evidence triggers

1. **UC #174 implementation, if it begins:** prove FLOAT + normalized-u8 + normalized-u16 semantic decoding parity without weakening fail-closed unsupported-format boundaries.
2. **Animal Runtime #27 after UC change:** rerun the exact candidate against the exact new UC receiver; retain the historical current-UC HOLD rather than rewriting it.
3. **Art Direction / Visual QA:** independently judge the retained 224-pixel / max-1-LSB visual difference if Technical Art ever considers adoption.
4. **Technical Art:** producer adoption remains blocked until the consumer contract and visual ownership are resolved; no Cartography auto-promotion.
5. **Generic quantization extraction:** require additional materially different real skins/layouts and explicit error policy before considering UC machinery beyond receiver parity.
6. Keep UC #174, UC #170, UC #162 and PF #38 separate unless future evidence proves a real common contract.

## Roots check

- **Truth:** the workflow's green execution is recorded as a truthful HOLD, not mislabeled UC acceptance; current UC's two receiver behaviors are kept distinct; nonzero visual deltas remain visible.
- **Agency / non-domination:** Runtime owns the optimization experiment, Technical Art owns producer choice, UC owns only neutral receiver semantics, Art/QA own visual acceptance, Rigging keeps deformation-frame truth, and PF keeps evidence-procedure scope.
- **Continuity:** exact current UC head/blob, Animal parent/head, control/candidate hashes, workflow/artifact identities, prior Cartography commit and downstream comment are retained separately; no historical receipt is relabelled.
- **Wisdom before speed:** repair the smaller internal receiver-contract gap before centralizing a quantizer or forcing a downstream asset through a decoder that currently rejects it.
