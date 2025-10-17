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
        }
        // ... adicione mais receitas aqui
    ];

    // --- 2. SELEÇÃO DE ELEMENTOS DO DOM ---
    const recipeContainer = document.getElementById('recipe-container');
    const searchInput = document.getElementById('searchInput');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
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
            const cardLink = document.createElement('a');
            cardLink.href = `pages/recipe.html?id=${recipe.id}`;
            cardLink.classList.add('recipe-card-link'); // Classe para o card, futuramente.

            cardLink.innerHTML = `
                <div class="recipe-card">
                    <img src="${recipe.image}" alt="${recipe.title}">
                    <div class="card-content">
                        <h3>${recipe.title}</h3>
                        <p>Tempo: ${recipe.prepTime}</p>
                    </div>
                </div>
            `;

            // Adiciona o card criado ao container na página
            recipeContainer.appendChild(cardLink);
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
            const category = this.getAttribute('data-category');

            // Filtra as receitas
            filterRecipes(category);
        });
    });

    /**
     * Função para filtrar receitas por categoria.
     */
    function filterRecipes(category) {
        const recipeCards = document.querySelectorAll('.recipe-card');

        recipeCards.forEach(card => {
            if (category === 'todos') {
                card.style.display = 'block';
            } else {
                const cardCategory = card.getAttribute('data-category');
                if (cardCategory === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            }
        });

        console.log(`Filtrando por: ${category}`);
    }

    // --- 4. EVENTOS ---
    // Adiciona um "ouvinte" que chama a função de filtrar toda vez que o usuário digita algo
    searchInput.addEventListener('keyup', filterRecipes);

    // --- 5. INICIALIZAÇÃO ---
    // Exibe todas as receitas quando a página carrega pela primeira vez
    displayRecipes(recipes);
});