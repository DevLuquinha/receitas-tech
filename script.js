// Aguarda o HTML ser completamente carregado para executar o script
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. DADOS (simulando um banco de dados) ---
    // No futuro, isso virá do seu backend
    const receitas = [
        {
            id: 1,
            titulo: "Bolo de Cenoura",
            imagem: "images/bolo-cenoura.jpe    g",
            categoria: "Doces",
            tempoPreparo: "40 min"
        },
        {
            id: 2,
            titulo: "Lasanha à Bolonhesa",
            imagem: "images/lasanha.jpg",
            categoria: "Massas",
            tempoPreparo: "90 min"
        },
        // ... adicione mais receitas aqui
    ];

    // --- 2. SELEÇÃO DE ELEMENTOS DO DOM ---
    const recipeContainer = document.getElementById('recipe-container');
    const searchInput = document.getElementById('searchInput');

    // --- 3. FUNÇÕES ---

    /**
     * Função para renderizar as receitas na tela.
     * @param {Array} receitasParaExibir - A lista de receitas a ser mostrada.
     */
    function exibirReceitas(receitasParaExibir) {
        // Limpa o container para não duplicar receitas
        recipeContainer.innerHTML = '';

        // Para cada receita na lista, cria um "card"
        receitasParaExibir.forEach(receita => {
            const card = document.createElement('div');
            card.classList.add('recipe-card');

            card.innerHTML = `
                <img src="${receita.imagem}" alt="${receita.titulo}">
                <h3>${receita.titulo}</h3>
                <p>Tempo: ${receita.tempoPreparo}</p>
            `;

            // Adiciona o card criado ao container na página
            recipeContainer.appendChild(card);
        });
    }

    /**
     * Função para filtrar as receitas com base na busca.
     */
    function filtrarReceitas() {
        const termoBusca = searchInput.value.toLowerCase();

        const receitasFiltradas = receitas.filter(receita => {
            return receita.titulo.toLowerCase().includes(termoBusca);
        });

        exibirReceitas(receitasFiltradas);
    }

    // --- 4. EVENTOS ---
    
    // Adiciona um "ouvinte" que chama a função de filtrar toda vez que o usuário digita algo
    searchInput.addEventListener('keyup', filtrarReceitas);
    

    // --- 5. INICIALIZAÇÃO ---

    // Exibe todas as receitas quando a página carrega pela primeira vez
    exibirReceitas(receitas);

});