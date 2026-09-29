<template>
  <div id="app">
		<div id="background"></div>
		<VersionNotice
			label="Site version"
			message="You're viewing the non-AI version of this site."
			link-text="Try the AI version"
			to="/"
		/>
		<AppHeader home-route="/old" />
		<div id="content">
			<slot />
		</div>
		<AppTestimonial />
		<AppFooter home-route="/old" />
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