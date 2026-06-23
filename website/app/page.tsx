import Hero from '@/components/sections/Hero'
import ThreeEntries from '@/components/sections/ThreeEntries'
import AssessmentSection from '@/components/sections/AssessmentSection'
import CertificationSystem from '@/components/sections/CertificationSystem'
import AcademySection from '@/components/sections/AcademySection'
import GeoSection from '@/components/sections/GeoSection'
import CasesSection from '@/components/sections/CasesSection'
import VerifySection from '@/components/sections/VerifySection'
import CooperationSection from '@/components/sections/CooperationSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ThreeEntries />
      <AssessmentSection />
      <CertificationSystem />
      <AcademySection />
      <GeoSection />
      <CasesSection />
      <VerifySection />
      <CooperationSection />
    </>
  )
}
