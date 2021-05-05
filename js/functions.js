import { PhotographersList } from "./class/PhotographersList.js";
import { Photographer } from "./class/Photographer.js";

const photographers_section = document.querySelector('.photographers');

/**
 * filter Photographer from #tags
 * @param e
 */
export function filterPhotographer(e) {
  let arrayFilter;
  arrayFilter = [];
  resetRender();
  let filter = e.target.innerText.substring(1).toLowerCase(); // remove #
  // console.log('filter is : ' + filter);

  for (let i = 0; i < photographersList.photographers.length; i++) {
    for (let j = 0; j < photographersList.photographers[i].tags.length; j++) {
      if (photographersList.photographers[i].tags[j].match(filter)) {
        arrayFilter.push(photographersList.photographers[i]);

        const photographerItem = new Photographer(
          photographersList.photographers[i].name,
          photographersList.photographers[i].id,
          photographersList.photographers[i].city,
          photographersList.photographers[i].country,
          photographersList.photographers[i].tags,
          photographersList.photographers[i].tagline,
          photographersList.photographers[i].price,
          photographersList.photographers[i].portrait,
        );

        const photographerEl = photographerItem.render();
        photographers_section.append(photographerEl);
      }
    }
  }

}

/**
 * Reset the section .photographers html
 * Used with filterPhotographer()
 */
export function resetRender() {
  photographers_section.innerHTML = '';
}


/**
 * Check url for render
 * window.location.href.split('/?')[1] = photographer id (e.g: "82")
 */


