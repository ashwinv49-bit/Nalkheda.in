'use client'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { FiHeart } from 'react-icons/fi'
import { useState } from 'react'
import { products, WHATSAPP_NUMBER, Product } from '@/data/products'
import Image from 'next/image'

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [liked, setLiked] = useState(false)

  const waMessage = encodeURIComponent(
    `Hi Aansh Collection! I'm interested in "${product.name}" (Code: ${product.code}). Please share the price and more details.`
  )
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`

  const badgeClass =
    product.tagType === 'new'
      ? 'badge-new'
      : product.tagType === 'sale'
      ? 'badge-sale'
      : 'badge-hot'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="product-card group"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-beige">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized
        />

        {/* Hover overlay with WhatsApp CTA */}
        <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-all duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-xs px-5 py-2.5 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <FaWhatsapp size={15} />
            Enquire on WhatsApp
          </a>
        </div>

        {/* Badge */}
        {product.tag && (
          <div className="absolute top-3 left-3">
            <span className={badgeClass}>{product.tag}</span>
          </div>
        )}

        {/* Like button */}
        <button
          onClick={() => setLiked((v) => !v)}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-200"
          aria-label="Like product"
        >
          <FiHeart
            size={15}
            className={liked ? 'fill-red-500 text-red-500' : 'text-muted'}
          />
        </button>
      </div>

      {/* Details */}
      <div className="p-4">
        <p className="text-muted text-xs font-medium mb-0.5 uppercase tracking-wide">{product.category}</p>
        <h3 className="font-playfair font-semibold text-dark text-sm leading-tight mb-1 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-muted text-xs mb-3 line-clamp-1">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-gold text-xs font-semibold tracking-wide">Code: {product.code}</span>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-[#25D366] text-white text-xs font-medium px-3 py-1.5 rounded-full hover:bg-[#128C7E] transition-colors duration-200"
          >
            <FaWhatsapp size={13} />
            Enquire
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function NewArrivals() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [visibleCount, setVisibleCount] = useState(8)

  const categoryTabs = ['All', 'Necklace Sets', 'Earrings', 'Bracelets']

  const filtered = activeCategory === 'All'
    ? products
    : products.filter((p) => p.category === activeCategory)

  return (
    <section id="new-arrivals" className="py-16 sm:py-20 bg-ivory bg-ethnic-pattern">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="section-label mb-2">Our Collection</p>
          <h2 className="section-title">
            Shop Our{' '}
            <span className="text-gradient-gold italic">Jewellery</span>
          </h2>
          <div className="gold-divider" />
          <p className="text-muted mt-4 text-sm max-w-xl mx-auto">
            Handpicked AD & CZ jewellery — necklace sets, statement earrings and bangles.
            WhatsApp us for price and to place your order.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categoryTabs.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setVisibleCount(8) }}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-gold text-white border-gold shadow-gold'
                  : 'border-gold/40 text-gold hover:bg-gold/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filtered.slice(0, visibleCount).map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {visibleCount < filtered.length && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <button
              onClick={() => setVisibleCount((v) => v + 4)}
              className="btn-outline"
            >
              Load More
            </button>
          </motion.div>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-6 text-muted text-sm"
        >
          Looking for something specific?{' '}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I'm%20looking%20for%20a%20specific%20jewellery%20piece.`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold font-medium hover:underline"
          >
            Ask us on WhatsApp ↗
          </a>
        </motion.p>
      </div>
    </section>
  )
}
