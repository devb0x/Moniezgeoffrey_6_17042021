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

    photographerEl.innerHTML = `
      <a href="#">
          <img src="./Sample%20Photos/Photographers%20ID%20Photos/${this.portrait}" alt="${this.name}">
          
          <h2 class="photographer-item__name">
            ${this.name}
          </h2>
        </a>
        <div class="photographer-item__info">
          <p class="photographer-item__info-location">
            ${this.country}, ${this.city}
          </p>
          <p class="photographer-item__info-tagline">
            ${this.tagline}
          </p>
          <p class="photographer-item__info-price">
            ${this.price}€/jour
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

    for (let i = 0; i < this.tags.length; i++) {
      const span = document.createElement('span');
      const btn = document.createElement('button');
      btn.classList.add('filter-btn');
      tags_p.appendChild(span);
      span.appendChild(btn);
      btn.textContent = '#' + this.tags[i];
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
    // console.log(this.photographers);
    return fetch('../file.json')
      .then(response => {
        if (!response.ok) {
          throw new Error("HTTP error" + response.status);
        }
        return response.json();
      })
      .then(json => {
        // console.log(json.photographers);
        json.photographers.forEach((element) => {
          this.addPhotographer(element);
        });
      });
  }

  addPhotographer(photographerList) {
    this.photographers.push(photographerList);
  }

  // render() {
  //   console.log(this.photographers)
  //   for (const photographer of this.photographers) {
  //     const photographerItem = new Photographer(
  //     this.photographers.name,
  //         this.photographers.id,
  //         this.photographers.city,
  //         this.photographers.country,
  //         this.photographers.tags,
  //         this.photographers.tagline,
  //         this.photographers.price,
  //         this.photographers.portrait,);
  //     const photographerEl = photographerItem.render();
  //     photographers_section.append(photographerEl);
  //   }
  // }

  render() {
    for (let i = 0; i < this.photographers.length; i++) {
      const photographerItem = new Photographer(
        this.photographers[i].name,
        this.photographers[i].id,
        this.photographers[i].city,
        this.photographers[i].country,
        this.photographers[i].tags,
        this.photographers[i].tagline,
        this.photographers[i].price,
        this.photographers[i].portrait,
      );

      const photographerEl = photographerItem.render();
      photographers_section.append(photographerEl);
    }
  }


}

const photographerList = new PhotographerList();
photographerList.getPhotographers().then(() => photographerList.render());

// const test = () => {
//   Promise.all([photographerList.getPhotographers(), photographerList.render()])
// }
//
// test()
