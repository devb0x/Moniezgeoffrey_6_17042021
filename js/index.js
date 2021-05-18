import { PhotographersList } from "./class/PhotographersList.js";

/**
 * Remove .btn-active class on buttons
 */
function resetActive() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('btn-active');
  }
}

/**
 * remove and add .btn-active class when we filter
 * @type {NodeListOf<Element>}
 */
let buttons = document.querySelectorAll(".filter-btn");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => {
      resetActive();
      if (e.target.matches("button.filter-btn")) {
        e.target.classList.add('btn-active');
        photographersList.filter(e);
      }
  })
}

const photographersList = new PhotographersList();
photographersList.getPhotographers().then(() => photographersList.render());
