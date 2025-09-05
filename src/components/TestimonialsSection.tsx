import Image from 'next/image'

interface Testimonial {
  name: string
  course: string
  quote: string
  largeImage: string
  smallImage: string
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
  title?: string
}

export default function TestimonialsSection({ 
  testimonials, 
  title = "O QUE DIZEM NOSSOS ALUNOS" 
}: TestimonialsSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left" style={{ marginTop: '100px' }}>
              <h2 className="text-4xl font-bold mb-16" style={{ color: '#005B30' }}>
                {title}
              </h2>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={`/images/${testimonial.smallImage}`}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1" style={{ color: '#005B30' }}>
                    {testimonial.name}
                  </h3>
                  <p className="text-sm" style={{ color: '#005B30', opacity: 0.7 }}>
                    {testimonial.course}
                  </p>
                </div>
              </div>
              <blockquote className="text-lg text-gray-700 italic mb-8">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-6" style={{ marginTop: '85px' }}>
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#005B30', opacity: 0.7 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#01963D' }}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src={`/images/${testimonial.largeImage}`}
                alt="Aluno premiado"
                width={600}
                height={600}
                className="rounded-lg object-cover w-full h-[600px]"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}