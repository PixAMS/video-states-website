# LTX — Interactive video website build prompt

Build the following single-screen interactive website using React, TypeScript, Vite and Tailwind CSS. Use ordinary CSS for the precisely specified glass materials and transitions. A motion library is not required. Use compatible dependency versions; preserve an existing project's working toolchain and unrelated files.

Implement the site, run it, and verify the interactions. Do not return only an implementation plan or a static mockup.

## 1. What to build

Page title: `LTX — The world model`.

A cinematic fashion scene fills the viewport. A centered character stands between pale blue architectural walls. A compact glass controller lets the visitor change the Scene, Lighting, Clothing or Cast. Clicking a control plays an already-generated video transition. The website holds the resulting scene until Reset plays its paired return video.

This is a click-driven video interface, not a scroll-scrubbed background. Generation does not happen at runtime. No LTX API key is needed to run this site.

Build this experience at `/` and `/retake` in a fresh project. In an existing project, preserve its homepage and add `/retake` instead.

Do not build the earlier NovaAI landing page, add additional sections, introduce scroll hijacking, or invent marketing copy. Do not add a cursor effect, audio, autoplay loop, parallax, camera zoom, cards, feature grids or footer.

## 2. Required assets

The companion folder contains the assets below. Copy its `public` contents into the project's `public` directory. These are local web paths, not remote download URLs.

| Purpose | Web path |
|---|---|
| White LTX logo | `/ltx-studio-logo.svg` |
| Initial scene | `/retake/state-base.png` |
| Clothing endpoint reference | `/retake/state-colorway.png` |
| Scene endpoint reference | `/retake/state-environment.png` |
| Lighting endpoint reference | `/retake/keyframe-light-shift-v2.png` |
| Cast endpoint reference | `/retake/keyframe-full-look-v3.png` |
| Clothing forward | `/retake/video-1.mp4` |
| Clothing reverse | `/retake/video-1-reverse.mp4` |
| Scene forward | `/retake/video-2.mp4` |
| Scene reverse | `/retake/video-2-reverse.mp4` |
| Lighting forward | `/retake/video-3.mp4` |
| Lighting reverse | `/retake/video-3-reverse.mp4` |
| Cast forward | `/retake/video-4.mp4` |
| Cast reverse | `/retake/video-4-reverse.mp4` |

The endpoint stills are visual references, not automatic replacements for paused video frames. Their crop or color may differ slightly from the final approved video exports. Hold decoded video frames at interaction boundaries.

Inspect the supplied assets before implementing. Do not rename their mappings, stretch them, silently regenerate them, or recompress/upscale them. Different forward/reverse durations are intentional and supported. Each clip has its own timeline.

If assets are absent, list the missing filenames, implement the UI and media error handling, and request the companion asset folder. Never silently substitute stock footage or claim the completed interaction works without its media.

## 3. Global presentation

- Use Manrope, weights 400, 500, 600 and 700. Load from Google Fonts or supplied licensed local font files. Use `font-family: 'Manrope', system-ui, sans-serif` on the entire page, including buttons.
- Google Fonts CSS: `https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap`.
- White text, black fallback background, antialiased text, border-box sizing and zero body margin.
- Selection background: `rgba(255,255,255,0.2)`.
- A single isolated, relative viewport container: `height: 100vh`, upgraded to `100dvh` when supported. Clip visual overflow. Do not allow horizontal scrolling.
- Position all scene media absolutely at `inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center`.
- The base still remains beneath the video layers as the initial loading fallback.
- Media, hero copy, controller and header have separate stacking layers. Suggested z-index: media 0, copy 10, controller 20, header 30, error feedback 40.
- UI is real HTML, not burned into the footage. Pointer events must pass through decorative media and text overlays.
- Do not add a dark overlay, color grade, noise, sharpening, blur or scale transform to the footage.

## 4. Exact header

Left: the supplied white LTX SVG. Render 24px high on desktop, width auto. Link to the experience and give it the accessible name `LTX home`.

Next to the logo, show:

`LTX-2.5 is here`

`Smarter. Faster`

Right: `Try now`, linking to `https://app.ltx.io/` in a new tab with `rel="noopener noreferrer"`.

Desktop layout:

- Absolute top header; grid columns `auto 1fr auto`, vertically centered.
- Padding: `calc(58px + env(safe-area-inset-top)) 40px 40px`.
- Metadata margin-left: `clamp(48px, 5vw, 70px)`; gap `clamp(28px, 3vw, 44px)`.
- Metadata typography: 18px, line-height 1.2, letter-spacing -0.04em.
- Try now: 152px × 38px, 999px radius, 1px white border at 75% opacity, transparent fill, 18px type.
- On hover/focus: white fill, dark text, 300ms color/background/border transition.
- Very subtle text shadow only; no opaque header background.

