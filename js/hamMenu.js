//Hamburger Menu JavaScript source code by J-C Castagne @GitHub - https://github.com/JCcastagne

function init() {
  const menuButton = document.querySelector(".menuButton");

  const drawer = document.querySelector(".drawer");

  const menuButtonBurger = document.querySelector(".menuButtonBurger");

  let menuOpen = false;

  menuButton.addEventListener("click", () => {
    if (menuOpen == false) {
      menuButton.classList.add("open");
      drawer.classList.add("toggledDrawer");
      menuButtonBurger.style.filter = "invert()";
      menuOpen = true;
    } else {
      menuButton.classList.remove("open");
      drawer.classList.remove("toggledDrawer");
      menuButtonBurger.style.filter = "none";
      menuOpen = false;
    }
  });
}

document.body.addEventListener("DOMContentLoaded", init());
