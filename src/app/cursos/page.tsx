'use client'

import { useState } from 'react'
import SharedLayout from '@/components/SharedLayout'
import HeroSection from '@/components/HeroSection'
import InfoSection from '@/components/InfoSection'

export default function Cursos() {
  const [searchTerm, setSearchTerm] = useState('')

  const courses = [
    { id: 1, name: 'Publicidade', image: 'bg-gradient-to-br from-blue-600 to-blue-800', icon: '🏙️', description: 'Criatividade e estratégia' },
    { id: 2, name: 'Gastronomia', image: 'bg-gradient-to-br from-orange-500 to-red-500', icon: '🍰', description: 'Arte culinária' },
    { id: 3, name: 'Medicina', image: 'bg-gradient-to-br from-green-600 to-green-800', icon: '🩺', description: 'Cuidar de vidas' },
    { id: 4, name: 'Arquitetura', image: 'bg-gradient-to-br from-purple-600 to-purple-800', icon: '🏗️', description: 'Design e construção' },
    { id: 5, name: 'Engenharia', image: 'bg-gradient-to-br from-gray-600 to-gray-800', icon: '⚙️', description: 'Inovação tecnológica' },
    { id: 6, name: 'Direito', image: 'bg-gradient-to-br from-yellow-600 to-yellow-800', icon: '⚖️', description: 'Justiça e ética' },
    { id: 7, name: 'Psicologia', image: 'bg-gradient-to-br from-pink-500 to-pink-700', icon: '🧠', description: 'Comportamento humano' },
    { id: 8, name: 'Administração', image: 'bg-gradient-to-br from-indigo-600 to-indigo-800', icon: '📊', description: 'Gestão empresarial' },
    { id: 9, name: 'Enfermagem', image: 'bg-gradient-to-br from-red-500 to-red-700', icon: '🏥', description: 'Cuidado e saúde' },
    { id: 10, name: 'Fisioterapia', image: 'bg-gradient-to-br from-teal-500 to-teal-700', icon: '💪', description: 'Reabilitação' },
    { id: 11, name: 'Odontologia', image: 'bg-gradient-to-br from-cyan-500 to-cyan-700', icon: '🦷', description: 'Saúde bucal' },
    { id: 12, name: 'Veterinária', image: 'bg-gradient-to-br from-emerald-500 to-emerald-700', icon: '🐕', description: 'Cuidado animal' },
  ]

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <SharedLayout showBackButton={true}>
      <HeroSection 
        title="CURSOS" 
        backgroundClass="courses-bg"
      />

      {/* Introduction and Search Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
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

            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                A Univille oferece uma ampla gama de cursos de graduação, pós-graduação e extensão, 
                todos reconhecidos pelo MEC com nota máxima. Nossa instituição possui mais de 40 anos 
                de experiência em educação superior, formando profissionais qualificados para o mercado de trabalho.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nossos cursos são desenvolvidos com base nas demandas do mercado, utilizando metodologias 
                inovadoras e uma infraestrutura moderna que proporciona aos nossos alunos uma formação 
                completa e atualizada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Grid Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="course-card card-hover h-64 rounded-lg flex items-end p-6 cursor-pointer relative overflow-hidden"
              >
                <div className={`absolute inset-0 ${course.image} rounded-lg`}></div>
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="absolute top-4 right-4 text-3xl opacity-60">{course.icon}</div>
                <div className="course-card-content relative z-10">
                  <h3 className="text-xl font-bold text-white mb-1">{course.name}</h3>
                  <p className="text-white opacity-90 text-sm">{course.description}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">Nenhum curso encontrado</h3>
              <p className="text-gray-600">Tente pesquisar com outros termos.</p>
            </div>
          )}
        </div>
      </section>

      <InfoSection />
    </SharedLayout>
  )
}
