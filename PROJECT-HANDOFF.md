# INSEE UAV × YellowScan — Website Project Handoff

**Project:** insee-deploy (inseeuav.com)
**Owner:** Smith / "มี่" (marketing lead, INSEE UAV × Thai Sky Vision)
**Date compiled:** 2026-07-08
**Purpose:** Handoff document for new Claude session

---

## 🎯 Executive Summary

INSEE UAV marketing website — replaced legacy Wix site with modern static HTML site on Netlify. Site is now live at **https://www.inseeuav.com**. Domain migrated Wix → Netlify (DNS records only, Wix still nominal registrar). Comprehensive TH + EN bilingual site with 73 pages covering platforms, LiDAR/camera payloads, real mission portfolio, events, and CMS-editable content.

**Status:** Production live, mobile-optimized, SEO-ready. Traffic ~500 visits/day post Demo Day (3 Jul 2026).

---

## 🏢 Business Context

### Company Structure
- **Thai Sky Vision Co., Ltd.** — parent company + **Official YellowScan Distributor in Thailand**
- **INSEE UAV** — sub-brand designing E-VTOL Fixed-Wing UAVs
- **User (Smith / "มี่")** — solo marketer, does website + content + branding herself (not a developer)
- Tax ID: 0115565033623 · Address: 94/15 ม.4 ต.บ้านคลองสวน อ.พระสมุทเจดีย์ จ.สมุทรปราการ 10290

### Product Line
- **INSEE-250** — E-VTOL Fixed-Wing, 2.5m wingspan, 2kg payload, 2.5hr endurance
- **INSEE-350** — Larger platform for Voyager/H800 long-range LiDAR
- **INSEE-GCS-01** — Ground Control Station
- **YellowScan payloads** (distributed by Thai Sky Vision):
  - Mapper+, Mapper Ultra, Voyager, Navigator, Surveyor Ultra III OEM, Explorer, Fly & Drive, Venturer
  - Software: CloudStation, CloudStation Viewer, LiveStation
  - Camera Modules
- **Other Payloads:** GVI LiAir H600/H800, CHCNav AlphaAir 10, Sony ILX-LR1, Riebo D2M
- **Target market:** Mapping & Survey (primary), expanding to Defense & Security

### Marketing Focus
- Facebook, LinkedIn, website (bilingual TH/EN)
- Key messages: "Tested with real payloads", "VTOL Fixed-Wing = wide coverage", "One-Stop Solution", "Local Support (TSV)"

---

## 🌐 Site Info

| Item | Value |
|---|---|
| **Production URL** | https://www.inseeuav.com |
| **Netlify subdomain** | https://insee-uav.netlify.app |
| **Git repo** | https://github.com/kirami18-dev/insee-uav |
| **Hosting** | Netlify (Free plan, currently 116 credits remaining / 300 monthly) |
| **DNS registrar** | Wix (A + CNAME records point to Netlify) |
| **Total pages** | 73 (TH + EN combined) |
| **CMS** | Decap CMS at `/admin/` (Netlify Identity gated) |

---

## 🛠️ Technical Stack

**No build step — pure static HTML.** All pages are self-contained HTML files with inline styles + Tailwind CDN.

| Layer | Choice |
|---|---|
| HTML | Static, hand-authored + Python batch scripts |
| CSS | Tailwind CDN (`https://cdn.tailwindcss.com`) + inline styles |
| Fonts | Google Fonts: **Inter** (Latin) + **Kanit** (Thai) |
| Icons | Material Symbols Outlined |
| 3D | Three.js r160 (via unpkg.com CDN) + GLTFLoader + DRACOLoader |
| Forms | Netlify Forms (`data-netlify="true"`) |
| CMS | Decap CMS (Git-based, config in `/admin/config.yml`) |
| Analytics | Netlify Observability (free tier) |

**Local dev workflow:** VS Code Live Preview (no server needed) → push to `main` → Netlify auto-builds.

