// const slides = document.querySelector('.slides');
// const prevButton = document.querySelector('.prev');
// const nextButton = document.querySelector('.next');

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');


const nextSlide = () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide();
}

const prevSlide = () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlide();
}

const updateSlide = () => {
  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';

    }
  });
  
  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }

  });
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    updateSlide();
    
  });
});

setInterval(nextSlide, 5000);


 

const createVisibleMenu = () => {
document.getElementById('myDropdown').
classList.add('dropdown-content');
}
createVisibleMenu();


export { createVisibleMenu }
export { prevSlide }
export { nextSlide }
 