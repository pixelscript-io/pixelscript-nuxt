<template>
  <div id="page">
		<AppHero />

		<div id="page-content">
			<div id="page-content-container">
				<p>I've dedicated the last fifteen years to building sophisticated and intuitive products for clients of all sizes, ranging from small startups to large corporations.</p>
				<p>I combine my passion for meticulous visual design, user experience research and CSS wizardry to create pixel-perfect digital experiences.</p>

				<hr class="page-divider" />

				<div id="skill-grid">
					<div>
						<h2>Product Design</h2>
						<p class="skill-subtext">
							I've had the chance to work with some of the biggest names in the industry. From large multinational agencies like BBDO and Bates Y&R to innovative companies like Loom, Ueno, and Herman Miller.
						</p>
						<div class="app-list">
							<div class="app">
								<div class="app-logo">
									<img src="/img/logo_figma.svg" alt="Figma" />
								</div>
								<p class="app-name">Figma</p>
							</div>
							<div class="app">
								<div class="app-logo">
									<img src="/img/logo_zeplin.svg" alt="Zeplin" />
								</div>
								<p class="app-name">Zeplin</p>
							</div>
							<div class="app">
								<div class="app-logo">
									<img src="/img/logo_photoshop.svg" alt="Photoshop" />
								</div>
								<p class="app-name">Photoshop</p>
							</div>
						</div>
					</div>
					<div>
						<h2>UX Research</h2>
						<p class="skill-subtext">
							I've had the chance to work with some of the biggest names in the industry. From large multinational agencies like BBDO and Bates Y&R to innovative companies like Loom, Ueno, and Herman Miller.
						</p>
						<div class="app-list">
							<div class="app">
								<div class="app-logo">
									<img src="/img/logo_airtable.svg" alt="Airtable" />
								</div>
								<p class="app-name">Airtable</p>
							</div>
							<div class="app">
								<div class="app-logo">
									<img src="/img/logo_miro.svg" alt="Miro" />
								</div>
								<p class="app-name">Miro</p>
							</div>
							<div class="app">
								<div class="app-logo">
									<img src="/img/logo_segment.svg" alt="Segment" />
								</div>
								<p class="app-name">Segment</p>
							</div>
						</div>
					</div>
					<div>
						<h2>Design Systems</h2>
						<p class="skill-subtext">
							I've had the chance to work with some of the biggest names in the industry. From large multinational agencies like BBDO and Bates Y&R to innovative companies like Loom, Ueno, and Herman Miller.
						</p>
						<div class="app-list">
							<div class="app">
								<div class="app-logo">
									<img src="/img/logo_storybook.svg" alt="Storybook" />
								</div>
								<p class="app-name">Storybook</p>
							</div>
							<div class="app">
								<div class="app-logo">
									<img src="/img/logo_vitepress.svg" alt="VitePress" />
								</div>
								<p class="app-name">VitePress</p>
							</div>
							<div class="app">
								<div class="app-logo">
									<img src="/img/logo_supernova.svg" alt="Supernova" />
								</div>
								<p class="app-name">Supernova</p>
							</div>
						</div>
					</div>
					<div>
						<h2>Front End Development</h2>
						<p class="skill-subtext">
							I've had the chance to work with some of the biggest names in the industry. From large multinational agencies like BBDO and Bates Y&R to innovative companies like Loom, Ueno, and Herman Miller.
						</p>
						<div class="app-list">
							<div class="app">
								<div class="app-logo">
									<img src="/img/logo_vscode.svg" alt="Visual Studio Code" />
								</div>
								<p class="app-name">Visual Studio Code</p>
							</div>
							<div class="app">
								<div class="app-logo">
									<img src="/img/logo_vue.svg" alt="Vue" />
								</div>
								<p class="app-name">Vue</p>
							</div>
							<div class="app">
								<div class="app-logo">
									<img src="/img/logo_css.svg" alt="CSS" />
								</div>
								<p class="app-name">CSS</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  </div>
</template>

<script setup>

</script>

<style>
	#skill-grid {
		@apply grid grid-cols-2 gap-x-8 gap-y-8;
	}

	.skill-subtext {
		@apply text-zinc-300 text-sm py-2 leading-6;
	}

	.app-list {
		@apply flex flex-col space-y-2 py-4;
	}

	.app {
		@apply flex items-center space-x-3;
	}

	.app-logo {
		@apply w-8 h-8 bg-transparent rounded-sm flex items-center justify-center;
	}

	.app-name {
		@apply text-zinc-200 text-sm font-medium;
	}
</style>