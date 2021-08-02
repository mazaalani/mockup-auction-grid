import Card from "./Card.js";
import Selects from "./Selects.js";
(() => {
  let grid = document.querySelector("[data-js-grid]"),
    filterOut = document.querySelector("[data-js-filter]"),
    filterIn = document.querySelector("[data-js-filterIn]"),
    requestContainer = document.querySelector(".request-container"),
    hamburger = document.querySelector(".hamburger-check"),
    nav = document.querySelector("nav"),
    gridContainer = document.querySelector(".grid-container");

  new Card(grid, 12);
  new Selects();

  filterOut.addEventListener("click", () => {
    requestContainer.classList.add("request-out");
    gridContainer.classList.add("grid-go-left");
    filterOut.classList.add("hidden");
  });
  filterIn.addEventListener("click", () => {
    requestContainer.classList.remove("request-out");
    gridContainer.classList.remove("grid-go-left");
    filterOut.classList.remove("hidden");
  });
  hamburger.addEventListener("click", (e) => {
    if (e.target.checked) nav.classList.remove("hidden");
    else nav.classList.add("hidden");
  });
})();
