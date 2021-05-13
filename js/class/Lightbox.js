import { photographerPath } from "../page2.js";

const lightBox_div = document.getElementById('lightbox')

export class Lightbox {

  constructor(mediaList) {
    this.mediaList = mediaList
    this.activeId = null
  }

  next() {
    console.log('next image')
  }

  prev() {
    console.log('prev image')
  }

  close() {
    lightBox_div.style.display = "none"
    lightBox_div.innerHTML = ''
  }

  render(idMedia) {
    this.activeId = idMedia
    lightBox_div.style.display = "block"

    console.log('this.activeId from Lightbox : ' + this.activeId)

    console.log(this.mediaList)

    /**
     * Close button
     * @type {HTMLButtonElement}
     */
    const close_btn = document.createElement('button')
    close_btn.classList.add('lightbox__close')
    close_btn.innerText = 'close'
    lightBox_div.append(close_btn)
    close_btn.addEventListener('click', (e) => {
      this.close()
    })

    /**
     * Next button
     * @type {HTMLButtonElement}
     */
    const next_btn = document.createElement('button')
    next_btn.classList.add('lightbox__next')
    next_btn.innerText = 'next'
    lightBox_div.append(next_btn)
    next_btn.addEventListener('click', (e) => {
      this.next()
    })

    /**
     * Previous button
     * @type {HTMLButtonElement}
     */
    const prev_btn = document.createElement('button')
    prev_btn.classList.add('lightbox__prev')
    prev_btn.innerText = 'prev'
    lightBox_div.append(prev_btn)
    prev_btn.addEventListener('click', (e) => {
      this.prev()
    })

    /**
     * Container for img
     * @type {HTMLDivElement}
     */
    const lightBox__container = document.createElement('div')
    lightBox__container.classList.add('lightbox__container')
    lightBox_div.appendChild(lightBox__container)

    /**
     * <img>
     * @type {HTMLImageElement}
     */
    const containerImg = document.createElement('img')
    containerImg.classList.add('lightbox__container-img')

    for (let i = 0; i < this.mediaList.length; i++) {
      if (this.activeId === this.mediaList[i].id) {
        /**
         * <img>
         * @type {HTMLImageElement}
         */
        const containerImg = document.createElement('img')
        containerImg.classList.add('lightbox__container-img')
        containerImg.src= `./../Sample%20Photos/${photographerPath}/${this.mediaList[i].image}`
        lightBox__container.append(containerImg)
      }
    }

  }


}
