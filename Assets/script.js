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

            //uses variables above to create variables for ALL NEEDED DATEs
let todaysDate=(monthOfYear) + "/" + (dayOfYear) + "/" + (year);
let tomorrowsDate=(monthOfYear) + "/" + (dayOfYear + 1) + "/" + (year);
let twoDaysDate=(monthOfYear) + "/" + (dayOfYear + 2) + "/" + (year);
let threeDaysDate=(monthOfYear) + "/" + (dayOfYear + 3) + "/" + (year);
let fourDaysDate=(monthOfYear) + "/" + (dayOfYear + 4) + "/" + (year);
let fiveDaysDate=(monthOfYear) + "/" + (dayOfYear + 5) + "/" + (year);

let cities=JSON.parse(localStorage.getItem("cities")) || [];
console.log(cities);
//takes cities (as a string) out of local storage and converts it back to an array

//changes cities from a string in local storage to an object

                    //event listener
searchButton.addEventListener('click', function() {

  let userCityChoice=userTextInput.value;
   
    cities.push(userCityChoice);
    //pushes the input value to the end of the "cities" array
    localStorage.setItem("cities", (JSON.stringify(cities)));
    //converts "cities" into a string to go in local storage
   
   let oneDayURL = baseURL + "data/2.5/weather?q=" + userCityChoice + "&appid=" + apiKey + "&units=imperial";
    //uses the base url and required queries to create a url to access the info in the large white box

  //today weather fetch

  //fetches todays weather
  fetch(oneDayURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (dataOneDay) {

    //variables for todays wind, humidity, temp, icon

    let windSpeedOneDay=(dataOneDay.wind.speed);
    let humidityOneDay=(dataOneDay.main.humidity);
    let tempOneDay=(dataOneDay.main.temp);
    let iconOneDay ="" + "https://openweathermap.org/img/w/" + dataOneDay.weather[0].icon + ".png";

                            //big white box
    
    //created img element for the icon and set its id
      let icon=document.createElement("img");
      icon.setAttribute("src", iconOneDay);
      icon.setAttribute("id", "icon-one-day");

      //todays date, temp, wind, humidity
      document.getElementById("big-white-header").textContent=(userCityChoice) + " " + "(" + (todaysDate + ")");
      //append img element onto the page
      document.getElementById("big-white-header").appendChild(icon);
      document.getElementById("big-white-temp").textContent="Temp: " + (tempOneDay) + '\xB0' + "F";
      document.getElementById("big-white-wind").textContent="Wind: " + (windSpeedOneDay) + " MPH";
      document.getElementById("big-white-humidity").textContent="Humidity: " + (humidityOneDay) + " %";
 
                            //5 day forecast

    //created new url for the 5 day forecast
    let forecastURL = baseURL + "data/2.5/forecast?q=" + userCityChoice + "&appid=" + apiKey + "&units=imperial";

    //new fetch request for 5 day forecast
    fetch(forecastURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (dataForecast) {


                                  //5 day temp
    //use dt (date time) instead of w/ for loop, start
    //if statement dt

  //created variables for an icon for each of the 5 days
  let tomorrowsIcon="https://openweathermap.org/img/w/" + dataForecast.list[0].weather[0].icon + ".png";
  let twoDaysIcon="https://openweathermap.org/img/w/" + dataForecast.list[8].weather[0].icon + ".png";
  let threeDaysIcon="https://openweathermap.org/img/w/" + dataForecast.list[16].weather[0].icon + ".png";
  let fourDaysIcon="https://openweathermap.org/img/w/" + dataForecast.list [24].weather[0].icon + ".png";
  let fiveDaysIcon="https://openweathermap.org/img/w/" + dataForecast.list[0].weather[0].icon + ".png";

  //created element for each icon, appended onto page
  document.getElementById("first-box").textContent = "";//makes it so the text area is cleared once the button is hit again so the icons don't compile
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


  //variables for each of the 5 days temp
   let tomorrowsTemp= dataForecast.list[0].main.temp;
   let twoDaysTemp= dataForecast.list[8].main.temp;
   let threeDaysTemp= dataForecast.list[16].main.temp;
   let fourDaysTemp= dataForecast.list[24].main.temp;
   let fiveDaysTemp= dataForecast.list[32].main.temp;



                    //5 day wind
    //variables for each of the 5 days wind
   let tomorrowsWind= dataForecast.list[0].wind.speed;
   let twoDaysWind= dataForecast.list[8].wind.speed;
   let threeDaysWind= dataForecast.list[16].wind.speed;
   let fourDaysWind= dataForecast.list[24].wind.speed;
   let fiveDaysWind= dataForecast.list[32].wind.speed;

                    //5 days humidity
  //variables for each of the 5 days wind
   let tomorrowsHumidity= dataForecast.list[0].main.humidity;
   let twoDaysHumidity= dataForecast.list[8].main.humidity;
   let threeDaysHumidity= dataForecast.list[16].main.humidity;
   let fourDaysHumidity= dataForecast.list[24].main.humidity;
   let fiveDaysHumidity= dataForecast.list[32].main.humidity;

                //tomorrow forecast
      //inputs text content of tomorrows date
   document.getElementById("tomorrow-date").textContent=(tomorrowsDate);
      //inputs text content of tomorrows temp
   document.getElementById("tomorrow-temp").textContent="Temp: " + (tomorrowsTemp)  + '\xB0' + "F";
      //inputs text content of tomorrows wind
   document.getElementById("tomorrow-wind").textContent="Wind: " + (tomorrowsWind) + " MPH";
      //inputs text content of tomorrows humid
   document.getElementById("tomorrow-humidity").textContent="Humidity: " + (tomorrowsHumidity) + " %";

                    //2 days forecast
      //same as above but for 2nd day
   document.getElementById("two-days-date").textContent=(twoDaysDate);
   document.getElementById("two-days-temp").textContent="Temp: " + (twoDaysTemp)  + '\xB0' + "F";
   document.getElementById("two-days-wind").textContent="Wind: " + (twoDaysWind) + " MPH";
   document.getElementById("two-days-humidity").textContent="Humidity: " + (twoDaysHumidity) + " %";
  
                    //3 day forecast
      //same as above but for 3rd day
   document.getElementById("three-days-date").textContent=(threeDaysDate);
    document.getElementById("three-days-temp").textContent="Temp: " + (threeDaysTemp)  + '\xB0' + "F";
    document.getElementById("three-days-wind").textContent="Wind: " + (threeDaysWind) + " MPH";
    document.getElementById("three-days-humidity").textContent="Humidity: " + (threeDaysHumidity) + " %";

                  //4 day forecast

   //same as above but for 4th day
    document.getElementById("four-days-date").textContent=(fourDaysDate);
    //  document.getElementById("two-days-icon").textContent=(tomorrowsIcon);
     document.getElementById("four-days-temp").textContent="Temp: " + (fourDaysTemp)  + '\xB0' + "F";
     document.getElementById("four-days-wind").textContent="Wind: " + (fourDaysWind) + " MPH";
     document.getElementById("four-days-humidity").textContent="Humidity: " + (fourDaysHumidity) + " %";

                    //5 day forecast
      //same as above but for 5th day

     document.getElementById("five-days-date").textContent=(fiveDaysDate);
    //  document.getElementById("two-days-icon").textContent=(tomorrowsIcon);
     document.getElementById("five-days-temp").textContent="Temp: " + (fiveDaysTemp)  + '\xB0' + "F";
     document.getElementById("five-days-wind").textContent="Wind: " + (fiveDaysWind) + " MPH";
     document.getElementById("five-days-humidity").textContent="Humidity: " + (fiveDaysHumidity) + " %";

displayHistory();
            //calls displayHistory function
function displayHistory() {
//container that holds the search history buttons
  let historyButtonContainer=document.getElementById("history-button-container");
  historyButtonContainer.innerHTML="";
  //innerHTML empty string clears the buttons then prints the full array onto buttons each time its clicked. before i had this, i was getting duplicates because it was printing the entire array on top of the buttons already on the screen
  
  for (let i = 0; i < cities.length; i++) {
    //this for loop prints a new search history button each time the search button is clicked

  // let cities=JSON.parse(localStorage.getItem("cities")) || [];
   let searchHistoryButtons=document.createElement("button")
 
   //makes the text content of the history button whatever number of the array we're on
  searchHistoryButtons.textContent=cities[i];
  //adds the bootstrap class to the buttons
  searchHistoryButtons.classList.add("btn", "btn-primary");
  
  //using the history button container to append its child/children onto the page (search history buttons)
  historyButtonContainer.appendChild(searchHistoryButtons);
  
  //added event listener for search history buttons that were just created
  searchHistoryButtons.addEventListener('click', function(){
  
    //puts todays date on the
  document.getElementById("big-white-header").textContent=(searchHistoryButtons.textContent) + " " + "(" + (todaysDate + ")");

  //put search history buttons text content into a variable
  let searchHistoryButtonText=searchHistoryButtons.textContent;

  //created new variable using base url and text from search history buttons
  let searchHistoryURL = baseURL + "data/2.5/weather?q=" + searchHistoryButtonText + "&appid=" + apiKey + "&units=imperial"; //units imperial makes it fahrenheit

//new fetch request with new url for search history buttons
fetch(searchHistoryURL)
    .then(function(response) {
      return response.json();
    })
    .then(function(dataSearch) {

      //icon for big white box when search history buttons are clicked

  let iconOneDay ="" + "https://openweathermap.org/img/w/" + dataSearch.weather[0].icon + ".png";
  let icon=document.createElement("img");
  icon.setAttribute("src", iconOneDay);
  icon.setAttribute("id", "icon-one-day");
  document.getElementById("big-white-header").appendChild(icon);

      //varibles for wind, humidity, temp for big white box
      let windSearchButton=(dataSearch.wind.speed);
      let humiditySearchButton=(dataSearch.main.humidity);
      let tempSearchButton=(dataSearch.main.temp);

      document.getElementById("big-white-temp").textContent="Temp: " + (tempSearchButton) + '\xB0' + "F";
      document.getElementById("big-white-wind").textContent="Wind: " + (windSearchButton) + " MPH";
      document.getElementById("big-white-humidity").textContent="Humidity: " + (humiditySearchButton) + " %";

    })
    //new url for 5 day forecast of search history buttons
    let search5DayURL = baseURL + "data/2.5/forecast?q=" + searchHistoryButtonText + "&appid=" + apiKey + "&units=imperial";

    //fetches 5 day forecast of search history button
 fetch(search5DayURL)  
      .then(function(response) {
        return response.json();
      })
      .then(function(data5day){

        //variables of icons for each day
        let tomorrowsIcon="https://openweathermap.org/img/w/" + data5day.list[0].weather[0].icon + ".png";
        let twoDaysIcon="https://openweathermap.org/img/w/" + data5day.list[8].weather[0].icon + ".png";
        let threeDaysIcon="https://openweathermap.org/img/w/" + data5day.list[16].weather[0].icon + ".png";
        let fourDaysIcon="https://openweathermap.org/img/w/" + data5day.list [24].weather[0].icon + ".png";
        let fiveDaysIcon="https://openweathermap.org/img/w/" + data5day.list [32].weather[0].icon + ".png";

         //variables of temp for each day
        let tomorrowsTemp= data5day.list[0].main.temp;
        let twoDaysTemp= data5day.list[8].main.temp;
        let threeDaysTemp= data5day.list[16].main.temp;
        let fourDaysTemp= data5day.list[24].main.temp;
        let fiveDaysTemp= data5day.list[32].main.temp;
        
         //variables of wind for each day
        let tomorrowsWind= data5day.list[0].wind.speed;
        let twoDaysWind= data5day.list[8].wind.speed;
        let threeDaysWind= data5day.list[16].wind.speed;
        let fourDaysWind= data5day.list[24].wind.speed;
        let fiveDaysWind= data5day.list[32].wind.speed;
        
         //variables of humidity for each day
        let tomorrowsHumidity= data5day.list[0].main.humidity;
        let twoDaysHumidity= data5day.list[8].main.humidity;
        let threeDaysHumidity= data5day.list[16].main.humidity;
        let fourDaysHumidity= data5day.list[24].main.humidity;
        let fiveDaysHumidity= data5day.list[32].main.humidity;

        //txt content for tomorrows temp, wind, humid
   document.getElementById("tomorrow-temp").textContent="Temp: " + (tomorrowsTemp)  + '\xB0' + "F";
     document.getElementById("tomorrow-wind").textContent="Wind: " + (tomorrowsWind) + " MPH";
   document.getElementById("tomorrow-humidity").textContent="Humidity: " + (tomorrowsHumidity) + " %";
        
        //txt content for two days temp, wind, humid
  //  document.getElementById("two-days-date").textContent=(twoDaysDate);

   document.getElementById("two-days-temp").textContent="Temp: " + (twoDaysTemp)  + '\xB0' + "F";
   document.getElementById("two-days-wind").textContent="Wind: " + (twoDaysWind) + " MPH";
   document.getElementById("two-days-humidity").textContent="Humidity: " + (twoDaysHumidity) + " %";
  
         //txt content for three days temp, wind, humid
    document.getElementById("three-days-temp").textContent="Temp: " + (threeDaysTemp)  + '\xB0' + "F";
    document.getElementById("three-days-wind").textContent="Wind: " + (threeDaysWind) + " MPH";
    document.getElementById("three-days-humidity").textContent="Humidity: " + (threeDaysHumidity) + " %";

        //txt content for four days temp, wind, humid
     document.getElementById("four-days-temp").textContent="Temp: " + (fourDaysTemp)  + '\xB0' + "F";
     document.getElementById("four-days-wind").textContent="Wind: " + (fourDaysWind) + " MPH";
     document.getElementById("four-days-humidity").textContent="Humidity: " + (fourDaysHumidity) + " %";

      //txt content for five days temp, wind, humid
     document.getElementById("five-days-temp").textContent="Temp: " + (fiveDaysTemp)  + '\xB0' + "F";
     document.getElementById("five-days-wind").textContent="Wind: " + (fiveDaysWind) + " MPH";
     document.getElementById("five-days-humidity").textContent="Humidity: " + (fiveDaysHumidity) + " %";
   
     //icon 1st box
     document.getElementById("first-box").textContent = "";
     let icon1=document.createElement("img");
     icon1.setAttribute("src", tomorrowsIcon);
     icon1.setAttribute("id", "tomorrow-icon");
     document.getElementById("first-box").appendChild(icon1);
   
       //icon 2nd box
     document.getElementById("second-box").textContent = "";
     let icon2=document.createElement("img");
     icon2.setAttribute("src", twoDaysIcon);
     icon2.setAttribute("id", "two-day-icon");
     document.getElementById("second-box").appendChild(icon2);
        
      //icon 3rd box
     document.getElementById("third-box").textContent = "";
     let icon3=document.createElement("img");
     icon3.setAttribute("src", threeDaysIcon);
     icon3.setAttribute("id", "three-day-icon");
     document.getElementById("third-box").appendChild(icon3);
         //icon 4th box
     document.getElementById("fourth-box").textContent = "";
     let icon4=document.createElement("img");
     icon4.setAttribute("src", fourDaysIcon);
     icon4.setAttribute("id", "four-day-icon");
     document.getElementById("fourth-box").appendChild(icon4);
         //icon 5th box
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