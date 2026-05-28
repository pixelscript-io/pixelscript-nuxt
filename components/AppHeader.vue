<template>
	<header role="banner">
		<div id="header-wrapper">
			<AppSquares />

			<a href="/" class="logo-link" aria-label="PixelScript Home">
				<svg class="logo-icon" width="33" height="24" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M8.00758 20.0002L4.00415 16.0001L8.00758 12.0004L12.011 16.0001L8.00758 20.0002Z" fill="#0F62FE"/>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0112 24L8.00781 20.0004L12.0112 16.0002L16.0147 20.0004L12.0112 24Z" fill="#0043CE"/>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M4.00395 16.0001L0 12.0005L4.00395 8.00031L8.00737 12.0005L4.00395 16.0001Z" fill="#4589FF"/>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M8.00758 12.0002L4.00415 8.00058L8.00758 4.00043L12.011 8.00058L8.00758 12.0002Z" fill="#78A9FF"/>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0112 8.00046L8.00781 4.00082L12.0112 0.000671387L16.0147 4.00082L12.0112 8.00046Z" fill="#A6C8FF"/>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M24.0222 3.99982L28.0257 7.99997L24.0222 11.9996L20.0188 7.99997L24.0222 3.99982Z" fill="#33B1FF"/>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M20.0186 0L24.022 3.99963L20.0186 7.99978L16.0151 3.99963L20.0186 0Z" fill="#82CFFF"/>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M28.0256 7.99988L32.0291 11.9995L28.0256 15.9997L24.0222 11.9995L28.0256 7.99988Z" fill="#1192E8"/>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M24.0222 11.9997L28.0257 15.9993L24.0222 19.9995L20.0188 15.9993L24.0222 11.9997Z" fill="#0072C3"/>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M20.0186 15.9995L24.022 19.9992L20.0186 23.9993L16.0151 19.9992L20.0186 15.9995Z" fill="#00539A"/>
				</svg>
			</a>

			<nav aria-label="Main navigation">
				<div id="nav-links">
					<NavButton label="Home" hotkey="A" route="/" @click="goTo('/')" />
					<NavButton label="Experience" hotkey="S" route="/experience" @click="goTo('/experience')" />
					<!-- <NavButton label="Work" hotkey="D" route="/work" @click="goTo('/work')" /> -->
					<NavButton label="Contact" hotkey="F" route="/contact" @click="goTo('/contact')" />
				</div>
			</nav>
		</div>
	</header>
</template>

<script setup lang="ts">
const router = useRouter()

const goTo = (route: string): void => {
	router.push(route)
}
</script>

<style scoped>
header {
	@apply bg-zinc-950 border-b border-dashed border-zinc-800 w-full sticky top-0 z-50;
}

#header-wrapper {
	@apply relative flex items-center justify-between px-6;
	@apply w-[calc(100%-2rem)] h-14;
	@apply lg:w-[1024px] mx-auto;
	@apply border-x border-dashed border-zinc-800;
}

.logo-link {
	@apply block;
	@apply focus:outline-none focus:ring-2 focus:ring-ps-blue-100 focus:ring-offset-2 focus:ring-offset-zinc-950;
	@apply rounded-sm;
}

#nav-links {
	@apply flex items-center;
	@apply space-x-0 lg:space-x-4;
}
</style>