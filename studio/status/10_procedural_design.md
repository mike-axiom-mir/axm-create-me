# 10 — Procedural Design Specialist Status

Date: 2026-09-16
State: **ACTIVE / SECOND REAL PROCEDURAL FAMILY IMPLEMENTED / MULTI-SEED EXACT-HEAD PASS / SOURCE-OWNED NATURE VARIATION / ART + ENVIRONMENT + DEFORMATION + RUNTIME ACCEPTANCE PENDING**

## Current state

Procedural Design now has two materially different receiving-domain proofs without promoting either into a premature shared framework:

1. **Map-local placement variation** — `mike-axiom-mir/axm-map-design#3`, exact head `83eb65711bdbd621227d5967b7735f1719e9b2f4`, varies already-declared nature/object proxy transforms while preserving the environment composition gate.
2. **Nature-local source-form variation** — new draft `mike-axiom-mir/axm-nature-design#4`, exact tested head `f939ae78ae6bb986aa67d557d7f8ff977abb7775`, varies only already-authored branch/crown degrees of freedom around the exact first source-owned sapling and re-runs the existing Organic Form gate for every candidate.

This activation adds the second proof. It does **not** merge the two contracts, move either into Universal Creation, or claim that one sapling family constitutes a general vegetation system.

`axm-create-me` remains coordination-only. No product generator or source asset is implemented here.

## Coordination / full constellation scan

Read before acting:

- `studio/3D_STUDIO_CAMPAIGN.md`;
- standing role `studio/specialists/10_procedural_design.md`;
- current specialist status packets across Art Direction, Geometry, Hard Surface, Organic Form, Materials, Rigging, Animation, Environment, VFX, Technical Art / UC Integration, Runtime, Visual Observer / QA and Capability Cartography;
- current open design-repository PR state across all eleven campaign repositories.

Fresh design-repository scan at lane selection:

- `axm-weapon-design`: no open implementation PR;
- `axm-armor-design`: no open implementation PR;
- `axm-character-design`: no open implementation PR;
- `axm-unit-design`: no open implementation PR;
- `axm-animal-design`: active Organic Form PR #1, repaired Rigging PR #2, Technical Art PR #3 and connected-limb Geometry PR #4;
- `axm-building-design`: no open implementation PR;
- `axm-nature-design`: Organic Form PR #1 supplied the first source-owned sapling; no procedural source-form lane existed before this activation;
- `axm-weather-design`: PR #2 owns the deterministic visual atmosphere field;
- `axm-map-design`: PR #2 owns environment composition, PR #3 owns map-local seeded placement variation, and PR #4 now consumes the exact source-owned Nature sapling plus Weather overlay in a real scene slice;
- `axm-object-design`: no open implementation PR;
- `axm-misc-design`: no open implementation PR.

Relevant neighboring specialist ownership remained clear:

- Organic Form owns sapling trunk/branch/leaf source intent and its existing structural/design checks.
- Environment already proved the exact baseline sapling can replace `proxy:nature-tree-west-a` in retained procedural seed 29 without breaking its bounded path/spacing/envelope checks; this activation does **not** tune map placement ranges from that one integration.
- VFX / Weather owns any future wind response. Nature flex zones remain explicitly untested.
- Geometry / Rigging / Animation are occupied by the animal deformation/topology chain and receive no inferred PASS from a procedural plant family.
- Materials / Runtime have no Nature acceptance evidence yet.
- Technical Art / Capability Cartography continue to require repeated real cross-domain evidence before horizontal extraction.

Wreckline's active LOD/material/animation evidence remains outside this Nature source-form lane and was not duplicated.

## Repeated pattern selected

The first Nature source is deliberately explicit: five branch chains and six leaf clusters / twenty-five leaf blades are manually authored around a stable six-point tapered trunk.

Before Environment consumed the source, turning that one asset into a procedural family would have risked inventing a vegetation factory before a real downstream need existed. The state changed materially when `axm-map-design#4` integrated that exact source-owned sapling into a real receiving composition and preserved provenance, path clearance, spacing and the reserved west-A envelope.

That made one repeated source-authoring task worth proceduralizing now:

> **bounded branch-tip / crown-fan variation around the exact accepted-as-input sapling source, while keeping trunk, attachments, flex semantics and downstream handoffs source-owned and immutable.**

This is materially different from the existing map procedural lane. Map PR #3 varies **where proxy instances are placed**. Nature PR #4 varies **the source-owned branch/crown geometry within one fixed sapling family**.

