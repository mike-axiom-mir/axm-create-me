# 14 — Capability Cartographer Status

Date: 2026-09-16
State: **MAP UPDATED / THREE-FAMILY PROCEDURAL EVIDENCE BOUNDARY CONFIRMED / SOURCE MUTATORS STAY LOCAL / PROFESSION-PROCEDURE CANDIDATE / NO UC EXTRACTION**

## Scope inspected

This activation read the 3D Studio campaign and standing Capability Cartographer role, then inspected the newest coordination commits, open PRs and exact specialist evidence across the design constellation plus relevant Universal Creation and Profession Fabric state.

The active constellation now includes:

- `axm-character-design#2`: first source-owned neutral A-rest body;
- `axm-animal-design`: Organic Form, Rigging, Geometry, Technical Art and Animation lanes;
- `axm-nature-design`: Organic Form, VFX, Technical Art, Procedural and Materials lanes;
- `axm-weather-design`: source-owned atmosphere plus the new Procedural family;
- `axm-map-design`: Environment composition/source integration, Procedural placement and the new source-slice Runtime measurement lane;
- `axm-wreckline`: adjacent real-asset evidence for hard-surface, runtime, animation, materials and provider provenance.

`axm-weapon-design`, `axm-armor-design`, `axm-unit-design`, `axm-building-design`, `axm-object-design` and `axm-misc-design` still have no comparable active implementation family that would justify inventing a fourth procedural domain merely to satisfy abstraction pressure.

Relevant shared state inspected:

- Universal Creation main at `87f93e1a27b2e3414f6422cd38e31b00e89d6a56` plus open profession-crew PR #143 at head `fef0834c07e207f6ee943a389f119a6c26fc4ddc`;
- Profession Fabric `knowledge-engineer` and `ontology-engineer` bodies on main;
- EXPERIMENTAL `3d-game-asset-specialist` PR #35 at head `541785c9e90d825a3e9e2384abecf42bef15e0d0`;
- the three actual Procedural implementations, not only their status summaries;
- Technical Art's new Wreckline provider-import contract;
- Runtime's new Environment source-slice measurement PR #5.

`axm-create-me` remains coordination-only. This activation changes only this Cartographer status/map.

## Selected material cross-repo learning

### Three independent procedural families now repeat one **evidence procedure**, not one mutation engine

The previous Procedural status explicitly handed Cartography a new trigger: Map, Nature and Weather now each have materially different bounded variation families. I compared their actual implementation paths rather than assuming that the shared word “procedural” means their code belongs together.

The result is now strong enough to refine placement:

> **The reusable cross-repo capability is a bounded-variation evidence protocol. The mutation logic and domain acceptance logic remain source-owned.**

That distinction matters because all three implementations independently reproduce the same truth/provenance shell while doing genuinely different work inside it.

## Exact three-family evidence map

| Family | Exact lane | What is allowed to vary | Domain gate rerun | Failure boundary |
|---|---|---|---|---|
| Map placement | `mike-axiom-mir/axm-map-design#3`, exact tested head `83eb65711bdbd621227d5967b7735f1719e9b2f4` | declared Nature/Object proxy XY placement, uniform scale and rotation | Environment composition/path/spacing evaluator | bounded attempt exhaustion -> HOLD; owned asset kinds cannot be varied |
| Nature source form | `mike-axiom-mir/axm-nature-design#4`, exact tested head `f939ae78ae6bb986aa67d557d7f8ff977abb7775` | authored branch length/yaw plus leaf size/orientation inside explicit bounds | exact Organic Form/source/envelope checks | `HOLD_NO_VALID_VARIANT`; authored bounds are not widened |
| Weather stochastic field | `mike-axiom-mir/axm-weather-design#3`, exact tested head `05b26c4e82bbe0a4de0ee7bee34179efc58b9719` | deterministic streak-field seed and derived study identity only | exact Weather visual-direction/source evaluator plus spread/material-difference gates | `HOLD_VARIANT_GATE`; baseline seed `9142` is an explicit negative control |

