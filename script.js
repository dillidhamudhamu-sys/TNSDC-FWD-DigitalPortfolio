// Smooth fade-in when scrolling
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.2,
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('visible');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Prevent form default
document.querySelector('button[type="submit"]').addEventListener('click', (e) => {
    e.preventDefault();
    alert("Thank you for contacting me! I'll get back to you soon.");
});