## 5. Hero copy

Heading, exact text:

`The world model`

- Centered horizontally; absolute top 35.9% of the viewport.
- Width `min(901px, calc(100vw - 48px))`.
- Font-size `clamp(62px, 6.8vw, 100px)`, weight 500, line-height 0.8, tracking -0.04em.
- One line on desktop. Three word spans allow staggered transitions without changing the accessible heading text.
- Subtle shadow: `0 2px 12px rgb(0 0 0 / 0.14)`.

Description, exact text:

`LTX builds open world models that give you full control, from production-grade video to systems that understand and operate in the physical world.`

- Centered horizontally, top `calc(46.78% + 94px)`.
- Width `min(734px, calc(100vw - 48px))`.
- Font-size `clamp(14px, 1.25vw, 18px)`, weight 400, line-height 1.2, tracking -0.04em.
- It remains visible during transitions and in the selected state.
- Do not push this description far away from the controller.

## 6. Controller layout

The initial controller is already expanded. Do not add an extra click-to-expand step.

Five equal desktop columns, in this order:

`Select state →` | `Scene` | `Lighting` | `Clothing` | `Cast`

`Select state →` is a noninteractive label. The remaining four are semantic buttons.

- Controller: absolute top 46.78%, left 50%, translateX(-50%).
- Expanded width `min(880px, calc(100vw - 48px))`; height 72px.
- Rear glass track: top 4px, height 64px, full width, 999px radius.
- Floating foreground capsule: height 72px, top -5px relative to the track.
- Text: 23px Manrope Regular, line-height 1.2, tracking -0.04em; centered both horizontally and vertically.
- Each label/button has 14px horizontal padding. No clipping of `Select state →`.
- Inner positions: capsule width 20%, left at 20%, 40% or 60%.
- At the initial/leftmost position: left -5px, width `calc(20% + 5px)`.
- At the rightmost position: left 80%, width `calc(20% + 5px)`.
- This small protrusion prevents the two glass layers' rounded edges from visually pinching together.
- Center the label using its actual grid cell, not manually tuned word-specific offsets.

Hover or keyboard focus moves the capsule to the corresponding button. On pointer exit, return to the initial position unless a button retains keyboard focus. While another item is highlighted, reduce the initial label to 50% opacity. Never change scene on hover.

## 7. Glass material

Match a restrained, cool blue glass treatment. The rear track is darker and bluer; the foreground capsule is lighter and slightly more frosted. This is a browser approximation, not native Apple glass or physically accurate refraction. Do not introduce a shader engine to simulate it.

Rear track:

```css
background: rgb(24 55 82 / 0.31);
border: 1px solid rgb(255 255 255 / 0.2);
backdrop-filter: blur(9px) saturate(126%) contrast(108%) brightness(103%);
box-shadow:
  0 14px 38px rgb(4 24 43 / 0.16),
  0 2px 7px rgb(4 24 43 / 0.1),
  inset 1px 1px 0 rgb(255 255 255 / 0.48),
  inset -1px -1px 0 rgb(21 49 73 / 0.14),
  inset 0 0 0 0.5px rgb(255 255 255 / 0.16);
```

Foreground capsule:

```css
background: rgb(246 251 255 / 0.24);
border: 1px solid rgb(255 255 255 / 0.28);
backdrop-filter: blur(13px) saturate(128%) contrast(107%) brightness(105%);
box-shadow:
  0 11px 28px rgb(4 24 43 / 0.17),
  0 2px 6px rgb(4 24 43 / 0.1),
  inset 1px 1px 0 rgb(255 255 255 / 0.62),
  inset -1px -1px 0 rgb(20 49 73 / 0.18),
  inset 0 0 12px rgb(255 255 255 / 0.055);
```

Include prefixed `-webkit-backdrop-filter` declarations.

Add two restrained, pointer-inert pseudo-elements to each material:

1. A broad soft highlight: white radial gradient at `--glass-x: 24%; --glass-y: 8%`, fading to transparent around 52–54%, plus a faint diagonal white highlight. Peak alpha no more than 0.25.
2. A masked 1px perimeter with a conic gradient from 225deg: cyan → translucent white → white → pale pink → translucent white → cyan. Opacity about 0.27 on the track and 0.30 on the capsule. This is a subtle edge accent, not a rainbow fill.

Pointer movement may update the highlight origin via CSS custom properties without React rerendering. Do not distort or move the video. If masking or backdrop filters are unsupported, degrade to translucent blue/white fills and ordinary borders.

Do not use heavy white strokes, large bevels, chrome rims, saturated rainbow halos, milky opaque fills or black/dirty-gray track colors.

## 8. Interaction and motion states

Use independent scene and playback state. A useful type model:

