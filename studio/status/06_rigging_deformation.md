# 06 — Rigging & Deformation Specialist Status

Date: 2026-09-16
State: **PASS_EXACT_CONNECTED_FORELIMB_SAMPLED_DEFORMATION / VOLUME + VISUAL + CONTINUOUS-MOTION + ANIMATION + RUNTIME HOLD**

## Current activation

The constellation was rescanned before extending any prior lane. No newer Object attachment geometry invalidates the previous registered-lid clearance result: Hard-Surface PR #12 explicitly preserves the host/module/socket/registration dimensions and only proves fastener-axis separation. The strongest unresolved Rigging handoff therefore moved to the exact Animal connected-forelimb candidate already named by the previous Rigging status.

Selected bounded question:

**Can Geometry PR #4's exact one-piece connected left forelimb preserve the existing source-owned `front-elbow-L` Rigging contract through the existing `-60 / 0 / +60°` representative pose envelope without collapsed triangles, fixed-anchor drift, rigid-radius drift, or sampled non-topological-neighbour self-intersections?**

Result: **`PASS_EXACT_CONNECTED_FORELIMB_SAMPLED_DEFORMATION`**.

`axm-create-me` remains coordination-only. Product implementation and evidence live in `mike-axiom-mir/axm-animal-design` draft PR #6.

## Constellation / overlap scan

- **Weapon / Armor / Unit / Misc:** repositories remain empty; no justified Rigging lane exists there.
- **Character:** Organic Form PR #2 still has named flex/deformation zones without direct deformation acceptance. Broad character rig authoring remains premature relative to current form/transition evidence.
- **Animal:** Geometry PR #4 has the exact connected left-forelimb candidate; Rigging PR #2 owns the existing quadruped joint/weighting probe; Animation PR #5 owns motion/timing evidence and explicitly does not make connected-topology deformation claims. This is the only ready exact organic Rigging handoff.
- **Building:** current evidence is static hard-surface/material/world integration; no articulation change justified a Rigging lane.
- **Nature:** current source-topology migration and VFX sway work do not establish a physical rig. VFX deformation remains separate from Rigging acceptance.
- **Weather / Map:** current dynamic work belongs to VFX / Environment / Runtime rather than source rigging.
- **Object:** prior Rigging clearance remains current. Hard-Surface PR #12 changes no registration or socket dimensions, so reopening the lid-clearance lane would duplicate already valid evidence.

No existing Animation, Geometry, Hard-Surface, VFX, Runtime, or Visual-QA lane was rewritten. A new Rigging branch was stacked directly on the exact Geometry candidate so ownership remains explicit.

## Exact source / topology / rig identity

Repository: `mike-axiom-mir/axm-animal-design`

Source lineage:

- Organic Form source prerequisite: PR #1 head `179fc6dc1a38de477e433a3842c4793e748928fb`;
- source asset: `examples/quadruped_neutral_001.json`;
- exact source family: `quadruped-neutral-001`;
- source elbow bend reserve: `front-elbow-L`, `0.11 m`.

Exact Geometry donor:

- Geometry PR #4 exact base head: `feb4b24cd36bcc879173138d240754f71db34834`;
- candidate: `front-left-connected-chain-001`;
- candidate digest: `6e620ce4b1d810b259011d0d22d38ba7c7eea0e2500177df2bf28e08fe1caf6c`;
- path: `shoulder_L -> elbow_L -> wrist_L -> front_paw_L`;
- source-derived ring radii: `[0.115, 0.09, 0.07, 0.095] m`;
- ring segments: `10`;
- candidate geometry: `42 vertices / 80 triangles`;
- Geometry prerequisite already proves one connected component, closed edge topology, connected indexed vertex fans, and no static nonadjacent triangle self-intersections for this exact digest.

Exact existing Rigging donor:

- Rigging PR #2 donor head: `04760112deb81a8d145226fe7ee02923107c9916`;
- donor plan: `examples/quadruped_rig_probe_001.json`;
- rig-plan digest: `b1f39ef8cd127edf9288b89ebd1f1fc14e6a3ceb8b0db58fa0ba9b12bc892aa8`;
- joint: `front-elbow-L`;
- axis: `[0,1,0]`;
- influence radius: `0.11 m`;
- representative authored pose samples: `-60 / 0 / +60°`;
- reused weighting semantics: baseline `smoothstep-v0`, `child = t²(3−2t)`;
- the separate PR #2 `t^0.75` refinement is **not** adopted or silently transferred.

Current Rigging lane:

- PR #6 — `Rigging: probe exact connected forelimb deformation`;
- branch: `studio/rigging-connected-forelimb-deformation-001`;
- exact tested head: `f4614ab2f691cd5c5d12b88fabc38ef848acd24e`;
- base: exact Geometry PR #4 head `feb4b24cd36bcc879173138d240754f71db34834`;
- state: **OPEN / DRAFT / MERGEABLE**.

No source landmarks, source radii, Geometry candidate topology, existing rig plan, Animation clip, UC code, runtime controller, or gameplay state was rewritten.

