interface Testimonial {
  name: string
  initials: string
  quote: string
  icon: string
  title: string
  subtitle: string
  gradient: string
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
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
          {title}
        </h2>
        
        {testimonials.map((testimonial, index) => (
          <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="w-24 h-24 bg-univille-green rounded-full mx-auto lg:mx-0 mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">{testimonial.initials}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{testimonial.name}</h3>
              <blockquote className="text-lg text-gray-700 italic">
                "{testimonial.quote}"
              </blockquote>
            </div>
            <div className="relative">
              <div className={`bg-gradient-to-br ${testimonial.gradient} rounded-lg p-8 h-96 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute top-4 left-4 text-3xl opacity-60">{testimonial.icon}</div>
                <div className="absolute bottom-4 right-4 text-3xl opacity-60">🎉</div>
                <div className="text-center text-white relative z-10">
                  <div className="text-6xl mb-4">🏆</div>
                  <p className="text-lg">{testimonial.title}</p>
                  <p className="text-sm opacity-80">{testimonial.subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
