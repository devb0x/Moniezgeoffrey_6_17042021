const url = 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeDataFR.json';

// const getPhotographers = () => {
//   fetch(url, {headers: {
//     // 'Content-type': 'application/json',
//       'Access-Control-Allow-Origin': 'http://127.0.0.1:8080/',
//       'Access-Control-Allow-Methods': 'POST',
//      'Access-Control-Allow-Headers' : 'Content-Type, Authorization'
//     }}, {mode: "no-cors"})
//     .then((response) => {
//       if (response.status === 200) {
//         console.log('status 200');
//         return response.json()
//       } else {
//         throw new Error('Unable to fetch photographers')
//       }
//     })
//     .then((photographers) => {
//       console.log(photographers[0].name)
//     })
// }

document.getElementById('test').addEventListener('click', () => {
  loadAllPhotographers();
})

// getPhotographers();
// loadTest();
// renderAllPhotographers();
// photographer();
/**
 * return response
 */
// fetch(url, {mode: 'no-cors'})
//   .then(function(response) {
//     console.log(response);
//   }).catch(function(error) {
//   console.log('Request failed', error)
// });

let b = document.body;

b.addEventListener('click', (e) => {
  if (e.target && e.target.matches("button.filter-btn")) {
    // console.log("Anchor element clicked!");
    // console.log(e.target.innerText);
    filter(e);
  }
});

function filter(e) {
  // console.log(e.target.innerText);
  filterPhotographer(e);
}

// fetchData();
// getItems();
arraysPush();


// getPhotographers();
// console.log(items);
// console.log(photographersList);
