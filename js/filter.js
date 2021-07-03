import { mediaList } from "./photographerPage.js"

const order_btn = document.getElementById('order_btn')
const list = document.getElementById('order_list')

const filterPopularity = document.getElementById('order_popularity')
const filterDate = document.getElementById('order_date')
const filterTitle = document.getElementById('order_title')

/**
 * clear the DOM when we change the filter sort
 * then display media
 */
function renderFiltered() {
  document.querySelectorAll(".photographer-gallery__item").forEach(e => e.parentNode.removeChild(e))
  mediaList.renderMedia()
}

/**
 * start filters EventListener
 */
order_btn.addEventListener('click', () => {
  list.classList.toggle('hidden')
})

/**
 * filter by popularity
 */
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

/**
 * filter by date
 */
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

/**
 * filter by name
 */
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

/**
 * hide / display filter list
 */
function hideList() {
  list.classList.toggle('hidden')
}
