export const WHATSAPP_NUMBER = '919876543210' // Replace with actual number
export const INSTAGRAM_HANDLE = 'aansh_collection'
export const BRAND_NAME = 'Aansh Collection'
export const BRAND_EMAIL = 'aanshcollection@gmail.com'

export interface Product {
  id: string
  name: string
  price: number
  originalPrice: number
  category: string
  tag?: string
  tagType?: 'new' | 'sale' | 'hot'
  description: string
  gradient: string
  patternColor: string
  emoji: string
  isBestseller?: boolean
  isNew?: boolean
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Bandhani Silk Kurti Set',
    price: 1299,
    originalPrice: 1799,
    category: 'Kurti Sets',
    tag: 'New Arrival',
    tagType: 'new',
    description: 'Stunning hand-tied Bandhani print in premium silk blend',
    gradient: 'linear-gradient(145deg, #8B1A1A 0%, #C0392B 40%, #E74C3C 80%, #C9A84C 100%)',
    patternColor: 'rgba(255,255,255,0.1)',
    emoji: '👗',
    isNew: true,
  },
  {
    id: '2',
    name: 'Embroidered Co-ord Set',
    price: 1899,
    originalPrice: 2499,
    category: 'Co-ord Sets',
    tag: 'Bestseller',
    tagType: 'hot',
    description: 'Floral thread embroidery on premium cotton fabric',
    gradient: 'linear-gradient(145deg, #1A3A6A 0%, #2E6DA4 45%, #5B9BD5 80%, #C9A84C 100%)',
    patternColor: 'rgba(255,255,255,0.1)',
    emoji: '✨',
    isBestseller: true,
  },
  {
    id: '3',
    name: 'Kanjivaram Silk Saree',
    price: 3499,
    originalPrice: 4999,
    category: 'Sarees',
    tag: 'Sale',
    tagType: 'sale',
    description: 'Authentic Kanjivaram weave with gold zari border',
    gradient: 'linear-gradient(145deg, #4A0E6A 0%, #7B2FBE 45%, #9B59B6 80%, #F39C12 100%)',
    patternColor: 'rgba(255,255,255,0.1)',
    emoji: '🪡',
    isNew: false,
  },
  {
    id: '4',
    name: 'Mirror Work Festive Suit',
    price: 1599,
    originalPrice: 2199,
    category: 'Festive Wear',
    tag: 'New Arrival',
    tagType: 'new',
    description: 'Hand-stitched mirror work on vibrant festive fabric',
    gradient: 'linear-gradient(145deg, #7A4000 0%, #C0660A 45%, #F39C12 80%, #C9A84C 100%)',
    patternColor: 'rgba(255,255,255,0.1)',
    emoji: '🔆',
    isNew: true,
  },
  {
    id: '5',
    name: 'Printed Cotton Kurti',
    price: 799,
    originalPrice: 999,
    category: 'Daily Wear',
    tag: 'Bestseller',
    tagType: 'hot',
    description: 'Breathable cotton with block-print for daily comfort',
    gradient: 'linear-gradient(145deg, #0D6E4E 0%, #1A936F 45%, #88D498 80%, #C9A84C 100%)',
    patternColor: 'rgba(255,255,255,0.1)',
    emoji: '🌸',
    isBestseller: true,
  },
  {
    id: '6',
    name: 'Heavy Bridal Lehenga',
    price: 4999,
    originalPrice: 6999,
    category: 'Festive Wear',
    tag: 'Premium',
    tagType: 'hot',
    description: 'Intricate zardosi work on bridal red silk lehenga',
    gradient: 'linear-gradient(145deg, #6B0000 0%, #B20000 40%, #DC143C 75%, #C9A84C 100%)',
    patternColor: 'rgba(255,255,255,0.1)',
    emoji: '👑',
    isBestseller: true,
  },
  {
    id: '7',
    name: 'Palazzo Kurti Co-ord',
    price: 1199,
    originalPrice: 1599,
    category: 'Co-ord Sets',
    tag: 'New Arrival',
    tagType: 'new',
    description: 'Flowy palazzo pants with matching kurta in crinkle fabric',
    gradient: 'linear-gradient(145deg, #2D004F 0%, #6B21A8 45%, #A855F7 80%, #F9A8D4 100%)',
    patternColor: 'rgba(255,255,255,0.1)',
    emoji: '🎀',
    isNew: true,
  },
  {
    id: '8',
    name: 'Chiffon Party Saree',
    price: 2299,
    originalPrice: 2999,
    category: 'Sarees',
    tag: 'Trending',
    tagType: 'hot',
    description: 'Elegant chiffon with sequin border for parties & events',
    gradient: 'linear-gradient(145deg, #0F3460 0%, #16213E 40%, #533483 75%, #E94560 100%)',
    patternColor: 'rgba(255,255,255,0.1)',
    emoji: '💫',
  },
]

