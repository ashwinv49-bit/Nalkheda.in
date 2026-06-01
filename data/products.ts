export const WHATSAPP_NUMBER = '919876543210' // Replace with actual number
export const INSTAGRAM_HANDLE = 'aansh_collection'
export const BRAND_NAME = 'Aansh Collection'
export const BRAND_EMAIL = 'aanshcollection@gmail.com'

export interface Product {
  id: string
  name: string
  code: string
  category: string
  description: string
  image: string
  tag?: string
  tagType?: 'new' | 'sale' | 'hot'
  isBestseller?: boolean
  isNew?: boolean
}

export const products: Product[] = [
  // Necklace Sets
  {
    id: 'n120',
    name: 'Pink Square AD Necklace Set',
    code: '120',
    category: 'Necklace Sets',
    description: 'Elegant pink square stone necklace with matching earrings — CZ studded silver finish',
    image: '/jewellery/necklace-code120-pink.jpg',
    tag: 'New Arrival',
    tagType: 'new',
    isNew: true,
  },
  {
    id: 'n137',
    name: 'Mint Cushion Stone Necklace Set',
    code: '137',
    category: 'Necklace Sets',
    description: 'Mint green cushion cut stones with diamond-studded silver chain and earrings',
    image: '/jewellery/necklace-code137-mint.jpg',
    tag: 'Bestseller',
    tagType: 'hot',
    isBestseller: true,
  },
  {
    id: 'n152',
    name: 'Emerald Green AD Necklace Set',
    code: '152',
    category: 'Necklace Sets',
    description: 'Rectangular emerald green stones in CZ-bordered silver setting with matching earrings',
    image: '/jewellery/necklace-code152-emerald.jpg',
    tag: 'Trending',
    tagType: 'hot',
  },
  {
    id: 'n224a',
    name: 'Pink Cascade Necklace Set',
    code: '224',
    category: 'Necklace Sets',
    description: 'Stunning pink teardrop cascade necklace with floral CZ work and matching earrings',
    image: '/jewellery/necklace-code224-pink-cascade.jpg',
    tag: 'New Arrival',
    tagType: 'new',
    isNew: true,
  },
  {
    id: 'n224b',
    name: 'Pink Oval Stone Necklace Set',
    code: '224',
    category: 'Necklace Sets',
    description: 'Oval pink stones layered in CZ-studded silver ovals — perfect for weddings and parties',
    image: '/jewellery/necklace-code224-pink-oval.jpg',
    tag: 'Premium',
    tagType: 'hot',
  },
  // Earrings
  {
    id: 'e74a',
    name: 'Green Teardrop Crown Earrings',
    code: '74',
    category: 'Earrings',
    description: 'Bold green teardrop with decorative crown top in silver CZ setting',
    image: '/jewellery/earring-code74-green-crown.jpg',
    tag: 'New Arrival',
    tagType: 'new',
    isNew: true,
  },
  {
    id: 'e74b',
    name: 'Green Teardrop Spiral Earrings',
    code: '74',
    category: 'Earrings',
    description: 'Teardrop green stone with CZ swirl top — day-to-evening versatility',
    image: '/jewellery/earring-code74-green-spiral.jpg',
  },
  {
    id: 'e74c',
    name: 'Blue Rectangle Stone Earrings',
    code: '74',
    category: 'Earrings',
    description: 'Deep blue rectangular stone earrings with filigree silver frame',
    image: '/jewellery/earring-code74-blue.jpg',
    tag: 'Trending',
    tagType: 'hot',
  },
  {
    id: 'e102a',
    name: 'Blue Chandbali Fan Earrings',
    code: '102',
    category: 'Earrings',
    description: 'Fan-shaped chandbali with purple-blue stones and CZ studded silver frame',
    image: '/jewellery/earring-code102-blue.jpg',
    tag: 'Bestseller',
    tagType: 'hot',
    isBestseller: true,
  },
  {
    id: 'e102b',
    name: 'Green Carved Teardrop Earrings',
    code: '102',
    category: 'Earrings',
    description: 'Intricately carved green teardrop stone with CZ-studded silver drops',
    image: '/jewellery/earring-code102-green.jpg',
  },
  {
    id: 'e107',
    name: 'Mint Chandbali Earrings',
    code: '107',
    category: 'Earrings',
    description: 'Large mint green chandbali with cascading CZ marquise drops — statement party wear',
    image: '/jewellery/earring-code107-mint.jpg',
    tag: 'New Arrival',
    tagType: 'new',
    isNew: true,
  },
  // Bracelets
  {
    id: 'b137a',
    name: 'Ruby Heart Stone Bangle',
    code: '137',
    category: 'Bracelets',
    description: 'Stunning wide-cuff bangle with ruby teardrop center and heart-shaped stone accents',
    image: '/jewellery/bracelet-code137-ruby.jpg',
    tag: 'Premium',
    tagType: 'hot',
  },
  {
    id: 'b137b',
    name: 'Crystal Clear CZ Bangle',
    code: '137',
    category: 'Bracelets',
    description: 'All-white CZ wide-cuff bangle with heart-stone accents — bridal favourite',
    image: '/jewellery/bracelet-code137-clear.jpg',
    tag: 'Bestseller',
    tagType: 'hot',
    isBestseller: true,
  },
  {
    id: 'b137c',
    name: 'Emerald Green CZ Bangle',
    code: '137',
    category: 'Bracelets',
    description: 'Wide CZ bangle with emerald green teardrop center and matching heart accents',
    image: '/jewellery/bracelet-code137-green.jpg',
    tag: 'New Arrival',
    tagType: 'new',
    isNew: true,
  },
  {
    id: 'b137d',
    name: 'Rose Pink CZ Bangle',
    code: '137',
    category: 'Bracelets',
    description: 'Delicate rose pink heart-stone bangle with CZ-studded silver cuff',
    image: '/jewellery/bracelet-code137-pink.jpg',
  },
  {
    id: 'b152',
    name: 'Diamond Flower CZ Bangle',
    code: '152',
    category: 'Bracelets',
    description: 'Square-cut CZ stones surrounded by micro-pave flower clusters in silver',
    image: '/jewellery/bracelet-code152-flower.jpg',
    tag: 'Trending',
    tagType: 'hot',
  },
]

