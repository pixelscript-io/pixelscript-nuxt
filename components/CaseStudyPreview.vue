<template>
	<NuxtLink :to="route" class="case-study-card glass-card">
		<div class="case-study-head">
			<div>
				<p class="case-study-eyebrow">Case Study</p>
				<h2 class="case-study-title">{{ title }}</h2>
				<p class="case-study-role">{{ role }}</p>
			</div>
			<div class="case-study-icon" aria-hidden="true">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
					<path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
				</svg>
			</div>
		</div>

		<p class="case-study-excerpt">{{ excerpt }}</p>
	</NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
	title: string
	role: string
	excerpt: string
	metricValue?: string
	metricLabel?: string
	route: string
}>()
</script>

<style scoped>
.case-study-card {
	@apply block no-underline transition-colors duration-300;
	@apply hover:border-white/20;
}

.case-study-head {
	@apply flex items-start justify-between gap-4 mb-4;
}

.case-study-eyebrow {
	@apply text-xs uppercase tracking-wide text-ps-blue-100 font-semibold mb-2;
}

.case-study-title {
	@apply text-lg font-bold text-white;
}

.case-study-role {
	@apply text-sm text-zinc-400 mt-1;
}

.case-study-icon svg {
	@apply w-5 h-5 fill-zinc-50;
}

.case-study-excerpt {
	@apply text-sm text-zinc-300 leading-6 pb-4;
}

.case-study-metric {
	@apply mt-6 pt-4 border-t border-white/10;
}

.case-study-metric-value {
	@apply text-2xl font-bold text-ps-blue-50 leading-none;
}

.case-study-metric-label {
	@apply text-sm text-zinc-400 mt-2 leading-snug;
}
</style>
