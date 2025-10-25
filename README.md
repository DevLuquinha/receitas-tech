# 🍳 ReceitasTech

**Um site moderno de receitas culinárias com busca em tempo real, filtros por categoria e design responsivo.**

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-success?style=flat&logo=github)](https://devluquinha.github.io/receitas-tech/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 📋 Sobre o Projeto

**ReceitasTech** é uma plataforma web moderna e intuitiva para descobrir, explorar e compartilhar receitas culinárias incríveis. Com foco em experiência do usuário e performance, o site oferece busca em tempo real, filtros dinâmicos e um design responsivo que funciona perfeitamente em qualquer dispositivo.

### 🎯 Objetivo

Criar uma experiência simples e agradável para quem busca receitas, combinando:
- **Funcionalidade**: Busca rápida e filtros inteligentes
- **Design**: Interface moderna e atraente
- **Performance**: Carregamento rápido e otimizado
- **Acessibilidade**: Código semântico e responsivo

---

## ✨ Funcionalidades

### 🔍 **Busca e Filtros**
- ✅ Busca em tempo real enquanto você digita
- ✅ Filtros por categoria (Doces, Salgados, Massas, Bolos, Pães, Bebidas, Sobremesas)
- ✅ Combinação de busca + filtro de categoria
- ✅ Feedback visual quando não há resultados

### 📱 **Interface e Design**
- ✅ Design responsivo (Mobile, Tablet, Desktop)
- ✅ Cards de receitas com imagens e informações
- ✅ Efeitos hover e transições suaves
- ✅ Loading spinner durante carregamento
- ✅ Mensagens de erro amigáveis

### 🍽️ **Receitas**
- ✅ Página detalhada para cada receita
- ✅ Lista de ingredientes completa
- ✅ Modo de preparo passo a passo
- ✅ Informações: tempo, dificuldade, porções
- ✅ Imagens em alta qualidade
- ✅ Tags e categorização

### 📝 **Envio de Receitas**
- ✅ Formulário completo para enviar receitas
- ✅ Upload de imagens (com preview)
- ✅ Validação de campos
- ✅ Campos dinâmicos (ingredientes, passos, dicas)
- ✅ Auto-cálculo de tempo total
- ✅ Modal de confirmação

### 🚀 **Performance**
- ✅ Sistema de retry em requisições
- ✅ Lazy loading de imagens
- ✅ Caminhos otimizados para GitHub Pages
- ✅ Cache e otimização de recursos

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilização moderna e responsiva
  - CSS Grid e Flexbox
  - CSS Variables (Custom Properties)
  - Animations e Transitions
  - Media Queries
- **JavaScript ES6+**: Lógica e interatividade
  - Async/Await
  - Fetch API
  - DOM Manipulation
  - Event Listeners
  - Arrow Functions

### Recursos Externos
- **Google Fonts**: Poppins (300, 400, 600, 700)
- **GitHub Pages**: Hospedagem gratuita

### Ferramentas de Desenvolvimento
- **VS Code**: Editor de código
- **Git**: Controle de versão
- **Live Server**: Servidor de desenvolvimento local

---

## 📁 Estrutura do Projeto

```
receitas-tech/
├── 📄 index.html                    # Página principal
├── 📄 LICENSE                       # Licença do projeto
├── 📄 README.md                     # Este arquivo
│
├── 📁 assets/                       # Recursos do projeto
│   ├── 📁 components/              
│   │   └── header.html             # Componente header
│   │
│   ├── 📁 css/                     # Estilos
│   │   ├── style.css               # ⭐ CSS principal (importa todos)
│   │   ├── variables.css           # Variáveis globais (cores, espaços)
│   │   ├── base.css                # Reset e estilos base
│   │   ├── components.css          # Componentes reutilizáveis
│   │   ├── header.css              # Estilos do header
│   │   ├── index.css               # Página inicial
│   │   ├── recipes.css             # Página de galeria
│   │   ├── recipe-detail.css       # Página de detalhes
│   │   ├── submit-recipe.css       # Página de envio
│   │   └── responsive.css          # Media queries
│   │
│   ├── 📁 data/                    # Dados JSON
│   │   └── recipes.json            # Base de receitas
│   │
│   ├── 📁 images/                  # Imagens das receitas
│   │   ├── bolo-cenoura.jpeg
│   │   ├── brigadeiro.jpeg
│   │   ├── lasanha.jpg
│   │   └── pao-frances.jpeg
│   │
│   └── 📁 js/                      # Scripts JavaScript
│       ├── api.js                  # Funções de API (getData, loading, error)
│       ├── header.js               # Lógica do header
│       ├── script.js               # Página principal
│       ├── recipes.js              # Página de galeria
│       ├── recipe.js               # Página de detalhes
│       └── submit-recipe.js        # Página de envio
│
├── 📁 docs/                        # Documentação
│   └── CSS_STRUCTURE.md            # Estrutura do CSS
│
└── 📁 pages/                       # Páginas HTML
    ├── recipe.html                 # Detalhes da receita
    ├── recipes.html                # Galeria de receitas
    ├── submit-recipe.html          # Enviar receita
    └── template.html               # Template base
```

---

## 🚀 Como Usar

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (VS Code recomendado)
- Git (opcional)

### Instalação e Execução

#### **Opção 1: Acessar Online**
```
https://devluquinha.github.io/receitas-tech/
```

#### **Opção 2: Executar Localmente**

1. **Clone o repositório**
   ```bash
   git clone https://github.com/DevLuquinha/receitas-tech.git
   cd receitas-tech
   ```

2. **Abra no navegador**
   
   **Método A - Direto:**
   - Abra o arquivo `index.html` diretamente no navegador
   
   **Método B - Live Server (Recomendado):**
   - Instale a extensão "Live Server" no VS Code
   - Clique direito em `index.html` → "Open with Live Server"
   
   **Método C - Python:**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Acesse: http://localhost:8000
   ```

3. **Navegue pelo site**
   - Use a barra de busca para procurar receitas
   - Clique nos filtros de categoria
   - Explore os detalhes das receitas
   - Teste a página de envio de receitas

---

## 🎨 Design System

### Paleta de Cores

```css
/* Cores Principais */
--primary-color: #FF6B6B      /* Vermelho vibrante */
--secondary-color: #4ECDC4    /* Verde água */

/* Cores de Texto */
--text-color-dark: #333       /* Texto escuro */
--text-color-light: #f4f4f4   /* Texto claro */

/* Cores de Fundo */
--background-light: #ffffff   /* Fundo branco */
--background-dark: #f9f9f9    /* Fundo cinza claro */

/* Cores de Borda */
--border-color: #ddd          /* Borda cinza */
```

### Tipografia

- **Fonte**: Poppins (Google Fonts)
- **Pesos**: 300 (Light), 400 (Regular), 600 (SemiBold), 700 (Bold)
- **Tamanhos**:
  - Títulos: 2.5rem - 3rem
  - Subtítulos: 1.5rem - 2rem
  - Corpo: 1rem
  - Pequeno: 0.85rem

### Espaçamentos

```css
--spacing-unit: 1rem       /* Base: 16px */
--spacing-small: 0.5rem    /* 8px */
--spacing-medium: 1.5rem   /* 24px */
--spacing-large: 2rem      /* 32px */
--spacing-xlarge: 3rem     /* 48px */
```

### Border Radius

```css
--border-radius-small: 8px
--border-radius-medium: 12px
--border-radius-large: 20px
--border-radius-round: 50px
```

---

## 📱 Responsividade

### Breakpoints

```css
/* Desktop (padrão) */
> 768px

/* Tablet */
≤ 768px

/* Mobile */
≤ 480px

/* Desktop Large (opcional) */
≥ 1400px
```

### Comportamento Responsivo

- **Grid de receitas**: Adapta colunas automaticamente
- **Header**: Menu hamburger em mobile
- **Cards**: Largura máxima limitada
- **Imagens**: Redimensionam proporcionalmente
- **Formulários**: Uma coluna em mobile

---

## 🔧 Funcionalidades Técnicas

### JavaScript

#### **Busca em Tempo Real**
```javascript
searchInput.addEventListener('keyup', filterAndDisplayRecipes);
```
- Filtra receitas enquanto o usuário digita
- Combina busca por texto + filtro de categoria
- Performance otimizada (sem delays desnecessários)

#### **Manipulação do DOM**
```javascript
recipesToDisplay.forEach(recipe => {
    const cardLink = document.createElement('a');
    // Cria elementos dinamicamente
});
```

#### **Sistema de Retry**
```javascript
async function getData(url, retries = 2) {
    // Tenta novamente em caso de falha
    // Delay incremental entre tentativas
}
```

#### **Correção de Caminhos (GitHub Pages)**
```javascript
function fixImagePath(imagePath, isSubPage = false) {
    // Detecta ambiente (local vs GitHub Pages)
    // Ajusta caminhos automaticamente
}
```

### CSS

#### **CSS Variables**
```css
:root {
    --primary-color: #FF6B6B;
}

.button {
    background: var(--primary-color);
}
```

#### **Grid Responsivo**
```css
.recipe-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
}
```

#### **Transições Suaves**
```css
.recipe-card {
    transition: transform var(--transition-normal);
}

