'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { WHATSAPP_NUMBER } from '@/data/products'

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [showChat, setShowChat] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
      setTimeout(() => setShowTooltip(true), 500)
      setTimeout(() => setShowTooltip(false), 5000)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Aansh%20Collection!%20I%20am%20interested%20in%20your%20collection.%20Can%20you%20help%20me?`

  if (!isVisible) return null

  return (
    <div className="fixed bottom-24 right-4 sm:bottom-8 sm:right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat bubble */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-card-hover p-4 w-72 border border-beige-200"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center">
                  <FaWhatsapp size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-dark text-sm">Aansh Collection</p>
                  <p className="text-xs text-green-600 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                    Online · Usually replies instantly
                  </p>
                </div>
              </div>
              <button onClick={() => setShowChat(false)} className="text-muted hover:text-dark transition-colors">
                <FiX size={18} />
              </button>
            </div>

            <div className="bg-beige-50 rounded-xl p-3 mb-3">
              <p className="text-dark text-sm leading-relaxed">
                👋 Hi! Welcome to <strong>Aansh Collection</strong>.<br />
                How can we help you today?
              </p>
              <p className="text-muted text-xs mt-1">
                Ask about products, pricing, or delivery!
              </p>
            </div>

            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full justify-center"
            >
              <FaWhatsapp size={18} />
              Start Chat on WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && !showChat && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="bg-dark text-white text-xs font-medium px-3 py-2 rounded-xl shadow-lg whitespace-nowrap"
          >
            💬 Need help? Chat with us!
            <div className="absolute right-2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-dark" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        onClick={() => setShowChat((v) => !v)}
        className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#128C7E] flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-gold"
        aria-label="Chat on WhatsApp"
      >
        {showChat ? (
          <FiX size={24} className="text-white" />
        ) : (
          <FaWhatsapp size={28} className="text-white" />
        )}

        {/* Notification dot */}
        {!showChat && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
            <span className="text-[8px] text-white font-bold leading-none">1</span>
          </span>
        )}
      </motion.button>
    </div>
  )
}
