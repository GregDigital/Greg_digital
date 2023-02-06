// Animation lettre bienvenue

new Vivus(
  "svg",
  {
    delay: 0,
    duration: 120,
  },
  function (obj) {
    obj.el.classList.add("finished");
  }
);

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