.recipe-card:hover {
    transform: translateY(-8px);
}
```

---

## 📊 Estrutura de Dados

### Modelo de Receita (JSON)

```json
{
    "id": 1,
    "title": "Bolo de Cenoura",
    "description": "Um clássico bolo brasileiro...",
    "image": "assets/images/bolo-cenoura.jpeg",
    "category": "bolos",
    "difficulty": "Fácil",
    "servings": 12,
    "prepTime": "60 min",
    "cookTime": "40 min",
    "totalTime": "60 min",
    "ingredients": ["...", "..."],
    "prepMode": ["...", "..."],
    "tips": ["...", "..."],
    "tags": ["bolo", "cenoura"],
    "author": "ReceitasTech",
    "createdAt": "2024-01-15",
    "rating": 4.8,
    "reviews": 342
}
```

---

## 🔮 Roadmap - Próximas Funcionalidades

### Em Desenvolvimento
- [ ] Modo escuro (dark mode)
- [ ] Pesquisa por ingredientes
- [ ] Filtros avançados (tempo, dificuldade)

### Planejado
- [ ] Backend com ASP.NET Core (C#)
- [ ] Banco de dados (PostgreSQL ou MySQL)
- [ ] Autenticação de usuários
- [ ] Sistema de avaliações e comentários
- [ ] Upload real de imagens
- [ ] Compartilhamento social
- [ ] PWA (Progressive Web App)
- [ ] Receitas favoritas sincronizadas
- [ ] API REST completa

---

## 🤝 Como Contribuir

Contribuições são sempre bem-vindas! Aqui está como você pode ajudar:

### 1. Fork o Projeto
```bash
# Clique em "Fork" no GitHub
```

### 2. Crie uma Branch
```bash
git checkout -b feature/MinhaNovaFeature
```

### 3. Faça suas Alterações
```bash
git add .
git commit -m "Add: minha nova feature incrível"
```

### 4. Push para o GitHub
```bash
git push origin feature/MinhaNovaFeature
```

### 5. Abra um Pull Request
- Descreva suas mudanças
- Adicione screenshots se for mudança visual
- Aguarde review

### Tipos de Contribuições

- � Reportar bugs
- ✨ Sugerir novas funcionalidades
- �📝 Melhorar documentação
- 🎨 Melhorar design/UX
- ⚡ Otimizações de performance
- ♿ Melhorias de acessibilidade

---

## 📝 Convenções de Código

### JavaScript
```javascript
// ✅ Bom
const userName = "João";
function calculateTotal(items) {
    return items.reduce((sum, item) => sum + item.price, 0);
}

