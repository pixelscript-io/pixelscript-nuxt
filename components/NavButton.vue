<template>
	<button
		class="nav-button group"
		:class="{ active: isActive }"
		@click="$emit('click')"
	>
		<span class="group-hover:text-zinc-400">{{ label }}</span>
		<div class="hotkey" :class="{ activeHotkey: hotkeyPressed }">{{ hotkey }}</div>
	</button>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const props = defineProps<{
	label?: string
	hotkey?: string
	route?: string
	footer?: boolean
}>()

const route = useRoute()
const router = useRouter()

const isActive = computed(() => route.path === props.route)
const hotkeyPressed = ref(false)

const handleKeydown = (event: KeyboardEvent) => {
	const target = event.target as HTMLElement | null
	if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) return

	if (props.hotkey && event.key.toLowerCase() === props.hotkey.toLowerCase()) {
		hotkeyPressed.value = true
		if (props.route) {
			router.push(props.route)
		}
	}
}

const handleKeyup = (event: KeyboardEvent) => {
	if (props.hotkey && event.key.toLowerCase() === props.hotkey.toLowerCase()) {
		hotkeyPressed.value = false
	}
}

onMounted(() => {
	window.addEventListener('keydown', handleKeydown)
	window.addEventListener('keyup', handleKeyup)
})

onBeforeUnmount(() => {
	window.removeEventListener('keydown', handleKeydown)
	window.removeEventListener('keyup', handleKeyup)
})
</script>

<style scoped>
.nav-button {
	@apply h-8 px-2 rounded-sm bg-transparent flex items-center space-x-2;
}

.nav-button:focus-visible {
	@apply outline-none ring-2 ring-ps-blue-100;
}

.nav-button:focus:not(:focus-visible) {
	@apply outline-none ring-0;
}

.nav-button span {
	@apply text-zinc-500 font-normal text-sm;
}

.active span {
	@apply text-ps-blue-50;
}

.hotkey {
	@apply hidden lg:flex;
	@apply w-5 h-5 bg-transparent border border-zinc-800;
	@apply rounded-sm items-center justify-center;
	@apply text-xs text-zinc-500 uppercase font-medium;
	font-family: var(--ps-font-mono);
	transition: all 0.15s ease;
}

.hotkey.activeHotkey {
	@apply border-zinc-400 text-zinc-400;
}
</style>
