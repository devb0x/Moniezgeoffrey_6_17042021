const photographers_section = document.querySelector('.photographers');

class Photographer {

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

  render() {
    const photographerEl = document.createElement('div');
    photographerEl.classList.add('photographer-item');
    // console.log(this); why in name?

    photographerEl.innerHTML = `
      <a href="#">
          <img src="./Sample%20Photos/Photographers%20ID%20Photos/${this.name.portrait}" alt="${this.name.name}">
          
          <h2 class="photographer-item__name">
            ${this.name.name}
          </h2>
        </a>
        <div class="photographer-item__info">
          <p class="photographer-item__info-location">
            ${this.name.country}, ${this.name.city}
          </p>
          <p class="photographer-item__info-tagline">
            ${this.name.tagline}
          </p>
          <p class="photographer-item__info-price">
            ${this.name.price}€/jour
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

    for (let i = 0; i < this.name.tags.length; i++) {
      const span = document.createElement('span');
      const btn = document.createElement('button');
      btn.classList.add('filter-btn');
      tags_p.appendChild(span);
      span.appendChild(btn);
      btn.textContent = '#' + this.name.tags[i];
      filter.appendChild(span);
      parent.appendChild(span);
    }

    return photographerEl;
  }

}

class PhotographerList {

  constructor() {
    this.photographers = [];
  }

  getPhotographers = () => {
        console.log(this.photographers);
    return fetch('../file.json')
      .then(response => {
        if (!response.ok) {
          throw new Error("HTTP error" + response.status);
        }
        return response.json();
      })
      .then(json => {
        json.photographers.forEach((element) => {
          this.addPhotographer(element);
        });
        // console.log(json.photographers);
        // console.log(this.photographers);
      });
  }

  addPhotographer(photographer) {
    this.photographers.push(photographer);
  }

  render() {
    for (const photographer of this.photographers) {
      const photographerItem = new Photographer(photographer);
      const photographerEl = photographerItem.render();
      photographers_section.append(photographerEl);
    }
  }

}

const photographerList = new PhotographerList();
photographerList.getPhotographers().then(() => photographerList.render());


