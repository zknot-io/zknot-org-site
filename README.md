# zknot.org

An educational project on physical trust, hardware authenticity, and the systems that decide what we believe about objects.

The site has two modes:

- **The publication** — essays, written carefully, indexed by number. The voice of a research journal.
- **The journey** — a seven-chapter interactive inquiry that progressively rebuilds the reader's mental model of trust. The voice of a museum exhibit.

Both share a typographic palette and an editorial stance. Neither sells anything.

## Structure

```
/
├── index.html                    # front page: lead, Journey callout, inaugural essay
├── 404.html
├── CNAME                         # zknot.org for GitHub Pages
├── assets/
│   ├── css/
│   │   ├── style.css             # publication
│   │   └── journey.css           # /journey/ — dark variant, motion vocabulary
│   └── js/
│       └── journey.js            # ~100 lines, no libraries
├── essays/
│   ├── index.html
│   └── usb-power-and-data/index.html    # Essay № 001
├── journey/
│   └── index.html                # The seven-chapter inquiry
└── about/
    └── index.html
```

## The Journey

Seven chapters, designed to be read in order, about fifteen minutes:

1. **The Mark** — What did a signature originally prove?
2. **The Witness** — Why the paper was never enough.
3. **The Key** — Math replaces ink.
4. **The Lie** — What if the computer lies?
5. **The Button** — Human actuation returns.
6. **The Device** — Hardware becomes the witness.
7. **The Receipt** — A signature is not the artifact. It is the receipt of a physical event.

Design rules for the Journey:
- One full viewport per chapter
- No scroll-jacking; native scroll, with `IntersectionObserver` for reveals
- Socratic prompts that have no "wrong" answer — the form of the question matters
- No CTAs until Chapter 7, and even then only the three quiet links
- Reduced-motion friendly (`prefers-reduced-motion` honored)

## Design

- **Typography:** Fraunces (display) + Source Serif 4 (body) + JetBrains Mono (details)
- **Publication palette:** paper, ink, oxblood accent
- **Journey palette:** inverted — warm cream on deep ink, same accent
- **No JavaScript on the publication.** ~100 lines of vanilla JS on /journey/. No frameworks. No analytics. No tracking.

## Deploying to GitHub Pages

1. Create a public repo, e.g. `zknot-io/zknot-org`
2. Push these files to `main`
3. Settings → Pages → deploy from `main` branch, `/` root
4. The `CNAME` file already declares `zknot.org`
5. DNS at your registrar:
   - `A` records for the apex → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` for `www` → `zknot-io.github.io`
6. Wait for DNS, then enable "Enforce HTTPS" in repo settings

## Adding a new essay

1. Create `essays/your-slug/index.html` (copy the template from Essay № 001)
2. Update number, title, dek, body
3. Add a link on `index.html` (featured block) and `essays/index.html`

## Editorial conventions

- Essays are numbered sequentially and dated
- Drop cap on the first paragraph (handled by CSS)
- Pull quotes use `<blockquote>` in essays, `<div class="interlude">` in the Journey
- ASCII diagrams use `<figure class="diagram">` with whitespace preserved
- A "note on our interests" appears at the bottom of every essay where ZKNOT, Inc. has a commercial position
- Corrections appear at the bottom of the affected essay

## Editorial stance

zknot.org explains the worldview.
verifyknot.io verifies artifacts.
zknot.io builds and sells the devices.

The publication does not sell. The Journey does not sell. The products are reached, when reached at all, as consequences of the argument.

## Contact

editors@zknot.org
