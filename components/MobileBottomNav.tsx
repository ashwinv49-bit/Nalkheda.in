'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiHome, FiGrid, FiHeart, FiInstagram } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { WHATSAPP_NUMBER, INSTAGRAM_HANDLE } from '@/data/products'

const navItems = [
  { icon: FiHome, label: 'Home', href: '#home', id: 'home' },
  { icon: FiGrid, label: 'Shop', href: '#categories', id: 'shop' },
  { icon: FaWhatsapp, label: 'Order', href: `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Aansh%20Collection!`, id: 'whatsapp', external: true, accent: true },
  { icon: FiInstagram, label: 'Insta', href: `https://www.instagram.com/${INSTAGRAM_HANDLE}`, id: 'instagram', external: true },
  { icon: FiHeart, label: 'Offers', href: '#new-arrivals', id: 'offers' },
]

export default function MobileBottomNav() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const sections = ['home', 'new-arrivals', 'categories', 'reviews', 'about']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            if (id === 'home') setActive('home')
            else if (id === 'new-arrivals' || id === 'categories') setActive('shop')
            else if (id === 'reviews' || id === 'about') setActive('offers')
          }
        })
      },
      { threshold: 0.3 }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white/95 backdrop-blur-lg border-t border-beige-200 shadow-[0_-4px_20px_rgba(45,39,38,0.08)] pb-safe">
      <div className="flex items-center justify-around py-2 px-2">
        {navItems.map((item) => {
          const isActive = active === item.id
          const isWhatsApp = item.id === 'whatsapp'

          if (isWhatsApp) {
            return (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center -mt-5"
                aria-label={item.label}
              >
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg"
                  style={{ boxShadow: '0 4px 20px rgba(37,211,102,0.5)' }}
                >
                  <item.icon size={26} className="text-white" />
                </motion.div>
                <span className="text-[10px] text-muted font-medium mt-0.5">{item.label}</span>
              </a>
            )
          }

          return (
            <a
              key={item.id}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              onClick={() => !item.external && setActive(item.id)}
              className="flex flex-col items-center py-1 px-3 min-w-0"
              aria-label={item.label}
            >
              <motion.div
                whileTap={{ scale: 0.85 }}
                className={`w-8 h-8 flex items-center justify-center rounded-xl transition-all duration-200 ${
                  isActive ? 'bg-gold/15' : ''
                }`}
              >
                <item.icon
                  size={22}
                  className={`transition-colors duration-200 ${isActive ? 'text-gold' : 'text-muted'}`}
                />
              </motion.div>
              <span className={`text-[10px] font-medium mt-0.5 transition-colors duration-200 ${isActive ? 'text-gold' : 'text-muted'}`}>
                {item.label}
              </span>
              {isActive && (
                <motion.div
                  layoutId="active-dot"
                  className="w-1 h-1 rounded-full bg-gold mt-0.5"
                />
              )}
            </a>
          )
        })}
      </div>
    </nav>
  )
}
