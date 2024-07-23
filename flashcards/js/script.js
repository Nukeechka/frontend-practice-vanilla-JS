const flipCardFront = document.querySelector(".flip-card-front");
const flipCardBack = document.querySelector(".flip-card-back");
const flipInner = document.querySelector(".flip-card-inner");

flipCardFront.addEventListener("click", () => {
  flipInner.style.transform = "rotateY(180deg)";
});

flipCardBack.addEventListener("click", () => {
  flipInner.style.transform = "rotateY(0deg)";
});
