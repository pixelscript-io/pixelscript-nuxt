<template>
	<div id="testimonial">
		<div id="testimonial-wrapper">
			<AppSquares position="top" />

			<GridPulseCanvas :grid-size="24" :intensity="0.22" />

			<div id="text-container" v-if="currentTestimonial">
				<p class="testimonial-heading">
					“{{ currentTestimonial.heading }}”
				</p>
				<p class="testimonial-text">
					{{ currentTestimonial.text }}
				</p>
				<p class="testimonial-author">
					{{ currentTestimonial.author }}
				</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import GridPulseCanvas from './GridPulseCanvas.client.vue'

type Testimonial = typeof testimonialsList[number];

const testimonialsList = [
	{
		heading: `Has become one of my favorite collaborators`,
		text: `I've had the pleasure of working with Joe on a fast-moving project that has greatly benefited from his talents. Joe is an intelligent, creative, team-oriented, and highly conscientious designer, and he has quickly become one of my favorite collaborators.`,
		author: 'Kayla Henry, Product Manager',
	},
	{
		heading: `An incredible mentor`,
		text: `Joe's guidance and expertise have been instrumental in helping me grow as a designer. His mentorship is second to none.`,
		author: 'Aidan Powers, Product Designer, Shopify',
	},
	{
		heading: `A design wizard`,
		text: `Joe's ability to create seamless and visually stunning designs has elevated every project we've worked on together.`,
		author: 'Vardit Jonasz, Product Manager, Integrate',
	},
] as const;

const currentTestimonial = ref<Testimonial | null>(null);
const route = useRoute();

const updateTestimonial = () => {
	const randomIndex = Math.floor(Math.random() * testimonialsList.length);
	currentTestimonial.value = testimonialsList[randomIndex];
};

watch(route, () => {
	updateTestimonial();
});

onMounted(() => {
	updateTestimonial();
});
</script>

<style scoped>
	#testimonial {
		@apply border-t border-dashed border-zinc-800 w-full;
	}

	#testimonial-wrapper {
		@apply w-[calc(100%-2rem)];
		@apply lg:w-[1024px] border-x border-dashed border-zinc-800 mx-auto relative bg-gradient-to-t from-ps-blue-50/[.025] to-ps-blue-50/0;
		background-image:
			linear-gradient(rgb(var(--ps-color-accent-glow-rgb) / 0.04) 1px, transparent 1px),
			linear-gradient(90deg, rgb(var(--ps-color-accent-glow-rgb) / 0.04) 1px, transparent 1px);
		background-size: 24px 24px;
	}

	#text-container {
		@apply w-full px-6;
		@apply text-white lg:w-[768px] mx-auto py-10 lg:px-0;
		@apply relative z-10;
	}

	.testimonial-heading {
		@apply text-lg font-semibold text-zinc-50 pb-3;
	}

	.testimonial-text {
		@apply text-sm text-zinc-200 italic leading-6;
	}

	.testimonial-author {
		@apply text-xs text-zinc-500 pt-10;
	}
</style>
