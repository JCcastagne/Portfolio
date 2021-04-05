document.addEventListener("DOMContentLoaded", init);

function init() {
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
