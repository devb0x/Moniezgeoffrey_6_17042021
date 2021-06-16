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

/**
 * Generate photographersList & render
 * @type {PhotographersList}
 */
const photographersList = new PhotographersList();
photographersList
  .getPhotographers()
  .then(checkUrl)