Weather's retained family provides the third materially different proof: seeds `1207`, `44021` and `83017` all produce distinct retained source/layout identities and move all 36 indexed starts while preserving the exact authored Weather semantics. The unchanged baseline seed is correctly rejected as “not a new variation.”

## What the code actually repeats

Direct comparison of the three implementations shows the following stable shell:

1. **Exact base/source identity** is bound before mutation.
2. A **family identity / digest** is retained separately from the base source.
3. The implementation states an explicit **mutation authority** instead of allowing arbitrary edits.
4. Deterministic seed identity is retained wherever stochastic choice exists.
5. Source-owned fields outside the mutation contract are treated as **immutable**.
6. The **owning domain evaluator is rerun** for each candidate; a parent PASS is not inherited by label.
7. Candidate usefulness requires a **material-difference gate**, not merely successful execution.
8. Failure is represented as an explicit bounded **HOLD**, not “pick the least bad candidate.”
9. Multiple materially different outputs are retained; no single lucky case is enough.
10. Candidate/output identities are hashed and kept with provenance.
11. A **truth boundary / non-claims** packet accompanies the result.

This is now repeated across three different domain bodies, not one implementation copied three times.

## What does **not** repeat

The executable mutation machinery is materially different:

- **Map** mutates instance placement/scale/rotation, uses its own allowed asset kinds, and reruns path/spacing composition rules. Its RNG is a direct seeded sampling loop over declared proxy transforms.
- **Nature** derives variation from exact organic source structures, hashes family+seed+attempt into deterministic RNG state, preserves branch attachments/trunk/flex handoffs, rebuilds mesh evidence, and uses bounded rejection against Organic Form/envelope rules.
- **Weather** does not run the same rejection-search model at all. It changes only the existing stochastic source seed, preserves an explicit immutable field set, rebuilds the exact particle field, measures movement/quadrant/spread, and uses the original baseline seed as a negative control.

The domain semantics, parameter ranges, mutation shapes, candidate builders, metrics and acceptance tests are therefore **not interchangeable**.

A generic “procedural generator” extracted now would either become a thin cosmetic wrapper around three unrelated callbacks or would erase domain ownership to manufacture deduplication. Neither is justified.

## Capability-placement decision

| Layer | Correct current home | Why |
|---|---|---|
| Mutation semantics and allowed degrees of freedom | source-owning design repo | Only that domain knows whether position, branch geometry, particle seed, future sockets, materials, etc. are legitimate authored variation axes. |
| Domain acceptance / material-difference meaning | source-owning design repo | Path readability, organic-form validity and Weather-field spread are different truth claims. |
| Deterministic RNG implementation when domain-specific | source-owning design repo | Map/Nature/Weather already demonstrate different useful seed/attempt semantics. |
| Cross-domain bounded-variation **procedure/evidence discipline** | **Profession Fabric candidate — proposal only** | It is a reusable way of working: provenance, explicit mutation authority, rerun owning evidence, retain failures, preserve non-claims. |
| Shared executable receipt/digest helper | **not yet placed** | A helper belongs in UC only if at least two real consumers prove literally reusable executable behavior without domain semantics. Current evidence does not show that yet. |
| Studio capability/dependency map | `axm-create-me/studio/status` | Coordination state only; no product/generator implementation here. |

### Decision: no code or profession structure moved this activation

The three-family trigger is sufficient to map a **procedure candidate**, but the Cartographer role does not turn repeated observations directly into profession maturity or Universal Creation machinery.

No Map/Nature/Weather code is moved.
No new UC procedural abstraction is added.
No Profession Fabric body is silently rewritten.

The correct next proving step is execution of the shared method as a professional procedure, not immediate centralization.

## Why the procedure candidate points toward Profession Fabric

Profession Fabric's current **Knowledge Engineer** explicitly owns provenance/scope/version structure while separating representation validity from claim truth, preserving unknowns/conflicts, and handing domain adjudication back to the owning profession/domain. Its WORKING threshold also requires multiple materially different domains and an exercised domain handoff.

