import SharedLayout from '@/components/SharedLayout'
import HeroSection from '@/components/HeroSection'
import InfoSection from '@/components/InfoSection'
import { Saira } from 'next/font/google'

const saira = Saira({ subsets: ['latin'] })

export default function PublicidadePropaganda() {
  return (
    <div className={saira.className}>
    <SharedLayout showBackButton={true}>
      <HeroSection 
        title="PUBLICIDADE E PROPAGANDA" 
        backgroundClass="courses-bg"
        backgroundImage="Foto (1).png"
      />

      {/* Course Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-700">
                Gosta de inovação, criatividade e empreendedorismo? O curso de Publicidade e Propaganda pode ser a forma de expressão que você encontra para se comunicar com o mundo!
              </p>
              
              <p className="text-lg leading-relaxed text-gray-700">
                A profissão de publicitário serve para divulgar ideias, produtos ou serviços. E para isso você precisará aprender a pesquisar perfil de público-alvo, seus hábitos de consumo, costumes e dados demográficos; desenvolver abordagem, linha criativa e os meios de comunicação adequados para as campanhas; criação de textos e imagens; análise de impactos e retornos das ações.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-700">
                Poderá trabalhar como atendimento, criação, gestão de produtos e marcas, marketing, mídia, pesquisa, produção e promoção de vendas em agências de publicidade, empresas de diversos segmentos ou como autônomo ou empreendedor.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-700">
                Nossos cursos oferecem inovações pedagógicas e curriculares como matriz curricular flexível e semestral, vivências na extensão universitária proporcionando o contato direto com as necessidades da comunidade, núcleos comuns, disciplinas compartilhadas e metodologias de ensino e aprendizagem diversificadas.
              </p>
              
              <div className="pt-4">
                <h3 className="text-2xl font-bold text-green-600 mb-4">
                  Você faz a sua jornada na Univille, então aproveite ao máximo as oportunidades para as melhores experiências da sua futura carreira!
                </h3>
              </div>
            </div>

            {/* Right Column - Images */}
            <div className="space-y-6">
              <div className="w-full">
                <img 
                  src="/images/Image 1.png" 
                  alt="Publicidade e Propaganda - Imagem 1" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full">
                <img 
                  src="/images/Image 2.png" 
                  alt="Publicidade e Propaganda - Imagem 2" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Images Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            {/* Left side - SAIBA MAIS text */}
            <div className="flex-shrink-0 mr-8">
              <div className="text-green-600">
                <h2 className="text-6xl font-bold mb-6">SAIBA<br />MAIS!</h2>
                <div className="text-8xl">→</div>
              </div>
            </div>

            {/* Right side - Images */}
            <div className="flex gap-8 flex-1 ml-32">
              <div className="relative flex-shrink-0">
                <img
                  src="/images/disciplinas.png"
                  alt="Disciplinas"
                  className="w-96 h-[600px] object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-black/20 rounded-lg flex items-end justify-center">
                  <h3 className="text-white text-2xl font-bold p-8 text-center">Disciplinas</h3>
                </div>
              </div>
              <div className="relative flex-shrink-0">
                <img
                  src="/images/professores.png"
                  alt="Professores"
                  className="w-96 h-[600px] object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-black/20 rounded-lg flex items-end justify-center">
                  <h3 className="text-white text-2xl font-bold p-8 text-center">Professores</h3>
                </div>
              </div>
              <div className="relative flex-shrink-0 -mr-96">
                <img
                  src="/images/projeto.png"
                  alt="Projeto"
                  className="w-96 h-[600px] object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-black/20 rounded-lg flex items-end justify-center">
                  <h3 className="text-white text-2xl font-bold p-8 text-center">Projeto</h3>
                </div>
              </div>
            </div>
          </div>
          
          {/* Conheça o corpo docente text */}
          <div className="text-center mt-16">
            <h2 className="text-6xl" style={{ color: '#01963DCC' }}>
              Conheça o <span className="font-bold">corpo docente!</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Coordinator Section */}
      <section className="py-20" style={{ backgroundColor: '#005B30' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img
                src="/images/carolina.png"
                alt="Carolina Silva"
                className="w-80 h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="text-white">
              <h3 className="text-3xl font-bold mb-2">Carolina Silva</h3>
              <p className="text-xl mb-6 opacity-90">Coordenadora</p>
              <p className="text-lg leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-lg leading-relaxed">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {/* Juliano Pereira - Top Left */}
            <div className="relative">
              <div className="rounded-2xl text-white flex items-center overflow-hidden" style={{ backgroundColor: '#01963D85', minHeight: '200px' }}>
                <div className="absolute -left-24 top-1/2 transform -translate-y-1/2">
                  <img
                    src="/images/juliano.png"
                    alt="Juliano Pereira"
                    className="w-60 h-60 object-cover rounded-full"
                  />
                </div>
                <div className="ml-32 flex-1 p-8 text-left">
                  <h4 className="text-2xl font-bold mb-2" style={{ color: '#005B30' }}>Juliano Pereira</h4>
                  <p className="mb-4 text-lg" style={{ color: '#005B30' }}>Professor</p>
                  <p className="leading-relaxed text-base text-white">
                    metus diam ultricies velit, in porttitor sem leo a lorem. Praesent pretium urna eu elit dapibus, nec facilisis ligula mollis. Morbi scelerisque aliquam turpis.
                  </p>
                </div>
              </div>
            </div>

            {/* Eduarda Rocha - Top Right */}
            <div className="relative">
              <div className="rounded-2xl text-white flex items-center overflow-hidden" style={{ backgroundColor: '#005B30', minHeight: '200px' }}>
                <div className="absolute -right-24 top-1/2 transform -translate-y-1/2">
                  <img
                    src="/images/eduarda.png"
                    alt="Eduarda Rocha"
                    className="w-60 h-60 object-cover rounded-full"
                  />
                </div>
                <div className="mr-32 flex-1 p-8 text-left">
                  <h4 className="text-2xl font-bold mb-2 text-white">Eduarda Rocha</h4>
                  <p className="mb-4 text-lg text-white">Professora</p>
                  <p className="leading-relaxed text-base text-white">
                    metus diam ultricies velit, in porttitor sem leo a lorem. Praesent pretium urna eu elit dapibus, nec facilisis ligula mollis. Morbi scelerisque aliquam turpis.
                  </p>
                </div>
              </div>
            </div>

            {/* Rafael Almeida - Bottom Left */}
            <div className="relative">
              <div className="rounded-2xl text-white flex items-center overflow-hidden" style={{ backgroundColor: '#005B30', minHeight: '200px' }}>
                <div className="absolute -left-24 top-1/2 transform -translate-y-1/2">
                  <img
                    src="/images/rafael.png"
                    alt="Rafael Almeida"
                    className="w-60 h-60 object-cover rounded-full"
                  />
                </div>
                <div className="ml-32 flex-1 p-8 text-left">
                  <h4 className="text-2xl font-bold mb-2 text-white">Rafael Almeida</h4>
                  <p className="mb-4 text-lg text-white">Professor</p>
                  <p className="leading-relaxed text-base text-white">
                    Nam porttitor ornare ullamcorper. Nullam non euiet mollis augue. Praesent pretium urna eu elit dapibus, nec facilisis ligula mollis. Morbi scelerisque aliquam turpis.
                  </p>
                </div>
              </div>
            </div>

            {/* Fabiana Melo - Bottom Right */}
            <div className="relative">
              <div className="rounded-2xl text-white flex items-center overflow-hidden" style={{ backgroundColor: '#01963D85', minHeight: '200px' }}>
                <div className="absolute -right-24 top-1/2 transform -translate-y-1/2">
                  <img
                    src="/images/fabiana.png"
                    alt="Fabiana Melo"
                    className="w-60 h-60 object-cover rounded-full"
                  />
                </div>
                <div className="mr-32 flex-1 p-8 text-left">
                  <h4 className="text-2xl font-bold mb-2" style={{ color: '#005B30' }}>Fabiana Melo</h4>
                  <p className="mb-4 text-lg" style={{ color: '#005B30' }}>Professora</p>
                  <p className="leading-relaxed text-base text-white">
                    Nam porttitor ornare ullamcorper. Nullam non euiet mollis augue. Praesent pretium urna eu elit dapibus, nec facilisis ligula mollis. Morbi scelerisque aliquam turpis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 overflow-hidden" style={{ backgroundColor: '#DBDBDB' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#005B30' }}>
              Projetos realizados
            </h2>
            <p className="text-xl font-light" style={{ color: '#005B30' }}>
              Confira vídeos demonstrativos dos projetos realizados<br />
              durante o curso de Publicidade e Propaganda
            </p>
          </div>
          
          <div className="flex gap-8">
            {/* Primeira imagem */}
            <div className="relative flex-shrink-0">
              <img
                src="/images/Rectangle 40.png"
                alt="Planejamento de Redes Sociais"
                className="w-96 h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 rounded-b-lg" style={{ backgroundColor: '#01963D' }}>
                <h3 className="text-white text-xl font-bold text-center">
                  Planejamento de<br />Redes Sociais
                </h3>
              </div>
            </div>

            {/* Segunda imagem */}
            <div className="relative flex-shrink-0">
              <img
                src="/images/Rectangle 41.png"
                alt="Branding"
                className="w-96 h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 rounded-b-lg" style={{ backgroundColor: '#01963D' }}>
                <h3 className="text-white text-xl font-bold text-center">
                  Branding
                </h3>
              </div>
            </div>

            {/* Terceira imagem - parcialmente fora da tela */}
            <div className="relative flex-shrink-0 -mr-72">
              <img
                src="/images/Rectangle 42.png"
                alt="Gravação de lives"
                className="w-96 h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 rounded-b-lg" style={{ backgroundColor: '#01963D' }}>
                <h3 className="text-white text-xl font-bold text-center">
                  Gravação de lives
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#333333' }}>
            Perguntas frequentes (FAQs)
          </h2>
          
          <div className="space-y-0">
            {/* FAQ 1 */}
            <div className="border-b border-gray-300 py-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-medium" style={{ color: '#333333' }}>
                    O que abrange Publicidade e Propaganda?
                  </h3>
                </div>
                <div className="text-2xl font-bold" style={{ color: '#333333' }}>
                  +
                </div>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="border-b border-gray-300 py-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-medium" style={{ color: '#333333' }}>
                    Quem faz Publicidade e Propaganda trabalha com o quê?
                  </h3>
                </div>
                <div className="text-2xl font-bold" style={{ color: '#333333' }}>
                  +
                </div>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="border-b border-gray-300 py-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-medium" style={{ color: '#333333' }}>
                    O que se aprende na faculdade de Publicidade e Propaganda?
                  </h3>
                </div>
                <div className="text-2xl font-bold" style={{ color: '#333333' }}>
                  +
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InfoSection />
    </SharedLayout>
    </div>
  )
}
