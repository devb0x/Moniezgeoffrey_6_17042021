import { photographerPath } from "../page2.js";

import { Lightbox } from "./Lightbox.js"


// const lightbox = document.getElementById('lightbox');

/**
 * Class representing an Image
 */

export class Image {
  /**
   * Create an Image
   * @param id
   * @param photographerId
   * @param title
   * @param image
   * @param tags
   * @param likes
   * @param date
   * @param price
   */
  constructor(id, photographerId, title, image, tags, likes, date, price) {
    this.id = id;
    this.photographerId = photographerId;
    this.title = title;
    this.image = image;
    this.tags = tags;
    this.likes = likes;
    this.date = date;
    this.price = price;
  }

  render() {

    const mediaImageEl = document.createElement('div');
    mediaImageEl.classList.add('photographer-gallery__item');
    mediaImageEl.innerHTML = `
    
    <picture>
        <img
          src="./../Sample%20Photos/${photographerPath}/${this.image}"
          alt="${this.image}"
          class="photographer-gallery__item-img">
    </picture>
    
    <span class="photographer-gallery__item-info">
      <h2 class="photographer-gallery__item-info-title">${this.title}</h2>
      <div class="photographer-gallery__item-info-price">${this.price} &euro;</div>
      <div class="photographer-gallery__item-info-likes">${this.likes}<i class="fas fa-heart"></i></div>
    </span>
  `;

    return mediaImageEl;
  }

}

