document.addEventListener('DOMContentLoaded', () => {
    const lines = document.querySelectorAll('.line');

    // Animate each line of letters
    lines.forEach((line, lineIndex) => {
        const letters = line.querySelectorAll('.letter');
        letters.forEach((letter, index) => {
            letter.style.animationDelay = `${lineIndex * 0.5 + index * 0.2}s`; // Adjust delay as needed
        });
    });

    const emojiContainer = document.getElementById('emoji-container');
    const emojis = ['💖', '💫', '💞', '✨','🥰','🌤️']; // Add more emojis as needed
    const numEmojis = 35; // Number of emojis to display

    function getRandomPosition(max) {
        return Math.floor(Math.random() * max);
    }

    function createEmoji() {
        const emoji = document.createElement('span');
        emoji.classList.add('emoji');
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.top = `${getRandomPosition(window.innerHeight)}px`;
        emoji.style.left = `${getRandomPosition(window.innerWidth)}px`;
        emojiContainer.appendChild(emoji);

        // Apply waving animation
        emoji.animate([
            { transform: 'translateY(0)' },
            { transform: 'translateY(-20px)' },
            { transform: 'translateY(0)' }
        ], {
            duration: 2000,
            easing: 'ease-in-out',
            iterations: Infinity
        });
    }

    // Generate emojis and apply animation
    for (let i = 0; i < numEmojis; i++) {
        createEmoji();
    }

    // Adjust emoji positions on window resize
    window.addEventListener('resize', () => {
        document.querySelectorAll('.emoji').forEach(emoji => {
            emoji.style.top = `${getRandomPosition(window.innerHeight)}px`;
            emoji.style.left = `${getRandomPosition(window.innerWidth)}px`;
        });
    });
});
