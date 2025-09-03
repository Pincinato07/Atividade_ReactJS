import Header from '@/components/Header'
import Footer from '@/components/Footer'
import InfoSection from '@/components/InfoSection'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-univille-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-bg min-h-screen flex items-center justify-center pt-16 relative">
        <div className="stars"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8">
            GRADUAÇÃO UNI
          </h1>
          <Link
            href="/cursos"
            className="inline-block bg-univille-dark hover:bg-gray-800 text-white font-semibold px-12 py-4 rounded-lg transition-colors duration-300 text-lg"
          >
            EMBARQUE
          </Link>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-univille-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="stat-card p-8 rounded-lg text-center">
              <div className="text-4xl font-bold text-white mb-2">80+</div>
              <div className="text-white text-sm">cursos para escolher</div>
            </div>
            <div className="stat-card p-8 rounded-lg text-center">
              <div className="text-4xl font-bold text-white mb-2">40</div>
              <div className="text-white text-sm">anos de experiência</div>
            </div>
            <div className="stat-card p-8 rounded-lg text-center">
              <div className="text-4xl font-bold text-white mb-2">10/10</div>
              <div className="text-white text-sm">nota no MEC</div>
            </div>
            <div className="stat-card p-8 rounded-lg text-center">
              <div className="text-4xl font-bold text-white mb-2">50.000</div>
              <div className="text-white text-sm">alunos formados</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">SOBRE A UNIVILLE</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                A Univille é uma instituição de ensino superior comprometida com a excelência acadêmica e a formação de profissionais qualificados. Com mais de 40 anos de experiência, oferecemos uma educação de qualidade que prepara nossos alunos para os desafios do mercado de trabalho.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Nossa missão é proporcionar uma formação integral, desenvolvendo não apenas competências técnicas, mas também valores éticos e sociais que contribuem para a construção de uma sociedade mais justa e sustentável.
              </p>
              <button className="bg-univille-green hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300">
                CONTINUAR LENDO
              </button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-univille-green to-green-600 rounded-lg p-8 h-96 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute top-4 left-4 text-4xl opacity-60">🌳</div>
                <div className="absolute bottom-4 right-4 text-4xl opacity-60">🏛️</div>
                <div className="text-center text-white relative z-10">
                  <div className="text-6xl mb-4">🎓</div>
                  <p className="text-lg">Campus Moderno</p>
                  <p className="text-sm opacity-80">Infraestrutura de qualidade</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-univille-green mb-4">
              CONHEÇA NOSSOS CURSOS
            </h2>
            <p className="text-xl text-gray-700 mb-6">Um universo de oportunidades.</p>
            <Link
              href="/cursos"
              className="inline-flex items-center text-univille-green hover:text-green-700 font-semibold transition-colors"
            >
              Confira
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="course-card card-hover h-64 rounded-lg flex items-end p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800"></div>
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="absolute top-4 right-4 text-4xl opacity-60">🏙️</div>
              <div className="course-card-content relative z-10">
                <h3 className="text-2xl font-bold text-white">Publicidade</h3>
                <p className="text-white opacity-90">Criatividade e estratégia</p>
              </div>
            </div>
            <div className="course-card card-hover h-64 rounded-lg flex items-end p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500"></div>
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="absolute top-4 right-4 text-4xl opacity-60">🍰</div>
              <div className="course-card-content relative z-10">
                <h3 className="text-2xl font-bold text-white">Gastronomia</h3>
                <p className="text-white opacity-90">Arte culinária</p>
              </div>
            </div>
            <div className="course-card card-hover h-64 rounded-lg flex items-end p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-800"></div>
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="absolute top-4 right-4 text-4xl opacity-60">🩺</div>
              <div className="course-card-content relative z-10">
                <h3 className="text-2xl font-bold text-white">Medicina</h3>
                <p className="text-white opacity-90">Cuidar de vidas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            O QUE DIZEM NOSSOS ALUNOS
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="w-24 h-24 bg-univille-green rounded-full mx-auto lg:mx-0 mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">JL</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">JOSE LUIZ</h3>
              <blockquote className="text-lg text-gray-700 italic">
                "Muito show o curso eu e a ela rol. A qualidade do ensino e a infraestrutura da Univille são excepcionais. Recomendo para todos que buscam uma formação de qualidade."
              </blockquote>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg p-8 h-96 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute top-4 left-4 text-3xl opacity-60">👨‍🎓</div>
                <div className="absolute bottom-4 right-4 text-3xl opacity-60">🎉</div>
                <div className="text-center text-white relative z-10">
                  <div className="text-6xl mb-4">🏆</div>
                  <p className="text-lg">Aluno Destaque</p>
                  <p className="text-sm opacity-80">Reconhecimento acadêmico</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <InfoSection />

      {/* Footer */}
      <Footer />
    </main>
  )
}