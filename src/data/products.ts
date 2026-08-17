export interface Product {
  id: string;
  title: string;
  category: 'Bouquets' | 'Festival Garlands' | 'Divine Art' | 'Bespoke Keepsakes';
  priceUSD: number;
  priceINR: number;
  rating: number;
  reviewCount: number;
  image: string;
  description: string;
  features: string[];
  isTrending?: boolean;
  isBestSeller?: boolean;
  stock: 'In Stock' | 'Custom Made to Order';
}

export const BUSINESS_INFO = {
  name: 'sanaCraft',
  fullName: 'Sana Craft Studio',
  tagline: 'Handcrafted Elegance, Timeless Artistry',
  secondaryTagline: 'Crafting Memories into Forever Flowers & Divine Art',
  motto: 'Small Bouquet, Big Happiness 🌸✨',
  whatsappNumber: '919876543210',
  formattedPhone: '+91 98765 43210',
  instagramUrl: 'https://www.instagram.com/sana_craftstudio?utm_source=qr&igsh=MXBxbXM4NzFwZzM0Yw==',
  instagramHandle: '@sana_craftstudio',
  email: 'contact.sanacraft@gmail.com',
  location: 'Mumbai, India (Shipping Worldwide)',
  welcomeGreeting: `Hello !
Thank you for reaching out to Sana Craft. 🌸✨
We create handmade and customized pipe cleaner crafts. Please let us know your requirements, and we’ll be happy to assist you.

Regards,
Sana Craft 💐`
};

