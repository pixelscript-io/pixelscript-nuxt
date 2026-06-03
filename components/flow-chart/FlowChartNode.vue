<template>
	<div class="flow-node">
		<motion.div
			class="flow-node-circle"
			:initial="reducedMotion ? false : { scale: 0, opacity: 0 }"
			:animate="{ scale: 1, opacity: 1 }"
			:transition="{
				delay: index * 0.35,
				duration: 0.45,
				type: 'spring',
				stiffness: 280,
				damping: 22,
			}"
		/>
		<motion.p
			v-if="label"
			class="flow-node-label"
			:initial="reducedMotion ? false : { opacity: 0, y: 6 }"
			:animate="{ opacity: 1, y: 0 }"
			:transition="{ delay: index * 0.35 + 0.15, duration: 0.35 }"
		>
		</motion.p>
	</div>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'

defineProps<{
	label?: string
	index: number
	reducedMotion?: boolean
}>()
</script>

<style scoped>
.flow-node {
	@apply flex flex-col items-center;
}

.flow-node-circle {
	@apply w-10 h-10 rounded-full border-2 border-ps-blue-100 bg-zinc-950;
	box-shadow: 0 0 16px rgba(69, 137, 255, 0.12);
}

.flow-node-label {
	@apply text-xs font-medium text-zinc-400;
}
</style>
