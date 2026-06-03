const READING_FOCUS_SELECTOR =
	'p:not(.lead):not(.small), h2, h3, h4, li'

export const useReadingFocus = (container: HTMLElement) => {
	if (typeof window === 'undefined') return () => {}

	const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
	if (prefersReducedMotion) return () => {}

	const elements = Array.from(container.querySelectorAll(READING_FOCUS_SELECTOR))
		.filter((el) => !(el instanceof HTMLElement && el.closest('.glass-card')))

	const focusRatio = 0.6
	const minOpacity = 0.4

	elements.forEach((el) => {
		if (el instanceof HTMLElement) {
			el.style.transition = 'opacity 0.35s ease'
		}
	})

	let rafId = 0

	const update = () => {
		const focusY = window.innerHeight * focusRatio

		for (const el of elements) {
			if (!(el instanceof HTMLElement)) continue
			const { top } = el.getBoundingClientRect()
			el.style.opacity = top <= focusY ? '1' : String(minOpacity)
		}
	}

	const onScroll = () => {
		cancelAnimationFrame(rafId)
		rafId = requestAnimationFrame(update)
	}

	window.addEventListener('scroll', onScroll, { passive: true })
	window.addEventListener('resize', onScroll, { passive: true })
	update()

	return () => {
		window.removeEventListener('scroll', onScroll)
		window.removeEventListener('resize', onScroll)
		cancelAnimationFrame(rafId)

		elements.forEach((el) => {
			if (el instanceof HTMLElement) {
				el.style.opacity = ''
				el.style.transition = ''
			}
		})
	}
}
