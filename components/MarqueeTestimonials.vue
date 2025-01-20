<template>
  <div class="marquee">
    <div class="marquee-content">
      <div
        class="testimonial"
        v-for="(testimonial, index) in duplicatedTestimonials"
        :key="index"
      >
        <p class="testimonial-text">
          {{ testimonial.text }}
        </p>
        <p class="testimonial-author">
          {{ testimonial.author }}
        </p>

        <!-- <svg aria-hidden="true" class="bg-grid" style="visibility: visible;">
          <defs>
            <pattern id="testimonial-grid2" width="12" height="12" patternUnits="userSpaceOnUse" x="-1" y="-1">
              <path d="M.5 20V.5H20" fill="none" stroke-dasharray="0"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" stroke-width="0" fill="url(#testimonial-grid2)"></rect>
        </svg> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue'

// Define props
const props = defineProps({
  testimonials: {
    type: Array,
    required: true,
    default: () => []
  },
})

// Create a duplicated testimonials array for seamless scrolling
const duplicatedTestimonials = computed(() => {
  return [...props.testimonials, ...props.testimonials]
})
</script>

<style scoped>
.marquee {
  @apply w-full overflow-hidden bg-transparent py-6 relative;

  /* Apply mask-image for fade effect */
  -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}

.marquee-content {
  @apply flex overflow-hidden relative;
  width: calc(2 * (var(--total-testimonials) * (var(--testimonial-width) + var(--testimonial-margin))));
  animation: scroll var(--animation-duration, 20s) linear infinite;
}

.testimonial {
  @apply bg-zinc-950 p-6 rounded-sm border border-zinc-900 overflow-hidden relative;
  flex: 0 0 auto; /* Prevent flex items from shrinking or growing */
  width: var(--testimonial-width, 300px); /* Set a fixed width for testimonials */
  margin-right: var(--testimonial-margin, 50px); /* Space between testimonials */
}

.testimonial-text {
  @apply text-sm text-zinc-300 italic pb-4;
}

.testimonial-author {
  @apply text-xs text-zinc-500;
}

.testimonial-header {
  @apply flex space-x-4 mb-2;
}

.testimonial-avatar {
  @apply w-10 h-10 rounded-full bg-zinc-500;
}

.bg-grid {
  @apply pointer-events-none absolute inset-0 h-full w-full fill-ps-blue-50/25 stroke-ps-blue-50/25 [mask-image:linear-gradient(to_bottom,_#ffffffad,_transparent)] opacity-[.30];
}

/* Keyframes for scrolling animation */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .testimonial {
    width: 250px;
    margin-right: 30px;
  }
}

@media (max-width: 480px) {
  .testimonial {
    width: 200px;
    margin-right: 20px;
  }
}

/* CSS Variables for customization */
.marquee-content {
  --animation-duration: 90s;
  --testimonial-width: 560px;
  --testimonial-margin: 24px;
  /* Calculate total testimonials for dynamic width */
  --total-testimonials: 5; /* Update this based on your testimonials count */
}

/* Pause animation on hover */
.marquee:hover .marquee-content {
  animation-play-state: paused;
}
</style>
