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
  getPhotographers = () => {
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
    for (let i = 0; i < this.photographers.length; i++) {
      const photographerItem = new Photographer(
        this.photographers[i].name,
        this.photographers[i].id,
        this.photographers[i].city,
        this.photographers[i].country,
        this.photographers[i].tags,
        this.photographers[i].tagline,
        this.photographers[i].price,
        this.photographers[i].portrait,
      );

      const photographerEl = photographerItem.render();
      photographers_section.append(photographerEl);
    }
  }

}

