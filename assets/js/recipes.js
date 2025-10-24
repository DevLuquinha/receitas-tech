// Aguarda o HTML ser completamente carregado para executar o script
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. DADOS (simulando um banco de dados) ---
    // No futuro, isso virá do o backend
    const recipes = [
        {
            "id": 1,
            "title": "Bolo de Cenoura",
            "description": "Um clássico bolo brasileiro fofinho e saboroso, perfeito para o café da tarde.",
            "image": "../assets/images/bolo-cenoura.jpeg",
            "category": "doces",
            "difficulty": "Fácil",
            "servings": 12,
            "prepTime": "20 min",
            "cookTime": "40 min",
            "totalTime": "60 min",
            "ingredients": [
                "3 cenouras médias raspadas e picadas",
                "4 ovos",
                "1/2 xícara (chá) de óleo",
                "2 e 1/2 xícaras (chá) de farinha de trigo",
                "2 xícaras (chá) de açúcar",
                "1 colher (sopa) de fermento em pó"
            ],
            "prepMode": [
                "Bata no liquidificador as cenouras, os ovos e o óleo até obter uma mistura homogênea.",
                "Despeje a mistura em um recipiente grande e adicione o açúcar, mexendo bem.",
                "Acrescente a farinha de trigo peneirada aos poucos, misturando delicadamente.",
                "Por último, adicione o fermento em pó e misture levemente.",
                "Coloque em uma forma untada e enfarinhada (23cm de diâmetro).",
                "Asse em forno preaquecido a 180°C por aproximadamente 40 minutos.",
                "Faça o teste do palito: espete um palito no centro do bolo, se sair limpo, está pronto."
            ],
            "tips": [
                "Para uma cobertura de chocolate deliciosa, misture 1 lata de leite condensado com 3 colheres de chocolate em pó e 1 colher de manteiga. Leve ao fogo até engrossar.",
                "O bolo fica ainda mais saboroso no dia seguinte."
            ],
            "tags": ["bolo", "cenoura", "chocolate", "café da tarde", "festa"],
            "author": "ReceitasTech",
            "createdAt": "2024-01-15",
            "rating": 4.8,
            "reviews": 342
        },
        {
            "id": 2,
            "title": "Lasanha à Bolonhesa",
            "description": "Lasanha tradicional italiana com molho bolonhesa caseiro e muito queijo.",
            "image": "../assets/images/lasanha.jpg",
            "category": "massas",
            "difficulty": "Médio",
            "servings": 8,
            "prepTime": "30 min",
            "cookTime": "60 min",
            "totalTime": "90 min",
            "ingredients": [
                "500g de massa de lasanha pré-cozida",
                "500g de carne moída",
                "1 cebola picada",
                "3 dentes de alho picados",
                "2 latas de molho de tomate (340g cada)",
                "1 colher (sopa) de extrato de tomate",
                "Sal, pimenta-do-reino e orégano a gosto",
                "400g de queijo mussarela ralado",
                "200g de presunto picado",
                "100g de queijo parmesão ralado",
                "Molho branco (bechamel) a gosto"
            ],
            "prepMode": [
                "Em uma panela, refogue a cebola e o alho no azeite até dourarem.",
                "Adicione a carne moída e refogue até dourar completamente.",
                "Acrescente o molho de tomate, extrato de tomate, sal, pimenta e orégano. Cozinhe por 15 minutos.",
                "Em um refratário, faça camadas alternadas: molho bolonhesa, massa de lasanha, presunto, mussarela e molho branco.",
                "Repita as camadas até acabar os ingredientes, finalizando com molho branco e queijo parmesão.",
                "Cubra com papel alumínio e leve ao forno preaquecido a 180°C por 40 minutos.",
                "Retire o papel alumínio e deixe gratinar por mais 10-15 minutos.",
                "Deixe descansar por 10 minutos antes de servir."
            ],
            "tips": [
                "Para um molho bolonhesa mais saboroso, adicione um copo de vinho tinto durante o cozimento.",
                "Você pode preparar a lasanha com antecedência e congelar antes de assar."
            ],
            "tags": ["lasanha", "italiana", "bolonhesa", "massa", "queijo", "almoço"],
            "author": "ReceitasTech",
            "createdAt": "2024-01-20",
            "rating": 4.9,
            "reviews": 567
        },
        {
            "id": 3,
            "title": "Brigadeiro Gourmet",
            "description": "O doce mais amado do Brasil, com toque gourmet e muito cremoso.",
            "image": "../assets/images/brigadeiro.jpeg",
            "category": "doces",
            "difficulty": "Fácil",
            "servings": 30,
            "prepTime": "10 min",
            "cookTime": "20 min",
            "totalTime": "30 min",
            "ingredients": [
                "1 lata de leite condensado (395g)",
                "3 colheres (sopa) de chocolate em pó",
                "1 colher (sopa) de manteiga",
                "Chocolate granulado para decorar"
            ],
            "prepMode": [
                "Em uma panela, misture o leite condensado, o chocolate em pó e a manteiga.",
                "Leve ao fogo médio, mexendo sempre com uma colher de pau.",
                "Continue mexendo até que o brigadeiro comece a soltar do fundo da panela (ponto de brigadeiro).",
                "Isso leva cerca de 15-20 minutos.",
                "Despeje em um prato untado com manteiga e deixe esfriar completamente.",
                "Unte as mãos com manteiga e enrole o brigadeiro em bolinhas.",
                "Passe as bolinhas no chocolate granulado.",
                "Coloque em forminhas de papel e sirva."
            ],
            "tips": [
                "Para brigadeiro gourmet, use chocolate em pó 50% cacau ou chocolate meio amargo derretido.",
                "Experimente coberturas diferentes: pistache picado, coco ralado, castanhas trituradas.",
                "O ponto certo é quando você passa a colher e consegue ver o fundo da panela por alguns segundos."
            ],
            "tags": ["brigadeiro", "doce", "chocolate", "festa", "sobremesa", "gourmet"],
            "author": "ReceitasTech",
            "createdAt": "2024-02-01",
            "rating": 5.0,
            "reviews": 892
        },
        {
            "id": 4,
            "title": "Pão Francês Caseiro",
            "description": "Pão francês crocante por fora e macio por dentro, fresquinho como o da padaria.",
            "image": "../assets/images/pao-frances.jpeg",
            "category": "paes",
            "difficulty": "Médio",
            "servings": 15,
            "prepTime": "30 min",
            "cookTime": "25 min",
            "totalTime": "120 min",
            "ingredients": [
                "1kg de farinha de trigo",
                "600ml de água morna",
                "10g de sal",
                "15g de açúcar",
                "10g de fermento biológico seco",
                "30ml de óleo"
            ],
            "prepMode": [
                "Em uma tigela, misture a água morna, o açúcar e o fermento. Deixe descansar por 10 minutos até espumar.",
                "Em uma bacia grande, coloque a farinha e o sal, fazendo um buraco no centro.",
                "Adicione a mistura de fermento e o óleo. Misture bem até formar uma massa.",
                "Sove a massa por 10-15 minutos até ficar lisa e elástica.",
                "Coloque a massa em uma tigela untada, cubra com um pano e deixe crescer por 1 hora.",
                "Após crescer, divida a massa em 15 porções iguais.",
                "Modele cada porção no formato de pão francês (oval alongado).",
                "Coloque os pães em uma assadeira untada, deixando espaço entre eles.",
                "Cubra e deixe crescer novamente por 30 minutos.",
                "Faça um corte diagonal no topo de cada pão com uma faca afiada.",
                "Borrife água sobre os pães e asse em forno preaquecido a 220°C por 20-25 minutos.",
                "Os pães devem ficar dourados e crocantes."
            ],
            "tips": [
                "Para pães mais crocantes, coloque uma forma com água no fundo do forno durante o cozimento.",
                "A temperatura da água deve estar morna (não quente) para não matar o fermento.",
                "Você pode congelar os pães depois de assados. Para consumir, basta aquecer no forno."
            ],
            "tags": ["pão", "caseiro", "padaria", "café da manhã", "fermento"],
            "author": "ReceitasTech",
            "createdAt": "2024-02-10",
            "rating": 4.7,
            "reviews": 234
        }
    ];

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