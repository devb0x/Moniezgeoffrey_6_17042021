/**
 * Fetch json data from local file.json
 */
const getPhotographers = () => {
  fetch('../file.json')
    .then(response => {
      if (!response.ok) {
        console.log('response not ok');
        throw new Error("HTTP error " + response.status);
      }
      return response.json();
    })
    .then(json => {
      this.photographers = json.photographers;
      loadAllPhotographers();
    })
    .catch(function () {
      this.dataError = true;
    })
};

function oldLoadAllPhotographers() {

  for (let i = 0; i < photographers.length; i++) {
    const photographerItem = document.createElement('div');
    photographerItem.classList.add('photographer-item');
    photographerItem.innerHTML = `
      <a href="#">
        <img src="./Sample%20Photos/Photographers%20ID%20Photos/${photographers[i].portrait}" alt="${photographers[i].name} picture">
        <h2 class="photographer-item__name">
          ${photographers[i].name}
        </h2>
      </a>
      <div class="photographer-item__info">
        <p class="photographer-item__info-location">
          ${photographers[i].city}, ${photographers[i].country}
        </p>
        <p class="photographer-item__info-tagline">
          ${photographers[i].tagline}
        </p>
        <p class="photographer-item__info-price">
          ${photographers[i].price} &euro;/jour
        </p>
        <p class="photographer-item__info-filters" id="phtag">
<!--          <span>-->
<!--            <button class="filter-btn">#portrait</button>-->
<!--          </span>-->
<!--          <span>-->
<!--            <button class="filter-btn">#events</button>-->
<!--          </span>-->
<!--          <span>-->
<!--            <button class="filter-btn">#travel</button>-->
<!--          </span>-->
<!--          <span>-->
<!--            <button class="filter-btn">#animals</button>-->
<!--          </span>-->
        </p>
      </div>
  `;
    photographers_section.appendChild(photographerItem);
    const filters_btn = document.querySelector('.photographer-item__info-filters');
    const phtag = document.getElementById('phtag');


    for (let j = 0; j < photographers[i].tags.length; j++) {
      console.log(photographers[i].tags.length);
      const span = document.createElement('span');
      const btn = document.createElement('button');
      btn.textContent = '#' + photographers[i].tags[j];
      // filters_btn.appendChild(span);
      phtag.appendChild(span);
      span.appendChild(btn);
      btn.classList.add('filter-btn');
    }
  }

}

/**
 * Render all photographers for index page
 * Call in getPhotographers()
 */
function loadAllPhotographers() {
  const photographers_section = document.querySelector('.photographers');

  for (let i = 0; i < photographers.length; i++) {
    const photographerItem = document.createElement('div');
    photographerItem.classList.add('photographer-item');

    /**
     * image portrait
     * @type {HTMLAnchorElement}
     */
    const a = document.createElement('a');
    const img = document.createElement('img');
    a.href = '#';
    img.srcset = "./Sample%20Photos/Photographers%20ID%20Photos/"+`${photographers[i].portrait}`;
    img.alt = `${photographers[i].name}`
    // why doesn't work
    // img.innerHTML = `<img src="./Sample%20Photos/Photographers%20ID%20Photos/${photographers[i].portrait}" alt="${photographers[i].name} picture">`

    /**
     * name below picture
     * @type {HTMLHeadingElement}
     */
    const h2 = document.createElement('h2');
    h2.innerHTML =
      `<h2 class="photographer-item__name">
        ${photographers[i].name}
      </h2>
      `;
    a.appendChild(img);
    a.appendChild(h2);

    photographers_section.appendChild(photographerItem);
    photographerItem.appendChild(a);

    /**
     * info div
     * @type {HTMLDivElement}
     */
    const info_div = document.createElement('div');
    info_div.classList.add('photographer-item__info');
    info_div.innerHTML = `
      <p class="photographer-item__info-location">
        ${photographers[i].city}, ${photographers[i].country}
      </p>
      <p class="photographer-item__info-tagline">
        ${photographers[i].tagline}
      </p>
      <p class="photographer-item__info-price">
        ${photographers[i].price}&euro;/jour
      </p>
      `;
    photographerItem.appendChild(info_div);

    const filter = document.createElement('p');
    filter.classList.add('photographer-item__info-filters');

    /**
     * filters buttons inside <span>
     * @type {HTMLParagraphElement}
     */

    const tags_p = document.createElement('p');

    for (let j = 0; j < photographers[i].tags.length; j++) {
      const span = document.createElement('span');
      const btn = document.createElement('button');
      btn.classList.add('filter-btn');
      tags_p.appendChild(span);
      span.appendChild(btn);
      btn.textContent = '#' + photographers[i].tags[j];
      info_div.appendChild(filter);
      filter.appendChild(span);
    }
  }
}

