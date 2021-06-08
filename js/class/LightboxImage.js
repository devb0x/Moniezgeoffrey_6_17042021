import { photographerPath } from "../page2.js";
import { Lightbox } from "./Lightbox.js";

const lightbox_div = document.getElementsByClassName('lightbox__container')[0]
// const lightBox_parent_div = document.getElementById('lightbox')


/**
 * Class representing the LightboxImage
 */
export class LightboxImage {

  /**
   *
   * @param id
   * @param photographerId
   * @param title
   * @param image
   * @param index
   */
  constructor(id, photographerId, title, image, index) {
    this.id = id
    this.photographerId = photographerId
    this.title = title
    this.image = image
    this.index = index
  }

  /**
   * open the lightbox & render media
   */
  render() {
    console.log(this.index)
    Lightbox.open()

    /**
     * create img
     * @type {HTMLImageElement}
     */
    const containerImg = document.createElement('img')
    containerImg.classList.add('lightbox__container-media')
    containerImg.src= `./../Sample%20Photos/${photographerPath}/${this.image}`

    /**
     * create title
     * @type {HTMLDivElement}
     */
    const titleDiv = document.createElement('div')
    titleDiv.classList.add('lightbox__container-title')
    titleDiv.innerText = `${this.title}`

    /**
     * add HTML Element to the DOM
     */
    lightbox_div.append(containerImg)
    lightbox_div.append(titleDiv)

    return LightboxImage
  }

}
