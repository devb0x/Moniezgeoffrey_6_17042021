import { LightboxImage } from "./LightboxImage.js";
import { LightboxVideo } from "./LightboxVideo.js";

const lightBox_div = document.getElementById('lightbox')
const lightBoxContainer_div = document.querySelector('.lightbox__container')
const lightBoxClose_btn = document.querySelector('.lightbox-btn__close')
const lightBoxPrev_btn = document.querySelector('.lightbox-btn__prev')
const lightBoxNext_btn = document.querySelector('.lightbox-btn__next')

/**
 * Class representing the Lightbox
 */
export class Lightbox {

  constructor(mediaList) {
    this.mediaList = mediaList
    this.activeId = null
    this.index = null

    /**
     * Event Listener for close prev and next
     */
    lightBoxClose_btn.addEventListener('click', () => {
      this.close()
    })

    lightBoxPrev_btn.addEventListener('click', () => {
      this.prev()
    })

    lightBoxNext_btn.addEventListener('click', () => {
      this.next()
    })

    /**
     * Keyboard Event for navigation / close
     * @param e
     */
    document.addEventListener('keyup', (e) => {
      if (e.key === 'Escape') {
        this.close()
      }
      if (e.key === 'ArrowLeft') {
        this.prev()
      }
      if (e.key === 'ArrowRight') {
        this.next()
      }
    })
  }

  /**
   * Remove the <img> inside the container of the lightbox
   */
  reset() {
    lightBoxContainer_div.innerHTML = ''
  }

  next() {
    this.index += 1
    /**
     * If we are on the last element, display the first one
     */
    if (this.index > this.mediaList.length - 1) {
      this.index = 0
    }
    this.reset()

    if (this.mediaList[this.index].image) {
      const lightboxImage = new LightboxImage(this.mediaList[this.index]).render()
      lightBoxContainer_div.append(lightboxImage)
    }

    if (this.mediaList[this.index].video) {
      const lightboxVideo = new LightboxVideo(this.mediaList[this.index]).render()
      lightBoxContainer_div.append(lightboxVideo)
    }

    const titleDiv = document.createElement('div')
    titleDiv.classList.add('lightbox__container-title')
    titleDiv.innerHTML = `${this.mediaList[this.index].title}`
    lightBoxContainer_div.append(titleDiv)
  }

  prev() {
    this.index -= 1
    /**
     * If we are on first element, display the last one
     */
    if (this.index < 0) {
      this.index = this.mediaList.length - 1
    }
    this.reset()

    if (this.mediaList[this.index].image) {
      const lightboxImage = new LightboxImage(this.mediaList[this.index]).render()
      lightBoxContainer_div.append(lightboxImage)
    }

    if (this.mediaList[this.index].video) {
      const lightboxVideo = new LightboxVideo(this.mediaList[this.index]).render()
      lightBoxContainer_div.append(lightboxVideo)
    }

    const titleDiv = document.createElement('div')
    titleDiv.classList.add('lightbox__container-title')
    titleDiv.innerHTML = `${this.mediaList[this.index].title}`
    lightBoxContainer_div.append(titleDiv)
  }

  close() {
    lightBox_div.style.display = "none"
    lightBoxContainer_div.innerHTML = ''
  }

  /**
   * Display the Lightbox
   * @param idMedia
   * @returns {Element}
   */
  render(idMedia) {
    this.activeId = idMedia
    lightBox_div.style.display = "block"

    for (let i = 0; i < this.mediaList.length; i++) {

      if (this.activeId === this.mediaList[i].id) {
        this.index = this.mediaList.indexOf(this.mediaList[i])

        if (this.mediaList[i].image) {
          /**
           * Create a new LightboxImage
           * @type {HTMLImageElement}
           */
          const lightboxImage = new LightboxImage(this.mediaList[i]).render()
          lightBoxContainer_div.append(lightboxImage)
        }

        if (this.mediaList[i].video) {
          /**
           * Create a new LightboxVideo
           * @type {HTMLVideoElement}
           */
          const lightboxVideo = new LightboxVideo(this.mediaList[i]).render()
          lightBoxContainer_div.append(lightboxVideo)
        }

        /**
         * Create <div> for the title image
         * @type {HTMLDivElement}
         */
        const titleDiv = document.createElement('div')
        titleDiv.classList.add('lightbox__container-title')
        titleDiv.innerHTML = `${this.mediaList[i].title}`
        lightBoxContainer_div.append(titleDiv)

        return lightBoxContainer_div
      }
    }

  }

}
