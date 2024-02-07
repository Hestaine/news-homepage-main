"use strict";
const menuBtn = document.querySelector(".menu");
const closeBtn = document.querySelector(".close");
const nav = document.querySelector("nav");
const container = document.querySelector(".container");
const overlay = document.querySelector(".overlay");

menuBtn.addEventListener("click", (e) => {
  nav.classList.remove("hidden");
  overlay.classList.add("dark-overlay");
});

closeBtn.addEventListener("click", (e) => {
  nav.classList.add("hidden");
  overlay.classList.remove("dark-overlay");
});
