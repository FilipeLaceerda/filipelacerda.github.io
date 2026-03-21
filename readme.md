# 🚀 Portfólio Web Futurista - Filipe Lacerda

Portfólio pessoal com design futurista e tema dark, desenvolvido com HTML5 e CSS3 puro, totalmente responsivo e sem uso de JavaScript.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-Design-00ADB5?style=for-the-badge)

---

## 📋 Sobre o Projeto

Este é um portfólio web moderno e minimalista que apresenta a trajetória profissional de um desenvolvedor Fullstack. O projeto foi desenvolvido seguindo os padrões web mais recentes, com foco em acessibilidade, responsividade e experiência do usuário.

### ✨ Características Principais

- **🎨 Design Futurista**: Interface moderna com tema escuro, efeitos de glow e glassmorphism
- **📱 100% Responsivo**: Adaptação perfeita para desktop, tablet e mobile
- **⚡ Performance**: HTML e CSS puros, sem dependências de frameworks ou JavaScript
- **🎯 Acessibilidade**: Semântica HTML adequada e atributos alt em todas as imagens
- **🌈 Animações Suaves**: Transições e hover effects em elementos interativos
- **🔧 Variáveis CSS**: Paleta de cores centralizada para fácil manutenção

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilização avançada com:
  - CSS Nesting
  - Custom Properties (variáveis CSS)
  - Flexbox
  - Media Queries
  - Backdrop Filter
  - Transitions & Animations

