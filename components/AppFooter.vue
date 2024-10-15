<template>
	<footer>
		<div id="footer-wrapper">
			<AppSquares position="top" />
		</div>
	</footer>
</template>

<script setup>

</script>

<style scoped>
	footer {
		@apply bg-zinc-950 border-t border-dashed border-zinc-800 w-full z-10;
	}

	#footer-wrapper {
		@apply w-[1024px] bg-zinc-950 border-x border-dashed border-zinc-800 mx-auto h-[260px] relative;
	}
</style>