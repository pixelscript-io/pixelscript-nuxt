<template>
	<div id="hero">
		<div 
			id="hero-wrapper" 
			@mousemove="updateSpotlight" 
			@mouseleave="hideSpotlight" 
			ref="heroWrapper"
		>
			<CircuitSpotlight 
				ref="spotlightRef"
				@spotlight-move="onSpotlightMove"
			/>

			<GridPulseCanvas :intensity="0.3" />
			
			<AppSquares />

			<div id="headshot">
				<img src="/img/headshot.png" alt="Headshot" />
			</div>

			<div id="bg-gradient">
				<div id="text-container">
					<!-- <img src="/img/headshot_sm.png" alt="Headshot" /> -->
					<p class="hero-heading">
						Hi, I'm Joe and I
						<svg
							aria-hidden="true"
							viewBox="0 0 24 24"
							class="hero-heart inline-block align-[-0.12em] mx-1 h-[1em] w-[1em] text-ps-blue-100"
							fill="currentColor"
						>
							<path
								d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
							/>
						</svg>
						CSS
					</p>
					<p class="hero-subheading">
						I'm a Design System Engineer bridging the gap between pixel-perfect design systems and scalable frontend code.</p>
					<hr class="hero-divider" />
					<p class="hero-text">
						PixelScript is my little personal laboratory where I experiment by combining pixels with code.
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import CircuitSpotlight from './CircuitSpotlight.vue'
import GridPulseCanvas from './GridPulseCanvas.client.vue'

const heroWrapper = ref(null)
const spotlightRef = ref(null)

const updateSpotlight = (event) => {
	spotlightRef.value?.updateSpotlight(event)
}

const hideSpotlight = () => {
	spotlightRef.value?.hideSpotlight()
}

const onSpotlightMove = ({ x, y }) => {
	// Handle spotlight movement if needed
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