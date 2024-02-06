"use strict";
const menuBtn = document.querySelector(".menu");
const closeBtn = document.querySelector(".close");
const nav = document.querySelector("nav");
const container = document.querySelector(".container");

menuBtn.addEventListener("click", (e) => {
  nav.classList.remove("hidden");
  container.classList.add("blurred");
});
