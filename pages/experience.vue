<template>
  <div id="page">
		<div id="page-content">
			<div id="subpage-bg"></div>

			<div id="page-content-container">
				<h1>Experience</h1>
				<p class="lead">Building expertise through impactful roles with industry-leading companies.</p>
				<hr class="page-divider-short" />

				<ExperienceList class="mb-12" />

				<h2>Mentorship &amp; Coaching</h2>
				<p class="small">I've had the privilege of mentoring designers at all stages of their careers, from aspiring students to seasoned professionals. With over 15 years of experience, I've spoken at design schools, coached more than 100 creatives, and shared my insights through writing and workshops. Whether it's refining skills, navigating challenges, or shaping careers, I'm passionate about helping others succeed in the ever-evolving world of design.</p>

				<MarqueeTestimonials :testimonials="testimonialsList" />
			</div>
		</div>
  </div>
</template>

<script setup>
import data from '~/data/site-content.json'

useSeoMeta({
	title: 'PixelScript - Experience',
	ogTitle: 'PixelScript - Experience',
	description: 'Joe Berthelot\'s professional experience and career highlights.',
	ogDescription: 'Joe Berthelot\'s professional experience and career highlights.',
})

// The marquee shows the short testimonials; the ones with headings belong to the footer strip.
const testimonialsList = data.testimonials.filter((t) => !('heading' in t))
</script>
