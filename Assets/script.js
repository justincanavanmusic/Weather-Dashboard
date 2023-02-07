let apiKey = "7cfb14f7bc269e860ff7c1a3b2f56ce0";

let searchButton = document.getElementById('search-button')
let userTextInput = document.getElementById('exampleFormControlInput1')
// console.log(searchButton);

let baseURL = "https://api.openweathermap.org/"

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
let fiveDaysDate=(monthOfYear) + "/" + (dayOfYear + 5) + "/" + (year);

let cities=JSON.parse(localStorage.getItem("cities")) || [];

//makes the "cities" key into an object in local storage

                    //event listener
searchButton.addEventListener('click', function() {

  let userCityChoice=userTextInput.value;
   
    cities.push(userCityChoice);
    //pushes the tex

    localStorage.setItem("cities", (JSON.stringify(cities)));
    //converts "cities" into JSON string
   
   let oneDayURL = baseURL + "data/2.5/weather?q=" + userCityChoice + "&appid=" + apiKey + "&units=imperial";

    //today weather fetch

  fetch(oneDayURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (dataOneDay) {

    console.log(dataOneDay);

    let windSpeedOneDay=(dataOneDay.wind.speed);
    let humidityOneDay=(dataOneDay.main.humidity);
    let tempOneDay=(dataOneDay.main.temp);
    let iconOneDay ="" + "http://openweathermap.org/img/w/" + dataOneDay.weather[0].icon + ".png";

    // document.getElementById("icon-one-day").setAttribute("src", iconOneDay);
                            //big white box
    
      let icon=document.createElement("img");
      icon.setAttribute("src", iconOneDay);
      icon.setAttribute("id", "icon-one-day");

      document.getElementById("big-white-header").textContent=(userCityChoice) + " " + "(" + (todaysDate + ")");
      document.getElementById("big-white-header").appendChild(icon);
      document.getElementById("big-white-temp").textContent="Temp: " + (tempOneDay) + '\xB0' + "F";
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

  
                                  //5 day temp
    //use dt (date time) instead of w/ for loop, start
    //if statement dt

  // let tomorrowsIcon=dataForecast.list[0].weather[0].icon;
  let tomorrowsIcon="http://openweathermap.org/img/w/" + dataForecast.list[0].weather[0].icon + ".png";
  
  // let icon=document.createElement("img");
  // icon.setAttribute("src", iconOneDay);
  // icon.setAttribute("id", "icon-one-day");
  // console.log(dataForecast.list[0].weather[0].icon);
  let icon1=document.createElement("img");
  icon1.setAttribute("src", tomorrowsIcon);
  icon1.setAttribute("id", "tomorrow-icon");
  document.getElementById("first-box").appendChild(icon1);
  
  let twoDaysIcon="http://openweathermap.org/img/w/" + dataForecast.list[8].weather[0].icon + ".png";
  let threeDaysIcon="http://openweathermap.org/img/w/" + dataForecast.list[16].weather[0].icon + ".png";
  let fourDaysIcon="http://openweathermap.org/img/w/" + dataForecast.list [24].weather[0].icon + ".png";
  let fiveDaysIcon="http://openweathermap.org/img/w/" + dataForecast.list[0].weather[0].icon + ".png";

   let tomorrowsTemp= dataForecast.list[0].main.temp;
   let twoDaysTemp= dataForecast.list[8].main.temp;
   let threeDaysTemp= dataForecast.list[16].main.temp;
   let fourDaysTemp= dataForecast.list[24].main.temp;
   let fiveDaysTemp= dataForecast.list[32].main.temp;
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

                      //tomorrow forecast

   document.getElementById("tomorrow-date").textContent=(tomorrowsDate);
  //  document.getElementById("tomorrow-icon").textContent=(tomorrowsIcon);
   document.getElementById("tomorrow-temp").textContent="Temp: " + (tomorrowsTemp)  + '\xB0' + "F";
   document.getElementById("tomorrow-wind").textContent="Wind: " + (tomorrowsWind) + " MPH";
   document.getElementById("tomorrow-humidity").textContent="Humidity: " + (tomorrowsHumidity) + " %";

                    //2 days forecast

   document.getElementById("two-days-date").textContent=(twoDaysDate);
  //  document.getElementById("two-days-icon").textContent=(tomorrowsIcon);
   document.getElementById("two-days-temp").textContent="Temp: " + (twoDaysTemp)  + '\xB0' + "F";
   document.getElementById("two-days-wind").textContent="Wind: " + (twoDaysWind) + " MPH";
   document.getElementById("two-days-humidity").textContent="Humidity: " + (twoDaysHumidity) + " %";
  
  
   document.getElementById("three-days-date").textContent=(threeDaysDate);
   //  document.getElementById("two-days-icon").textContent=(tomorrowsIcon);
    document.getElementById("three-days-temp").textContent="Temp: " + (threeDaysTemp)  + '\xB0' + "F";
    document.getElementById("three-days-wind").textContent="Wind: " + (threeDaysWind) + " MPH";
    document.getElementById("three-days-humidity").textContent="Humidity: " + (threeDaysHumidity) + " %";

    document.getElementById("four-days-date").textContent=(fourDaysDate);
    //  document.getElementById("two-days-icon").textContent=(tomorrowsIcon);
     document.getElementById("four-days-temp").textContent="Temp: " + (fourDaysTemp)  + '\xB0' + "F";
     document.getElementById("four-days-wind").textContent="Wind: " + (fourDaysWind) + " MPH";
     document.getElementById("four-days-humidity").textContent="Humidity: " + (fourDaysHumidity) + " %";

     document.getElementById("five-days-date").textContent=(fiveDaysDate);
    //  document.getElementById("two-days-icon").textContent=(tomorrowsIcon);
     document.getElementById("five-days-temp").textContent="Temp: " + (fiveDaysTemp)  + '\xB0' + "F";
     document.getElementById("five-days-wind").textContent="Wind: " + (fiveDaysWind) + " MPH";
     document.getElementById("five-days-humidity").textContent="Humidity: " + (fiveDaysHumidity) + " %";


   

  //  document.getElementById(tomorrow)
displayHistory();
                    //displayHistory function
function displayHistory() {

  let historyButtonContainer=document.getElementById("history-button-container");
  historyButtonContainer.innerHTML="";
  //clears all the buttons; every time i hit the search button, it prints a button of every array item
  
  // let userCityChoice=localStorage.getItem("cities")
  for (let i = 0; i < cities.length; i++) {
    
  let cities=JSON.parse(localStorage.getItem("cities")) || [];
  // console.log(cities);
  //loop through cities, do this for each one
  // console.log(userCityChoice);
  let searchHistoryButtons=document.createElement("button")
 
  searchHistoryButtons.textContent=cities[i];
  // console.log(historyButton);
  searchHistoryButtons.classList.add("btn", "btn-primary");
  
  historyButtonContainer.appendChild(searchHistoryButtons);
    // console.log(cities);
  // console.log(historyList);
  
  
  
  
  searchHistoryButtons.addEventListener('click', function(){
  // console.log("button");
  document.getElementById("big-white-header").textContent=(searchHistoryButtons.textContent) + " " + "(" + (todaysDate + ")");
let searchHistoryButtonText=searchHistoryButtons.textContent;

  let oneDayURL = baseURL + "data/2.5/weather?q=" + searchHistoryButtonText + "&appid=" + apiKey + "&units=imperial";
  
  document.getElementById("big-white-temp").textContent="Temp: " + (tempOneDay) + '\xB0' + "F";
      document.getElementById("big-white-wind").textContent="Wind: " + (windSpeedOneDay) + " MPH";
      document.getElementById("big-white-humidity").textContent="Humidity: " + (humidityOneDay) + " %";
  
  
  
  
  
  
  
  
  
  
});



  }}
  {
   
  }

  

    })
})
})