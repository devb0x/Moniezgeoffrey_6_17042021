import { PhotographersList } from "./class/PhotographersList.js";
import { filterPhotographer } from "./functions.js";

/**
 * Dom Selector
 * @type {Element}
 */
const body = document.body;

/**
 * Filter photographers from #tags
 */
body.addEventListener('click', (e) => {
  if (e.target && e.target.matches("button.filter-btn")) {
    filterPhotographer(e);
  }
});

const photographersList = new PhotographersList();
photographersList.getPhotographers().then(() => photographersList.render());
