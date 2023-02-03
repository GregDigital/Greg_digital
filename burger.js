// Menu burger responsive

let burgerMenu = document.querySelector(".menu_toggle");
let overlay = document.querySelector(".t");
let scrollbody = document.querySelector("body");
let tl = gsap.timeline();

burgerMenu.addEventListener("click", function () {
  this.classList.toggle("active");
  overlay.classList.toggle("overlay");
  scrollbody.classList.toggle("true");

  if (this.classList.contains("active")) {
    tl.from("li", {
      y: 40,
      opacity: 0,
      stagger: 0.2,
    });
  } else {
    tl.from("li", {
      opacity: 1,
    });
  }
});

let menu = document.querySelectorAll("li");

for (let i = 0; i < menu.length; i++) {
  const el = menu[i];
  el.addEventListener("click", function () {
    if (window.matchMedia("(max-width: 990px)").matches) {
      overlay.classList.toggle("overlay");
      burgerMenu.classList.toggle("active");
      scrollbody.classList.toggle("true");

      tl.from("li", {
        opacity: 1,
      });
    } else {
      scrollbody.classList.toggle("false");
      return;
    }
  });
}
