<template>
  <div class="container mx-auto py-12 lg:py-24">
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 md:grid-cols-3 sm:grid-cols-2">
      <div
        v-for="(logo, index) in logos"
        :key="index"
        class="flex items-center justify-center p-4 rounded-md bg-transparent shadow-inner"
      >
        <img
          :src="logo.src"
          :alt="logo.alt"
          class="max-h-8 object-contain"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

// Define props to accept an array of logo objects
const props = defineProps({
  logos: {
    type: Array,
    required: true,
    default: () => []
  }
})
</script>

<style scoped>
/* Optional: Customize shadow or border styles if needed */
</style>
