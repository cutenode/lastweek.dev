---
title: Week of 2023-05-03 in withastro
pubDate: 2023-05-10
description: 'A weekly recap of what happened in the withastro organization on GitHub, covering Issues, Pull Requests, and Discussions in all active repos.'
author: 'Tierney Cyren'
image:
    url: 'https://docs.astro.build/assets/full-logo-light.png' 
    alt: 'The full Astro logo.'
tags: ["withastro", "javascript", "web", "front-end"] 
---

# Retrospective for `withastro` from 2023-05-03 to 2023-05-10

Reporting on 29 Issues from 29 authors, 71 Pull Requests from 32 authors, and 23 Discussions from 21 authors.


### astro

#### Open Issues

- context.cookies.set() can't be used multiple times. ([#7058](https://github.com/withastro/astro/issues/7058))
- `@astrojs/vercel/edge` not compatible with `imageService` ([#7057](https://github.com/withastro/astro/issues/7057))
- Splashing Navigation Menu in portfolio template (example/portfolio) ([#7056](https://github.com/withastro/astro/issues/7056))
- Vitest doesn't work with Content Collection APIs ([#7051](https://github.com/withastro/astro/issues/7051))
- When a Svelte component is the only item on an Astro page Tailwind CSS does not get incorporated ([#7050](https://github.com/withastro/astro/issues/7050))
- Vercel Analytics Speed Insights errors due to missing env var ([#7048](https://github.com/withastro/astro/issues/7048))
- `pagesGlobToRssItems` throwing unexpectedly with apparently valid items ([#7039](https://github.com/withastro/astro/issues/7039))
- HMR doesn't handle scss file changes with @use ([#7035](https://github.com/withastro/astro/issues/7035))
- Error 500 using Astro.glob in hybrid mode with adapter-node ([#7033](https://github.com/withastro/astro/issues/7033))
- Typescript starter template doesn't include required commands ([#7031](https://github.com/withastro/astro/issues/7031))
- Wrong path when Prerender is true ([#7026](https://github.com/withastro/astro/issues/7026))
- Build with netlify adapter fail ([#7024](https://github.com/withastro/astro/issues/7024))
- Redirects and content collections at the same time give warning or error ([#7023](https://github.com/withastro/astro/issues/7023))
- CSS files not routing correctly and TW not generated in `dist` build output ([#7021](https://github.com/withastro/astro/issues/7021))

#### Open Pull Requests

- `@astrojs/image`: Add `fetchpriority` to `Picture` types ([#7059](https://github.com/withastro/astro/pull/7059))
- fix(image): Fix astro:assets from interfering with SSR query params ending with image extensions ([#7055](https://github.com/withastro/astro/pull/7055))
- [ci] update lockfile ([#7054](https://github.com/withastro/astro/pull/7054))
- fix: don't exit the program is dependencies don't install ([#7052](https://github.com/withastro/astro/pull/7052))
- Allow `Astro.locals` to be set by adapters ([#7049](https://github.com/withastro/astro/pull/7049))
- Escape closing script tag when using define:vars ([#7044](https://github.com/withastro/astro/pull/7044))
- refactor(astro): emit `entry.mjs` to import pages via dynamic import ([#7036](https://github.com/withastro/astro/pull/7036))
- fix: types ([#7028](https://github.com/withastro/astro/pull/7028))

#### Merged Pull Requests

- fix: properly prefix endpoint path with base in SSR ([#7047](https://github.com/withastro/astro/pull/7047))
- [Markdoc] Validation and debugging improvements ([#7045](https://github.com/withastro/astro/pull/7045))
- [ci] release ([#7043](https://github.com/withastro/astro/pull/7043))
- [ci] release ([#7037](https://github.com/withastro/astro/pull/7037))
- Fix `astro:assets` SSR error ([#7034](https://github.com/withastro/astro/pull/7034))
- fix middleware typing export ([#7032](https://github.com/withastro/astro/pull/7032))
- Fix generation for routes defined using getStaticPaths ([#7029](https://github.com/withastro/astro/pull/7029))

#### Closed Issues

- Typescript errors when directly importing Sveltekit component ([#7053](https://github.com/withastro/astro/issues/7053))
- ⚠️ Issue vue3 vue-i18n Introduced problem ([#7046](https://github.com/withastro/astro/issues/7046))
- index page not found for site root (/) when using content collection ([#7038](https://github.com/withastro/astro/issues/7038))
- Tailwind integration not support to load tailwind.config.ts ([#7030](https://github.com/withastro/astro/issues/7030))
- Repeating class names in output HTML ([#7027](https://github.com/withastro/astro/issues/7027))
- Astro 2.4.2 requires `shamefully-hoist` when using pnpm, markdown pages, and assets ([#7022](https://github.com/withastro/astro/issues/7022))

#### Closed Pull Requests

- HTML minification ([#7042](https://github.com/withastro/astro/pull/7042))
- HTML minification ([#7041](https://github.com/withastro/astro/pull/7041))
- fix(sitemap): use pages to build the sitemap ([#7040](https://github.com/withastro/astro/pull/7040))
- Update consts.ts ([#7025](https://github.com/withastro/astro/pull/7025))

### docs

#### Open Issues

- Hybrid rendering ([#3226](https://github.com/withastro/docs/issues/3226))
- Environment variables ([#3191](https://github.com/withastro/docs/issues/3191))

#### Open Pull Requests

- i18n(es): Update of `google-firebase.mdx`, `kinsta.mdx` & `images.mdx`  ([#3229](https://github.com/withastro/docs/pull/3229))
- en-only: fix typos in `backend.mdx` ([#3228](https://github.com/withastro/docs/pull/3228))
- i18n(pt-BR): translated `backend.mdx` ([#3227](https://github.com/withastro/docs/pull/3227))
- i18n(es-ES): translated `astro-syntax` ([#3222](https://github.com/withastro/docs/pull/3222))
- Improve `<RecipeLinks>` i18n support ([#3221](https://github.com/withastro/docs/pull/3221))
- i18n(es): Multiple pages updates  ([#3214](https://github.com/withastro/docs/pull/3214))
- i18n(es): Translated `middleware-no-data-or-next-called.mdx` ([#3209](https://github.com/withastro/docs/pull/3209))
- Add Xata guide to BE Recipe section ([#3207](https://github.com/withastro/docs/pull/3207))
- New recipe: Call endpoints from the server ([#3202](https://github.com/withastro/docs/pull/3202))
- i18n(ko): Update getting-stated.mdx ([#3195](https://github.com/withastro/docs/pull/3195))
- Sort tutorial pages by directory name only ([#3187](https://github.com/withastro/docs/pull/3187))

#### Open Discussions

- Recipe Ideas 🧑‍🍳 ([#2894](https://github.com/withastro/docs/discussions/2894))
- Add Imba support & docs ([#3169](https://github.com/withastro/docs/discussions/3169))
- Add search integration to docs? ([#3150](https://github.com/withastro/docs/discussions/3150))
- astro command to generate a markdown file ([#2979](https://github.com/withastro/docs/discussions/2979))

#### Merged Pull Requests

- ci: update integration docs ([#3225](https://github.com/withastro/docs/pull/3225))
- 🔥 add firestore recipe 🔥 ([#3223](https://github.com/withastro/docs/pull/3223))
- fix: handle inline highlight due to rehype-optimize-static ([#3220](https://github.com/withastro/docs/pull/3220))
- add recipes as search category ([#3219](https://github.com/withastro/docs/pull/3219))
- Link Firebase pages to each other ([#3218](https://github.com/withastro/docs/pull/3218))
- i18n(ja): Update the translation about stubs ([#3216](https://github.com/withastro/docs/pull/3216))
- i18n(es): Fix typo in `partytown.mdx` ([#3212](https://github.com/withastro/docs/pull/3212))
- i18n(es): Translated `locals-not-an-object.mdx` ([#3211](https://github.com/withastro/docs/pull/3211))
- i18n(es): Translated `locals-not-serializable.mdx` ([#3210](https://github.com/withastro/docs/pull/3210))
- i18n(es): Translated `middleware-not-aresponse.mdx` ([#3208](https://github.com/withastro/docs/pull/3208))
- Fix escaped code in code copy button ([#3206](https://github.com/withastro/docs/pull/3206))
- Fix Firebase guide description ([#3205](https://github.com/withastro/docs/pull/3205))
- mention YAML in Markdown ([#3203](https://github.com/withastro/docs/pull/3203))
- Correct middleware docs (see withastro/astro#7010) ([#3200](https://github.com/withastro/docs/pull/3200))
- how about add korean in translation languages ([#3198](https://github.com/withastro/docs/pull/3198))
- i18n(ko): Translated `project-structure.mdx` ([#3197](https://github.com/withastro/docs/pull/3197))
- i18n(ja): Fix typo in client-side-scripts.mdx ([#3196](https://github.com/withastro/docs/pull/3196))
- i18n(ja): Add backend.mdx ([#3194](https://github.com/withastro/docs/pull/3194))
- i18n(ja): Update nav.ts ([#3193](https://github.com/withastro/docs/pull/3193))
- Update tsconfig.json ([#3192](https://github.com/withastro/docs/pull/3192))

#### Closed Issues

- Some code highlighting ranges are incorrect ([#3215](https://github.com/withastro/docs/issues/3215))
- ⚠️ Issue: UNABLE_TO_VERIFY_LEAF_SIGNATURE error in GraphQL fetch ([#3213](https://github.com/withastro/docs/issues/3213))
- Link to i18n locale page forced by search engine language ([#3199](https://github.com/withastro/docs/issues/3199))
- Entity code copied from tutorial snippets instead of `<` HTML symbol ([#3186](https://github.com/withastro/docs/issues/3186))

#### Closed Pull Requests

- Add docs for accessing locals in ssr ([#3224](https://github.com/withastro/docs/pull/3224))
- Revert "Optimize static mdx (#3184)" ([#3217](https://github.com/withastro/docs/pull/3217))
- Fix HTML entity encoding issue in copy button ([#3201](https://github.com/withastro/docs/pull/3201))
- Add decoding for additional unicode hex characters ([#3190](https://github.com/withastro/docs/pull/3190))
- Properly decode html entities in copy button ([#3189](https://github.com/withastro/docs/pull/3189))
- Update 4.mdx ([#3188](https://github.com/withastro/docs/pull/3188))

### language-tools

#### Open Issues

- 💡 RFC: Prettier shouldn't be required to edit astro files ([#531](https://github.com/withastro/language-tools/issues/531))
- 🐛 BUG: Invalid syntax highlighting with single-quote inline js call in html ([#530](https://github.com/withastro/language-tools/issues/530))

#### Open Pull Requests

- fix: Fix TypeScript plugin compatibility with TS 5.0 ([#532](https://github.com/withastro/language-tools/pull/532))

#### Closed Issues

- 🐛 BUG: Using windows line endings causes astro compiler crash ([#529](https://github.com/withastro/language-tools/issues/529))

### compiler

#### Open Pull Requests

- [ci] release ([#792](https://github.com/withastro/compiler/pull/792))

#### Merged Pull Requests

- fix(windows): Fix crash when transforming files with Windows-style line endings ([#791](https://github.com/withastro/compiler/pull/791))

### starlight

#### Merged Pull Requests

- Show social icon links in header ([#35](https://github.com/withastro/starlight/pull/35))
- [ci] release ([#34](https://github.com/withastro/starlight/pull/34))
-  `astro:content` -> `astro/zod` to import zod ([#33](https://github.com/withastro/starlight/pull/33))
- Update dependencies ([#32](https://github.com/withastro/starlight/pull/32))
- [ci] release ([#31](https://github.com/withastro/starlight/pull/31))
- Set up package publishing ([#30](https://github.com/withastro/starlight/pull/30))
- Rename to “Starlight” ([#29](https://github.com/withastro/starlight/pull/29))

### roadmap

#### Open Pull Requests

- Specify a final comment period ([#582](https://github.com/withastro/roadmap/pull/582))
- HTML Minification RFC ([#581](https://github.com/withastro/roadmap/pull/581))

#### Open Discussions

- Move content collection config outside `src/content/` ([#551](https://github.com/withastro/roadmap/discussions/551))
- Markdoc's Future ([#554](https://github.com/withastro/roadmap/discussions/554))
- Markdown Enhancements ([#424](https://github.com/withastro/roadmap/discussions/424))
- Companies & Websites Using Astro ([#521](https://github.com/withastro/roadmap/discussions/521))
- Provide a Platform-Agnostic File System API (or Documentation) ([#578](https://github.com/withastro/roadmap/discussions/578))
- Handling Status Responses ([#546](https://github.com/withastro/roadmap/discussions/546))
- Support for wider variety of compression options with image assets ([#580](https://github.com/withastro/roadmap/discussions/580))
- Idea: watch mode for build ([#273](https://github.com/withastro/roadmap/discussions/273))
- Integration to Render Jupyter Notebooks as Pages ([#579](https://github.com/withastro/roadmap/discussions/579))
- Allow switching between Vercel edge and serverless on a per route/api basis ([#559](https://github.com/withastro/roadmap/discussions/559))
- Parallel async components rendering ([#577](https://github.com/withastro/roadmap/discussions/577))
- A way to not use <!DOCTYPE html> ([#266](https://github.com/withastro/roadmap/discussions/266))
- Rich querying  API for content collections ([#574](https://github.com/withastro/roadmap/discussions/574))
- Interface to Create Fixture-based Astro Test Environment ([#576](https://github.com/withastro/roadmap/discussions/576))
- Flexibility of generating content slugs at run time ([#575](https://github.com/withastro/roadmap/discussions/575))
- Improve markdown code blocks: adding language and user attributes ([#491](https://github.com/withastro/roadmap/discussions/491))
- Add ability to specify sitemap file name ([#573](https://github.com/withastro/roadmap/discussions/573))
- CLI command for creating Collection content ([#553](https://github.com/withastro/roadmap/discussions/553))
- Give easy access to the scoped class name ([#570](https://github.com/withastro/roadmap/discussions/570))

### prettier-plugin-astro

#### Open Pull Requests

- Correctly pass options to embedded parsers ([#339](https://github.com/withastro/prettier-plugin-astro/pull/339))

### astro.build

#### Open Pull Requests

- ci: update showcase ([#669](https://github.com/withastro/astro.build/pull/669))
- ci: update themes and integrations ([#668](https://github.com/withastro/astro.build/pull/668))