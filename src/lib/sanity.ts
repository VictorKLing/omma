import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: 'ingfzbed',
  dataset: 'production',
  apiVersion: '2025-10-05',
  useCdn: false,
});

const builder = imageUrlBuilder(sanityClient);

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
      items[] {
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
    },
    clientes {
      title,
      brands[]
    },
    metodologia {
      title,
      subtitle,
      cards[]{ title, description, svg },
      button { text, href }
    },
    // Novos campos para Section06
    section06 {
      cta {
        title,
        subtitle,
        button1Text,
        button2Text
      },
      sobre {
        title,
        subtitle,
        text1,
        text2,
        buttonText,
        buttonHref,
        imageMain,
        imageMainAlt,
        imageSecondary,
        imageSecondaryAlt,
        disclaimer
      },
      depoimento {
        text,
        image,
        imageAlt,
        location,
        deliveryTime
      },
      parceria {
        titlePart1,
        highlight,
        titlePart2,
        text1,
        text2,
        buttonText,
        imageMain,
        imageMainAlt,
        imageSecondary,
        imageSecondaryAlt
      },
      contato {
        title,
        backgroundImage,
        placeholders {
          name,
          phone,
          email,
          service,
          project
        },
        disclaimer,
        buttonText
      }
    }
  }`;

  const data = await sanityClient.fetch(query);
  return data;
}
