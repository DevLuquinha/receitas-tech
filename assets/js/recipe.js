document.addEventListener('DOMContentLoaded', async () => {
    const recipes = await getData("../assets/data/recipes.json");
    
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
            
            <div class="recipe-image-container">
                <img src="${recipe.image}" alt="${recipe.title}" class="recipe-detail-image">
            </div>
            
            <div class="recipe-meta">
                <span><strong>Tempo:</strong> ${recipe.totalTime}</span>
                <span><strong>Categoria:</strong> ${recipe.category}</span>
                <span><strong>Dificuldade:</strong> ${recipe.difficulty}</span>
                <span><strong>Porções:</strong> ${recipe.servings}</span>
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