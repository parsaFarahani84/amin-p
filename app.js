"use strict";

const sidebar = document.querySelector(".sidebar");
const ham = document.querySelector(".ham");
const a = document.querySelectorAll(".a");
const close = document.querySelector(".close");

ham.addEventListener("click", function () {
  if (sidebar.classList.contains("show-sidebar")) {
    sidebar.classList.remove("show-sidebar");
  } else {
    sidebar.classList.add("show-sidebar");
  }
});

close.addEventListener("click", function () {
  if (sidebar.classList.contains("show-sidebar")) {
    sidebar.classList.remove("show-sidebar");
  } else {
    sidebar.classList.add("show-sidebar");
  }
});

a.forEach((as) => {
  as.addEventListener("click", function () {
    if (sidebar.classList.contains("show-sidebar")) {
      sidebar.classList.remove("show-sidebar");
    } else {
      sidebar.classList.add("show-sidebar");
    }
  });
});