```ts
type Scene = 'base' | 'environment' | 'light' | 'colorway' | 'fullLook';
type Playback = 'loading' | 'ready' | 'starting' | 'playing' | 'error';
type Direction = 'forward' | 'reverse';
```

Valid interaction flow:

`base → forward(branch) → selected(branch) → reverse(branch) → base`

No direct branch-to-branch playback: Scene must reset before Clothing can run. Do not combine states; the supplied footage does not contain those combinations.

Shared easing tokens:

```css
--retake-ease: cubic-bezier(0.22, 1, 0.36, 1);
--retake-slow-ease: cubic-bezier(0.65, 0, 0.35, 1);
```

Initial/hover:

- Capsule position transitions over 620ms using `--retake-ease`.
- Color changes take roughly 300–420ms.
- Do not animate the scene itself with CSS.

Forward:

- Acquire the playback lock immediately on click, before awaiting any media operation.
- Collapse the controller to 200px width over 980ms using `--retake-slow-ease`.
- Other labels fade/blur out over approximately 420ms: opacity 0, blur 10px, scale 0.94.
- The chosen label moves with the foreground capsule to the center. Keep its text readable while the footage plays.
- Begin hiding the title at about 12% of forward-video progress. Each word fades to opacity 0, blur 12px and translateY(-10px) over 900ms, staggered 0/90/180ms. Clamp the trigger earlier for unusually short replacement clips so the title does not linger after playback.
- At collapse, the rear track becomes 8px narrower than the capsule, centered underneath it.
- Once concealed under the capsule, fade only the rear material over about 400ms after a roughly 650ms collapse delay. Preserve foreground opacity. Do not toggle the rear layer with `display:none` or abruptly remove its blur/border.

Selected:

- Keep the visible video paused on its valid terminal frame.
- Show one centered glass capsule, 200px × 72px. No visible rear bar underneath.
- Foreground fill may settle to `rgb(246 251 255 / 0.14)`.
- Replace the selected label with `Reset` using a 520ms opacity/blur reveal. Underline the word with a 3px underline offset.
- Reset becomes actionable only after forward completion.

Reverse:

- Start the reverse clip and expand the full bar immediately in parallel; do not wait for reverse completion to expand.
- Fade/blur Reset out over 800ms while the bar opens over 980ms.
- Restore option labels over 760ms after a 60ms delay, but keep them disabled until reverse completes.
- Restore the rear material smoothly. Return the capsule to the leftmost initial label.
- Keep the title hidden through reverse playback, then reveal its three words when base state commits.
- Avoid an empty capsule hanging in the center with no accompanying motion.

## 9. Seam-safe video player

Use persistent video elements with stable keys and sources. One element per clip is acceptable for this small asset pack. Never remount or replace `src` on the currently visible element to switch scenes.

All videos: `muted`, `playsInline`, `preload="auto"`, no native controls, no looping, no autoplay attribute, decorative/aria-hidden. Only one may play at a time. Hidden layers use visibility rather than an opacity crossfade.

Preload and track readiness for all eight clips. Metadata alone is not a decoded frame. Account for already-cached `readyState >= HAVE_CURRENT_DATA` as well as `loadeddata` events. The preload attribute is a hint, not proof the entire file has downloaded. Expose loading status, bounded failure/retry handling, and visible feedback rather than hanging forever.

On an accepted click:

1. Capture a unique transition token and synchronously lock input.
2. Keep the previously displayed frame visible and paused.
3. Rewind the required hidden video to its start; wait for its seek to settle when necessary.
4. Register the first-frame callback, invoke `play()`, and handle its promise rejection.
5. Reveal the new layer only when a decoded frame from this request is ready. With `requestVideoFrameCallback`, inspect the frame timestamp to ensure it belongs to the clip's opening, not a stale endpoint.
6. In browsers without that callback, use checked media readiness, seek/play events and rendering ticks as a best-effort fallback; verify it in the target browser. A timeout alone must never count as successful decoding.
7. Atomically switch which video is visible. Do not crossfade two different scene states.
8. Monitor only the active video near its configured hold time. Pause it on a valid terminal hold before committing the scene state.
9. Release the lock and update controller semantics exactly once.

The visible video remains the held frame after both forward and reverse completion. Do not swap back to `state-base.png`, rewind the visible clip, or reveal another forward clip as a temporary holding image. Those shortcuts produce color flashes and wrong-frame blinks.

Use per-clip hold/end configuration. For the supplied pack, initial guard values to verify are 0.08 seconds before duration by default and 0.18 seconds for Scene reverse. These are empirical defaults, not universal constants. Recheck them if files change. An explicit validated `holdTime` is preferable when known.

Retain an `ended` fallback, but do not depend solely on it. Do not infer that every black scene is a bad frame: Lighting intentionally becomes dark. Diagnose the actual media and handoff.

