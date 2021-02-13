import { city, changeIcon, tempDetails, display, otherDetails } from "../main.js";

// TODO: Updating the DOM
export const updateUI = (data, cityName) => {
  // *destructure properties----
  const { temp, humidity, pressure, feels_like } = data.main;
  const { speed } = data.wind;
  const { main, icon } = data.weather[0];

  let status = [
    (speed * 3.6).toFixed(2),
    humidity,
    Math.floor(feels_like - 273.15),
    pressure,
  ];

  // + city name
  city.innerHTML = cityName;

  // + icon
  const iconSrc = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  changeIcon.setAttribute("src", iconSrc);

  // + icon primary Details
  tempDetails.innerHTML = `
          <span>${Math.floor(temp - 273.15)}</span>
          <span>&deg;C</span>
          <span class="icon_info">${main}</span>
      `;

  // + other Details
  display.setAttribute("style", "display: grid;");
  otherDetails.forEach((value, index) => {
    value.innerHTML = status[index];
    index++;
  });
};

export const notFound = () => {
  // + city name
  city.innerHTML = "Not Found!!";

  // + icon
  changeIcon.setAttribute("src", "./img/1.png");

  // + icon primary Details
  tempDetails.innerHTML = `
          <span style='font-size: .6em;'>Search engine is very flexible.</span>
          <span style='font-size: .6em;'>To make it more precise. Try</span>
          <span style="color: var(--clr-dark); display: block;">"City, Country"</span>
      `;

  // + other Details
  display.setAttribute("style", "display: none;");
};
