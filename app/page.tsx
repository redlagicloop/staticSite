import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import StrategicMandateSection from '@/components/StrategicMandateSection'
import SolutionsOverviewSection from '@/components/SolutionsOverviewSection'
import MagicKubesAdvantageSection from '@/components/MagicKubesAdvantageSection'
import CallToActionSection from '@/components/CallToActionSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StrategicMandateSection />
        <SolutionsOverviewSection />
        <MagicKubesAdvantageSection />
        <CallToActionSection />
      </main>
      <Footer />
    </>
  )
} 