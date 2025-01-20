<template>
  <div id="page">
		<div id="page-content">
			<div id="subpage-bg"></div>

			<div id="page-content-container">
				<h1>Case Study - Privacy Bee</h1>
				<p class="lead">User Interface Design</p>
				<hr class="page-divider-short" />

				<p>Privacy Bee is a privacy-focused web application that helps users take control of their online privacy. The app scans the web for your exposed information on data broker websites and automatically removes them to keep your private information secure and out of the public eye.</p>

				<ProjectModal image="/img/privacybee_1.png" fullImage="/img/privacybee_1_full.png" />
				<ProjectModal image="/img/privacybee_2.png" fullImage="/img/privacybee_2_full.png" />
				<ProjectModal image="/img/privacybee_3.png" fullImage="/img/privacybee_3_full.png" />
			</div>
		</div>
  </div>
</template>

<script setup>
	useSeoMeta({
		title: 'PixelScript - Privacy Bee',
		ogTitle: 'PixelScript - Privacy Bee',
		description: 'A privacy-focused web application that helps users take control of their online privacy.',
		ogDescription: 'A privacy-focused web application that helps users take control of their online privacy.',
	})
</script>

<style>
	.case-image {
		@apply w-full mt-6 rounded-md;
	}
</style>