# Shared candidate capabilities — specialist option pool

State: **OPTIONAL CANDIDATES, NOT DEFAULT DEPENDENCIES.**

This file makes useful cross-repository capability work visible to every Create-Me specialist without assigning it to them. Each specialist decides whether a candidate belongs in its current task.

## Material response organs / families

Candidate capability:

- 13 named surface-response families;
- eight response organs: subsurface, sheen, anisotropy, clear coat, micro-breakup, transmission/absorption, iridescence, and wear layering;
- greyscale, backlight, rotation and organ-specific verification ideas;
- explicit known-loss/fallback contracts;
- surface behavior is kept separate from texture/channel values.

Current donor/integration state:

- `axm-material-surface-fabric` main — material-response home + interactive reference lab, merged via PR #28;
- `axm-universal-creation` main — fail-closed response contract/resolver, merged via PR #219;
- `axm-avatar-machine` main — Blueprint material-response intent from merged PR #3; host-specific binding evidence remains scoped rather than inherited automatically.

### Specialist choice rule

Any specialist may consider these capabilities when useful, including Art Direction, Organic/Hard Surface, Materials/LookDev, Environment, VFX, Procedural Design, Technical Art, Runtime, Visual QA, and Capability Cartography.

No specialist is required to use them.

Before adopting one, the specialist should answer:

1. Which exact response family/organ helps this task?
2. Does it belong to the specialist's domain, or should it be handed to Materials/LookDev or Technical Art?
3. Is the target renderer/runtime actually capable of binding it?
4. What evidence is inherited only as donor/reference evidence, and what must be re-earned on this host?
5. Does it add reusable control rather than cosmetic duplication?
6. Does the result remain optional and removable without rewriting unrelated source truth?

If the host cannot bind an active organ, preserve a visible HOLD rather than silently reducing it to ordinary plastic/material behavior while claiming success.

### Useful examples, not assignments

- Materials / LookDev may use living-skin, fabric, metal, glass, rubber, wear, coat, or breakup families.
- Organic Form may request skin/subsurface/transmission intent but does not own material implementation.
- Hard Surface may request brushed-metal, aged-steel, automotive-coat, or wear behavior.
- Environment / World Art may request wood, stone, glass, foliage, wet/worn surface behavior.
- VFX / Atmosphere may use transmission, coat/wetness, iridescence, or material-state changes where the effect actually owns the presentation.
- 3D Art Director may use greyscale/backlight/rotation comparisons as review criteria, not as implementation authority.
- Technical Art / UC Integration may build adapters/bindings and must keep host-specific evidence separate.
- Runtime Optimization may measure cost/fallbacks but cannot decide visual acceptance.
- Visual Observer / QA may verify whether the requested response is actually visible in the named host.
- Capability Cartographer may track lineage and binding status but does not promote the capability.

## Decision state

A specialist should record its decision as one of:

- `CANDIDATE_NOT_EVALUATED`
- `DECLINED_NOT_RELEVANT`
- `PROPOSED_FOR_TASK`
- `HOLD_HOST_BINDING_NOT_PROVEN`
- `USED_WITH_SCOPED_EVIDENCE`

These states are local specialist decisions, not global rankings or merge authority.