---

## 📁 Repo Structure

```
/Users/kirami/insee-deploy/
├── index.html                    # Home (TH)
├── en/                           # English mirror (all pages duplicated)
│   ├── index.html
│   ├── products/
│   ├── works/
│   ├── events/
├── products/
│   ├── insee-250/                # Platform pages
│   ├── insee-350/
│   ├── gcs/                      # INSEE-GCS-01
│   ├── yellowscan/
│   │   ├── mapper-plus/          # YS LiDAR (8 models)
│   │   ├── mapper-ultra/
│   │   ├── voyager/
│   │   ├── navigator/
│   │   ├── surveyor-ultra-iii-oem/
│   │   ├── explorer/
│   │   ├── venturer/
│   │   ├── fly-and-drive/
│   │   ├── camera-modules/
│   │   └── software/
│   │       ├── cloudstation/
│   │       ├── cloudstation-viewer/
│   │       └── livestation/
│   ├── gvi/                      # Other payload brands
│   │   ├── h600/
│   │   └── h800/
│   ├── chcnav/aa10/
│   ├── sony/ilx-lr1/
│   ├── riebo/d2m/
│   └── insee/is-tr-50/
├── works/                        # Real mission portfolio
│   ├── index.html                # Filterable listing (Category/Drone/Payload)
│   ├── mapper-plus-nakhon-nayok-golf/
│   ├── surveyor-ultra-iii-nakhon-nayok-golf/
│   ├── gvi-h600-terrain-survey/
│   ├── gvi-h800-large-scale-terrain/
│   ├── riebo-d2m-oblique-mapping/
│   ├── sony-ilx-lr1-orthophoto/
│   ├── chcnav-aa10-corridor/
│   └── voyager-forest-survey/
├── events/
│   ├── ys-demo-day-2026/         # Landing + registration
│   ├── dronetech-asia-2024/
│   ├── intergeo-2024/
│   ├── malaysia-2024/
│   └── ys-apac-samui/
├── admin/                        # Decap CMS
│   ├── index.html
│   └── config.yml
├── content/                      # CMS-editable content JSON
├── images/
│   ├── models/                   # 3D models (Draco-compressed .glb)
│   │   ├── insee-005/            # INSEE-250 (2.3 MB Draco)
│   │   └── insee-006/            # Home Gen 006 (2.2 MB Draco)
│   ├── payloads/                 # Product renders
│   ├── vendor-samples/           # YS official reference imagery
│   │   └── yellowscan/
│   ├── work/                     # INSEE-branded mission photos
│   │   ├── Insee250+Mapper+/
│   │   ├── Insee250+SurveyorUltra3/
│   │   ├── Insee350+H800/
│   │   └── Insee350+Voyager/
│   ├── events/
│   ├── milestones/
│   └── hero-gallery/
├── robots.txt                    # SEO
├── sitemap.xml                   # 73 URLs
├── netlify.toml                  # Netlify config
├── PROJECT-HANDOFF.md            # This file
└── INSEE-250-Website-Content-Review-Checklist.docx
```

---

## 🎨 Design System

### Brand Colors (page-scoped for payload brand differentiation)
| Brand | Primary | Secondary |
|---|---|---|
| INSEE UAV (default) | `#0084C8` (blue) | `#4FC3F7` (sky) |
| YellowScan | `#F2A900` (amber) | `#4FC3F7` |
| GVI | `#2E7D32` (forest green) | `#66BB6A` |
| CHCNAV | `#F37021` (orange) | `#FFA56F` |
| Sony | `#1A1A1A` (black) | `#A8A8A8` (silver) |
| Riebo | `#1E88E5` (electric blue) | `#64B5F6` |

Common: `--navy: #0A1628`, `--cloud: #EBF5FF`

