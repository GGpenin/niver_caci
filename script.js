
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    // Posição horizontal e vertical aleatória
    heart.style.left = Math.random() * 100 + 'vw'; // Posição horizontal aleatória
    heart.style.top = Math.random() * 100 + 'vh'; // Posição vertical aleatória

    // Duração da animação aleatória
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';

    // Adiciona o coração ao contêiner
    document.querySelector('.hearts').appendChild(heart);

    // Remove o coração após 5 segundos
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Cria um novo coração a cada 300ms
setInterval(createHeart, 300);


// Array de imagens de casais
const coupleImages = [
    'imagens/IMG-20250107-WA001.jpg',
    'imagens/IMG-20250107-WA002.jpg',
    'imagens/IMG-20250107-WA003.jpg',
    'imagens/IMG-20250107-WA004.jpg',
    'imagens/IMG-20250107-WA005.jpg',
    'imagens/IMG-20250107-WA006.jpg',
    'imagens/IMG-20250107-WA007.jpg',
    'imagens/IMG-20250107-WA008.jpg',
    'imagens/IMG-20250107-WA009.jpg',
    'imagens/IMG-20250107-WA0010.jpg',
    'imagens/IMG-20250107-WA0011.jpg',
    'imagens/IMG-20250107-WA0012.jpg',
    'imagens/IMG-20250107-WA0013.jpg',
    'imagens/IMG-20250107-WA0014.jpg',
    'imagens/IMG-20250107-WA0015.jpg',
    'imagens/IMG-20250107-WA0016.jpg',
    'imagens/IMG-20250107-WA0017.jpg',
    'imagens/IMG-20250107-WA0018.jpg',
    'imagens/IMG-20250107-WA0019.jpg',
    'imagens/IMG-20250107-WA0020.jpg',
];

// Função para criar imagens de casais
function createCoupleImage() {
    const coupleImage = document.createElement('img');
    coupleImage.classList.add('couple-image');

    // Escolhe uma imagem aleatória do array
    const randomIndex = Math.floor(Math.random() * coupleImages.length);
    coupleImage.src = coupleImages[randomIndex]; // Define o caminho da imagem aleatória

    // Tamanho fixo da imagem
    const imageSize = 100; // Tamanho fixo das imagens (pode ajustar conforme necessário)

    // Obtém o tamanho da tela
    const maxLeft = window.innerWidth - imageSize;  // Largura da tela - tamanho da imagem
    const maxTop = window.innerHeight - imageSize;  // Altura da tela - tamanho da imagem

    // Gera a posição aleatória para a imagem sem ultrapassar as bordas
    const left = Math.random() * maxLeft;
    const top = Math.random() * maxTop;

    coupleImage.style.left = `${left}px`;  // Posição horizontal aleatória
    coupleImage.style.top = `${top}px`;  // Posição vertical aleatória

    coupleImage.style.transition = 'opacity 0.3s';  // Adiciona uma transição suave para a opacidade

    // Verifica se a imagem foi carregada corretamente
    coupleImage.onload = () => {
        console.log('Imagem carregada: ' + coupleImage.src);
        document.querySelector('.couple-images').appendChild(coupleImage); // Adiciona a imagem ao contêiner
    };

    coupleImage.onerror = () => {
        console.log('Erro ao carregar a imagem: ' + coupleImage.src);
    };

    // Evento de clique para trocar a imagem
    coupleImage.addEventListener('click', () => {
        // Pega as coordenadas da imagem atual
        const rect = coupleImage.getBoundingClientRect();
        const leftPosition = rect.left;
        const topPosition = rect.top;

        // Faz a imagem desaparecer rapidamente (opacidade)
        coupleImage.style.opacity = 0;

        // Aguarda o tempo de transição e remove a imagem antiga
        setTimeout(() => {
            coupleImage.remove();  // Remove a imagem antiga
            createNewImageAtPosition(leftPosition, topPosition); // Cria a nova imagem na mesma posição
        }, 100); // Aguarda o tempo da transição (300ms)
    });

    // Remove a imagem após 5 segundos (caso o clique não aconteça)
    setTimeout(() => {
        coupleImage.remove();
    }, 5000);
}

// Função para criar uma nova imagem na posição especificada
function createNewImageAtPosition(left, top) {
    const newImage = document.createElement('img');
    newImage.classList.add('couple-image');
    
    // Escolhe uma nova imagem aleatória
    const randomIndex = Math.floor(Math.random() * coupleImages.length);
    newImage.src = coupleImages[randomIndex];

    // Define a posição da nova imagem para a mesma posição da imagem anterior
    newImage.style.left = `${left}px`;
    newImage.style.top = `${top}px`;

    // Verifica se a imagem foi carregada corretamente
    newImage.onload = () => {
        document.querySelector('.couple-images').appendChild(newImage); // Adiciona a nova imagem ao contêiner
    };

    newImage.onerror = () => {
        console.log('Erro ao carregar a nova imagem: ' + newImage.src);
    };

    // Remove a nova imagem após 5 segundos
    setTimeout(() => {
        newImage.remove();
    }, 5000);
}

// Cria uma nova imagem de casal a cada 2 segundos (sem limite de imagens)
setInterval(createCoupleImage, 2000);



