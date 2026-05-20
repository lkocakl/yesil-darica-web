import React from 'react';
import Link from 'next/link';
import { client, urlFor } from '../../../sanity/lib/client';

interface PageProps {
    params: Promise<{ id: string }>;
}

async function getIlanDetail(id: string) {
    const query = `*[_type == "ilan" && _id == $id][0] {
    _id,
    title,
    location,
    price,
    type,
    imageUrl,
    features
  }`;
    const data = await client.fetch(query, { id });
    return data;
}

export default async function PropertyDetail({ params }: PageProps) {
    const resolvedParams = await params;
    const propertyId = resolvedParams.id;

    // Veriyi Sanity'den kimliğe (id) göre çekiyoruz
    const property = await getIlanDetail(propertyId);

    if (!property) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-50">
                <h2 className="text-2xl font-bold text-neutral-800">İlan Bulunamadı</h2>
                <Link href="/" className="mt-4 text-emerald-600 hover:underline">Anasayfaya Dön</Link>
            </div>
        );
    }

    const realPhone = "905326531156";
    const formattedPhone = "0 532 653 11 56";

    return (
        <div className="min-h-screen bg-neutral-50 text-neutral-800 font-sans">
            <nav className="bg-white border-b border-neutral-100 sticky top-0 z-50 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    <Link href="/" className="flex flex-col">
                        <span className="text-xl font-black text-emerald-700 tracking-wide">YEŞİL DARICA</span>
                        <span className="text-xs uppercase tracking-widest text-neutral-500 font-bold -mt-1">Emlak & Gayrimenkul</span>
                    </Link>
                    <Link href="/ilanlar" className="text-sm font-bold text-emerald-600 hover:text-emerald-700">
                        &larr; İlanlara Dön
                    </Link>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    <div className="lg:col-span-2 space-y-8">
                        <div className="relative h-[450px] w-full rounded-2xl overflow-hidden shadow-md bg-neutral-200">
                            <img src={urlFor(property.imageUrl)} alt={property.title} className="w-full h-full object-cover" />
                            <span className="absolute top-4 left-4 px-4 py-1.5 rounded-full text-sm font-bold text-white shadow-md bg-neutral-900">
                                {property.type}
                            </span>
                        </div>

                        <div className="bg-white rounded-2xl p-8 border border-neutral-100 shadow-sm">
                            <span className="text-xs text-emerald-600 font-bold uppercase tracking-wider">{property.location}</span>
                            <h1 className="text-2xl md:text-3xl font-extrabold text-neutral-900 mt-2 mb-6">{property.title}</h1>

                            <h3 className="text-lg font-bold text-neutral-900 mb-4 border-b pb-2">Mülk Özellikleri</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {property.features?.map((feat: string, index: number) => (
                                    <div key={index} className="bg-neutral-50 p-4 rounded-xl border border-neutral-100">
                                        <span className="text-xs text-neutral-400 block font-medium">Özellik</span>
                                        <span className="font-bold text-neutral-800 text-sm md:text-base">{feat}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl p-8 border border-neutral-100 shadow-sm text-center">
                            <span className="text-xs text-neutral-400 font-semibold block uppercase tracking-widest">Portföy Fiyatı</span>
                            <span className="text-3xl font-black text-emerald-700 block mt-2 mb-6">{property.price}</span>

                            <div className="space-y-3">
                                <a
                                    href={`https://wa.me/${realPhone}?text=${encodeURIComponent(`Merhaba Fatih Bey, web sitenizdeki "${property.title}" ilanınız hakkında detaylı bilgi alabilir miyim?`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl transition shadow-md text-center"
                                >
                                    WhatsApp ile Bilgi Al
                                </a>
                                <a
                                    href={`tel:${realPhone}`}
                                    className="w-full block bg-neutral-900 hover:bg-neutral-800 text-white font-bold py-4 rounded-xl transition text-center"
                                >
                                    {formattedPhone} Ara
                                </a>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-sm space-y-4">
                            <div>
                                <h4 className="font-bold text-neutral-900 text-sm uppercase tracking-wider text-emerald-700">Danışman</h4>
                                <p className="font-extrabold text-neutral-800 text-lg mt-0.5">Fatih KARADUMAN</p>
                                <p className="text-xs text-neutral-400">fatih.karaduman@gmail.com</p>
                            </div>
                            <div className="border-t pt-3">
                                <h4 className="font-bold text-neutral-900 text-xs uppercase tracking-wider">Ofis Adresi</h4>
                                <p className="text-sm text-neutral-600 mt-1">Bayramoğlu Mh. Fatih Sultan Mehmet Cd. No: 230/B Darıca / KOCAELİ</p>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}