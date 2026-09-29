<template>
	<div class="skill-grid">
		<div v-for="skill in skills" :key="skill.title" class="glass-card">
			<h2>{{ skill.title }}</h2>
			<p class="skill-subtext">{{ skill.text }}</p>
			<div class="app-list">
				<div v-for="tool in skill.tools" :key="tool.name" class="app">
					<div class="app-logo">
						<img :src="tool.img" :alt="tool.name" />
					</div>
					<p class="app-name">{{ tool.name }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import data from '~/data/site-content.json'

const skills = data.skills
</script>

<style scoped>
.skill-grid {
	@apply grid grid-cols-1 gap-x-8 gap-y-8;
	@apply md:grid-cols-2;
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
