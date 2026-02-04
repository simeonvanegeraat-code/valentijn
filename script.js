// Elementen ophalen uit de HTML
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const questionScreen = document.getElementById('question-screen');
const successScreen = document.getElementById('success-screen');

let moveTimer; // Hier slaan we de automatische timer in op

// --- FUNCTIE: De knop verplaatsen ---
function moveButton() {
    // Scherm afmetingen
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Knop afmetingen
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // Bereken nieuwe positie (met 30px afstand van de randen)
    const newX = Math.random() * (windowWidth - btnWidth - 60) + 30;
    const newY = Math.random() * (windowHeight - btnHeight - 60) + 30;

    // Pas toe
    noBtn.style.position = 'fixed';
    noBtn.style.left = newX + 'px';
    noBtn.style.top = newY + 'px';
}

// --- FASE 1: De snelle start (eerste 2 seconden) ---
// We laten hem elke 800ms (0.8 seconde) springen
moveTimer = setInterval(moveButton, 800);

// --- FASE 2: Na 2 seconden overschakelen naar rustig ---
setTimeout(() => {
    // Stop de snelle timer
    clearInterval(moveTimer);
    
    // Start de rustige timer (elke 3 seconden)
    moveTimer = setInterval(moveButton, 3000);
}, 2000); // Dit gebeurt na 2000ms (2 seconden)


// --- INTERACTIE: Direct wegspringen bij poging tot klikken ---

// Voor desktop (muis eroverheen)
noBtn.addEventListener('mouseover', () => {
    moveButton();
    resetSlowTimer(); // Reset de timer zodat hij niet toevallig direct daarna weer springt
});

// Voor mobiel of als ze heel snel klikt
noBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Zorg dat er niks gebeurt behalve springen
    moveButton();
    resetSlowTimer();
});

// Hulpfunctie: Zorgt dat de automatische 3-seconden timer even pauzeert als ze zelf interactie zoekt
function resetSlowTimer() {
    clearInterval(moveTimer);
    moveTimer = setInterval(moveButton, 3000);
}


// --- HET JA WOORD ---
yesBtn.addEventListener('click', () => {
    // Stop met springen
    clearInterval(moveTimer);

    // Wissel van scherm
    questionScreen.style.display = 'none';
    successScreen.style.display = 'flex';
    successScreen.style.flexDirection = 'column';
    successScreen.classList.remove('hidden');

    // Animaties starten
    setTimeout(() => {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(el => {
            el.classList.add('visible');
        });
    }, 100);
});