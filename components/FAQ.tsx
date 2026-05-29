'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { faqs, WHATSAPP_NUMBER } from '@/data/products'
import { FaWhatsapp } from 'react-icons/fa'

function FAQItem({ faq, isOpen, onToggle }: {
  faq: typeof faqs[0]
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className={`rounded-2xl overflow-hidden border transition-all duration-300 ${isOpen ? 'border-gold/40 shadow-gold' : 'border-beige-200 shadow-card'}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 sm:p-6 text-left bg-white hover:bg-cream transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <span className={`font-playfair font-semibold text-base sm:text-lg pr-4 leading-snug transition-colors duration-200 ${isOpen ? 'text-gold-dark' : 'text-dark'}`}>
          {faq.question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? 'bg-gold text-white' : 'bg-beige text-muted'}`}>
          {isOpen ? <FiMinus size={16} /> : <FiPlus size={16} />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 bg-white border-t border-beige-200">
              <p className="text-charcoal text-sm sm:text-base leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1)
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Aansh%20Collection!%20I%20have%20a%20question.`

  return (
    <section id="faq" className="py-16 sm:py-20 bg-ivory">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="section-label mb-2">Got Questions?</p>
          <h2 className="section-title">
            Frequently{' '}
            <span className="text-gradient-gold italic">Asked</span>
          </h2>
          <div className="gold-divider" />
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <FAQItem
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10 p-6 sm:p-8 rounded-2xl border border-beige-200 bg-white max-w-xl mx-auto"
        >
          <p className="text-dark font-playfair font-semibold text-lg mb-2">Still have questions?</p>
          <p className="text-muted text-sm mb-5">
            Our team is available on WhatsApp Monday–Saturday, 10 AM – 8 PM.
          </p>
          <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp mx-auto">
            <FaWhatsapp size={18} />
            Chat with Us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
