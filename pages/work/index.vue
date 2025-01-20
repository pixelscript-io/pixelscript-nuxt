<template>
  <div id="page">
		<div id="page-content">
			<div id="subpage-bg"></div>

			<div id="page-content-container">
				<h1>Work</h1>
				<p class="lead">Crafting impactful designs and experiences that bring ideas to life.</p>
				<hr class="page-divider-short" />

				<div class="project-grid">
					<ProjectPreview title="Privace Bee" description="User Interface Design" image="/img/preview_privacybee.png" route="/case/privacybee" />
					<ProjectPreview title="Buzz" description="Mobile User Interface Design" image="/img/preview_buzz.png" route="/case/buzz" />
					<ProjectPreview title="Duel" description="Website Design" image="/img/preview_duel.png" route="/case/duel" />
					<ProjectPreview title="Swapchain" description="User Interface Design" image="/img/preview_swapchain.png" route="/case/swapchain" />
					<ProjectPreview title="LiftLog" description="Branding & Mobile User Interface Design" image="/img/preview_liftlog.png" route="/case/liftlog" />
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