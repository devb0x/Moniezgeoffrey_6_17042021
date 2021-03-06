import { mediaList } from "./photographerPage.js"

const order_btn = document.getElementById('order_btn')
const list = document.getElementById('order_list')
const filter_li = document.querySelectorAll('li')
const first_li = document.querySelector('li:first-child')
const last_li  = document.querySelector('li:last-child');
const filterPopularity = document.getElementById('order_popularity')
const filterDate = document.getElementById('order_date')
const filterTitle = document.getElementById('order_title')

let isOpen = false

/**
 * start filters EventListener
 */
order_btn.addEventListener('click', () => {
  list.classList.toggle('hidden')
  isOpen =! isOpen
  first_li.focus()
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
        case 'Popularit√©':
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

first_li.addEventListener('keydown', (e) => {
  if (e.shiftKey && e.key === 'Tab') {
    e.preventDefault()
    hideList()
  }
})

/**
 * hide filter list when we use tab for navigation on the last element
 */
last_li.addEventListener('keydown', (e) => {
  if (!e.shiftKey && e.key === 'Tab') {
    e.preventDefault()
    hideList()
  }
})

/**
 * hide filter when we clic outside the filters list
 */
document.addEventListener('click', (e) => {
  if (isOpen && e.target.tagName !== 'BUTTON') {
    hideList()
  }
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
  order_btn.innerText = 'Popularit√©'
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
  isOpen =! isOpen
}

/**
 * clear the DOM when we change the filter sort
 * then display media
 */
function renderFiltered() {
  document.querySelectorAll(".photographer-gallery__item").forEach(e => e.parentNode.removeChild(e))
  mediaList.renderMedia()
}
