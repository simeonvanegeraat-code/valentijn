// Elementen ophalen
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const questionScreen = document.getElementById('question-screen');
const successScreen = document.getElementById('success-screen');

// Functie om de knop te verplaatsen
function moveButton() {
    // Bereken de beschikbare ruimte in het venster
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // De grootte van de knop zelf
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // Bereken een willekeurige nieuwe positie (binnen het scherm)
    // We houden 20px marge aan de randen
    const newX = Math.random() * (windowWidth - btnWidth - 40) + 20;
    const newY = Math.random() * (windowHeight - btnHeight - 40) + 20;

    // Pas de positie toe
    noBtn.style.position = 'fixed'; // Verander naar fixed zodat hij overal kan komen
    noBtn.style.left = newX + 'px';
    noBtn.style.top = newY + 'px';
}

// Luisteraars voor de 'Nee' knop
// 'mouseover' is voor desktop (muis)
noBtn.addEventListener('mouseover', moveButton);
// 'touchstart' is specifiek voor mobiel (vinger)
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Voorkom dat er geklikt wordt
    moveButton();
});

// Wat gebeurt er als ze 'Ja' klikt
yesBtn.addEventListener('click', () => {
    // Verberg de vraag
    questionScreen.style.display = 'none';
    
    // Toon het success scherm
    successScreen.style.display = 'flex';
    successScreen.style.flexDirection = 'column';
    successScreen.classList.remove('hidden');

    // Start de animaties (alles wat class 'fade-in' heeft krijgt nu 'visible')
    // We gebruiken een kleine timeout zodat de browser tijd heeft om het nieuwe scherm te renderen
    setTimeout(() => {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(el => {
            el.classList.add('visible');
        });
    }, 100);
});