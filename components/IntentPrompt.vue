<script setup lang="ts">
import { motion } from 'motion-v'
import { INTENTS, useIntent } from '~/composables/useIntent'

const { phase, q, input, res, followups, ask } = useIntent()
const submit = () => ask(input.value)

// Same entrance sequence as the old site's hero (see composables/useHeroMotion.ts).
const { typewriterDelayMs, fadeTimings, fadeProps, dividerProps } = useHeroMotion()
const formDelay = fadeTimings.text + 0.2
const optionsDelay = fadeTimings.text + 0.35
</script>

<template>
  <!-- Fills whatever space is left under the AI notice and header, so their heights don't matter. -->
  <div class="relative mx-auto flex w-full max-w-[1024px] flex-1 flex-col border-x border-dashed border-zinc-800">
    <div class="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />
    <div class="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#A6C8FF]/[0.025] to-transparent" />
    <!-- Blue pulses that travel along the grid lines (same as the old site's hero). Own layer so content stays on top. -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <ClientOnly><GridPulseCanvas :intensity="0.3" /></ClientOnly>
    </div>

    <!-- Idle -->
    <div v-if="phase === 'idle'" class="relative mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-6 pb-10">
      <motion.p class="mb-2 text-xl font-bold leading-7 text-[#A6C8FF] min-[360px]:text-2xl min-[360px]:leading-8" v-bind="fadeProps(fadeTimings.heading)">Hi, I'm Joe<ClientOnly><HeroTypewriter :delay-ms="typewriterDelayMs" /></ClientOnly></motion.p>
      <motion.p class="max-w-[520px] text-base font-medium leading-6 text-zinc-200" v-bind="fadeProps(fadeTimings.subheading)">I'm a Design System Engineer bridging the gap between pixel-perfect design systems and scalable frontend code.</motion.p>
      <motion.hr class="my-4 w-12 border-t border-[#4589FF]" v-bind="dividerProps(fadeTimings.divider)" />
      <motion.p class="mb-6 max-w-[520px] text-sm leading-6 text-zinc-300" v-bind="fadeProps(fadeTimings.text)">Ask about me, where I've worked, what I've built, or how to reach me, and I'll bring up just that.</motion.p>
      <motion.form class="flex" v-bind="fadeProps(formDelay)" @submit.prevent="submit">
        <input v-model="input" placeholder="e.g. Have you built design systems for enterprise products?" class="relative h-11 min-w-0 flex-1 text-ellipsis rounded-l rounded-r-none border border-r-0 border-zinc-900 bg-zinc-950 px-3.5 text-base text-zinc-100 lg:text-[15px] caret-[#A6C8FF] outline-none placeholder:text-zinc-700 focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-[#4589FF]">
        <button type="submit" class="relative h-11 shrink-0 rounded-l-none rounded-r border border-zinc-900 bg-zinc-950 px-[18px] text-sm font-medium text-zinc-50 transition-colors duration-150 hover:bg-zinc-900 focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-[#4589FF]">Ask</button>
      </motion.form>
      <motion.div class="-ml-2 mt-4 flex flex-col items-start gap-0 lg:mt-5 lg:gap-1" v-bind="fadeProps(optionsDelay)">
        <button v-for="i in INTENTS" :key="i.id" class="group flex h-9 items-center gap-2 rounded-sm px-2 lg:h-8" @click="ask(i.label)">
          <svg viewBox="0 0 256 256" class="size-3.5 shrink-0 fill-zinc-600 lg:hidden" aria-hidden="true"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" /></svg>
          <kbd class="hidden size-5 items-center justify-center lg:flex rounded-sm border border-zinc-800 font-mono text-xs font-medium text-zinc-500 transition-colors duration-150 group-hover:border-zinc-400 group-hover:text-zinc-400">{{ i.hotkey }}</kbd>
          <span class="text-sm text-zinc-500 transition-colors duration-150 group-hover:text-zinc-400">{{ i.label }}</span>
        </button>
      </motion.div>
    </div>

    <!-- Answer -->
    <template v-else>
      <div class="relative flex-1 px-6 pt-6 pb-16">
        <div class="mx-auto flex max-w-3xl flex-col">
          <p class="ps-up font-mono text-[13px] text-zinc-500"><span class="text-[#4589FF]">&gt;</span> {{ q }}</p>

          <div v-if="phase === 'loading'" class="mt-6 flex items-center gap-2.5 text-sm text-zinc-400">
            <span class="ps-pulse size-1.5 rotate-45 bg-[#4589FF]" />Pulling that up…
          </div>

          <div v-else-if="res" class="flex flex-col">
            <p class="ps-up mt-4 text-lg font-medium leading-7 text-zinc-200 [text-wrap:pretty]">{{ res.reply }}</p>
            <div v-if="res.blocks.length" class="ps-bar my-6 w-12 border-t border-[#4589FF]" style="animation-delay:.2s" />
            <AnswerBlocks :blocks="res.blocks" />

            <div class="ps-up mt-10 flex flex-col gap-1.5" style="animation-delay:.45s">
              <p class="font-mono text-xs uppercase tracking-wider text-zinc-600">Keep going</p>
              <div class="-ml-2 flex flex-col items-start gap-0 lg:gap-1">
                <button v-for="(f, n) in followups" :key="f" class="group flex min-h-9 items-center gap-2 rounded-sm px-2 py-1 text-left lg:h-8 lg:min-h-0 lg:py-0" @click="ask(f)">
                  <svg viewBox="0 0 256 256" class="size-3.5 shrink-0 fill-zinc-600 lg:hidden" aria-hidden="true"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" /></svg>
                  <kbd class="hidden size-5 shrink-0 items-center justify-center lg:flex rounded-sm border border-zinc-800 font-mono text-xs font-medium text-zinc-500 transition-colors duration-150 group-hover:border-zinc-400 group-hover:text-zinc-400">{{ n + 1 }}</kbd>
                  <span class="text-sm text-zinc-500 transition-colors duration-150 group-hover:text-zinc-400">{{ f }}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Pinned input -->
      <div class="sticky bottom-0 z-10 border-t border-dashed border-zinc-800 bg-zinc-950 py-3 lg:py-5">
        <form class="mx-auto flex max-w-3xl px-6" @submit.prevent="submit">
          <input v-model="input" placeholder="Ask something else…" class="relative h-11 min-w-0 flex-1 text-ellipsis rounded-l rounded-r-none border border-r-0 border-zinc-900 bg-zinc-950 px-3 text-base text-zinc-100 lg:h-10 lg:text-sm caret-[#A6C8FF] outline-none placeholder:text-zinc-700 focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-[#4589FF]">
          <button type="submit" class="relative h-11 shrink-0 rounded-l-none rounded-r border border-zinc-900 bg-zinc-950 px-[18px] text-sm font-medium lg:h-10 text-zinc-50 transition-colors duration-150 hover:bg-zinc-900 focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-[#4589FF]">Ask</button>
        </form>
      </div>
    </template>
  </div>
</template>

<!-- Global on purpose: AnswerBlocks shares these animation classes. -->
<style>
.ps-up { animation: psUp .55s cubic-bezier(.22, 1, .36, 1) both; }
.ps-bar { transform-origin: left; animation: psBar .45s cubic-bezier(.22, 1, .36, 1) both; }
.ps-pulse { animation: psPulse 1s infinite; }

@keyframes psUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
@keyframes psBar { from { transform: scaleX(0); } to { transform: scaleX(1); } }
@keyframes psPulse { 0%, 100% { opacity: .25; } 50% { opacity: 1; } }

@media (prefers-reduced-motion: reduce) {
  .ps-up, .ps-bar, .ps-pulse { animation: none; }
}
</style>
