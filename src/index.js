import './style.css';

import { createVisibleMenu } from "./dropdown.js";

createVisibleMenu()

import { nextSlide } from "./dropdown.js";

nextSlide()

import { prevSlide} from "./dropdown.js";

prevSlide()


// const slides = document.querySelector('.slides');
// const prevButton = document.querySelector('.prev');
// const nextButton = document.querySelector('.next');


// const form1 = document.getElementById('form1');
// const openButton = document.querySelector('.open-button');
document.getElementById('prev-button').addEventListener('click', prevSlide);
document.getElementById('next-button').addEventListener('click', nextSlide);