## Bounded improvement

Opened draft PR:

`mike-axiom-mir/axm-nature-design#4 — Procedural: add bounded sapling branch-crown variation family`

Branch:

`studio/procedural-sapling-family-001`

Stacked base:

- Organic Form PR #1 branch `studio/organic-nature-sapling-001`;
- exact prerequisite head `fbc202449981f2bac153951c561ed0ed6120c936`;
- exact baseline source digest `a61207b23c441b2cc0becd165fa62289bb7e51065ae0d6fa56bf9f3cab036cc1`.

Exact tested Procedural head:

`f939ae78ae6bb986aa67d557d7f8ff977abb7775`

Added only Nature-owned procedural/evidence files:

- `src/axm_nature_design/procedural_family.py`;
- `examples/sapling_variation_family_001.json`;
- `tests/test_procedural_family.py`;
- `tools/build_sapling_variation_evidence.py`;
- `.github/workflows/procedural-sapling-family.yml`;
- `docs/PROCEDURAL_SAPLING_FAMILY_001.md`.

No file in `axm-create-me`, `axm-map-design`, Universal Creation or another design source repository implements the generator.

### Exact local contract

Schema:

`axm.nature-sapling-variation-family/v0.1`

Family:

`sapling-branch-crown-variation-001`

Exact family digest:

`fb6a6a578361af83bef660eb6e40aa532c9b6df7782c53f186f06c85c0305dac`

The v0.1 family can vary only:

- branch length scale: `[0.90, 1.00]`;
- branch yaw delta: `[-10°, +10°]`;
- leaf length scale: `[0.88, 1.00]`;
- leaf width scale: `[0.90, 1.00]`;
- leaf yaw delta: `[-18°, +18°]`;
- leaf pitch delta: `[-8°, +8°]`.

The generator preserves exactly:

- the six-point trunk and its authored radii;
- every branch attachment point;
- all flex-zone declarations and their `DECLARED_NOT_DEFORMATION_TESTED` state;
- existing design-check ranges;
- donor provenance;
- environment handoff;
- weather handoff.

For each branch, only descendants after the attachment point are length-scaled and yaw-rotated around the exact source attachment. Its associated leaf cluster then follows the generated branch tip before its individual blade directions/sizes are varied.

The RNG state is deterministic from:

`exact family digest + integer seed + bounded attempt index`

Every accepted receipt retains exact base-source digest, family digest, seed, attempt, candidate source digest and candidate mesh digest.

A changed source digest fails closed rather than receiving old variation evidence.

## Acceptance / failure bounds

Every procedural candidate is sent back through the existing Nature Organic Form implementation and must retain its structural/design PASS.

Additional procedural gates require:

- generated envelope within `[2.2, 2.2, 5.2] m`, matching only the current west-A reserved source-consumption envelope;
- exact branch attachment preservation;
- exact preservation of the declared immutable source-owned fields;
- at least four branch tips moved by at least `0.02 m`;
- at least eighteen leaf blades changed by at least `2°` on yaw or pitch.

Search is bounded to **32 attempts**. If no candidate satisfies the exact gates, the generator returns:

`HOLD_NO_VALID_VARIANT`

It never widens ranges, changes the trunk, relaxes the source form contract or selects the least-bad failed candidate to manufacture success.

A dedicated negative control shrinks the envelope to `[1.0, 1.0, 4.0] m` and limits search to three attempts. All three attempts reject and the receipt correctly returns HOLD.

## Exact-head CI evidence

Exact tested head:

`f939ae78ae6bb986aa67d557d7f8ff977abb7775`

Dedicated procedural workflow:

- push run `35049408368`: **SUCCESS**;
- PR run `35049411924`: **SUCCESS**;
- Python 3.11: compile PASS, full receiving-repository unittest discovery PASS, exact multi-seed evidence build/upload PASS;
- Python 3.13: compile PASS, full receiving-repository unittest discovery PASS.

The existing Nature Organic Form workflow also has both matrix jobs PASS on exact-head PR run `35049411871`, including the unchanged baseline evidence build on Python 3.11. The new family therefore does not replace or bypass the baseline Organic evidence path.

Retained procedural artifact from exact-head push run:

