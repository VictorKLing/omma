import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Cliente Sanity
export const sanityClient = createClient({
  projectId: 'ingfzbed',
  dataset: 'production',
  apiVersion: '2025-10-05',
  useCdn: false,
});

// Builder para gerar URLs de imagens
const builder = imageUrlBuilder(sanityClient);
export function urlFor(source: any) {
  return builder.image(source);
}

// ===============================
// FUNÇÃO PARA HOME
// ===============================
export async function getHomeData() {
  const query = `*[_type == "home"][0]{
    title,
    subtitle,
    banner,
    button { text, href },
    projetos[] {
      titulo,
      local,
      area,
      tempo,
      descricao,
      imagens[]
    },
    section1 {
      sectionTitle,
      section1Text,
      items[] { icon, title, description },
      sectionImage1,
      sectionImage2,
      sectionImage3,
      button { text, href }
    },
    clientes { title, brands[] },
    metodologia { title, subtitle, cards[]{ title, description, svg }, button { text, href } },
    section06 {
      cta { title, subtitle, button1Text, button2Text },
      sobre { title, subtitle, text1, text2, buttonText, buttonHref, imageMain, imageMainAlt, imageSecondary, imageSecondaryAlt, disclaimer },
      depoimento { text, image, imageAlt, location, deliveryTime },
      parceria { titlePart1, highlight, titlePart2, text1, text2, buttonText, imageMain, imageMainAlt, imageSecondary, imageSecondaryAlt },
      contato { title, backgroundImage, placeholders { name, phone, email, service, project }, disclaimer, buttonText }
    }
  }`;

  const data = await sanityClient.fetch(query);
  return data;
}
