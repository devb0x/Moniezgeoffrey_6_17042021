// let arrayFilter = [];
// let items = [];
// let photographersList = [];
// let mediaList = [];
//
//
// async function fetchData () {
//   let response = await fetch('../file.json');
//   return response.json();
// }
//
// getItems = async () => {
//   let itemsEl = await fetchData();
//   return items.push(itemsEl);
// }
//
// arraysPush = async () => {
//   await getItems();
//   // items[0].photographers.forEach(element => photographersList.push(element));
//   items[0].photographers.forEach(element => photographersList.push(new Photographer(element)));
//   items[0].media.forEach(element => mediaList.push(element));
// }

/**
 * filter Photographer from #tags
 * @param e
 */
function filterPhotographer(e) {
  arrayFilter = [];
  resetRender();
  let filter = e.target.innerText.substring(1).toLowerCase(); // remove #
  // console.log('filter is : ' + filter);

  for (let i = 0; i < photographersList.photographers.length; i++) {
    for (let j = 0; j < photographersList.photographers[i].tags.length; j++) {
      if (photographersList.photographers[i].tags[j].match(filter)) {
        arrayFilter.push(photographersList.photographers[i]);

        const photographerItem = new Photographer(
          photographersList.photographers[i].name,
          photographersList.photographers[i].id,
          photographersList.photographers[i].city,
          photographersList.photographers[i].country,
          photographersList.photographers[i].tags,
          photographersList.photographers[i].tagline,
          photographersList.photographers[i].price,
          photographersList.photographers[i].portrait,
        );

        const photographerEl = photographerItem.render();
        photographers_section.append(photographerEl);
      }
    }
  }

}

/**
 * Reset the section .photographers html
 * Used with filterPhotographer()
 */
function resetRender() {
  photographers_section.innerHTML = '';
}

// const photographerList = new PhotographerList();
// photographerList.getPhotographers().then(() => photographerList.render());

/**
 * Check url for render
 * window.location.href.split('/?')[1] = photographer id (e.g: "82")
 */

// function checkUrl () {
//   const photographerId = parseInt(window.location.href.split('?id=')[1]);
//   // const photographerId = Number(window.location.href.split('?')[1]);
//   // Number(photographerId);
//
//   if (photographerId) {
//     // console.log(photographerId !== undefined && NaN);
//     console.log('we have id photographer');
//     console.log(typeof photographerId + ' ' + photographerId);
//     for (let i = 0; i < photographersList.photographers.length; i++) {
//       if (photographerId === photographersList.photographers[i].id) {
//         console.log('lucky boy');
//         console.log(photographersList.photographers[i].id);
//       } else {
//         console.log('unlucky boy');
//         // const photographerList = new PhotographerList();
//         // photographerList.getPhotographers().then(() => photographerList.render());
//       }
//
//     }
//   }
// }
