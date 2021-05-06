import { PhotographersList } from "./class/PhotographersList.js";

/**
 * Filter photographers from #tags
 */
// for (let i = 0; i < btn.length; i++) {
//   btn[i].addEventListener('click', e => {
//     resetActive();
//     e.target.classList.add('btn-active');
//     photographersList.filter(e);
//   })
// }

  let buttons = document.querySelectorAll(".filter-btn");
function resetActive() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('btn-active');
  }

}

const body = document.body;

body.addEventListener('click', (e) => {
  console.log(e.target)
  if (e.target && e.target.matches("button.filter-btn")) {
    // console.log('aze')
    resetActive();
    photographersList.filter(e);
  }
});

const photographersList = new PhotographersList();
photographersList.getPhotographers().then(() => photographersList.render());
