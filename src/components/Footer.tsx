export default function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: '#005B30' }}>
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-16">
        {/* Top social icons aligned to the right */}
        <div className="flex justify-end space-x-4 mb-6">
          <a href="#" aria-label="Instagram" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm11 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
            </svg>
          </a>
          <a href="#" aria-label="Facebook" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 10-11.6 9.9v-7H7.7V12h2.7V9.8c0-2.6 1.6-4 3.9-4 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.5V12h2.7l-.4 2.9h-2.3v7A10 10 0 0022 12z"/>
            </svg>
          </a>
          <a href="#" aria-label="Twitter" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
            </svg>
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-white/40 mb-8"></div>

        {/* Campuses */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {[1,2,3].map((i) => (
            <div key={i} className="space-y-2 text-base">
              <h3 className="text-lg font-semibold">Campus Região</h3>
              <p>uni@email.com</p>
              <p>(47) 123456.789</p>
              <div className="pt-2 space-y-1">
                <p>Rua Av 123,</p>
                <p>89219-710</p>
                <p>Razão Social: Fundação Educacional Uni</p>
                <p>CNPJ 12563588/0001-94</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 text-center text-sm">
          <p>Universidade da Região - UNI(c) 2025</p>
        </div>
      </div>
    </footer>
  )
}