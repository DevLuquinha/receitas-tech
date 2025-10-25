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