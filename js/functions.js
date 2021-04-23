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
  let filter = e.target.innerText.substring(1); // remove #
  // console.log('filter is : ' + filter);

  for (let i = 0; i < photographerList.photographers.length; i++) {
    for (let j = 0; j < photographerList.photographers[i].tags.length; j++) {
      if (photographerList.photographers[i].tags[j].match(filter)) {
        arrayFilter.push(photographerList.photographers[i]);

        const photographerItem = new Photographer(
          photographerList.photographers[i].name,
          photographerList.photographers[i].id,
          photographerList.photographers[i].city,
          photographerList.photographers[i].country,
          photographerList.photographers[i].tags,
          photographerList.photographers[i].tagline,
          photographerList.photographers[i].price,
          photographerList.photographers[i].portrait,
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


