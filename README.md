# Site Univille - Next.js

Este é um site institucional para a Univille desenvolvido com Next.js, TypeScript e Tailwind CSS.

## 🚀 Funcionalidades

- **Página Inicial**: Hero section, estatísticas, sobre a universidade, preview de cursos e depoimentos
- **Página de Cursos**: Lista completa de cursos com funcionalidade de busca
- **Design Responsivo**: Adaptado para desktop, tablet e mobile
- **Componentes Reutilizáveis**: Header, Footer e seções compartilhadas
- **Tema Escuro**: Design moderno com cores da Univille

## 🛠️ Tecnologias Utilizadas

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **React 18** - Biblioteca de interface

## 📦 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd site_nextJS
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js
│   ├── cursos/            # Página de cursos
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial
├── components/            # Componentes reutilizáveis
│   ├── Header.tsx         # Cabeçalho da aplicação
│   ├── Footer.tsx         # Rodapé da aplicação
│   └── InfoSection.tsx    # Seção de informações
└── styles/
    └── globals.css        # Estilos globais
```

## 🎨 Personalização

### Cores
As cores principais estão definidas no `tailwind.config.js`:
- `univille-green`: #1B5E20
- `univille-dark`: #0D1117
- `univille-gray`: #161B22

### Imagens
Adicione as imagens necessárias na pasta `public/images/` conforme descrito no arquivo `public/images/README.md`.

## 📱 Páginas

### Página Inicial (/)
- Hero section com call-to-action
- Estatísticas da universidade
- Seção "Sobre a Univille"
- Preview dos cursos
- Depoimentos de alunos
- Seção para receber informações

### Página de Cursos (/cursos)
- Hero section específico
- Barra de pesquisa
- Grid de cursos com filtro
- Seção para receber informações

## 🚀 Deploy

Para fazer o deploy em produção:

```bash
npm run build
npm start
```

## 📄 Scripts Disponíveis

- `npm run dev` - Executa o projeto em modo de desenvolvimento
- `npm run build` - Cria a versão de produção
- `npm start` - Executa a versão de produção
- `npm run lint` - Executa o linter

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.