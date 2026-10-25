<template>
	<div class="circuit-container" ref="containerRef">
		<div class="circuit-base"></div>
		<div
			class="circuit-highlight"
			:style="spotlightStyle"
		>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, computed, onUnmounted } from 'vue'

const emit = defineEmits<{
	(e: 'spotlight-move', payload: { x: number; y: number }): void
}>()
const containerRef = ref<HTMLElement | null>(null)
const mouseX = ref<number | null>(0)
const mouseY = ref<number | null>(0)
const isHovering = ref<boolean | null>(false)
let rafId: number | null = null

const updateSpotlightPosition = (event: MouseEvent) => {
	if (!containerRef.value) return

	if (rafId) {
		cancelAnimationFrame(rafId)
	}

  rafId = requestAnimationFrame(() => {
    if (!containerRef.value) return
	const rect = containerRef.value.getBoundingClientRect()
	mouseX.value = event.clientX - rect.left
	mouseY.value = event.clientY - rect.top
	isHovering.value = true
	emit('spotlight-move', { x: mouseX.value, y: mouseY.value })
  })
}

onUnmounted(() => {
	if (rafId) {
		cancelAnimationFrame(rafId)
	}
})

defineExpose({
	updateSpotlight: updateSpotlightPosition,
	hideSpotlight: () => {
		isHovering.value = false
		if (rafId) {
			cancelAnimationFrame(rafId)
			rafId = null
		}
	}
})

const spotlightStyle = computed(() => ({
	'--mouse-x': `${mouseX.value}px`,
	'--mouse-y': `${mouseY.value}px`,
	opacity: isHovering.value ? 1 : 0
}))
</script>

<style scoped>
.circuit-container {
	@apply absolute inset-0;
	will-change: transform;
}

.circuit-base,
.circuit-highlight {
	@apply absolute inset-0;
	pointer-events: none;
	z-index: 0;
	background-image:
		linear-gradient(var(--ps-color-grid-line) 1px, transparent 1px),
		linear-gradient(90deg, var(--ps-color-grid-line) 1px, transparent 1px);
	background-size: 32px 32px;
}

.circuit-base {
	opacity: 1;
}

.circuit-highlight {
	opacity: 0;
	transition: opacity 0.15s ease;
	--spotlight-size: 300px;
	--spotlight-fade-start: 30%;
	--spotlight-fade-end: 70%;
	-webkit-mask-image: radial-gradient(
		circle var(--spotlight-size) at var(--mouse-x) var(--mouse-y),
		black var(--spotlight-fade-start),
		transparent var(--spotlight-fade-end)
	);
	mask-image: radial-gradient(
		circle var(--spotlight-size) at var(--mouse-x) var(--mouse-y),
		black var(--spotlight-fade-start),
		transparent var(--spotlight-fade-end)
	);
	will-change: mask-image, -webkit-mask-image;
}
</style>
