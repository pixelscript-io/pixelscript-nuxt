<template>
	<div class="flow-chart" aria-label="Process flow">
		<template v-for="(node, index) in nodes" :key="node.id">
			<FlowChartNode
				:label="node.label"
				:index="index"
				:reduced-motion="prefersReducedMotion"
			/>
			<FlowChartConnector
				v-if="index < nodes.length - 1"
				:index="index"
				:reduced-motion="prefersReducedMotion"
			/>
		</template>
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import FlowChartConnector from './FlowChartConnector.vue'
import FlowChartNode from './FlowChartNode.vue'

type FlowNode = {
	id: string
	label?: string
}

withDefaults(defineProps<{
	nodes?: FlowNode[]
}>(), {
	nodes: () => [
		{ id: 'design', label: 'Design' },
		{ id: 'code', label: 'Code' },
		{ id: 'deploy', label: 'Deploy' },
	],
})

const prefersReducedMotion = ref(false)

onMounted(() => {
	prefersReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
})
</script>

<style scoped>
.flow-chart {
	@apply flex flex-col items-center justify-center w-full my-10 px-2;
}
</style>
