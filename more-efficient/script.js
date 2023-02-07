let apiKey = "7cfb14f7bc269e860ff7c1a3b2f56ce0";
//apikey generated from openweather

//search button
let searchButton = document.getElementById('search-button')
let userTextInput = document.getElementById('exampleFormControlInput1')
//text input of search button
// console.log(searchButton);

let baseURL = "https://api.openweathermap.org/"
//the base of the url for all links

//gets day of year, month of year, year
let today=new Date();
let dayOfYear=today.getDate();
let monthOfYear=today.getMonth()+1; 
let year=today.getFullYear(); 

            //variables for ALL NEEDED DATES

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
//click listener for the search button

  let userCityChoice=userTextInput.value;
  //stores the value of usertextinput to usercity choice
   
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

    for (let i = 0; i < dataForecast.list.length; i+=8) {
        var colEl = document.createElement("div");
        colEl.setAttribute("class","col");
        var h6El = document.createElement("h6");
        h6El.textContent=dataForecast.list[i].dt_txt;

        colEl.appendChild(h6El);
        document.getElementById("days-forecast").appendChild(colEl);
        
    }

                                  //5 day temp
    //use dt (date time) instead of w/ for loop, start
    //if statement dt

  // let tomorrowsIcon=dataForecast.list[0].weather[0].icon;
  let tomorrowsIcon="http://openweathermap.org/img/w/" + dataForecast.list[0].weather[0].icon + ".png";
  let twoDaysIcon="http://openweathermap.org/img/w/" + dataForecast.list[8].weather[0].icon + ".png";
  let threeDaysIcon="http://openweathermap.org/img/w/" + dataForecast.list[16].weather[0].icon + ".png";
  let fourDaysIcon="http://openweathermap.org/img/w/" + dataForecast.list [24].weather[0].icon + ".png";
  let fiveDaysIcon="http://openweathermap.org/img/w/" + dataForecast.list[32].weather[0].icon + ".png";

  document.getElementById("first-box").textContent = "";
  let icon1=document.createElement("img");
  icon1.setAttribute("src", tomorrowsIcon);
  icon1.setAttribute("id", "tomorrow-icon");
  document.getElementById("first-box").appendChild(icon1);

  document.getElementById("second-box").textContent = "";
  let icon2=document.createElement("img");
  icon2.setAttribute("src", twoDaysIcon);
  icon2.setAttribute("id", "two-day-icon");
  document.getElementById("second-box").appendChild(icon2);

  document.getElementById("third-box").textContent = "";
  let icon3=document.createElement("img");
  icon3.setAttribute("src", threeDaysIcon);
  icon3.setAttribute("id", "three-day-icon");
  document.getElementById("third-box").appendChild(icon3);

  document.getElementById("fourth-box").textContent = "";
  let icon4=document.createElement("img");
  icon4.setAttribute("src", fourDaysIcon);
  icon4.setAttribute("id", "four-day-icon");
  document.getElementById("fourth-box").appendChild(icon4);

  document.getElementById("fifth-box").textContent = "";
  let icon5=document.createElement("img");
  icon5.setAttribute("src", fiveDaysIcon);
  icon5.setAttribute("id", "five-day-icon");
  document.getElementById("fifth-box").appendChild(icon5);

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
  
                    //3 day forecast

   document.getElementById("three-days-date").textContent=(threeDaysDate);
   //  document.getElementById("two-days-icon").textContent=(tomorrowsIcon);
    document.getElementById("three-days-temp").textContent="Temp: " + (threeDaysTemp)  + '\xB0' + "F";
    document.getElementById("three-days-wind").textContent="Wind: " + (threeDaysWind) + " MPH";
    document.getElementById("three-days-humidity").textContent="Humidity: " + (threeDaysHumidity) + " %";

                  //4 day forecast


    document.getElementById("four-days-date").textContent=(fourDaysDate);
    //  document.getElementById("two-days-icon").textContent=(tomorrowsIcon);
     document.getElementById("four-days-temp").textContent="Temp: " + (fourDaysTemp)  + '\xB0' + "F";
     document.getElementById("four-days-wind").textContent="Wind: " + (fourDaysWind) + " MPH";
     document.getElementById("four-days-humidity").textContent="Humidity: " + (fourDaysHumidity) + " %";

                    //5 day forecast


     document.getElementById("five-days-date").textContent=(fiveDaysDate);
    //  document.getElementById("two-days-icon").textContent=(tomorrowsIcon);
     document.getElementById("five-days-temp").textContent="Temp: " + (fiveDaysTemp)  + '\xB0' + "F";
     document.getElementById("five-days-wind").textContent="Wind: " + (fiveDaysWind) + " MPH";
     document.getElementById("five-days-humidity").textContent="Humidity: " + (fiveDaysHumidity) + " %";

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

  let searchHistoryURL = baseURL + "data/2.5/weather?q=" + searchHistoryButtonText + "&appid=" + apiKey + "&units=imperial";

  console.log(searchHistoryURL);
  

