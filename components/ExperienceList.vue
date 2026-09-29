<template>
	<div class="company-list">
		<div v-for="job in jobs" :key="job.id" class="company-row">
			<p class="job-title" :class="{ 'job-hot': highlight.includes(job.id) }">{{ job.role }}, <span>{{ job.company }}</span></p>
			<div class="job-spacer"></div>
			<div class="year-container">
				<p class="job-year">{{ job.startYear }}</p>
				<div class="year-spacer hidden md:block"></div>
				<p class="job-year hidden md:block">{{ job.endYear }}</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import data from '~/data/site-content.json'

withDefaults(defineProps<{
	highlight?: string[]
}>(), {
	highlight: () => [],
})

const jobs = data.experience.jobs
</script>

<style scoped>
.company-list {
	@apply flex flex-col space-y-4;
}

.company-row {
	@apply flex items-center space-x-4;
}

.job-title {
	@apply text-sm font-medium text-zinc-50;
}

.job-title span {
	@apply text-zinc-500;
}

.job-title.job-hot {
	@apply text-ps-blue-50;
}

.job-spacer {
	@apply flex-1 h-[1px] bg-zinc-900;
}

.job-year {
	@apply text-sm text-zinc-200;
	font-family: var(--ps-font-mono);
}

.year-container {
	@apply flex items-center space-x-2;
	min-width: fit-content;
}

.year-spacer {
	@apply h-[1px] bg-zinc-900;
	width: 24px;
}
</style>
