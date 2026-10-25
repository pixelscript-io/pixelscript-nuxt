<template>
  <div id="page">
		<div id="page-content">
			<div id="subpage-bg"></div>

			<div id="page-content-container">
				<h1>Work</h1>
				<p class="lead">Crafting impactful designs and experiences that bring ideas to life.</p>
				<hr class="page-divider-short" />

				<FeaturedProject
					title="Tessera"
					role="Creator & Lead Engineer"
					excerpt="A design-system-first frontend framework where tokens, accessibility and variants are enforced at compile time, and AI tools check with the compiler before they write code."
					image="/img/preview_tessera.png"
					route="/case/tessera"
				/>

				<div class="case-study-grid">
					<CaseStudyPreview
						title="Privacy Bee"
						role="Lead Design System Engineer"
						excerpt="A token-driven component system and automated Figma-to-code pipeline that unified a fragmented frontend."
						route="/case/nectar"
					/>
					<CaseStudyPreview
						title="Integrate"
						role="Senior Product Designer"
						excerpt="Refactoring a Material Design fork into a high-density UI ecosystem built for enterprise lead management and complex data workflows."
						route="/case/integrate"
					/>
				</div>

				<hr class="page-divider" />

				<div class="project-grid">
					<ProjectPreview title="Pulse" description="Product Design" image="/img/preview_u1.png" route="/case/pulse" />
					<ProjectPreview
						title="Bento Cards"
						description="Product Design"
						image="/img/preview_cards2.png"
						full-image="/img/full_cards2.png"
					/>
					<ProjectPreview
						title="AI Bento Cards"
						description="Graphic Design"
						image="/img/preview_cards.png"
						full-image="/img/full_cards.png"
					/>
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
	useSeoMeta({
		title: 'PixelScript - Work',
		ogTitle: 'PixelScript - Work',
		description: 'Joe Berthelot\'s most recent design projects and case studies.',
		ogDescription: 'Joe Berthelot\'s most recent design projects and case studies.',
	})
</script>

<style>
	.case-study-grid {
		@apply grid grid-cols-1 gap-6;
		@apply lg:grid-cols-2 lg:gap-8;
	}

	.project-grid {
		@apply grid grid-cols-1 gap-8;
	}
</style>