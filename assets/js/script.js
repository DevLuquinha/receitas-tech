// Aguarda o HTML ser completamente carregado para executar o script
document.addEventListener('DOMContentLoaded', async () => {

    // --- 1. DADOS (simulando um banco de dados) ---
    const recipes = await getData("assets/data/recipes.json");

    // Mapeamento de categorias para exibição com acentos
    const categoryLabels = {
        'todos': 'Todos',
        'doces': 'Doces',
        'salgados': 'Salgados',
        'massas': 'Massas',
        'bolos': 'Bolos',
        'paes': 'Pães',
        'bebidas': 'Bebidas',
        'sobremesas': 'Sobremesas'
    };

    // --- 2. SELEÇÃO DE ELEMENTOS DO DOM ---
    const recipeContainer = document.getElementById('recipe-container');
    const searchInput = document.getElementById('searchInput');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Variável para armazenar a categoria selecionada
    let selectedCategory = 'todos';

    // --- 3. FUNÇÕES ---
    /**
     * Função para renderizar as receitas na tela.
     * @param {Array} recipesToDisplay - A lista de receitas a ser mostrada.
     */
    function displayRecipes(recipesToDisplay) {
        // Limpa o container para não duplicar receitas
        recipeContainer.innerHTML = '';

        // Verifica se há receitas para exibir
        if (recipesToDisplay.length === 0) {
            recipeContainer.innerHTML = '<p class="no-results">Nenhuma receita encontrada.</p>';
            return;
        }

        // Para cada receita na lista, cria um "card"
        recipesToDisplay.forEach(recipe => {
            const cardLink = document.createElement('a');
            cardLink.href = `pages/recipe.html?id=${recipe.id}`;
            cardLink.classList.add('recipe-card-link');
            
            // Pega o nome da categoria com acento
            const categoryLabel = categoryLabels[recipe.category] || recipe.category;

            cardLink.innerHTML = `
                <div class="recipe-card" data-category="${recipe.category}">
                    <img src="${recipe.image}" alt="${recipe.title}">
                    <div class="card-content">
                        <h3>${recipe.title}</h3>
                        <p>⏱️ Tempo: ${recipe.prepTime}</p>
                        <span class="category-badge">${categoryLabel}</span>
                    </div>
                </div>
            `;

            // Adiciona o card criado ao container na página
            recipeContainer.appendChild(cardLink);
        });
    }

    /**
     * Função para filtrar receitas combinando busca e categoria
     */
    function filterAndDisplayRecipes() {
        const searchTerm = searchInput.value.toLowerCase();

        let filteredRecipes = recipes;

        // Filtra por categoria
        if (selectedCategory !== 'todos') {
            filteredRecipes = filteredRecipes.filter(recipe => 
                recipe.category.toLowerCase() === selectedCategory.toLowerCase()
            );
        }

        // Filtra por termo de busca
        if (searchTerm) {
            filteredRecipes = filteredRecipes.filter(recipe =>
                recipe.title.toLowerCase().includes(searchTerm)
            );
        }

        displayRecipes(filteredRecipes);
        console.log('Categoria selecionada:', selectedCategory);
        console.log('Receitas filtradas:', filteredRecipes);
    }

    /** 
     * Função para filtrar receitas por categoria quando um botão é clicado.
     */
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Adiciona active ao botão clicado
            this.classList.add('active');

            // Pega a categoria selecionada
            selectedCategory = this.getAttribute('data-category');

            // Filtra as receitas
            filterAndDisplayRecipes();
        });
    });

    // --- 4. EVENTOS ---
    // Adiciona um "ouvinte" que chama a função de filtrar toda vez que o usuário digita algo
    searchInput.addEventListener('keyup', filterAndDisplayRecipes);

    // --- 5. INICIALIZAÇÃO ---
    // Define o primeiro botão como ativo
    if (filterButtons.length > 0) {
        filterButtons[0].classList.add('active');
    }
    
    // Exibe todas as receitas quando a página carrega pela primeira vez
    displayRecipes(recipes);
});