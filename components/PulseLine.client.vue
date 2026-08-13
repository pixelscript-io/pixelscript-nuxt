<template>
	<div class="pulse-line" aria-hidden="true">
		<div class="pulse-line-track" />

	</div>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'
import { onMounted, ref } from 'vue'

const prefersReducedMotion = ref(false)

onMounted(() => {
	prefersReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
})
</script>

<style scoped>
.pulse-line {
	@apply relative w-full h-px my-8 overflow-hidden;
}

.pulse-line-track {
	@apply absolute inset-0 bg-zinc-900;
}

.pulse-line-highlight {
	@apply absolute top-0 left-0 h-full w-full;
	background: linear-gradient(
		90deg,
		rgb(var(--ps-color-accent-glow-rgb) / 0) 0%,
		rgb(var(--ps-color-accent-glow-rgb) / 0) 35%,
		rgb(var(--ps-color-accent-rgb) / 0.9) 50%,
		rgb(var(--ps-color-accent-glow-rgb) / 0) 65%,
		rgb(var(--ps-color-accent-glow-rgb) / 0) 100%
	);
}
</style>
