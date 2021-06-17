import { photographerPath } from "../../page2.js";

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

  /**
   * render Video
   * @returns {HTMLDivElement}
   */
  render() {
    /**
     * parent div for video media
     * @type {HTMLDivElement}
     */
    const mediaVideoEl = document.createElement('div')
    mediaVideoEl.classList.add('photographer-gallery__item')

    /**
     * video balise
     * @type {HTMLVideoElement}
     */
    const video = document.createElement('video')
    video.classList.add('photographer-gallery__item-media')
    video.tabIndex = 0
    const source = document.createElement('source')
    source.src = `./../Sample%20Photos/${photographerPath}/${this.video}`
    source.type = 'video/mp4'
    video.appendChild(source)
    mediaVideoEl.appendChild(video)

    /**
     * span for displaying info
     * @type {HTMLSpanElement}
     */
    const spanInfos = document.createElement('span')
    spanInfos.classList.add('photographer-gallery__item-info')

    /**
     * title
     * @type {HTMLHeadingElement}
     */
    const spanTitle = document.createElement('h2')
    spanTitle.classList.add('photographer-gallery__item-info-title')
    spanTitle.innerText = `${this.title}`
    spanInfos.appendChild(spanTitle)

    /**
     * removed from the mockup
     * price
     * @type {HTMLDivElement}
     */
    // const spanPrice = document.createElement('div')
    // spanPrice.classList.add('photographer-gallery__item-info-price')
    // spanPrice.innerText = `${this.price}`
    // spanInfos.appendChild(spanPrice)

    /**
     * likes btn
     * @type {HTMLButtonElement}
     */
    const btnLikes = document.createElement('button')
    btnLikes.classList.add('photographer-gallery__item-info-likes')
    btnLikes.innerHTML = `${this.likes}<i class="fas fa-heart"></i>`
    spanInfos.appendChild(btnLikes)

    mediaVideoEl.appendChild(spanInfos)

    /**
     * Event Listener click on like button
     * We prevent propagation for not displaying the Lightbox when we
     * clic on the like button
     */
    btnLikes.addEventListener('click', (e) => {
      e.stopPropagation()
      this.updateLike()
    })

    return mediaVideoEl
  }

  /**
   * increment the like value
   */
  updateLike() {
    this.likes = this.likes + 1

    /**
     * update the DOM of the media
     * @type {string}
     */
    event.currentTarget.innerHTML = `${this.likes}<i class="fas fa-heart"></i>`

    /**
     * update the number of total likes
     * @type {HTMLElement}
     */
    const totalLikes_span = document.getElementById('likes')
    let value = totalLikes_span.innerText
    value++
    totalLikes_span.innerHTML = `${value} <i class="fas fa-heart"></i>`
  }

}
