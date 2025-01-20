<template>
	<div id="hero">
		<div id="hero-wrapper">
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

</script>

<style scoped>
	#hero {
		@apply border-b border-dashed border-zinc-800 w-full;
	}

	#hero-wrapper {
		@apply w-[calc(100%-2rem)] h-[340px];
		@apply lg:w-[1024px] border-x border-dashed border-zinc-800 mx-auto lg:h-[440px] relative;
		background-image: url('/img/circuit.svg');
	}

	#headshot {
		@apply hidden;
		@apply lg:block h-full bg-transparent aspect-square absolute top-0 right-0 z-10;
	}

	#headshot img {
		@apply object-cover h-full w-full;
	}

	#bg-gradient {
		@apply flex flex-col justify-center absolute inset-0 h-full w-full bg-gradient-to-t from-ps-blue-50/[.025] to-ps-blue-50/0 z-[9];
	}

	#text-container {
		@apply w-full px-6;
		@apply text-white lg:w-[768px] lg:px-0 mx-auto;
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