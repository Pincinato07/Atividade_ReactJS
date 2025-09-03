import SharedLayout from '@/components/SharedLayout'
import HeroSection from '@/components/HeroSection'
import InfoSection from '@/components/InfoSection'

export default function Contato() {
  return (
    <SharedLayout showBackButton={true}>
      <HeroSection 
        title="CONTATO" 
        backgroundClass="hero-bg"
      />
      
      <InfoSection />
    </SharedLayout>
  )
}
