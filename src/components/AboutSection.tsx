import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/images/Foto Univille.png"
              alt="Foto da Univille"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-96"
            />
          </div>
                    <div>
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#005B30' }}>SOBRE A UNIVILLE</h2>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: '#005B30' }}>
              Somos uma Universidade referência na região , com ampla estrutura, professores qualificados e cursos reconhecidos pelo MEC, proporcionamos atividades de ensino, pesquisa e extensão nas mais diversas áreas do conhecimento.
            </p>
            <button className="text-white font-semibold px-16 py-3 rounded-lg transition-colors duration-300" style={{ backgroundColor: '#005B30' }}>
              CONTINUAR LENDO
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
