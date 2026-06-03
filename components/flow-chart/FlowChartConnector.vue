<template>
	<div class="flow-connector" aria-hidden="true">
		<motion.div
			class="flow-connector-track"
			:initial="reducedMotion ? false : { scaleX: 0 }"
			:animate="{ scaleX: 1 }"
			:transition="{
				delay: 0.25 + index * 0.35,
				duration: 0.55,
				ease: [0.22, 1, 0.36, 1],
			}"
			style="transform-origin: left center"
		/>
		<motion.div
			v-if="!reducedMotion"
			class="flow-connector-pulse"
			:initial="{ opacity: 0 }"
			:animate="{
				x: ['-100%', '100%'],
				opacity: [0, 1, 1, 0],
			}"
			:transition="{
				x: {
					delay: 0.9 + index * 0.35,
					duration: 2.4,
					repeat: Infinity,
					ease: 'linear',
					repeatDelay: 0.35,
				},
				opacity: {
					delay: 0.9 + index * 0.35,
					duration: 2.4,
					repeat: Infinity,
					ease: 'linear',
					repeatDelay: 0.35,
					times: [0, 0.08, 0.92, 1],
				},
			}"
		/>
	</div>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'

defineProps<{
	index: number
	reducedMotion?: boolean
}>()
</script>

<style scoped>
.flow-connector {
	@apply relative flex-1 h-px min-w-[96px] max-w-[240px] mx-1 overflow-hidden;
}

.flow-connector-track {
	@apply absolute inset-0 bg-zinc-800;
}

.flow-connector-pulse {
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
