export const dynamic = 'force-dynamic';
export const revalidate = 0;

import React from 'react';
import Link from 'next/link';
import { client, urlFor } from '../sanity/lib/client';

async function getIlanlar() {
  const query = `*[_type == "ilan"] | order(_createdAt desc)[0...3] {
    _id,
    title,
    location,
    price,
    type,
    imageUrl, 
    features
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const ilanlar = await getIlanlar();

  // WhatsApp için otomatik doldurulacak kurumsal mesaj (URL Encode edilmiş hali)
  const whatsappNumber = "905326531156";
  const defaultMessage = encodeURIComponent("Merhaba, web sitenizdeki ilanlar hakkında bilgi alabilir miyim?");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-800 font-sans">

      {/* 1. NAVBAR */}
      <nav className="bg-white border-b border-neutral-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-2">
          <Link href="/" className="flex flex-col min-w-max">
            <span className="text-lg md:text-xl font-black text-emerald-700 tracking-wide">YEŞİL DARICA</span>
            <span className="text-[10px] md:text-xs uppercase tracking-widest text-neutral-500 font-bold -mt-1">Emlak & Gayrimenkul</span>
          </Link>

          <div className="hidden md:flex space-x-8 font-semibold text-neutral-600">
            <Link href="/" className="text-emerald-600">Anasayfa</Link>
            <Link href="/kurumsal" className="hover:text-emerald-600 transition">Kurumsal</Link>
            <Link href="/ilanlar" className="hover:text-emerald-600 transition">İlanlarımız</Link>
            <Link href="/iletisim" className="hover:text-emerald-600 transition">İletişim</Link>
          </div>

          {/* DÜZELTME: Sadece 'WhatsApp' yazıyor ve mobilde taşmaması için padding değerleri optimize edildi */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 text-white px-4 py-2 md:px-5 md:py-2.5 rounded-lg font-bold hover:bg-emerald-700 transition shadow-md text-xs md:text-sm text-center"
          >
            WhatsApp
          </a>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="relative min-h-[550px] md:h-[600px] flex items-center justify-center bg-neutral-900 text-white py-12 md:py-0">
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1600')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-900/80 to-emerald-950/40" />

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 flex flex-col items-center">
          {/* DÜZELTME: Mobilde üst üste binmesin diye line-height ve padding esnetildi */}
          <span className="text-emerald-400 font-bold uppercase tracking-widest text-[10px] md:text-xs bg-emerald-400/10 px-4 py-2 rounded-full border border-emerald-400/20 max-w-full inline-block leading-normal">
            Türkiye Genelinde Gayrimenkulün Güvenilir Adresi
          </span>

          <h1 className="text-3xl md:text-6xl font-black tracking-tight mt-6 mb-6 leading-tight">
            Doğru Yatırım, Güvenli Gelecek
          </h1>

          <p className="text-sm md:text-xl text-neutral-300 max-w-2xl mx-auto mb-10 leading-relaxed px-2">
            Yeşil Darıca Emlak güvencesiyle Türkiye genelindeki en prestijli arsa, konut ve ticari portföyleri keşfedin.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0">
            <Link href="/ilanlar" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3.5 md:py-4 rounded-xl transition shadow-lg text-center text-sm md:text-base">
              Güncel İlanları İncele
            </Link>
            <Link href="/iletisim" className="bg-neutral-800 hover:bg-neutral-700 text-white font-semibold px-8 py-3.5 md:py-4 rounded-xl transition border border-neutral-700 text-center text-sm md:text-base">
              İletişime Geç
            </Link>
          </div>
        </div>
      </section>

      {/* 3. ÖNE ÇIKAN İLANLAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="flex justify-between items-end mb-10 md:mb-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-neutral-900 tracking-tight">Öne Çıkan Portföyümüz</h2>
            <p className="text-xs md:text-sm text-neutral-500 mt-1">Sizin için seçtiğimiz en güncel gayrimenkul fırsatları</p>
          </div>
          <Link href="/ilanlar" className="text-emerald-600 font-bold hover:underline text-sm hidden sm:block">
            Tüm İlanları Gör →
          </Link>
        </div>

        {ilanlar.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-dashed text-neutral-400 text-sm">
            Henüz aktif bir ilan bulunmamaktadır.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {ilanlar.map((property: any) => (
              <div key={property._id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-100 hover:shadow-xl transition duration-300 flex flex-col group">
                <div className="relative h-56 md:h-64 overflow-hidden bg-neutral-200">
                  {property.imageUrl ? (
                    <img
                      src={urlFor(property.imageUrl)}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-neutral-300 flex items-center justify-center text-neutral-500 text-sm">Görsel Yok</div>
                  )}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm bg-neutral-900">
                    {property.type}
                  </span>
                </div>

                <div className="p-5 md:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs text-neutral-400 font-semibold uppercase tracking-wider">{property.location}</span>
                    <h3 className="font-bold text-base md:text-lg text-neutral-800 mt-1 mb-3 line-clamp-1 group-hover:text-emerald-700 transition">
                      {property.title}
                    </h3>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {property.features?.map((feat: string, i: number) => (
                        <span key={i} className="bg-neutral-100 text-neutral-600 text-[11px] md:text-xs px-2.5 py-1 rounded-md font-medium">
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <span className="text-lg md:text-xl font-black text-emerald-700">{property.price}</span>
                    <Link
                      href={`/ilan/${property._id}`}
                      className="text-xs md:text-sm font-bold text-neutral-600 hover:text-emerald-700 transition flex items-center gap-1"
                    >
                      Detaylar →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Mobilde altta görünen ek buton */}
        <div className="mt-8 text-center sm:hidden">
          <Link href="/ilanlar" className="inline-block bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-bold px-6 py-3 rounded-xl transition text-sm w-full">
            Tüm İlanları Gör →
          </Link>
        </div>
      </section>

      {/* 4. FOOTER */}
      <footer className="bg-neutral-900 text-neutral-400 py-10 md:py-12 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <span className="text-white font-bold tracking-wide block text-base md:text-lg">YEŞİL DARICA EMLAK</span>
            <p className="text-[11px] md:text-xs text-neutral-500 mt-1">Bayramoğlu Mh. Fatih Sultan Mehmet Cd. No: 230/B Darıca / KOCAELİ</p>
          </div>
          <div className="text-[11px] md:text-xs text-neutral-500">
            © 2026 Tüm Hakları Saklıdır.
          </div>
        </div>
      </footer>

    </div>
  );
}