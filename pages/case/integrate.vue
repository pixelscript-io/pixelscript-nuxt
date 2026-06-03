<template>
    <div id="page">
          <div id="page-content">
              <div id="subpage-bg"></div>
  
              <div id="page-content-container">
                  <CaseStudyBack />
                  <h1>Case Study: Architecting a High-Density UI Ecosystem for Integrate</h1>
                  <p class="lead">Senior Product Designer & Lead Front-End Developer</p>
                  <hr class="page-divider-short" />

                  <div class="glass-card case-metrics">
                      <div class="case-metric">
                          <p class="case-metric-value">85%</p>
                          <p class="case-metric-label">Reduction in CSS overrides</p>
                      </div>
                      <div class="case-metric">
                          <p class="case-metric-value">20+</p>
                          <p class="case-metric-label">Reusable UI components built</p>
                      </div>
                      <div class="case-metric">
                          <p class="case-metric-value">4x</p>
                          <p class="case-metric-label">Faster dashboard load times</p>
                      </div>
                  </div>

                  <h2>The Backstory: The "Oh Crap" Realization</h2>
                  <p>When I first dove into the product, Integrate was doing some incredibly heavy lifting behind the scenes. It was acting as the literal bodyguard for enterprise marketing databases, ingesting massive pipelines of lead data from events, social channels, and web forms, validating it, and shipping it clean to massive CRMs like Marketo and Salesforce.</p>
                  <p>But out on the frontend surface, the interface was held together by a default, out-of-the-box fork of Google Material Design.</p>
                  <p>Google Material is fantastic if you're building a consumer app or a clean mobile calendar. But when your power users are marketing ops managers who need to map complex API boundaries, set data governance filters, and stare at data-dense pacing dashboards all day? Material started to break under the weight of it all. It was too padded, too rigid, and lacked the specialized layout ergonomics needed for intense, tabular software. The devs were constantly writing custom, one-off CSS overrides just to fit huge data grids onto a single screen, leading to serious codebase bloat and massive design-to-code drift.</p>

                  <h2>The Puzzle: Mutating the Fork</h2>
                  <p>Instead of executing a total redesign which is a fun designer fantasy but a massive business liability, we treated it as a refactoring puzzle. Because my role split the difference between visual design and production code, I didn't just hand off static mockups; I lived inside our Angular repository, fixing application bugs and systematically rewriting components from the structural foundation up. This was actually when I fell in love with JavaScript.</p>
                  <p>We took that original Material Design fork and completely re-engineered it into a custom, standalone design system designed specifically for enterprise data orchestration.</p>
                  <p>Here's how we made it happen:</p>
                  <ol>
                    <li>Layout Ergonomics: B2B lead management is nothing but spreadsheets and data tables. I stripped out Material's aggressive white space and built a tight, high-density layout grid. We engineered inline validation states and custom data cells so that if a user uploaded a messy lead file with 10,000 rows, the system could flag formatting errors instantly without breaking their flow.</li>
                    <li>The Field Mapping Interface: One of our biggest UX hurdles was designing the flow where users map incoming data fields to their internal systems. This required a highly interactive, drag-and-drop mapping matrix that standard Material elements couldn't even dream of supporting. I ran user research studies, built rapid prototypes, and coded a completely new mapping component that made setting up complex API rules feel natural.</li>
                    <li>Working with Angular: To maximize dev velocity, I personally rewrote our core components inside our Angular repo. We turned our modified elements into strict, predictable, and highly reusable components. This meant that when a developer needed to stand up a new analytics dashboard or campaign view, they could stitch it together with our UI primitives like Legos.</li>
                  </ol>

                  <h2>Tracking Reality</h2>
                  <p>Building a system is one thing but making sure it actually works in production is another. I implemented front-end tracking systems to analyze exactly how users behaved inside our validation workflows and dashboards. If the data showed users stuck or experiencing errors on a specific campaign setup screen, we went right back into the code to smooth out the components.</p>

                  <h2>What I Learned</h2>
                  <p>To build trust with engineering and maximize early adoption during our massive rebuild, we sorted our backlog strategically:</p>
                  <ol>
                    <li>Enterprise users deserve beautiful tools, too. There's an old, lazy assumption in tech that B2B software is allowed to look like a clunky 1995 database just because people are paid to use it.</li>
                    <li>If you design it, you should understand how it behaves in the repo. Splitting my time between design and development was a massive superpower. We completely eliminated traditional handoff friction because our components' visual specs perfectly mirrored their programmatic logic right out of the box.</li>
                    <li>It is incredibly tempting to ship a quick, messy bug fix to get a feature out the door. But taking the time to step back, refactor the design system, and build it properly always pays you back tenfold in future development velocity.</li>
                  </ol>
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
          @apply w-full mt-6 rounded-md;
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