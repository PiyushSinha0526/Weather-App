import { getCityDetails } from "./js/api.js";
import { updateUI, notFound } from "./js/ui.js"

// TODO: querySelector
const form = document.querySelector("form");
const element = document.querySelector(".show");
export const city = document.querySelector(".city__name");
export const changeIcon = document.querySelector(".icon img");
export const tempDetails = document.querySelector(".temp");
export const display = document.querySelector(".main__secondary-info");
export const otherDetails = document.querySelectorAll(".main__secondary-info div .numValue");

// Todo: EventListener
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const cityName = form.city.value.trim();
  form.reset();

  element.classList.remove("hide");

  // + call cityDetails and update UI
  getCityDetails(cityName)
    .then((data) => updateUI(data, cityName))
    .catch(() => notFound());
});
