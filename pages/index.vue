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
								<div class="app-logo"></div>
								<p class="app-name">App Name</p>
							</div>
							<div class="app">
								<div class="app-logo"></div>
								<p class="app-name">App Name</p>
							</div>
							<div class="app">
								<div class="app-logo"></div>
								<p class="app-name">App Name</p>
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
								<div class="app-logo"></div>
								<p class="app-name">App Name</p>
							</div>
							<div class="app">
								<div class="app-logo"></div>
								<p class="app-name">App Name</p>
							</div>
							<div class="app">
								<div class="app-logo"></div>
								<p class="app-name">App Name</p>
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
								<div class="app-logo"></div>
								<p class="app-name">App Name</p>
							</div>
							<div class="app">
								<div class="app-logo"></div>
								<p class="app-name">App Name</p>
							</div>
							<div class="app">
								<div class="app-logo"></div>
								<p class="app-name">App Name</p>
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
								<div class="app-logo"></div>
								<p class="app-name">App Name</p>
							</div>
							<div class="app">
								<div class="app-logo"></div>
								<p class="app-name">App Name</p>
							</div>
							<div class="app">
								<div class="app-logo"></div>
								<p class="app-name">App Name</p>
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
		@apply w-8 h-8 bg-zinc-800 rounded-sm;
	}

	.app-name {
		@apply text-zinc-200 text-sm font-medium;
	}
</style>