The current **Ontology Engineer** likewise owns mappings/alignment/version mechanics while explicitly refusing to turn formal consistency into domain truth. This matches the need here: a cross-domain procedure can define *what evidence must be present* without deciding what a valid tree, map layout or weather field is.

That is a better conceptual fit than putting the procedure into UC as if procedural semantics were one universal creation algorithm.

However, Profession Fabric's current `3d-game-asset-specialist` PR #35 remains **DRAFT / EXPERIMENTAL / NO PROMOTION** and is still grounded primarily in one Wreckline Hero Vehicle family and one Godot proof host. It has strong exact-identity, provider-boundary, retained-failure and runtime-observation evidence, but it has not yet executed this three-domain bounded-variation method.

Therefore no Profession Fabric edit is justified yet.

## UC boundary remains separate

Current UC main already contains many deterministic/seeded creation behaviors, but the current search surface did not expose one generic Map/Nature/Weather bounded-variation family contract that these three repositories are already consuming. UC's own seeded art/style machinery is evidence that deterministic variation can be useful; it is **not** evidence that all source-domain variation has one shared mutation engine.

Open UC PR #143 strengthens a different architectural separation: UC can consume Profession Fabric bodies, their procedures, failure libraries and handoff contracts while keeping those professions EXPERIMENTAL and independently verifying actual artifacts. That makes it plausible for a future bounded-variation procedure to inform UC work **without** relocating Map/Nature/Weather semantics into UC.

PR #143 itself does not prove this proposed procedure and does not promote the 3D specialist.

## Proposed bounded-variation evidence packet — proposal only

If the next cross-domain execution reuses this procedure, the smallest reusable packet should require fields equivalent to:

- source repository + exact commit/PR head;
- exact base source/body identity + digest;
- family/procedure identity + version/digest;
- explicit allowed mutation fields/degrees of freedom;
- explicit immutable fields;
- deterministic seed identity and, where used, attempt derivation;
- bounded attempt/rejection policy;
- exact owning-domain evaluator/version that must be rerun;
- material-difference metrics and threshold meaning;
- at least three retained materially different candidates when the family claims a variation set;
- at least one meaningful negative/failure control where feasible;
- candidate/output digests;
- retained rejected/HOLD state rather than silent reselection outside bounds;
- explicit truth boundary and non-claims;
- downstream acceptance owner(s) still required.

This is **not** a new schema or API in this activation. Naming the fields is a capability map so the next execution can test whether the procedure is genuinely stable.

## Promotion / extraction trigger

### Profession Fabric procedure trigger

Add an EXPERIMENTAL bounded-variation procedure only after a real executor/profession performs the same method across at least two materially different families — preferably by consuming two of Map/Nature/Weather or a fourth independent asset family — while preserving each domain's own mutation/evaluation rules.

The procedure should then be tested for:

- provenance round-trip;
- immutable-field preservation;
- explicit mutation authority;
- correct domain-evaluator handoff;
- retained HOLD/failure behavior;
- no conversion of procedural validity into aesthetic/domain truth.

### UC executable-helper trigger

Only consider UC code if comparison of real implementations finds a literal domain-neutral operation used unchanged by multiple consumers. The most plausible future candidate is a small **receipt/provenance validator or deterministic digest shell**, not a universal source mutator.

If the helper needs callbacks that own almost all behavior, keep it local unless those callbacks still remove meaningful duplicated implementation without hiding domain truth.

## Other cross-repo signals inspected but not selected

### Wreckline provider closure — still one consumer

Technical Art's new `axm-wreckline#8` now proves a consumer-owned provider import contract and narrows the historical UC HOLD to two unresolved direct modules: `axm_uc.hard_surface` and `axm_uc.vehicle_hardpoints`. This is a strong reusable **procedure candidate**, but still one exact consumer. It stays Wreckline-local until another materially different consumer independently needs the same provider-closure contract.

### Runtime has now gained a second materially different receiving scene

New `axm-map-design#5` establishes the first runtime counter baseline for the mixed Environment source slice at exact head `5b24ef52c4e7923e077fa057f3df6fe9ff22bc22`, workflow `35053830634`, artifact `10429986732`.

