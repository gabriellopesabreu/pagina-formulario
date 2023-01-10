const email = document.getElementById("mail");
const nome = document.getElementById("nome");
const form = document.querySelector("form");
const errorMensage = document.querySelector("span.error");

email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    errorMensage.textContent = "";
    errorMensage.classList = "error";
  } else {
    showError();
  }

  form.addEventListener("submit", (event) => {
    if (!email.validity.valid) {
      showError();

      event.preventDefault();
    }
  });

  function showError() {
    if (!email.validity.valueMissing) {
      errorMensage.textContent =
        "O campo preenchido não está no formato de e-mail.";
    } else if (!email.validity.typeMismatch) {
      errorMensage.textContent = "Você precisa preencher o campo.";
    }
  }

  errorMensage.classList = "error active";
});
