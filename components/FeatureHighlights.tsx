'use client'
import { motion } from 'framer-motion'
import { FiAward, FiTruck, FiRefreshCw, FiInstagram } from 'react-icons/fi'
import { RiSecurePaymentLine } from 'react-icons/ri'

const features = [
  {
    icon: FiAward,
    title: 'Premium Quality',
    description: 'Handpicked fabrics and artisan craftsmanship — every piece meets our strict quality standard.',
    color: 'from-gold/20 to-gold/5',
    iconBg: 'bg-gold/15',
    iconColor: 'text-gold-dark',
  },
  {
    icon: RiSecurePaymentLine,
    title: 'COD Available',
    description: 'Pay only when your order arrives. No advance payment needed on most orders.',
    color: 'from-green-500/10 to-green-500/5',
    iconBg: 'bg-green-500/15',
    iconColor: 'text-green-700',
  },
  {
    icon: FiTruck,
    title: 'Pan India Shipping',
    description: 'Fast delivery to every corner of India in 5-7 days. Free shipping above ₹999.',
    color: 'from-blue-500/10 to-blue-500/5',
    iconBg: 'bg-blue-500/15',
    iconColor: 'text-blue-700',
  },
  {
    icon: FiInstagram,
    title: 'Trusted Instagram Boutique',
    description: 'Loved by hundreds of women across India. Follow @aansh_collection for daily inspiration.',
    color: 'from-blush/30 to-blush/10',
    iconBg: 'bg-blush/40',
    iconColor: 'text-pink-700',
  },
]

export default function FeatureHighlights() {
  return (
    <section id="features" className="py-16 sm:py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="section-label mb-2">Why Choose Us</p>
          <h2 className="section-title">
            Shopping Made{' '}
            <span className="text-gradient-gold italic">Beautiful</span>
          </h2>
          <div className="gold-divider" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-6 bg-gradient-to-br ${feature.color} border border-beige-200 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group`}
            >
              <div className={`w-12 h-12 rounded-xl ${feature.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon size={22} className={feature.iconColor} />
              </div>
              <h3 className="font-playfair font-semibold text-dark text-lg mb-2 leading-tight">
                {feature.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
