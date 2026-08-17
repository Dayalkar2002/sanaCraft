import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://sanacraft.com'),
  title: 'sanaCraft — Handcrafted Elegance, Timeless Artistry',
  description: 'Discover handmade crochet bouquets, plush velvet flower garlands, sacred divine thrones, and bespoke handmade keepsakes by Sana Craft Studio. Shop custom gifts with direct WhatsApp ordering!',
  keywords: [
    'sanaCraft',
    'Sana Craft Studio',
    'Handcrafted Crochet Bouquets',
    'Pipe Cleaner Crafts',
    'Velvet Garlands',
    'Laddu Gopal Lotus Throne',
    'Custom Flowers India',
    'Handmade Keepsakes',
    'Forever Flowers'
  ],
  authors: [{ name: 'Sana Craft Studio' }],
  openGraph: {
    title: 'sanaCraft — Handcrafted Elegance, Timeless Artistry',
    description: 'Bespoke pipe cleaner flower crafts, eternal crochet bouquets & divine decor made with love.',
    url: 'https://sanacraft.com',
    siteName: 'sanaCraft',
    images: [
      {
        url: '/images/product-1.jpg',
        width: 800,
        height: 1200,
        alt: 'sanaCraft Handcrafted Bouquet'
      }
    ],
    type: 'website'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-[#E88D7D] selection:text-white bg-[#FAF6F0] text-[#2D2727]">
        {children}
      </body>
    </html>
  );
}
