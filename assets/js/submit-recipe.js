/**
 * Submit Recipe JavaScript - ReceitasTech
 * Funcionalidades da página de envio de receitas
 */

let stepCounter = 1;
let uploadedImage = null;

// ===== ADICIONAR INGREDIENTE =====
function addIngredient() {
    const container = document.getElementById('ingredientsContainer');
    const newIngredient = document.createElement('div');
    newIngredient.className = 'ingredient-item';
    newIngredient.innerHTML = `
        <input type="text" name="ingredient" 
               placeholder="Ex: 1 xícara de açúcar" required>
        <button type="button" class="btn-remove" onclick="removeItem(this)">❌</button>
    `;
    container.appendChild(newIngredient);
}

// ===== ADICIONAR PASSO =====
function addStep() {
    const container = document.getElementById('stepsContainer');
    stepCounter++;
    const newStep = document.createElement('div');
    newStep.className = 'step-item';
    newStep.innerHTML = `
        <span class="step-number">${stepCounter}</span>
        <textarea name="step" 
                  placeholder="Descreva o passo..." 
                  rows="2" required></textarea>
        <button type="button" class="btn-remove" onclick="removeItem(this)">❌</button>
    `;
    container.appendChild(newStep);
}

// ===== ADICIONAR DICA =====
function addTip() {
    const container = document.getElementById('tipsContainer');
    const newTip = document.createElement('div');
    newTip.className = 'tip-item';
    newTip.innerHTML = `
        <textarea name="tip" 
                  placeholder="Compartilhe uma dica útil..." 
                  rows="2"></textarea>
        <button type="button" class="btn-remove" onclick="removeItem(this)">❌</button>
    `;
    container.appendChild(newTip);
}

// ===== REMOVER ITEM =====
function removeItem(button) {
    const item = button.parentElement;
    const container = item.parentElement;
    
    // Não permite remover se for o último item obrigatório
    if (container.id === 'ingredientsContainer' && container.children.length <= 1) {
        alert('Você precisa ter pelo menos um ingrediente!');
        return;
    }
    
    if (container.id === 'stepsContainer' && container.children.length <= 1) {
        alert('Você precisa ter pelo menos um passo!');
        return;
    }
    
    item.remove();
    
    // Renumerar os passos
    if (container.id === 'stepsContainer') {
        renumberSteps();
    }
}

// ===== RENUMERAR PASSOS =====
function renumberSteps() {
    const steps = document.querySelectorAll('#stepsContainer .step-item');
    steps.forEach((step, index) => {
        const numberSpan = step.querySelector('.step-number');
        numberSpan.textContent = index + 1;
    });
    stepCounter = steps.length;
}

// ===== LIMPAR FORMULÁRIO =====
function resetForm() {
    if (confirm('Tem certeza que deseja limpar todos os campos?')) {
        document.getElementById('recipeForm').reset();
        
        // Resetar ingredientes para um campo
        const ingredientsContainer = document.getElementById('ingredientsContainer');
        ingredientsContainer.innerHTML = `
            <div class="ingredient-item">
                <input type="text" name="ingredient" 
                       placeholder="Ex: 3 cenouras médias raspadas e picadas" required>
                <button type="button" class="btn-remove" onclick="removeItem(this)">❌</button>
            </div>
        `;
        
        // Resetar passos para um campo
        const stepsContainer = document.getElementById('stepsContainer');
        stepsContainer.innerHTML = `
            <div class="step-item">
                <span class="step-number">1</span>
                <textarea name="step" 
                          placeholder="Descreva o primeiro passo..." 
                          rows="2" required></textarea>
                <button type="button" class="btn-remove" onclick="removeItem(this)">❌</button>
            </div>
        `;
        stepCounter = 1;
        
        // Resetar dicas para um campo
        const tipsContainer = document.getElementById('tipsContainer');
        tipsContainer.innerHTML = `
            <div class="tip-item">
                <textarea name="tip" 
                          placeholder="Compartilhe uma dica útil..." 
                          rows="2"></textarea>
                <button type="button" class="btn-remove" onclick="removeItem(this)">❌</button>
            </div>
        `;
    }
}

