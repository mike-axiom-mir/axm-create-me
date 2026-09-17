# Capability Cartographer Status

- Date: `2026-09-17`
- Standing role: `studio/specialists/14_capability_cartographer.md`
- Campaign contract: `studio/3D_STUDIO_CAMPAIGN.md`
- State: `PASS_OBSERVER_COVERAGE_AND_SENSITIVITY_MAP / MAP_VFX_CONTEXT_COVERAGE_EXPLICIT / CHARACTER_RUNTIME_ZERO_DELTA_WITH_LIGHTING_SENSITIVITY / ANIMAL_QA_DIRECTION_FRAME_CHALLENGE_VISIBLE / PF_38_REFINED_COMMENT_5717406911 / NO_UC_OBSERVER_POLICY / CREATE-ME_COORDINATION_ONLY`

## Selected material cross-repo learning

Fresh evidence across Map VFX, Character Runtime and Animal Visual QA supports one reusable evidence/provenance rule:

> **Observation coverage and observer sensitivity are separate prerequisites for interpreting a visual PASS.**

A retained frame/camera does not automatically observe the claim, and a zero control/candidate delta does not prove equivalence by itself. The evidence must say which claim states are actually observable in which contexts, and where zero-delta evidence is used the relevant observation path should have a bounded sensitivity witness or another explicit justification.

Reusable distinction:

`claim-state domain -> observation-context coverage != observer sensitivity != product acceptance`

This is a Profession Fabric evidence-placement decision. It is not a reason to centralize camera choice, visual thresholds, effect amplification, product semantics or Art/QA authority in Universal Creation.

## Evidence A — Map VFX proves context-specific observability

Repository: `mike-axiom-mir/axm-map-design`

PR #43: https://github.com/mike-axiom-mir/axm-map-design/pull/43

Exact tested head:

`29ef2d4cc4398b3f26290e4e1f1f10398ca9898c`

Scoped result:

`PASS_CURRENT_WORLD_COMPACT_EAST_VISUAL_RESPONSE_TARGET_HOST`

The final real-Godot current-world proof retains two fixed cameras instead of moving them to manufacture evidence:

- `elevated_oblique` visibly observes all compact-east interior phases `1..15` in both inherited Weather review modes;
- `path_eye` has zero compact-east pixel delta for all interior phases and is explicitly recorded as **non-observing** for this claim;
- neutral phases `00` and `16` remain pixel-exact;
- partially observing contexts are rejected rather than averaged into a PASS;
- at least one retained observing context must cover every claimed interior phase in both modes.

Therefore `camera retained` and `claim observed` are different facts. A non-observing context can remain useful provenance without becoming a false product failure when the declared claim domain is fully covered elsewhere.

Cartography return comment:

`5717409634`

## Evidence B — Character Runtime proves zero delta with an independent sensitivity witness

Repository: `mike-axiom-mir/axm-character-design`

Runtime PR #23: https://github.com/mike-axiom-mir/axm-character-design/pull/23

Exact Runtime head:

`3f60fea81a5256a8a0984215037ed592b569b515`

The exact 40,064 B shared-accessor candidate is compared to the exact frozen 44,032 B Materials baseline at retained keys `80 / 160 / 240` and three cameras.

Across the exact retained proof:

- 9 unshaded control/candidate pairs: **0 changed pixels**;
- 9 shaded control/candidate pairs: **0 changed pixels**;
- all 18 control/candidate frames are byte-identical.

Runtime does not treat zero delta as self-authenticating. In every retained context, the control shaded image differs materially from its unshaded counterpart:

- lighting-sensitivity signal: **17,376–45,590 pixels above 1 LSB**.

That challenge shows the retained lighting/render path is not visually dead for the relevant shading route. The result remains bounded to the exact keys/cameras and does not establish continuous/full-body/tangent/target-device/Art-QA adoption.

Cartography return comment:

`5717411080`

## Evidence C — Animal QA proves claim-class-specific direction-frame sensitivity

Repository: `mike-axiom-mir/axm-animal-design`

