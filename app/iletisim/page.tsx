import React from 'react';
import Link from 'next/link';

export default function Iletisim() {
    return (
        <div className="min-h-screen bg-neutral-50 text-neutral-800 font-sans">
            <nav className="bg-white border-b border-neutral-100 sticky top-0 z-50 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    <Link href="/" className="flex flex-col">
                        <span className="text-xl font-black text-emerald-700 tracking-wide">YEŞİL DARICA</span>
                        <span className="text-xs uppercase tracking-widest text-neutral-500 font-bold -mt-1">Emlak & Gayrimenkul</span>
                    </Link>
                    <div className="flex space-x-6">
                        <Link href="/" className="hover:text-emerald-600 font-medium">Anasayfa</Link>
                        <Link href="/kurumsal" className="hover:text-emerald-600 font-medium">Kurumsal</Link>
                        <Link href="/ilanlar" className="hover:text-emerald-600 font-medium">İlanlarımız</Link>
                        <Link href="/iletisim" className="text-emerald-600 font-bold">İletişim</Link>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Sol Kolon: İletişim Bilgileri */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-4xl font-black text-neutral-900 tracking-tight">Bizimle İletişime Geçin</h1>
                            <p className="text-neutral-500 mt-2">Sorularınız, ilan talepleriniz veya ekspertiz istekleriniz için ofisimize bekleriz.</p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm space-y-6">
                            <div>
                                <span className="text-xs text-emerald-600 font-bold uppercase tracking-wider">Ofis Adresi</span>
                                <p className="font-semibold text-neutral-800 mt-1">Bayramoğlu Mh. Fatih Sultan Mehmet Cd. No: 230/B Darıca / KOCAELİ</p>
                            </div>
                            <div className="border-t pt-4">
                                <span className="text-xs text-emerald-600 font-bold uppercase tracking-wider">Telefon & WhatsApp</span>
                                <p className="font-bold text-neutral-800 text-lg mt-1">0 532 653 11 56</p>
                            </div>
                            <div className="border-t pt-4">
                                <span className="text-xs text-emerald-600 font-bold uppercase tracking-wider">E-Posta</span>
                                <p className="font-semibold text-neutral-800 mt-1">fatih.karaduman@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Sağ Kolon: Google Harita Görünümü */}
                    <div className="bg-white p-4 rounded-2xl border border-neutral-100 shadow-sm h-[450px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m4!2s40.7712!3d29.3514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ2JzE2LjMiTiAyOcKwMjEnMDUuMCJF!5e0!3m2!1str!2str!4v1700000000000"
                            className="w-full h-full rounded-xl border-0"
                            allowFullScreen={true}
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </main>
        </div>
    );
}