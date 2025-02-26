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

    // Escolhe uma imagem aleatória
    const randomIndex = Math.floor(Math.random() * coupleImages.length);
    const imageUrl = coupleImages[randomIndex];

    // Define a URL da imagem
    coupleImage.src = imageUrl;

    // Define posição aleatória dentro da tela
    const x = Math.random() * (window.innerWidth - 100); // Tamanho fixo da imagem
    const y = Math.random() * (window.innerHeight - 100);
    coupleImage.style.left = `${x}px`;
    coupleImage.style.top = `${y}px`;

    // Adiciona a imagem ao body
    document.body.appendChild(coupleImage);

    // Verifica se a imagem carregou corretamente
    coupleImage.onload = () => {
        // Evento de clique para trocar a imagem
        coupleImage.addEventListener('click', () => {
            const newIndex = Math.floor(Math.random() * coupleImages.length);
            coupleImage.src = coupleImages[newIndex];
        });

        // Remove a imagem após 5 segundos
        setTimeout(() => {
            // Remove os estilos da imagem antes de removê-la
            coupleImage.removeAttribute('style'); // Remove todos os estilos inline
            coupleImage.remove(); // Remove a imagem do DOM
        }, 5000);
    };

    // Se a imagem não carregar, remove-a instantaneamente
    coupleImage.onerror = () => {
        console.log('Imagem não carregada: ' + imageUrl);
        // Remove os estilos da imagem antes de removê-la
        coupleImage.removeAttribute('style'); // Remove todos os estilos inline
        coupleImage.remove(); // Remove a imagem do DOM
    };
}

// Cria imagens aleatoriamente a cada 2 segundos
setInterval(createCoupleImage, 2000);

// Array de frases
const frases = [
    "Eu te amo! 💖",
    "Você é tudo pra mim! ❤️",
    "Te quero pra sempre! 💍",
    "Meu coração é seu! 💓",
    "Sou louco(a) por você! 😍",
    "Nosso amor é único! 💑",
    "Com você, tudo é melhor! ✨",
    "Você me faz tão feliz! 😊",
    "Cada dia te amo mais! 💘",
    "Te amo infinito! ♾️",
    "Você é meu sonho! 💭💖",
    "Seu sorriso me encanta! 😁💞",
    "Te quero aqui agora! 🤗",
    "Você ilumina meus dias! ☀️",
    "Sou seu pra sempre! 💍",
    "Nosso amor é lindo! 💕",
    "Com você, tudo faz sentido! ❤️",
    "Você me completa! 💑",
    "Amo seu jeitinho! 😍",
    "Meu lar é ao seu lado! 🏡💖",
    "Eu escolho você! 💘",
    "Você me faz sorrir! 😊💖",
    "Te amo demais! ❤️",
    "Meu mundo é você! 🌍💕",
    "Nada é melhor que nós! 💑",
    "Você é minha paz! ☁️💓",
    "Nosso amor é eterno! ♾️💖",
    "Você é especial! ✨💞",
    "Amar você é fácil! 💖",
    "Você é meu tudo! ❤️",
    "Te quero sempre comigo! 💑",
    "Você é o meu melhor! 💕",
    "Amo estar com você! 😊",
    "Nosso amor é magia! ✨💖",
    "Com você, sou feliz! 😍",
    "Você é minha vida! ❤️",
    "Meu coração só quer você! 💘",
    "Você é perfeita pra mim! 💖",
    "Cada momento com você é único! 💕",
    "Te amar é minha sorte! 🍀💓",
    "Juntos somos imbatíveis! 💪💞",
    "Te amo sem limites! ♾️❤️"
];

// Função para criar frases na tela
function createPhrase() {
    const phraseElement = document.createElement("div");
    phraseElement.classList.add("love-phrase");

    // Escolhe uma frase aleatória
    const randomIndex = Math.floor(Math.random() * frases.length);
    phraseElement.textContent = frases[randomIndex];

    // Define posição aleatória dentro da tela
    const x = Math.random() * (window.innerWidth - 200); // Evita ultrapassar bordas
    const y = Math.random() * (window.innerHeight - 50);
    phraseElement.style.left = `${x}px`;
    phraseElement.style.top = `${y}px`;

    // Adiciona a frase ao body
    document.body.appendChild(phraseElement);

    // Evento de clique para trocar a frase
    phraseElement.addEventListener("click", () => {
        const newIndex = Math.floor(Math.random() * frases.length);
        phraseElement.textContent = frases[newIndex];
    });

    // Remove a frase após 9 segundos
    setTimeout(() => {
        phraseElement.remove();
    }, 9000);
}

// Cria frases aleatoriamente a cada 3 segundos
setInterval(createPhrase, 3000);