export const PRODUCTS: Product[] = [
  {
    id: 'sc-01',
    title: 'Sunburst Sunflower & Daisy Crochet Bouquet',
    category: 'Bouquets',
    priceUSD: 4,
    priceINR: 250,
    rating: 5.0,
    reviewCount: 48,
    image: '/images/product-1.jpg',
    description: 'Handmade crochet bouquet wrapped in vintage newspaper print with vibrant sunflower, white daisies, and lush velvet leaves. Designed to stay vibrant forever.',
    features: ['100% Premium Yarn', 'Never Wither', 'Vintage Newspaper Wrap', 'Satin Ribbon Accent'],
    isTrending: true,
    isBestSeller: true,
    stock: 'In Stock'
  },
  {
    id: 'sc-02',
    title: 'Small Bouquet, Big Happiness - Velvet Daisy Ensemble',
    category: 'Bouquets',
    priceUSD: 1,
    priceINR: 50,
    rating: 4.9,
    reviewCount: 62,
    image: '/images/product-2.jpg',
    description: 'Adorable compact bouquet crafted with plush pipe cleaner daisies & sunflowers. Spreads joy that lasts forever.',
    features: ['Forever Cute', 'Handcrafted with Love', 'Perfect Birthday Gift', 'Lightweight & Durable'],
    isTrending: true,
    isBestSeller: true,
    stock: 'In Stock'
  },
  {
    id: 'sc-03',
    title: 'Royal Crimson & Gold Velvet Garland (Haar)',
    category: 'Festival Garlands',
    priceUSD: 3,
    priceINR: 200,
    rating: 5.0,
    reviewCount: 35,
    image: '/images/product-3.jpg',
    description: 'Exquisite hand-twisted velvet flower garland with pearl beads and golden accents for deities, altars, and festive decor.',
    features: ['Soft Velvet Finish', 'Hand-Strung Pearl Beads', 'Reusability for Years', 'Divine Craftsmanship'],
    isTrending: true,
    stock: 'In Stock'
  },
  {
    id: 'sc-04',
    title: 'Laddu Gopal Sacred Velvet Lotus Throne (Asan)',
    category: 'Divine Art',
    priceUSD: 2,
    priceINR: 150,
    rating: 5.0,
    reviewCount: 54,
    image: '/images/product-4.jpg',
    description: 'Handcrafted blooming lotus seat made from vibrant red and yellow velvet pipe cleaners, designed for Bal Gopal idol placement.',
    features: ['Sacred Lotus Petals', 'Velvet Cushion Base', 'Ideal for Janmashtami & Daily Pooja', 'Custom Idol Sizes Available'],
    isBestSeller: true,
    stock: 'In Stock'
  },
  {
    id: 'sc-05',
    title: 'Saffron & Marigold Sacred Floral Haar (Pair)',
    category: 'Festival Garlands',
    priceUSD: 4,
    priceINR: 250,
    rating: 4.9,
    reviewCount: 41,
    image: '/images/product-5.jpg',
    description: 'Traditional saffron and deep maroon velvet flower garlands with pearl tassel ends. Ideal for weddings and temple idols.',
    features: ['Double Garland Pair', 'Rich Saffron Tones', 'Delicate Pearl Tassels', 'Zero Maintenance'],
    isTrending: true,
    stock: 'In Stock'
  },
  {
    id: 'sc-06',
    title: 'Hibiscus Blossom Velvet Mala Collection',
    category: 'Festival Garlands',
    priceUSD: 3,
    priceINR: 180,
    rating: 5.0,
    reviewCount: 29,
    image: '/images/product-6.jpg',
    description: 'Stunning handcrafted Hibiscus-inspired velvet flower necklaces in rich red, pure white, and golden yellow with detailed stamens.',
    features: ['Intricate Hibiscus Stamens', 'Pearl Strand Cord', 'Vibrant Sacred Colors', 'Custom Lengths Available'],
    stock: 'In Stock'
  },
  {
    id: 'sc-07',
    title: 'Pastel Rose & Daisy Eternity Bouquet',
    category: 'Bouquets',
    priceUSD: 5,
    priceINR: 300,
    rating: 4.8,
    reviewCount: 39,
    image: '/images/product-7.jpg',
    description: 'Soft pastel handcrafted bouquet featuring everlasting roses and cheerful daisies in premium tissue & silk ribbon wrap.',
    features: ['Everlasting Blooms', 'Hand-sculpted Petals', 'Elegant Gift Presentation', 'Allergy-Free Flowers'],
    stock: 'In Stock'
  },
  {
    id: 'sc-08',
    title: 'Golden Sunflower & Honey Bee Mini Bouquet',
    category: 'Bouquets',
    priceUSD: 1.5,
    priceINR: 80,
    rating: 4.9,
    reviewCount: 57,
    image: '/images/product-8.jpg',
    description: 'Charming single sunflower arrangement with cute honey bee detail and leafy accents. Pure happiness in a bouquet!',
    features: ['Cute Honey Bee Motif', 'Eco-friendly Materials', 'Desk & Table Accent', 'Budget Friendly'],
    stock: 'In Stock'
  },
  {
    id: 'sc-09',
    title: 'Celestial Pearl & Ruby Velvet Haar',
    category: 'Festival Garlands',
    priceUSD: 4,
    priceINR: 280,
    rating: 5.0,
    reviewCount: 18,
    image: '/images/product-9.jpg',
    description: 'Luxury ceremonial garland featuring ruby red velvet roses interwoven with golden beads and crystal pearl tassels.',
    features: ['Luxury Ceremonial Edition', 'Golden Bead Separators', 'Royal Ruby Velvet', 'Collector\'s Keepsake'],
    isTrending: true,
    stock: 'Custom Made to Order'
  },
  {
    id: 'sc-10',
    title: 'Divine Lotus Flower Pooja Backdrop Set',
    category: 'Divine Art',
    priceUSD: 5,
    priceINR: 350,
    rating: 5.0,
    reviewCount: 22,
    image: '/images/product-10.jpg',
    description: 'Complete pooja mandir floral embellishment kit with multi-color velvet lotuses, hanging garlands, and throne pads.',
    features: ['Complete Temple Set', 'Vibrant Multi-Color Lotuses', 'Easy Hanging Loops', 'Washable Velvet Finish'],
    stock: 'Custom Made to Order'
  },
  {
    id: 'sc-11',
    title: 'Bespoke Bridal Forever Flower Gift Box',
    category: 'Bespoke Keepsakes',
    priceUSD: 6,
    priceINR: 400,
    rating: 5.0,
    reviewCount: 31,
    image: '/images/product-11.jpg',
    description: 'Luxurious handcrafted keepsake gift box featuring customized floral initials, velvet roses, and personalized message card.',
    features: ['Personalized Monogram', 'Velvet Gift Box Base', 'Ideal Wedding/Anniversary Gift', 'Customized Colors'],
    isTrending: true,
    stock: 'Custom Made to Order'
  },
  {
    id: 'sc-12',
    title: 'Graceful White Lily & Rose Velvet Garland',
    category: 'Festival Garlands',
    priceUSD: 3.5,
    priceINR: 220,
    rating: 4.9,
    reviewCount: 26,
    image: '/images/product-12.jpg',
    description: 'Clean white lily motifs accented with deep burgundy velvet roses and gold-beaded drops.',
    features: ['Pure White Lily Motifs', 'Pooja & Festival Ready', 'Tarnish-Free Gold Accents', 'Hand-stitched Core'],
    stock: 'In Stock'
  },
  {
    id: 'sc-13',
    title: 'Grand Masterpiece Velvet Floral Arch & Garland Set',
    category: 'Bespoke Keepsakes',
    priceUSD: 7,
    priceINR: 450,
    rating: 5.0,
    reviewCount: 14,
    image: '/images/product-13.jpg',
    description: 'The ultimate sanaCraft showpiece creation. Hand-sculpted large-scale floral garland set crafted for grand celebrations & mandir altars.',
    features: ['Masterpiece Edition', 'Over 100 Hand-Bent Petals', 'Premium Pearl & Velvet Strands', 'Certificate of Authenticity'],
    isTrending: true,
    isBestSeller: true,
    stock: 'Custom Made to Order'
  }
];

export const CATEGORIES = ['All', 'Bouquets', 'Festival Garlands', 'Divine Art', 'Bespoke Keepsakes'] as const;
