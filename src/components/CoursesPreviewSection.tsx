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
    <section id="cursos" className="py-8 bg-gray-50">
      <div className="w-full px-0">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-40 items-center">
          {/* Left side - Text and button */}
          <div className="pl-[180px] pr-[8px]">
            <h2 className="text-6xl font-bold mb-6 leading-tight" style={{ color: '#005B30' }}>
              CONHEÇA<br />
              NOSSOS<br />
              CURSOS
            </h2>
            <p className="text-xl mb-8" style={{ color: '#005B30' }}>{subtitle}</p>
            {showLink && (
              <div className="inline-block">
                <Link
                  href={linkHref}
                  className="inline-block font-semibold transition-colors text-4xl border-b-2"
                  style={{ color: '#01963D', borderBottomColor: '#01963D' }}
                >
                  {linkText}
                </Link>
                <svg className="ml-3 inline-block align-middle" viewBox="0 0 44 10" width="32" height="10" style={{ color: '#01963D' }}>
                  <line x1="0" y1="5" x2="36" y2="5" stroke="currentColor" strokeWidth="2" />
                  <polygon points="36,2 44,5 36,8" fill="currentColor" />
                </svg>
              </div>
            )}
          </div>

          {/* Right side - Course images */}
          <div className="relative overflow-hidden">
            <div className="grid grid-cols-3 gap-6">
              {courses.slice(0, 2).map((course, index) => (
                <div key={index} className="relative h-[460px] w-full rounded overflow-hidden">
                  <Image
                    src={`/images/${course.image}`}
                    alt={course.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute inset-x-0 bottom-6 flex justify-center px-4">
                    <h3 className="text-3xl font-extrabold text-white text-center">{course.name}</h3>
                  </div>
                </div>
              ))}
              {/* Third image - positioned at the right edge */}
              {courses[2] && (
                <div className="relative h-[460px] w-full rounded overflow-hidden">
                  <Image
                    src={`/images/${courses[2].image}`}
                    alt={courses[2].name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute inset-x-0 bottom-6 flex justify-center px-4">
                    <h3 className="text-3xl font-extrabold text-white text-center">{courses[2].name}</h3>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}