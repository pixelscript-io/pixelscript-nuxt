<script setup lang="ts">
import type { AnswerBlock, CardItem } from '~/types/answer'

defineProps<{ blocks: AnswerBlock[] }>()

// A dynamic <component :is> needs the resolved component, not the string 'NuxtLink'.
const NuxtLink = resolveComponent('NuxtLink')

// Case studies opened from an answer use the navigation-free layout (see middleware/ai-case-layout.global.ts).
const aiHref = (href: string) => (href.startsWith('/case/') ? `${href}?from=ai` : href)

const columns = (n: number) => ({ gridTemplateColumns: `repeat(${Math.min(n, 4)}, minmax(0, 1fr))` })
const featuredCards = (items: CardItem[]) => items.filter((c) => !c.compact)
const compactCards = (items: CardItem[]) => items.filter((c) => c.compact)
const stagger = (i: number) => ({ animationDelay: `${Math.min(i, 8) * 0.06}s` })
</script>

<template>
  <div class="flex flex-col gap-6">
    <template v-for="(b, i) in blocks" :key="i">
      <!-- Heading -->
      <h2
        v-if="b.type === 'heading'"
        class="ps-up font-bold text-[#A6C8FF]"
        :class="[b.level === 3 ? 'text-base' : 'text-lg', i > 0 ? 'mt-4' : '']"
        :style="stagger(i)"
      >{{ b.text }}</h2>

      <!-- Paragraph -->
      <p v-else-if="b.type === 'paragraph'" class="ps-up max-w-[68ch] text-base leading-7 text-zinc-300" :style="stagger(i)">{{ b.text }}</p>

      <!-- List -->
      <component
        :is="b.style === 'numbered' ? 'ol' : 'ul'"
        v-else-if="b.type === 'list'"
        class="ps-up flex max-w-[68ch] flex-col gap-4"
        :class="b.style === 'numbered' ? 'list-decimal pl-6 marker:text-zinc-500' : 'list-none'"
        :style="stagger(i)"
      >
        <li
          v-for="(item, n) in b.items"
          :key="n"
          class="relative text-base leading-7 text-zinc-300"
          :class="b.style === 'numbered' ? 'pl-1' : 'pl-6 before:absolute before:left-0 before:top-[0.65em] before:size-1.5 before:rotate-45 before:bg-[#4589FF] before:content-[\'\']'"
        >
          <strong v-if="item.label" class="font-semibold text-zinc-100">{{ item.label }}: </strong>{{ item.text }}
        </li>
      </component>

      <!-- Stats -->
      <div
        v-else-if="b.type === 'stats'"
        class="ps-up relative grid justify-items-center gap-4 border border-white/10 bg-white/[0.01] p-6 backdrop-blur-xl"
        :style="{ ...columns(b.items.length), ...stagger(i) }"
      >
        <div class="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.12] to-transparent opacity-30" />
        <div v-for="s in b.items" :key="s.label" class="relative text-center">
          <p class="text-2xl font-bold leading-none text-[#A6C8FF]">{{ s.value }}</p>
          <p class="mt-2 text-sm leading-snug text-zinc-400">{{ s.label }}</p>
        </div>
      </div>

      <!-- Timeline -->
      <div v-else-if="b.type === 'timeline'" class="ps-up flex flex-col gap-4" :style="stagger(i)">
        <div v-for="(t, n) in b.items" :key="n" class="flex items-baseline gap-3 sm:items-center sm:gap-4">
          <p class="min-w-0 flex-1 text-sm font-medium sm:flex-none" :class="t.highlight ? 'text-[#A6C8FF]' : 'text-zinc-50'">
            {{ t.title }}<template v-if="t.subtitle">, <span class="text-zinc-500">{{ t.subtitle }}</span></template>
          </p>
          <div class="hidden h-px flex-1 bg-zinc-900 sm:block" />
          <p v-if="t.meta" class="shrink-0 whitespace-nowrap font-mono text-sm text-zinc-200">{{ t.meta }}</p>
        </div>
      </div>

      <!-- Cards: featured cards in a 2-column grid, compact project cards in a single column -->
      <div v-else-if="b.type === 'cards'" class="ps-up flex flex-col gap-6" :style="stagger(i)">
        <div v-if="featuredCards(b.items).length" class="grid grid-cols-1 gap-6" :class="{ 'md:grid-cols-2': featuredCards(b.items).length > 1 }">
          <component
            :is="card.href ? NuxtLink : 'div'"
            v-for="(card, n) in featuredCards(b.items)"
            :key="n"
            :to="card.href ? aiHref(card.href) : undefined"
            class="relative flex flex-col overflow-hidden border border-white/10 bg-white/[0.01] p-6 no-underline backdrop-blur-xl"
            :class="card.href ? 'transition-colors duration-300 hover:border-white/20' : ''"
          >
            <div class="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.12] to-transparent opacity-30" />
            <div class="relative flex items-start justify-between gap-4">
              <div>
                <p class="text-lg font-bold leading-7 text-white">{{ card.title }}</p>
                <p v-if="card.subtitle" class="mt-1 text-sm text-zinc-400">{{ card.subtitle }}</p>
              </div>
              <svg v-if="card.href" viewBox="0 0 256 256" class="size-5 shrink-0 fill-zinc-50" aria-hidden="true"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" /></svg>
            </div>
            <p v-if="card.text" class="relative mt-4 text-sm leading-6 text-zinc-300">{{ card.text }}</p>
            <img v-if="card.image" :src="card.image" :alt="`${card.title} preview`" class="relative mt-4 w-full rounded-sm object-cover object-top" :class="featuredCards(b.items).length === 1 ? 'h-[180px] lg:h-[260px]' : 'h-[140px]'">
            <div class="flex-1" />
            <div v-if="card.stats?.length" class="relative mt-4 grid grid-cols-3 gap-3 border-t border-white/10 pt-4">
              <div v-for="s in card.stats" :key="s.label">
                <p class="text-xl font-bold leading-none text-[#A6C8FF]">{{ s.value }}</p>
                <p class="mt-1.5 text-xs leading-tight text-zinc-400">{{ s.label }}</p>
              </div>
            </div>
            <div v-if="card.logos?.length" class="relative mt-4 flex flex-col gap-2">
              <div v-for="l in card.logos" :key="l.name" class="flex items-center gap-3">
                <div class="flex size-8 items-center justify-center"><img :src="l.img" :alt="l.name" class="max-h-full max-w-full"></div>
                <p class="text-sm font-medium text-zinc-200">{{ l.name }}</p>
              </div>
            </div>
          </component>
        </div>

        <div v-if="compactCards(b.items).length" class="grid grid-cols-1 gap-6">
          <component
            :is="card.href ? NuxtLink : 'div'"
            v-for="(card, n) in compactCards(b.items)"
            :key="n"
            :to="card.href ? aiHref(card.href) : undefined"
            class="flex flex-col overflow-hidden rounded-sm border border-zinc-800 bg-zinc-950 no-underline"
            :class="card.href ? 'transition-colors duration-300 hover:border-zinc-700' : ''"
          >
            <div class="flex items-center justify-between gap-4 p-5">
              <div>
                <p class="text-base font-semibold text-zinc-50">{{ card.title }}</p>
                <p v-if="card.subtitle" class="text-sm text-zinc-500">{{ card.subtitle }}</p>
              </div>
              <svg v-if="card.href" viewBox="0 0 256 256" class="size-6 shrink-0 fill-zinc-50" aria-hidden="true"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" /></svg>
            </div>
            <div v-if="card.image" class="h-[120px] px-5 pb-0 lg:h-[200px]">
              <img :src="card.image" :alt="`${card.title} preview`" class="h-full w-full rounded-sm object-cover object-top">
            </div>
            <div class="h-5" />
          </component>
        </div>
      </div>

      <!-- Quote -->
      <figure v-else-if="b.type === 'quote'" class="ps-up max-w-[68ch] border-l-2 border-[#4589FF] pl-4" :style="stagger(i)">
        <blockquote class="text-sm italic leading-6 text-zinc-200">“{{ b.text }}”</blockquote>
        <figcaption class="pt-3 text-xs text-zinc-500">{{ b.author }}</figcaption>
      </figure>

      <!-- Links -->
      <div v-else-if="b.type === 'links'" class="ps-up flex flex-col" :style="stagger(i)">
        <a
          v-for="l in b.items"
          :key="l.label"
          :href="l.url"
          :target="l.url.startsWith('mailto') ? undefined : '_blank'"
          rel="noopener"
          class="flex items-center gap-3 px-0 py-3.5 no-underline transition-[padding,background-color] duration-300 ease-out sm:gap-4 motion-reduce:transition-none [@media(hover:hover)]:hover:bg-white/[0.02] [@media(hover:hover)]:hover:px-6"
        >
          <svg viewBox="0 0 256 256" class="size-6 shrink-0 fill-zinc-500" aria-hidden="true"><path :d="l.icon" /></svg>
          <div class="flex min-w-0 flex-1 flex-col gap-0.5 sm:flex-row sm:items-center sm:gap-0">
            <p class="shrink-0 text-sm font-medium text-zinc-50 sm:w-[120px]">{{ l.label }}</p>
            <p class="min-w-0 truncate font-mono text-[13px] text-zinc-400 sm:flex-1 sm:text-sm">{{ l.detail }}</p>
          </div>
          <svg viewBox="0 0 256 256" class="size-5 shrink-0 fill-zinc-50" aria-hidden="true"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" /></svg>
        </a>
      </div>

      <!-- Image -->
      <figure v-else-if="b.type === 'image'" class="ps-up" :style="stagger(i)">
        <img :src="b.src" :alt="b.alt" class="w-full rounded-md">
        <figcaption v-if="b.caption" class="pt-2 text-xs text-zinc-500">{{ b.caption }}</figcaption>
      </figure>


      <!-- Divider -->
      <hr v-else-if="b.type === 'divider'" class="ps-up border-t border-dashed border-zinc-800" :style="stagger(i)">
    </template>
  </div>
</template>
