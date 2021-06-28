import { LightboxFactory } from "./LightboxFactory.js"

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

    this.keyboardNavigation = this.keyboardNavigation.bind(this)
    this.mouseEvent = this.mouseEvent.bind(this)

    document.addEventListener('keydown', this.keyboardNavigation)
    document.addEventListener('click', this.mouseEvent)
  }


  /**
   * Listen to keydown for navigation and close inside the lightbox
   * @param e
   */
  // TODO nvda bloque navigation fleches gauche et droite
  keyboardNavigation(e) {
    const media = document.querySelector('.lightbox__container-media')

    if (e.key === 'Escape') {
      this.close()
    }
    if (e.key === 'ArrowLeft') {
      this.prev()
    }
    if (e.key === 'ArrowRight') {
      this.next()
    }

    /**
     * set focus to next btn
     * when we lose focus on video
     */
    if (media.classList.contains('media-video')) {
      media.addEventListener('focusout', (e) => {
        e.preventDefault()
        lightBoxNext_btn.focus()
      })
    }

    /**
     * tab
     */
    if (!e.shiftKey && e.key === 'Tab') {
      switch (document.activeElement) {
        case lightBoxClose_btn: // close to prev
          e.preventDefault()
          lightBoxPrev_btn.focus()
          break

        case lightBoxPrev_btn: // prev to media or next
          e.preventDefault()
          lightBoxNext_btn.focus()
          media.focus()
          break

        case lightBoxNext_btn: // next to close
          e.preventDefault()
          lightBoxClose_btn.focus()
          break
      }
    }

    /**
     * shift + tab
     */
    if (e.shiftKey && e.key === 'Tab') {
      switch (document.activeElement) {
        case lightBoxClose_btn: // close to next
          e.preventDefault()
          lightBoxNext_btn.focus()
          break

        case lightBoxPrev_btn: // prev to close
          e.preventDefault()
          lightBoxClose_btn.focus()
          break

        case lightBoxNext_btn: // next to media or prev
          e.preventDefault()
          lightBoxPrev_btn.focus()
          media.focus()
          break
      }
    }
  }

  /**
   * set focus on next btn if we clic on the modal
   * @param e
   */
  mouseEvent(e) {
    if (e.button === 0) {
      lightBoxNext_btn.focus()
    }
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

  /**
   * Prev media
   */
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
   * Close Lightbox & remove EventListener
   */
  close() {
    document.removeEventListener('keydown', this.keyboardNavigation)
    document.removeEventListener('click', this.mouseEvent)
    this.reset()
    lightBox_parent_div.style.display = "none"

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
