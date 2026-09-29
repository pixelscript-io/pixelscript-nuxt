<template>
	<NuxtLink :to="target" class="case-study-back">
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256"><path d="M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"></path></svg>
		<span>Back</span>
		<kbd v-if="fromAi" aria-hidden="true">&#9003;</kbd>
	</NuxtLink>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
	to?: string
}>(), {
	to: '/work',
})

// Case studies opened from an AI answer go back to the AI page, not /work.
const route = useRoute()
const router = useRouter()
const fromAi = computed(() => route.query.from === 'ai')
const target = computed(() => (fromAi.value ? '/' : props.to))

// Backspace goes back, on the AI version only.
const onKeydown = (event: KeyboardEvent) => {
	if (!fromAi.value || event.key !== 'Backspace') return
	if (event.metaKey || event.ctrlKey || event.altKey) return
	const el = event.target as HTMLElement | null
	if (el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable)) return
	event.preventDefault()
	router.push(target.value)
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
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

.case-study-back kbd {
	@apply hidden lg:flex ml-1 size-5 items-center justify-center rounded-sm border border-zinc-800;
	@apply text-xs font-medium text-zinc-500;
	font-family: var(--ps-font-mono);
}
</style>
