# Workflow

## 1. Design a small state system

Start with one base composition and a finite number of branches. This example has Scene, Lighting, Clothing and Cast. Every branch returns to base; it is not an arbitrary combinatorial product configurator.

Write down what changes and what must stay fixed before generating anything. Fixed camera, floor contact, subject scale and architecture are continuity constraints. A new branch needs a destination image and a forward/reverse pair.

## 2. Create the image family

Use [the base-image brief](../prompts/images/00-base.md), then edit that approved image with the four destination briefs in [the image index](../prompts/images/README.md). Do not generate each scene independently from scratch.

Keep a 16:9 master with the subject, inner wall edges and important sky region inside a central 9:16 crop. That crop occupies about 31.64% of a 16:9 frame's width when retaining full height. Preview the actual phone crop instead of assuming a centered subject alone solves mobile composition.

Compare each endpoint to the base using an overlay or difference view. Check identity, feet, horizon, wall edges, crop and exposure. Smooth wall texture is deliberate: excessive generated noise becomes crawling texture in video. Avoid tiny lettering and intricate pendants that the model must preserve across frames.

## 3. Generate a forward transition

Use the corresponding [video brief](../prompts/video/README.md). Supply the first and destination images through a generation interface that supports the required frame conditioning. Where an interface cannot accept both endpoints, do not imply a last-frame image was enforced by the API; adjust the workflow and inspect the result.

Historical settings are documented in the original briefs. Check the selected model's current supported duration, resolution, frame rate and input schema in the [LTX documentation](https://docs.ltx.io/quickstart) before submitting. The repository does not promise that old parameter combinations remain available.

If using an agent for API calls, keep credentials only in a private local environment or secret manager. Do not paste keys into prompts, screenshots, logs, URLs or browser code. If a credential is exposed, revoke it and create a replacement. Do not include it in this repository.

Use one concise physical action with a clear start, fast middle and settle. Dense negative constraints express intent but cannot guarantee compliance. Reject structural camera/identity errors instead of trying to hide every one with a faster cut.

## 4. Inspect the generated motion

Play normally, frame-step through the change, then play in reverse. Check the background separately from the character. For the jump, inspect the last male frame and first female frame explicitly. For Lighting, all scene illumination must move together, not behind a graphic stripe.

The [experiment archive](../experiments/README.md) keeps source attempts separate from final web exports. These are useful comparisons, not the runtime files.

## 5. Edit and create the return path

Trim unwanted opening/ending holds and retime approved movement in After Effects or your editor. A stronger timing curve can improve good motion; it cannot repair a changed camera perspective or mutated body reliably.

Create a literal reverse from the approved forward where it reads convincingly. Trim/retime the reverse independently if it feels sluggish. A separate generated return is also possible, but it requires new continuity checks.

Required seams:

```text
forward start ≈ base
forward terminal hold ≈ reverse start
reverse terminal hold ≈ base
```

Use visual comparison, not just matching durations. Different lengths are valid. Upscaling was used on selected project footage; upscaling and interpolation do not guarantee recovered detail or artifact-free motion.

Keep high-quality editing masters outside the web asset folder. Export browser-compatible web files with consistent aspect ratio, framing and color management. Inspect gamma and range as well as visible color if a handoff brightens/darkens. Do not force a new frame rate solely to match an unrelated clip: interpolation can damage fast motion and fuzzy fabrics.

## 6. Build the site

Give [PROMPT.md](../PROMPT.md) and this repository to a coding agent. It should make a new React/TypeScript/Vite application, copy the assets, and first stabilize one forward/reverse cycle.

The critical playback rule is to keep the previous valid image visible while preparing the next clip offscreen. Only reveal the next layer after a decoded opening frame is ready. Keep stable video elements, identical media geometry and an input lock. Hold the active video's valid terminal frame instead of swapping to a possibly mismatched still.

The build prompt contains detailed UI timings, glass tokens, mobile layout and error handling. It includes improvements required for a robust rebuild; it is not a verbatim source-code dump.

## 7. Validate and record

Run the generated app's build, then the [browser checklist](quality-checklist.md). Test every branch repeatedly, especially Scene reverse. Replace one asset pair at a time and rerun its complete cycle. Update content hashes or filenames to avoid testing cached old files.

When recording a hero demonstration, use the real site interaction. Keep frame cadence consistent with capture/export settings. Recording at a higher FPS does not create detail or motion samples absent from the footage. Any grain should be subtle and inspected after the final platform encode, particularly on the walls and small UI text.
