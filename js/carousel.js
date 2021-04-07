const siema1 = new Siema({
  selector: ".siema1",
  duration: 400,
  easing: "ease-in-out",
  perPage: 1,
  startIndex: 0,
  draggable: true,
  multipleDrag: true,
  threshold: 20,
  loop: true,
});
document.querySelector(".prev1").addEventListener("click", () => siema1.prev());
document.querySelector(".next1").addEventListener("click", () => siema1.next());