### Typography
- **Inter** for Latin, **Kanit** for Thai (industrial/aviation feel)
- Thai design system uses Kanit — earlier iteration was Sarabun, user rejected as "not beautiful"

### UI Patterns
- **Mega-menu nav** on all light-theme pages (Products dropdown = 4 columns)
- **Home nav** = dark theme (`bg-[#0A1628]/80`)
- **CTA buttons** = clip-path angled corner (INSEE signature style)
- **Icons** = Material Symbols Outlined 26px (replaced emoji throughout)
- **Cards** = white bg, cloud border, subtle blue glow on hover

### Mobile
- Hamburger drawer (right-side slide-out) on all pages
- FAB (Floating Action Button) — Request Demo bottom-right, pulse animation
- Lang toggle shows **current language** only (Pattern A), click swaps
- Global `overflow-x: hidden` to prevent horizontal scroll
- Force 2x2 grid for "By the Numbers" (was 4-col overflow)

---

## 🌟 Key Features

### 1. INSEE-250 Configurator (Three.js)
- **File:** `products/insee-250/index.html` (Card 4.7)
- Interactive 3D model (INSEE-250) with payload picker
- Rotates via OrbitControls; user selects payload from 6-icon grid → updates float preview
- Uses Draco-compressed .glb (2.3 MB, was 94 MB .obj)
- HDR environment lighting (`3 point beige.hdr`)

### 2. Home Hero — 3D UAV
- Rotating INSEE-250 Gen 006 model in hero right column
- File: `images/models/insee-006/006.draco.glb` (2.2 MB)
- Lighting toned down: `toneMappingExposure: 0.75`, `environmentIntensity: 0.5`

### 3. /works/ Portfolio
- **Filter by:** Category / Drone (INSEE-250, INSEE-350, DJI M400) / Payload
- Filter UI: collapsible button (`Filter` chip → panel slides down)
- Cards show brand-colored payload badge
- 8 work pages, each has: Hero + Project Specs + Flight Params Table + Gallery

### 4. Vendor Sample Gallery (YS payload pages)
- 5 YS pages have vendor sample carousels (Navigator: 29 images, Mapper Ultra: 14)
- Carousel: hero image + thumbnail strip + arrows + counter + lightbox
- Grid layout for smaller sample sets (Voyager: 8, Explorer: 6, etc.)
- Note in gallery: "Vendor reference — not INSEE UAV missions"

### 5. Real Mission Teaser
- Each YS page with matching work page (Mapper+, Voyager) has "Real Mission Showcase" teaser
- 3 preview images + link to full `/works/` page
- Reduces payload page length; keeps work details in `/works/`

### 6. Featured Work (INSEE-250, INSEE-350 pages)
- 3 payload showcases per platform with **mixed portrait+landscape** image grid
- Mobile: portrait Featured (aspect 3:4, full row) + 4 Results (2x2 landscape 4:3)

### 7. CloudStation Viewer Auto-Download
- **File:** `products/yellowscan/software/cloudstation-viewer/index.html`
- Form submission → captures lead in Netlify Forms → auto-triggers download from `https://software.yellowscan.com/cloudstationviewer/latest/win64`
- Fallback link if browser blocks auto-download
- Success message: "Starting CloudStation Viewer download..."

### 8. Events Pages
- YS Demo Day 2026 (main landing + registration form)
- DronTech Asia 2024, INTERGEO 2024 (past events, Wix CDN images)
- Malaysia 2024, YS APAC Samui (new, hosted images)
- YS APAC Samui includes Mission Results cards linking to Nakhon Nayok Golf works

### 9. Bilingual (TH + EN)
- Folder pattern: `/` = TH default, `/en/` = English mirror
- Every page has hreflang tags
- Language toggle button in nav (mobile shows only current language)
- Content translated per page (not JS toggle)

---

## 🚀 Deployment

