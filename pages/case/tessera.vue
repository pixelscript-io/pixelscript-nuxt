<template>
    <div id="page">
          <div id="page-content">
              <div id="subpage-bg"></div>

              <div id="page-content-container">
                  <CaseStudyBack />
                  <h1>Case Study: Tessera - A Frontend Framework Where the Design System Is the Framework</h1>
                  <p class="lead">Creator & Lead Engineer</p>
                  <hr class="page-divider-short" />

                  <div class="glass-card case-metrics">
                      <div class="case-metric">
                          <p class="case-metric-value">13</p>
                          <p class="case-metric-label">Packages, one install</p>
                      </div>
                      <div class="case-metric">
                          <p class="case-metric-value">~9 kB</p>
                          <p class="case-metric-label">Gzipped JS for 11 elements</p>
                      </div>
                      <div class="case-metric">
                          <p class="case-metric-value">0</p>
                          <p class="case-metric-label">Runtime dependencies in core</p>
                      </div>
                  </div>

                  <p>Most frontend frameworks make the component the core abstraction. Design tokens, accessibility, documentation and enforcement get bolted on afterward, so drift from the design system is caught in code review, if it is caught at all.</p>
                  <p>Tessera flips that. It is a design-system-first framework where the contract, the tokens and the compiler come first, and drift becomes a build error instead of a review comment. It is also my answer to a question I kept hitting at Privacy Bee: what if the guardrails lived in the toolchain instead of in a document?</p>

                  <img
                      src="/img/preview_tessera.png"
                      alt="Tessera landing page"
                      class="case-image"
                  />

                  <h2>The Friction (What was breaking)</h2>
                  <ul>
                    <li><strong>Drift is a social problem:</strong> Design systems rely on people remembering to use the right token, the right variant and the right ARIA role. Under deadline pressure, they don't.</li>
                    <li><strong>Docs rot:</strong> Hand-written documentation, accessibility tests and changelogs fall out of sync with the code the moment someone ships a change.</li>
                    <li><strong>AI tools guess:</strong> Coding assistants happily invent raw hex values, off-scale spacing and variants that don't exist, because nothing tells them what the system actually allows.</li>
                    <li><strong>Adoption is all-or-nothing:</strong> Strict enforcement is useless if turning it on in an existing app produces ten thousand errors on day one.</li>
                  </ul>

                  <h2>The Architecture</h2>
                  <p>Tessera is a pnpm monorepo written in strict TypeScript and built on Vite, published as a single package, <code>@pixelscriptio/tessera</code>, with subpath exports. The internal packages stay internal and get bundled in, so the install stays simple while the codebase stays modular.</p>
                  <ol>
                    <li><strong>The Contract:</strong> Every component is a <code>.tess</code> file with a contract, script, template and style block. The contract declares the anatomy, variants, states, ARIA role and contrast pairings once. Types, docs, the playground and accessibility tests are all derived from it.</li>
                    <li><strong>The Tokens:</strong> Tokens use the W3C DTCG format in three tiers (primitive, semantic, component) and compile to CSS custom properties in cascade layers. Themes can override values but can never invent new token names.</li>
                    <li><strong>The Compiler:</strong> It parses, validates the contract, template and styles, then generates DOM-creating functions bound to fine-grained signals. There is no virtual DOM, and the core has zero runtime dependencies.</li>
                  </ol>

                  <img
                      src="/img/tessera_docs.png"
                      alt="Tessera generated documentation site"
                      class="case-image"
                  />

                  <h2>The Strategy</h2>
                  <p>Enforcement only works if people can live with it, so most of the design effort went into making strictness feel helpful instead of hostile.</p>

                  <h3>Errors that tell you the fix</h3>
                  <p>Every error has a stable code, a file location and a "Did you mean" suggestion. Write <code>tone="sucess"</code> and the compiler points at <code>success</code>. Use <code>13px</code> for padding and it suggests the nearest step on the scale. Where a fix is unambiguous, <code>--fix</code> applies it without changing the computed visual result.</p>

                  <h3>A way in for existing code</h3>
                  <p>A baseline records today's violations per file so an existing app can turn enforcement on with zero errors. Counts can only go down, exemptions need a reason and an expiry date, and <code>tessera report</code> tracks the remaining debt so the cleanup is visible.</p>

                  <h3>Everything derived, nothing hand-written</h3>
                  <ul>
                    <li><strong>Docs:</strong> <code>tessera docs</code> generates a documentation app with a page for every component and token group, a contrast checker and coverage reports.</li>
                    <li><strong>Accessibility:</strong> <code>tessera a11y</code> generates axe-core tests for every variant, state and theme, and the docs spell out what automation can't cover.</li>
                    <li><strong>Change management:</strong> <code>tessera diff</code> classifies changes as breaking, additive or cosmetic (a value change that flips a contrast result counts as breaking), and <code>tessera codemod</code> applies renames.</li>
                    <li><strong>Interchange:</strong> Tokens move between DTCG files, Tokens Studio, Penpot, Figma variables and CSS custom properties.</li>
                  </ul>

                  <h3>Beyond .tess files</h3>
                  <p>Not every team will rewrite their app. <code>tessera lint</code> checks CSS against your tokens in any project, and <code>tessera elements</code> builds the design system as custom elements with examples for React, Vue, Svelte and Angular. The starter preset ships 11 elements in about 9 kB of JavaScript and 3 kB of CSS, gzipped.</p>

                  <h3>Built for AI tools</h3>
                  <p>Tessera exports a manifest, generated <code>AGENTS.md</code> and <code>llms.txt</code> files, and a read-only MCP server. Agents can search components, read contracts, resolve a raw value to the nearest token and validate a snippet with the compiler's own checks before they write anything. I treated this as a bet to test, not a claim: in a small informal run, prompts without the tools produced 2 errors across 15 files, and with them, 0 errors across 9. It is a smoke test, not proof, and the site says so.</p>

                  <img
                      src="/img/full_tessera.png"
                      alt="Tessera marketing site"
                      class="case-image"
                  />

                  <h2>The Payoff</h2>
                  <p>Tessera is live at <a href="https://tessera.pixelscript.io/" target="_blank" rel="noopener">tessera.pixelscript.io</a>, with generated docs at <a href="https://tessera-docs.pixelscript.io/" target="_blank" rel="noopener">tessera-docs.pixelscript.io</a> and the source on <a href="https://github.com/pixelscript-io/tessera" target="_blank" rel="noopener">GitHub</a>. It is early development (v0.6) and the API will change, but the core idea already holds up: when tokens, accessibility and variants are enforced by the compiler, the design system stops being a document people are asked to follow and becomes the thing the code is built from.</p>
              </div>
          </div>

          <ReadingFocus />
    </div>
  </template>

  <script setup>
      useSeoMeta({
          title: 'PixelScript - Tessera',
          ogTitle: 'PixelScript - Tessera',
          description: 'A design-system-first frontend framework where tokens, accessibility and variants are enforced at compile time.',
          ogDescription: 'A design-system-first frontend framework where tokens, accessibility and variants are enforced at compile time.',
      })
  </script>

  <style>
      .case-image {
          @apply w-full my-10 rounded-md;
      }

      .case-metrics {
          @apply grid grid-cols-3 gap-4 mb-8 pb-6 justify-items-center;
      }

      .case-metric {
          @apply text-center;
      }

      .case-metric-value {
          @apply text-2xl font-bold text-ps-blue-50 leading-none;
      }

      .case-metric-label {
          @apply text-sm text-zinc-400 mt-2 leading-snug;
      }
  </style>
