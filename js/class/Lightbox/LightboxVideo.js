import { photographerPath } from "../../page2.js";

const lightbox_div = document.getElementsByClassName('lightbox__container')[0]
// const lightBox_parent_div = document.getElementById('lightbox')


/**
 * Class representing the LightboxVideo
 */
export class LightboxVideo {

  /**
   *
   * @param id
   * @param photographerId
   * @param title
   * @param video
   * @param index
   */
  constructor(id, photographerId, title, video, index) {
    this.id = id;
    this.photographerId = photographerId;
    this.title = title;
    this.video = video;
    this.index = index
  }

  /**
   * open the lightbox & render media
   */
  render() {
    /**
     * create video
     * @type {HTMLVideoElement}
     */
    const containerVideo = document.createElement('video')
    containerVideo.classList.add('lightbox__container-media')
    containerVideo.src = `./../Sample%20Photos/${photographerPath}/${this.video}`
    containerVideo.controls = true

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
    lightbox_div.append(containerVideo)
    lightbox_div.append(titleDiv)

    // return LightboxVideo
  }

}