### Netlify
- **Site name:** `insee-uav`
- **Deploys from:** GitHub `main` branch
- **Auto-build:** on every push
- **Custom domain:** `inseeuav.com` (primary, per current setting) + `www.inseeuav.com`
- **SSL:** Let's Encrypt (auto-renew)
- **Free plan:** 300 credits/month
  - Production deploys: ~15 credits each
  - Bandwidth: ~1 credit per ~700 MB
  - Web requests: minimal

### DNS Setup (at Wix — External DNS method)
| Record | Value |
|---|---|
| A (root) | `75.2.60.5` (Netlify Anycast) |
| CNAME (`www`) | `insee-uav.netlify.app` |
| NS | `ns8.wixdns.net`, `ns9.wixdns.net` (Wix — not editable) |
| MX | *(none — no email service)* |

**Wix Premium Plan:** should be cancelled (site inactive). Keep domain subscription (~$14.95/yr).

### Push Workflow (VS Code Terminal)
```bash
cd /Users/kirami/insee-deploy
git add -A
git commit -m "..."
git push origin main
```

**Git repo size:** ~800 MB (dominated by images; 3D models now compressed).

---

## 💰 Credits & Cost Management

### Current Usage (7 Jul 2026 snapshot)
- **Total consumed:** 202.8 credits
  - Production deploys: 45 (3 deploys)
  - Bandwidth: 155.7
  - Web requests: 2
- **Remaining:** 116 credits (Free plan, resets monthly)

### Post-3D-Optimization
- Bandwidth burn rate dropped from ~22 credits/day → ~1-2 credits/day
- Steady state: **Free plan is sufficient** if pushes stay ≤4/month
- User decided against Pro plan for now, will re-evaluate

### Billing Setup (in progress)
User attempted to set up Netlify Team billing under company name "Thai Sky Vision Co., Ltd." but hit "Billing address is invalid" — likely because address was in Thai script. Netlify requires **Latin characters** for billing address. Tax ID (0115565033623) may need separate field.

---

## 🎯 Timeline & Key Milestones

| Date | Event |
|---|---|
| Pre-June 2026 | Site designed + built (INSEE-250, INSEE-350, YS payloads, i18n) |
| 31 May 2026 | CEO/support team feedback meeting |
| 20 Jun 2026 | Major update rollout (Brand CI, Nakhon Nayok works, event pages, Vendor Galleries) |
| 2 Jul 2026 | Site pushed to Netlify (`insee-uav.netlify.app`) |
| 2 Jul 2026 evening | DNS migrated Wix → Netlify (A record + CNAME) |
| **3 Jul 2026** | **YS Demo Day @ IMPACT Forum Hall** — website live for the event |
| 7 Jul 2026 | Mobile responsive comprehensive overhaul, hamburger drawer, FAB, 9-point mobile fixes |
| 7 Jul 2026 evening | 3D model optimization (186 MB → 3.6 MB via Draco) |
| 8 Jul 2026 (today) | Material fix + Home lighting adjustment + billing setup |

---

## 📝 Known Pending Items

### 3D Configurator Phase 2
- Currently: model + payload picker (image switcher)
- Phase 2 target: swap 3D payload asset when picker changes (need per-payload .glb files)

### Content Pending
- **Malaysia 2024 event:** waiting on CEO for exact date + attendee list
- **YS APAC Samui event:** mission details from CEO
- **Vendor sample images pending:**
  - `images/vendor-samples/yellowscan/surveyor-ultra-iii/` (empty)
  - `images/vendor-samples/yellowscan/venturer/` (empty)
  - `images/vendor-samples/riebo/`, `gvi/`, `chcnav/`, `sony/` (empty subfolders)

### CMS
- Decap CMS configured at `/admin/` but user (Smith) hasn't tested login flow
- Needs Netlify Identity setup + user invite

### Task #15 (still in_progress)
- "Dataset Request — H600 form + Zapier guide" — carry-over from earlier, may be obsolete

---

