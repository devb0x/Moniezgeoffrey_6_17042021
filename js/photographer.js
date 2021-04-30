const params = new URLSearchParams(document.location.search);
const photographerId = Number(params.get("id"));

let photographerPath = '';
if (photographerId === 243) {
  photographerPath = 'Mimi';
}
if (photographerId === 930) {
  photographerPath = 'Ellie%20Rose';
}
if (photographerId === 82) {
  photographerPath = 'Tracy';
}
if (photographerId === 527) {
  photographerPath = 'Nabeel';
}
if (photographerId === 925) {
  photographerPath = 'Rhode';
}
if (photographerId === 195) {
  photographerPath = 'Marcel';
}

/**
 * DOM selector
 * @type {Element}
 */
const photographer_section = document.querySelector('.photographer');
const photographerGallery_div = document.querySelector('.photographer-gallery');

/**
 * We push the photograph from the id inside the array
 * @type {*[]}
 */
let data = [];
let photograph = [];

function getPhotographerById() {

  return fetch('../file.json')
    .then(response => {
      if (!response.ok) {
        throw new Error("HTTP error" + response.status);
      }
      return response.json();
    })
    .then(json => {
      data.push(json);

      for (let i = 0; i < data[0].photographers.length; i++) {
        if (photographerId === data[0].photographers[i].id) {
          photograph.push(new Photographer(
            data[0].photographers[i].name,
            data[0].photographers[i].id,
            data[0].photographers[i].city,
            data[0].photographers[i].country,
            data[0].photographers[i].tags,
            data[0].photographers[i].tagline,
            data[0].photographers[i].price,
            data[0].photographers[i].portrait,
          ));
        }
      }
    })
}

/**
 * We generate DOM for photographer
 */
function renderPhotographer() {

  const photographerEl = document.createElement('div');
  photographerEl.classList.add('photographer-item');

  photographerEl.innerHTML = `
    <header class="photographer-item__header">
      <img src="./../Sample%20Photos/Photographers%20ID%20Photos/${photograph[0].portrait}" alt="photographer name">
      <h1>
        ${photograph[0].name}
      </h1>
    </header>

    <div class="photographer-item__info">
      <p class="photographer-item__info-location">
        ${photograph[0].city}, ${photograph[0].country}
      </p>
      <p class="photographer-item__info-tagline">
        ${photograph[0].tagline}
      </p>
  `;

  const filter = document.createElement('p');
  filter.classList.add('photographer-item__info-filters');

  /**
   * filters buttons inside <span>
   * @type {HTMLParagraphElement}
   */
  const parent = photographerEl.querySelector('.photographer-item__info');
  const tags_p = document.createElement('p');

  for (let i = 0; i < photograph[0].tags.length; i++) {
    const span = document.createElement('span');
    const btn = document.createElement('button');
    btn.classList.add('filter-btn');
    tags_p.appendChild(span);
    span.appendChild(btn);
    btn.textContent = '#' + photograph[0].tags[i];
    filter.appendChild(span);
    parent.appendChild(span);
  }

  photographer_section.appendChild(photographerEl);
}


getPhotographerById().then(() => {
  renderPhotographer()
})

/**
 * Class representing an Image
 */
class Image {

  /**
   * Create an Image
   * @param id
   * @param photographerId
   * @param title
   * @param image
   * @param tags
   * @param likes
   * @param date
   * @param price
   */
  constructor(id, photographerId, title, image, tags, likes, date, price) {
    this.id = id;
    this.photographerId = photographerId;
    this.title = title;
    this.image = image;
    this.tags = tags;
    this.likes = likes;
    this.date = date;
    this.price = price;
  }

  render() {

    const mediaImageEl = document.createElement('div');
    mediaImageEl.classList.add('photographer-gallery__item');
    mediaImageEl.innerHTML = `
    
    <a href="" class=".photographer-gallery__item-link">
    <picture>
      <img src="./../Sample%20Photos/${photographerPath}/${this.image}" alt="${this.image}" class="photographer-gallery__item-img">
    </picture>
    </a>
    
    <span class="photographer-gallery__item-info">
      <h2 class="photographer-gallery__item-info-title">${this.title}</h2>
      <div class="photographer-gallery__item-info-price">${this.price} &euro;</div>
      <div class="photographer-gallery__item-info-likes">${this.likes}<i class="fas fa-heart"></i></div>
    </span>
  `;

    return mediaImageEl;
  }

}

/**
 * Class representing a Video
 */
class Video {

  /**
   * Create a Video
   * @param id
   * @param photographerId
   * @param title
   * @param video
   * @param tags
   * @param likes
   * @param date
   * @param price
   */
  constructor(id, photographerId, title, video, tags, likes, date, price) {
    this.id = id;
    this.photographerId = photographerId;
    this.title = title;
    this.video = video;
    this.tags = tags;
    this.likes = likes;
    this.date = date;
    this.price = price;
  }

  render() {

    const mediaVideoEl = document.createElement('div');
    mediaVideoEl.classList.add('photographer-gallery__item');
    mediaVideoEl.innerHTML = `
    
    <a href="" class=".photographer-gallery__item-link">
    <video class="photographer-gallery__item-vid" controls>
      <source src="./../Sample%20Photos/${photographerPath}/${this.video}" type="video/mp4">
    </video>
    </a>
    
    <span class="photographer-gallery__item-info">
      <h2 class="photographer-gallery__item-info-title">${this.title}</h2>
      <div class="photographer-gallery__item-info-price">${this.price} &euro;</div>
      <div class="photographer-gallery__item-info-likes">${this.likes}<i class="fas fa-heart"></i></div>
    </span>
    `;

    return mediaVideoEl
  }

}

/**
 * Class representing the media list
 */
class MediaList {

  constructor() {
    this.media = [];
  }

  getMedia = () => {
    return fetch('../file.json')
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

const mediaList = new MediaList();
mediaList.getMedia().then(() => mediaList.renderMedia());
