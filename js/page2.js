import { Photographer } from "./class/Photographer.js";
import { MediaList } from "./class/MediaList.js";

const params = new URLSearchParams(document.location.search);
const photographerId = Number(params.get("id"));

export let photographerPath = '';
switch (photographerId) {
  case 243:
    photographerPath = 'Mimi';
    break;
  case 930:
    photographerPath = 'Ellie%20Rose';
    break;
  case 82:
    photographerPath = 'Tracy';
    break;
  case 527:
    photographerPath = 'Nabeel';
    break;
  case 925:
    photographerPath = 'Rhode';
    break;
  case 195:
    photographerPath = 'Marcel';
    break;
}

/**
 * DOM selector
 * @type {Element}
 */
const photographer_section = document.querySelector('.photographer');

/**
 * We push the photograph from the id inside the array
 * @type {*[]}
 */
let data = [];
let photograph = [];

function getPhotographerById() {

  return fetch('https://raw.githubusercontent.com/devb0x/Moniezgeoffrey_6_17042021/master/file.json')
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

  // TODO use forEach
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
 * Displaying list of media from photographer Id
 * @type {MediaList}
 */
const mediaList = new MediaList();
mediaList.getMedia().then(() => mediaList.renderMedia());
