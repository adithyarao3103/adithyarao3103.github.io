document.write(`
    <div id="loadingContainer" class="loading-container">
        <svg id="trailsSVG"></svg>
    </div>
`);

document.addEventListener('DOMContentLoaded', () => {
    const loadingAnimation = new LoadingAnimation();
    window.loadingAnimation = loadingAnimation;
    loadingAnimation.init();
});

class LoadingAnimation {
    constructor() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.center = { x: this.width / 2, y: this.height / 2 };
        this.speed = 15;
        this.animationStarted = false;
    }

    init() {
        this.container = document.getElementById('loadingContainer');
        this.svg = document.getElementById('trailsSVG');
        this.start();
    }

    start() {
        if (!this.animationStarted) {
            this.animationStarted = true;
            this.leftParticle = this.createParticle(-10, this.center.y, true);
            this.rightParticle = this.createParticle(this.width + 10, this.center.y, true);
            this.animate();
        }
    }

    createParticle(x, y, isInitial = false) {
        const particle = document.createElement('div');
        particle.className = `particle ${isInitial ? 'initial-particle' : 'shower-particle'}`;
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.opacity = '1';
        this.container.appendChild(particle);
        return particle;
    }

    createTrailPath() {
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.style.opacity = '0.3';
        path.setAttribute('d', `M ${this.center.x} ${this.center.y}`);
        this.svg.appendChild(path);
        return path;
    }

    createShowerParticles() {
        const numParticles = 20;
        for (let i = 0; i < numParticles; i++) {
            const baseAngle = (Math.random() * Math.PI * 2);
            const speed = 4 + Math.random() * 8;
            const particle = this.createParticle(this.center.x, this.center.y);
            const path = this.createTrailPath();
            const curveAmplitude = Math.random() * 30;
            const curveFrequency = 0.05 + Math.random() * 0.1;
            let time = 0;
            let pathData = `M ${this.center.x} ${this.center.y}`;
            
            const animate = () => {
                time += 0.1;
                const curve = Math.sin(time * curveFrequency) * curveAmplitude;
                
                const baseX = Math.cos(baseAngle) * speed * time;
                const baseY = Math.sin(baseAngle) * speed * time;
                
                const perpAngle = baseAngle + Math.PI / 2;
                const curveX = Math.cos(perpAngle) * curve;
                const curveY = Math.sin(perpAngle) * curve;
                
                const newX = this.center.x + baseX + curveX;
                const newY = this.center.y + baseY + curveY;
                
                particle.style.left = `${newX}px`;
                particle.style.top = `${newY}px`;

                pathData += ` L ${newX} ${newY}`;
                path.setAttribute('d', pathData);

                const distance = Math.hypot(newX - this.center.x, newY - this.center.y);
                const maxDistance = Math.max(this.width, this.height) * 0.5;
                const opacity = Math.max(0, 1 - (distance / maxDistance));
                
                particle.style.opacity = opacity;
                path.style.opacity = opacity * 0.3;

                if (opacity > 0) {
                    requestAnimationFrame(animate);
                } else {
                    particle.remove();
                    path.remove();
                }
            };
            
            animate();
        }

        setTimeout(() => {
            this.animationStarted = false;
            this.svg.innerHTML = '';
            this.start();
        }, 8000);
    }

    animate() {
        const leftX = parseFloat(this.leftParticle.style.left);
        const rightX = parseFloat(this.rightParticle.style.left);
        
        this.leftParticle.style.left = `${leftX + this.speed}px`;
        this.rightParticle.style.left = `${rightX - this.speed}px`;
        
        if (Math.abs(leftX - rightX) < 20) {
            this.leftParticle.remove();
            this.rightParticle.remove();
            this.createShowerParticles();
            return;
        }
        
        requestAnimationFrame(() => this.animate());
    }

    cleanup() {
        // this.container.classList.add('slide-up');
        setTimeout(() => {
            this.container.remove();
        }, 500);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.loadingAnimation = new LoadingAnimation();
    window.loadingAnimation.init();
});

// Function to cleanup loading and show content
function finishLoading() {
    if (window.loadingAnimation) {
        window.loadingAnimation.cleanup();
    }
    // Show the body content
    document.body.classList.add('content-loaded');
}