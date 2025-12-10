// Smooth Scroll for Navigation Links
document.querySelectorAll('header nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Hover Effect for Service List Items
const serviceItems = document.querySelectorAll('.services-list li');

serviceItems.forEach(item => {
    item.addEventListener('mouseenter', function () {
        item.style.transform = 'scale(1.05)';
    });

    item.addEventListener('mouseleave', function () {
        item.style.transform = 'scale(1)';
    });
});

// Hover Effect for Tool List Items
const toolItems = document.querySelectorAll('.tools-list li');

toolItems.forEach(item => {
    item.addEventListener('mouseenter', function () {
        item.style.transform = 'scale(1.05)';
    });

    item.addEventListener('mouseleave', function () {
        item.style.transform = 'scale(1)';
    });
});

// Toggle Video Play/Pause on Click
const videos = document.querySelectorAll('video');

videos.forEach(video => {
    video.addEventListener('click', function () {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});

// Scroll Event to Change Header Background on Scroll
const header = document.querySelector('header');

window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(12, 42, 62, 0.8)';
    } else {
        header.style.backgroundColor = 'rgba(12, 42, 0, 0)';
    }
});
