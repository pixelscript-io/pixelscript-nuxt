<template>
	<header>
		<div id="header-wrapper">
			<AppSquares />

			<img src="/img/logo_icon.svg" alt="PixelScript Logo" />

			<div id="nav-links">
				<NavButton label="Home" hotkey="A" route="/" @click="goTo('/')" />
				<NavButton label="Experience" hotkey="S" route="/experience" @click="goTo('/experience')" />
				<NavButton label="Work" hotkey="D" route="/work" @click="goTo('/work')" />
				<NavButton label="Contact" hotkey="F" route="/contact" @click="goTo('/contact')" />
			</div>
		</div>
	</header>
</template>

<script setup>
	const router = useRouter()

	const goTo = (route) => {
		router.push(route)
	}
</script>

<style scoped>
	header {
		@apply bg-zinc-950 border-b border-dashed border-zinc-800 w-full sticky top-0 z-50;
	}

	#header-wrapper {
		@apply w-[1024px] border-x border-dashed border-zinc-800 mx-auto h-14 relative flex items-center justify-between px-6;
	}

	#nav-links {
		@apply flex items-center space-x-4;
	}
</style>