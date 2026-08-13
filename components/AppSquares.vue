<template>
	<div id="square-1" class="square" :class="position" role="presentation"></div>
	<div id="square-2" class="square" :class="position" role="presentation"></div>
</template>

<script setup lang="ts">
import type { Position } from '~/types';

interface Props {
	position?: Position;
}

withDefaults(defineProps<Props>(), {
	position: 'bottom'
});
</script>

<style scoped>
	@keyframes ripple {
		0% {
			box-shadow: 0 0 0 0 rgb(var(--ps-color-neutral-400-rgb) / 0.4);
			transform: rotate(45deg) scale(1);
		}
		70% {
			box-shadow: 0 0 0 4px rgb(var(--ps-color-neutral-400-rgb) / 0);
			transform: rotate(45deg) scale(1.05);
		}
		100% {
			box-shadow: 0 0 0 0 rgb(var(--ps-color-neutral-400-rgb) / 0);
			transform: rotate(45deg) scale(1);
		}
	}

	.square {
		@apply absolute w-2 h-2 bg-zinc-950 border border-zinc-800 rotate-45 z-20 transition-all duration-300;
		transform-origin: center;
		will-change: transform, box-shadow;
	}

	.square:hover {
		animation: ripple 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
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