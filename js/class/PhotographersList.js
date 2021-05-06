import { Photographer } from "./Photographer.js";

const photographers_section = document.querySelector('.photographers');

export class PhotographersList {

  constructor() {
    this.photographers = [];
  }

  /**
   * Fetch from json locally
   * @returns {Promise<any>}
   */
  getPhotographers() {
    return fetch('https://raw.githubusercontent.com/devb0x/Moniezgeoffrey_6_17042021/master/file.json')
      .then(response => {
        if (!response.ok) {
          throw new Error("HTTP error" + response.status);
        }
        return response.json();
      })
      .then(json => {
        json.photographers.forEach((element) => {
          this.addPhotographer(element);
        });
      });
  }

  /**
   * add photographer
   * @param photographer
   */
  addPhotographer(photographer) {
    this.photographers.push(photographer);
  }

  /**
   * Create new Photographer
   * & render it
   */
  render() {
    this.photographers.forEach(el => {
      const photographerItem = new Photographer(
        el.name,
        el.id,
        el.city,
        el.country,
        el.tags,
        el.tagline,
        el.price,
        el.portrait,
      );

      const photographerEl = photographerItem.render(el);
      photographers_section.append(photographerEl);
    })
  }

  filter(e) {
    let arrayFilter;
    arrayFilter = [];
    this.resetRender();
    let filter = e.target.innerText.substring(1).toLowerCase(); // remove #

    this.photographers.forEach(photographer => {
      photographer.tags.forEach(tag => {
        if (tag.match(filter)) {
          arrayFilter.push(photographer);

          const photographerItem = new Photographer(
            photographer.name,
            photographer.id,
            photographer.city,
            photographer.country,
            photographer.tags,
            photographer.tagline,
            photographer.price,
            photographer.portrait,
          );

          const photographerEl = photographerItem.render();
          photographers_section.append(photographerEl);
        }
      })
    })
  }

  resetRender() {
    photographers_section.innerHTML = '';
  }

}

