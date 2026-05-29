import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import FeatureHighlights from '@/components/FeatureHighlights'
import NewArrivals from '@/components/NewArrivals'
import ShopByCategory from '@/components/ShopByCategory'
import InstagramSection from '@/components/InstagramSection'
import CustomerReviews from '@/components/CustomerReviews'
import TrustSection from '@/components/TrustSection'
import AboutBrand from '@/components/AboutBrand'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import MobileBottomNav from '@/components/MobileBottomNav'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeatureHighlights />
        <NewArrivals />
        <ShopByCategory />
        <TrustSection />
        <CustomerReviews />
        <InstagramSection />
        <AboutBrand />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileBottomNav />
    </>
  )
}
