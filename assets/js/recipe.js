// DADOS: Para este exemplo, vamos replicar os dados aqui.
// No futuro, isso virá de uma API ou de um arquivo de dados compartilhado.
const recipes = [
    {
        id: 1,
        title: "Bolo de Cenoura",
        image: "../assets/images/bolo-cenoura.jpeg",
        category: "Doces",
        prepTime: "40 min",
        ingredients: [
            "3 cenouras médias raspadas e picadas",
            "4 ovos",
            "1/2 xícara (chá) de óleo",
            "2 e 1/2 xícaras (chá) de farinha de trigo",
            "2 xícaras (chá) de açúcar",
            "1 colher (sopa) de fermento em pó"
        ],
        prepMode: [
            "Bata no liquidificador as cenouras, os ovos e o óleo.",
            "Despeje a mistura em um recipiente e misture o açúcar e a farinha de trigo peneirada com o fermento.",
            "Coloque em uma forma untada e enfarinhada.",
            "Asse em forno preaquecido a 180°C por aproximadamente 40 minutos."
        ]
    },
    {
        id: 2,
        title: "Lasanha à Bolonhesa",
        image: "../assets/images/lasanha.jpg", // ATENÇÃO: Caminho relativo
        category: "Massas",
        prepTime: "90 min",
        ingredients: ["500g de massa de lasanha", "500g de carne moída", "Queijo", "Molho de tomate"],
        prepMode: ["Cozinhe a massa.", "Prepare o molho bolonhesa.", "Monte as camadas.", "Leve ao forno."]
    },
];

document.addEventListener('DOMContentLoaded', () => {
    // 1. Pegar o ID da receita da URL
    const params = new URLSearchParams(window.location.search);
    const recipeId = parseInt(params.get('id')); // Converte o ID para número

    // 2. Encontrar a receita correspondente no array de dados
    const recipe = recipes.find(r => r.id === recipeId);

    const content = document.getElementById('recipe-detail-content');

    if (recipe) {
        // 3. Se a receita foi encontrada, preencher o HTML
        document.title = `${recipe.title} - ReceitasTech`; // Atualiza o título da página

        // Mapeia as listas para LIs
        const ingredientsHtml = recipe.ingredients.map(ing => `<li>${ing}</li>`).join('');
        const prepModeHtml = recipe.prepMode.map(mode => `<li>${mode}</li>`).join('');

        content.innerHTML = `
            <h1>${recipe.title}</h1>
            <img src="${recipe.image}" alt="${recipe.title}" class="recipe-detail-image">
            
            <div class="recipe-meta">
                <span><strong>Tempo:</strong> ${recipe.prepTime}</span>
                <span><strong>Categoria:</strong> ${recipe.category}</span>
            </div>

            <div class="recipe-instructions">
                <h2>Ingredientes</h2>
                <ul>${ingredientsHtml}</ul>

                <h2>Modo de Preparo</h2>
                <ol>${prepModeHtml}</ol>
            </div>
        `;
    } else {
        // 4. Se a receita não foi encontrada, mostrar uma mensagem de erro
        content.innerHTML = '<h1>Receita não encontrada!</h1><p>O link que você seguiu pode estar quebrado ou a receita foi removida.</p>';
    }
});