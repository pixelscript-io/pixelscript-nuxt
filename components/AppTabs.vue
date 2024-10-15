<template>
	<div id="tabs">
		<div id="tabs-wrapper">
			<AppSquares />
		</div>
	</div>
</template>

<script setup>

</script>

<style scoped>
	#tabs {
		@apply border-b border-dashed border-zinc-800 w-full h-14 z-10;
	}

	#tabs-wrapper {
		@apply w-[1024px] bg-zinc-950 border-x border-b border-dashed border-zinc-800 mx-auto h-14 relative;
	}
</style>