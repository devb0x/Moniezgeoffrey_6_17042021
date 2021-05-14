import { photographerPath } from "../page2.js";

const lightBox_div = document.getElementById('lightbox')

export class Lightbox {

  constructor(mediaList) {
    this.mediaList = mediaList
    this.activeId = null
    this.index = null
  }

  next() {
    console.log('next image')
    this.index += 1
    console.log('index after next : ' + this.index)

    const lightbox_container_div = document.createElement('div')
    lightbox_container_div.classList.add('lightbox__container')

    const containerImg = document.createElement('img')
    containerImg.classList.add('lightbox__container-img')
    containerImg.src= `./../Sample%20Photos/${photographerPath}/${this.mediaList[this.index].image}`
    lightbox_container_div.append(containerImg)
    lightBox_div.append(lightbox_container_div)

    // containerImg.src= `./../Sample%20Photos/${photographerPath}/${this.mediaList[this.index].image}`

  }

  prev() {
    console.log('prev image')
    this.index -= 1
    console.log('index after prev : ' + this.index)

    // lightBox_div.innerHTML = ''

    const lightbox_container_div = document.createElement('div')
    lightbox_container_div.classList.add('lightbox__container')

    const containerImg = document.createElement('img')
    containerImg.classList.add('lightbox__container-img')
    containerImg.src= `./../Sample%20Photos/${photographerPath}/${this.mediaList[this.index].image}`
    lightbox_container_div.append(containerImg)
    lightBox_div.append(lightbox_container_div)
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

    for (let i = 0; i < this.mediaList.length; i++) {

      if (this.activeId === this.mediaList[i].id) {
        this.index = this.mediaList.indexOf(this.mediaList[i])

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

        // /**
        //  * Next button
        //  * @type {HTMLButtonElement}
        //  */
        // const next_btn = document.createElement('button')
        // next_btn.classList.add('lightbox__next')
        // next_btn.innerText = 'next'
        // lightBox_div.append(next_btn)
        // next_btn.addEventListener('click', (e) => {
        //   this.next()
        // })
        //
        // /**
        //  * Previous button
        //  * @type {HTMLButtonElement}
        //  */
        // const prev_btn = document.createElement('button')
        // prev_btn.classList.add('lightbox__prev')
        // prev_btn.innerText = 'prev'
        // lightBox_div.append(prev_btn)
        // prev_btn.addEventListener('click', (e) => {
        //   this.prev()
        // })

        /**
         * Container for img
         * @type {HTMLDivElement}
         */
        const lightBox__container = document.createElement('div')
        lightBox__container.classList.add('lightbox__container')
        lightBox_div.appendChild(lightBox__container)


    // for (let i = 0; i < this.mediaList.length; i++) {
    //
    //   // this.index = this.mediaList.indexOf(this.mediaList[i])
    //
    //
    //   if (this.activeId === this.mediaList[i].id) {
    //   this.index = this.mediaList.indexOf(this.mediaList[i])

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
          lightBox__container.remove()
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
          lightBox__container.remove()
        })

        console.error(this.mediaList.indexOf(this.mediaList[i])) // ok

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
