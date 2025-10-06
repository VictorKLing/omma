import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'; // importa o builder correto

export const sanityClient = createClient({
  projectId: 'ingfzbed',
  dataset: 'production',
  apiVersion: '2025-10-05',
  useCdn: false,
});

// cria o builder de imagens
const builder = imageUrlBuilder(sanityClient);

// função que gera URL da imagem
export function urlFor(source: any) {
  return builder.image(source);
}

export async function getHomeData() {
  const query = `*[_type == "home"][0]{
    title,
    subtitle,
    banner,
    button { text, href },
    section1 {
      sectionTitle,
      section1Text,
      items[]{
        icon,
        title,
        description
      },
      sectionImage1,
      sectionImage2,
      sectionImage3,
      button {
        text,
        href
      }
    }
  }`;
  const data = await sanityClient.fetch(query);
  return data;
}
