'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { testimonials } from '@/data/products'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`text-sm ${i < rating ? 'text-gold' : 'text-beige-600'}`}>
          ★
        </span>
      ))}
    </div>
  )
}

export default function CustomerReviews() {
  const [activeIndex, setActiveIndex] = useState(0)
  const VISIBLE_DESKTOP = 3

  const prev = () => setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setActiveIndex((i) => (i + 1) % testimonials.length)

  const visibleOnDesktop = testimonials.slice(activeIndex, activeIndex + VISIBLE_DESKTOP).length < VISIBLE_DESKTOP
    ? [...testimonials.slice(activeIndex), ...testimonials.slice(0, VISIBLE_DESKTOP - (testimonials.length - activeIndex))]
    : testimonials.slice(activeIndex, activeIndex + VISIBLE_DESKTOP)

  return (
    <section id="reviews" className="py-16 sm:py-20 bg-ivory bg-ethnic-pattern">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="section-label mb-2">Real Stories</p>
          <h2 className="section-title">
            What Our{' '}
            <span className="text-gradient-gold italic">Customers Say</span>
          </h2>
          <div className="gold-divider" />

          {/* Overall rating */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-gold text-xl">★</span>
              ))}
            </div>
            <div className="text-left">
              <p className="font-bold text-dark text-lg leading-none">4.9 / 5</p>
              <p className="text-muted text-xs">Based on 200+ orders</p>
            </div>
          </div>
        </motion.div>

        {/* Desktop — show 3 */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {visibleOnDesktop.map((t, i) => (
            <motion.div
              key={`${t.id}-${activeIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-sm">{t.avatar}</span>
                </div>
                <div>
                  <p className="font-semibold text-dark text-sm">{t.name}</p>
                  <p className="text-muted text-xs">{t.city}</p>
                  <StarRating rating={t.rating} />
                </div>
              </div>

              <p className="text-charcoal text-sm leading-relaxed flex-1">"{t.review}"</p>

              <div className="mt-4 pt-4 border-t border-beige-200">
                <p className="text-muted text-xs">Purchased: <span className="text-gold font-medium">{t.product}</span></p>
              </div>

              {/* Quote mark */}
              <div className="absolute top-4 right-5 text-gold/15 font-playfair text-7xl leading-none select-none pointer-events-none">
                "
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile — single card carousel */}
        <div className="md:hidden">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="relative bg-white rounded-2xl p-6 shadow-card"
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center flex-shrink-0">
                <span className="text-white font-semibold">{testimonials[activeIndex].avatar}</span>
              </div>
              <div>
                <p className="font-semibold text-dark">{testimonials[activeIndex].name}</p>
                <p className="text-muted text-xs">{testimonials[activeIndex].city}</p>
                <StarRating rating={testimonials[activeIndex].rating} />
              </div>
            </div>
            <p className="text-charcoal text-sm leading-relaxed">"{testimonials[activeIndex].review}"</p>
            <div className="mt-4 pt-4 border-t border-beige-200">
              <p className="text-muted text-xs">
                Purchased: <span className="text-gold font-medium">{testimonials[activeIndex].product}</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border-2 border-beige-600 text-muted hover:border-gold hover:text-gold flex items-center justify-center transition-colors duration-200"
            aria-label="Previous review"
          >
            <FiChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'w-5 h-2 bg-gold' : 'w-2 h-2 bg-beige-600 hover:bg-gold/50'
                }`}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border-2 border-beige-600 text-muted hover:border-gold hover:text-gold flex items-center justify-center transition-colors duration-200"
            aria-label="Next review"
          >
            <FiChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
