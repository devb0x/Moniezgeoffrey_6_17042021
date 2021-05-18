import { photographerPath } from "../page2.js";

export class LightboxImage {

  constructor(mediaList) {
    this.mediaList = mediaList
  }

  render() {
    const containerImg = document.createElement('img')
    containerImg.classList.add('lightbox__container-media')
    containerImg.src= `./../Sample%20Photos/${photographerPath}/${this.mediaList.image}`
    return containerImg
  }
}
