let apiKey = "7cfb14f7bc269e860ff7c1a3b2f56ce0";

let searchButton = document.getElementById('search-button')

let city=[];

let queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;







// searchButton.addEventListener('click', function(event) {
// let userCityInput=event.target;
// console.log(userCityInput);
// })

searchButton.addEventListener('click', function(event) {
    city=event.target;
    console.log(city);
    })
    console.log(city);

