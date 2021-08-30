function init() {
  let introCover = document.querySelector(".introCover");
  console.log(introCover);
  if (introCover) {
    setTimeout(function () {
      introCover.style.opacity = "0";
    }, 1750);
    setTimeout(function () {
      introCover.style.display = "none";
    }, 2760);
    //2760 because animation of cover fading is 1000, adding an extra 10ms on second function just to make sure.
    //cover is "position: absolute" which forces user to watch animation before scrolling.
  }
}
document.body.addEventListener("DOMContentLoaded", init());
