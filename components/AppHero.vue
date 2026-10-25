<template>
	<div id="hero">
		<div
			id="hero-wrapper"
			@mousemove="updateSpotlight"
			@mouseleave="hideSpotlight"
			ref="heroWrapper"
		>
			<CircuitSpotlight ref="spotlightRef" />

			<GridPulseCanvas :intensity="0.3" draw-grid />

			<AppSquares />

			<div id="headshot">
				<img src="/img/headshot.png" alt="Headshot" />
			</div>

			<div id="bg-gradient">
				<div
					id="text-container"
					:class="{ 'is-ready': isReady }"
					:key="animationKey"
				>
					<motion.p
						class="hero-heading"
						v-bind="fadeProps(fadeTimings.heading)"
					>
						Hi, I'm Joe<ClientOnly><HeroTypewriter :delay-ms="typewriterDelayMs" /></ClientOnly>
					</motion.p>

					<motion.p
						class="hero-subheading"
						v-bind="fadeProps(fadeTimings.subheading)"
					>
						I'm a Design System Engineer bridging the gap between pixel-perfect design systems and scalable frontend code.
					</motion.p>

					<motion.hr
						class="hero-divider"
						v-bind="dividerProps(fadeTimings.divider)"
					/>

					<motion.p
						class="hero-text"
						v-bind="fadeProps(fadeTimings.text)"
					>
						PixelScript is my little personal laboratory where I experiment by combining pixels with code.
					</motion.p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'
import { ref } from 'vue'
import CircuitSpotlight from './CircuitSpotlight.vue'
import GridPulseCanvas from './GridPulseCanvas.client.vue'

const spotlightRef = ref<InstanceType<typeof CircuitSpotlight> | null>(null)

const { isReady, animationKey, typewriterDelayMs, fadeTimings, fadeProps, dividerProps } = useHeroMotion()

const updateSpotlight = (event: MouseEvent) => {
	spotlightRef.value?.updateSpotlight(event)
}

const hideSpotlight = () => {
	spotlightRef.value?.hideSpotlight()
}
</script>

<style scoped>
	#hero {
		@apply border-b border-dashed border-zinc-800 w-full;
	}

	#hero-wrapper {
		@apply relative w-[calc(100%-2rem)] h-[340px];
		@apply lg:w-[1024px] lg:h-[440px] mx-auto;
		@apply border-x border-dashed border-zinc-800;
	}

	#headshot {
		@apply hidden lg:block;
		@apply absolute top-0 right-0 z-[49];
		@apply h-full bg-transparent aspect-square;
	}

	#headshot img {
		@apply object-cover h-full w-full;
	}

	#bg-gradient {
		@apply absolute inset-0 z-[9];
		@apply flex flex-col justify-center;
		@apply bg-gradient-to-t from-ps-blue-50/[.025] to-ps-blue-50/0;
	}

	#text-container {
		@apply w-full px-6;
		@apply lg:w-[768px] lg:px-0 mx-auto;
		@apply text-white;
		@apply opacity-0 invisible;
	}

	#text-container.is-ready {
		@apply opacity-100 visible;
	}

	#text-container p {
		@apply lg:max-w-[400px];
	}

	#text-container img {
		@apply block mb-6 px-4;
		@apply lg:hidden;
	}

	.hero-heading {
		@apply text-2xl font-bold text-ps-blue-50 mb-2;
	}

	.hero-subheading {
		@apply text-base text-zinc-200 font-medium;
	}

	.hero-divider {
		@apply border-t border-ps-blue-100 w-12 my-4;
	}

	.hero-text {
		@apply text-sm text-zinc-300 leading-6;
	}
</style>
