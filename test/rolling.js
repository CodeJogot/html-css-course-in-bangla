document.addEventListener("DOMContentLoaded", function() {
    const scrollingText = document.getElementById('scrollingText');
    const parentWidth = scrollingText.parentElement.offsetWidth;
    const textWidth = scrollingText.offsetWidth;

    let position = parentWidth;

    function animateText() {
        position -= 2; // Adjust this for speed, lower value makes it slower
        if (position <= -textWidth) {
            position = parentWidth; // Reset to the right when fully off-screen on the left
        }
        scrollingText.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animateText);
    }

    animateText();
});
