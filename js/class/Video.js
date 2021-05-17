import { photographerPath } from "../page2.js";

/**
 * Class representing a Video
 */
export class Video {
  /**
   * Create a Video
   * @param id
   * @param photographerId
   * @param title
   * @param video
   * @param tags
   * @param likes
   * @param date
   * @param price
   */
  constructor(id, photographerId, title, video, tags, likes, date, price) {
    this.id = id;
    this.photographerId = photographerId;
    this.title = title;
    this.video = video;
    this.tags = tags;
    this.likes = likes;
    this.date = date;
    this.price = price;
  }

  render() {

    const mediaVideoEl = document.createElement('div');
    mediaVideoEl.classList.add('photographer-gallery__item');
    mediaVideoEl.innerHTML = `
      <a href="" class=".photographer-gallery__item-link">
      <video class="photographer-gallery__item-vid">
        <source src="./../Sample%20Photos/${photographerPath}/${this.video}" type="video/mp4">
      </video>
      </a>
      
      <span class="photographer-gallery__item-info">
        <h2 class="photographer-gallery__item-info-title">${this.title}</h2>
        <div class="photographer-gallery__item-info-price">${this.price} &euro;</div>
        <div class="photographer-gallery__item-info-likes">${this.likes}<i class="fas fa-heart"></i></div>
      </span>
    `;

    return mediaVideoEl
  }

}
