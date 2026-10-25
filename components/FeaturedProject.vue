<template>
	<NuxtLink :to="route" class="featured-card glass-card">
		<div class="featured-head">
			<div>
				<p class="featured-eyebrow">Latest Project</p>
				<h2 class="featured-title">{{ title }}</h2>
				<p class="featured-role">{{ role }}</p>
			</div>
			<div class="featured-icon" aria-hidden="true">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
					<path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
				</svg>
			</div>
		</div>

		<p class="featured-excerpt">{{ excerpt }}</p>

		<div class="featured-preview">
			<img :src="image" :alt="`${title} preview`" />
		</div>
	</NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
	title: string
	role: string
	excerpt: string
	image: string
	route: string
}>()
</script>

<style scoped>
.featured-card {
	@apply block no-underline transition-colors duration-300 pb-6 my-8;
	@apply hover:border-white/20;
}

.featured-head {
	@apply flex items-start justify-between gap-4 mb-4;
}

.featured-eyebrow {
	@apply text-xs uppercase tracking-wide text-ps-blue-100 font-semibold mb-2;
}

.featured-title {
	@apply text-lg font-bold text-white;
}

.featured-role {
	@apply text-sm text-zinc-400 mt-1;
}

.featured-icon svg {
	@apply w-5 h-5 fill-zinc-50;
}

.featured-excerpt {
	@apply text-sm text-zinc-300 leading-6 pb-4;
}

.featured-preview {
	@apply h-[160px] lg:h-[280px];
}

.featured-preview img {
	@apply w-full h-full object-cover object-top rounded-sm border border-zinc-800;
}
</style>
