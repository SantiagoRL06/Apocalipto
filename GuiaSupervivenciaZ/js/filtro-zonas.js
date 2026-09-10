/* ===================================================
   FILTRO-ZONAS.JS - Filtrado de refugios y detalles
   Persona 1 (Santiago Ruano)
   =================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Filtrado de tarjetas por nivel de peligro
  const selectorFiltro = document.getElementById("filtro-peligro");
  const tarjetasZonas = document.querySelectorAll(".tarjeta-zona");

  if (selectorFiltro) {
    selectorFiltro.addEventListener("change", (e) => {
      const nivelSeleccionado = e.target.value;

      tarjetasZonas.forEach((tarjeta) => {
        const nivelTarjeta = tarjeta.getAttribute("data-nivel");

        if (nivelSeleccionado === "todos" || nivelSeleccionado === nivelTarjeta) {
          tarjeta.style.display = "flex";
        } else {
          tarjeta.style.display = "none";
        }
      });
    });
  }

  // 2. Interacción de los botones "Ver detalles"
  const botonesDetalles = document.querySelectorAll(".btn-detalles");

  // Información extendida para cada refugio
  const detallesPorRefugio = {
    "Refugio Subterráneo Norte": {
      capacidad: "80 sobrevivientes",
      recursos: "Raciones para 6 meses, generador hidroeléctrico",
      contacto: "Canal 4.2 FM"
    },
    "Estación Central de Trenes": {
      capacidad: "35 sobrevivientes",
      recursos: "Armamento ligero, suministros médicos escasos",
      contacto: "Canal 8.1 FM"
    },
    "Puerto Abandonado": {
      capacidad: "15 sobrevivientes (Inseguro)",
      recursos: "Botes de escape, combustible limitado",
      contacto: "Sin señal activa"
    },
    "Antiguo Fuerte Militar": {
      capacidad: "150 sobrevivientes",
      recursos: "Torretas automatizadas, hospital de campaña, pozo de agua",
      contacto: "Canal 10.5 FM"
    }
  };

  botonesDetalles.forEach((boton) => {
    boton.addEventListener("click", () => {
      const contenedorInfo = boton.closest(".info-zona");
      const tituloRefugio = contenedorInfo.querySelector("h3")?.textContent.trim();
      let panelDetalles = contenedorInfo.querySelector(".detalles-extra");

      if (!panelDetalles) {
        // Crear el panel de detalles si no existe
        const datos = detallesPorRefugio[tituloRefugio] || {
          capacidad: "No especificada",
          recursos: "En evaluación",
          contacto: "Frecuencia local"
        };

        panelDetalles = document.createElement("div");
        panelDetalles.className = "detalles-extra";
        panelDetalles.innerHTML = `
          <p><strong>Capacidad:</strong> ${datos.capacidad}</p>
          <p><strong>Recursos:</strong> ${datos.recursos}</p>
          <p><strong>Radio de contacto:</strong> ${datos.contacto}</p>
        `;
        contenedorInfo.appendChild(panelDetalles);
        boton.textContent = "Ocultar detalles";
      } else {
        // Alternar visibilidad
        const estaOculto = panelDetalles.style.display === "none";
        panelDetalles.style.display = estaOculto ? "block" : "none";
        boton.textContent = estaOculto ? "Ocultar detalles" : "Ver detalles";
      }
    });
  });
});
