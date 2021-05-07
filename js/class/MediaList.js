import { Image } from "./Image.js";
import { Video } from "./Video.js";
import {photographerPath} from "../page2.js";

const photographerGallery_div = document.querySelector('.photographer-gallery');
// const lightbox = document.getElementById('lightbox');
const lightbox = document.getElementById('lightbox');


const params = new URLSearchParams(document.location.search);
const photographerId = Number(params.get("id"));


export class MediaList {

  constructor() {
    this.media = [];
  }

  getMedia() {
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
    this.media.forEach(el => {
      if (el.image) {
        const mediaItem = new Image(
          el.id,
          el.photographerId,
          el.title,
          el.image,
          el.tags,
          el.likes,
          el.date,
          el.price
        );
        const imageEl = mediaItem.render();
        photographerGallery_div.append(imageEl);

        imageEl.addEventListener('click', () => {

          document.body.classList.add('stop-scrolling');
          lightbox.style.display = "block";
          lightbox.innerHTML = `
            <button
              class="lightbox-btn btn-close"
              onclick="lightbox.style.display='none';
              document.body.classList.remove('stop-scrolling');">
              &#x2715;
            </button>
            <button class="lightbox-btn left-arrow">^</button>
            <button class="lightbox-btn right-arrow">^</button>
            <img
              src="./../Sample%20Photos/${photographerPath}/${el.image}"
              alt="${el.image}"
              class="photographer-gallery__item-img">
          `;

        });
      }

      if (el.video) {
        const mediaItem = new Video(
          el.id,
          el.photographerId,
          el.title,
          el.video,
          el.tags,
          el.likes,
          el.date,
          el.price
        );
        const videoEl = mediaItem.render();
        photographerGallery_div.append(videoEl);
      }

    })
  }

}
