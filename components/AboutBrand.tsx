'use client'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { WHATSAPP_NUMBER, INSTAGRAM_HANDLE } from '@/data/products'

const stats = [
  { value: '500+', label: 'Happy Customers' },
  { value: '1000+', label: 'Orders Delivered' },
  { value: '50+', label: 'New Styles / Month' },
  { value: '4.9★', label: 'Average Rating' },
]

export default function AboutBrand() {
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Aansh%20Collection!%20I%20want%20to%20know%20more%20about%20your%20brand.`
  const igHref = `https://www.instagram.com/${INSTAGRAM_HANDLE}`

  return (
    <section id="about" className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Decorative Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            {/* Main card */}
            <div
              className="relative rounded-3xl p-8 sm:p-10 text-center overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #F5EFE0 0%, #FEFDF7 40%, #FDF0F3 70%, #F0E3BE 100%)',
                border: '1.5px solid rgba(201,168,76,0.25)',
              }}
            >
              <div className="absolute inset-0 bg-ethnic-pattern opacity-60" />
              <div className="relative z-10">
                {/* Logo */}
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-24 h-24 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center mx-auto mb-6 shadow-gold-lg"
                >
                  <span className="font-playfair font-bold text-white text-4xl">AC</span>
                </motion.div>

                <h3 className="font-playfair font-bold text-dark text-2xl mb-2">Aansh Collection</h3>
                <p className="text-gold text-xs tracking-[0.25em] uppercase mb-6">Premium Ethnic Wear</p>

                {/* Divider */}
                <div className="gold-divider mb-6" />

                {/* Quote */}
                <blockquote className="font-playfair italic text-charcoal text-lg leading-relaxed">
                  "Where tradition meets modern elegance — every piece tells a story of Indian craftsmanship."
                </blockquote>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white/70 backdrop-blur-sm rounded-xl p-3 border border-gold/20"
                    >
                      <p className="font-playfair font-bold text-2xl text-gradient-gold">{stat.value}</p>
                      <p className="text-muted text-xs mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating decorative */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-5 -right-5 w-14 h-14 rounded-full bg-gold flex items-center justify-center shadow-gold text-white text-2xl"
            >
              ✨
            </motion.div>
            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="absolute -bottom-5 -left-5 w-14 h-14 rounded-full bg-blush flex items-center justify-center shadow-md text-2xl"
            >
              🪡
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <p className="section-label mb-3">Our Story</p>
            <h2 className="section-title mb-6">
              Celebrating the{' '}
              <span className="text-gradient-gold italic">Modern Indian Woman</span>
            </h2>

            <div className="space-y-4 text-charcoal text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-dark">Aansh Collection</strong> was born from a simple belief —
                every Indian woman deserves to look and feel extraordinary, without breaking the bank.
              </p>
              <p>
                We celebrate the timeless elegance of ethnic wear, curating handpicked pieces that blend
                traditional craftsmanship with contemporary silhouettes. From everyday cotton kurtis to
                statement bridal lehengas, every item in our collection is chosen with love and intention.
              </p>
              <p>
                What started as a small Instagram boutique has grown into a community of hundreds of
                women across India who trust us for their most special moments — from festivals to weddings,
                from office days to family gatherings.
              </p>
              <p>
                <span className="text-gold font-semibold">Best Quality @ Lowest Price</span> isn't just our
                tagline — it's our promise to you.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8 space-y-3">
              {[
                { icon: '🎯', text: 'Handpicked quality for every occasion' },
                { icon: '💛', text: 'Honest pricing — no compromise on value' },
                { icon: '🇮🇳', text: 'Proudly supporting Indian artisans' },
                { icon: '📱', text: 'Instagram-first boutique — follow for daily drops' },
              ].map((val) => (
                <div key={val.text} className="flex items-center gap-3">
                  <span className="text-lg">{val.icon}</span>
                  <p className="text-charcoal text-sm">{val.text}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <FaWhatsapp size={18} />
                Chat with Us
              </a>
              <a href={igHref} target="_blank" rel="noopener noreferrer" className="btn-outline">
                <FiInstagram size={18} />
                Follow on Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
