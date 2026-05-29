'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiInstagram, FiMenu, FiX } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { WHATSAPP_NUMBER, INSTAGRAM_HANDLE } from '@/data/products'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'New Arrivals', href: '#new-arrivals' },
  { name: 'Shop', href: '#categories' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'About', href: '#about' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Aansh%20Collection!%20I%20am%20interested%20in%20your%20collection.`
  const igHref = `https://www.instagram.com/${INSTAGRAM_HANDLE}`

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-ivory/95 backdrop-blur-lg shadow-card border-b border-beige-200'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-gold group-hover:shadow-gold-lg transition-all duration-300">
              <span className="font-playfair font-bold text-white text-base sm:text-lg leading-none">AC</span>
            </div>
            <div className="hidden sm:block leading-tight">
              <p className="font-playfair font-bold text-dark text-lg">Aansh Collection</p>
              <p className="text-muted text-[10px] tracking-[0.2em] uppercase font-light">Premium Ethnic Wear</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-charcoal hover:text-gold text-sm font-medium tracking-wide transition-colors duration-200 group"
              >
                {link.name}
                <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-gold rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={igHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted hover:text-gold transition-colors duration-200 p-1"
            >
              <FiInstagram size={20} />
            </a>
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <FaWhatsapp size={17} />
              WhatsApp Order
            </a>
          </div>

          {/* Mobile Icons */}
          <div className="flex items-center gap-3 lg:hidden">
            <a href={waHref} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-[#25D366]">
              <FaWhatsapp size={22} />
            </a>
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              className="text-dark p-1"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-ivory border-t border-beige shadow-card overflow-hidden"
          >
            <div className="container-custom py-3 flex flex-col">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-dark font-medium py-3 px-3 rounded-xl hover:bg-beige hover:text-gold transition-all text-sm"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href={igHref}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ x: -16, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.06 }}
                className="flex items-center gap-2 text-dark font-medium py-3 px-3 rounded-xl hover:bg-beige hover:text-gold transition-all text-sm mt-1 border-t border-beige pt-4"
              >
                <FiInstagram size={17} /> Follow on Instagram
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
