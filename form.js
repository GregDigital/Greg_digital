let form = document.querySelector("#validForm");

form.name.addEventListener("change", function () {
  validName(this);
});
form.first.addEventListener("change", function () {
  validFirst(this);
});
form.mobile.addEventListener("change", function () {
  validMobile(this);
});
form.email.addEventListener("change", function () {
  validEmail(this);
});
form.message.addEventListener("change", function () {
  validMessage(this);
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (
    validName(form.name) &&
    validFirst(form.first) &&
    validMobile(form.mobile) &&
    validEmail(form.email) &&
    validMessage(form.message)
  ) {
    statusTxt = form.querySelector(".button-area span");
    statusTxt.style.display = "block";
    statusTxt.innerText = "Envoi de votre message...";
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "form.php", true);
    xhr.onload = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        let response = xhr.response;
        if (
          response.indexOf("required") != -1 ||
          response.indexOf("valid") != -1 ||
          response.indexOf("failed") != -1
        ) {
          statusTxt.style.color = "rgb(190, 57, 57)";
        } else {
          form.reset();
          setTimeout(() => {
            statusTxt.style.display = "none";
          }, 2000);
        }
        statusTxt.innerText = response;
        form.classList.remove("disabled");
      }
    };
    let formData = new FormData(form);
    xhr.send(formData);
    console.log("ok");
  } else {
    console.log("pas ok");
  }
});

const validName = function (inputName) {
  valid = false;
  let error;
  if (inputName.value.length < 2) {
    error = "2 caractères minimum";
  } else if (!inputName.value.match(/^[a-zàâéèëêïîôùüçœ\"-]{1,60}$/i)) {
    error = "Merci d'indiquer un nom valide";
  } else {
    error = "Saisie valide";
    valid = true;
  }
  let span = inputName.nextElementSibling;
  if (valid) {
    span.innerHTML = error;
    span.classList.remove("spanError");
    span.classList.add("spanOk");
    return true;
  } else {
    span.innerHTML = error;
    span.classList.remove("spanOk");
    span.classList.add("spanError");
    return false;
  }
};

const validFirst = function (inputFirst) {
  valid = false;
  let error;
  if (inputFirst.value.length < 2) {
    error = "2 caractères minimum";
  } else if (!inputFirst.value.match(/^[a-zàâéèëêïîôùüçœ\"-]{1,60}$/i)) {
    error = "Merci d'indiquer un prénom valide";
  } else {
    error = "Saisie valide";
    valid = true;
  }
  let span = inputFirst.nextElementSibling;
  if (valid) {
    span.innerHTML = error;
    span.classList.remove("spanError");
    span.classList.add("spanOk");
    return true;
  } else {
    span.innerHTML = error;
    span.classList.remove("spanOk");
    span.classList.add("spanError");
    return false;
  }
};
!form.mobile.value.match(/^((\+)33|0)[1-9](\d{2}){4}$/g);

const validMobile = function (inputMobile) {
  valid = false;
  let error;
  if (inputMobile.value.length < 10) {
    error = "Merci d'indiquer un numéro valide";
  } else if (!inputMobile.value.match(/^((\+)33|0)[1-9](\d{2}){4}$/g)) {
    error = "Merci d'indiquer un numéro valide";
  } else {
    error = "Saisie valide";
    valid = true;
  }
  let span = inputMobile.nextElementSibling;
  if (valid) {
    span.innerHTML = error;
    span.classList.remove("spanError");
    span.classList.add("spanOk");
    return true;
  } else {
    span.innerHTML = error;
    span.classList.remove("spanOk");
    span.classList.add("spanError");
    return false;
  }
};
const validEmail = function (inputEmail) {
  valid = false;
  let error;
  if (inputEmail.value === null) {
    error = "Merci d'indiquer un numéro valide";
  } else if (!inputEmail.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
    error = "Merci d'indiquer un email valide";
  } else {
    error = "Saisie valide";
    valid = true;
  }
  let span = inputEmail.nextElementSibling;
  if (valid) {
    span.innerHTML = error;
    span.classList.remove("spanError");
    span.classList.add("spanOk");
    return true;
  } else {
    span.innerHTML = error;
    span.classList.remove("spanOk");
    span.classList.add("spanError");
    return false;
  }
};
const validMessage = function (inputMessage) {
  valid = false;
  let error;
  if (inputMessage.value === null) {
    error = "Indiquer votre message";
  } else if (inputMessage.value.length < 5) {
    error = "Formuler votre message 5 caractères min";
  } else {
    error = "Saisie valide";
    valid = true;
  }
  let span = inputMessage.nextElementSibling;
  if (valid) {
    span.innerHTML = error;
    span.classList.remove("spanError");
    span.classList.add("spanOk");
    return true;
  } else {
    span.innerHTML = error;
    span.classList.remove("spanOk");
    span.classList.add("spanError");
    return false;
  }
};