// ===== COLETAR DADOS DO FORMULÁRIO =====
function collectFormData() {
    // Informações básicas
    const title = document.getElementById('title').value.trim();
    const description = document.getElementById('description').value.trim();
    const category = document.getElementById('category').value;
    const difficulty = document.getElementById('difficulty').value;
    const image = uploadedImage; // Usar a imagem em base64
    
    // Tempo e porções
    const servings = parseInt(document.getElementById('servings').value);
    const prepTime = document.getElementById('prepTime').value.trim();
    const cookTime = document.getElementById('cookTime').value.trim();
    const totalTime = document.getElementById('totalTime').value.trim();
    
    // Ingredientes
    const ingredientInputs = document.querySelectorAll('input[name="ingredient"]');
    const ingredients = Array.from(ingredientInputs)
        .map(input => input.value.trim())
        .filter(value => value !== '');
    
    // Modo de preparo
    const stepInputs = document.querySelectorAll('textarea[name="step"]');
    const prepMode = Array.from(stepInputs)
        .map(textarea => textarea.value.trim())
        .filter(value => value !== '');
    
    // Dicas
    const tipInputs = document.querySelectorAll('textarea[name="tip"]');
    const tips = Array.from(tipInputs)
        .map(textarea => textarea.value.trim())
        .filter(value => value !== '');
    
    // Tags
    const tagsInput = document.getElementById('tags').value.trim();
    const tags = tagsInput ? tagsInput.split(',').map(tag => tag.trim()) : [];
    
    // Autor
    const author = document.getElementById('author').value.trim();
    
    // Criar objeto da receita
    const recipe = {
        id: Date.now(), // ID temporário baseado no timestamp
        title,
        description,
        image,
        category,
        difficulty,
        servings,
        prepTime,
        cookTime,
        totalTime,
        ingredients,
        prepMode,
        tips,
        tags,
        author,
        createdAt: new Date().toISOString().split('T')[0],
        rating: 0,
        reviews: 0
    };
    
    return recipe;
}

// ===== ENVIAR FORMULÁRIO =====
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('recipeForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validar formulário
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }
        
        // Coletar dados
        const recipeData = collectFormData();
        
        // Log dos dados (ENVIAR OS DADOS PARA O SERVIDOR AQUI)
        console.log('📝 Receita enviada:', recipeData);
        console.log('JSON da receita:', JSON.stringify(recipeData, null, 2));
        showSuccessModal();
        
        // Simular envio (em produção, seria uma chamada AJAX/Fetch para API)
        // setTimeout(() => {
        //     // Salvar no localStorage temporariamente
        //     const savedRecipes = JSON.parse(localStorage.getItem('userRecipes') || '[]');
        //     savedRecipes.push(recipeData);
        //     localStorage.setItem('userRecipes', JSON.stringify(savedRecipes));
            
        //     // Mostrar modal de sucesso
        //     showSuccessModal();
        // }, 500);
    });
});

// ===== MODAL DE SUCESSO =====
function showSuccessModal() {
    const modal = document.getElementById('successModal');
    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('successModal');
    modal.classList.remove('active');
    
    // Redirecionar para página de receitas
    setTimeout(() => {
        window.location.href = '../pages/recipes.html';
    }, 300);
}

function submitAnother() {
    const modal = document.getElementById('successModal');
    modal.classList.remove('active');
    resetForm();
    
    // Scroll para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Fechar modal ao clicar fora
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('successModal');
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
});

// ===== AUTO-CALCULAR TEMPO TOTAL =====
document.addEventListener('DOMContentLoaded', function() {
    const prepTimeInput = document.getElementById('prepTime');
    const cookTimeInput = document.getElementById('cookTime');
    const totalTimeInput = document.getElementById('totalTime');
    
    function calculateTotalTime() {
        const prepTime = prepTimeInput.value.trim();
        const cookTime = cookTimeInput.value.trim();
        
        if (prepTime && cookTime) {
            // Extrair números dos campos (assumindo formato "XX min")
            const prepMinutes = parseInt(prepTime.match(/\d+/)?.[0] || 0);
            const cookMinutes = parseInt(cookTime.match(/\d+/)?.[0] || 0);
            
            const total = prepMinutes + cookMinutes;
            totalTimeInput.value = `${total} min`;
        }
    }
    
    prepTimeInput.addEventListener('blur', calculateTotalTime);
    cookTimeInput.addEventListener('blur', calculateTotalTime);
});

// ===== PREVIEW DE IMAGEM =====
document.addEventListener('DOMContentLoaded', function() {
    const imageInput = document.getElementById('image');
    const imagePreview = document.getElementById('imagePreview');
    
    imageInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        
        if (file) {
            // Validar se é uma imagem
            if (!file.type.startsWith('image/')) {
                alert('Por favor, selecione apenas arquivos de imagem!');
                imageInput.value = '';
                imagePreview.innerHTML = '';
                uploadedImage = null;
                return;
            }
            
            // Validar tamanho (máximo 5MB)
            if (file.size > 5 * 1024 * 1024) {
                alert('A imagem deve ter no máximo 5MB!');
                imageInput.value = '';
                imagePreview.innerHTML = '';
                uploadedImage = null;
                return;
            }
            
            // Ler arquivo e converter para base64
            const reader = new FileReader();
            
            reader.onload = function(event) {
                uploadedImage = event.target.result;
                
                // Mostrar preview
                imagePreview.innerHTML = `
                    <img src="${uploadedImage}" alt="Preview">
                    <p class="image-info">📷 ${file.name} (${(file.size / 1024).toFixed(2)} KB)</p>
                `;
            };
            
            reader.onerror = function() {
                alert('Erro ao carregar a imagem. Tente novamente.');
                imageInput.value = '';
                imagePreview.innerHTML = '';
                uploadedImage = null;
            };
            
            reader.readAsDataURL(file);
        } else {
            imagePreview.innerHTML = '';
            uploadedImage = null;
        }
    });
});
