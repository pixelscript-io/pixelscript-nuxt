<template>
  <div id="page">
		<div id="page-content">
			<div id="subpage-bg"></div>

			<div id="page-content-container">
				<h1>Work</h1>
				<p class="lead">My personal mission has always been to create solutions that connect companies and their customers in meaningful ways.</p>
				<hr class="page-divider-short" />

				<div class="project-grid">
					<ProjectPreview title="Privace Bee" description="User Interface Design" image="/img/preview_privacybee.png" route="/case/privacybee" />
					<ProjectPreview title="Duel" description="Website Design" image="/img/preview_duel.png" route="/case/duel" />
					<ProjectPreview title="Swapchain" description="User Interface Design" image="/img/preview_swapchain.png" route="/case/swapchain" />
				</div>
			</div>
		</div>
  </div>
</template>

<script setup>

</script>

<style>
	.project-grid {
		@apply grid grid-cols-1 gap-8;
	}
</style>