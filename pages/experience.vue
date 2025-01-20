<template>
  <div id="page">
		<div id="page-content">
			<div id="subpage-bg"></div>

			<div id="page-content-container">
				<h1>Experience</h1>
				<p class="lead">Building expertise through impactful roles with industry-leading companies.</p>
				<hr class="page-divider-short" />

				<div id="company-list">
					<div class="company-row">
						<p class="job-title">Lead Product Designer, 
							<span>Duel</span>
						</p>
						<div class="job-spacer"></div>
						<p class="job-year">2024</p>
					</div>

					<div class="company-row">
						<p class="job-title">Lead UX Designer, 
							<span>Privacy Bee</span>
						</p>
						<div class="job-spacer"></div>
						<p class="job-year">2024</p>
					</div>

					<div class="company-row">
						<p class="job-title">Chief Product Officer, 
							<span>LiftLog</span>
						</p>
						<div class="job-spacer"></div>
						<p class="job-year">2023</p>
					</div>

					<div class="company-row">
						<p class="job-title">Lead Front End Developer, 
							<span>JubyCards</span>
						</p>
						<div class="job-spacer"></div>
						<p class="job-year">2023</p>
					</div>

					<div class="company-row">
						<p class="job-title">Senior Product Designer, 
							<span>ArfinnMed</span>
						</p>
						<div class="job-spacer"></div>
						<p class="job-year">2023</p>
					</div>

					<div class="company-row">
						<p class="job-title">Lead Product Designer, 
							<span>GraphicsFlow</span>
						</p>
						<div class="job-spacer"></div>
						<p class="job-year">2021</p>
					</div>

					<div class="company-row">
						<p class="job-title">Product Designer, 
							<span>AppsFlyer</span>
						</p>
						<div class="job-spacer"></div>
						<p class="job-year">2019</p>
					</div>

					<div class="company-row">
						<p class="job-title">Senior Product Designer, 
							<span>Tallwave</span>
						</p>
						<div class="job-spacer"></div>
						<p class="job-year">2019</p>
					</div>

					<div class="company-row">
						<p class="job-title">Lead Product Designer, 
							<span>California Pools</span>
						</p>
						<div class="job-spacer"></div>
						<p class="job-year">2019</p>
					</div>

					<div class="company-row">
						<p class="job-title">Director of UI/UX, 
							<span>Swapchain</span>
						</p>
						<div class="job-spacer"></div>
						<p class="job-year">2017</p>
					</div>

					<div class="company-row">
						<p class="job-title">Senior Product Designer, 
							<span>Integrate</span>
						</p>
						<div class="job-spacer"></div>
						<p class="job-year">2015</p>
					</div>

					<div class="company-row">
						<p class="job-title">Creative Director, 
							<span>ReadyCloud</span>
						</p>
						<div class="job-spacer"></div>
						<p class="job-year">2013</p>
					</div>

					<div class="company-row">
						<p class="job-title">Lead Web Designer, 
							<span>NetShapers</span>
						</p>
						<div class="job-spacer"></div>
						<p class="job-year">2010</p>
					</div>
				</div>

				<LogoGrid :logos="logosList" />

				<h2>Mentorship &amp; Coaching</h2>
				<p class="small">I've had the privilege of mentoring designers at all stages of their careers, from aspiring students to seasoned professionals. With over 15 years of experience, I've spoken at design schools, coached more than 100 creatives, and shared my insights through writing and workshops. Whether it's refining skills, navigating challenges, or shaping careers, I'm passionate about helping others succeed in the ever-evolving world of design.</p>

				<MarqueeTestimonials :testimonials="testimonialsList" />
			</div>
		</div>
  </div>
</template>

<script setup>

const testimonialsList = [
	{
		text: `Joe's ability to transform complex ideas into elegant, user-friendly designs is unmatched. Working with him was a game-changer for our project.`,
		author: 'Jeff Carterson, CEO, Sevencube'
	},
	{
		text: `Joe brings a rare combination of technical expertise and creative vision. His insights and designs took our product to the next level.`,
		author: 'Michael Lee, American Express/Tallwave'
	},
	{
		text: `Working with Joe was an absolute pleasure. His attention to detail and dedication to user-centered design are truly exceptional.`,
		author: 'Vardit Jonasz, Product Manager, Integrate'
	},
	{
		text: `Joe's mentorship has been invaluable for our team. He's not only a skilled designer but also an inspiring coach who helps others grow.`,
		author: 'Chris Dunn, CEO, ReadyCloud'
	},
	{
		text: `Joe's innovative approach and commitment to excellence made a significant impact on our product. I couldn't recommend him more highly.`,
		author: 'Rachel Evans, CPO, California Pools & Landscaping'
	}
]

const logosList = [
  { src: '/img/logoipsum.svg', alt: 'Logo 1' },
	{ src: '/img/logoipsum.svg', alt: 'Logo 1' },
	{ src: '/img/logoipsum.svg', alt: 'Logo 1' },
	{ src: '/img/logoipsum.svg', alt: 'Logo 1' },
	{ src: '/img/logoipsum.svg', alt: 'Logo 1' },
	{ src: '/img/logoipsum.svg', alt: 'Logo 1' },
	{ src: '/img/logoipsum.svg', alt: 'Logo 1' },
	{ src: '/img/logoipsum.svg', alt: 'Logo 1' },
	{ src: '/img/logoipsum.svg', alt: 'Logo 1' },
	{ src: '/img/logoipsum.svg', alt: 'Logo 1' },
	{ src: '/img/logoipsum.svg', alt: 'Logo 1' },
	{ src: '/img/logoipsum.svg', alt: 'Logo 1' },
]
</script>


<style>
	#company-list {
		@apply flex flex-col space-y-4;
	}

	.company-row {
		@apply flex space-x-4 items-center;
	}

	.company-row .job-title {
		@apply text-sm font-medium text-zinc-50;
	}

	.company-row .job-title span {
		@apply text-zinc-500;
	}

	.company-row .job-spacer {
		@apply flex-1 h-[1px] bg-zinc-900;
	}

	.company-row .job-year {
		@apply text-sm text-zinc-200;
		font-family: "Source Code Pro", monospace;
	}
</style>