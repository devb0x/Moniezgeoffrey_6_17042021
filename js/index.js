import { PhotographersList } from "./class/PhotographersList.js";

/**
 *
 * @type {URLSearchParams}
 */
const params = new URLSearchParams(document.location.search)
let filter = params.get('tag')

/**
 * We check if we have filter inside the url
 * If not we display all photographers
 */
function checkUrl() {
  /**
   * check if filter not empty string or null
   */
  if (filter !== null || '') {
    filter = filter.toLowerCase()
    photographersList.getPhotographersByFilter(filter)
    photographersList.resetRender()
    photographersList.renderByFilter()
  } else {
    photographersList.render()
  }
}

// /**
//  * Remove .btn-active class on buttons
//  */
// function resetActive() {
//   for (let i = 0; i < buttons.length; i++) {
//     buttons[i].classList.remove('btn-active');
//   }
// }

// /**
//  * remove and add .btn-active class when we filter
//  * render photographers list from #category (e.g sports)
//  * @type {NodeListOf<Element>}
//  */
// let buttons = document.querySelectorAll(".filter-btn");
//   for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', (e) => {
//       resetActive();
//       if (e.target.matches("button.filter-btn")) {
//         e.target.classList.add('btn-active');
//       }
//   })
// }

/**
 * Generate photographersList & render
 * @type {PhotographersList}
 */
const photographersList = new PhotographersList();
photographersList
  .getPhotographers()
  .then(checkUrl)

