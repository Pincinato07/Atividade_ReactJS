import Link from 'next/link'
import Image from 'next/image'

interface StatItem {
  value: string
  label: string
}

interface HeroSectionProps {
  title: string
  showButton?: boolean
  buttonText?: string
  buttonHref?: string
  backgroundClass?: string
  backgroundImage?: string
  stats?: StatItem[]
}

export default function HeroSection({ 
  title, 
  showButton = false, 
  buttonText = "EMBARQUE", 
  buttonHref = "/cursos",
  backgroundClass = "hero-bg",
  backgroundImage,
  stats
}: HeroSectionProps) {
  return (
    <section className={`${backgroundClass} min-h-screen flex flex-col justify-center pt-16 relative overflow-hidden`}>
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={`/images/${backgroundImage}`}
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
      
      <div className="stars"></div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8">
            {title}
          </h1>
          {showButton && (
            <Link
              href={buttonHref}
              className="inline-block bg-white bg-opacity-10 backdrop-blur-md hover:bg-opacity-20 text-white font-semibold px-20 py-4 rounded-lg transition-all duration-300 text-lg"
            >
              {buttonText}
            </Link>
          )}
        </div>
      </div>

      {/* Statistics Bar */}
      {stats && (
        <div className="relative z-10 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg py-8 px-6" style={{ backgroundColor: '#01963D' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center text-white relative">
                    {index < stats.length - 1 && (
                      <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-12 bg-white bg-opacity-30"></div>
                    )}
                    <div className="text-4xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
