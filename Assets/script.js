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
   
    document.getElementById("big-white-header").textContent=`${userCityChoice} ${todaysDate} ${iconOneDay}`;

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

   let tomorrowsTemp= dataForecast.list[7].main.temp;

   let twoDaysTemp= dataForecast.list[15].main.temp;

   let threeDaysTemp= dataForecast.list[23].main.temp;

   let fourDaysTemp= dataForecast.list[31].main.temp;

   let fiveDaysTemp= dataForecast.list[39].main.temp;

   let tomorrowsIcon=(dataForecast.list[7].weather[0].icon);
  //  console.log(tomorrowsIcon);


                      //5 day wind

   let tomorrowsWind= dataForecast.list[7].wind.speed;

   let twoDaysWind= dataForecast.list[15].wind.speed;

   let threeDaysWind= dataForecast.list[23].wind.speed;

   let fourDaysWind= dataForecast.list[31].wind.speed;

   let fiveDaysWind= dataForecast.list[39].wind.speed;

                    //5 days humidity
  
   let tomorrowsHumidity= dataForecast.list[7].main.humidity;

   let twoDaysHumidity= dataForecast.list[15].main.humidity;

   let threeDaysHumidity= dataForecast.list[23].main.humidity;
   
   let fourDaysHumidity= dataForecast.list[31].main.humidity;

   let fiveDaysHumidity= dataForecast.list[39].main.humidity;

   document.getElementById("tomorrow-date").textContent=(tomorrowsDate);

   document.getElementById("tomorrow-icon").textContent=(tomorrowsIcon);

   document.getElementById("tomorrow-temp").textContent="Temp: " + (tomorrowsTemp)  + '\xB0' + "F";

   document.getElementById("tomorrow-wind").textContent="Wind: " + (tomorrowsWind) + " MPH";

   document.getElementById("tomorrow-humidity").textContent="Humidity: " + (tomorrowsHumidity) + " %";

  //  document.getElementById(tomorrow)


    })
})
})