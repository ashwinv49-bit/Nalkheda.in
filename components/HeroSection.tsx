'use client'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { FiChevronDown } from 'react-icons/fi'
import { WHATSAPP_NUMBER } from '@/data/products'

const MandalaDecor = () => (
  <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="200" cy="200" r="180" stroke="#C9A84C" strokeWidth="0.8" opacity="0.25" />
    <circle cx="200" cy="200" r="150" stroke="#C9A84C" strokeWidth="0.8" opacity="0.3" />
    <circle cx="200" cy="200" r="120" stroke="#C9A84C" strokeWidth="1" opacity="0.35" />
    <circle cx="200" cy="200" r="90" stroke="#C9A84C" strokeWidth="1" opacity="0.4" />
    <circle cx="200" cy="200" r="60" stroke="#C9A84C" strokeWidth="1.2" opacity="0.45" />
    <circle cx="200" cy="200" r="30" stroke="#C9A84C" strokeWidth="1.5" opacity="0.5" />
    <circle cx="200" cy="200" r="10" fill="#C9A84C" opacity="0.3" />
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => {
      const rad = (angle * Math.PI) / 180
      const x1 = 200 + 30 * Math.cos(rad)
      const y1 = 200 + 30 * Math.sin(rad)
      const x2 = 200 + 180 * Math.cos(rad)
      const y2 = 200 + 180 * Math.sin(rad)
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#C9A84C" strokeWidth="0.5" opacity="0.2" />
    })}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
      const rad = (angle * Math.PI) / 180
      const cx = 200 + 105 * Math.cos(rad)
      const cy = 200 + 105 * Math.sin(rad)
      return (
        <ellipse
          key={i}
          cx={cx}
          cy={cy}
          rx="12"
          ry="22"
          transform={`rotate(${angle + 90}, ${cx}, ${cy})`}
          fill="#C9A84C"
          opacity="0.18"
        />
      )
    })}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
      const rad = (angle * Math.PI) / 180
      const cx = 200 + 65 * Math.cos(rad)
      const cy = 200 + 65 * Math.sin(rad)
      return <circle key={i} cx={cx} cy={cy} r="6" fill="#C9A84C" opacity="0.22" />
    })}
  </svg>
)

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function HeroSection() {
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Aansh%20Collection!%20I%20want%20to%20place%20an%20order.`

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ethnic-pattern"
      style={{
        background:
          'linear-gradient(135deg, #FEFDF7 0%, #F9F1E0 30%, #FEFDF7 55%, #FDF0F3 80%, #F5EFE0 100%)',
      }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blush/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-beige-200/60 rounded-full blur-2xl pointer-events-none" />

      <div className="container-custom relative z-10 py-32 sm:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-block section-label mb-4">
                ✦ New Collection 2025 ✦
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-playfair text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-dark leading-tight mb-6"
            >
              Elegance{' '}
              <span className="text-gradient-gold italic">Woven</span>
              <br />
              Into Every{' '}
              <span className="relative">
                Style
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 8 C50 2, 100 10, 198 4"
                    stroke="#C9A84C"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.7"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-muted text-base sm:text-lg leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
              Curated ethnic wear for every celebration — from everyday grace to festive grandeur.{' '}
              <span className="text-gold font-medium">Premium quality at honest prices.</span>
            </motion.p>

            {/* Stats */}
            <motion.div variants={fadeUp} className="flex items-center justify-center lg:justify-start gap-8 mb-10">
              {[
                { value: '500+', label: 'Happy Customers' },
                { value: '50+', label: 'New Styles / Month' },
                { value: '4.9★', label: 'Average Rating' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-playfair font-bold text-2xl text-gradient-gold">{stat.value}</p>
                  <p className="text-muted text-xs font-medium mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#new-arrivals" className="btn-primary text-base px-8 py-4">
                Shop Collection
              </a>
              <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base px-8 py-4">
                <FaWhatsapp size={20} />
                WhatsApp Order
              </a>
            </motion.div>

            <motion.p variants={fadeUp} className="mt-5 text-xs text-muted flex items-center justify-center lg:justify-start gap-4">
              <span>✓ COD Available</span>
              <span>✓ Pan India Delivery</span>
              <span>✓ Easy Exchange</span>
            </motion.p>
          </motion.div>

          {/* Mandala Decoration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
            className="order-1 lg:order-2 flex items-center justify-center"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Outer rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0"
              >
                <MandalaDecor />
              </motion.div>

              {/* Center card */}
              <div className="absolute inset-8 sm:inset-10 rounded-full overflow-hidden shadow-gold-lg flex items-center justify-center"
                style={{
                  background: 'linear-gradient(145deg, #F5EFE0 0%, #FEFDF7 40%, #FDF0F3 70%, #F0E3BE 100%)',
                  border: '2px solid rgba(201,168,76,0.3)',
                }}
              >
                <div className="text-center px-4">
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-3 flex items-center justify-center shadow-gold"
                    style={{ background: 'linear-gradient(135deg, #C9A84C, #9A7A26)' }}
                  >
                    <span className="font-playfair font-bold text-white text-2xl sm:text-3xl">AC</span>
                  </div>
                  <p className="font-playfair font-semibold text-dark text-sm sm:text-base">Aansh Collection</p>
                  <p className="text-muted text-[10px] tracking-widest uppercase mt-1">Premium Ethnic Wear</p>
                  <div className="flex justify-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-gold text-sm">★</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-2 right-4 bg-white rounded-xl shadow-card px-3 py-2 border border-beige-200"
              >
                <p className="text-[10px] text-muted">COD Available</p>
                <p className="text-xs font-semibold text-dark">✓ No Advance</p>
              </motion.div>

              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-2 left-4 bg-white rounded-xl shadow-card px-3 py-2 border border-beige-200"
              >
                <p className="text-[10px] text-muted">Pan India</p>
                <p className="text-xs font-semibold text-dark">🚚 Free Shipping</p>
              </motion.div>

              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute top-1/2 -right-6 bg-gold rounded-xl shadow-gold px-3 py-2 -translate-y-1/2"
              >
                <p className="text-[10px] text-white/80">New</p>
                <p className="text-xs font-semibold text-white">Arrivals ✨</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#features"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted hover:text-gold transition-colors duration-200"
      >
        <span className="text-xs tracking-widest uppercase font-light">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <FiChevronDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  )
}
