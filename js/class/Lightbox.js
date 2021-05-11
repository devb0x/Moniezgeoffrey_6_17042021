import { photographerPath } from "../page2.js";

const lightBox_div = document.getElementById('lightbox')

export class Lightbox {

  constructor(mediaList) {
    this.mediaList = mediaList
    // this.ActiveId = null
    console.log(this.mediaList)
    this.getMedia()
    this.render()
  }

  getMedia() {
    return this.mediaList
  }

  next() {

  }

  prev() {

  }

  close() {
    lightBox_div.style.display = "none"
    // lightBox_div.innerHTML = ''
  }

  render(id) {
    this.ActiveId = id
    // console.log(this.ActiveId)
    lightBox_div.style.display = "block"

    // console.log(this.mediaList[0])

    /**
     * Close button
     * @type {HTMLButtonElement}
     */
    const close_btn = document.createElement('button')
    close_btn.classList.add('lightbox__close')
    close_btn.innerText = 'close'
    lightBox_div.append(close_btn)
    close_btn.addEventListener('click', () => {
      close()
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
    // containerImg.src= `./../Sample%20Photos/${photographerPath}/${image}`
    containerImg.src= `./../Sample%20Photos/${photographerPath}/${this.mediaList.image}`
    lightBox__container.appendChild(containerImg)

    // console.log(this.mediaList[0].image)
  }


}
