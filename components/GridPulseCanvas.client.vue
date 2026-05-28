<template>
	<canvas
		ref="canvasRef"
		class="grid-pulse-canvas"
	/>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

type PulseAxis = 'h' | 'v'
type Pulse = { axis: PulseAxis; idx: number; phase: number; speed: number }

const props = withDefaults(defineProps<{ gridSize?: number; intensity?: number }>(), {
	gridSize: 32,
	intensity: 0.35,
})

const canvasRef = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
	if (!canvasRef.value) return

	const canvas = canvasRef.value
	const ctx = canvas.getContext('2d')
	if (!ctx) return

	const GRID = props.gridSize
	const clamp01 = (value: number) => Math.min(1, Math.max(0, value))
	const intensity = clamp01(props.intensity)
	let animationFrameId = 0
	let t = 0
	let width = 0
	let height = 0

	const pulses: Pulse[] = []
	const containerEl = canvas.parentElement as HTMLElement | null
	if (!containerEl) return

	const resize = () => {
		const dpr = Math.max(1, window.devicePixelRatio || 1)
		const rect = containerEl.getBoundingClientRect()
		width = Math.max(0, Math.floor(rect.width))
		height = Math.max(0, Math.floor(rect.height))

		canvas.width = Math.floor(width * dpr)
		canvas.height = Math.floor(height * dpr)
		canvas.style.width = `${width}px`
		canvas.style.height = `${height}px`
		ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
	}

	const cols = () => Math.ceil(width / GRID)
	const rows = () => Math.ceil(height / GRID)

	const seed = () => {
		pulses.length = 0
		const c = cols()
		const r = rows()

		for (let i = 0; i < 6; i++) {
			pulses.push({
				axis: 'v',
				idx: Math.floor(Math.random() * c),
				phase: Math.random() * Math.PI * 2,
				speed: 0.4 + Math.random() * 0.4,
			})
		}

		for (let i = 0; i < 4; i++) {
			pulses.push({
				axis: 'h',
				idx: Math.floor(Math.random() * r),
				phase: Math.random() * Math.PI * 2,
				speed: 0.3 + Math.random() * 0.3,
			})
		}
	}

	const draw = () => {
		if (!width || !height) {
			animationFrameId = window.requestAnimationFrame(draw)
			return
		}

		ctx.clearRect(0, 0, width, height)
		t += 0.012
		ctx.shadowBlur = 6 * intensity
		ctx.shadowColor = `rgba(0,71,255,${0.35 * intensity})`

		for (const p of pulses) {
			const progress = (Math.sin(t * p.speed + p.phase) + 1) / 2
			const len = 120

			if (p.axis === 'v') {
				const x = p.idx * GRID
				const cy = progress * (height + len) - len / 2
				const grad = ctx.createLinearGradient(x, cy - len / 2, x, cy + len / 2)
				grad.addColorStop(0, 'rgba(0,71,255,0)')
				grad.addColorStop(0.2, `rgba(0,71,255,${0.06 * intensity})`)
				grad.addColorStop(0.5, `rgba(0,71,255,${0.6 * intensity})`)
				grad.addColorStop(1, 'rgba(0,71,255,0)')
				ctx.strokeStyle = grad
				ctx.lineWidth = 1.25
				ctx.beginPath()
				ctx.moveTo(x, cy - len / 2)
				ctx.lineTo(x, cy + len / 2)
				ctx.stroke()
			} else {
				const y = p.idx * GRID
				const cx = progress * (width + len) - len / 2
				const grad = ctx.createLinearGradient(cx - len / 2, y, cx + len / 2, y)
				grad.addColorStop(0, 'rgba(0,71,255,0)')
				grad.addColorStop(0.5, `rgba(0,71,255,${0.5 * intensity})`)
				grad.addColorStop(1, 'rgba(0,71,255,0)')
				ctx.strokeStyle = grad
				ctx.lineWidth = 1.25
				ctx.beginPath()
				ctx.moveTo(cx - len / 2, y)
				ctx.lineTo(cx + len / 2, y)
				ctx.stroke()
			}
		}

		animationFrameId = window.requestAnimationFrame(draw)
	}

	resize()
	seed()
	const resizeObserver = new ResizeObserver(() => {
		resize()
		seed()
	})
	resizeObserver.observe(containerEl)
	window.requestAnimationFrame(() => {
		resize()
		seed()
	})
	animationFrameId = window.requestAnimationFrame(draw)

	onBeforeUnmount(() => {
		window.cancelAnimationFrame(animationFrameId)
		resizeObserver.disconnect()
	})
})
</script>

<style scoped>
.grid-pulse-canvas {
	position: absolute;
	inset: 0;
	pointer-events: none;
	z-index: 47;
	display: block;
	mix-blend-mode: screen;
}
</style>
