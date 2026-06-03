<template>
	<NuxtLink :to="to" class="case-study-back">
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256"><path d="M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"></path></svg>
		<span>Back</span>
	</NuxtLink>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
	to?: string
}>(), {
	to: '/work',
})
</script>

<style scoped>
.case-study-back {
	@apply inline-flex items-center gap-1.5 mb-6;
	@apply text-sm font-medium text-white no-underline;
	@apply transition-colors duration-200;
}

.case-study-back svg {
	@apply w-4 h-4 fill-white;
}
</style>
