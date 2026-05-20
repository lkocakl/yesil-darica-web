'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { client, urlFor } from '../../sanity/lib/client';

export default function AllProperties() {
    const [ilanlar, setIlanlar] = useState<any[]>([]);
    const [filterType, setFilterType] = useState<string>('Hepsi');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    // Sanity'den TÜM ilanları çekiyoruz
    useEffect(() => {
        const fetchAllIlanlar = async () => {
            try {
                const query = `*[_type == "ilan"] | order(_createdAt desc) {
          _id,
          title,
          location,
          price,
          type,
          imageUrl,
          features
        }`;
                const data = await client.fetch(query);
                setIlanlar(data);
            } catch (error) {
                console.error('Veri çekilirken hata oluştu:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAllIlanlar();
    }, []);

    // Filtreleme Algoritması
    const filtered = ilanlar.filter((property: any) => {
        const matchesType = filterType === 'Hepsi' || property.type === filterType;
        const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            property.location.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesType && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-neutral-50 text-neutral-800 font-sans">
            {/* Üst Menü */}
            <nav className="bg-white border-b border-neutral-100 sticky top-0 z-50 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    <Link href="/" className="flex flex-col">
                        <span className="text-xl font-black text-emerald-700 tracking-wide">YEŞİL DARICA</span>
                        <span className="text-xs uppercase tracking-widest text-neutral-500 font-bold -mt-1">Emlak & Gayrimenkul</span>
                    </Link>
                    <div className="flex space-x-6">
                        <Link href="/" className="hover:text-emerald-600 font-medium">Anasayfa</Link>
                        <Link href="/kurumsal" className="hover:text-emerald-600 font-medium">Kurumsal</Link>
                        <Link href="/ilanlar" className="text-emerald-600 font-bold">İlanlarımız</Link>
                        <Link href="/iletisim" className="hover:text-emerald-600 font-medium">İletişim</Link>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl font-black text-neutral-900 mb-8">Güncel Portföyümüz</h1>

                {/* Filtreleme Paneli */}
                <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="w-full md:w-1/3">
                        <input
                            type="text"
                            placeholder="Kelime ile ara (Villa, Darıca, 3+1...)"
                            className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-emerald-600 text-sm"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-2 w-full md:w-auto overflow-x-auto">
                        {['Hepsi', 'Satılık', 'Kiralık'].map((type) => (
                            <button
                                key={type}
                                onClick={() => setFilterType(type)}
                                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition whitespace-nowrap ${filterType === type
                                        ? 'bg-emerald-600 text-white shadow-md'
                                        : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                                    }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Yüklenme ve Listeleme Durumu */}
                {loading ? (
                    <div className="text-center py-20 text-neutral-500 font-medium">İlanlar yükleniyor...</div>
                ) : filtered.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-2xl border border-dashed">
                        <p className="text-neutral-500 font-medium">Aradığınız kriterlere uygun ilan bulunamadı.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {filtered.map((property) => (
                            <div key={property._id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-100 hover:shadow-xl transition duration-300 flex flex-col group">
                                <div className="relative h-64 overflow-hidden bg-neutral-200">
                                    <img src={urlFor(property.imageUrl)} alt={property.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm bg-neutral-900">{property.type}</span>
                                </div>
                                <div className="p-6 flex-1 flex flex-col justify-between">
                                    <div>
                                        <span className="text-xs text-neutral-400 font-semibold uppercase tracking-wider">{property.location}</span>
                                        <h3 className="font-bold text-lg text-neutral-800 mt-1 mb-3 line-clamp-1 group-hover:text-emerald-700 transition">{property.title}</h3>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {property.features?.map((feat: string, i: number) => (
                                                <span key={i} className="bg-neutral-100 text-neutral-600 text-xs px-2.5 py-1 rounded-md font-medium">{feat}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                                        <span className="text-xl font-black text-emerald-700">{property.price}</span>
                                        <Link href={`/ilan/${property._id}`} className="text-sm font-bold text-neutral-600 hover:text-emerald-600 transition">Detaylar →</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}