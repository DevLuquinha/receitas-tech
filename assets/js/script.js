// Aguarda o HTML ser completamente carregado para executar o script
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. DADOS (simulando um banco de dados) ---
    // No futuro, isso virá do o backend
    const recipes = [
        {
            id: 1,
            title: "Bolo de Cenoura",
            image: "assets/images/bolo-cenoura.jpeg",
            category: "Doces",
            prepTime: "40 min"
        },
        {
            id: 2,
            title: "Lasanha à Bolonhesa",
            image: "assets/images/lasanha.jpg",
            category: "Massas",
            prepTime: "90 min"
        },
        // ... adicione mais receitas aqui
    ];

    // --- 2. SELEÇÃO DE ELEMENTOS DO DOM ---
    const recipeContainer = document.getElementById('recipe-container');
    const searchInput = document.getElementById('searchInput');

    // --- 3. FUNÇÕES ---
    /**
     * Função para renderizar as receitas na tela.
     * @param {Array} recipesToDisplay - A lista de receitas a ser mostrada.
     */
    function displayRecipes(recipesToDisplay) {
        // Limpa o container para não duplicar receitas
        recipeContainer.innerHTML = '';

        // Para cada receita na lista, cria um "card"
        recipesToDisplay.forEach(recipe => {
            const card = document.createElement('div');
            card.classList.add('recipe-card');

            card.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.title}">
                <h3>${recipe.title}</h3>
                <p>Tempo: ${recipe.prepTime}</p>
            `;

            // Adiciona o card criado ao container na página
            recipeContainer.appendChild(card);
        });
    }

    /**
     * Função para filtrar as receitas com base na busca.
     */
    function filterRecipes() {
        const searchTerm = searchInput.value.toLowerCase();

        const filteredRecipes = recipes.filter(recipe => {
            return recipe.title.toLowerCase().includes(searchTerm);
        });

        displayRecipes(filteredRecipes);
    }

    // --- 4. EVENTOS ---
    // Adiciona um "ouvinte" que chama a função de filtrar toda vez que o usuário digita algo
    searchInput.addEventListener('keyup', filterRecipes);
    

    // --- 5. INICIALIZAÇÃO ---
    // Exibe todas as receitas quando a página carrega pela primeira vez
    displayRecipes(recipes);
});