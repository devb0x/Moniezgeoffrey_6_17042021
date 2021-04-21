const photographers_section = document.querySelector('.photographers');

class Photographer {
  // name;
  // id;
  // city;
  // country;
  // tags = [];
  // tagline;
  // price;
  // portrait;

  constructor(name, id, city, country, tags, tagline, price, portrait) {
    this.name = name;
    this.id = id;
    this.city = city;
    this.country = country;
    this.tags = tags;
    this.tagline = tagline;
    this.price = price;
    this.portrait = portrait;
  }
}

class PhotographerItem {
  constructor(photographer) {
    this.photographer = photographer;
  }

  render() {
    const photographerEl = document.createElement('div');
    photographerEl.classList.add('photographer-item');

    photographerEl.innerHTML = `
      <a href="#">
          <img src="./Sample%20Photos/Photographers%20ID%20Photos/${this.photographer.portrait}" alt="${this.photographer.name}">
          <h2 class="photographer-item__name">
            ${this.photographer.name}
          </h2>
        </a>
        <div class="photographer-item__info">
          <p class="photographer-item__info-location">
            ${this.photographer.country}, ${this.photographer.city}
          </p>
          <p class="photographer-item__info-tagline">
            ${this.photographer.tagline}
          </p>
          <p class="photographer-item__info-price">
            ${this.photographer.price}€/jour
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

    for (let i = 0; i < this.photographer.tags.length; i++) {
      const span = document.createElement('span');
      const btn = document.createElement('button');
      btn.classList.add('filter-btn');
      tags_p.appendChild(span);
      span.appendChild(btn);
      btn.textContent = '#' + this.photographer.tags[i];
      filter.appendChild(span);
      parent.appendChild(span);
    }

    return photographerEl;
  }
}

class PhotographerList {
  // photographers = [
  //   new Photographer(
  //     'nabeel bradford',
  //     '2516',
  //     'london',
  //     'UK',
  //     ['sport', 'fashion'],
  //     'life is great',
  //     '999',
  //     'NabeelBradford.jpg'
  //   ),
  //   new Photographer(
  //     'rhode dubois',
  //     '1921',
  //     'madrid',
  //     'spain',
  //     ['dance', 'art'],
  //     'life is beautiful',
  //     '456',
  //     'RhodeDubois.jpg'
  //   )
  // ];
  photographers = [];

  getPhotographers = () => {
    fetch('../file.json')
      .then(response => {
        if (!response.ok) {
          throw new Error("HTTP error" + response.status);
        }
        return response.json();
      })
      .then(json => {
        this.addPhotographer(json.photographers);
        console.log(json.photographers);
        console.log(this.photographers);
      })
  }

  addPhotographer(photographer) {
    this.photographers.push(photographer);
  }

  addPhotographerTest() {
    for (let i = 0; i < this.photographers.length; i++) {
      new Photographer(this.photographers[i]);
      console.log('check');
    }
  }

  // constructor() {
  //   this.url = '../file.json';
  //   this.entries = [];
  //   this.initialize();
  // }
  //
  // initialize() {
  //   this.photographers = fetch('../file.json')
  //   .then(response => {
  //     if (!response.ok) {
  //       console.log('response not ok');
  //       throw new Error("HTTP error " + response.status);
  //     }
  //     return response.json();
  //     // return Object.assign(new Photographer(this.photographers));
  //   })
  //   .then(json => {
  //     this.entries = json.photographers;
  //     // loadAllPhotographers(photographers);
  //   })
  //   .catch(function () {
  //     this.dataError = true;
  //   })
  //
  // // fetchData () {
  // //   let response = fetch('../file.json')
  // //     .then(response => response.json())
  // //     .then()
  // // }
  // // async getItems () {
  // //   let itemsEl = await fetchData();
  // //   return items.push(itemsEl);
  // }
  //
  render() {
    for (const photographer of this.photographers) {
      const photographerItem = new PhotographerItem(photographer);
      const photographerEl = photographerItem.render();
      photographers_section.append(photographerEl);
    }
  }

}

const photographerList = new PhotographerList();
photographerList.render();

// photographerList.initialize();
photographerList.getPhotographers();
// photographerList.addPhotographer();

