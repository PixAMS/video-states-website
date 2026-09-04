# Release and browser checklist

## Package integrity

- [ ] Run `node scripts/validate.mjs` from the repository root.
- [ ] No credentials, environment files, private screenshots or machine paths.
- [ ] Every runtime asset exists and is mapped correctly.
- [ ] Reconstructed briefs are distinguished from original saved files.
- [ ] Rights and license notices are approved before public release.

## Generated application

- [ ] Type checking and production build succeed.
- [ ] Desktop: 1440×900 and 1920×1080.
- [ ] Mobile: 390×844, 320×568 and short landscape.
- [ ] Repeat each of the four forward/reverse cycles at least three times.
- [ ] Rapid clicks do not queue or overlap playback.
- [ ] No base-image blink, black tail, crop jump or exposure discontinuity.
- [ ] Scene reverse holds the correct base composition.
- [ ] Reverse durations may differ without disrupting completion.
- [ ] Hidden clip preparation never becomes visible.
- [ ] Background stops when a state is selected; no autoplay loop.
- [ ] Reset expands the bar while its label fades; no empty-button pause.
- [ ] Rear glass fades independently; mobile selected capsule remains visible.
- [ ] Keyboard focus, loading, errors, retry and reduced motion work.
- [ ] The face stays clear of text on mobile; labels align with their hit areas.
- [ ] Test cold cache, warm cache, slow network and one deliberately missing clip in a test copy.

Package validation does not substitute for these visual checks. Record which browsers and devices were actually tested.
