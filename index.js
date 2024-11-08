// phew… not a lot going on here. Please add some code!
const bookMarkButton = document.querySelector("[data-js=bookMarkButton]");

bookMarkButton.addEventListener("click", () => {
  bookMarkButton.classList.toggle("bookmark--active");
});

const answerButton = document.querySelector(".card__button-answer");
const answerText = document.querySelector(".card__answer");

answerButton.addEventListener("click", () => {
  answerText.classList.toggle("card__answer--active");

  if (answerText.classList.contains("card__answer--active")) {
    answerButton.textContent = "Hide answer";
  } else {
    answerButton.textContent = "Show answer";
  }
});
