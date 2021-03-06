import { photographerPath } from "../../photographerPage.js"

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
    this.id = id
    this.photographerId = photographerId
    this.title = title
    this.image = image
    this.tags = tags
    this.likes = likes
    this.date = date
    this.price = price
  }

  /**
   * render Image
   * @returns {HTMLDivElement}
   */
  render() {
    /**
     * parent div for image media
     * @type {HTMLDivElement}
     */
    const mediaImageEl = document.createElement('div')
    mediaImageEl.classList.add('photographer-gallery__item')

    /**
     * picture and img balise
     * @type {HTMLPictureElement}
     */
    const pictureEl = document.createElement('picture')
    const imgEl = document.createElement('img')
    imgEl.src = `./../Sample%20Photos/${photographerPath}/${this.image}`
    imgEl.alt = `${this.image}`
    imgEl.loading = 'lazy'
    imgEl.classList.add('photographer-gallery__item-media')
    imgEl.tabIndex = 0

    pictureEl.appendChild(imgEl)
    mediaImageEl.appendChild(pictureEl)

    /**
     * span for displaying info
     * @type {HTMLSpanElement}
     */
    const spanInfo = document.createElement('span')
    spanInfo.classList.add('photographer-gallery__item-info')

    /**
     * title
     * @type {HTMLHeadingElement}
     */
    const infoTitle = document.createElement('h2')
    infoTitle.classList.add('photographer-gallery__item-info-title')
    infoTitle.innerText = `${this.title}`
    spanInfo.appendChild(infoTitle)

    /**
     * removed from the mockup
     * price
     * @type {HTMLDivElement}
     */
    // const infoPrice = document.createElement('div')
    // infoPrice.classList.add('photographer-gallery__item-info-price')
    // infoPrice.innerHTML = `${this.price} &euro;`
    // spanInfo.appendChild(infoPrice)

    /**
     * likes btn
     * @type {HTMLButtonElement}
     */
    const btnLikes = document.createElement('button')
    btnLikes.classList.add('photographer-gallery__item-info-likes')
    btnLikes.innerHTML = `${this.likes}<i class="fas fa-heart" aria-label="likes"></i>`
    spanInfo.appendChild(btnLikes)

    mediaImageEl.appendChild(spanInfo)

    /**
     * Event Listener click on like button
     * We prevent propagation for not displaying the Lightbox when we
     * clic on the like button
     */
    btnLikes.addEventListener('click', (e) => {
      e.stopPropagation()
      this.updateLike()
      btnLikes.disabled = true
      btnLikes.style.cursor = 'default'
    })

    return mediaImageEl;
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