## 🧑‍🤝‍🧑 User Profile — Smith / "มี่"

**Nickname:** มี่ · **Email:** smith.boon@gmail.com

**Role:** Marketing lead at INSEE UAV / Thai Sky Vision. **Not a developer** — but hands-on with content, image organization, and now the website itself.

### Working Style (Important!)
- **Teach mode:** Prefers step-by-step guidance in Thai, especially for anything technical (DNS, git, terminal)
- **Push strategy:** Batches changes and pushes once at the end (Netlify credits mindful)
- **Live Preview:** Uses VS Code Live Preview to test locally — doesn't want frequent Netlify builds
- **Feedback style:** Direct, specific ("แก้ตรงนี้ให้หน่อย", screenshots of what's wrong)
- **Communication:** Thai language primary; comfortable mixing English tech terms

### Working Directory
- User's mac: `/Users/kirami/insee-deploy` (mounted in Claude at `/Users/kirami/insee-deploy`)
- Uses VS Code + Terminal (no separate IDE)
- Has Wix and Netlify accounts; comfortable with cloud dashboards but not CLI-heavy work

---

## 🧠 Key Decisions & Rationale (Design/Content)

### Nakhon Nayok Golf Course (originally "Koh Samui")
- Real work: LiDAR survey of a golf course in **Nakhon Nayok** — was mislabeled Koh Samui initially (early stub was created during YS APAC Samui event context)
- Fully renamed: URL slugs `-samui-golf` → `-nakhon-nayok-golf`, all references updated
- YS APAC Samui event page (different content) still exists and correctly references Koh Samui

### YS payload page structure (post-refactor)
- **BEFORE:** Each YS page had inline "Real Mission Showcase" with full flight params + gallery
- **AFTER:** YS pages have compact teaser → link to `/works/` for full mission details
- Rationale: Reduces payload page length, separates "product info" from "real work"

### Brand CI palettes (Task #64, #66)
- Requested by CEO: "Each payload page should feel like the vendor's own brand"
- Researched brand colors: GVI (green), CHCNAV (orange, 2024 rebrand), Sony (black), Riebo (electric blue on navy — from Rainpoo brochure)
- Applied via `--blue` and `--sky` CSS variable overrides + rgba literal replacements

### Rejected: Full YS Demo Day 2026 event content
- Landing page exists + registration form live
- Content specific to the July 3rd event, may need updating post-event

### 3D Models — Gen 5 vs Gen 6
- Home shows **Gen 006** (newer, roomier body)
- INSEE-250 Configurator shows **Gen 005** (existing version customers know)
- Both loaded via Draco-compressed .glb

---

## 🔧 Common Tasks Reference

### Add a new work page
1. Create folder `works/<slug>/` + `en/works/<slug>/`
2. Copy template from existing work page (e.g., `gvi-h600-terrain-survey`)
3. Update content: hero, project specs, flight parameters, gallery
4. Add card to `works/index.html` + `en/works/index.html` + Home `Featured Work` (if featured)
5. Update mega-menu nav across all 73 pages (there's a Python batch script pattern)

### Add a new YS payload
1. Create page `products/yellowscan/<slug>/`
2. Add to mega-menu YellowScan LiDAR column (all 73 pages)
3. Add to `works/index.html` filter Payload options (if has work case)
4. Add vendor sample folder `images/vendor-samples/yellowscan/<slug>/`

### Push a change
```bash
cd /Users/kirami/insee-deploy
git status --short
git add -A
git commit -m "descriptive message"
git push origin main
# Netlify auto-builds in ~1-2 min
```

### Optimize 3D model (if adding new)
```bash
# Convert .obj → .glb + Draco
# Sandbox has /tmp/tools/node_modules/.bin/obj2gltf + gltf-pipeline
obj2gltf -i model.obj -o model.glb --binary
gltf-pipeline -i model.glb -o model.draco.glb --draco.compressionLevel 10
```

### Batch CSS/HTML across 73 pages
Use Python script pattern with `subprocess.run(['find','.','-name','index.html','-not','-path','*/admin/*'])` — many examples in git history.

---

## 🚨 Gotchas & Watch-outs

### 1. HTML orphan divs (had a big bug)
- When batch-editing with regex on many HTML files, easy to leave orphan `<div>` blocks
- Event pages (Malaysia, YS APAC Samui) had `hero-meta-item` orphans that closed `page-content` div early → Highlights section broke out to full width
- **Always verify** `div` open/close balance after batch changes: `opens vs closes count`

### 2. Wix domain migration — external DNS approach
- Chose Path A (External DNS, keep Wix nameservers) for speed
- If ever switching to Netlify Nameservers (Path B): must change NS records at Wix, propagation up to 48 hours

### 3. Netlify Free plan — bandwidth is main cost
- Production deploy = ~15 credits (fixed)
- Bandwidth = ~1 credit per 700 MB
- **3D optimization** cut bandwidth burn from 22/day → ~1-2/day
- Don't over-push; batch changes

### 4. Thai fonts + web
- Sarabun tested and rejected ("not beautiful")
- Kanit is current — retains industrial/aviation feel
- Both loaded from Google Fonts

### 5. Tailwind CDN limitations
- Uses runtime JIT — no config file
- All utilities compile client-side
- Some Tailwind Play plugins available (forms, container-queries)
- Custom colors via arbitrary values: `bg-[#0A1628]/80`

### 6. Image folder confusion (was a big issue)
- `/images/work/Insee250+Mapper+OEM/` = general Samui survey (Mapper+ OEM version)
- `/images/work/Insee250+Mapper+/` = **golf course** (Mapper+ non-OEM, 11 shots)
- Symbols `+` in folder names must be URL-encoded as `%2B` in HTML

### 7. Multiple language paths in EN pages
- EN pages should use `/en/...` paths in nav, not bare `/...`
- Old bug had EN Event pages pointing to TH pages — fixed in Task #81

---

## 📚 Reference Files

### CMS
- `/admin/config.yml` — Decap CMS collections config
- `/content/*.json` — CMS-editable content

### Netlify
- `/netlify.toml` — build & headers config
- Netlify Forms: forms in HTML need `data-netlify="true"` + hidden `form-name` input

### Docs
- `INSEE-250-Website-Content-Review-Checklist.docx` — spec sheet + content review checklist for support team

### Sitemap
- `/sitemap.xml` — 73 URLs for Google Search Console
- `/robots.txt` — allows all, disallows `/admin/`

---

## 🎯 Recommended First Actions for New Claude Session

If continuing work:

1. **Read memory files** at `/Users/kirami/Library/Application Support/Claude/local-agent-mode-sessions/.../memory/` for user context
2. **Check git status** — see what's uncommitted
3. **Ask user:** "What are you working on today?" — user tasks vary (content updates, new payload, bug fixes, image optimization, etc.)
4. **Beware of long conversations** — avoid batch pushing many small commits (bandwidth cost)

If new feature request:
1. Check if it should be page-specific or global (73-page pattern)
2. If global, use Python batch script pattern
3. Test in Live Preview first
4. Batch commits before push

---

## 📞 Contact / Links

- **Website:** https://www.inseeuav.com
- **Netlify:** https://app.netlify.com (site: `insee-uav`)
- **GitHub:** https://github.com/kirami18-dev/insee-uav
- **Thai Sky Vision:** https://www.thaiskyvision.com
- **YellowScan (parent):** https://www.yellowscan.com
- **INSEE UAV FB:** https://www.facebook.com/profile.php?id=61581020016653
- **INSEE UAV LinkedIn:** https://www.linkedin.com/company/insee-uav/

---

*Compiled 2026-07-08 by Claude (Sonnet). Site live and stable. Ready for handoff.*
