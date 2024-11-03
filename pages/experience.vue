<template>
  <div id="page">
		<div id="page-content">
			<div id="subpage-bg"></div>

			<div id="page-content-container">
				<h1>Experience</h1>
				<p class="lead">My personal mission has always been to create solutions that connect companies and their customers in meaningful ways.</p>
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
							<span>California Pools &amp; Landscaping</span>
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
				<p class="small">I've had the chance to work with some of the biggest names in the industry. From large multinational agencies like BBDO and Bates Y&R to innovative companies like Loom, Ueno, and Herman Miller. I've also teamed up with tech giants like Google and a bunch of Fortune 500 companies. On top of that, I've worked with countless startups. Most didn't make it, but a few, like Spotify, hit it big.</p>
				<p class="small">I've published two books, spoken at design schools for over 15 years, and I write a blog that some people say is "successful"—whatever that means. Over the years, I've coached more than 100 students and designers.</p>

				<MarqueeTestimonials :testimonials="testimonialsList" />
			</div>
		</div>
  </div>
</template>

<script setup>
// Define your testimonials
const testimonialsList = [
  {
		text: `I've had the pleasure of working with Anton on a fast-moving project that has greatly benefited from his talents. Anton is an intelligent, creative, team-oriented, and highly conscientious designer, and he has quickly become one of my favorite collaborators.`,
		author: 'Ryan Andersson, VP Global Research & Insights, Herman Miller'
	},
	{
		text: `I've had the pleasure of working with Anton on a fast-moving project that has greatly benefited from his talents. Anton is an intelligent, creative, team-oriented, and highly conscientious designer, and he has quickly become one of my favorite collaborators.`,
		author: 'Ryan Andersson, VP Global Research & Insights, Herman Miller'
	},
	{
		text: `I've had the pleasure of working with Anton on a fast-moving project that has greatly benefited from his talents. Anton is an intelligent, creative, team-oriented, and highly conscientious designer, and he has quickly become one of my favorite collaborators.`,
		author: 'Ryan Andersson, VP Global Research & Insights, Herman Miller'
	},
	{
		text: `I've had the pleasure of working with Anton on a fast-moving project that has greatly benefited from his talents. Anton is an intelligent, creative, team-oriented, and highly conscientious designer, and he has quickly become one of my favorite collaborators.`,
		author: 'Ryan Andersson, VP Global Research & Insights, Herman Miller'
	},
	{
		text: `I've had the pleasure of working with Anton on a fast-moving project that has greatly benefited from his talents. Anton is an intelligent, creative, team-oriented, and highly conscientious designer, and he has quickly become one of my favorite collaborators.`,
		author: 'Ryan Andersson, VP Global Research & Insights, Herman Miller'
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