export const categories = [
  {
    id: 'kurti-sets',
    name: 'Kurti Sets',
    description: 'Everyday elegance',
    emoji: '👗',
    gradient: 'linear-gradient(145deg, #B5451B 0%, #E57A44 100%)',
    count: '120+ styles',
  },
  {
    id: 'coord-sets',
    name: 'Co-ord Sets',
    description: 'Effortlessly styled',
    emoji: '✨',
    gradient: 'linear-gradient(145deg, #1A3A6A 0%, #5B9BD5 100%)',
    count: '80+ styles',
  },
  {
    id: 'sarees',
    name: 'Sarees',
    description: 'Timeless grace',
    emoji: '🪡',
    gradient: 'linear-gradient(145deg, #4A0E6A 0%, #A855F7 100%)',
    count: '200+ styles',
  },
  {
    id: 'festive-wear',
    name: 'Festive Wear',
    description: 'Celebrate in style',
    emoji: '🔆',
    gradient: 'linear-gradient(145deg, #7A4000 0%, #F39C12 100%)',
    count: '150+ styles',
  },
  {
    id: 'daily-wear',
    name: 'Daily Wear',
    description: 'Comfort meets style',
    emoji: '🌸',
    gradient: 'linear-gradient(145deg, #0D6E4E 0%, #88D498 100%)',
    count: '300+ styles',
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    city: 'Mumbai',
    rating: 5,
    review: 'Absolutely love the quality! The Bandhani kurti set I ordered was even more beautiful in person. Stitching is perfect and delivery was super fast. Highly recommend Aansh Collection!',
    product: 'Bandhani Silk Kurti Set',
    avatar: 'PS',
  },
  {
    id: 2,
    name: 'Kavita Patel',
    city: 'Ahmedabad',
    rating: 5,
    review: 'Ordered 3 sarees from here and all of them were gorgeous. The fabric quality is premium and prices are very reasonable. COD option made it even easier. Will definitely order again!',
    product: 'Kanjivaram Silk Saree',
    avatar: 'KP',
  },
  {
    id: 3,
    name: 'Meena Joshi',
    city: 'Jaipur',
    rating: 5,
    review: 'Found Aansh Collection on Instagram and took a chance — so glad I did! The mirror work festive suit was stunning. Got so many compliments at the wedding. Thank you!',
    product: 'Mirror Work Festive Suit',
    avatar: 'MJ',
  },
  {
    id: 4,
    name: 'Ananya Reddy',
    city: 'Hyderabad',
    rating: 5,
    review: 'WhatsApp ordering is so convenient! They replied instantly and helped me pick the right size. Package arrived neatly packed. The co-ord set is exactly as shown. 5 stars!',
    product: 'Embroidered Co-ord Set',
    avatar: 'AR',
  },
  {
    id: 5,
    name: 'Sunita Mishra',
    city: 'Lucknow',
    rating: 5,
    review: 'Best ethnic wear boutique I've found online. The lehenga for my daughter's engagement was perfect. Quality, price, delivery — everything was top notch. Highly trusted brand!',
    product: 'Heavy Bridal Lehenga',
    avatar: 'SM',
  },
  {
    id: 6,
    name: 'Ritu Agarwal',
    city: 'Delhi',
    rating: 5,
    review: 'I've been ordering from Aansh Collection for 6 months now. Every piece is better than the last. Love their Instagram feed too — always so inspirational!',
    product: 'Printed Cotton Kurti',
    avatar: 'RA',
  },
]

export const faqs = [
  {
    id: 1,
    question: 'How long does delivery take?',
    answer: 'We deliver Pan India within 5-7 business days. Express delivery (2-3 days) is available for select pin codes. You will receive a tracking number once your order is dispatched.',
  },
  {
    id: 2,
    question: 'Is Cash on Delivery (COD) available?',
    answer: 'Yes! COD is available across India. Simply place your order via WhatsApp, confirm the product and address, and pay cash upon delivery. No advance payment required for most orders.',
  },
  {
    id: 3,
    question: 'What is your exchange / return policy?',
    answer: 'We offer easy exchange within 7 days of delivery for size issues or defective products. Simply WhatsApp us with your order details and photos. Note: Sale items and stitched garments are not eligible for exchange.',
  },
  {
    id: 4,
    question: 'How do I place an order on WhatsApp?',
    answer: 'It\'s easy! Tap the WhatsApp button on our website, send us the product name or screenshot, your size preference, and delivery address. We\'ll confirm availability, share the final price, and arrange delivery for you.',
  },
  {
    id: 5,
    question: 'Do you ship internationally?',
    answer: 'Currently we ship across India only. International shipping is coming soon! Follow our Instagram @aansh_collection for updates on international delivery launches.',
  },
]
