import { photographerPath } from "../page2.js";

const lightBox_div = document.getElementById('lightbox')
const lightBoxContainer_div = document.querySelector('.lightbox__container')
const lightBoxClose_btn = document.querySelector('.lightbox-btn__close')
const lightBoxPrev_btn = document.querySelector('.lightbox-btn__prev')
const lightBoxNext_btn = document.querySelector('.lightbox-btn__next')

export class Lightbox {

  constructor(mediaList) {
    this.mediaList = mediaList
    this.activeId = null
    this.index = null
  }

  /**
   * Remove the <img> inside the container of the lightbox
   */
  reset() {
    lightBoxContainer_div.innerHTML = ''
  }

  next() {

    console.log('next image')
    this.index += 1
    console.log('index after next : ' + this.index)

    /**
     * If we are on the last element, display the first one
     */
    if (this.index > this.mediaList.length -1) {
      this.index = 0
    }

    this.reset()

    const containerImg = document.createElement('img')
    containerImg.classList.add('lightbox__container-img')
    containerImg.src= `./../Sample%20Photos/${photographerPath}/${this.mediaList[this.index].image}`

    lightBoxContainer_div.append(containerImg)

    const titleDiv = document.createElement('div')
    titleDiv.classList.add('lightbox__container-title')
    titleDiv.innerHTML = `${this.mediaList[this.index].title}`

    lightBoxContainer_div.append(titleDiv)
  }

  prev() {
    console.log('prev image')
    this.index -= 1
    console.log('index after prev : ' + this.index)

    /**
     * If we are on first element, display the last one
     */
    if (this.index < 0) {
      this.index = this.mediaList.length -1
    }

    this.reset()

    const containerImg = document.createElement('img')
    containerImg.classList.add('lightbox__container-img')
    containerImg.src= `./../Sample%20Photos/${photographerPath}/${this.mediaList[this.index].image}`

    lightBoxContainer_div.append(containerImg)

    const titleDiv = document.createElement('div')
    titleDiv.classList.add('lightbox__container-title')
    titleDiv.innerHTML = `${this.mediaList[this.index].title}`

    lightBoxContainer_div.append(titleDiv)
  }


  close() {
    lightBox_div.style.display = "none"
    lightBoxContainer_div.innerHTML = ''
  }

  render(idMedia) {
    this.activeId = idMedia
    lightBox_div.style.display = "block"

    console.log('this.activeId from Lightbox : ' + this.activeId)
    console.log(this.mediaList)

    for (let i = 0; i < this.mediaList.length; i++) {

      if (this.activeId === this.mediaList[i].id) {
        this.index = this.mediaList.indexOf(this.mediaList[i])

        console.error(this.mediaList.indexOf(this.mediaList[i])) // ok

        if (this.mediaList[i].image) {
          console.log('we\'re gonna display an image')
          /**
           * Create <img> inside the lightbox container
           * @type {HTMLImageElement}
           */
          const containerImg = document.createElement('img')
          containerImg.classList.add('lightbox__container-img')
          containerImg.src= `./../Sample%20Photos/${photographerPath}/${this.mediaList[i].image}`
          lightBoxContainer_div.append(containerImg)
        }

        if (this.mediaList[i].video) {
          console.log('we\'re gonna display a beautiful video')
          /**
           * Create video
           */
          const containerVideo = document.createElement('video')
          containerVideo.classList.add('lightbox__container-img')
          containerVideo.src = `./../Sample%20Photos/${photographerPath}/${this.mediaList[i].video}`
          containerVideo.controls = true
          lightBoxContainer_div.append(containerVideo)
        }


        /**
         * Create <div> for the title image
         * @type {HTMLDivElement}
         */
        const titleDiv = document.createElement('div')
        titleDiv.classList.add('lightbox__container-title')
        titleDiv.innerHTML = `${this.mediaList[i].title}`
        lightBoxContainer_div.append(titleDiv)
      }
    }

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
  }

}



/**
 * Close button
 * @type {HTMLButtonElement}
 */
// const close_btn = document.createElement('button')
// close_btn.classList.add('lightbox__close')
// close_btn.innerText = 'close'
// lightBox_div.append(close_btn)
// close_btn.addEventListener('click', (e) => {
//   this.close()
// })


/**
 * Next button
 * @type {HTMLButtonElement}
 */
// const next_btn = document.createElement('button')
// next_btn.classList.add('lightbox__next')
// next_btn.innerText = 'next'
// lightBox_div.append(next_btn)
// next_btn.addEventListener('click', (e) => {
//   this.next()
// })
//
/**
 * Previous button
 * @type {HTMLButtonElement}
 */
// const prev_btn = document.createElement('button')
// prev_btn.classList.add('lightbox__prev')
// prev_btn.innerText = 'prev'
// lightBox_div.append(prev_btn)
// prev_btn.addEventListener('click', (e) => {
//   this.prev()
// })
