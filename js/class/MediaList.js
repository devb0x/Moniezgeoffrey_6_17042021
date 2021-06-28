import { MediaFactory } from "./Medias/MediaFactory.js"
import { Lightbox } from "./Lightbox/Lightbox.js"

/**
 * const
 * getting the id of the photographer from the url
 * @type {Element}
 */
const photographerGallery_div = document.querySelector('.photographer-gallery')

const params = new URLSearchParams(document.location.search)
const photographerId = Number(params.get("id"))

/**
 * Class representing the MediaList
 */
export class MediaList {

  /**
   * we push data inside media array
   * we start with likes values to 0
   */
  constructor() {
    this.media = []
    this.totalLikes = 0
  }

  /**
   * fetch data from json
   * @returns {Promise<any>}
   */
  getMedia() {
    return fetch('https://raw.githubusercontent.com/devb0x/Moniezgeoffrey_6_17042021/master/file.json')
      .then(response => {
        if (!response.ok) {
          throw new Error("HTTP error" + response.status)
        }
        return response.json();
      })
      .then(json => {
        for (let i = 0; i < json.media.length; i++) {
          if (json.media[i].photographerId === photographerId) {
            this.addMedia(json.media[i])
          }
        }
      })
  }

  /**
   * function push inside media array
   * @param mediaList
   */
  addMedia(mediaList) {
    this.media.push(mediaList)
  }

  /**
   * calcul the total of likes for the photographer
   * @returns {number}
   */
  likesSum() {
    this.media.forEach(el =>
      this.totalLikes += el.likes)
      return this.totalLikes
  }

  /**
   * display media
   */
  renderMedia() {

    /**
     * loop inside media array then create the class with MediaFactory
     */
    this.media.forEach((el, index) => {

      const newMedia = new MediaFactory(
        {
          id: el.id,
          photographerId: el.photographerId,
          title: el.title,
          tags: el.tags,
          likes: el.likes,
          date: el.date,
          price: el.price,
          image: el.image,
          video: el.video
        }
      )
      const mediaHTML = newMedia.render()
      photographerGallery_div.append(mediaHTML)

      /**
       * event listener for lightbox opening
       */
      mediaHTML.addEventListener('click', () => {
        const myLightbox = new Lightbox(this.media)
        myLightbox.render(index)
      })

    })

    /**
     * render the total of likes on the page
     */
    this.likesSum()
  }

}
