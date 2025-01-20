<template>
	<div class="project-container" @click="goTo(route)">
		<div class="project-head">
			<div class="project-left">
				<p class="project-title">{{ title }}</p>
				<p class="project-desc">{{ description }}</p>
			</div>
			<div class="project-icon">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
			</div>
		</div>
		<div class="project-preview">
			<img :src="image" alt="Project Preview" />
		</div>
	</div>
</template>

<script setup>
	import { defineProps } from 'vue'

	const router = useRouter()

	// Define props
	const props = defineProps({
		title: {
			type: String,
			required: true,
			default: ''
		},
		description: {
			type: String,
			required: true,
			default: ''
		},
		image: {
			type: String,
			required: true,
			default: ''
		},
		route: {
			type: String,
			required: true,
			default: ''
		}
	})

	const goTo = (route) => {
		router.push(route)
	}

</script>

<style scoped>
.project-container {
		@apply bg-zinc-950 rounded-sm border border-zinc-800 flex flex-col overflow-hidden flex-1 cursor-pointer;
		@apply hover:border-zinc-700;

		transition: all 0.3s;
	}

	.project-head {
		@apply p-4;
		@apply flex items-center justify-between lg:p-8;
	}

	.project-left {
		@apply flex flex-col;
	}

	.project-title {
		@apply text-base text-zinc-50 font-semibold;
	}

	.project-desc {
		@apply text-sm text-zinc-500;
	}

	.project-icon > svg {
		@apply w-6 h-6 fill-zinc-50;
	}

	.project-preview {
		@apply px-4 h-[120px];
		@apply lg:px-8 lg:h-[240px];
	}

	.container-sm > .project-preview {
		@apply h-[160px];
	}
</style>