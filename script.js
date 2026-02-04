// Elementen ophalen
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const questionScreen = document.getElementById('question-screen');
const successScreen = document.getElementById('success-screen');

let moveTimer; // Variabele voor de automatische timer

// --- FUNCTIE: Knop verplaatsen ---
function moveButton() {
    // Scherm afmetingen
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Knop afmetingen
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // Nieuwe positie berekenen (met veilige marge van 30px)
    const newX = Math.random() * (windowWidth - btnWidth - 60) + 30;
    const newY = Math.random() * (windowHeight - btnHeight - 60) + 30;

    // Toepassen
    noBtn.style.position = 'fixed';
    noBtn.style.left = newX + 'px';
    noBtn.style.top = newY + 'px';
}

// --- FASE 1: Snelle start (eerste 2 seconden) ---
// Hij springt elke 0.8 seconde
moveTimer = setInterval(moveButton, 800);

// --- FASE 2: Rustig ritme na 2 seconden ---
setTimeout(() => {
    clearInterval(moveTimer);
    // Nu springt hij elke 3 seconden (zodat ze denkt dat ze hem heeft)
    moveTimer = setInterval(moveButton, 3000);
}, 2000);

// --- INTERACTIE: Direct wegspringen bij aanraking ---
// Desktop
noBtn.addEventListener('mouseover', () => {
    moveButton();
    resetSlowTimer();
});
// Mobiel / Klik
noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    moveButton();
    resetSlowTimer();
});

// Timer resetten zodat hij niet dubbel springt
function resetSlowTimer() {
    clearInterval(moveTimer);
    moveTimer = setInterval(moveButton, 3000);
}

// --- HET JA WOORD ---
yesBtn.addEventListener('click', () => {
    // Stop de timer van de nee knop
    clearInterval(moveTimer);

    // Wissel van scherm
    questionScreen.style.display = 'none';
    
    // Toon success scherm
    successScreen.style.display = 'flex';
    successScreen.style.flexDirection = 'column';
    successScreen.classList.remove('hidden');

    // Start animaties (tekst en foto's)
    setTimeout(() => {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(el => {
            el.classList.add('visible');
        });
    }, 100);
});