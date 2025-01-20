<template>
  <div id="page">
		<div id="page-content">
			<div id="subpage-bg"></div>

			<div id="page-content-container">
				<h1>Case Study - Buzz</h1>
				<p class="lead">Mobile User Interface Design</p>
				<hr class="page-divider-short" />

				<p>Buzz is a mobile messaging application focused on encrypted communication between peers.</p>

				<ProjectModal image="/img/buzz_1.png" fullImage="/img/buzz_1_full.png" />
				<ProjectModal image="/img/buzz_2.png" fullImage="/img/buzz_2_full.png" />
				<ProjectModal image="/img/buzz_3.png" fullImage="/img/buzz_3_full.png" />
				<ProjectModal image="/img/buzz_4.png" fullImage="/img/buzz_4_full.png" />
			</div>
		</div>
  </div>
</template>

<script setup>
	useSeoMeta({
		title: 'PixelScript - Buzz',
		ogTitle: 'PixelScript - Buzz',
		description: 'A mobile messaging application focused on encrypted communication between peers.',
		ogDescription: 'A mobile messaging application focused on encrypted communication between peers.',
	})
</script>

<style>
	.case-image {
		@apply w-full mt-6 rounded-md;
	}
</style>