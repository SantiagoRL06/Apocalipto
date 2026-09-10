
document.addEventListener("DOMContentLoaded", () => {
  const botonModo = document.getElementById("toggle-modo");
  const CLAVE_STORAGE = "survive-zombie-modo";

  function aplicarModoGuardado() {
    const modoGuardado = localStorage.getItem(CLAVE_STORAGE);
    if (modoGuardado === "oscuro") {
      document.body.classList.add("modo-oscuro");
      if (botonModo) botonModo.setAttribute("aria-pressed", "true");
    }
  }

  function alternarModo() {
    const esOscuro = document.body.classList.toggle("modo-oscuro");
    botonModo.setAttribute("aria-pressed", String(esOscuro));
    localStorage.setItem(CLAVE_STORAGE, esOscuro ? "oscuro" : "claro");
  }

  if (botonModo) {
    aplicarModoGuardado();
    botonModo.addEventListener("click", alternarModo);
  }


  const botonMenu = document.getElementById("toggle-menu");
  
  const menuNav =
    document.getElementById("nav-principal") ||
    document.querySelector("nav ul");

  function alternarMenu() {
    const abierto = menuNav.classList.toggle("menu-abierto");
    botonMenu.setAttribute("aria-expanded", String(abierto));
    botonMenu.setAttribute(
      "aria-label",
      abierto ? "Cerrar menú de navegación" : "Abrir menú de navegación"
    );
  }

  if (botonMenu && menuNav) {
    botonMenu.addEventListener("click", alternarMenu);

    menuNav.querySelectorAll("a").forEach((enlace) => {
      enlace.addEventListener("click", () => {
        menuNav.classList.remove("menu-abierto");
        botonMenu.setAttribute("aria-expanded", "false");
      });
    });
  }
});