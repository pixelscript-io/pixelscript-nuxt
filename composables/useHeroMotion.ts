// Shared entrance choreography for the hero text (old hero + AI landing page).
// Timings mirror the --ps-motion-hero-* tokens in assets/css/tokens.css.
const fadeEase = [0.22, 1, 0.36, 1] as const

export const heroFadeTimings = {
	heading: 0.25,
	subheading: 0.75,
	divider: 1.4,
	text: 2.05,
	duration: 0.55,
	dividerDuration: 0.45,
} as const

export function useHeroMotion() {
	const prefersReducedMotion = ref(false)
	const isReady = ref(false)
	const animationKey = ref(0)

	// The typewriter starts once the last line has finished fading in.
	const typewriterDelayMs = (heroFadeTimings.text + heroFadeTimings.duration) * 1000 + 100

	const fadeProps = (delay: number) => {
		if (!isReady.value) {
			return {
				initial: { opacity: 0, y: 10 },
				animate: { opacity: 0, y: 10 },
			}
		}

		if (!animationKey.value || prefersReducedMotion.value) {
			return {
				initial: false as const,
				animate: { opacity: 1, y: 0 },
			}
		}

		return {
			initial: { opacity: 0, y: 10 },
			animate: { opacity: 1, y: 0 },
			transition: { duration: heroFadeTimings.duration, delay, ease: fadeEase },
		}
	}

	const dividerProps = (delay: number) => {
		if (!isReady.value) {
			return {
				initial: { opacity: 0, scaleX: 0 },
				animate: { opacity: 0, scaleX: 0 },
				style: { transformOrigin: 'left center' },
			}
		}

		if (!animationKey.value || prefersReducedMotion.value) {
			return {
				initial: false as const,
				animate: { opacity: 1, scaleX: 1 },
			}
		}

		return {
			initial: { opacity: 0, scaleX: 0 },
			animate: { opacity: 1, scaleX: 1 },
			transition: { duration: heroFadeTimings.dividerDuration, delay, ease: fadeEase },
			style: { transformOrigin: 'left center' },
		}
	}

	onMounted(() => {
		prefersReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches

		if (!prefersReducedMotion.value) {
			animationKey.value = 1
		}

		isReady.value = true
	})

	return {
		isReady,
		animationKey,
		typewriterDelayMs,
		fadeTimings: heroFadeTimings,
		fadeProps,
		dividerProps,
	}
}
