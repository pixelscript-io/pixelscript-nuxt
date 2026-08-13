<template>
	<div class="project-container" @click="handleClick">
		<div class="project-head">
			<div class="project-left">
				<p class="project-title">{{ title }}</p>
				<p class="project-desc">{{ description }}</p>
			</div>
			<div class="project-icon" aria-hidden="true">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
			</div>
		</div>
		<div class="project-preview">
			<img :src="image" :alt="`${title} preview`" />
		</div>

		<Teleport to="body">
			<transition name="fade">
				<div v-if="showModal" class="modal" @click="closeFull">
					<div class="modal-content">
						<img :src="fullImage" :alt="`${title} full view`" />
					</div>
				</div>
			</transition>
		</Teleport>
	</div>
</template>

<script setup lang="ts">
const props = withDefaults(
	defineProps<{
		title: string
		description: string
		image: string
		route?: string
		fullImage?: string
	}>(),
	{
		route: '',
		fullImage: '',
	}
)

const router = useRouter()
const showModal = ref(false)

const handleClick = () => {
	if (showModal.value) {
		return
	}

	if (props.fullImage) {
		showModal.value = true
		return
	}

	if (props.route) {
		router.push(props.route)
	}
}

const closeFull = () => {
	showModal.value = false
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

.project-preview img {
	@apply w-full h-full object-cover object-top rounded-sm;
}

.container-sm > .project-preview {
	@apply h-[160px];
}

.modal {
	@apply fixed z-[999] left-0 top-0 w-screen h-screen overflow-auto bg-black bg-opacity-50;
}

.modal-content {
	@apply flex justify-center items-center w-screen h-screen;
}

.modal-content img {
	@apply rounded-md max-h-[calc(100vh-128px)] max-w-[calc(100vw-24px)];
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.2s;
}

.fade-enter-to,
.fade-leave-from {
	opacity: 1;
}
</style>