Materials PR #24 exact Materials head:

`35808c9a5a8906a478ee28e5b6a04e34113ac28c`

Visual QA independently confirms owner-rederived vs post-skin position-reconstructed tangent-space appearance is byte-identical in all 10 retained right-side sample/camera comparisons.

The observer is separately challenged by flipping reconstructed tangent W. That deliberate handedness mutation is visible in every retained context:

- **17,906–21,132 pixels above 1 LSB**;
- approximately **96.44%–97.41%** of visible foreground;
- maximum channel delta **95–99 LSB**.

This sensitivity witness is specific to direction-frame handedness. It does not prove temporal coverage, geometry coverage, arbitrary-camera sensitivity or final production normal-map quality.

## Reinforcing historical case — Object retained a non-observing backface failure

Repository: `mike-axiom-mir/axm-object-design`

Technical Art PR #28: https://github.com/mike-axiom-mir/axm-object-design/pull/28

The original service-dark receiver proof retains a historical **zero-visible-pixel backface failure**. The corrected source-front proof is green with `13,910` visible pixels in each retained view.

That history reinforces the coverage half of the rule: a target-host render invocation can execute successfully while the chosen context fails to observe the claimed surface. The failed/non-observing predecessor remains provenance rather than being rewritten as product failure or silently removed.

## Bounded evidence map

The supported reusable evidence shell is:

1. **`observation_context_identity`**
   - exact camera/view/light/material/receiver/host/instrumentation identity.
2. **`claim_state_domain`**
   - exact phases/keys/states/regions the bounded claim says were observed.
3. **Context observability**
   - per context/state or bounded group: `OBSERVING`, `NON_OBSERVING`, `PARTIAL`, `NOT_EVALUATED`.
4. **Coverage relation**
   - compare the claim-state domain to the union of observing contexts;
   - a PASS requires the declared required coverage to be satisfied.
5. **Partial-context policy**
   - explicit and fail-closed;
   - Map VFX currently rejects partial contexts rather than allowing missing states to disappear in aggregate metrics.
6. **`observer_sensitivity_witness`**
   - exact controlled mutation or contrast expected to produce signal in the relevant observation path;
   - retain expected and observed effect signatures.
7. **Sensitivity state**
   - e.g. `ESTABLISHED_FOR_CLAIM_CLASS`, `NOT_ESTABLISHED`, `FAILED_EXPECTED_SIGNAL`, `NOT_APPLICABLE_WITH_JUSTIFICATION`.
8. **Zero-delta interpretation rule**
   - zero candidate/control delta supports bounded equivalence only when required observability coverage is satisfied and relevant sensitivity is established or explicitly justified by another exact evidence path.
9. **Claim-class scoping**
   - lighting sensitivity does not prove geometry coverage;
   - tangent-W sensitivity does not prove temporal visibility;
   - one camera's observability does not transfer to another.
10. **Historical provenance**
   - non-observing/partial/failed predecessor contexts remain retained;
   - do not move cameras/lights, amplify effects or weaken thresholds solely to make evidence green.

## Placement decision — Profession Fabric evidence procedure, not UC observer policy

Existing experimental Profession Fabric issue #38 remains the correct bounded home for the shared evidence vocabulary:

https://github.com/mike-axiom-mir/axm-profession-fabric/issues/38

Cartography added refinement comment:

`5717406911`

This extends but does not replace earlier PF distinctions for:

- harness execution state;
- observation instrumentation identity / observer perturbation;
- claim obligations and applicability domains;
- scoped claim verdicts and non-transfer.

The new addition is specifically **observability coverage + claim-class sensitivity**.

PF is not asked to become a renderer, camera planner, threshold chooser, VFX system, QA authority or product acceptance engine.

### Why no Universal Creation lane was opened

The commonality is evidence interpretation, not one neutral missing machine implementation.

- Map VFX owns which current-world contexts actually expose the Nature response.
- Character Runtime owns the exact frozen-baseline A/B and lighting-sensitive receiver proof.
- Animal Materials/QA own the tangent-space challenge and retained visual judgment.
- Object Technical Art owns its receiver-view provenance.

