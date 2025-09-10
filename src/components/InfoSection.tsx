'use client'

import { useState } from 'react'
import Image from 'next/image'

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
    <section id="info" className="py-32 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Foto fundo mais info.png"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>
      <div className="stars"></div>
      <div className="max-w-3xl ml-auto mr-10 px-4 sm:px-6 lg:px-8 text-left relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Receba mais<br />
          Informações
        </h2>
        <p className="text-xl text-gray-200 mb-12 max-w-2xl">
          Preencha o campo abaixo para<br />
          receber mais informações sobre o seu curso.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-3xl ml-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu endereço de e-mail"
              className="flex-1 px-6 py-4 rounded-lg bg-white border border-white/30 text-[#005B30] placeholder-[#005B30]/50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 text-white font-semibold rounded-lg transition-colors duration-300 whitespace-nowrap"
              style={{ backgroundColor: '#005B30' }}
            >
              Receber informações
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}