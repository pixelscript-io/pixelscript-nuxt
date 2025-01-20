<template>
	<button class="nav-button group" :class="{ active: isActive, footer: footer }">
		<span class="group-hover:text-zinc-400">{{ label }}</span>
		<div class="hotkey" :class="{ activeHotkey: hotkeyPressed }">{{ hotkey }}</div>
	</button>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const props = defineProps({
  label: {
    type: String,
    default: 'Button',
    required: true,
  },
  hotkey: {
    type: String,
    default: 'X',
    required: true,
  },
  route: {
    type: String,
    default: '/',
    required: true,
  },
  footer: {
    type: Boolean,
    default: false,
  },
});

const route = useRoute();
const router = useRouter();

const isActive = computed(() => route.path === props.route);
const hotkeyPressed = ref(false);

let keydownListener;
let keyupListener;

const isFocusableElement = (target) =>
  target.tagName === 'INPUT' || target.tagName === 'TEXTAREA';

const addListeners = () => {
  if (process.client) {
    keydownListener = (event) => {
      if (!isFocusableElement(event.target) && event.key === props.hotkey.toLowerCase()) {
        hotkeyPressed.value = true;
        router.push(props.route);
      }
    };

    keyupListener = (event) => {
      if (!isFocusableElement(event.target) && event.key === props.hotkey.toLowerCase()) {
        hotkeyPressed.value = false;
      }
    };

    window.addEventListener('keydown', keydownListener);
    window.addEventListener('keyup', keyupListener);
  }
};

onMounted(() => {
  if (process.client) {
    addListeners();
  }
});
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

	.nav-button.footer {
		@apply pr-0;
	}

	.nav-button .hotkey {
    @apply hidden;
		@apply w-5 h-5 bg-transparent border border-zinc-800 rounded-sm lg:flex items-center justify-center text-xs text-zinc-500 uppercase font-medium;
		font-family: "Source Code Pro", monospace;
		transition: all 0.1s;
	}

	.hotkey.activeHotkey {
		@apply border-zinc-400 text-zinc-400;
	}
</style>