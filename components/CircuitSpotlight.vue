<template>
	<div class="circuit-container" ref="containerRef">
		<div class="circuit-base"></div>
		<div 
			class="circuit-highlight" 
			:style="spotlightStyle"
		></div>
	</div>
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue'

const emit = defineEmits(['spotlight-move'])
const containerRef = ref(null)
const mouseX = ref(0)
const mouseY = ref(0)
const isHovering = ref(false)
let rafId = null

const updateSpotlightPosition = (event) => {
	if (!containerRef.value) return
	
	// Cancel any pending animation frame
	if (rafId) {
		cancelAnimationFrame(rafId)
	}

	// Schedule the update on the next animation frame
	rafId = requestAnimationFrame(() => {
		const rect = containerRef.value.getBoundingClientRect()
		mouseX.value = event.clientX - rect.left
		mouseY.value = event.clientY - rect.top
		isHovering.value = true
		emit('spotlight-move', { x: mouseX.value, y: mouseY.value })
	})
}

// Cleanup on component unmount
onUnmounted(() => {
	if (rafId) {
		cancelAnimationFrame(rafId)
	}
})

// Expose methods for parent component
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
	background-image: url('/img/circuit.svg');
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