- name: `sapling-variation-family-001-evidence`;
- artifact ID: **10428585674**;
- archive digest: `sha256:39f3e5e88c5fe2db7e8a156f1725d292492cb36d94f0ffe80fac7f333a658d90`;
- bound exact head: `f939ae78ae6bb986aa67d557d7f8ff977abb7775`.

The artifact was downloaded and inspected directly. It retains family JSON, exact summary JSON and per-seed source JSON, mesh JSON, receipt JSON, plus front/side/top generated SVG evidence.

## Multi-seed evidence

Required retained seeds:

`11`, `47`, `101`

All three are accepted on attempt `0`, but acceptance does not rely merely on successful execution: each goes through the same existing Organic checks plus the procedural material-difference and envelope gates.

### Seed 11

- moved branch tips: **5**;
- changed leaf blades: **24**;
- generated size: **2.105798 × 1.472993 × 4.840937 m**;
- source digest: `e4b4a27b7455c5960fb7a55d24581d9255a9ca9efbc9296a107b0205b6a96d29`;
- mesh digest: `8615b98886005e248dbec22b23cb4ec1e7e71632d65bd4baaab9252b8e897009`.

### Seed 47

- moved branch tips: **5**;
- changed leaf blades: **25**;
- generated size: **1.952036 × 1.421387 × 4.871715 m**;
- source digest: `887fac85fe624125cb9b2ac3298ad4a4e575292b97ce58a971c1cc3ab45578d5`;
- mesh digest: `b5cd1ac0ee272f2427386be6b5d164838624b456a340d1c811dc61a1b8349a3d`.

### Seed 101

- moved branch tips: **5**;
- changed leaf blades: **25**;
- generated size: **2.024853 × 1.368959 × 4.852771 m**;
- source digest: `257c2445ad01a358e78cd0ab181566074968877a6e5932fedf2582f3671c513b`;
- mesh digest: `a07152d4a72d0ad709d98d7b5667af4891daf8f98b1728c90b1b1d0492bf35b2`.

Retained summary confirms:

- distinct candidate source digests: **3 / 3**;
- distinct candidate mesh digests: **3 / 3**;
- existing Organic checks pass: **all three**;
- west-A envelope check: **all three**;
- branch attachments preserved: **all three**;
- source-owned immutable fields preserved: **all three**;
- impossible-envelope negative control: **HOLD after all 3 attempts**.

## Direct retained-output observation

The retained front-view SVGs for seeds 11 / 47 / 101 were downloaded, rasterized side-by-side and inspected directly.

Observed within this narrow wire-evidence scope:

- the three outputs retain the same stable trunk/source identity;
- branch arm lengths/directions visibly differ;
- the branch-tip leaf fans visibly differ in orientation/spread;
- none of the retained examples collapses into an identical-looking copy of another in the inspected front view.

That direct observation supports only the claim that the retained seed examples are perceptually non-identical at the generated wire-evidence level. It does **not** establish that any seed is better, natural, botanically convincing or Art Director accepted.

The first retained evidence run also exposed a provenance-presentation defect: the inherited baseline `write_svg()` utility hard-codes the title `sapling-neutral-001`, so derived variant views were initially visually labelled as the baseline even though their JSON/digests were correct. The procedural evidence builder was repaired at final head to fail closed if that baseline label changes unexpectedly and to replace only the evidence title with each exact variant `study_id`. Final retained SVGs now visibly identify `variant-11-00`, `variant-47-00` and `variant-101-00` correctly.

That repair is retained as part of truth/source integrity rather than hiding the first evidence-output issue.

## Why this deserves proceduralization now

The family does not invent a new plant grammar. It automates a repeated authoring operation that already exists explicitly in a source-owned real asset, after that source survived its first receiving Environment integration.

It is also bounded by contracts that existed before the procedural family:

- Nature's structural/design evidence;
- exact source identity;
- a real receiving environment envelope.

This avoids the common failure mode of calling random generation useful merely because outputs exist. Generated candidates must remain recognizably inside the authored family and satisfy the same source truth constraints.

## Why this does not move into Universal Creation yet

There are now two successful procedural lanes, but their semantics are materially different:

- map placement variation varies transforms/sizes of declared proxy instances under composition rules;
- Nature variation changes source-owned branch/crown geometry under organic form rules.

The shared idea — deterministic seeds, explicit bounds, exact provenance and bounded HOLD — may eventually deserve horizontal tooling, but two domain-local successes are not enough to prove that the same wire contract, mutation model or acceptance semantics should become one UC capability.

No Universal Creation change is requested this activation.

