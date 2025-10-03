import HeroSection from '@/components/sections/HeroSection'
import ConceptSection from '@/components/sections/ConceptSection'
import ActivitiesSection from '@/components/sections/ActivitiesSection'
import BenefitsSection from '@/components/sections/BenefitsSection'
import MembersSection from '@/components/sections/MembersSection'
import CTASection from '@/components/sections/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ConceptSection />
      <ActivitiesSection />
      <BenefitsSection />
      <MembersSection />
      <CTASection />
      <Footer />
    </main>
  )
}