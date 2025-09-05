import Link from 'next/link'
import Image from 'next/image'

interface Course {
  name: string
  image: string
}

interface CoursesPreviewSectionProps {
  courses: Course[]
  title?: string
  subtitle?: string
  showLink?: boolean
  linkText?: string
  linkHref?: string
}

export default function CoursesPreviewSection({ 
  courses, 
  title = "CONHEÇA NOSSOS CURSOS",
  subtitle = "Um universo de oportunidades.",
  showLink = true,
  linkText = "Confira",
  linkHref = "/cursos"
}: CoursesPreviewSectionProps) {
  return (
    <section id="cursos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text and button */}
          <div>
            <h2 className="text-5xl font-bold mb-8 leading-tight" style={{ color: '#005B30' }}>
              CONHEÇA<br />
              NOSSOS<br />
              CURSOS
            </h2>
            <p className="text-xl mb-12" style={{ color: '#005B30' }}>{subtitle}</p>
            {showLink && (
              <Link
                href={linkHref}
                className="inline-flex items-center font-semibold transition-colors text-2xl px-8 py-4 border-b-2"
                style={{ color: '#01963D', borderBottomColor: '#01963D' }}
              >
                {linkText}
                <svg className="w-8 h-8 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            )}
          </div>

          {/* Right side - Course images */}
          <div className="grid grid-cols-3 gap-3">
            {courses.map((course, index) => (
              <div key={index} className="relative h-[500px] rounded overflow-hidden">
                <Image
                  src={`/images/${course.image}`}
                  alt={course.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="absolute bottom-2 left-2">
                  <h3 className="text-xl font-bold text-white">{course.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