Capability Cartography should first look for a third real receiving family or actual duplicated implementation pressure before deciding whether a domain-neutral bounded-variation primitive is worth extracting. Domain mutation semantics must remain with their source owners even if generic deterministic/rejection machinery later becomes shareable.

## Truth boundary / non-claims

A PASS here establishes only that this exact Nature family can deterministically produce multiple bounded, structurally valid and materially distinct branch/crown variants from the exact baseline source under the declared contract.

It does **not** establish:

- botanical species generation;
- biological growth or plausible plant development;
- that these variants should replace the baseline source;
- Art Director or Visual Observer acceptance;
- acceptance of any variant in `axm-map-design#4` or another environment;
- suitability for the other three current tree proxies, whose reserved sizes are materially different;
- branch/trunk production topology or self-intersection freedom;
- rigging, flex, wind response or deformation quality;
- final leaf/bark materials, two-sided handling or lighting;
- target-engine import, runtime performance, LOD, memory or draw-call cost;
- gameplay or collision suitability;
- CANON or merge authority;
- a general species system, vegetation factory, Universal Creation procedural contract or Procedural Design mastery.

PR #4 remains **DRAFT / OPEN**. Structural/multi-seed green evidence is not source promotion authority.

## Root gate

- **Truth:** exact prerequisite/source/family/candidate identities and the initial SVG labelling defect are retained; every accepted candidate is re-tested rather than inheriting the baseline PASS.
- **Agency / non-domination:** Nature delegates only six explicit branch/crown mutation axes; map placement, Organic source authority, VFX response, Art Direction, Runtime and shared-tool placement stay with their owners.
- **Continuity:** the baseline source remains intact below the stacked PR; exact source digest and immutable fields are enforced; failed searches HOLD; rollback is simply rejection of the derived lane.
- **Wisdom before speed:** one source-owned family with three materially distinct exact outputs was built after real downstream use, rather than expanding immediately into species generation, forest synthesis or a universal procedural framework.

## Handoffs

- **Organic Form:** treat PR #4 as derived candidate machinery only. Keep the exact baseline source authoritative unless visual/environment evidence supports using a variant. If form review rejects the family bounds, repair this lane rather than changing trunk/source truth to accommodate randomness.
- **Environment / World Art:** do not inherit Nature procedural PASS. If a variant is worth testing, place one exact retained seed in the same west-A receiving slot by provenance and rerun path/spacing/composition evidence. Do not assume this family fits the smaller west-B/east-A/east-B slots.
- **3D Art Director / Visual Observer:** compare baseline + retained seed 11/47/101 views for branch hierarchy, crown balance and whether the current variation is meaningfully useful rather than merely different. Current direct inspection grants no aesthetic PASS.
- **VFX / Rigging / Animation:** flex zones remain unchanged and untested. A procedural form receives no wind/deformation acceptance automatically.
- **Geometry & Topology:** if one variant is selected for further use, inspect the same branch/trunk junction limitations as the baseline; procedural diversity does not repair capped/overlap topology.
- **Materials / LookDev:** no leaf/bark material variation exists here. Do not infer texture/shader variation from geometric leaf-fan changes.
- **Runtime / Optimization:** no procedural runtime or generation-time budget is claimed. Measure only when a real engine consumes selected variants.
- **Technical Art / UC Integration:** keep this contract source-local. Do not centralize Nature mutation semantics. Revisit only if a repeated domain-neutral execution primitive becomes necessary across more real families.
- **Capability Cartographer:** there are now two different procedural families with a common evidence discipline but different domain semantics. Map whether deterministic seed + bounded rejection + exact source/family receipts are repeated enough to justify a tiny horizontal utility; do not move domain-specific ranges or acceptance rules.

## Next Procedural Design pass

1. Read Art Director / Visual Observer / Environment response to Nature PR #4 first.
2. If current branch/crown ranges produce weak visual hierarchy, repair this exact family with before/after evidence rather than adding more mutation axes.
3. If one Nature seed survives visual and receiving-environment review, use that as stronger evidence before adding another sapling family or smaller-slot variant.
4. Otherwise choose the next genuinely repeated source-owned pattern in another department only when source evidence exists; do not fill currently empty weapon/armor/character/unit/building/object/misc repositories merely to keep Procedural Design busy.
5. Keep UC extraction on HOLD until repeated cross-domain use proves a genuinely horizontal contract beyond shared vocabulary.
