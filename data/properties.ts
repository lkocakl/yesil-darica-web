export interface Property {
    id: string;
    title: string;
    location: string;
    price: string;
    type: 'Satılık' | 'Kiralık';
    features: string[];
    imageUrl: string;
}

export const featuredProperties: Property[] = [
    {
        id: '1',
        title: 'Bayramoğlu Sahile Yakın Havuzlu Lüks Villa',
        location: 'Darıca, Bayramoğlu',
        price: '18.500.000 TL',
        type: 'Satılık',
        features: ['5+2', '420 m²', 'Havuzlu', 'Otopark'],
        imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800'
    },
    {
        id: '2',
        title: 'Darıca Merkezde Deniz Manzaralı 3+1 Daire',
        location: 'Darıca, Cami Mh.',
        price: '4.250.000 TL',
        type: 'Satılık',
        features: ['3+1', '135 m²', 'Deniz Manzaralı'],
        imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800'
    },
    {
        id: '3',
        title: 'Fatih Sultan Mehmet Caddesi Üzeri Devren Kiralık Dükkan',
        location: 'Darıca, Bayramoğlu',
        price: '35.000 TL / Ay',
        type: 'Kiralık',
        features: ['90 m²', 'Düz Giriş', 'Depolu'],
        imageUrl: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=800'
    }
];