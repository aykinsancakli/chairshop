"use strict";

// Elements
const icons = document.querySelectorAll(".icon");
const hiddenBoxes = document.querySelectorAll(".hidden-box");
const items = document.querySelectorAll(".item");

icons.forEach((icon) =>
  icon.addEventListener("click", function (e) {
    const clicked = e.target;

    // For testing
    // console.log(clicked);
    // console.log(e.target.dataset.tab);

    const targetTab = document.querySelector(`.item--${e.target.dataset.tab}`);

    if (!targetTab) return;

    if (!targetTab.classList.contains("item--open")) {
      targetTab.classList.add("item--open");
    } else {
      targetTab.classList.remove("item--open");
    }
  })
);
