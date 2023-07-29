"use strict";

const showModalBtn = document.querySelectorAll(`.show-modal`);
const modelDiv = document.querySelector(`.modal`);
const overlayDiv = document.querySelector(`.overlay`);
const closeModelBtn = document.querySelector(`.close-modal`);

function showModal() {
  modelDiv.classList.remove(`hidden`);
  overlayDiv.classList.remove(`hidden`);
}

function hideModal() {
  modelDiv.classList.add(`hidden`);
  overlayDiv.classList.add(`hidden`);
}
//////////////////
//main form here//
//////////////////

for (let i = 0; i < showModalBtn.length; i++) {
  showModalBtn[i].addEventListener(`click`, showModal);
}

closeModelBtn.addEventListener(`click`, hideModal);

document.addEventListener(`keydown`, function (e) {
  if (e.key === `Escape` && !modelDiv.classList.contains(`hidden`)) {
    hideModal();
  }
});
