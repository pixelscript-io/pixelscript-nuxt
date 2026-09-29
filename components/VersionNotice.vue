<template>
	<aside class="version-notice" :aria-label="label">
		<div class="version-notice-inner">
			<p>{{ message }}</p>
			<NuxtLink :to="to">
				{{ linkText }}
				<svg viewBox="0 0 256 256" aria-hidden="true"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" /></svg>
			</NuxtLink>
		</div>
	</aside>
</template>

<script setup lang="ts">
defineProps<{
	message: string
	linkText: string
	to: string
	label?: string
}>()
</script>

<style scoped>
/* relative + z-10 lifts the banner above the layout's fixed noise layer, which would otherwise swallow clicks. */
.version-notice {
	@apply relative z-10 w-full border-b border-dashed border-zinc-800 bg-zinc-950;
}

.version-notice-inner {
	@apply w-[calc(100%-2rem)] lg:w-[1024px] mx-auto px-6 py-1.5 sm:py-2;
	@apply flex flex-wrap items-center justify-center gap-x-6 gap-y-0.5 text-center;
	@apply sm:justify-between sm:text-left;
	@apply border-x border-dashed border-zinc-800;
}

.version-notice p {
	@apply text-xs leading-5 text-zinc-500;
}

.version-notice a {
	@apply flex shrink-0 items-center gap-1 sm:ml-auto rounded-sm text-xs font-medium leading-5 text-ps-blue-50 no-underline;
	@apply transition-colors duration-150 hover:text-white;
}

.version-notice a svg {
	@apply size-3.5 fill-current transition-transform duration-150;
}

.version-notice a:hover svg {
	@apply translate-x-0.5;
}

.version-notice a:focus-visible {
	@apply outline-none ring-2 ring-ps-blue-100;
}
</style>
