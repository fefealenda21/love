document.addEventListener('DOMContentLoaded', function() {
    createHearts(10);
});

function createHearts(number) {
    for (let i = 0; i < number; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${5 + Math.random() * 5}s`;
        heart.style.animationDelay = `${Math.random() * 10}s`;
        document.body.appendChild(heart);
    }
}
