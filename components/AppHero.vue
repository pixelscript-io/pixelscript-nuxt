<template>
	<div id="hero">
		<div id="hero-wrapper">
			<AppSquares />

			<img src="/img/logo_text.svg" alt="PixelScript Logo" id="logo" />
			<img src="/img/grid.svg" alt="Grid" />
		</div>
	</div>
</template>

<script setup>

</script>

<style scoped>
	#hero {
		@apply border-b border-dashed border-zinc-800 w-full h-[320px];
	}

	#hero-wrapper {
		@apply w-[1024px] border-x border-dashed border-zinc-800 mx-auto h-[320px] relative;

		background: rgb(69, 137, 255);
		background: linear-gradient(0deg, rgba(69, 137, 255, 0.025) 0%, rgba(69, 137, 255, 0) 100%);
	}

	#logo {
		@apply absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2;
	}
</style>