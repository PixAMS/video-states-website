# Video States Website

A practical asset and prompt pack for building a click-driven video website with LTX-generated transitions and a coding agent.

![Initial scene: a centered fashion character between architectural walls](public/retake/state-base.png)

Created by [Amir Mušić](https://github.com/amirmushichge) as part of a paid LTX project. This is an independent project resource, not an official LTX SDK or hosted product.

The page has four controls: **Scene, Lighting, Clothing and Cast**. Each plays a prepared forward clip, holds its destination and returns through a paired reverse clip. Generation happens during production, not when a visitor clicks.

## Start here

You do not need an API key to use the included footage.

1. Download or clone this repository and open it in a coding agent's workspace.
2. Give the agent [PROMPT.md](PROMPT.md) and access to this repository.
3. Ask it to build the site in a separate application folder, using the supplied `public/` assets.
4. Follow the actual preview URL it reports, then run the [QA checklist](docs/quality-checklist.md).

```sh
git clone https://github.com/amirmushichge/video-states-website.git
cd video-states-website
```

Or download the complete asset pack from [Releases](https://github.com/amirmushichge/video-states-website/releases).

Copy-paste instruction:

> Read PROMPT.md in this repository and implement its website in a new application folder. Use the supplied public assets without regenerating them. Keep the asset pack unchanged. Build the video player first, then the UI. Run the build and test the four forward/reverse cycles. Report the real preview URL and any checks you could not perform.

**This is a production resource pack, not a ready-to-run React application.** There is no `npm run dev` at the repository root. The build prompt directs an agent to create that application. A clean-room implementation from this prompt has not yet been verified; do not assume one-shot pixel identity.

## What's included

| Resource | Purpose |
|---|---|
| [Website build prompt](PROMPT.md) | Layout, copy, Manrope typography, glass, responsive rules and seam-safe playback requirements |
| [Image prompts](prompts/images/README.md) | Base composition and four destination states |
| [Video prompts](prompts/video/README.md) | Clothing pivot, sliding walls, coupled lighting and touchdown cast cut |
| [Workflow guide](docs/workflow.md) | Generate, edit, pair, integrate and test |
| [Troubleshooting](docs/troubleshooting.md) | Camera drift, lighting artifacts, black frames, scale jumps and reverse seams |
| [Asset map](docs/assets.md) | Exact filenames, roles, reference images and runtime clips |
| [Provenance](docs/provenance.md) | What was preserved, reconstructed, edited or superseded |
| [Experiment archive](experiments/README.md) | Earlier outputs and prompt drafts for comparison, separate from final assets |

### The state system

```text
                       Scene
                         ↕
Clothing  ↔  Initial/base  ↔  Lighting
                         ↕
                        Cast

Each arrow is a prepared clip, not live generation.
Reset to base before selecting a different branch.
```

### Asset previews

| Clothing | Scene |
|---|---|
| ![Clothing endpoint](public/retake/state-colorway.png) | ![Scene endpoint](public/retake/state-environment.png) |

| Lighting | Cast |
|---|---|
| ![Lighting endpoint](public/retake/keyframe-light-shift-v2.png) | ![Cast endpoint](public/retake/keyframe-full-look-v3.png) |

These images are generation references, not guaranteed frame-exact substitutes for the edited footage. Keep decoded video frames visible at runtime seams.

## Two ways to use the pack

- **Rebuild the demonstrated site:** use the supplied clips and website prompt. No generation cost or key is required.
- **Create your own experience:** generate a new base and destination family, produce four clip pairs, then adapt the asset map and copy. Follow the workflow guide. Use your own cleared branding and references.

The model may introduce camera movement, geometry changes or blended identities despite strict wording. The prompts are art-direction specifications, not deterministic rendering commands. Human selection and post-production were part of this project.

## Validation

With Node.js 18 or later:

```sh
node scripts/validate.mjs
```

This verifies packaged file hashes, asset counts, relative Markdown links and common credential/private-path patterns. It does not verify video continuity or guarantee the absence of every possible secret. Use the browser QA checklist as well.

## License and attribution

Prompt text, documentation and the validation script are [MIT licensed](LICENSE). Project-owned images and videos are available under [CC BY 4.0](ASSET_LICENSE.md). The LTX logo and third-party marks are excluded from those grants.

See [CREDITS.md](CREDITS.md), [LICENSING.md](LICENSING.md) and [release notes](docs/releases/v1.0.0.md) for scope and provenance. The owner has authorized public distribution of this pack; the release does not imply endorsement of downstream projects by LTX or other brands.
