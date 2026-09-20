# AXM 3D specialist tool architecture

Recorded: `2026-09-19T23:54:05Z`

State: **ARCHITECTURE CONTRACT, NOT A CLAIM THAT ALL SPECIALISTS ARE TOOLS YET.**

## Decision

The honest development order is:

1. **AI-callable deterministic tool** — a specialist exposes a typed request, a bounded command,
   an exact-source result, and a receipt that says what was and was not proved.
2. **Human interface** — a person gets clear controls and visual feedback over the same request and
   receipt. The interface may improve accessibility; it may not invent a second authority path.
3. **Intent compiler** — natural language produces an inspectable proposed request. The compiler
   does not bypass domain boundaries, provenance, holds, review, or acceptance gates.

“Deterministic” means the same declared inputs, dependency identities, tool version, seed, and
runtime assumptions produce the same machine result. It does not mean artistic taste can be
reduced to one automatic answer.

## Ownership model

Create-Me is the shell and conductor. It may discover tools, validate manifests, assemble a plan,
show receipts, and route outputs between compatible contracts. It does not absorb specialist
geometry, material, rig, motion, environment, VFX, or runtime semantics.

Each specialist implementation stays with the repository that owns the domain result. Generic
transport, manifest, receipt, provenance, and evidence-scope shapes may be shared. Thin adapters
are preferred over copied domain logic.

## Required machine contract

An AI-callable specialist tool must publish a manifest conforming to
[`studio/contracts/specialist-tool-manifest.schema.json`](contracts/specialist-tool-manifest.schema.json)
and must provide:

- one stable tool identifier and owner repository;
- an implementation identity policy that writes the exact Git head into every invocation receipt;
- a non-interactive invocation;
- request and result schemas;
- declared deterministic controls, including seed policy where applicable;
- exact dependency identities and authority type for every dependency;
- evidence scopes the result can actually support;
- fail-closed HOLD conditions;
- explicit nonclaims;
- rollback/provenance identities in its receipt;
- separate state for AI, human, and intent layers.

A command exiting successfully is not enough. The output receipt must bind the exact request,
implementation, dependencies, generated artifacts, evidence scope, and open gates.

## Specialist boundaries

| Specialist | Owns | May consume | Must not claim or silently change |
|---|---|---|---|
| 3D Art Director | Visual brief, comparison criteria, bounded visual disposition | Rendered evidence and specialist receipts | Geometry/material/runtime implementation or structural PASS |
| Geometry / Topology | Mesh structure, winding, connectivity, topology diagnostics and bounded candidates | Source-owned forms and interface contracts | Art acceptance, material truth, rig quality, or runtime acceptance |
| Hard Surface | Manufactured form, panels, joints, clearances, mechanical interfaces | Geometry contracts and source dimensions | Materials, animation, environment adoption, or final visual acceptance |
| Organic Form | Authored organic source bodies and form relationships | Art direction and bounded geometry diagnostics | Rigging, animation, runtime, or downstream adoption authority |
| Materials / Lookdev | Material families, assignments, UV/lookdev evidence | Exact source geometry and approved review contexts | Source geometry mutation, art-direction acceptance, or device performance |
| Rigging / Deformation | Skeletons, weights, controls, deformation evidence | Exact source geometry and owned interface frames | Source-form ownership, final motion, gameplay, or runtime acceptance |
| Animation / Motion | Clips, poses, timing, transitions, motion evidence | Accepted rig and source-authority contracts | Rig/source ownership, gameplay feel acceptance, or performance budgets |
| Environment / World Art | Composition, placement, receiving context, scene hierarchy | Accepted source assets, Map constraints, Weather contracts | Source asset semantics or specialist acceptance on behalf of owners |
| VFX / Atmosphere | Particles, atmospheric presentation, bounded effect timing | Environment/Weather/source anchors | World ownership, source geometry, or gameplay/runtime acceptance |
| Procedural Design | Reproducible bounded generators and variation receipts | Source-owned parameters and explicit seeds | Creative acceptance, source adoption, or new domain semantics |
| Technical Art / UC Integration | Export, transport, adapters, target-host integration, generic observers | Accepted owner contracts | Domain semantics, automatic adoption, or acceptance transfer between hosts |
| Runtime Optimization | Measurements, budgets, LOD/streaming candidates, performance receipts | Exact target build and representative device/runtime | Visual/art/gameplay acceptance or extrapolation from proof host to production |
| Visual Observer / QA | Observation, comparison, defect evidence, scoped verdict | Exact rendered/runtime artifacts and acceptance criteria | Repair authorship, merge authority, or verdicts outside observed scope |
| Capability Cartographer | Capability/dependency map and exact lineage | Manifests, receipts, repository state, evidence records | Code transfer, capability invention, or domain authority |

