import SharedLayout from '@/components/SharedLayout'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import StatisticsSection from '@/components/StatisticsSection'
import InfoSection from '@/components/InfoSection'

export default function Sobre() {
  const stats = [
    { value: "40+", label: "anos de experiência" },
    { value: "50.000", label: "alunos formados" },
    { value: "10/10", label: "nota no MEC" },
    { value: "80+", label: "cursos oferecidos" }
  ]

  return (
    <SharedLayout showBackButton={true}>
      <HeroSection 
        title="SOBRE NÓS" 
        backgroundClass="hero-bg"
      />
      
      <AboutSection />

      <StatisticsSection stats={stats} />

      <InfoSection />
    </SharedLayout>
  )
}
