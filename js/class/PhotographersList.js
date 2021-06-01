import { Photographer } from "./Photographer.js";

const photographers_section = document.querySelector('.photographers');

/**
 * Class representing PhotographersList for Homepage
 */
export class PhotographersList {

  /**
   * photographers[] for all photographers
   * arrayFilter[] for photographers with the right tags
   */
  constructor() {
    this.photographers = [];
    this.arrayFilter = [];
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
   * Filter photographers from the url
   * @param filter
   */
  getPhotographersByFilter(filter) {
    this.photographers.forEach(el => {
      el.tags.forEach(tag => {
        if (tag.match(filter)) {
          this.arrayFilter.push(el)
        }
      })
      this.renderByFilter()
    })
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
      /**
       * @type {Photographer}
       */
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

      const photographerEl = photographerItem.render();
      photographers_section.append(photographerEl);
    })
  }

  /**
   * render photographers from tags
   */
  renderByFilter() {
    this.arrayFilter.forEach(el => {
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

  /**
   * Cleaning the html before rerender when we filter
   */
  resetRender() {
    photographers_section.innerHTML = '';
  }

}

