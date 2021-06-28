import { Photographer } from "./class/Photographer.js"
import { MediaList } from "./class/MediaList.js"
import { ContactModal } from "./class/ContactModal.js";

/**
 * const for url
 * @type {URLSearchParams}
 */
const params = new URLSearchParams(document.location.search)
/**
 * const for id
 * @type {number}
 */
const photographerId = Number(params.get('id'))
/**
 * DOM Element
 * @type {Element}
 */
const photographer_section = document.querySelector('.photographer');
const order_btn = document.getElementById('order_btn')
const list = document.getElementById('order_list')
const filterPopularity = document.getElementById('order_popularity')
const filterDate = document.getElementById('order_date')
const filterTitle = document.getElementById('order_title')

/**
 * Set the photographPath from the id
 * @type {string}
 */
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
      data[0].photographers.forEach(el => {
        if (photographerId === el.id) {
          photograph.push(new Photographer(
            el.name,
            el.id,
            el.city,
            el.country,
            el.tags,
            el.tagline,
            el.price,
            el.portrait,
          ))
        }
      })
    })
}

/**
 * We generate DOM for photographer
 */
function renderPhotographer() {
  const photographerEl = document.createElement('div')
  photographerEl.classList.add('photographer-item')

  /**
   * header photographer
   * @type {HTMLElement}
   */
  const header = document.createElement('header')
  header.classList.add('photographer-item__header')
  /**
   * profil img
   * @type {HTMLImageElement}
   */
  const headerImg = document.createElement('img')
  headerImg.src = `./../Sample%20Photos/Photographers%20ID%20Photos/${photograph[0].portrait}`
  headerImg.alt = `${photograph[0].name}`
  header.appendChild(headerImg)

  /**
   * header div
   * @type {HTMLDivElement}
   */
  const headerDiv = document.createElement('div')
  headerDiv.classList.add('photographer-item__header-contact')
  /**
   * header title h1
   * @type {HTMLHeadingElement}
   */
  const headerTitle = document.createElement('h1')
  headerTitle.innerText = `${photograph[0].name}`
  header.appendChild(headerTitle)

  /**
   * header button contact me
   * @type {HTMLButtonElement}
   */
  const headerBtn = document.createElement('button')
  headerBtn.id = 'contactBtn'
  headerBtn.classList.add('photographer-item__header-contact-btn')
  headerBtn.innerText = 'Contactez-moi'

  /**
   * event listener
   * create ContactModal
   */
  headerBtn.addEventListener('click', () => {
    new ContactModal(photograph[0].name)
  })
  header.appendChild(headerBtn)

  /**
   * div photographer for displaying info
   * @type {HTMLDivElement}
   */
  const infoDiv = document.createElement('div')
  infoDiv.classList.add('photographer-item__info')
  const infoLoc = document.createElement('p')
  infoLoc.classList.add('photographer-item__info-location')
  infoLoc.innerText = `${photograph[0].city}, ${photograph[0].country}`
  infoDiv.appendChild(infoLoc)

  const infoTag = document.createElement('p')
  infoTag.classList.add('photographer-item__info-tagline')
  infoTag.innerText = `${photograph[0].tagline}`
  infoDiv.appendChild(infoTag)

  /**
   * div bottom page for #likes & price/day
   * @type {HTMLDivElement}
   */
  const infoRate = document.createElement('div')
  infoRate.classList.add('photographer-item__info-rate')
  const likesSpan = document.createElement('span')
  likesSpan.id = 'likes'
  likesSpan.innerHTML = `${mediaList.totalLikes} <i class="fas fa-heart"></i>`
  infoRate.appendChild(likesSpan)
  const priceSpan = document.createElement('span')
  priceSpan.innerText = `${photograph[0].price}` + '\u20AC / jour'
  infoRate.appendChild(priceSpan)
  infoDiv.appendChild(infoRate)
  photographerEl.appendChild(header)
  photographerEl.appendChild(infoDiv)

  /**
   * filters buttons inside <span>
   * @type {HTMLParagraphElement}
   */
  const filter = document.createElement('p');
  filter.classList.add('photographer-item__info-filters');

  const parent = photographerEl.querySelector('.photographer-item__info');
  const tags_p = document.createElement('p');

  photograph[0].tags.forEach(el => {
    const span = document.createElement('span');
    const btn = document.createElement('a');
    btn.classList.add('filter-btn');
    tags_p.appendChild(span);
    span.appendChild(btn);
    btn.textContent = '#' + el;
    /**
     * Filter redirect to homepage with correct filter
     */
    btn.href = `../?tag=${el}`
    filter.appendChild(span);
    parent.appendChild(span);
  });

  photographer_section.appendChild(photographerEl);
}

/**
 * clear the DOM when we change the filter sort
 * then display media
 */
function renderFiltered() {
  document.querySelectorAll(".photographer-gallery__item").forEach(e => e.parentNode.removeChild(e))
  mediaList.renderMedia()
}

/**
 * start filter
 */
order_btn.addEventListener('click', () => {
  list.classList.toggle('hidden')
})

filterPopularity.addEventListener('click', () => {
  mediaList.media.sort(
    (x, y) => {
      if (x.likes < y.likes)
        return 1
      if (x.likes > y.likes)
        return -1
      return 0
    }
  )
  order_btn.innerText = 'Popularité'
  hideList()
  renderFiltered()
})

filterDate.addEventListener('click', () => {
  mediaList.media.sort(
    (x, y) => {
      if (x.date < y.date)
        return 1
      if (x.date > y.date)
        return -1
      return 0
    }
  )
  order_btn.innerText = 'Date'
  hideList()
  renderFiltered()
})

filterTitle.addEventListener('click', () => {
  mediaList.media.sort(
    (x, y) => {
      if (x.title.toLowerCase() < y.title.toLowerCase())
        return -1
      if (x.title.toLowerCase() > y.title.toLowerCase())
        return 1
      return 0
    }
  )
  order_btn.innerText = 'Titre'
  hideList()
  renderFiltered()
})

function hideList() {
  list.classList.toggle('hidden')
}

/**
 * Displaying list of media from photographer Id
 * @type {MediaList}
 */
const mediaList = new MediaList();
mediaList.getMedia()
  .then(() => {
    mediaList.renderMedia()
    return getPhotographerById()
  }).then(() => {
    renderPhotographer()
  }
)


