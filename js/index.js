import { PhotographersList } from "./class/PhotographersList.js"

const toMain_nav = document.querySelector('.main-nav')

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
 * display or hide the link to #main section when we scroll
 */
document.addEventListener('scroll', () => {
  if (window.pageYOffset > 650) {
    toMain_nav.classList.remove('hidden')
  }
  if (window.pageYOffset < 651) {
    toMain_nav.classList.add('hidden')
  }
})

/**
 * Generate photographersList & render
 * @type {PhotographersList}
 */
const photographersList = new PhotographersList();
photographersList
  .getPhotographers()
  .then(checkUrl)
