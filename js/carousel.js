const siema1 = new Siema({
  selector: ".siema1",
  duration: 700,
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

const siema2 = new Siema({
  selector: ".siema2",
  duration: 700,
  easing: "ease-in-out",
  perPage: 1,
  startIndex: 0,
  draggable: true,
  multipleDrag: true,
  threshold: 20,
  loop: true,
});
document.querySelector(".prev2").addEventListener("click", () => siema2.prev());
document.querySelector(".next2").addEventListener("click", () => siema2.next());
