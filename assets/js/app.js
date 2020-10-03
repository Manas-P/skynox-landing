//Hero Animation
var heroAnimation = bodymovin.loadAnimation({
  container: document.querySelector("#hero"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "./assets/animations/heroAnimationLight.json",
});

//How We Do Section Animation
var astroAnimation = bodymovin.loadAnimation({
  container: document.querySelector("#astro"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "./assets/animations/homeAstroAnimationLight.json",
});

//Header Sroll Active
const header = document.querySelector("header");
const compName = document.querySelector(".compName");
window.onscroll = function () {
  var top = window.scrollY;
  if (top >= 200) {
    header.classList.add("headerActive");
    compName.classList.add("compNameAct");
  } else {
    header.classList.remove("headerActive");
    compName.classList.remove("compNameAct");
  }
};

//Typewriter
var typed = new Typed(".typing", {
  strings: [
    "Web Apps",
    "Mobile Apps",
    "Enterprise Solutions",
    "User Interfaces",
  ],
  typeSpeed: 60,
  backSpeed: 60,
  backDelay: 1000,
  showCursor: false,
  loop: true,
});

//Testimonial Section
const slides = document.querySelector(".slider").children;
const indicatorImages = document.querySelector(".slider-indicator").children;

for (let i = 0; i < indicatorImages.length; i++) {
  indicatorImages[i].addEventListener("click", function () {
    for (let j = 0; j < indicatorImages.length; j++) {
      indicatorImages[j].classList.remove("active");
    }
    this.classList.add("active");
    const id = this.getAttribute("data-id");
    for (let j = 0; j < slides.length; j++) {
      slides[j].classList.remove("active");
    }

    slides[id].classList.add("active");
  });
}
