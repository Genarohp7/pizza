// Menu resposive

var btnMenuOpen = document.getElementById("btnMenuOpen"),
  btnMenuClose = document.getElementById("btnMenuClose"),
  menuResponsive = document.getElementById("menuBar"),
  enlaces = document.getElementById("enlaces");

//Click abrir

btnMenuOpen.addEventListener("click", function () {
  menuResponsive.classList.add("active");
});
// click cerar
btnMenuClose.addEventListener("click", function () {
  menuResponsive.classList.remove("active");
});

//cerrar menu con elemento de enlaces

enlaces.addEventListener("click", function () {
  menuResponsive.style.transitionDelay = "0.5s";
  menuResponsive.classList.remove("active");
});

//Slider de productos

var contenedor = document.querySelector(".slider"),
  btnIzquierdo = document.getElementById("btn-izquierda"),
  btnDerecho = document.getElementById("btn-derecha");

// Evento para el boton derecho

btnDerecho.addEventListener("click", function () {
  contenedor.scrollLeft += contenedor.offsetWidth;
});

btnIzquierdo.addEventListener("click", function () {
  contenedor.scrollLeft -= contenedor.offsetWidth;
});

//Validacion de formulario

var formulario = document.getElementById("formulario");

function validar(e) {
  var inputNombre = document.getElementById("nombre"),
    inputEmail = document.getElementById("email"),
    inputComents = document.getElementById("comentarios"),
    alertSuccess = document.getElementById("alertSucces"),
    alertError = document.getElementById("alertError");

  if (
    inputNombre.value == 0 ||
    inputEmail.value == 0 ||
    inputComents.value == 0
  ) {
    e.preventDefault();
    alertError.classList.remove("hide");
    alertError.classList.add("show");

    setTimeout(function () {
      alertError.classList.remove("show");
      alertError.classList.add("hide");
    }, 2000);
  } else {
    e.preventDefault();

    alertSuccess.classList.remove("hide");
    alertSuccess.classList.add("show");

    setTimeout(function () {
      alertSuccess.classList.remove("show");
      alertSuccess.classList.add("hide");
    }, 2000);

    inputNombre.value == " ";
    inputEmail.value == " ";
    inputComents.value == " ";
  }
}

//Eventos del formulario
formulario.addEventListener("submit", validar);

//boton scroll top

var btnTop = document.getElementById("btn-top"),
  logo = document.getElementById("logo");

//detectar scrool en paginaweb

window.addEventListener("scroll", function () {
  var scroll = document.documentElement.scrollTop,
    fullSize = document.documentElement.offsetHeight,
    sizeVP = document.documentElement.clientHeight;

  if (scroll > 100) {
    btnTop.classList.add("show");
  } else {
    btnTop.classList.remove("show");
  }

  //Modificar elemento cuando llegue a final de pagina

  if (fullSize == scroll + sizeVP) {
    btnTop.classList.add("scrollFinal");
  } else {
    btnTop.classList.remove("scrollFinal");
  }
});

//detectamos evento click en el boton

btnTop.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

//detectar evento click en el logo

logo.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
