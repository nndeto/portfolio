// ── floating background letters ──

const SOURCE_TEXT = 'nicole ndeto.';
const LETTER_COUNT = 28;
const FONT_SIZES = [1.2, 1.6, 2, 2.6, 3.2, 4, 5]; // rem options

// Filter spaces so only visible characters float
const letters = SOURCE_TEXT.split('').filter(char => char.trim());
const letterContainer = document.getElementById('floatingLetters');

for (let i = 0; i < LETTER_COUNT; i++) {
    const el = document.createElement('span');
    el.classList.add('float-letter');
    el.textContent = letters[i % letters.length];

    const fontSize = FONT_SIZES[Math.floor(Math.random() * FONT_SIZES.length)];
    const duration = 9 + Math.random() * 10; // seconds
    const rotation = (Math.random() - 0.5) * 30; // degrees, centered around 0

    // Negative delay staggers animation starts so letters aren't all in sync on load
    const delay = Math.random() * -18;

    el.style.setProperty('--dur', duration + 's');
    el.style.setProperty('--delay', delay + 's');
    el.style.setProperty('--rot', rotation + 'deg');
    el.style.left = (Math.random() * 100) + 'vw';
    el.style.bottom = (Math.random() * 30) + 'vh';
    el.style.fontSize = fontSize + 'rem';

    letterContainer.appendChild(el);
}

// ── background falling petals ──

const PETAL_COUNT = 38;
const PETAL_COLORS = ['#c9a99a', '#d4b5a5', '#e8cfc8', '#8a9e7e', '#b56f5a'];

const canvas = document.getElementById('petalCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Petal {
    constructor() {
    this.reset({ initial: true });
    }

    reset({ initial }) {
    this.x = Math.random() * canvas.width;
    // On init, scatter petals across the full height so the canvas isn't empty at start
    this.y = initial ? Math.random() * canvas.height : -20;
    this.size = 3 + Math.random() * 5;
    this.speedX = (Math.random() - 0.5) * 0.6;
    this.speedY = 0.4 + Math.random() * 0.7;
    this.rotation = Math.random() * Math.PI * 2;
    this.rotationSpeed = (Math.random() - 0.5) * 0.02;
    this.opacity = 0.08 + Math.random() * 0.18;
    this.color = PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)];
    // Sway gives each petal a gentle horizontal drift as it falls
    this.swayAngle = Math.random() * Math.PI * 2;
    this.swaySpeed = 0.008 + Math.random() * 0.012;
    this.swayAmount = 0.4 + Math.random() * 0.8;
    }

    update() {
    this.swayAngle += this.swaySpeed;
    this.x += this.speedX + Math.sin(this.swayAngle) * this.swayAmount;
    this.y += this.speedY;
    this.rotation += this.rotationSpeed;

    if (this.y > canvas.height + 20) {
        this.reset({ initial: false });
    }
    }

    draw() {
    ctx.save();
    ctx.globalAlpha = this.opacity;
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.fillStyle = this.color;
    ctx.beginPath();
    // 0.55 ratio keeps the ellipse petal-shaped: wider than a needle, narrower than a circle
    ctx.ellipse(0, 0, this.size * 0.55, this.size, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    }
}

const petals = Array.from({ length: PETAL_COUNT }, () => new Petal());

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    petals.forEach(petal => {
    petal.update();
    petal.draw();
    });
    requestAnimationFrame(animate);
}

animate();