fetch(searchHistoryURL)
    .then(function(response) {
      return response.json();
    })
    .then(function(dataSearch) {

      console.log(dataSearch);
      
      let windSearchButton=(dataSearch.wind.speed);
      let humiditySearchButton=(dataSearch.main.humidity);
      let tempSearchButton=(dataSearch.main.temp);

      document.getElementById("big-white-temp").textContent="Temp: " + (tempSearchButton) + '\xB0' + "F";
      document.getElementById("big-white-wind").textContent="Wind: " + (windSearchButton) + " MPH";
      document.getElementById("big-white-humidity").textContent="Humidity: " + (humiditySearchButton) + " %";

    })

    let search5DayURL = baseURL + "data/2.5/forecast?q=" + searchHistoryButtonText + "&appid=" + apiKey + "&units=imperial";

 fetch(search5DayURL)  
      .then(function(response) {
        return response.json();
      })
      .then(function(data5day){

        let tomorrowsIcon="http://openweathermap.org/img/w/" + data5day.list[0].weather[0].icon + ".png";
        let twoDaysIcon="http://openweathermap.org/img/w/" + data5day.list[8].weather[0].icon + ".png";
        let threeDaysIcon="http://openweathermap.org/img/w/" + data5day.list[16].weather[0].icon + ".png";
        let fourDaysIcon="http://openweathermap.org/img/w/" + data5day.list [24].weather[0].icon + ".png";
        let fiveDaysIcon="http://openweathermap.org/img/w/" + data5day.list [32].weather[0].icon + ".png";

        let tomorrowsTemp= data5day.list[0].main.temp;
        let twoDaysTemp= data5day.list[8].main.temp;
        let threeDaysTemp= data5day.list[16].main.temp;
        let fourDaysTemp= data5day.list[24].main.temp;
        let fiveDaysTemp= data5day.list[32].main.temp;

        let tomorrowsWind= data5day.list[0].wind.speed;
        let twoDaysWind= data5day.list[8].wind.speed;
        let threeDaysWind= data5day.list[16].wind.speed;
        let fourDaysWind= data5day.list[24].wind.speed;
        let fiveDaysWind= data5day.list[32].wind.speed;

        let tomorrowsHumidity= data5day.list[0].main.humidity;
        let twoDaysHumidity= data5day.list[8].main.humidity;
        let threeDaysHumidity= data5day.list[16].main.humidity;
        let fourDaysHumidity= data5day.list[24].main.humidity;
        let fiveDaysHumidity= data5day.list[32].main.humidity;

   document.getElementById("tomorrow-temp").textContent="Temp: " + (tomorrowsTemp)  + '\xB0' + "F";
     document.getElementById("tomorrow-wind").textContent="Wind: " + (tomorrowsWind) + " MPH";
   document.getElementById("tomorrow-humidity").textContent="Humidity: " + (tomorrowsHumidity) + " %";

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
   
     document.getElementById("first-box").textContent = "";
     let icon1=document.createElement("img");
     icon1.setAttribute("src", tomorrowsIcon);
     icon1.setAttribute("id", "tomorrow-icon");
     document.getElementById("first-box").appendChild(icon1);
   
     document.getElementById("second-box").textContent = "";
     let icon2=document.createElement("img");
     icon2.setAttribute("src", twoDaysIcon);
     icon2.setAttribute("id", "two-day-icon");
     document.getElementById("second-box").appendChild(icon2);
   
     document.getElementById("third-box").textContent = "";
     let icon3=document.createElement("img");
     icon3.setAttribute("src", threeDaysIcon);
     icon3.setAttribute("id", "three-day-icon");
     document.getElementById("third-box").appendChild(icon3);
   
     document.getElementById("fourth-box").textContent = "";
     let icon4=document.createElement("img");
     icon4.setAttribute("src", fourDaysIcon);
     icon4.setAttribute("id", "four-day-icon");
     document.getElementById("fourth-box").appendChild(icon4);
   
     document.getElementById("fifth-box").textContent = "";
     let icon5=document.createElement("img");
     icon5.setAttribute("src", fiveDaysIcon);
     icon5.setAttribute("id", "five-day-icon");
     document.getElementById("fifth-box").appendChild(icon5);

      })

    
   
   
   
   
  




  
});


  }}
  {
   
  }

  

    })
})
})