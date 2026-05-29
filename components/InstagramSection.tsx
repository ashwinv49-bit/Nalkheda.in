'use client'
import { motion } from 'framer-motion'
import { FiInstagram, FiPlay } from 'react-icons/fi'
import { FaHeart } from 'react-icons/fa'
import { INSTAGRAM_HANDLE } from '@/data/products'

const reels = [
  { id: 1, gradient: 'linear-gradient(145deg,#8B1A1A,#C9A84C)', likes: '1.2k', caption: 'Bandhani Kurti Drop 🔥', isReel: true },
  { id: 2, gradient: 'linear-gradient(145deg,#1A3A6A,#5B9BD5)', likes: '890', caption: 'Co-ord Sets for Every Vibe ✨', isReel: false },
  { id: 3, gradient: 'linear-gradient(145deg,#4A0E6A,#A855F7)', likes: '2.1k', caption: 'Saree Styling 101 👑', isReel: true },
  { id: 4, gradient: 'linear-gradient(145deg,#7A4000,#F39C12)', likes: '1.5k', caption: 'Festive Lookbook 🪔', isReel: true },
  { id: 5, gradient: 'linear-gradient(145deg,#0D6E4E,#88D498)', likes: '750', caption: 'Daily Wear Haul 🌸', isReel: false },
  { id: 6, gradient: 'linear-gradient(145deg,#6B0000,#E74C3C)', likes: '3.4k', caption: 'Bridal Lehenga Special 💕', isReel: true },
]

export default function InstagramSection() {
  const igHref = `https://www.instagram.com/${INSTAGRAM_HANDLE}`

  return (
    <section id="instagram" className="py-16 sm:py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <FiInstagram size={20} className="text-gold" />
            <p className="section-label">@{INSTAGRAM_HANDLE}</p>
          </div>
          <h2 className="section-title">
            Follow Our{' '}
            <span className="text-gradient-gold italic">Journey</span>
          </h2>
          <div className="gold-divider" />
          <p className="text-muted mt-4 text-sm">
            Daily style inspiration, behind-the-scenes, and new drops — straight from our Instagram.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-10">
          {reels.map((reel, i) => (
            <motion.a
              key={reel.id}
              href={igHref}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="relative rounded-2xl overflow-hidden aspect-square group cursor-pointer"
              style={{ background: reel.gradient }}
            >
              <div className="absolute inset-0 bg-fabric-pattern opacity-20" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
                  {reel.isReel && (
                    <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center">
                      <FiPlay size={18} className="text-dark ml-0.5" />
                    </div>
                  )}
                  <div className="flex items-center gap-1.5 text-white text-sm font-medium">
                    <FaHeart size={14} className="text-blush" />
                    {reel.likes}
                  </div>
                </div>
              </div>

              {/* Reel indicator */}
              {reel.isReel && (
                <div className="absolute top-2 right-2">
                  <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                    <FiPlay size={12} className="text-white ml-0.5" />
                  </div>
                </div>
              )}

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-dark/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-xs font-medium leading-tight">{reel.caption}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href={igHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#F09433] via-[#E6683C] via-[#DC2743] to-[#BC1888] text-white px-8 py-3.5 rounded-full font-semibold text-sm shadow-md hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300"
          >
            <FiInstagram size={18} />
            Follow @{INSTAGRAM_HANDLE}
          </a>
          <p className="text-muted text-xs mt-3">
            New drops every week · Style tips · Behind the scenes
          </p>
        </motion.div>
      </div>
    </section>
  )
}
