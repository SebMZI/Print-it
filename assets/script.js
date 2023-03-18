//Array Slides contenant nos images et sous-titres
const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// ***Variables***

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelector(".dots");
let banner = document.querySelector(".banner-img");
let subtitle = document.querySelector("#banner > p");
let counter = 0;
let imgLength = slides.length;

//Création des dots dans le div dots en fonction du nombre d'image dans slides
for (let i = 0; i < imgLength; i++) {
  dots.innerHTML = dots.innerHTML + "<span class='dot'></span>";
}
let dot = document.querySelectorAll(".dot");


//on initialise la première image à l'index 0 de slides
banner.src = "./assets/images/slideshow/" + slides[0].image;
//on initialise la première tagLine à l'index 0 de slides
subtitle.innerHTML = slides[0].tagLine;
// On initialise le point sélectionner à l'index 0 de dot.
dot[0].classList.add("dot_selected");


arrowLeft.addEventListener("click", () => {
  dot[counter].classList.remove("dot_selected");
  counter--;
  if (counter === -1) {
    counter = imgLength - 1;
  }
  banner.src = "./assets/images/slideshow/" + slides[counter].image;
  subtitle.innerHTML = slides[counter].tagLine;
  dot[counter].classList.add("dot_selected");
  console.log("Click Left, ", counter);
});


arrowRight.addEventListener("click", () => {
  dot[counter].classList.remove("dot_selected");
  counter++;
  if (counter === imgLength) {
    counter = 0;
  }
  banner.src = "./assets/images/slideshow/" + slides[counter].image;
  subtitle.innerHTML = slides[counter].tagLine;
  dot[counter].classList.add("dot_selected");
  console.log("Click Right, ", counter);
});
