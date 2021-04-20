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

    const tags_p = document.createElement('p');

    for (let i = 0; i < this.photographer.tags.length; i++) {
      console.log('i m here');
      const span = document.createElement('span');
      const btn = document.createElement('button');
      btn.classList.add('filter-btn');
      tags_p.appendChild(span);
      span.appendChild(btn);
      btn.textContent = '#' + this.photographer.tags[i];
      filter.appendChild(span);
      photographerEl.appendChild(span);
    }

    return photographerEl;
  }
}

class PhotographerList {
  photographers = [
    new Photographer(
      'nabeel bradford',
      '2516',
      'london',
      'UK',
      ['sport', 'fashion'],
      'life is great',
      '999',
      'NabeelBradford.jpg'
    ),
    new Photographer(
      'rhode dubois',
      '1921',
      'madrid',
      'spain',
      ['dance', 'art'],
      'life is beautiful',
      '456',
      'RhodeDubois.jpg'
    )
  ];

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
