<template>
	<button class="nav-button group" :class="{ active: isActive }">
		<span class="group-hover:text-zinc-400">{{ label }}</span>
		<div class="hotkey" :class="{ activeHotkey: hotkeyPressed }">{{ hotkey }}</div>
	</button>
</template>

<script setup>
	const props = defineProps({
		label: {
			type: String,
			default: 'Button',
			required: true
		},
		hotkey: {
			type: String,
			default: 'X',
			required: true
		},
		route: {
			type: String,
			default: '/',
			required: true
		}
	});

	const route = useRoute()
	const router = useRouter()

	const isActive = computed(() => route.path === props.route)
	const hotkeyPressed = ref(false)

	onMounted(() => {
		window.addEventListener('keydown', (event) => {
			if (event.key === props.hotkey.toLowerCase()) {
				hotkeyPressed.value = true
				router.push(props.route)
			}
		})

		window.addEventListener('keyup', (event) => {
			if (event.key === props.hotkey.toLowerCase()) {
				hotkeyPressed.value = false
			}
		})
	})
</script>

<style>
	.nav-button {
		@apply h-8 px-2 rounded-sm bg-transparent flex items-center space-x-2 focus:outline-none;
	}

	.nav-button span {
		@apply text-zinc-500 font-normal text-sm;
		transition: all 0.1s;
	}

	.active span {
		@apply text-ps-blue-50;
	}

	.active:hover span {
		@apply !text-ps-blue-50;
	}

	.nav-button .hotkey {
		@apply w-5 h-5 bg-transparent border border-zinc-800 rounded-sm flex items-center justify-center text-xs text-zinc-500 uppercase font-medium;
		font-family: "Source Code Pro", monospace;
		transition: all 0.1s;
	}

	.hotkey.activeHotkey {
		@apply border-zinc-400 text-zinc-400;
	}
</style>