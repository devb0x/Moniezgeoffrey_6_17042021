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

    /**
     * link for the photographer page with img and title inside
     * @type {HTMLAnchorElement}
     */
    const link = document.createElement('a')
    link.href = `html/photographer.html?id=${this.id}`

    /**
     * profil picture
     * @type {HTMLImageElement}
     */
    const img = document.createElement('img')
    img.src = `./Sample%20Photos/Photographers%20ID%20Photos/${this.portrait}`
    img.alt = `${this.name}`
    img.loading = 'lazy'

    /**
     * title / photographer name
     * @type {HTMLHeadingElement}
     */
    const title = document.createElement('h2')
    title.classList.add('photographer-item__name')
    title.innerText = `${this.name}`
    link.appendChild(img)
    link.appendChild(title)
    photographerEl.append(link)

    /**
     * div for multiple paragraph info inside
     * @type {HTMLDivElement}
     */
    const info_div = document.createElement('div')
    info_div.classList.add('photographer-item__info')

    /**
     * info location
     * @type {HTMLParagraphElement}
     */
    const location_p = document.createElement('p')
    location_p.classList.add('photographer-item__info-location')
    location_p.innerText = `${this.country}, ${this.city}`
    info_div.appendChild(location_p)

    /**
     * info tagline
     * @type {HTMLParagraphElement}
     */
    const tagline_p = document.createElement('p')
    tagline_p.classList.add('photographer-item__info-tagline')
    tagline_p.innerText = `${this.tagline}`
    info_div.appendChild(tagline_p)

    /**
     * info price
     * @type {HTMLParagraphElement}
     */
    const price_p = document.createElement('p')
    price_p.classList.add('photographer-item__info-price')
    price_p.innerText = `${this.price}€/jour`
    info_div.appendChild(price_p)

    /**
     * adding the div info inside the div .photographer-item
     */
    photographerEl.append(info_div)

    /**
     * add filters links inside <span>
     * then add every filter to the parent info div
     * @type {HTMLParagraphElement}
     */
    this.tags.forEach(el => {
      const span = document.createElement('span')
      const filter_a = document.createElement('a')

      filter_a.classList.add('filter-btn')
      filter_a.href = `?tag=${el}`
      filter_a.textContent = '#' + el

      span.appendChild(filter_a)
      info_div.appendChild(span)
    });

    return photographerEl
  }

}
