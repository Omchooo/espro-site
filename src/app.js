//DROPDOWN
const navDropdown = document.getElementById('navDropdown');
const dropdown = document.getElementById('dropdown');
const vDropdown = document.getElementById('vDropdown');
let timeout;

const showDropdown = () => {
    clearTimeout(timeout);
    dropdown.classList.remove('hidden');
    vDropdown.classList.add('rotate-180');
    dropdown.classList.add('flex');
};

const hideDropdown = () => {
    timeout = setTimeout(() => {
        dropdown.classList.remove('flex');
        vDropdown.classList.remove('rotate-180');
        dropdown.classList.add('hidden');
    }, 200); // Adjust the delay as needed
};

navDropdown.addEventListener('mouseover', showDropdown);
navDropdown.addEventListener('mouseout', hideDropdown);

dropdown.addEventListener('mouseover', showDropdown);
dropdown.addEventListener('mouseout', hideDropdown);

dropdown.addEventListener('mouseleave', () => {
    hideDropdown();
});


//FIXED NAV AFTER SCROLLING DOWN 300PX

window.addEventListener('scroll', function () {
    var nav = document.getElementById('nav');
    if (window.scrollY >= 300) {
        nav.classList.add('fixed', 'top-0');
        dropdown.classList.add('top-[66px]');
    } else if (nav.classList.contains('fixed', 'top-0')) {
        dropdown.classList.remove('top-[66px]');
        nav.classList.remove('fixed', 'top-0')
    }
});



// SCROLL HORIZONTAL/X AXIS ON CLICK
const btnright = document.getElementById('slideRight');
const btnleft = document.getElementById('slideBack');
const container = document.getElementById('scrollContainer');
const speed = 25, distance = 400, step = 30;

btnright.addEventListener('click', () => sideScroll('right'));
btnleft.addEventListener('click', () => sideScroll('left'));

function sideScroll(direction) {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
        container.scrollLeft += (direction === 'left' ? -1 : 1) * step;
        scrollAmount += step;

        // Check if reached the end or start to toggle button visibility
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
            btnright.style.display = 'none';
        } else {
            btnright.style.display = 'flex';
        }

        if (container.scrollLeft === 0) {
            btnleft.style.display = 'none';
        } else {
            btnleft.style.display = 'flex';
        }

        if (scrollAmount >= distance) {
            clearInterval(slideTimer);
        }
    }, speed);
}



//IMAGE SLIDER

const imageSlider = document.getElementById('s5box2');
    const images = imageSlider.querySelectorAll('img');

    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    setInterval(nextImage, 2000);