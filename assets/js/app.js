//Hero Animation
var animation = bodymovin.loadAnimation({
  container: document.getElementById("hero"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "./assets/animations/heroAnimation.json",
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
