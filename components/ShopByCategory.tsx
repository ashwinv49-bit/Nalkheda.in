'use client'
import { motion } from 'framer-motion'
import { categories } from '@/data/products'

export default function ShopByCategory() {
  return (
    <section id="categories" className="py-16 sm:py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="section-label mb-2">Explore Styles</p>
          <h2 className="section-title">
            Shop By{' '}
            <span className="text-gradient-gold italic">Category</span>
          </h2>
          <div className="gold-divider" />
        </motion.div>

        {/* Featured first category */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
          <motion.a
            href={`#new-arrivals`}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 relative rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-auto group cursor-pointer"
            style={{ background: categories[0].gradient, minHeight: '200px' }}
          >
            <div className="absolute inset-0 bg-fabric-pattern opacity-20" />
            <div className="absolute inset-0 flex flex-col items-start justify-end p-6 sm:p-8">
              <span className="text-4xl mb-3">{categories[0].emoji}</span>
              <h3 className="font-playfair font-bold text-white text-2xl sm:text-3xl mb-1">
                {categories[0].name}
              </h3>
              <p className="text-white/80 text-sm mb-3">{categories[0].description}</p>
              <span className="inline-block text-white/90 text-xs font-medium bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/30">
                {categories[0].count} →
              </span>
            </div>
          </motion.a>

          <div className="lg:col-span-2 grid grid-cols-2 gap-5">
            {categories.slice(1, 3).map((cat, i) => (
              <motion.a
                key={cat.id}
                href="#new-arrivals"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative rounded-2xl overflow-hidden aspect-square group cursor-pointer"
                style={{ background: cat.gradient }}
              >
                <div className="absolute inset-0 bg-fabric-pattern opacity-20" />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-5">
                  <span className="text-3xl mb-2">{cat.emoji}</span>
                  <h3 className="font-playfair font-bold text-white text-xl mb-0.5">{cat.name}</h3>
                  <p className="text-white/80 text-xs">{cat.count}</p>
                </div>
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/15 transition-colors duration-300" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom 2 categories */}
        <div className="grid grid-cols-2 gap-5">
          {categories.slice(3).map((cat, i) => (
            <motion.a
              key={cat.id}
              href="#new-arrivals"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl overflow-hidden aspect-video group cursor-pointer"
              style={{ background: cat.gradient }}
            >
              <div className="absolute inset-0 bg-fabric-pattern opacity-20" />
              <div className="absolute inset-0 flex flex-col items-start justify-end p-5 sm:p-6">
                <span className="text-3xl mb-2">{cat.emoji}</span>
                <h3 className="font-playfair font-bold text-white text-xl sm:text-2xl mb-1">{cat.name}</h3>
                <p className="text-white/80 text-sm">{cat.description} · {cat.count}</p>
              </div>
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/15 transition-colors duration-300" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
