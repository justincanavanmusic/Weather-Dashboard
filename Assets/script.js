let apiKey = "7cfb14f7bc269e860ff7c1a3b2f56ce0";

let searchButton = document.getElementById('search-button')
let userTextInput = document.getElementById('exampleFormControlInput1')
// console.log(searchButton);

let baseURL = "https://api.openweathermap.org/"


searchButton.addEventListener('click', function(event) {

   let userCityChoice=userTextInput.value;
    // console.log(city);

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
    let iconOneDay=(dataOneDay.weather[0].icon);

    // todays date
    
    let today=new Date();
    let dayOfYear=today.getDate();
    let monthOfYear=today.getMonth()+1; 
    let year=today.getFullYear(); 

    let todaysDate=(monthOfYear) + "/" + (dayOfYear) + "/" + (year);

    //big white header text
   
    document.getElementById("big-white-header").textContent=`${userCityChoice} ${todaysDate} ${iconOneDay}`;

    document.getElementById("big-white-temp").textContent="Temp: " + (tempOneDay);

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

   let tomorrowsTemp= dataForecast.list[7].main.temp;

   let twoDaysTemp= dataForecast.list[15].main.temp;

   let threeDaysTemp= dataForecast.list[23].main.temp;

   let fourDaysTemp= dataForecast.list[31].main.temp;

   let fiveDaysTemp= dataForecast.list[39].main.temp;

    //5 day wind

   let tomorrowsWind= dataForecast.list[7].wind.speed;

   let twoDaysWind= dataForecast.list[15].wind.speed;

   let threeDaysWind= dataForecast.list[23].wind.speed;

   let fourDaysWind= dataForecast.list[31].wind.speed;

   let fiveDaysWind= dataForecast.list[39].wind.speed;

   //5 days humidity
  
   let tomorrowsHumidity= dataForecast.list[7].main.humidity;
   console.log(tomorrowsHumidity);

   let twoDaysHumidity= dataForecast.list[15].main.humidity;
   console.log(twoDaysHumidity);

   let threeDaysHumidity= dataForecast.list[23].main.humidity;
   console.log(threeDaysHumidity);

   let fourDaysHumidity= dataForecast.list[31].main.humidity;
   console.log(fourDaysHumidity);

   let fiveDaysHumidity= dataForecast.list[39].main.humidity;
   console.log(fiveDaysHumidity);

   document.getElementById("tomorrow-temp").textContent="Temp: " + (tomorrowsTemp);

   document.getElementById("tomorrow-wind").textContent="Wind: " + (tomorrowsWind) + " MPH";

   document.getElementById("tomorrow-humidity").textContent="Humidity: " + (tomorrowsHumidity) + " %";

  //  document.getElementById(tomorrow)




    


    })
})
})