interface SeoMeta {
  title: string;
  description: string;
  image?: string;
  type?: string;
}

export const useSeo = () => {
  const config = useRuntimeConfig();
  const route = useRoute();

  const updateMeta = (meta: SeoMeta) => {
    const baseUrl = 'https://pixelscript.io';
    const imageUrl = meta.image ? `${baseUrl}${meta.image}` : `${baseUrl}/img/og-image.jpg`;
    
    useHead({
      title: meta.title,
      meta: [
        { name: 'description', content: meta.description },
        // Open Graph
        { property: 'og:title', content: meta.title },
        { property: 'og:description', content: meta.description },
        { property: 'og:image', content: imageUrl },
        { property: 'og:url', content: `${baseUrl}${route.path}` },
        { property: 'og:type', content: meta.type || 'website' },
        // Twitter
        { name: 'twitter:title', content: meta.title },
        { name: 'twitter:description', content: meta.description },
        { name: 'twitter:image', content: imageUrl },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'canonical', href: `${baseUrl}${route.path}` }
      ]
    })
  }

  return {
    updateMeta
  }
} 