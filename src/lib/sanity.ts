import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'ingfzbed',
  dataset: 'production',
  apiVersion: '2025-10-05',
  useCdn: false,
});

export async function getHomeData() {
  const query = `*[_type == "home"][0]{ title, subtitle, banner }`;
  const data = await sanityClient.fetch(query);
  return data;
}
