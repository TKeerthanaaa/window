"use strict";
const btnClick = document.getElementById("btn-click");
const modalContainer = document.getElementById("modal-container");
const btnClose = document.getElementById("btn-close");

btnClick.addEventListener("click", () => {
  modalContainer.classList.remove("close");
  modalContainer.classList.add("open");
});
