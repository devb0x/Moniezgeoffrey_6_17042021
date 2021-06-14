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
    this.focusableEl = [
      lightBoxClose_btn,
      lightBoxPrev_btn,
      lightBoxNext_btn,
    ]

    // this.getKeyboardFocusableElements()
    // console.log(this.getKeyboardFocusableElements())
    // console.log(this.focusableEl[1])

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

    this.navigation()
    // document.addEventListener('keydown', () => {
    //   e.preventDefault()
    // })
    // /**
    //  * Keyboard Event for navigation / close
    //  * @param e
    //  */
    // document.addEventListener('keydown', (e) => {
    //   if (e.key === 'Escape') {
    //     this.close()
    //   }
    //   if (e.key === 'ArrowLeft') {
    //     this.prev()
    //   }
    //   if (e.key === 'ArrowRight') {
    //     this.next()
    //   }
    //   if (!e.shiftKey && e.key === 'Tab') {
    //     e.preventDefault()
    //     console.warn('tab pressed')
    //     console.log(document.activeElement)
    //
    //     switch (document.activeElement) {
    //       case lightBoxClose_btn: // close to prev
    //         console.log('tab 1')
    //         lightBoxPrev_btn.focus()
    //         break
    //
    //       case lightBoxPrev_btn: // prev to next
    //         console.log('tab 2')
    //         lightBoxNext_btn.focus()
    //         break
    //
    //       case lightBoxNext_btn: // next to close
    //         console.log('tab 3')
    //         lightBoxClose_btn.focus()
    //         break
    //     }
    //   }
    //
    //   if (e.shiftKey && e.key === 'Tab') {
    //     e.preventDefault()
    //     switch (document.activeElement) {
    //       case lightBoxClose_btn: // close to next
    //         console.log('shit tab 1')
    //         lightBoxNext_btn.focus()
    //         break
    //
    //       case lightBoxPrev_btn: // prev to close
    //         console.log('shit tab 2')
    //         lightBoxClose_btn.focus()
    //         break
    //
    //       case lightBoxNext_btn: // next to prev
    //         console.log('shit tab 3')
    //         lightBoxPrev_btn.focus()
    //         break
    //     }
    //   }
    // })
  //  TODO remove eventListener on close()
  }

  navigation() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.close()
      }
      if (e.key === 'ArrowLeft') {
        this.prev()
      }
      if (e.key === 'ArrowRight') {
        this.next()
      }
      if (!e.shiftKey && e.key === 'Tab') {
        e.preventDefault()
        console.warn('tab pressed')
        console.log(document.activeElement)

        switch (document.activeElement) {
          case lightBoxClose_btn: // close to prev
            console.log('tab 1')
            lightBoxPrev_btn.focus()
            break

          case lightBoxPrev_btn: // prev to next
            console.log('tab 2')
            lightBoxNext_btn.focus()
            break

          case lightBoxNext_btn: // next to close
            console.log('tab 3')
            lightBoxClose_btn.focus()
            break
        }
      }

      if (e.shiftKey && e.key === 'Tab') {
        e.preventDefault()
        switch (document.activeElement) {
          case lightBoxClose_btn: // close to next
            console.log('shit tab 1')
            lightBoxNext_btn.focus()
            break

          case lightBoxPrev_btn: // prev to close
            console.log('shit tab 2')
            lightBoxClose_btn.focus()
            break

          case lightBoxNext_btn: // next to prev
            console.log('shit tab 3')
            lightBoxPrev_btn.focus()
            break
        }
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
    document.removeEventListener('any', this.navigation)
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

    lightBoxNext_btn.focus()
  }

  /**
   * Add style for display
   */
  open() {
    lightBox_parent_div.style.display = "block"
  }

}
