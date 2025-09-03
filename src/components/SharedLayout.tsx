import Header from './Header'
import Footer from './Footer'

interface SharedLayoutProps {
  children: React.ReactNode
  showBackButton?: boolean
}

export default function SharedLayout({ children, showBackButton = false }: SharedLayoutProps) {
  return (
    <main className="min-h-screen bg-univille-dark">
      <Header showBackButton={showBackButton} />
      {children}
      <Footer />
    </main>
  )
}
