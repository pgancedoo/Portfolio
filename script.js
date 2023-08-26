window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const scrollPos = window.scrollY;

  if (scrollPos > 50) {
    navbar.style.opacity = "1";
  } else {
    navbar.style.opacity = "0";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".menu");
  const botonAbrir = document.querySelector(".abrir-menu");
  const botonCerrar = document.querySelector(".cerrar-menu");
  const enlacesMenu = menu.querySelectorAll("a.cerrar");

  function selectorMenu() {
    menu.classList.toggle("menu-abierto");
  }

  botonAbrir.addEventListener("click", selectorMenu);
  botonCerrar.addEventListener("click", selectorMenu);

  enlacesMenu.forEach((enlace) => {
    enlace.addEventListener("click", () => {
      selectorMenu();
    });
  });

  window.addEventListener("scroll", () => {
    if (menu.classList.contains("menu-abierto")) {
      selectorMenu();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const text = "Pablo Gancedo Jiménez";
  const speed = 80;
  const interval = 10000;

  const typewriter = document.getElementById("escritura");
  let i = 0;
  let direction = 1;

  function typeWriter() {
    if (direction === 1) {
      if (i < text.length) {
        typewriter.textContent += text.charAt(i);
        i++;
      } else {
        setTimeout(() => {
          direction = -1;
          i -= 2;
          typeWriter();
        }, interval);
        return;
      }
    } else if (direction === -1) {
      if (i >= 0) {
        typewriter.textContent = text.slice(0, i);
        i--;
      } else {
        direction = 1;
        i = 0;
      }
    }

    setTimeout(typeWriter, speed);
  }

  typeWriter();
});

document.addEventListener("DOMContentLoaded", function () {
  function scrollToSection(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  const links = document.querySelectorAll("a[href^='#']");
  links.forEach(function (link) {
    link.addEventListener("click", scrollToSection);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const seccion = document.querySelector(".perfil");
  const destello = document.getElementById("destello");

  seccion.addEventListener("mousemove", function (event) {
    const x = event.clientX - seccion.getBoundingClientRect().left;
    const y = event.clientY - seccion.getBoundingClientRect().top;

    destello.style.left = `${x}px`;
    destello.style.top = `${y}px`;
  });
});
