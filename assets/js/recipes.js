// Aguarda o HTML ser completamente carregado para executar o script
document.addEventListener('DOMContentLoaded', async () => {
    const recipes = await getData("recipes.json");

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
    const recipesContainer = document.getElementById('recipe-container');
    
    // --- 3. FUNÇÕES ---
    /**
     * Função para renderizar as receitas na tela.
     * @param {Array} recipesToDisplay - A lista de receitas a ser mostrada.
     */
    function displayRecipes(recipesToDisplay) {
        recipesContainer.innerHTML = ""; // Limpa o container antes de adicionar novas receitas

        // Verifica se há receitas para exibir
        if (recipesToDisplay.length === 0) {
            recipesContainer.innerHTML = '<p class="no-results">Nenhuma receita encontrada.</p>';
            return;
        }

        // Para cada receita na lista, cria um "card"
        recipesToDisplay.forEach(recipe => {
            const cardLink = document.createElement('a');
            cardLink.href = `recipe.html?id=${recipe.id}`;
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
            recipesContainer.appendChild(cardLink);
        });
    }   
    
    // Exibe todas as receitas quando a página carregar
    displayRecipes(recipes);
});