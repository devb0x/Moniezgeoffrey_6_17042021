let arrayFilter = [];
let items = [];
let photographersList = [];
let mediaList = [];

/**
 * Fetch json data from local file.json
 */
// const getPhotographers = () => {
//   fetch('../file.json')
//     .then(response => {
//       if (!response.ok) {
//         console.log('response not ok');
//         throw new Error("HTTP error " + response.status);
//       }
//       return response.json();
//     })
//     .then(json => {
//       photographers = json.photographers;
//       loadAllPhotographers(photographers);
//     })
//     .catch(function () {
//       this.dataError = true;
//     })
// };

async function fetchData () {
  let response = await fetch('../file.json');
  return response.json();
}

getItems = async () => {
  let itemsEl = await fetchData();
  return items.push(itemsEl);
}

arraysPush = async () => {
  await getItems();
  items[0].photographers.forEach(element => photographersList.push(element));
  items[0].media.forEach(element => mediaList.push(element));
}


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
function loadAllPhotographers(inputPhotographer) {
  const photographers_section = document.querySelector('.photographers');

  for (let i = 0; i < inputPhotographer.length; i++) {
    const photographerItem = document.createElement('div');
    photographerItem.classList.add('photographer-item');

    /**
     * image portrait
     * @type {HTMLAnchorElement}
     */
    const a = document.createElement('a');
    const img = document.createElement('img');
    a.href = '#';
    img.srcset = "./Sample%20Photos/Photographers%20ID%20Photos/"+`${inputPhotographer[i].portrait}`;
    img.alt = `${inputPhotographer[i].name}`
    // why doesn't work
    // img.innerHTML = `<img src="./Sample%20Photos/Photographers%20ID%20Photos/${photographers[i].portrait}" alt="${photographers[i].name} picture">`

    /**
     * name below picture
     * @type {HTMLHeadingElement}
     */
    const h2 = document.createElement('h2');
    h2.innerHTML =
      `<h2 class="photographer-item__name">
        ${inputPhotographer[i].name}
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
        ${inputPhotographer[i].city}, ${inputPhotographer[i].country}
      </p>
      <p class="photographer-item__info-tagline">
        ${inputPhotographer[i].tagline}
      </p>
      <p class="photographer-item__info-price">
        ${inputPhotographer[i].price}&euro;/jour
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

    for (let j = 0; j < inputPhotographer[i].tags.length; j++) {
      const span = document.createElement('span');
      const btn = document.createElement('button');
      btn.classList.add('filter-btn');
      tags_p.appendChild(span);
      span.appendChild(btn);
      btn.textContent = '#' + inputPhotographer[i].tags[j];
      info_div.appendChild(filter);
      filter.appendChild(span);
    }
  }
}

function filterPhotographer(e) {
  resetRender();

  let filter = e.target.innerText.substring(1); // remove #
  console.log('filter is : ' + filter);

  for (let i = 0; i < this.photographers.length; i++) {
    for (let j = 0; j < photographers[i].tags.length; j++) {
      if (photographers[i].tags[j].match(filter)) {
         arrayFilter.push(photographers[i]);
      }
    }
  }
  renderPhotograph(arrayFilter);
}

function renderPhotograph(arrayFilter) {
  const photographers_section = document.querySelector('.photographers');

  resetRender();

  for (let i = 0; i < arrayFilter.length; i++) {
    const photographerItem = document.createElement('div');
    photographerItem.classList.add('photographer-item');

    /**
     * image portrait
     * @type {HTMLAnchorElement}
     */
    const a = document.createElement('a');
    const img = document.createElement('img');
    a.href = '#';
    img.srcset = "./Sample%20Photos/Photographers%20ID%20Photos/"+`${arrayFilter[i].portrait}`;
    img.alt = `${arrayFilter[i].name}`
    // why doesn't work
    // img.innerHTML = `<img src="./Sample%20Photos/Photographers%20ID%20Photos/${photographers[i].portrait}" alt="${photographers[i].name} picture">`

    /**
     * name below picture
     * @type {HTMLHeadingElement}
     */
    const h2 = document.createElement('h2');
    h2.innerHTML =
      `<h2 class="photographer-item__name">
        ${arrayFilter[i].name}
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
        ${arrayFilter[i].city}, ${arrayFilter[i].country}
      </p>
      <p class="photographer-item__info-tagline">
        ${arrayFilter[i].tagline}
      </p>
      <p class="photographer-item__info-price">
        ${arrayFilter[i].price}&euro;/jour
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

    for (let j = 0; j < arrayFilter[i].tags.length; j++) {
      const span = document.createElement('span');
      const btn = document.createElement('button');
      btn.classList.add('filter-btn');
      tags_p.appendChild(span);
      span.appendChild(btn);
      btn.textContent = '#' + arrayFilter[i].tags[j];
      info_div.appendChild(filter);
      filter.appendChild(span);
    }
  }
}
  // if (this.photographers)

  // fetch('../file.json')
  //   .then(response => {
  //     if (!response.ok) {
  //       console.log('response not ok');
  //       throw new Error("HTTP error " + response.status);
  //     }
  //     return response.json();
  //   })
  //   .then(json => {
  //     this.photographers = json.photographers;
  //     // loadAllPhotographers();
  //     // this.photographers = this.photographers
  //     // console.log(this.photographers);
  //   })
  //   .catch(function () {
  //     this.dataError = true;
  //   })
  //
  // // let arr1 = [];
  //
  // for (let i =0; i < photographers[i].length; i++) {
  //   console.log('ze');
  //   if (photographers.filter(p => p[i].tags === filter)) {
  //     console.log('azezae');
  //   }
  // }
  // console.log(this.photographers);
// }

// function photographer(photographer) {
//   // getPhotographers();
//   const items = [];
//   // items.push(photographers);
//   console.log(items);
//   console.log(photographers.length);
//   // debugger;
//   for (let i = 0; i < photographers.length; i++) {
//     name = this.photographers[i].name;
//     this.id = photographers[i].id;
//     this.city = photographers[i].city;
//     this.country = photographers[i].country;
//
//     new this.photographer;
//     items.push(this.photographer);
//     console.log(items);
//   }
//
// }

function resetRender() {
  const photographers_section = document.querySelector('.photographers');

  photographers_section.innerHTML = ``;
  arrayFilter = [];
}
