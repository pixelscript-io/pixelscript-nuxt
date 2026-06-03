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
		rgba(0, 71, 255, 0) 0%,
		rgba(0, 71, 255, 0) 35%,
		rgba(69, 137, 255, 0.9) 50%,
		rgba(0, 71, 255, 0) 65%,
		rgba(0, 71, 255, 0) 100%
	);
}
</style>
