let container = document.querySelector(".cont");
let lightbox = document.querySelector(".lightbox");
let items = document.querySelectorAll(".item");
let close = document.querySelector(".close");
let scroll = document.querySelector("body");

function show(response) {
  items.forEach((item) => {
    item.addEventListener("click", (e) => {
      lightbox.style.display = "grid";
      scroll.classList.add("true");

      let id = item.dataset.id;
      let acc = [];
      for (let img of response.car) {
        if (id == img.id) {
          acc.push(afficher(img));
        }
      }

      let html = acc.reduce((a, l) => a + l);
      container.innerHTML = html;

      displayClose();
    });
  });
}

function displayClose() {
  lightbox.addEventListener("click", (e) => {
    if (event.target !== container && !container.contains(event.target)) {
      // fermer la modale
      scroll.classList.remove("true");
      lightbox.style.display = "none";
    }
  });
}

function afficher(user) {
  return `
        
        <div class="image-container">
        <div class="presentation">
        <div class="titre">
        <h1>${user.h1}</h1>
        <h2>identité visuelle | charte graphique | photo | site internet | seo </h2>
        </div>
        <img
        class="card"
       src="../assets/img/${user.card}"
        alt="card"
      />
      </div>
      <p class="pBorder">Lorem ipsum dolor sit amet consectetur. Integer malesuada enim at quam lacinia dignissim viverra. Urna ipsum ut lectus mi eleifend turpis accumsan ipsum at. Porttitor sit ac platea orci enim in. Eu faucibus massa erat mattis vel netus sollicitudin praesent integer. Rhoncus lacus lorem eget in felis lorem aliquet dui. Egestas eget lectus nisi magna elit id elit felis.
      </p>

      <h3>identité visuelle</h3>

      <div class="presentation_id">
      <img
        class="card"
       src="../assets/img/${user.card_logo}"
        alt="card"
      />
      <div class="identite">

      <h2>logo</h2>
      <p>Lorem ipsum dolor sit amet consectetur. Integer malesuada enim at quam lacinia dignissim viverra. Urna ipsum ut lectus mi eleifend turpis accumsan ipsum at. Porttitor sit ac platea orci enim in. Eu faucibus massa erat mattis vel netus sollicitudin praesent integer. Rhoncus lacus lorem eget in felis lorem aliquet dui. Egestas eget lectus nisi magna elit id elit felis.
      </p>
      </div>
      </div>

 <div class="card_visit">
    
    <div class="card_visit_id">

            <div class="card_visit_p">
            <h2>carte de visite</h2>
            <p>
            aliquet dui. Egestas eget lectus nisi magna elit id elit felis.
            sollicitudin praesent integer. Rhoncus lacus lorem eget in felis lorem aliquet dui. Egestas eget lectus ni elit id elit felis.
            </p>
            </div>
            <img
            class="card"
          src="../assets/img/${user.card_visit_recto}"
            alt="card"
          />
          <img
          class="card"
        src="../assets/img/${user.card_visit_verso}"
          alt="card"
        />
       </div>
       </div>
       <div class="site">
       <h3>site internet & seo</h3>
       <img
     src="../assets/img/${user.imac}"
       alt="card"
     />
     <p>
     Lorem ipsum dolor sit amet consectetur. Integer malesuada enim at quam lacinia dignissim viverra. Urna ipsum ut lectus mi eleifend turpis accumsan ipsum at. Porttitor sit ac platea orci enim in. Eu faucibus massa erat mattis vel netus sollicitudin praesent integer. Rhoncus lacus lorem eget in felis lorem aliquet dui. Egestas eget lectus nisi magna elit id elit felis.

     </p>
      </div>
    </div>
   
     
      
      
 </div>
          `;
}

fetch("./json/afterbefore.json")
  .then((response) => response.json())
  .then((json) => show(json));
