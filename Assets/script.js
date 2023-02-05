let apiKey = "7cfb14f7bc269e860ff7c1a3b2f56ce0";

let searchButton = document.getElementById('search-button')

// console.log(searchButton);

let city=[];
// console.log(city);

let baseURL = "https://api.openweathermap.org/"



searchButton.addEventListener('click', function(event) {
    let city=event.target;
    // console.log(city);

    let chicagoLongLat = "data/2.5/weather?lat=41.9019&lon=-87.6779&appid=7cfb14f7bc269e860ff7c1a3b2f56ce0"

    let chicagoURL = "geo/1.0/zip?zip=60622,US&appid=7cfb14f7bc269e860ff7c1a3b2f56ce0"

   let queryURL = "data/2.5/weather?q=" + city + "&appid=" + apiKey;

    //fetch request 1

  fetch(baseURL + queryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
    })

//   fetch(baseURL + chicagoLongLat)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data)
//     })
})
   

