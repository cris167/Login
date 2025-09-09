const inputPassword = document.getElementById("input-password");
const btnShow = document.getElementById("show-password");
const btnHide = document.getElementById("hide-password");
const btnToggle = document.querySelector(".btn-hide-show");

// Ocultar "ojo tachado" al inicio
btnHide.style.display = "none";

btnToggle.addEventListener("click", (e) => {
  e.preventDefault(); // evita que el formulario se envíe

  if (inputPassword.type === "password") {
    inputPassword.type = "text"; // mostrar contraseña
    btnShow.style.display = "none";
    btnHide.style.display = "inline";
  } else {
    inputPassword.type = "password"; // ocultar contraseña
    btnShow.style.display = "inline";
    btnHide.style.display = "none";
  }
});
