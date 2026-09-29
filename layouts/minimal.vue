<template>
	<div id="app">
		<div id="background"></div>
		<VersionNotice
					label="AI disclaimer"
					message="AI responses may contain slight mistakes."
					link-text="View the non-AI version"
					to="/old"
				/>
		<AppHeader hide-nav show-start-over home-route="/" />
		<div id="content">
			<slot />
		</div>
	</div>
</template>

<style scoped>
	#app {
		@apply bg-zinc-950 w-full min-h-screen flex flex-col overflow-x-clip;
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
