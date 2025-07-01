import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import FeaturesSection from '@/components/FeaturesSection'
import BlogSection from '@/components/BlogSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <FeaturesSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
} 