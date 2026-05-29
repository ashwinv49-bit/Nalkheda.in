'use client'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { FiHeart } from 'react-icons/fi'
import { useState } from 'react'
import { products, WHATSAPP_NUMBER, Product } from '@/data/products'

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [liked, setLiked] = useState(false)

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

  const waMessage = encodeURIComponent(
    `Hi Aansh Collection! I'm interested in "${product.name}" (₹${product.price}). Please share more details.`
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
      className="product-card"
    >
      {/* Image Area */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <div
          className="w-full h-full bg-fabric-pattern flex items-center justify-center transition-transform duration-500 group-hover:scale-105"
          style={{ background: product.gradient }}
        >
          <div className="text-center text-white">
            <div className="text-5xl mb-2 filter drop-shadow-lg">{product.emoji}</div>
            <p className="text-white/80 text-xs font-medium px-4 text-center leading-tight">
              {product.description}
            </p>
          </div>
        </div>

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/30 transition-all duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-xs px-5 py-2.5 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <FaWhatsapp size={15} />
            Inquire on WhatsApp
          </a>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tag && <span className={badgeClass}>{product.tag}</span>}
          {discount > 0 && (
            <span className="bg-dark text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
              {discount}% OFF
            </span>
          )}
        </div>

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
        <p className="text-muted text-xs font-medium mb-1 uppercase tracking-wide">{product.category}</p>
        <h3 className="font-playfair font-semibold text-dark text-base leading-tight mb-2 line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-dark text-lg">₹{product.price.toLocaleString('en-IN')}</span>
            {product.originalPrice > product.price && (
              <span className="text-muted text-sm line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
            )}
          </div>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#25D366] hover:text-[#128C7E] text-sm font-medium transition-colors duration-200"
          >
            <FaWhatsapp size={16} />
            <span className="hidden sm:inline">Order</span>
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function NewArrivals() {
  const [visibleCount, setVisibleCount] = useState(8)

  return (
    <section id="new-arrivals" className="py-16 sm:py-20 bg-ivory bg-ethnic-pattern">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="section-label mb-2">Fresh Drops</p>
          <h2 className="section-title">
            New{' '}
            <span className="text-gradient-gold italic">Arrivals</span>
          </h2>
          <div className="gold-divider" />
          <p className="text-muted mt-4 text-sm max-w-xl mx-auto">
            Our latest curated pieces — from everyday elegance to festive grandeur.
            New styles added every week.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.slice(0, visibleCount).map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {visibleCount < products.length && (
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
              Load More Products
            </button>
          </motion.div>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-6 text-muted text-sm"
        >
          Can't find what you're looking for?{' '}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I'm%20looking%20for%20a%20specific%20product.`}
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
