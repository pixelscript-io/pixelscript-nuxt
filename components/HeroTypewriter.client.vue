<template>
	<span class="hero-suffix">
		<span v-if="middleText">{{ middleText }}</span>
		<motion.svg
			v-if="showHeart"
			aria-hidden="true"
			viewBox="0 0 24 24"
			class="hero-heart inline-block align-[-0.12em] mx-1 mr-2 h-[1em] w-[1em] text-ps-blue-100"
			fill="currentColor"
			:initial="prefersReducedMotion ? false : { scale: 0, opacity: 0, y: -10 }"
			:animate="{ scale: 1, opacity: 1, y: 0 }"
			:transition="prefersReducedMotion ? { duration: 0 } : { type: 'spring', stiffness: 420, damping: 14, mass: 0.75 }"
		>
			<path
				d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
			/>
		</motion.svg>
		<span v-if="wordText" class="hero-typewriter-word">{{ wordText }}</span>
		<motion.span
			v-if="showCursor && !prefersReducedMotion"
			class="hero-typewriter-cursor"
			aria-hidden="true"
			:animate="{ opacity: [1, 1, 0, 0] }"
			:transition="{
				duration: 1,
				repeat: Infinity,
				ease: 'linear',
				times: [0, 0.49, 0.5, 1],
			}"
		>|</motion.span>
	</span>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = withDefaults(defineProps<{
	words?: string[]
	delayMs?: number
}>(), {
	words: () => ['CSS', 'Vue', 'Figma', 'Docs', 'Git'],
	delayMs: 650,
})

const MIDDLE = ' and I '

type Phase = 'waiting' | 'middle' | 'word' | 'cycle'

const middleText = ref('')
const wordText = ref('')
const showHeart = ref(false)
const showCursor = ref(false)
const prefersReducedMotion = ref(false)

let timeoutId = 0
let phase: Phase = 'waiting'
let middleIndex = 0
let wordIndex = 0
let charIndex = 0
let isDeleting = false

const randomDelay = (base: number, variance = 0.35) => {
	const spread = base * variance
	return base + (Math.random() * spread * 2 - spread)
}

const schedule = (delay: number) => {
	window.clearTimeout(timeoutId)
	timeoutId = window.setTimeout(tick, delay)
}

const tickMiddle = () => {
	middleIndex += 1
	middleText.value = MIDDLE.slice(0, middleIndex)

	if (middleIndex >= MIDDLE.length) {
		showHeart.value = true
		phase = 'word'
		charIndex = 0
		schedule(randomDelay(280, 0.2))
		return
	}

	schedule(randomDelay(55, 0.4))
}

const tickWord = () => {
	const currentWord = props.words[wordIndex]

	if (!isDeleting) {
		charIndex += 1
		wordText.value = currentWord.slice(0, charIndex)

		if (charIndex >= currentWord.length) {
			phase = 'cycle'
			isDeleting = true
			schedule(randomDelay(1800, 0.2))
			return
		}

		schedule(randomDelay(70, 0.45))
		return
	}

	charIndex -= 1
	wordText.value = currentWord.slice(0, charIndex)

	if (charIndex <= 0) {
		isDeleting = false
		wordIndex = (wordIndex + 1) % props.words.length
		schedule(randomDelay(320, 0.25))
		return
	}

	schedule(randomDelay(42, 0.35))
}

const tick = () => {
	if (phase === 'middle') {
		tickMiddle()
		return
	}

	if (phase === 'word' || phase === 'cycle') {
		tickWord()
	}
}

const showAll = () => {
	middleText.value = MIDDLE
	showHeart.value = true
	wordText.value = props.words[0]
}

onMounted(() => {
	prefersReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches

	if (prefersReducedMotion.value) {
		showAll()
		return
	}

	timeoutId = window.setTimeout(() => {
		showCursor.value = true
		phase = 'middle'
		tick()
	}, props.delayMs)
})

onBeforeUnmount(() => {
	window.clearTimeout(timeoutId)
})
</script>

<style scoped>
.hero-suffix {
	@apply inline;
}

.hero-typewriter-word {
	@apply text-ps-blue-50;
}

.hero-typewriter-cursor {
	@apply text-ps-blue-50 font-normal;
	margin-left: 1px;
}

.hero-heart {
	transform-origin: center;
	will-change: transform;
}

.hero-heart:hover {
	animation: heroHeartSpinPulse 520ms cubic-bezier(0.2, 0.9, 0.2, 1) both;
}

@media (prefers-reduced-motion: reduce) {
	.hero-heart:hover {
		animation: none;
	}
}

@keyframes heroHeartSpinPulse {
	0% {
		transform: rotate(0deg) scale(1);
	}
	60% {
		transform: rotate(360deg) scale(1);
	}
	78% {
		transform: rotate(360deg) scale(1.18);
	}
	100% {
		transform: rotate(360deg) scale(1);
	}
}
</style>
