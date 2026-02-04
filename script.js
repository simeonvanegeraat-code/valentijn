// Elementen ophalen
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const questionScreen = document.getElementById('question-screen');
const successScreen = document.getElementById('success-screen');

let moveTimer; 

// --- FUNCTIE: Knop verplaatsen ---
function moveButton() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const newX = Math.random() * (windowWidth - btnWidth - 60) + 30;
    const newY = Math.random() * (windowHeight - btnHeight - 60) + 30;

    noBtn.style.position = 'fixed';
    noBtn.style.left = newX + 'px';
    noBtn.style.top = newY + 'px';
}

// --- FASE 1: Snelle start ---
moveTimer = setInterval(moveButton, 800);

// --- FASE 2: Rustig ritme na 2 seconden ---
setTimeout(() => {
    clearInterval(moveTimer);
    moveTimer = setInterval(moveButton, 3000);
}, 2000);

// --- INTERACTIE ---
noBtn.addEventListener('mouseover', () => {
    moveButton();
    resetSlowTimer();
});

noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    moveButton();
    resetSlowTimer();
});

function resetSlowTimer() {
    clearInterval(moveTimer);
    moveTimer = setInterval(moveButton, 3000);
}

// --- HET JA WOORD ---
yesBtn.addEventListener('click', () => {
    clearInterval(moveTimer);

    // Wissel van scherm
    questionScreen.classList.add('hidden');
    successScreen.classList.remove('hidden');
    successScreen.style.display = 'flex';
    successScreen.style.flexDirection = 'column';

    // Start animaties
    setTimeout(() => {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(el => {
            el.classList.add('visible');
        });
    }, 100);
});