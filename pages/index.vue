<template>
  <div id="page">
		<AppHero />

		<div id="page-content">
			<div id="page-content-container">
				<p>For the past fifteen years, I've architected scalable UI foundations and component systems for companies ranging from agile startups to global enterprises.</p>
				<p>I combine a passion for meticulous visual engineering with modern design tokens and utility-first code to build robust component libraries that accelerate developer velocity.</p>

				<FeaturedProject
					title="Tessera"
					role="Creator & Lead Engineer"
					excerpt="A design-system-first frontend framework where tokens, accessibility and variants are enforced at compile time, and AI tools check with the compiler before they write code."
					image="/img/preview_tessera.png"
					route="/case/tessera"
				/>

				<PulseLine />

				<SkillGrid />
			</div>
		</div>
  </div>
</template>

<script setup>
const { updateMeta } = useSeo()
const { addPersonSchema } = useStructuredData()

updateMeta({
  title: 'PixelScript - Joe Berthelot',
  description: 'PixelScript is my personal laboratory where pixels meet code. Product Design, User Experience Research and Front End Development.',
  type: 'website'
})

addPersonSchema({
  name: 'Joe Berthelot',
  jobTitle: 'Product Designer & Front End Developer',
  image: 'https://pixelscript.io/img/og-image.jpg',
  sameAs: [
    'https://www.linkedin.com/in/joeberthelot/',
    'https://github.com/pixelscript-io'
  ]
})
</script>
