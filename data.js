let container = document.querySelector(".cont");
let lightbox = document.querySelector(".lightbox");
let items = document.querySelectorAll(".item");
let close = document.querySelector(".close");
let scroll = document.querySelector("body");

function show(response) {
  let item3 = document.querySelector('[data-id="3"]');
  item3.addEventListener("click", (e) => {
    lightbox.style.display = "grid";
    scroll.classList.add("true");
    container.innerHTML = opa(response.car.find((img) => img.id === 3));
    displayClose();
  });

  items.forEach((item) => {
    if (item.dataset.id !== "3") {
      item.addEventListener("click", (e) => {
        lightbox.style.display = "grid";
        scroll.classList.add("true");
        container.innerHTML = afficher(
          response.car.find((img) => img.id == item.dataset.id)
        );
        displayClose();
      });
    }
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
function generateli(competences) {
  let acc = [];
  for (let competence of competences) {
    acc.push(`<li class="li_projet">${competence} ✅</li>`);
  }
  let html = acc.reduce((a, l) => a + l);
  return html;
}
function opa(u) {
  let competencesHtml = generateli(u.competences);
  let projetsHtml = "";

  for (let projet of u.projets) {
    let projetLi = `
    <h2 class="h2_projet">${projet.n_projet}</h2>
    <h3 class="h3_projet">${projet.titre_projet}</h3>
    <p class="p_projet">${projet.description_p}</p>
    <a class="a_projet" href="${projet.lien}" target="_blank"><i class="fa-brands fa-github"></i></a>
   
    `;
    projetsHtml += projetLi;
  }

  return `
  <h1 class="h1_projet"> ${u.h1}</h1>
  <p class="p_projet">${u.description}</p>
  <h2 class="h2_projet">${u.h2}</h2>
    <ol>
      ${competencesHtml}
    </ol>
      ${projetsHtml}
  `;
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
      <p class="pBorder">${user.description}
      </p>

      <h3>identité visuelle</h3>

      <div class="presentation_id">
     
      <div class="identite">

      <h2>logo</h2>
      <p>${user.texte_logo}
      </p>
      </div>
      <img
      class="card"
     src="../assets/img/${user.card_logo}"
      alt="card"
    />
      </div>

 <div class="card_visit">
    
    <div class="card_visit_id">

            <div class="card_visit_p">
            <h2>carte de visite</h2>
            <p>
            ${user.texte_carte_visite}
            </p>
            </div>
            <div class="card_img">
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
       </div>
       <div class="site">
       <h3>site internet & seo</h3>
       <img
     src="../assets/img/${user.imac}"
       alt="card"
     />
     <p>
     ${user.texte_site}
     </p>
      </div>
    </div>
   
     
      
      
 </div>
          `;
}

fetch("./json/afterbefore.json")
  .then((response) => response.json())
  .then((json) => show(json));
