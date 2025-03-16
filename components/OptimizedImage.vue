<template>
  <img
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
    :class="classes"
    loading="lazy"
    decoding="async"
  />
</template>

<script setup lang="ts">
defineProps<{
  src: string
  alt: string
  width?: number
  height?: number
  classes?: string
}>()</script> 