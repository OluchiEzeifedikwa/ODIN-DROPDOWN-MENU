
import './style.css';

import { updateSlide  } from './dropdown.js';

updateSlide()


import { createVisibleMenu } from "./dropdown.js";

createVisibleMenu()

import { nextSlide } from "./dropdown.js";

nextSlide()

import { prevSlide} from "./dropdown.js";

prevSlide()

const dots = document.querySelectorAll('.dot');

document.getElementById('prev-button').addEventListener('click', prevSlide);
document.getElementById('next-button').addEventListener('click', nextSlide);


dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide = index;
      updateSlide();
      
    });
  });
  
setInterval(nextSlide, 5000);


  
  
   