// ❌ Evite
var user_name = "João";
function calc(i) {
    let t = 0;
    for (let x = 0; x < i.length; x++) {
        t += i[x].price;
    }
    return t;
}
```

### CSS
```css
/* ✅ Bom - Use variáveis */
.button {
    background: var(--primary-color);
    padding: var(--spacing-medium);
}

/* ❌ Evite - Valores hardcoded */
.button {
    background: #FF6B6B;
    padding: 24px;
}
```

### Commits
```bash
# Formato: Tipo: Descrição curta

Add: nova funcionalidade de busca
Fix: corrige bug no filtro de categorias
Update: atualiza README com novas informações
Style: melhora estilo dos cards
Refactor: reorganiza estrutura de pastas
Docs: adiciona documentação da API
```

---

## 🐛 Troubleshooting

### Imagens não carregam
```bash
# Verifique se as imagens existem em assets/images/
# Limpe o cache do navegador (Ctrl + Shift + R)
# Verifique o console para erros 404
```

### Estilos não aplicados
```bash
# Verifique se style.css está sendo importado
# Confirme que todos os @imports estão corretos
# Limpe cache (Ctrl + F5)
```

### JavaScript não funciona
```bash
# Abra o Console (F12)
# Verifique erros no console
# Confirme que scripts estão na ordem correta
```

---

## 📄 Licença

Este projeto está sob a licença especificada no arquivo [LICENSE](LICENSE).

---

## 👨‍💻 Desenvolvedor

**DevLuquinha**

- GitHub: [@DevLuquinha](https://github.com/DevLuquinha)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/devlucasemmanuel/)

---

## 🙏 Agradecimentos

- Google Fonts pela fonte Poppins
- GitHub Pages pela hospedagem gratuita
- Comunidade open source

---

## 📈 Status do Projeto

🟢 **Ativo e em desenvolvimento**

- Última atualização: Outubro 2025
- Versão: 1.0.0
- Status: Funcional e hospedado

---

<div align="center">

### ⭐ Se este projeto te ajudou, considere dar uma estrela!

**Feito com ❤️ e ☕ por DevLuquinha**

</div>