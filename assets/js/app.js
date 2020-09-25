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
