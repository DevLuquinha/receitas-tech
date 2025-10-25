async function getData(url, retries = 2) {
    let lastError;
    
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(url);

            if(!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            lastError = error;
            if (i < retries - 1) {
                await new Promise(resolve => setTimeout(resolve, 500));
            }
        }
    }
    
    console.error("Error ao buscar dados:", lastError);
    throw lastError;
}

/**
 * Função para corrigir caminhos de imagem para GitHub Pages
 * @param {string} imagePath - Caminho original da imagem
 * @param {boolean} isSubPage - Se está em uma subpágina (pages/)
 * @returns {string} - Caminho corrigido
 */
function fixImagePath(imagePath, isSubPage = false) {
    // Se a imagem já tem um protocolo (http/https), retorna como está
    if (imagePath.startsWith('http')) {
        return imagePath;
    }
    
    // Detecta se está no GitHub Pages
    const isGitHubPages = window.location.hostname.includes('github.io');
    
    if (isGitHubPages) {
        // No GitHub Pages, adiciona /receitas-tech/ no início
        if (isSubPage) {
            // Se está em pages/, precisa do ../
            return imagePath.startsWith('assets/') ? `../receitas-tech/${imagePath}` : imagePath;
        } else {
            // Se está na raiz (index.html)
            return imagePath.startsWith('assets/') ? `receitas-tech/${imagePath}` : imagePath;
        }
    } else {
        // Localmente, usa os caminhos normais
        if (isSubPage) {
            return imagePath.startsWith('assets/') ? `../${imagePath}` : imagePath;
        } else {
            return imagePath;
        }
    }
}

function showLoading(container) {
    container.innerHTML = `
        <div class="loading-container">
            <div class="loading-spinner"></div>
            <p>Carregando receitas...</p>
        </div>
    `;
}

function showError(container) {
    container.innerHTML = `
        <div class="error-container">
            <div class="error-icon">⚠️</div>
            <h3>Ops! Algo deu errado</h3>
            <p>Não foi possível carregar as receitas.</p>
            <button onclick="window.location.reload()" class="btn-retry">🔄 Tentar Novamente</button>
        </div>
    `;
}