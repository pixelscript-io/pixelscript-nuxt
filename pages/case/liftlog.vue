<template>
  <div id="page">
		<div id="page-content">
			<div id="subpage-bg"></div>

			<div id="page-content-container">
				<h1>Case Study - LiftLog</h1>
				<p class="lead">Branding &amp; Mobile User Interface Design</p>
				<hr class="page-divider-short" />

				<p>LiftLog is a mobile application where users can log and track all of their workout progress.</p>

				<ProjectModal image="/img/liftlog_3.png" fullImage="/img/liftlog_3_full.png" />
				<ProjectModal image="/img/liftlog_1.png" fullImage="/img/liftlog_1_full.png" />
				<ProjectModal image="/img/liftlog_2.png" fullImage="/img/liftlog_2_full.png" />
			</div>
		</div>
  </div>
</template>

<script setup>
	useSeoMeta({
		title: 'PixelScript - LiftLog',
		ogTitle: 'PixelScript - LiftLog',
		description: 'A mobile application where users can log and track all of their workout progress.',
		ogDescription: 'A mobile application where users can log and track all of their workout progress.',
	})

	const { addProjectSchema } = useStructuredData()

	// Add structured data for the project
	addProjectSchema({
		name: 'LiftLog',
		description: 'A mobile application where users can log and track all of their workout progress.',
		image: 'https://pixelscript.io/img/liftlog_1_full.png',
		datePublished: '2024-03'
	})
</script>

<style>

</style>