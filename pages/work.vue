<template>
  <div id="page">
		<div id="page-content">
			<div id="subpage-bg"></div>

			<div id="page-content-container">
				<h1>Work</h1>
				<p class="lead">My personal mission has always been to create solutions that connect companies and their customers in meaningful ways.</p>
				<hr class="page-divider-short" />

				<div class="project-grid">
					<div class="project-container">
						<div class="project-head">
							<div class="project-left">
								<p class="project-title">Privacy Bee</p>
								<p class="project-desc">User Interface Design</p>
							</div>
							<div class="project-icon">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
							</div>
						</div>
						<div class="project-preview">
							<img src="/img/mockup_light.png" alt="Project Preview" />
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
	.project-container {
		@apply bg-zinc-950 rounded-sm border border-zinc-900 flex flex-col overflow-hidden flex-1 cursor-pointer;
		@apply hover:border-zinc-800;

		transition: all 0.3s;
	}

	.project-head {
		@apply flex items-center justify-between p-8;
	}

	.project-left {
		@apply flex flex-col;
	}

	.project-title {
		@apply text-base text-zinc-50 font-semibold;
	}

	.project-desc {
		@apply text-sm text-zinc-500;
	}

	.project-icon > svg {
		@apply w-6 h-6 fill-zinc-50;
	}

	.project-preview {
		@apply px-8 h-[240px];
	}

	.project-grid {
		@apply grid grid-cols-1 gap-8;
	}

	.container-sm > .project-preview {
		@apply h-[160px];
	}
</style>