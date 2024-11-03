<template>
	<div id="testimonial">
		<div id="testimonial-wrapper">
			<AppSquares position="top" />

			<div id="text-container">
				<p class="testimonial-heading">
					“Has become one of my favorite collaborators”
				</p>
				<p class="testimonial-text">
					I've had the pleasure of working with Joe on a fast-moving project that has greatly benefited from his talents. Joe is an intelligent, creative, team-oriented, and highly conscientious designer, and he has quickly become one of my favorite collaborators.
				</p>
				<p class="testimonial-author">
					Ryan Andersson, VP Global Research & Insights, Herman Miller
				</p>
			</div>

			<svg aria-hidden="true" class="bg-grid" style="visibility: visible;">
				<defs>
					<pattern id="testimonial-grid" width="20" height="20" patternUnits="userSpaceOnUse" x="-1" y="-1">
						<path d="M.5 20V.5H20" fill="none" stroke-dasharray="0"></path>
					</pattern>
				</defs>
				<rect width="100%" height="100%" stroke-width="0" fill="url(#testimonial-grid)"></rect>
			</svg>
		</div>
	</div>
</template>

<script setup>

</script>

<style scoped>
	#testimonial {
		@apply border-t border-dashed border-zinc-800 w-full;
	}

	#testimonial-wrapper {
		@apply w-[1024px] border-x border-dashed border-zinc-800 mx-auto relative bg-gradient-to-t from-ps-blue-50/[.025] to-ps-blue-50/0;
	}

	#text-container {
		@apply text-white w-[768px] mx-auto py-10;
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

	.bg-grid {
		@apply pointer-events-none absolute inset-0 h-full w-full fill-ps-blue-50/25 stroke-ps-blue-50/25 [mask-image:linear-gradient(to_bottom,_#ffffffad,_transparent)] opacity-[.30] rotate-180;
	}
</style>