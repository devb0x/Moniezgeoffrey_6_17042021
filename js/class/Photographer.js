/**
 * Class representing a Photographer for Homepage
 */
export class Photographer {

  /**
   * Create a Photographer
   * @param name
   * @param id
   * @param city
   * @param country
   * @param tags
   * @param tagline
   * @param price
   * @param portrait
   */
  constructor(name, id, city, country, tags, tagline, price, portrait) {
    this.name = name
    this.id = id
    this.city = city
    this.country = country
    this.tags = tags
    this.tagline = tagline
    this.price = price
    this.portrait = portrait
  }

  /**
   * Generate Dom & display photographer info
   * @returns {HTMLDivElement}
   */
  render() {
    const photographerEl = document.createElement('div')
    photographerEl.classList.add('photographer-item')

    photographerEl.innerHTML = `
      <a href="html/photographer.html?id=${this.id}">
        <img src="./Sample%20Photos/Photographers%20ID%20Photos/${this.portrait}" alt="${this.name}" loading="lazy">
        
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
      </div>
    `

    const filter = document.createElement('p')
    filter.classList.add('photographer-item__info-filters')

    /**
     * filters buttons inside <span>
     * @type {HTMLParagraphElement}
     */
    const parent = photographerEl.querySelector('.photographer-item__info')
    const tags_p = document.createElement('p')

    this.tags.forEach(el => {
      const span = document.createElement('span')
      const btn = document.createElement('a')
      btn.classList.add('filter-btn')
      tags_p.appendChild(span)
      span.appendChild(btn)
      btn.textContent = '#' + el
      btn.href = `?tag=${el}`
      filter.appendChild(span)
      parent.appendChild(span)
    });
    return photographerEl
  }

}