- **Google Fonts**: Fonte [Chakra Petch](https://fonts.google.com/specimen/Chakra+Petch) para tipografia moderna

---

## 🎨 Paleta de Cores

```css
--cor-principal: #EEEEEE;  /* Texto claro */
--cor-secundaria: #393E46; /* Cards e elementos */
--cor-terciaria: #222831;  /* Background escuro */
--cor-hover: #00ADB5;      /* Accent cyan/turquesa */
```

### Aplicação das Cores

| Elemento | Cor | Uso |
|----------|-----|-----|
| Background | `#222831` | Fundo principal escuro |
| Texto Principal | `#EEEEEE` | Conteúdo e parágrafos |
| Cards | `#393E46` | Seções "Sobre" e "Habilidades" |
| Accent | `#00ADB5` | Títulos, bordas, hover effects, glow |

---

## 📁 Estrutura do Projeto

```
Padrao-web/
│
├── index.html          # Página principal (Home, Sobre, Habilidades)
├── contato.html        # Página de cadastro/formulário
├── style.css           # Estilos globais (futurista + responsivo)
├── readme.md           # Documentação do projeto
│
└── assets/             # Recursos visuais
    ├── perfil.jpeg
    ├── java-svgrepo-com.svg
    ├── spring-boot-svgrepo-com.svg
    ├── angular-svgrepo-com.svg
    ├── typescript-official-svgrepo-com.svg
    ├── javascript-svgrepo-com.svg
    ├── docker-svgrepo-com.svg
    ├── jenkins-svgrepo-com.svg
    ├── database-svgrepo-com.svg
    ├── bitbucket-svgrepo-com.svg
    ├── github-142-svgrepo-com.svg
    ├── linkedin-svgrepo-com.svg
    ├── email-download-svgrepo-com.svg
    ├── dark-mode-svgrepo-com.svg
    ├── download.svg
    └── open_in_new.svg
```

---

## 📄 Páginas

### 🏠 index.html

Página principal com três seções:

1. **Home/Apresentação**
   - Nome e título profissional
   - Foto de perfil com efeito glow
   - Botões de ação (Download CV e Contato)

2. **Sobre**
   - Descrição profissional
   - Tecnologias e experiências
   - Card com borda accent

3. **Habilidades**
   - 3 cards com casos de uso profissionais:
     - Observabilidade em Aplicações Web
     - Comunicação Assíncrona entre Serviços
     - Testes Automatizados
   - Grid de ícones de tecnologias (Java, Spring Boot, Angular, TypeScript, Docker, Jenkins, etc.)

### 📝 contato.html

Formulário de cadastro futurista com:
- Inputs transparentes com borda inferior
- Labels com letter-spacing e uppercase
- Efeitos de glow no focus
- Botões outlined com hover fill
- Decorações nos cantos do card
- Validação HTML5

---

## 📱 Responsividade

O projeto possui **2 breakpoints** principais:

### 🖥️ Desktop (> 900px)
- Layout horizontal com elementos lado a lado
- Cards de habilidades em 3 colunas
- Header com navegação expandida

### 📊 Tablet (≤ 900px)
- Container de apresentação vira coluna
- Cards de habilidades em 2 colunas
- Header com wrap
- Botões empilham verticalmente

### 📱 Mobile (≤ 600px)
- Layout totalmente vertical
- Cards de habilidades em 1 coluna
- Nav horizontal com scroll
- Botões de formulário ocupam 100% da largura
- Tamanhos de fonte reduzidos
- Imagens menores

---

## 🚀 Como Executar

### Opção 1: Abrir diretamente no navegador

```bash
# Navegue até a pasta do projeto
cd Padrao-web

# Abra o arquivo no navegador (macOS)
open index.html

# Ou no Linux
xdg-open index.html

# Ou no Windows
start index.html
```

### Opção 2: Servidor local (recomendado)

```bash
# Usando Python 3
python -m http.server 8000

# Ou Node.js (npx)
npx serve

# Acesse no navegador
http://localhost:8000
```

### Opção 3: Live Server (VS Code)

1. Instale a extensão "Live Server"
2. Clique com botão direito no `index.html`
3. Selecione "Open with Live Server"

---

## 🎯 Funcionalidades de Acessibilidade

- ✅ Atributos `alt` em todas as imagens
- ✅ Estrutura semântica HTML5 (`<header>`, `<main>`, `<section>`, `<footer>`)
- ✅ Navegação por teclado funcional
- ✅ Contraste de cores adequado (WCAG AA)
- ✅ Labels associados aos inputs do formulário
- ✅ Scroll suave (`scroll-behavior: smooth`)

---

## 💡 Destaques Técnicos

### CSS Avançado

- **Glassmorphism**: `backdrop-filter: blur(10px)` no header
- **Neon Glow Effects**: `box-shadow` com cores RGB e transparência
- **Corner Decorations**: Uso de `::before` e `::after` no formulário
- **CSS Nesting**: Sintaxe moderna para melhor legibilidade
- **Custom Properties**: Variáveis CSS para manutenção facilitada

### Otimizações

- Uso de `box-sizing: border-box` em todos os elementos responsivos
- `object-fit: cover/contain` para imagens
- Transições suaves com `transition`
- Remoção de scrollbar visual no mobile (`scrollbar-width: none`)

---

## 🔮 Efeitos Visuais

### Hover Effects

- **Links do Header**: Mudam de cor para cyan
- **Botões de Ação**: Preenchem com cor accent e glow
- **Cards de Habilidades**: Levantam 4px com sombra
- **Ícones de Tecnologia**: Scale aumenta para 1.15

### Focus Effects

- **Inputs do Formulário**: Borda inferior muda para cyan + glow
- **Outline**: Removido e substituído por efeitos customizados

---

## 👨‍💻 Autor

**Filipe Lacerda**  
Desenvolvedor Fullstack

### Stack Principal

- Backend: Java, Spring Boot
- Frontend: Angular, TypeScript, JavaScript
- Banco de Dados: Oracle, PostgreSQL
- DevOps: Docker, Jenkins, Grafana
- Mensageria: Artemis MQ
- Testes: JUnit, Karma, Jasmine

---

## 📝 Licença

Este projeto é de uso pessoal como portfólio profissional.

---

## 🤝 Contato

- **GitHub**: [Adicionar link]
- **LinkedIn**: [Adicionar link]
- **Email**: [Adicionar email]

---

<div align="center">

**Desenvolvido com 💙 e ☕ por Filipe Lacerda**

Feito em 2024 | Padrões Web Modernos

</div>

