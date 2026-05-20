import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2026-03-01', // Güncel api versiyonu
  useCdn: false, // En güncel ilanları anlık görmek için false yapıyoruz
})

const builder = imageUrlBuilder(client)

// Sanity'den gelen karmaşık görsel verisini düzgün bir linke dönüştüren yardımcı fonksiyon
export function urlFor(source: any) {
  return builder.image(source).url()
}