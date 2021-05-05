import { Image } from "./Image.js";
import { Video } from "./Video.js";

const photographerGallery_div = document.querySelector('.photographer-gallery');

const params = new URLSearchParams(document.location.search);
const photographerId = Number(params.get("id"));


export class MediaList {

  constructor() {
    this.media = [];
  }

  getMedia = () => {
    return fetch('https://raw.githubusercontent.com/devb0x/Moniezgeoffrey_6_17042021/master/file.json')
      .then(response => {
        if (!response.ok) {
          throw new Error("HTTP error" + response.status);
        }
        return response.json();
      })
      .then(json => {
        for (let i = 0; i < json.media.length; i++) {
          if (json.media[i].photographerId === photographerId) {
            this.addMedia(json.media[i]);
          }
        }
      });
  }

  addMedia(mediaList) {
    this.media.push(mediaList);
  }

  renderMedia() {
    for (let i = 0; i < this.media.length; i++) {
      if (this.media[i].image) {
        const mediaItem = new Image (
          this.media[i].id,
          this.media[i].photographerId,
          this.media[i].title,
          this.media[i].image,
          this.media[i].tags,
          this.media[i].likes,
          this.media[i].date,
          this.media[i].price
        );

        const imageEl = mediaItem.render();
        photographerGallery_div.append(imageEl);
      }
      if (this.media[i].video) {
        const mediaItem = new Video (
          this.media[i].id,
          this.media[i].photographerId,
          this.media[i].title,
          this.media[i].video,
          this.media[i].tags,
          this.media[i].likes,
          this.media[i].date,
          this.media[i].price
        );

        const videoEl = mediaItem.render();
        photographerGallery_div.append(videoEl);
      }
    }
  }

}
