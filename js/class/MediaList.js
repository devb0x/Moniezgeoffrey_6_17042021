import {Image} from "./Image.js"
import {Video} from "./Video.js"
import {Lightbox} from "./Lightbox.js"
import {MediaFactory} from "./MediaFactory.js";

const photographerGallery_div = document.querySelector('.photographer-gallery')

const params = new URLSearchParams(document.location.search)
const photographerId = Number(params.get("id"))

export class MediaList {

  constructor() {
    this.media = []
    this.totalLikes = 0
  }

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
      .then(this.likesSum())
  }

  addMedia(mediaList) {
    this.media.push(mediaList)
  }

  likesSum() {
    this.media.forEach(el =>
      this.totalLikes += el.likes)
    return this.totalLikes
  }

  renderMedia() {

    this.media.forEach(el => {

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
    })

    this.likesSum()
    // const myLightbox = new Lightbox(this.media)

  }

}