These boundaries restrict authority, not collaboration. A workflow may cross several specialists,
but every transition must name the producer, consumer, exact identity, and invalidated gates.

## Optional shared capability candidates

Specialists may inspect shared candidate capabilities when a task exposes a relevant gap. This is an **option pool, not an assignment list**.

A specialist decides for itself whether a candidate is relevant to the exact task and evidence context. It may:

- `USE/PROPOSE` a bounded capability or donor contract when it improves the specialist-owned result;
- `HOLD` when the target host has not bound or verified the capability;
- `DECLINE` when the capability is irrelevant, would weaken the specialist boundary, or adds cost without useful control.

Create-Me must not auto-inject a shared candidate merely because it is available. The specialist must name the exact capability/family/organ it wants, the owner/donor source, the target host, and the evidence that still needs to be earned. Reference-host evidence does not transfer automatically to another renderer or runtime.

The current candidate pool is recorded in `studio/specialists/00_shared_candidate_capabilities.md`.

## Evidence scopes stay separate

The common receipt vocabulary is intentionally non-transitive:

- `structural`: schemas, topology, identities, transforms, deterministic outputs;
- `visual`: observed pixels/frames in named contexts;
- `runtime`: measured behavior on a named host/device/build;
- `interaction`: observed controls and state transitions;
- `gameplay`: human/product acceptance of play behavior;
- `art_direction`: human/product acceptance of visual intent.

No scope implies another. A green workflow proves only its asserted scopes.

## Human layer

The human interface is built only after the AI tool has a stable request/result contract. It must:

- render the same request fields with understandable labels and safe defaults;
- show the exact source and dependency identities being used;
- expose preview/dry-run where output can replace or mutate work;
- display receipts, holds, nonclaims, and rollback points without hiding them;
- preserve expert access to the underlying machine request.

## Intent layer

Intent arrives last. Its output is a proposed, inspectable machine request, never an invisible
action. Before execution the compiler must resolve ambiguity that changes domain ownership,
artistic direction, destructive scope, target host, or acceptance criteria. It may choose technical
defaults only where the manifest explicitly authorizes them.

An intent such as “make this creature ready to animate” therefore becomes a dependency plan across
Organic, Geometry, Rigging, QA, and possibly Runtime. It does not become permission for one tool to
own the entire chain.

## Adoption states

| State | Meaning |
|---|---|
| `DESCRIBED` | Boundary and intended contract are recorded; no callable claim |
| `AI_CALLABLE` | Exact request/result invocation and receipts pass fresh verification |
| `HUMAN_WRAPPED` | A human interface drives that exact contract and has interaction evidence |
| `INTENT_COMPILED` | Natural language compiles to inspectable requests without bypassing gates |
| `HOLD` | A required provenance, dependency, visual, runtime, or authority gate is open |

The first convergence pilot is Building Materials: its existing deterministic packet builder is
being rebound to accepted Building source before it can be registered as `AI_CALLABLE`. This does
not promote the other specialists by analogy.

## Four-root check

- **Truth:** exact inputs, identities, scopes, holds, and nonclaims travel with every result.
- **Agency / non-domination:** human and downstream consumers can inspect, refuse, revise, and
  route requests; no layer silently acquires another specialist's authority.
- **Continuity:** old evidence remains historical, successors name what they replace, and receipts
  carry rollback identities.
- **Wisdom before speed:** provenance and acceptance gates are resolved before convenience layers
  or broad intent automation are added.
