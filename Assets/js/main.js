const form = document.querySelector(".card__form");
const output = document.querySelector(".card__output");
const rate = document.querySelector(".card__rate");
const thanks = document.querySelector(".card__thanks");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  output.innerHTML = this.rate.value;
  rate.style.display = "none";
  thanks.style.display = "flex";
});
