let apiKey = "7cfb14f7bc269e860ff7c1a3b2f56ce0";

let searchButton = document.getElementById('search-button')
let userTextInput = document.getElementById('exampleFormControlInput1')
// console.log(searchButton);

let baseURL = "https://api.openweathermap.org/"

let cities=JSON.parse(localStorage.getItem("cities")) || [];


                    //event listener
searchButton.addEventListener('click', function() {

  let userCityChoice=userTextInput.value;
    // console.log(city);
  //cities=cities that ive saved
  // let cities=JSON.parse(localStorage.getItem("cities")) || [];

  cities.push(userCityChoice);

    localStorage.setItem("cities", (JSON.stringify(cities)));


   let oneDayURL = baseURL + "data/2.5/weather?q=" + userCityChoice + "&appid=" + apiKey + "&units=imperial";

    //today weather fetch

  fetch(oneDayURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (dataOneDay) {

    // console.log(dataOneDay);

    let windSpeedOneDay=(dataOneDay.wind.speed);
    let humidityOneDay=(dataOneDay.main.humidity);
    let tempOneDay=(dataOneDay.main.temp);
    let iconOneDay = "http://openweathermap.org/img/w/" + dataOneDay.weather[0].icon + ".png";

    document.getElementById("icon-one-day").setAttribute("src", iconOneDay);


    // todays date
    
    let today=new Date();
    let dayOfYear=today.getDate();
    // console.log(dayOfYear+1);

    let monthOfYear=today.getMonth()+1; 
    let year=today.getFullYear(); 

                //ALL NEEDED DATES

    let todaysDate=(monthOfYear) + "/" + (dayOfYear) + "/" + (year);

    let tomorrowsDate=(monthOfYear) + "/" + (dayOfYear + 1) + "/" + (year);

    let twoDaysDate=(monthOfYear) + "/" + (dayOfYear + 2) + "/" + (year);

    let threeDaysDate=(monthOfYear) + "/" + (dayOfYear + 3) + "/" + (year);

    let fourDaysDate=(monthOfYear) + "/" + (dayOfYear + 4) + "/" + (year);

    let fiveDaysDate=(monthOfYear) + "/" + (dayOfYear + 4) + "/" + (year);

          //big white header text

    let imageEl=document.createElement("img");
    imageEl.setAttribute("src", iconOneDay);
   
    document.getElementById("big-white-header").textContent=`${userCityChoice} ${todaysDate}`;

    document.getElementById("big-white-header").appendChild(imageEl);

    document.getElementById("big-white-temp").textContent="Temp: " + (tempOneDay) + '\xB0' + "F";

    // document.getElementById("big-white-wind").textContent="Wind: " + (`${windSpeed}`) + " MPH";

    document.getElementById("big-white-wind").textContent="Wind: " + (windSpeedOneDay) + " MPH";

    document.getElementById("big-white-humidity").textContent="Humidity: " + (humidityOneDay) + " %";

    //5 day forecast

    let forecastURL = baseURL + "data/2.5/forecast?q=" + userCityChoice + "&appid=" + apiKey + "&units=imperial";

    // console.log(forecastURL);

    fetch(forecastURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (dataForecast) {

    console.log(dataForecast);

    //used 12:00pm times
    //5 day temp
    //use dt (date time) instead of w/ for loop, start
    //if statement dt

   let tomorrowsTemp= dataForecast.list[0].main.temp;

   let twoDaysTemp= dataForecast.list[8].main.temp;

   let threeDaysTemp= dataForecast.list[16].main.temp;

   let fourDaysTemp= dataForecast.list[24].main.temp;

   let fiveDaysTemp= dataForecast.list[32].main.temp;

   let tomorrowsIcon=dataForecast.list[0].weather[0].icon;
  //  console.log(tomorrowsIcon);


            //5 day wind

   let tomorrowsWind= dataForecast.list[0].wind.speed;

   let twoDaysWind= dataForecast.list[8].wind.speed;

   let threeDaysWind= dataForecast.list[16].wind.speed;

   let fourDaysWind= dataForecast.list[24].wind.speed;

   let fiveDaysWind= dataForecast.list[32].wind.speed;

                    //5 days humidity
  
   let tomorrowsHumidity= dataForecast.list[0].main.humidity;

   let twoDaysHumidity= dataForecast.list[8].main.humidity;

   let threeDaysHumidity= dataForecast.list[16].main.humidity;
   
   let fourDaysHumidity= dataForecast.list[24].main.humidity;

   let fiveDaysHumidity= dataForecast.list[32].main.humidity;

   document.getElementById("tomorrow-date").textContent=(tomorrowsDate);

   document.getElementById("tomorrow-icon").textContent=(tomorrowsIcon);

   document.getElementById("tomorrow-temp").textContent="Temp: " + (tomorrowsTemp)  + '\xB0' + "F";

   document.getElementById("tomorrow-wind").textContent="Wind: " + (tomorrowsWind) + " MPH";

   document.getElementById("tomorrow-humidity").textContent="Humidity: " + (tomorrowsHumidity) + " %";

  //  document.getElementById(tomorrow)
displayHistory();

function displayHistory() {
  // let userCityChoice=localStorage.getItem("cities")
  for (let i = 0; i < cities.length; i++) {
    
  let cities=JSON.parse(localStorage.getItem("cities")) || [];
  // console.log(cities);
  //loop through cities, do this for each one
  // console.log(userCityChoice);
  let historyButton=document.createElement("button")
  historyButton.textContent=cities[i];
  // console.log(historyButton);
  historyButton.classList.add("btn", "btn-primary");
  
  let historyList=document.getElementById("history-button");
  historyList.appendChild(historyButton);
    // console.log(cities);
  // console.log(historyList);

  
  }}


    })
})
})