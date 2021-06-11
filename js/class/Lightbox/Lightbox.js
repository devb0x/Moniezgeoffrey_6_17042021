import {LightboxFactory} from "./LightboxFactory.js";

const lightBox_parent_div = document.getElementById('lightbox')
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
   * Create a new media
   * @returns {LightboxFactory}
   */
  newMedia() {
    return new LightboxFactory(
      {
        id: this.mediaList[this.index].id,
        photographerId: this.mediaList[this.index].photographerId,
        title: this.mediaList[this.index].title,
        image: this.mediaList[this.index].image,
        video: this.mediaList[this.index].video,
      }
    )
  }

  /**
   * Remove the <img> inside the container of the lightbox
   */
  reset() {
    lightBoxContainer_div.innerHTML = ''
  }

  /**
   * Next media
   */
  next() {
    this.index += 1
    /**
     * If we are on the last element, display the first one
     */
    if (this.index > this.mediaList.length - 1) {
      this.index = 0
    }
    this.reset()

    this.newMedia().render()

    /**
     * set focus
     */
    lightBoxNext_btn.focus()

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

    this.newMedia().render()

    /**
     * set focus
     */
    lightBoxPrev_btn.focus()
  }

  /**
   * Close Lightbox
   */
  close() {
    lightBox_parent_div.style.display = "none"
    lightBoxContainer_div.innerHTML = ''
  }

  /**
   * Display lightbox
   * @param idMedia
   */
  render(idMedia) {
    this.index = idMedia
    this.open()
    this.newMedia().render()
  }

  /**
   * Add style for display
   */
  open() {
    lightBox_parent_div.style.display = "block"
  }

}
