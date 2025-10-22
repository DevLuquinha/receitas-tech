# 📁 Estrutura CSS - ReceitasTech

## 📋 Visão Geral

A estrutura CSS foi organizada de forma modular para facilitar manutenção e escalabilidade. Cada arquivo tem uma responsabilidade específica.

## 🗂️ Arquivos e Responsabilidades

### 1. **style.css** (Arquivo Principal)
- **Função**: Arquivo central que importa todos os módulos
- **Não edite estilos aqui**: Use apenas para importações
- **Importa**: Todos os outros arquivos CSS

```css
@import url('variables.css');
@import url('base.css');
@import url('components.css');
@import url('index.css');
@import url('recipe-detail.css');
@import url('responsive.css');
```

### 2. **variables.css** (Variáveis Globais)
- **Função**: Define todas as variáveis CSS reutilizáveis
- **Contém**:
  - ✅ Cores (primária, secundária, texto, fundo)
  - ✅ Espaçamentos (pequeno, médio, grande)
  - ✅ Border radius (pequeno, médio, grande, redondo)
  - ✅ Sombras (pequena, média, grande)
  - ✅ Transições (rápida, normal, lenta)

**Quando editar**: Ao mudar cores, espaçamentos ou outros valores globais

### 3. **base.css** (Reset e Base)
- **Função**: Reset CSS e estilos fundamentais
- **Contém**:
  - ✅ Reset básico (margin, padding, box-sizing)
  - ✅ Importação de fontes (Google Fonts)
  - ✅ Estilos do body
  - ✅ Estilos de links, imagens, buttons
  - ✅ Container global
  - ✅ Footer
  - ✅ Main

**Quando editar**: Ao mudar fonte, reset ou estrutura base do site

### 4. **components.css** (Componentes Reutilizáveis)
- **Função**: Estilos de componentes usados em várias páginas
- **Contém**:
  - ✅ Recipe Cards
  - ✅ Badges (categoria)
  - ✅ Botões (primary, secondary)
  - ✅ Recipe Grid
  - ✅ Mensagens (no-results)

**Quando editar**: Ao criar novos componentes ou modificar existentes

### 5. **index.css** (Página Inicial)
- **Função**: Estilos específicos da página index.html
- **Contém**:
  - ✅ Seção de busca e filtros
  - ✅ Barra de busca
  - ✅ Filtros de categoria
  - ✅ Galeria de receitas

**Quando editar**: Ao modificar a página inicial

### 6. **recipe-detail.css** (Página de Receita)
- **Função**: Estilos específicos da página de detalhes da receita
- **Contém**:
  - ✅ Imagem da receita
  - ✅ Título da receita
  - ✅ Metadados (tempo, categoria)
  - ✅ Instruções (ingredientes, modo de preparo)

**Quando editar**: Ao modificar a página de detalhes

### 7. **responsive.css** (Responsividade)
- **Função**: Media queries para todos os tamanhos de tela
- **Contém**:
  - ✅ Tablets (max-width: 768px)
  - ✅ Mobile (max-width: 480px)
  - ✅ Desktop Large (min-width: 1400px)

**Quando editar**: Ao ajustar comportamento em diferentes telas

### 8. **header.css** (Header)
- **Função**: Estilos do header (já existente)
- **Contém**: Logo, navegação, botões de auth, menu mobile

**Quando editar**: Ao modificar o header

### 9. **modal.css** (Modais)
- **Função**: Estilos dos modais (já existente)
- **Contém**: Login, registro, overlay

**Quando editar**: Ao modificar modais

## 🎯 Como Usar

### Adicionar Nova Página

1. Crie um novo arquivo CSS: `nome-pagina.css`
2. Importe no `style.css`:
```css
@import url('nome-pagina.css');
```

### Adicionar Novo Componente

1. Abra `components.css`
2. Adicione o novo componente:
```css
/* ===== MEU COMPONENTE ===== */
.meu-componente {
    /* estilos aqui */
}
```

