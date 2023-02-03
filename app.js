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
/*
// form
var picture = document.querySelector("#picture");
var preview = document.querySelector(".preview");

input.style.opacity = 0;
input.addEventListener("change", updateImageDisplay);
function updateImageDisplay() {
  while (preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }

  var curFiles = input.files;
  if (curFiles.length === 0) {
    var para = document.createElement("p");
    para.textContent = "No files currently selected for upload";
    preview.appendChild(para);
  } else {
    var list = document.createElement("ol");
    preview.appendChild(list);
    for (var i = 0; i < curFiles.length; i++) {
      var listItem = document.createElement("li");
      var para = document.createElement("p");
      if (validFileType(curFiles[i])) {
        para.textContent = curFiles[i].name;

        listItem.appendChild(para);
      } else {
        para.textContent =
          "File name " +
          curFiles[i].name +
          ": Not a valid file type. Update your selection.";
        listItem.appendChild(para);
      }

      list.appendChild(listItem);
    }
  }
}
var fileTypes = ["image/jpeg", "image/pjpeg", "image/png"];

function validFileType(file) {
  for (var i = 0; i < fileTypes.length; i++) {
    if (file.type === fileTypes[i]) {
      return true;
    }
  }

  return false;
}

function returnFileSize(number) {
  if (number < 1024) {
    return number + " octets";
  } else if (number >= 1024 && number < 1048576) {
    return (number / 1024).toFixed(1) + " Ko";
  } else if (number >= 1048576) {
    return (number / 1048576).toFixed(1) + " Mo";
  }
}
*/
