import { LightboxImage } from "./LightboxImage.js";
import { LightboxVideo } from "./LightboxVideo.js";
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
    this.activeId = null
    this.index = mediaList.index

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
    console.log(this.mediaList)
    console.log(this.index)
    this.index += 1
    /**
     * If we are on the last element, display the first one
     */
    if (this.index > this.mediaList.length - 1) {
      this.index = 0
    }
    this.reset()
    //
    if (this.mediaList[this.index].image) {
      const lightboxImage = new LightboxImage(this.mediaList[this.index])
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

    /**
     * set focus
     */
    lightBoxNext_btn.focus()

  }

  prev() {
    // console.error(arrayTest)

    this.index -= 1
    /**
     * If we are on first element, display the last one
     */
    if (this.index < 0) {
      this.index = this.mediaList.length - 1
    }
    this.reset()

    if (this.mediaList[this.index].image) {
      console.log('image')
      // const lightboxImage = new LightboxImage(this.mediaList[this.index]).render()
      console.log(this.mediaList[this.index])
      const lightboxImage = new LightboxImage.render(this.mediaList[this.index])
      lightBoxContainer_div.append(lightboxImage)
    }

    if (this.mediaList[this.index].video) {
      console.log('video')
      const lightboxVideo = new LightboxVideo(this.mediaList[this.index]).render()
      lightBoxContainer_div.append(lightboxVideo)
    }



    // const lightboxMedia = new LightboxFactory(
    //   {
    //     id: this.mediaList.id,
    //     photographerId: this.mediaList.photographerId,
    //     title: this.mediaList.title,
    //     image: this.mediaList.image,
    //     video: this.mediaList.video,
    //     index: this.index,
    //   }
    // )
    // console.log(lightboxMedia)

    const titleDiv = document.createElement('div')
    titleDiv.classList.add('lightbox__container-title')
    titleDiv.innerHTML = `${this.mediaList[this.index].title}`
    lightBoxContainer_div.append(titleDiv)

    /**
     * set focus
     */
    lightBoxPrev_btn.focus()
  }

  close() {
    lightBox_parent_div.style.display = "none"
    lightBoxContainer_div.innerHTML = ''
  }


  render(newLightboxMedia) {
    console.log('start render from Lightbox')
    console.log(newLightboxMedia)
    this.index = newLightboxMedia.index
    newLightboxMedia.render()
    // this.activeId = el.id

    // lightBox_parent_div.style.display = "block"

    // if (el.image) {
    //   console.log(el)
    // }
    // if (el.image) {
    //   /**
    //    * Create a new LightboxImage
    //    * @type {HTMLImageElement}
    //    */
    //   const lightboxImage = new LightboxImage.render(el)
    //   lightBoxContainer_div.append(lightboxImage)
    // }

    // if (el.video) {
    //   /**
    //    * Create a new LightboxImage
    //    * @type {HTMLImageElement}
    //    */
    //   const lightboxVideo = new LightboxVideo.render()
    //   lightBoxContainer_div.append(lightboxVideo)
    // }

    // for (let i = 0; i < this.mediaList.length; i++) {

      // if (this.activeId === this.mediaList[i].id) {
      //   this.index = this.mediaList.indexOf(this.mediaList[i])

        // if (this.image) {
        //   /**
        //    * Create a new LightboxImage
        //    * @type {HTMLImageElement}
        //    */
        //   const lightboxImage = new LightboxImage(this.mediaList[i]).render()
        //   lightBoxContainer_div.append(lightboxImage)
        // }

        // if (this.mediaList[i].video) {
        //   /**
        //    * Create a new LightboxVideo
        //    * @type {HTMLVideoElement}
        //    */
        //   const lightboxVideo = new LightboxVideo(this.mediaList[i]).render()
        //   lightBoxContainer_div.append(lightboxVideo)
        // }

        /**
         * Create <div> for the title image
         * @type {HTMLDivElement}
         */
    //     const titleDiv = document.createElement('div')
    //     titleDiv.classList.add('lightbox__container-title')
    //     titleDiv.innerHTML = `${el.title}`
    //     lightBoxContainer_div.append(titleDiv)
    //
    //     return lightBoxContainer_div
    //   }
    // }

  }

  static open() {
    lightBox_parent_div.style.display = "block"
  }

}
