<template>
  <div class="image-preview">
    <img :src="image" class="image-preview-img" @click="openFull" />

    <transition name="fade">
      <div class="modal" v-if="showModal" @click="closeFull">
        <div class="modal-content">
          <img :src="fullImage" alt="Full Image" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  image: string
  fullImage: string
}>()

const showModal = ref(false)

const openFull = () => {
  showModal.value = true
}

const closeFull = () => {
  showModal.value = false
}
</script>

<style scoped>
.modal {
  @apply fixed z-[999] left-0 top-0 w-screen h-screen overflow-auto bg-black bg-opacity-50;
}

.modal-content {
  @apply flex justify-center items-center w-screen h-screen;
}

.modal-content img {
  @apply rounded-md max-h-[calc(100vh-128px)] max-w-[calc(100vw-24px)];
}

.image-preview {
  @apply p-4;
  @apply mt-6 border border-zinc-800 lg:p-6 rounded-sm cursor-pointer;
	@apply hover:border-zinc-700;

	transition: all 0.3s;
}

.image-preview-img {
  @apply rounded-sm;
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
