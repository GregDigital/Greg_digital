//Animation texte accueil

const writer = document.querySelector("#writer");

new Typewriter(writer, {
  //loop: true,
  deleteSpeed: 60,
})
  .changeDelay(60)
  .typeString("Hello,<br> Moi c'est Greg<br>")
  .pauseFor(300)
  .typeString("<span style='color: #FFE990'>Designer,</span>")
  .pauseFor(1000)
  .deleteChars(10)
  .typeString(
    "<span style='color: #FFE990'><br>Dev Front-End Javascript-React</span>"
  )
  .pauseFor(1000)

  .start();

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
/*
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
*/
