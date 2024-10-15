<template>
	<div id="square-1" class="square" :class="position"></div>
	<div id="square-2" class="square" :class="position"></div>
</template>

<script setup>
	defineProps({
		position: {
			type: String,
			default: 'bottom',
			required: false
		}
	});
</script>

<style scoped>
	.square {
		@apply absolute w-2 h-2 bg-zinc-950 border border-zinc-800 rotate-45 z-20;
	}

	.bottom {
		@apply -bottom-1;
	}

	.top {
		@apply -top-1;
	}

	#square-1 {
		@apply -left-1;
	}

	#square-2 {
		@apply -right-1;
	}
</style>