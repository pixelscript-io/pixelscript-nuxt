<template>
    <div id="page">
          <div id="page-content">
              <div id="subpage-bg"></div>
  
              <div id="page-content-container">
                  <CaseStudyBack />
                  <h1>Case Study: Building Nectar - Smarter Token Pipelines and Flexible UI Components at Privacy Bee</h1>
                  <p class="lead">Lead Design System Engineer</p>
                  <hr class="page-divider-short" />

                  <div class="glass-card case-metrics">
                      <div class="case-metric">
                          <p class="case-metric-value">~40%</p>
                          <p class="case-metric-label">Faster handoffs</p>
                      </div>
                      <div class="case-metric">
                          <p class="case-metric-value">0%</p>
                          <p class="case-metric-label">Design-to-code drift</p>
                      </div>
                      <div class="case-metric">
                          <p class="case-metric-value">High</p>
                          <p class="case-metric-label">Developer adoption</p>
                      </div>
                  </div>

                  <p>As Privacy Bee started growing and shipping more features, we hit a massive engineering wall. Our teams were duplicating work, and our shipping speeds crawled to a halt because of shitty design handoffs and deprecated frameworks.</p>
                  <p>Most people doubted we could build a single, unified design system that worked across all our products without removing what made each app unique. To do it right, we rebuilt our entire frontend using Nuxt 3, pairing it with our new design system which I named Nectar.</p>
                  <p>By running our documentation through VitePress, we connected Figma directly to our live code docs and production repos. The result was a flawless, automated chain where design choices instantly update both the documentation and the live apps without anyone having to manually copy over styles.</p>

                  <img
                      src="/img/preview_case1.png"
                      alt="Nectar design system preview"
                      class="case-image"
                  />

                  <h2>The Friction (What was breaking)</h2>
                  <p>Before Nectar and the Nuxt 3 migration, our development lifecycle was a constant battle against a disconnected stack:</p>
                  <ul>
                    <li><strong>Reinventing the wheel:</strong> Separate teams were constantly rebuilding identical interface elements from scratch. This left us with highly decoupled codebases, inconsistent UI states, and a ton of duplicate styling.</li>
                    <li><strong>We did screw up:</strong> Our first pass at a shared library missed the mark. We brought users into the feedback loop way too early—before we actually had our own build automation and priority processes figured out. Naturally, they didn't love it, so we went back to the drawing board to iron everything out.</li>
                    <li><strong>Manual translation and bloated code:</strong> Every time we tweaked a corner radius, a spacing value, or a brand color inside Figma, the change had to be passed to engineering via static mockups or Slack. Engineers then hardcoded those values, creating miles of redundant custom CSS that bloated our production bundles.</li>
                    <li><strong>The endless visual QA loop:</strong> Instead of focusing on accessibility, usability, or actual feature logic, we spent way too many development cycles stuck in review meetings pushing pixels back and forth.</li>
                  </ul>

                  <img
                      src="/img/preview_case3.png"
                      alt="Nectar design system preview"
                      class="case-image"
                  />

                  <h2>The Architecture</h2>
                  <p>To clear out the clutter, we treated our UI infrastructure like a real software product. We automated the boring stuff with a continuous pipeline that turns design choices directly into production code utilities and live documentation without human intervention.</p>
                  <ol>
                    <li><strong>The Source (Figma):</strong> Designers define and update baseline values (colors, typography, spacing) right inside Figma using Variables.</li>
                    <li><strong>The Output (Code):</strong> The pipeline generates reusable utility functions and component templates that can be used throughout the codebase.</li>
                    <li><strong>The Result (Vitepress):</strong> The pipeline generates live documentation that shows how to use the new utilities and components.</li>
                  </ol>
                  <p>Because VitePress is built on top of Vue, our documentation site renders the exact same production Vue components our apps use. If a token changes in Figma, the documentation updates its live interactive examples and production apps receive the updated style at the exact same moment.</p>

                  <h2>The Strategy</h2>
                  <p>Engineering an adoptable system meant giving developers predictable component code, pairing it with documentation, and providing enough layout freedom so they wouldn't want to detach from the library.</p>

                  <img
                      src="/img/preview_case2.png"
                      alt="Nectar design system preview"
                      class="case-image"
                  />
                  
                  <h3>Living Documentation with VitePress</h3>
                  <p>We knew that if documentation is hard to maintain, it dies. By choosing VitePress, we kept all our documentation inside the codebase as clean Markdown files packed with live, interactive Vue 3 component examples.</p>

                  <h3>Sorting the Backlog with Data</h3>
                  <p>We didn't just pick components out of a hat. To build trust with engineering and maximize early adoption during our massive Nuxt 3 frontend rebuild, we sorted our backlog strategically:</p>
                  <ol>
                    <li><strong>Consumer Need</strong> I audited our legacy repositories, using component instance counts as a proxy for actual developer need. The components used most frequently in production were fast-tracked for tokenization in Nectar.</li>
                    <li><strong>Atomic Sizing:</strong> We built strictly from the smallest pieces up. Because large components naturally rely on smaller building blocks, nailing elements like buttons and text inputs first ensured a highly stable, dependency-free development loop.</li>
                  </ol>

                  <h2>The Payoff</h2>
                  <p>By shifting our UI foundation to automated pipelines, migrating our frontend to Nuxt 3, and launching live documentation via VitePress, Nectar completely changed how Privacy Bee ships software. We removed the need for static design specs, slashed time trapped in visual QA, and ensured production styles always mirror Figma variables in real time. Strict component guardrails and tokenized utilities eliminated messy override CSS and flexible slots plus clear documentation made Nectar a system developers actually want to use.</p>
              </div>
          </div>

          <ReadingFocus />
    </div>
  </template>
  
  <script setup>
      useSeoMeta({
          title: 'PixelScript - Privacy Bee',
          ogTitle: 'PixelScript - Privacy Bee',
          description: 'A privacy-focused web application that helps users take control of their online privacy.',
          ogDescription: 'A privacy-focused web application that helps users take control of their online privacy.',
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