import { Photographer } from "./Photographer.js"

const photographers_section = document.querySelector('.photographers')
const filters_nav = document.querySelector('.filters-nav')

/**
 * Class representing PhotographersList for Homepage
 */
export class PhotographersList {

  /**
   * photographers[] for all photographers
   * arrayFilter[] for photographers with the right tags
   */
  constructor() {
    this.photographers = []
    this.arrayFilter = []
    this.arrayTags = []
  }

  /**
   * Fetch from json
   * @returns {Promise<any>}
   */
  getPhotographers() {
    return fetch('https://raw.githubusercontent.com/devb0x/Moniezgeoffrey_6_17042021/master/file.json')
      .then(response => {
        if (!response.ok) {
          throw new Error("HTTP error" + response.status)
        }
        return response.json();
      })
      .then(json => {
        json.photographers.forEach((element) => {
          this.addPhotographer(element)
        })
      })
  }

  generateFilters() {
    this.photographers.forEach(el => {
      el.tags.forEach(tag => {
        this.arrayTags.push(tag)
      })
    })
    this.arrayTags = [...new Set(this.arrayTags)]
  }

  /**
   * Filter photographers from the url
   * @param filter
   */
  getPhotographersByFilter(filter) {
    this.photographers.forEach(el => {
      el.tags.forEach(tag => {
        if (tag.match(filter)) {
          this.arrayFilter.push(el)
        }
      })
      this.renderByFilter()
    })
    this.generateFilters()
    this.renderFilter(this.arrayTags)
  }

  /**
   * add photographer
   * @param photographer
   */
  addPhotographer(photographer) {
    this.photographers.push(photographer)
  }

  /**
   * Create new Photographer
   * & render it
   */
  render() {
    this.photographers.forEach(el => {
      /**
       * @type {Photographer}
       */
      const photographerItem = new Photographer(
        el.name,
        el.id,
        el.city,
        el.country,
        el.tags,
        el.tagline,
        el.price,
        el.portrait,
      );

      const photographerEl = photographerItem.render()
      photographers_section.append(photographerEl)

    })
    this.generateFilters()
    this.renderFilter(this.arrayTags)
  }

  /**
   * Render every filter available for the header <nav>
   * @param tags
   */
  renderFilter(tags) {
    tags.forEach(tag => {
      const newTag = document.createElement('span')
      newTag.classList.add('filter')

      const tagLink = document.createElement('a')
      tagLink.classList.add('filter-btn')
      tagLink.href = `?tag=${tag}`
      tagLink.innerText = `#${tag}`

      newTag.appendChild(tagLink)
      filters_nav.appendChild(newTag)
    })
  }

  /**
   * render photographers from tags
   */
  renderByFilter() {
    this.arrayFilter.forEach(el => {
      const photographerItem = new Photographer(
        el.name,
        el.id,
        el.city,
        el.country,
        el.tags,
        el.tagline,
        el.price,
        el.portrait,
      );

      const photographerEl = photographerItem.render()
      photographers_section.append(photographerEl)
    })
  }

  /**
   * Cleaning the html before render when we filter
   */
  resetRender() {
    photographers_section.innerHTML = ''
  }

}

