<template>
	<div class="logo-grid">
		<div
			v-for="logo in logos"
			:key="logo.name"
			class="logo-grid-item glass-card"
		>
			<img
				v-if="logo.src"
				:src="logo.src"
				:alt="logo.alt || logo.name"
				class="logo-grid-image"
			/>
			<span v-else class="logo-grid-name">{{ logo.name }}</span>
		</div>
	</div>
</template>

<script setup lang="ts">
type Logo = {
	name: string
	src?: string
	alt?: string
}

defineProps<{
	logos: Logo[]
}>()
</script>

<style scoped>
.logo-grid {
	@apply grid grid-cols-2 gap-3 mb-12 mt-4;
	@apply sm:grid-cols-3 sm:gap-4;
	@apply lg:grid-cols-4;
}

.logo-grid-item {
	@apply flex items-center justify-center min-h-[72px] px-4 py-5;
	@apply transition-colors duration-300 hover:border-white/20;
}

.logo-grid-image {
	@apply max-h-7 w-full object-contain opacity-70 transition-opacity duration-300;
}

.logo-grid-item:hover .logo-grid-image {
	@apply opacity-100;
}

.logo-grid-name {
	@apply text-sm font-medium text-zinc-400 text-center leading-snug transition-colors duration-300;
}

.logo-grid-item:hover .logo-grid-name {
	@apply text-zinc-200;
}
</style>