### Mudar Cor Global

1. Abra `variables.css`
2. Modifique a variável:
```css
--primary-color: #FF6B6B; /* Nova cor */
```

### Ajustar Responsividade

1. Abra `responsive.css`
2. Encontre o breakpoint desejado
3. Adicione/modifique os estilos

## 📐 Breakpoints

```css
/* Tablets */
@media (max-width: 768px) { }

/* Mobile */
@media (max-width: 480px) { }

/* Desktop Large */
@media (min-width: 1400px) { }
```

## 🔧 Variáveis Disponíveis

### Cores
```css
var(--primary-color)
var(--secondary-color)
var(--text-color-dark)
var(--text-color-light)
var(--background-light)
var(--background-dark)
var(--border-color)
```

### Espaçamentos
```css
var(--spacing-unit)      /* 1rem */
var(--spacing-small)     /* 0.5rem */
var(--spacing-medium)    /* 1.5rem */
var(--spacing-large)     /* 2rem */
var(--spacing-xlarge)    /* 3rem */
```

### Border Radius
```css
var(--border-radius-small)   /* 8px */
var(--border-radius-medium)  /* 12px */
var(--border-radius-large)   /* 20px */
var(--border-radius-round)   /* 50px */
```

### Transições
```css
var(--transition-fast)    /* 0.2s ease */
var(--transition-normal)  /* 0.3s ease */
var(--transition-slow)    /* 0.4s ease */
```

## 📦 Ordem de Importação

A ordem é importante! Mantenha assim:

1. **variables.css** - Primeiro (define variáveis)
2. **base.css** - Reset e fundamentos
3. **components.css** - Componentes reutilizáveis
4. **index.css** - Página inicial
5. **recipe-detail.css** - Página de receita
6. **responsive.css** - Por último (sobrescreve quando necessário)

## 🎨 Boas Práticas

### ✅ Faça
- Use variáveis CSS sempre que possível
- Mantenha cada arquivo focado em sua responsabilidade
- Comente seções importantes
- Use nomes de classe descritivos
- Agrupe estilos relacionados

### ❌ Não Faça
- Não misture estilos de páginas diferentes no mesmo arquivo
- Não use valores fixos quando há variáveis disponíveis
- Não duplique estilos entre arquivos
- Não use !important (exceto se absolutamente necessário)
- Não crie variáveis CSS inline no HTML

## 🐛 Troubleshooting

### Os estilos não estão sendo aplicados
1. Verifique se `style.css` está sendo importado no HTML
2. Confirme a ordem dos imports no `style.css`
3. Limpe o cache do navegador (Ctrl + F5)

### Conflito de estilos
1. Use o DevTools do navegador para ver qual CSS está sendo aplicado
2. Verifique a especificidade das regras
3. Considere usar classes mais específicas

### Variável não funciona
1. Certifique-se de que `variables.css` é importado primeiro
2. Verifique se o nome da variável está correto
3. Use `var(--nome-variavel)` com os dois traços

## 📚 Exemplos

### Criar nova seção na página inicial
```css
/* Em index.css */

/* ===== NOVA SEÇÃO ===== */
.minha-secao {
    padding: var(--spacing-large);
    background: var(--background-light);
    border-radius: var(--border-radius-medium);
    transition: transform var(--transition-normal);
}
```

### Adicionar novo componente
```css
/* Em components.css */

/* ===== MEU BOTÃO ===== */
.btn-custom {
    background: var(--primary-color);
    color: white;
    padding: var(--spacing-small) var(--spacing-unit);
    border-radius: var(--border-radius-large);
    transition: all var(--transition-normal);
}

.btn-custom:hover {
    background: var(--secondary-color);
    transform: translateY(-2px);
}
```

---

**ReceitasTech** - CSS organizado e escalável! 🎨✨
