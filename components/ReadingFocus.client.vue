<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'

let cleanup: (() => void) | null = null

onMounted(() => {
	const container = document.querySelector('#page-content-container')
	if (!(container instanceof HTMLElement)) return
	cleanup = useReadingFocus(container)
})

onBeforeUnmount(() => {
	cleanup?.()
})
</script>
