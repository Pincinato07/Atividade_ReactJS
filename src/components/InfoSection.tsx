'use client'

import { useState } from 'react'

export default function InfoSection() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode adicionar a lógica para enviar o email
    console.log('Email enviado:', email)
    setEmail('')
    alert('Informações enviadas com sucesso!')
  }

  return (
    <section className="info-bg py-20 relative">
      <div className="stars"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          RECEBA MAIS INFORMAÇÕES
        </h2>
        <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
          Fique por dentro de todas as novidades, cursos e oportunidades da Univille.
          Cadastre-se e receba informações exclusivas.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor e-mail"
              className="flex-1 px-6 py-4 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 backdrop-blur-sm"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-univille-green hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-300 whitespace-nowrap"
            >
              Receber Informações
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}