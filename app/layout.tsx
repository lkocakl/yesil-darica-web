import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Sitenin Google ve diğer arama motorlarında nasıl görüneceğini belirleyen Meta Veriler
export const metadata: Metadata = {
  title: "Yeşil Darıca Emlak | Gayrimenkul, Konut ve Arsa Yatırımı",
  description: "Yeşil Darıca Emlak güvencesiyle Türkiye genelindeki en prestijli arsa, konut, villa ve ticari gayrimenkul portföylerini keşfedin. Doğru yatırım, güvenli gelecek.",
  keywords: ["yeşil darıca emlak", "darıca satılık arsa", "bayramoğlu satılık villa", "türkiye geneli yatırım", "gayrimenkul danışmanlığı", "arsa yatırımı"],
  authors: [{ name: "Yeşil Darıca Emlak" }],
  icons: {
    icon: "/favicon.ico", // Varsa firmanın logosunu buraya bağlayabilirsiniz
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}