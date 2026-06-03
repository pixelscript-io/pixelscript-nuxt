<template>
	<footer>
		<div id="footer-wrapper">
			<AppSquares position="top" />

			<div id="footer-content">
				<div class="left">
					<img src="/img/logo_full.svg" alt="PixelScript Logo" />
					<div class="flex-1"></div>
					<div id="footer-bottom">
						<div id="footer-socials">
							<svg @click="goToSite('https://www.linkedin.com/in/joeberthelot/')" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M216,26H40A14,14,0,0,0,26,40V216a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V40A14,14,0,0,0,216,26Zm2,190a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2ZM94,112v64a6,6,0,0,1-12,0V112a6,6,0,0,1,12,0Zm88,28v36a6,6,0,0,1-12,0V140a22,22,0,0,0-44,0v36a6,6,0,0,1-12,0V112a6,6,0,0,1,12,0v2.11A34,34,0,0,1,182,140ZM98,84A10,10,0,1,1,88,74,10,10,0,0,1,98,84Z"></path></svg>
							<!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M102,140a10,10,0,1,1-10-10A10,10,0,0,1,102,140Zm62-10a10,10,0,1,0,10,10A10,10,0,0,0,164,130Zm73.64,61.08-67,29.71a14.43,14.43,0,0,1-5.77,1.21,14.13,14.13,0,0,1-13.25-9.18L143,189.43c-4.93.37-9.92.58-15,.58s-10.06-.21-15-.58l-8.63,23.39A14.13,14.13,0,0,1,91.13,222a14.43,14.43,0,0,1-5.77-1.21l-67-29.71a14,14,0,0,1-7.93-16.2L40,58.5A14.07,14.07,0,0,1,51.34,48.11L87.4,42.19a14.19,14.19,0,0,1,16,10.39l3.69,14.53a197.5,197.5,0,0,1,41.82,0l3.69-14.53a14.19,14.19,0,0,1,16-10.39l36.06,5.92A14.07,14.07,0,0,1,216,58.5l29.53,116.38A14,14,0,0,1,237.64,191.08Zm-3.7-13.25L204.41,61.45a2.08,2.08,0,0,0-1.7-1.5L166.65,54a2.13,2.13,0,0,0-2.42,1.5l-3.36,13.24a169.28,169.28,0,0,1,16.75,3.76A6,6,0,0,1,176,84.31a5.71,5.71,0,0,1-1.62-.23A174.26,174.26,0,0,0,128,78a174.26,174.26,0,0,0-46.38,6.08,6,6,0,1,1-3.24-11.55,169.28,169.28,0,0,1,16.75-3.76L91.77,55.53A2.12,2.12,0,0,0,89.35,54L53.29,60a2.08,2.08,0,0,0-1.7,1.5L22.06,177.83a2,2,0,0,0,1.16,2.28l67,29.7a2.19,2.19,0,0,0,1.76,0,2.07,2.07,0,0,0,1.14-1.17l7.58-20.55a171.46,171.46,0,0,1-22.33-4.64,6,6,0,1,1,3.24-11.55A174.26,174.26,0,0,0,128,178a174.26,174.26,0,0,0,46.38-6.08,6,6,0,1,1,3.24,11.55,171.46,171.46,0,0,1-22.33,4.64l7.58,20.55a2.07,2.07,0,0,0,1.14,1.17,2.19,2.19,0,0,0,1.76,0l67-29.7A2,2,0,0,0,233.94,177.83Z"></path></svg> -->
							<svg @click="goToSite('../pdf/resume.pdf')" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M210.43,41.22l-130.25-23A14,14,0,0,0,64,29.58l-29.75,169a14,14,0,0,0,11.36,16.22l130.25,23h0a13.64,13.64,0,0,0,2.46.22A14,14,0,0,0,192,226.42l29.75-169A14,14,0,0,0,210.43,41.22ZM210,55.36l-29.75,169a2,2,0,0,1-.82,1.3,2,2,0,0,1-1.49.33L47.65,203A2,2,0,0,1,46,200.64l29.75-169a2,2,0,0,1,.82-1.3A2.06,2.06,0,0,1,78.1,30L208.35,53A2,2,0,0,1,210,55.36ZM186.11,75.51a6,6,0,0,1-5.9,5,6.2,6.2,0,0,1-1.05-.09l-83-14.66a6,6,0,1,1,2.09-11.81l83,14.65A6,6,0,0,1,186.11,75.51ZM180.56,107a6,6,0,0,1-5.9,5,5.48,5.48,0,0,1-1-.1l-83-14.65a6,6,0,0,1,2.09-11.82l83,14.66A6,6,0,0,1,180.56,107Zm-47,24.19a6,6,0,0,1-5.91,4.95,6.38,6.38,0,0,1-1.05-.09l-41.49-7.33a6,6,0,1,1,2.09-11.81l41.49,7.32A6,6,0,0,1,133.53,131.22Z"></path></svg>
							<svg @click="goToSite('https://github.com/pixelscript-io')" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M206.13,75.92A57.79,57.79,0,0,0,201.2,29a6,6,0,0,0-5.2-3,57.77,57.77,0,0,0-47,24H123A57.77,57.77,0,0,0,76,26a6,6,0,0,0-5.2,3,57.79,57.79,0,0,0-4.93,46.92A55.88,55.88,0,0,0,58,104v8a54.06,54.06,0,0,0,50.45,53.87A37.85,37.85,0,0,0,98,192v10H72a26,26,0,0,1-26-26A38,38,0,0,0,8,138a6,6,0,0,0,0,12,26,26,0,0,1,26,26,38,38,0,0,0,38,38H98v18a6,6,0,0,0,12,0V192a26,26,0,0,1,52,0v40a6,6,0,0,0,12,0V192a37.85,37.85,0,0,0-10.45-26.13A54.06,54.06,0,0,0,214,112v-8A55.88,55.88,0,0,0,206.13,75.92ZM202,112a42,42,0,0,1-42,42H112a42,42,0,0,1-42-42v-8a43.86,43.86,0,0,1,7.3-23.69,6,6,0,0,0,.81-5.76,45.85,45.85,0,0,1,1.43-36.42,45.85,45.85,0,0,1,35.23,21.1A6,6,0,0,0,119.83,62h32.34a6,6,0,0,0,5.06-2.76,45.83,45.83,0,0,1,35.23-21.11,45.85,45.85,0,0,1,1.43,36.42,6,6,0,0,0,.79,5.74A43.78,43.78,0,0,1,202,104Z"></path></svg>
						</div>
						<p>&copy; {{ year }} - Designed &amp; developed by myself...a human being.</p>
					</div>
				</div>
				<div class="right">
					<NavButton label="Home" hotkey="A" route="/" :footer="true" @click="goTo('/')" />
					<NavButton label="Experience" hotkey="S" route="/experience" :footer="true" @click="goTo('/experience')" />
					<NavButton label="Work" hotkey="D" route="/work" :footer="true" @click="goTo('/work')" />
					<NavButton label="Contact" hotkey="F" route="/contact" :footer="true" @click="goTo('/contact')" />
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup>
	const router = useRouter()

	const goTo = (route) => {
		router.push(route)
	}

	const goToSite = (site) => {
		window.open(site, '_blank')
	}

	const year = new Date().getFullYear()
</script>

<style scoped>
	footer {
		@apply bg-zinc-950 border-t border-dashed border-zinc-800 w-full z-10;
	}

	#footer-wrapper {
		@apply w-[calc(100%-2rem)] px-6;
		@apply lg:w-[1024px] bg-zinc-950 border-x border-dashed border-zinc-800 mx-auto h-[260px] relative lg:px-0;
	}

	#footer-content {
		@apply w-full;
		@apply lg:w-[768px] h-full mx-auto py-10 flex;
	}

	#footer-bottom {
		@apply w-[200%];
		@apply flex flex-col space-y-2 lg:w-full;
	}

	#footer-bottom p {
		@apply text-zinc-600 text-xs;
	}

	#footer-socials {
		@apply flex space-x-3;
	}

	#footer-socials svg {
		@apply h-6 w-6 fill-zinc-500 cursor-pointer;
		@apply hover:fill-zinc-400;
	}

	.left {
		@apply flex flex-col flex-1 items-start;
	}

	.left img {
		@apply h-6;
	}

	.right {
		@apply flex flex-col flex-1 items-end;
	}
</style>