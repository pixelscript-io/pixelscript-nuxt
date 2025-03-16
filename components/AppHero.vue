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
			
			<AppSquares />

			<div id="headshot">
				<img src="/img/headshot.png" alt="Headshot" />
			</div>

			<div id="bg-gradient">
				<div id="text-container">
					<!-- <img src="/img/headshot_sm.png" alt="Headshot" /> -->
					<p class="hero-heading">
						Hi, I'm Joe
					</p>
					<p class="hero-subheading">
						I'm a Product Designer, User Experience Researcher and Front End Developer based in Washington.
					</p>
					<hr class="hero-divider" />
					<p class="hero-text">
						PixelScript is my little personal laboratory where I showcase my work and experiment by combining pixels with code.
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import CircuitSpotlight from './CircuitSpotlight.vue'

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
		@apply absolute top-0 right-0 z-10;
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
</style>