UC may provide generic render/inspection machinery, but this evidence does not support a universal camera selector, automatic effect amplifier, visual threshold, sensitivity mutation generator or acceptance policy.

Current UC main observed during this activation:

`c9d28d43e4b25532fcd31622196a08794e467ade`

That main advance is the merged bounded Physics #189 work and is unrelated to this visual evidence procedure. No competing UC observer-policy lane was opened.

## Fresh continuity correction — Nature Runtime pass 38 is now established

The previous Cartography status captured Nature Runtime's then-live single-blend-shape workflow before it completed and correctly left that exact run `NOT_EVALUATED`.

The lane has since advanced to exact head:

`6ea4148da61d3806123712e2eaf19613df9ae1eb`

with successful workflow:

`35237828030 — Runtime compact-east single blend-shape evidence — SUCCESS`

and scoped result:

`PASS_COMPACT_EAST_SINGLE_BLEND_SHAPE_CUTS_CPU_SUBMISSION__HOLD_MEMORY_SHADED_ART_TARGET_DEVICE`

The exact source-specific candidate cuts proof-host stress median submission `1,237 -> 75 us` while increasing renderer buffer allocation by `177,840 B`; unshaded pairs are byte-identical, while simple normal-lit evidence retains a bounded nonzero difference. This new result supersedes only the previous live-head `NOT_EVALUATED` statement for that candidate identity. It does not rewrite pass 37 or the multi-axis vector rule.

## Returns / changes this activation

- PF #38 evidence refinement: `5717406911`.
- Map VFX #43 return: `5717409634`.
- Character Runtime #23 return: `5717411080`.
- No product implementation changed.
- No UC implementation changed.
- No PF implementation or profession promotion occurred.

## Durable placement ledger addition

- **Profession Fabric #38:** correct experimental home for observer-context coverage and claim-class sensitivity vocabulary.
- **Map / Character / Animal / Object owner lanes:** retain exact camera, receiver, visual-domain, mutation and acceptance authority.
- **Universal Creation:** keep generic machinery only; no visual-observer policy extraction from this evidence.
- **axm-create-me:** coordination/status only.

## Explicit non-claims

This activation does **not** establish:

- that every visual claim requires the same sensitivity mutation;
- that one sensitivity witness proves every observation class;
- that every retained camera must observe every claim state;
- that a non-observing camera is defective;
- that byte-identical retained frames imply arbitrary-pose/camera/runtime equivalence;
- final Art Direction or Visual QA acceptance for Character Runtime;
- final Animal bilateral/dense-motion/runtime adoption;
- final Map Environment adoption or perceptual naturalness;
- a generic UC camera planner, renderer policy, sensitivity generator or acceptance engine;
- PF implementation or promotion;
- CANON, production readiness, game readiness, mastery or merge authority transfer.

`axm-create-me` remains coordination-only.

The four AXM roots remain the gate: **Truth, Agency / non-domination, Continuity, Wisdom before speed**.

## Next bounded scan

- Watch for a second product-independent repeated **machine** observer contract before any UC extraction; evidence vocabulary alone is not enough.
- Watch Character/Animal target-runtime follow-through to see whether sensitivity witnesses remain stable after receiver implementation changes.
- Preserve observing, non-observing and partial contexts separately rather than collapsing them into one render verdict.
- Keep claim-state coverage and sensitivity scoped to exact identities and exact claim classes.

## Recovery / provenance

Previous Cartography state:

`PASS_MULTI_AXIS_OPTIMIZATION_EVIDENCE_VECTOR_MAP`

Previous status blob SHA before this update:

`33e1a519de644ca1735c303b388fec065d120119`

Previous Cartography commit:

`4ffc779dc7e0e13dda715ba57c7699d3bbf76893`

PF #38 refinement:

`5717406911`

Map VFX return:

`5717409634`

Character Runtime return:

`5717411080`

Current UC main observed:

`c9d28d43e4b25532fcd31622196a08794e467ade`
