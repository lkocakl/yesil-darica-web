import React from 'react';
import Link from 'next/link';

export default function Kurumsal() {
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
                        <Link href="/kurumsal" className="text-emerald-600 font-bold">Kurumsal</Link>
                        <Link href="/ilanlar" className="hover:text-emerald-600 font-medium">İlanlarımız</Link>
                        <Link href="/iletisim" className="hover:text-emerald-600 font-medium">İletişim</Link>
                    </div>
                </div>
            </nav>

            <main className="max-w-4xl mx-auto px-4 py-16">
                <span className="text-xs text-emerald-600 font-extrabold uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full">Biz Kimiz?</span>
                <h1 className="text-4xl font-black text-neutral-900 mt-4 mb-8">Yeşil Darıca Emlak</h1>

                <div className="prose prose-neutral max-w-none space-y-6 text-lg leading-relaxed text-neutral-600">
                    <p>
                        Yeşil Darıca Emlak, Kocaeli’nin parlayan yıldızı Darıca ve Bayramoğlu bölgesinde, yılların verdiği güven ve tecrübeyle gayrimenkul danışmanlığı hizmeti sunmaktadır. Kurucumuz <strong>Fatih Karaduman</strong> önderliğinde, her müşterimize birer iş ortağı ve ailemizin bir parçası gözüyle bakıyoruz.
                    </p>
                    <p>
                        Sektördeki amacımız; sadece gayrimenkul alım, satım veya kiralama süreçlerini yönetmek değil, yatırımcılarımıza bölgedeki en doğru, en karlı ve en güvenli portföyleri sunarak geleceklerini güvence altına almaktır. Özellikle arsa ve lüks konut/villa segmentinde bölgenin en geniş ve elit portföyüne sahibiz.
                    </p>
                    <h2 className="text-2xl font-bold text-neutral-900 mt-10">İlkelerimiz</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Şeffaflık:</strong> Alıcı ve satıcı arasındaki tüm süreçleri açık, net ve dürüst bir şekilde yürütürüz.</li>
                        <li><strong>Doğru Fiyat Garantisi:</strong> Şişirilmiş fiyatlarla değil, bölgenin gerçek piyasa analiziyle doğru ekspertiz sunarız.</li>
                        <li><strong>Müşteri Memnuniyeti:</strong> Satış veya kiralama bittikten sonra da danışmanlık bağımızı asla koparmayız.</li>
                    </ul>
                </div>
            </main>
        </div>
    );
}