// Change navbar style on scroll
window.onscroll = function() {
    const navbar = document.querySelector('.navbar');
    
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.style.backgroundColor = "#222"; // Darker background on scroll
    } else {
        navbar.style.backgroundColor = "#333"; // Original background
    }
};
