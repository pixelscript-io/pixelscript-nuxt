interface PersonData {
  name: string;
  jobTitle: string;
  image: string;
  sameAs: string[];
}

interface ProjectData {
  name: string;
  description: string;
  image: string;
  datePublished: string;
}

export const useStructuredData = () => {
  const addPersonSchema = (data: PersonData) => {
    useHead({
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: data.name,
            jobTitle: data.jobTitle,
            image: data.image,
            sameAs: data.sameAs
          })
        }
      ]
    })
  }

  const addProjectSchema = (data: ProjectData) => {
    useHead({
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: data.name,
            description: data.description,
            image: data.image,
            datePublished: data.datePublished
          })
        }
      ]
    })
  }

  return {
    addPersonSchema,
    addProjectSchema
  }
} 