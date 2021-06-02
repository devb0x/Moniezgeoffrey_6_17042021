import { photographerPath } from "../page2.js";

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

    /**
     * picture and img balise
     * @type {HTMLPictureElement}
     */
    const pictureEl = document.createElement('picture')
    const imgEl = document.createElement('img')
    imgEl.src = `./../Sample%20Photos/${photographerPath}/${this.image}`
    imgEl.alt = `${this.image}`
    imgEl.classList.add('photographer-gallery__item-media')
    pictureEl.appendChild(imgEl)
    mediaImageEl.appendChild(pictureEl)

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
     * price
     * @type {HTMLDivElement}
     */
    const infoPrice = document.createElement('div')
    infoPrice.classList.add('photographer-gallery__item-info-price')
    infoPrice.innerHTML = `${this.price} &euro;`
    spanInfo.appendChild(infoPrice)

    /**
     * likes btn
     * @type {HTMLButtonElement}
     */
    const btnLikes = document.createElement('button')
    btnLikes.classList.add('photographer-gallery__item-info-likes')
    btnLikes.innerHTML = `${this.likes}<i class="fas fa-heart"></i>`
    spanInfo.appendChild(btnLikes)
    mediaImageEl.appendChild(spanInfo)

    // imgEl.addEventListener('click', () => {
    //   console.log('event clic on imgEl')
    //   // new Lightbox.render(this.id)
    //   const myLightbox = Lightbox.render(this.id)
    // })

    btnLikes.addEventListener('click', () => {
      console.log('test clic like btn')
      this.updateLike()
    })

    return mediaImageEl;
  }

  updateLike() {
    const likes = document.querySelectorAll('.photographer-gallery__item-info-likes')
    for (let i = 0; i < likes.length; i++) {
      likes[i].addEventListener('click', () => {
        console.log('update like fction' + this.likes)
        // this.likes++
        // likes[i].innerHTML = `${this.likes}<i class="fas fa-heart"></i>`
        this.test([i])
      })
    }
  }

  test(i) {
    console.log('test fction')
    this.likes++
    const likes = document.querySelectorAll('.photographer-gallery__item-info-likes')
    likes[i].innerHTML = `${this.likes}<i class="fas fa-heart"></i>`

  }





}
