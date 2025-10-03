import Header from '@/components/Header'
import HeroSection from '@/components/sections/HeroSection'
import ConceptSection from '@/components/sections/ConceptSection'
import ActivitiesSection from '@/components/sections/ActivitiesSection'
import BenefitsSection from '@/components/sections/BenefitsSection'
import MembersSection from '@/components/sections/MembersSection'
import CTASection from '@/components/sections/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <div id="concept">
          <ConceptSection />
        </div>
        <div id="activities">
          <ActivitiesSection />
        </div>
        <div id="benefits">
          <BenefitsSection />
        </div>
        <div id="members">
          <MembersSection />
        </div>
        <CTASection />
        <Footer />
      </main>
    </>
  )
}