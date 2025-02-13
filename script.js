const messages = [
    "Yakin nih?",
    "Seriusan??",
    "Beneran yakin?",
    "Ayolah cuy...",
    "Coba pikirin lagi deh!",
    "Kalo nolak, aku sedih banget loh...",
    "Aku bakal sedih banget...",
    "Aku bakal super duper sedih...",
    "Yaudah deh, gak maksa...",
    "Canda doang, plis bilang iya! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}