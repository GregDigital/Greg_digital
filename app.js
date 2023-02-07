window.onscroll = function () {
  var img = document.getElementById("myImg");
  var y = window.pageYOffset;
  if (y > 0) {
    img.style.width = 100 - y / 10 + "%";
  } else {
    img.style.width = "100%";
  }
};

const loader = document.querySelector(".loader");
window.addEventListener("load", () => {
  if (localStorage.getItem("premierChargement") === null) {
    localStorage.setItem("premierChargement", "done");
  } else {
    setTimeout(() => {
      loader.classList.add("fondu-out");
    }, 5000);
  }
});
// Animation lettre bienvenue

// Animation scroll reveal

gsap.registerPlugin(ScrollTrigger);

gsap.config({
  autoSleep: 60,
  force3D: false,
  nullTargetWarn: false,
  trialWarn: false,
  units: { left: "%", top: "%", rotation: "rad" },
});

let masks = document.querySelectorAll(".mask");

masks.forEach((mask) => {
  let image = mask.querySelector("section");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: mask,
      toggleActions: "restart none none reset",
    },
  });

  tl.set(mask, { autoAlpha: 1 });

  tl.from(mask, 2, {
    yPercent: -3,
    ease: Power2.out,
    opacity: 0,
  });
  tl.from(image, 2, {
    yPercent: -3,
    delay: -2,
    ease: Power2.out,
    opacity: 1,
  });
});
