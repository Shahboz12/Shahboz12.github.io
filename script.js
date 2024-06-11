document.addEventListener('DOMContentLoaded', () => {
    const letters = document.querySelectorAll('.letter');
    letters.forEach((letter, index) => {
        letter.style.animationDelay = `${index * 0.2}s`;
    });

    const emojiContainer = document.getElementById('emoji-container');
    const emojis = ['💖', '💫', '💞', '✨']; // Add more emojis as needed
    const numEmojis = 10; // Number of emojis to display

    for (let i = 0; i < numEmojis; i++) {
        const emoji = document.createElement('span');
        emoji.classList.add('emoji');
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.top = `${Math.random() * 100}vh`;
        emoji.style.left = `${Math.random() * 100}vw`;
        emoji.style.animationDelay = `${Math.random() * 2}s`;
        emojiContainer.appendChild(emoji);
    }
});
