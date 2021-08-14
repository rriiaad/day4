let button = document.querySelector(".button");
let ball = document.querySelector(".ball");

button.addEventListener("click", () => {
  ball.classList.toggle("clicked");
  button.classList.toggle("clickedd");
});

let dark = document.querySelector(".DARK");

dark.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
