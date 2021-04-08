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

const siema3 = new Siema({
  selector: ".siema3",
  duration: 700,
  easing: "ease-in-out",
  perPage: 3,
  startIndex: 0,
  draggable: true,
  multipleDrag: true,
  threshold: 20,
  loop: true,
});
document.querySelector(".prev3").addEventListener("click", () => siema3.prev());
document.querySelector(".next3").addEventListener("click", () => siema3.next());

const siema4 = new Siema({
  selector: ".siema4",
  duration: 700,
  easing: "ease-in-out",
  perPage: 3,
  startIndex: 0,
  draggable: true,
  multipleDrag: true,
  threshold: 20,
  loop: true,
});
document.querySelector(".prev4").addEventListener("click", () => siema4.prev());
document.querySelector(".next4").addEventListener("click", () => siema4.next());

const siema5 = new Siema({
  selector: ".siema5",
  duration: 700,
  easing: "ease-in-out",
  perPage: 3,
  startIndex: 0,
  draggable: true,
  multipleDrag: true,
  threshold: 20,
  loop: true,
});
document.querySelector(".prev5").addEventListener("click", () => siema5.prev());
document.querySelector(".next5").addEventListener("click", () => siema5.next());
