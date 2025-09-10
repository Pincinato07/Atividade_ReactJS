'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import SharedLayout from '@/components/SharedLayout'
import HeroSection from '@/components/HeroSection'
import InfoSection from '@/components/InfoSection'

export default function Cursos() {
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()

  const courses = [
    { id: 1, name: 'Publicidade', image: 'Foto Publicidade2.png', description: 'Criatividade e estratégia' },
    { id: 2, name: 'Gastronomia', image: 'Foto gastronomia.png', description: 'Arte culinária' },
    { id: 3, name: 'Medicina', image: 'Foto medicina.png', description: 'Cuidar de vidas' },
    { id: 4, name: 'Arquitetura', image: 'Foto arquitetura.png', description: 'Design e construção' },
  ]

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleCourseClick = (courseName: string) => {
    if (courseName === 'Publicidade') {
      router.push('/cursos/publicidade-e-propaganda')
    }
  }

  return (
    <SharedLayout showBackButton={true}>
      <HeroSection 
        title="CURSOS" 
        backgroundClass="courses-bg"
        backgroundImage="Foto.png"
      />

      {/* Introduction, Search and Course Grid Section - Tudo em uma única seção */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Conheça Nossos Cursos
            </h2>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Pesquisar..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-univille-green focus:border-transparent"
                />
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            <div className="max-w-4xl mx-auto mb-16">
              <p className="text-lg text-gray-700 leading-relaxed">
                Sed ullamcorper porttitor justo non suscipit. Nam ac diam tincidunt, hendrerit purus in, lacinia urna. Fusce a arcu non ipsum semper ultricies.Sed ullamcorper porttitor justo non suscipit. Nam ac diam tincidunt, hendrerit purus in
              </p>
            </div>
          </div>
          {/* Courses Grid - 3x4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.concat(courses).concat(courses).map((course, index) => (
              <div
                key={`${course.id}-${index}`}
                className="relative rounded overflow-hidden aspect-[3/4] cursor-pointer"
                onClick={() => handleCourseClick(course.name)}
              >
                <img src={`/images/${course.image}`} alt={course.name} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-x-0 bottom-0 flex justify-center px-6 pb-6">
                  <h3 className="text-2xl font-extrabold text-white text-center">{course.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InfoSection />
    </SharedLayout>
  )
}