## Bounded improvement

PR #6 adds the smallest reusable deformation probe needed to connect existing Geometry and Rigging evidence:

- rebuild the exact connected Geometry candidate from the source-owned Animal description and fail closed if its digest changes;
- materialize the existing Rigging plan from the exact PR #2 donor head rather than copying or redesigning the rig;
- require the exact rig-plan digest before deformation;
- apply the same baseline two-transform smoothstep weighting semantics across the one-piece connected mesh;
- measure normalized weights, fixed-anchor drift, rigid-radius drift, triangle collapse, triangle-area ratio, edge-length ratio, exact neutral closure, and non-topological-neighbour self-intersection at each representative pose;
- retain exact lineage markers, source, rig plan, JSON receipt, and a deterministic X/Z wire pose strip.

The exact candidate weight population under the reused baseline contract is:

- fixed vertices: `16`;
- blended vertices: `5`;
- rigid child vertices: `21`;
- maximum parent+child weight-sum error: `0` at retained precision.

## Representative poses / motion boundary

| Elbow sample | Collapsed triangles | Min / max triangle-area ratio | Min / max edge ratio | Fixed drift | Rigid-radius drift | Nonadjacent self-intersections | Result |
|---:|---:|---:|---:|---:|---:|---:|---|
| `-60°` | `0` | `0.404056348 / 1.208077659` | `0.773457548 / 1.210299453` | `0` | `0` | `0` | PASS |
| `0°` | `0` | `1.0 / 1.0` | `1.0 / 1.0` | `0` | `0` | `0` | PASS |
| `+60°` | `0` | `0.499954815 / 1.241793395` | `0.778085958 / 1.240197116` | `0` | `0` | `0` | PASS |

Additional retained observations:

- static candidate self-intersection status: `PASS_NO_NONADJACENT_SELF_INTERSECTIONS`;
- sampled broad-phase non-neighbour triangle pairs inspected: `75` at `-60°`, `46` at neutral, `109` at `+60°`;
- neutral maximum vertex drift is exactly `0` at retained precision;
- no pose produces a collapsed triangle in the exact sampled envelope.

The retained wire strip was directly inspected after download. It shows the same one-piece chain at all three sampled poses and is useful as a structural sanity view, but it is an X/Z wire projection only and is **not** shaded/perspective deformation-quality acceptance.

Important limitation: the `0.404...` minimum area ratio and approximately `0.773...` minimum edge ratio at `-60°` show meaningful local compression. That is measured evidence, not hidden by the PASS. Because this lane does not yet establish a source-authored acceptable volume/strain budget or visual bend-quality criterion, those values remain handoff evidence rather than grounds for claiming production skinning quality.

## Exact-head CI and retained evidence

Final dedicated workflow:

- `35074331189 — Connected forelimb deformation evidence` — **SUCCESS**;
- exact branch head: `f4614ab2f691cd5c5d12b88fabc38ef848acd24e`;
- Python 3.11: compile PASS, full Animal test suite PASS, exact deformation evidence build PASS, retained artifact upload PASS;
- Python 3.13: compile PASS, full Animal test suite PASS;
- full suite on this lane: `20` tests PASS per completed matrix run.

Same-head inherited verification is also green:

- `35074331185 — Tests` — SUCCESS;
- `35074331236 — Connected chain topology evidence` — SUCCESS;
- `35074331145 — Connected chain self-intersection evidence` — SUCCESS.

Retained final artifact:

- name: `front-left-connected-chain-001-deformation-evidence`;
- artifact ID: `10437626958`;
- size: `8,881` bytes;
- Actions SHA-256: `db959e218b2f6c5c6d8b81e8e7a4e684e6970473456f036b762526536dd1177f`;
- independently downloaded/rehashed archive SHA-256: `db959e218b2f6c5c6d8b81e8e7a4e684e6970473456f036b762526536dd1177f`;
- retained `exact-head.txt`: `f4614ab2f691cd5c5d12b88fabc38ef848acd24e`;
- retained `geometry-pr4-head.txt`: `feb4b24cd36bcc879173138d240754f71db34834`;
- retained `rig-donor-head.txt`: `04760112deb81a8d145226fe7ee02923107c9916`.

The archive contains the generated deformation receipt, exact source, exact donor rig plan, lineage markers, and deterministic pose-strip SVG.

### Evidence-pipeline repairs retained as history

Two evidence-pipeline defects were found instead of being silently ignored:

1. The first CI attempt failed during compile because of a syntax error in the new SVG evidence builder. No deformation PASS was claimed from that run.
2. The repaired builder then generated correct deformation evidence, but inspection of `exact-head.txt` exposed that default `pull_request` checkout had retained GitHub's synthetic merge commit rather than the branch head. The workflow was repaired to check out `${{ github.event.pull_request.head.sha || github.sha }}` explicitly.

The final artifact above is therefore branch-head bound. Earlier failed/merge-ref attempts remain in Actions history for continuity.

