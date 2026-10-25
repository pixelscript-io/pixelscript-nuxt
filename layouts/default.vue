<template>
  <div id="app">
		<div id="background"></div>
		<AppHeader home-route="/" />
		<div id="content">
			<slot />
		</div>
		<AppTestimonial />
		<AppFooter home-route="/" />
  </div>
</template>

<script setup>

</script>

<style scoped>
	#app {
		@apply bg-zinc-950 w-full min-h-screen flex flex-col;
	}

	#background {
		@apply w-screen h-screen fixed z-0;
		background-image: url('/img/noise.png');
		background-repeat: repeat;
		opacity: 0.01;
	}

	#content {
		@apply w-full flex-1 flex flex-col;
	}
</style>