import SharedLayout from '@/components/SharedLayout'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import CoursesPreviewSection from '@/components/CoursesPreviewSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import InfoSection from '@/components/InfoSection'

export default function Home() {
  const stats = [
    { value: "80+", label: "cursos para escolher" },
    { value: "40", label: "anos de experiência" },
    { value: "10/10", label: "nota no MEC" },
    { value: "50.000", label: "alunos formados" }
  ]

  const courses = [
    { name: "Publicidade", image: "Foto Publicidade.png" },
    { name: "Gastronomia", image: "Foto Gastronomia.png" },
    { name: "Medicina", image: "Foto Medicina.png" }
  ]

  const testimonials = [
    {
      name: "JOSE LUIZ",
      initials: "JL",
      quote: "Muito show o curso eu e a ela rol. A qualidade do ensino e a infraestrutura da Univille são excepcionais. Recomendo para todos que buscam uma formação de qualidade.",
      icon: "👨‍🎓",
      title: "Aluno Destaque",
      subtitle: "Reconhecimento acadêmico",
      gradient: "from-yellow-400 to-orange-500"
    }
  ]

  return (
    <SharedLayout>
      <HeroSection 
        title="GRADUAÇÃO UNI" 
        showButton={true}
        buttonText="EMBARQUE"
        buttonHref="/cursos"
        backgroundImage="hero-bg.png"
        stats={stats}
      />

      <AboutSection />

      <CoursesPreviewSection courses={courses} />

      <TestimonialsSection testimonials={testimonials} />

      <InfoSection />
    </SharedLayout>
  )
}