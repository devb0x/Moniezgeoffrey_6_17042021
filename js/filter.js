import { mediaList } from "./photographerPage.js"

const order_btn = document.getElementById('order_btn')
const list = document.getElementById('order_list')

const filter_li = document.querySelectorAll('li')
const filterPopularity = document.getElementById('order_popularity')
const filterDate = document.getElementById('order_date')
const filterTitle = document.getElementById('order_title')

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
  filterByLikes()
  hideList()
  renderFiltered()
})

/**
 * filter by date
 */
filterDate.addEventListener('click', () => {
  filterByDate()
  hideList()
  renderFiltered()
})

/**
 * filter by name
 */
filterTitle.addEventListener('click', () => {
  filterByTitle()
  hideList()
  renderFiltered()
})

/**
 * eventListener for keyboard 'Enter'
 */
filter_li.forEach(li => {
  li.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      switch (e.target.innerText) {
        case 'Date':
          filterByDate()
          hideList()
          renderFiltered()
          break
        case 'Popularité':
          filterByLikes()
          hideList()
          renderFiltered()
          break
        case 'Titre':
          filterByTitle()
          hideList()
          renderFiltered()
          break
      }
    }
  })
})

function filterByLikes() {
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
}

function filterByDate() {
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
}

function filterByTitle() {
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
}

/**
 * hide / display filter list
 */
function hideList() {
  list.classList.toggle('hidden')
}

/**
 * clear the DOM when we change the filter sort
 * then display media
 */
function renderFiltered() {
  document.querySelectorAll(".photographer-gallery__item").forEach(e => e.parentNode.removeChild(e))
  mediaList.renderMedia()
}

