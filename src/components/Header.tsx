'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

interface HeaderProps {
  showBackButton?: boolean
}

export default function Header({ showBackButton = false }: HeaderProps) {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { href: '/', label: 'INICIO' },
    { href: '/#sobre', label: 'SOBRE' },
    { href: '/cursos', label: 'CURSOS' },
    { href: '#info', label: 'CONTATO' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white bg-opacity-95 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
           {/* Back Button */}
           {showBackButton && (
             <button className={`transition-colors ${
               isScrolled
                 ? 'text-gray-800 hover:text-gray-600'
                 : 'text-white hover:text-gray-300'
             }`}>
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
               </svg>
             </button>
           )}

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex space-x-8 mx-auto">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-lg font-medium transition-colors ${
                  pathname === item.href
                    ? isScrolled
                      ? 'text-univille-green border-b-2 border-univille-green'
                      : 'text-white border-b-2 border-white'
                    : isScrolled
                      ? 'text-gray-700 hover:text-univille-green'
                      : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Search Icon */}
          <div className="flex items-center">
            <button className={`transition-colors ${
              isScrolled 
                ? 'text-gray-800 hover:text-gray-600' 
                : 'text-white hover:text-gray-300'
            }`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Mobile menu button */}
            <button
              className={`md:hidden transition-colors ml-4 ${
                isScrolled 
                  ? 'text-gray-800 hover:text-gray-600' 
                  : 'text-white hover:text-gray-300'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 rounded-lg mt-2 ${
              isScrolled 
                ? 'bg-white bg-opacity-95 backdrop-blur-sm' 
                : 'bg-black bg-opacity-50'
            }`}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    pathname === item.href
                      ? isScrolled
                        ? 'text-white bg-univille-green'
                        : 'text-white bg-univille-green'
                      : isScrolled
                        ? 'text-gray-700 hover:text-white hover:bg-gray-200'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}