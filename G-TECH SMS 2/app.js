const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const serviceBottom = document.querySelector('.service-bottom');
const serviceItems = document.querySelectorAll('.service-item');
const itemWidth = serviceItems[0].offsetWidth; // Assuming all items have the same width

// Set initial scroll behavior
serviceBottom.style.scrollBehavior = 'smooth';

// Function to adjust table position smoothly
function adjustScrollPosition(direction) {
    if (direction === 'right') {
        if (serviceBottom.scrollLeft + serviceBottom.clientWidth >= serviceBottom.scrollWidth) {
            serviceBottom.append(serviceBottom.firstElementChild); // Move first to end
            serviceBottom.scrollLeft -= itemWidth; // Prevent jump
        }
        serviceBottom.scrollBy({
            top: 0,
            left: itemWidth,
            behavior: 'smooth'
        });
    } else if (direction === 'left') {
        if (serviceBottom.scrollLeft === 0) {
            serviceBottom.prepend(serviceBottom.lastElementChild); // Move last to beginning
            serviceBottom.scrollLeft += itemWidth; // Prevent jump
        }
        serviceBottom.scrollBy({
            top: 0,
            left: -itemWidth,
            behavior: 'smooth'
        });
    }
}

// Right arrow click (next)
rightArrow.addEventListener('click', () => {
    adjustScrollPosition('right');
});

// Left arrow click (previous)
leftArrow.addEventListener('click', () => {
    adjustScrollPosition('left');
});
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const navList = document.querySelector("#nav-links");

    hamburger.addEventListener("click", function() {
        navList.classList.toggle("active");
        hamburger.classList.toggle("active");
    });
});
