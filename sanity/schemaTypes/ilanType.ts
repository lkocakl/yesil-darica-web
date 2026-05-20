import { defineField, defineType } from 'sanity'

export const ilanType = defineType({
    name: 'ilan',
    title: 'Emlak İlanları',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'İlan Başlığı',
            type: 'string',
            validation: (Rule) => Rule.required().error('İlan başlığı zorunludur.'),
        }),
        defineField({
            name: 'slug',
            title: 'Sayfa Linki (Slug)',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'type',
            title: 'İlan Türü',
            type: 'string',
            options: {
                list: [
                    { title: 'Satılık', value: 'Satılık' },
                    { title: 'Kiralık', value: 'Kiralık' },
                ],
                layout: 'radio',
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'price',
            title: 'Fiyat',
            type: 'string',
            description: 'Örn: 18.500.000 TL veya 35.000 TL / Ay',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'location',
            title: 'Konum / Bölge',
            type: 'string',
            description: 'Örn: Darıca, Bayramoğlu',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'imageUrl',
            title: 'İlan Ana Fotoğrafı',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required().error('Lütfen bir fotoğraf yükleyin.'),
        }),
        defineField({
            name: 'features',
            title: 'Mülk Özellikleri',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Örn: 5+2, 420 m², Havuzlu, Otoparklı (Her özellikten sonra Enter yapın)',
        }),
    ],
})