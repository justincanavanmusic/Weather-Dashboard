let apiKey = "7cfb14f7bc269e860ff7c1a3b2f56ce0";

let searchButton = document.getElementById('search-button')
let userTextInput = document.getElementById('exampleFormControlInput1')
// console.log(searchButton);

let baseURL = "https://api.openweathermap.org/"


searchButton.addEventListener('click', function(event) {
   let city=userTextInput.value;
    // console.log(city);

   let queryURL = baseURL + "data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial";

    //fetch request 1

  fetch(queryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {

    console.log(data);

    let windSpeed=(data.wind.speed);
    console.log(windSpeed);
    
    let humidity=(data.main.humidity);
    console.log(humidity);
    
    let temp=(data.main.temp);
    console.log(temp);

    let icon=data.weather[0].icon;
    console.log(icon);

    // todays date
    
    let today=new Date();

    let dayOfYear=today.getDate();
   
    let monthOfYear=today.getMonth()+1; 
    let year=today.getFullYear(); 
    
    let todaysDate=(`${monthOfYear}/${dayOfYear}/${year}`);
   
    document.getElementById("big-white-header").textContent=`${city} ${todaysDate} ${icon}`;

    document.getElementById("big-white-temp").textContent="Temp: " + `${temp}`;

    document.getElementById("big-white-wind").textContent="Wind: " + `${windSpeed}` + " MPH";

    document.getElementById("big-white-humidity").textContent="Humidity: " + `${humidity}` + " %";

    })
})






