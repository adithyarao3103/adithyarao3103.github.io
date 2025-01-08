window.addEventListener('load', () => {
    // Minimum display time for loading animation
    setTimeout(finishLoading, 10);
});

// Handle window resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        if (window.loadingAnimation) {
            window.loadingAnimation = new LoadingAnimation();
            window.loadingAnimation.init();
        }
    }, 250);
});

// Prevent unwanted touch behaviors on mobile
document.addEventListener('touchmove', (e) => {
    if (document.getElementById('loadingContainer')) {
        e.preventDefault();
    }
}, { passive: false });