import SharedLayout from '@/components/SharedLayout'
import HeroSection from '@/components/HeroSection'
import InfoSection from '@/components/InfoSection'

export default function PublicidadePropaganda() {
  return (
    <SharedLayout showBackButton={true}>
      <HeroSection 
        title="PUBLICIDADE E PROPAGANDA" 
        backgroundClass="courses-bg"
      />

      {/* Course Details Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#005B30' }}>
                SOBRE O CURSO
              </h2>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: '#005B30' }}>
                O curso de Publicidade e Propaganda da Univille forma profissionais criativos e estratégicos, 
                capazes de desenvolver campanhas publicitárias inovadoras e eficazes. Nossos alunos aprendem 
                a criar soluções criativas que conectam marcas ao público-alvo.
              </p>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: '#005B30' }}>
                Com uma grade curricular atualizada e professores experientes do mercado, o curso oferece 
                uma formação completa em criação, planejamento, mídia e gestão de campanhas publicitárias.
              </p>
              <button className="text-white font-semibold px-16 py-3 rounded-lg transition-colors duration-300" style={{ backgroundColor: '#005B30' }}>
                INSCREVER-SE
              </button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-8 h-96 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute top-4 left-4 text-4xl opacity-60">🏙️</div>
                <div className="absolute bottom-4 right-4 text-4xl opacity-60">📱</div>
                <div className="text-center text-white relative z-10">
                  <div className="text-6xl mb-4">🎨</div>
                  <p className="text-lg">Criatividade e Inovação</p>
                  <p className="text-sm opacity-80">Formação completa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl font-bold mb-2" style={{ color: '#005B30' }}>4</div>
              <div className="text-sm" style={{ color: '#005B30' }}>anos de duração</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl font-bold mb-2" style={{ color: '#005B30' }}>8</div>
              <div className="text-sm" style={{ color: '#005B30' }}>semestres</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl font-bold mb-2" style={{ color: '#005B30' }}>Bacharelado</div>
              <div className="text-sm" style={{ color: '#005B30' }}>tipo de curso</div>
            </div>
          </div>
        </div>
      </section>

      <InfoSection />
    </SharedLayout>
  )
}