Guard async callbacks, retries and completion handlers with the transition token. Ignore stale events from inactive clips. Clean up frame callbacks, RAF loops, timers and event listeners. Make this work under React Strict Mode.

If playback stalls or fails, preserve the last valid image, announce the error and provide `Retry`. Do not claim the target scene has completed. Do not leave the controller permanently locked. Rewinds and retries must not expose hidden preparation frames.

Use refs for playback locks and high-frequency progress. Do not update the full React tree on every video frame; only update UI state when its thresholds or status change.

## 10. Responsive layout

At 900px and below:

- Header padding becomes `calc(24px + env(safe-area-inset-top)) 24px 24px`.
- Header metadata: 14px, 22px gap, 34px left margin.
- Try now: 116px × 36px, 14px label.
- Controller labels: `clamp(17px, 2.5vw, 24px)`.

At 700px and below:

- Header horizontal padding 18px; logo height 21px.
- Hide `Smarter. Faster`, retain `LTX-2.5 is here` at 12px.
- Try now visual size 92px × 34px, 13px label; enlarge its touch hit area without changing appearance.
- Heading top 34%, width `calc(100vw - 40px)`, font-size `clamp(48px, 14vw, 64px)`, line-height 0.88. Allow a two-line heading around the chest, never across the face.
- Expanded controller top 53%, width `calc(100vw - 40px)`, height 156px.
- Rear panel has 28px radius, two columns, and three rows: 48px / 54px / 54px.
- First row spans both columns: `Select state →`. Next row: Scene / Lighting. Final row: Clothing / Cast.
- Use subtle 1px dividers at 12% white. Labels are 17px and precisely centered.
- Disable the desktop sliding hover capsule in this expanded mobile grid; use a restrained cell focus/pressed treatment.
- Collapsed/selected capsule: 196px × 64px at top 57%, horizontally centered and vertically centered on that point.
- The mobile selected state must still render a visible single glass surface; do not hide the mobile foreground layer while also making its rear surface transparent.
- Description top 77%, width `calc(100vw - 44px)`, font-size 14px. It stays below the expanded controller.

Use these values as visual anchors, not permission to overlap content on short screens. Test 320px-wide phones, short landscape viewports, zoom and enlarged text. Adapt spacing/type or allow a controlled accessible layout overflow when necessary; never clip controls or place text across the face. Keep media crop identical between clips throughout resize.

## 11. Accessibility and performance

- Use buttons for actions and links for navigation. Support keyboard focus, Enter and Space.
- Give the controller an accessible group label. Add a polite live status for loading, selected state, transitions and errors.
- Disabled/invisible controls must not remain in the tab order. Transfer focus from a disappearing option to Reset after completion, and from Reset to the originating option after return, without scrolling.
- Use 2px white focus outlines with 3px offset. Touch hit areas should be at least 44px where practical.
- Respect reduced-motion preferences: suppress decorative glass travel and blur transitions. Never autoplay footage. A requested scene transition may play once; offer a reduced-motion still-state alternative only if its endpoints have been verified against the clips.
- Keep glass effects local to the small controller. No full-screen backdrop blur, canvas frame extraction, WebGL, frame interpolation or synthetic FPS conversion.
- Do not keep paused videos or decoration loops rendering unnecessarily.
- Never include API keys, generation scripts containing credentials, private paths or local machine configuration in the client bundle.

## 12. Verification and delivery

First make one Clothing forward/reverse cycle stable. Then add the other three pairs. Apply final UI styling after the player works. Do not redesign the media engine while tweaking glass.

Run type checking and a production build. Start the development server on an available port and report its actual URL, rather than assuming a port is free.

Verify in a real browser when available:

- Desktop at 1440×900 and 1920×1080.
- Mobile at 390×844 and 320×568, plus a short landscape viewport.
- All four forward/reverse cycles, at least three repetitions each.
- Rapid/double clicks cannot queue competing transitions.
- No black flash, base-frame blink, brightness overlay, crop jump or scale jump at either seam.
- Scene reverse specifically returns and holds correctly.
- Reset never leaves a static empty button while the rest of the UI waits.
- The rear bar fades underneath the foreground capsule and is absent in the final state.
- Hover and focus capsules align with every label, including the two outside positions.
- Cold load, cached load, missing media, blocked playback and retry states are understandable.
- Resize, keyboard interaction and reduced-motion behavior do not break the scene state.
- The Try now link works and the media layers do not intercept clicks.

If browser or media inspection tools are unavailable, state which checks were not performed. Do not report visual verification based only on a successful build.

Deliver working source code, a concise run command, the actual preview URL, and a short list of any unresolved issues. Do not add extra design features outside this specification.
