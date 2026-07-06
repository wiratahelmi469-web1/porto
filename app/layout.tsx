import type {Metadata} from 'next';
import { Inter, JetBrains_Mono, Playfair_Display } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['700', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'helmi // Full-Stack Web Developer',
  description: 'Website portofolio modern untuk Helmi - Full-Stack Web Developer spesialis ekosistem Laravel dan UI/UX design',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22 font-family=%22monospace%22 fill=%22%2300D4AA%22 font-weight=%22bold%22>&gt;_</text></svg>',
  },
  openGraph: {
    title: 'helmi // Full-Stack Web Developer',
    description: 'Website portofolio modern untuk Helmi - Full-Stack Web Developer spesialis ekosistem Laravel dan UI/UX design',
    url: 'https://github.com/wiratahelmi469-web1',
    siteName: 'Helmi Portfolio',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'helmi // Full-Stack Web Developer',
    description: 'Website portofolio modern untuk Helmi - Full-Stack Web Developer spesialis ekosistem Laravel dan UI/UX design',
  }
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="id" className={`${inter.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable} scroll-smooth`}>
      <body className="bg-[#0A0E1A] text-[#E8F4F8] antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
