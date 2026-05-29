'use client'
import { motion } from 'framer-motion'
import { FiInstagram, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { WHATSAPP_NUMBER, INSTAGRAM_HANDLE, BRAND_EMAIL } from '@/data/products'

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'New Arrivals', href: '#new-arrivals' },
  { name: 'Kurti Sets', href: '#categories' },
  { name: 'Sarees', href: '#categories' },
  { name: 'Co-ord Sets', href: '#categories' },
  { name: 'Festive Wear', href: '#categories' },
]

const helpLinks = [
  { name: 'How to Order', href: '#faq' },
  { name: 'Delivery Info', href: '#faq' },
  { name: 'Exchange Policy', href: '#faq' },
  { name: 'COD Policy', href: '#faq' },
  { name: 'About Us', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Aansh%20Collection!`
  const igHref = `https://www.instagram.com/${INSTAGRAM_HANDLE}`
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-dark text-white">
      {/* Top CTA Band */}
      <div className="bg-gradient-to-r from-gold-dark via-gold to-gold-dark py-5">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-playfair font-bold text-white text-xl">Ready to shop?</p>
            <p className="text-white/85 text-sm">Order via WhatsApp and get exclusive deals.</p>
          </div>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-gold-dark font-semibold px-6 py-3 rounded-full hover:bg-ivory transition-colors duration-200 text-sm shadow-md whitespace-nowrap"
          >
            <FaWhatsapp size={18} />
            WhatsApp Us Now
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-gold">
                <span className="font-playfair font-bold text-white text-lg">AC</span>
              </div>
              <div>
                <p className="font-playfair font-bold text-white text-lg leading-tight">Aansh Collection</p>
                <p className="text-warm-gray text-[10px] tracking-widest uppercase">Premium Ethnic Wear</p>
              </div>
            </div>
            <p className="text-warm-gray text-sm leading-relaxed mb-5">
              Curated ethnic wear for every celebration. Premium jewellery, fashion & sarees at honest prices.
            </p>
            <div className="flex gap-3">
              <a
                href={igHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-all duration-200"
              >
                <FiInstagram size={18} />
              </a>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#25D366] flex items-center justify-center transition-all duration-200"
              >
                <FaWhatsapp size={18} />
              </a>
              <a
                href={`mailto:${BRAND_EMAIL}`}
                aria-label="Email"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-all duration-200"
              >
                <FiMail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-semibold text-white text-base mb-5">Shop</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-warm-gray hover:text-gold text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/0 group-hover:bg-gold transition-all duration-200" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-playfair font-semibold text-white text-base mb-5">Help</h4>
            <ul className="space-y-2.5">
              {helpLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-warm-gray hover:text-gold text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/0 group-hover:bg-gold transition-all duration-200" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair font-semibold text-white text-base mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href={waHref} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-warm-gray hover:text-gold transition-colors duration-200 group">
                  <FaWhatsapp size={17} className="text-[#25D366] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white text-sm font-medium">WhatsApp</p>
                    <p className="text-xs">+91 98765 43210</p>
                    <p className="text-xs opacity-75">Mon–Sat, 10 AM – 8 PM</p>
                  </div>
                </a>
              </li>
              <li>
                <a href={igHref} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-warm-gray hover:text-gold transition-colors duration-200">
                  <FiInstagram size={17} className="mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white text-sm font-medium">Instagram</p>
                    <p className="text-xs">@{INSTAGRAM_HANDLE}</p>
                  </div>
                </a>
              </li>
              <li>
                <a href={`mailto:${BRAND_EMAIL}`} className="flex items-start gap-3 text-warm-gray hover:text-gold transition-colors duration-200">
                  <FiMail size={17} className="mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white text-sm font-medium">Email</p>
                    <p className="text-xs">{BRAND_EMAIL}</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-warm-gray">
                <FiMapPin size={17} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium">Ships From</p>
                  <p className="text-xs">Pan India Delivery</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-warm-gray text-xs">
            © {year} Aansh Collection. All rights reserved.
          </p>
          <p className="text-warm-gray text-xs">
            Made with <span className="text-blush">♥</span> for Indian Fashion Lovers
          </p>
          <div className="flex gap-4">
            {['Privacy Policy', 'Terms of Service'].map((link) => (
              <a key={link} href="#" className="text-warm-gray hover:text-gold text-xs transition-colors duration-200">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
