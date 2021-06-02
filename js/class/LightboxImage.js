import { photographerPath } from "../page2.js";

/**
 * Class representing the LightboxImage
 */
export class LightboxImage {

  /**
   * Create Image for Lightbox
   * @param mediaList
   */
  constructor(mediaList) {
    this.mediaList = mediaList
  }

  /**
   * Create the <img> and the src
   * @returns {HTMLImageElement}
   */
  render() {
    const containerImg = document.createElement('img')
    containerImg.classList.add('lightbox__container-media')
    containerImg.src= `./../Sample%20Photos/${photographerPath}/${this.mediaList.image}`
    return containerImg
  }
}
