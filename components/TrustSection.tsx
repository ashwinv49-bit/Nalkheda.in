'use client'
import { motion } from 'framer-motion'
import { FiShield, FiRefreshCw, FiMessageCircle, FiZap } from 'react-icons/fi'

const trustItems = [
  {
    icon: FiShield,
    title: 'Secure Payments',
    description: '100% safe & encrypted payment options including UPI, cards, and COD.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: FiRefreshCw,
    title: 'Easy Exchange',
    description: 'Hassle-free 7-day exchange for size or quality issues.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: FiMessageCircle,
    title: 'WhatsApp Support',
    description: 'Get instant help from our team. We respond within minutes.',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    icon: FiZap,
    title: 'Fast Delivery',
    description: 'Orders dispatched within 24 hrs. Delivered in 5-7 business days.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
]

export default function TrustSection() {
  return (
    <section className="py-12 sm:py-16" style={{ background: 'linear-gradient(135deg, #F5EFE0 0%, #FEFDF7 50%, #FDF0F3 100%)' }}>
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-3 text-center sm:text-left"
            >
              <div className={`w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}>
                <item.icon size={20} className={item.color} />
              </div>
              <div>
                <h3 className="font-semibold text-dark text-sm mb-0.5">{item.title}</h3>
                <p className="text-muted text-xs leading-relaxed hidden sm:block">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
