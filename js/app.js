document.addEventListener("DOMContentLoaded", init);

function init() {
  let introCover = document.querySelector(".introCover");
  console.log(introCover);
  if (introCover) {
    setTimeout(function () {
      introCover.style.width = "0";
    }, 3000);

    console.log("done");
  }

  setTimeout(function () {
    let cover = document.querySelector(".introCover");
    if (cover) {
      cover.classList.remove("active");
    }
  }, 1000);

  TweenMax.defaultEase = Linear.easeOut;

  new fullpage("#fullpage", {
    autoScrolling: true,
    navigation: true,
    keyboardScrolling: true,
    animateAnchor: true,
    navigationPosition: "left",
    //Design
    animateAnchor: true,
    controlArrows: false,
    responsiveSlides: true,
    onLeave: (origin, destination, direction) => {
      const section = destination.item;
      const title = section.querySelector("h1");
      const tl = new TimelineMax({ delay: 0.5 });
      tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: "0", opacity: 1 });

      if (destination.index === 1) {
        const p = document.querySelector("p");

        tl.fromTo(p, 0.7, { y: "100" }, { y: "0" });
      }
    },
  });
}

// Code and design by Jean-Christophe Castagne
// | https://github.com/JCcastagne/ |

// Code is free to be used with proper credit, all media assets belong to the original owner and shall not be reused or redistributed.

// fullpage.js is a library from https://github.com/alvarotrigo/fullPage.js/
