/**
 * Dom Selector
 * @type {Element}
 */
const body = document.body;
const photographers_section = document.querySelector('.photographers');


/**
 * Filter photographers from #tags
 */
body.addEventListener('click', (e) => {
  if (e.target && e.target.matches("button.filter-btn")) {
    filterPhotographer(e);
  }
});