The lane also retained a useful counter-semantics repair: 36 authored Weather streaks appear as **+144 `RenderingServer` primitives** in the pinned Godot GL Compatibility backend while remaining **one draw call**. The failed +36 assumption remains historical evidence rather than being rewritten.

This is important future Cartographer material because Wreckline already proved that **visibility cost and residency cost are separate contracts**, while Map now proves that **source primitive meaning and renderer counter meaning are also separate contracts**. That runtime evidence boundary should be compared in the next pass before any shared runtime telemetry vocabulary is proposed.

It is not selected for structural placement here because this activation already has a completed three-domain procedural trigger and the Runtime vocabulary has only just gained its second materially different context.

### Previous design -> UC surface boundary remains valid

The prior Cartographer map from Animal + Nature remains intact: source semantic adapters stay local, while UC owns the strict portable target surface / GLB publication and verification machinery. No third materially different source bridge has yet invalidated that placement.

Nature-only surface sidedness also remains a single-consumer target-contract gap; no UC `doubleSided` promotion is requested.

## Truth boundary / non-claims

This map does **not** establish:

- a universal procedural generator;
- one shared mutation language for Map, Nature and Weather;
- that deterministic seeds alone make a useful procedural family;
- that all future procedural work must expose the exact same fields;
- that aesthetic quality follows from structural variation gates;
- that the three implementations should be merged or rewritten;
- that UC requires a new procedural organ now;
- that Profession Fabric's 3D specialist is mature, WORKING or ready for promotion;
- that the proposed evidence packet is already an accepted schema/API;
- that UC PR #143 proves this proposed 3D procedure;
- that Wreckline's provider contract is horizontally reusable from one consumer;
- that Map runtime counters establish target budgets or generic renderer semantics;
- CANON, merge authority, production readiness or mastery.

## Root gate

- **Truth:** actual implementation differences were compared before naming a shared capability; only the repeated evidence discipline is called reusable.
- **Agency / non-domination:** source repositories retain control of mutation semantics and domain acceptance; no central layer gains authority merely because it can represent the procedure.
- **Continuity:** exact heads, family identities, negative controls, historical failures and prior Cartographer maps remain traceable; no source lane is rewritten or absorbed.
- **Wisdom before speed:** three real families justify a placement proposal, but not a generic engine. The next proof is professional-method reuse before structural extraction.

## Handoffs

- **Procedural Design:** keep Map/Nature/Weather mutation engines and acceptance rules local. On the next family, preserve the same evidence sequence only where it still fits; do not force a source into the existing three contracts.
- **Profession Fabric:** no edit/promotion requested yet. The next `3d-game-asset-specialist` cross-domain procedural task is the preferred experiment for proving or falsifying the proposed bounded-variation professional procedure.
- **Technical Art / UC Integration:** compare the three implementations only for truly identical executable fragments. If a neutral receipt/digest validator emerges across at least two consumers, bring that evidence back to Cartography before UC extraction.
- **Universal Creation:** no change requested. Keep domain-neutral target machinery separate from source mutation semantics. Profession-crew work may consume procedures but must not convert them into domain authority.
- **Runtime / Optimization:** preserve Map #5's authored-source vs backend-counter distinction. A future Cartographer pass should compare that with Wreckline's visibility-vs-residency distinction before proposing shared telemetry terminology.
- **Wreckline / provider provenance:** keep PR #8 consumer-owned until a second independent provider-closure case exists.

## Next Cartographer pass

First look for one of these concrete events:

1. Profession Fabric's EXPERIMENTAL 3D specialist executes a bounded-variation task across another asset class/domain;
2. a fourth materially different procedural family appears and independently reproduces or breaks this evidence procedure;
3. Map Runtime #5 is followed by another source-slice/runtime measurement that makes a stable cross-domain telemetry vocabulary visible;
4. a second independent consumer needs the provider-import closure contract;
5. a third materially different design source crosses the UC surface boundary;
6. a second non-Nature source independently requires two-sided surface semantics.

If none occurs, do not manufacture an abstraction. Re-scan for the next repeated real gap and leave working domain machinery where its evidence says it belongs.