export const categories = [
  {
    id: 'necklace-sets',
    name: 'Necklace Sets',
    description: 'Timeless elegance',
    emoji: '📿',
    gradient: 'linear-gradient(145deg, #6B0000 0%, #DC143C 60%, #C9A84C 100%)',
    count: '50+ styles',
  },
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Statement drops',
    emoji: '✨',
    gradient: 'linear-gradient(145deg, #1A3A6A 0%, #5B9BD5 100%)',
    count: '80+ styles',
  },
  {
    id: 'bracelets',
    name: 'Bracelets',
    description: 'Wrist candy',
    emoji: '💎',
    gradient: 'linear-gradient(145deg, #4A0E6A 0%, #A855F7 100%)',
    count: '40+ styles',
  },
  {
    id: 'sarees',
    name: 'Sarees',
    description: 'Paithani & more',
    emoji: '🪡',
    gradient: 'linear-gradient(145deg, #7A4000 0%, #F39C12 100%)',
    count: 'Coming soon',
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    city: 'Mumbai',
    rating: 5,
    review: 'Absolutely love the quality! The necklace set I ordered was even more beautiful in person. Packaging was perfect and delivery was super fast. Highly recommend Aansh Collection!',
    product: 'Emerald Green AD Necklace Set',
    avatar: 'PS',
  },
  {
    id: 2,
    name: 'Kavita Patel',
    city: 'Ahmedabad',
    rating: 5,
    review: 'Ordered 3 jewellery pieces from here and all were gorgeous. The quality is premium and prices are very reasonable. COD option made it even easier. Will definitely order again!',
    product: 'Pink Cascade Necklace Set',
    avatar: 'KP',
  },
  {
    id: 3,
    name: 'Meena Joshi',
    city: 'Jaipur',
    rating: 5,
    review: 'Found Aansh Collection on Instagram and took a chance — so glad I did! The chandbali earrings were stunning. Got so many compliments at the wedding. Thank you!',
    product: 'Blue Chandbali Fan Earrings',
    avatar: 'MJ',
  },
  {
    id: 4,
    name: 'Ananya Reddy',
    city: 'Hyderabad',
    rating: 5,
    review: 'WhatsApp ordering is so convenient! They replied instantly and helped me pick the right piece. Package arrived neatly packed. The bangle is exactly as shown. 5 stars!',
    product: 'Crystal Clear CZ Bangle',
    avatar: 'AR',
  },
  {
    id: 5,
    name: 'Sunita Mishra',
    city: 'Lucknow',
    rating: 5,
    review: "Best jewellery boutique I've found online. The bangle for my daughter's engagement was perfect. Quality, price, delivery — everything was top notch. Highly trusted brand!",
    product: 'Ruby Heart Stone Bangle',
    avatar: 'SM',
  },
  {
    id: 6,
    name: 'Ritu Agarwal',
    city: 'Delhi',
    rating: 5,
    review: "I've been ordering from Aansh Collection for 6 months now. Every piece is better than the last. Love their Instagram feed too — always so inspirational!",
    product: 'Mint Chandbali Earrings',
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
    answer: 'We offer easy exchange within 7 days of delivery for defective products. Simply WhatsApp us with your order details and photos.',
  },
  {
    id: 4,
    question: 'How do I place an order on WhatsApp?',
    answer: "It's easy! Tap the WhatsApp button, send us the product code (e.g. Code: 152), and your delivery address. We'll confirm availability and arrange delivery.",
  },
  {
    id: 5,
    question: 'Do you ship internationally?',
    answer: 'Currently we ship across India only. International shipping is coming soon! Follow our Instagram @aansh_collection for updates.',
  },
]
