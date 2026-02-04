const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

function moveButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

setInterval(moveButton, 500);

yesBtn.addEventListener('click', () => {
    window.location.href = "liefde.html";
});