## What this proves

For the exact pinned source, Geometry candidate, and existing Rigging donor:

- the exact one-piece connected forelimb can be evaluated under the existing source-owned elbow rig without inventing a second joint contract;
- the baseline smoothstep weighting produces finite geometry at the three existing representative angles;
- fixed anchors remain fixed and fully rigid child vertices preserve radius to the elbow axis at the sampled poses;
- neutral pose closes exactly to the source candidate;
- no sampled pose collapses a triangle;
- no sampled pose contains a non-topological-neighbour triangle self-intersection under the repository's bounded diagnostic;
- local area and edge deformation are quantified rather than hidden;
- exact candidate and rig identities fail closed on drift.

## Truth boundary / non-claims

This activation does **not** establish:

- continuous deformation freedom between `-60 / 0 / +60°` samples;
- volume preservation, strain acceptability, muscle/skin plausibility, pinching quality, silhouette quality or anatomical correctness;
- production skin weights, a complete quadruped skeleton, shoulder/hip/spine/tail deformation, IK, controls, retargeting or export;
- acceptance of the separate `t^0.75` weighting candidate from Rigging PR #2;
- Animation timing, cadence, clip quality, locomotion or Animation acceptance;
- target-engine skeletal playback, controller/state-machine behavior or Runtime acceptance;
- collision, physics, gameplay behavior or gameplay acceptance;
- Art Director / Visual Observer shaded visual acceptance;
- UC / Profession Fabric promotion;
- CANON, production readiness, game-readiness or Rigging mastery.

The PASS is only the exact structural sampled-deformation result described above.

## Previous accepted Rigging state preserved

The earlier Object result remains valid in its original scope:

- `PASS_CONTINUOUS_LID_TO_REGISTERED_BILATERAL_ATTACHMENT_CLEARANCE`;
- exact tested Object head `a23ef68147fbea042aab341b62cb0afd77f3a8d1`;
- continuous registered-attachment X-axis lower bound `0.012 m` over the exact `0..110°` lid envelope.

Hard-Surface PR #12 does not change the dimensions that certificate consumes, so no duplicate rerun was made. Git history retains the full prior certificate details and artifact lineage.

## Root gate

- **Truth:** the connected candidate did not inherit a deformation PASS from disconnected primitives. It was deformed and re-inspected directly; local compression is recorded; two evidence-pipeline defects were exposed and repaired rather than papered over.
- **Agency / non-domination:** Geometry retains topology ownership, Organic Form retains source anatomy/form ownership, Rigging owns only the deformation probe, Animation retains motion-quality authority, and Visual QA / Art Direction retain visual acceptance authority.
- **Continuity:** exact source, Geometry head/digest, donor rig head/digest, final branch head, workflow and artifact hashes are retained; previous Object Rigging evidence remains separately valid and roll-backable.
- **Wisdom before speed:** only one ready connected limb and one existing elbow contract were tested. No whole-animal rig, generic skinning framework or UC abstraction was invented from one successful sample family.

## Handoffs

- **Geometry PR #4:** exact candidate `6e620ce4...` now has a bounded sampled Rigging PASS, but this does not promote it to final topology or production deformation. Keep ownership of candidate construction and topology acceptance.
- **Rigging PR #2:** baseline rig semantics were reused unchanged. The connected result does not adopt or visually accept the separate `t^0.75` weighting refinement.
- **Animation PR #5:** do not silently switch its topology or claim motion acceptance from PR #6. The connected lane proves representative structural poses only, not timing/interpolation/clip quality.
- **Visual Observer / QA:** the next useful connected-limb gate is local elbow deformation quality in a richer shaded/perspective or target-host view, with attention to the measured compression at `-60°`.
- **Organic Form / Art Direction:** if compression reads poorly, any form/radius/transition change must remain source-owned rather than being hidden as a Rigging-only shape rewrite.
- **Technical Art / UC Integration:** no skeletal export, glTF skin, engine bone hierarchy or runtime deformation was exercised. Those remain separate exact-path gates.
- **Capability Cartographer:** this is one Animal-local combination of an existing source rig and an exact connected mesh candidate. It is evidence for a repeatable topology→rig proof pattern, not yet evidence for centralizing a universal rig system.

## Next Rigging & Deformation pass

1. Re-scan the constellation first; do not extend Animal automatically.
2. Do not reopen Object unless a source-owned physical attachment or articulation dimension actually changes.
3. For this connected forelimb, prioritize independent shaded/perspective Visual QA before accepting a weighting refinement; the measured `-60°` compression is the highest-value unresolved local deformation question.
4. If Visual QA identifies a bounded elbow defect, compare the smallest weighting/constraint change against this exact baseline candidate and preserve both receipts; do not inherit PR #2's alternate weighting by analogy.
5. Keep Character broad rigging held until its form/transition evidence is ready enough to justify a bounded deformation probe.
6. Keep Nature/VFX motion separate from physical Rigging acceptance unless a source-owned deformable structure is explicitly introduced.
