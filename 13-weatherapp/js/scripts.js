// const apiURL="//api.openweathermap.org/data/2.5/weather?id=5539059&appid=0a14cc69c9de3b9f8234cfe1dfd68e81&units=imperial"

// fetch(apiURL)
// .then((response) => response.json())
// .then((weatherInfo) => {
//     console.log(weatherInfo);

//     document.getElementById('place').innerHTML=weatherInfo.name;
//     document.getElementById('currentTemp').innerHTML=weatherInfo.main.temp;
//     document.getElementById('windSpeed').innerHTML=weatherInfo.wind.speed;

//     const iconcode = weatherInfo.weather[0].icon

//     const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";


//     document.getElementById('weather_icon').src = icon_path;

//     const mydate = new Date();

//     const y = mydate.getDay();
 

//     const myweekday = new Array(7)

//     myweekday[0] = "Sunday";
//     myweekday[1] = "Monday";
//     myweekday[2] = "Tuesday";
//     myweekday[3] = "Wednesday";
//     myweekday[4] = "Thursday";
//     myweekday[5] = "Friday";
//     myweekday[6] = "Saturday";


    
// });

const today = new Date();

const todayDate = today.getDay();

const weekDay = new Array(7);
weekDay[0] = "Sunday";
weekDay[1] = "Monday";
weekDay[2] = "Tuesday";
weekDay[3] = "Wednesday";
weekDay[4] = "Thursday";
weekDay[5] = "Friday";
weekDay[6] = "Saturday";


const apiURLForecast="//api.openweathermap.org/data/2.5/forecast?id=5539059&appid=0a14cc69c9de3b9f8234cfe1dfd68e81&units=imperial"
fetch(apiURLForecast)
.then((response) => response.json())
.then((weatherInfo) => {
console.log(weatherInfo);

document.getElementById("city").innerText = weatherInfo.city.name;

let myList = weatherInfo.list

const todayDayNumber = today.getDay();

let forecastDayNumber = todayDate;

for (i = 0; i <myList.length;i++) {

    var time = myList[i].dt_txt;

    if (time.includes('15:00:00')) {
        forecastDayNumber += 1;
        if (forecastDayNumber === 7) {
            forecastDayNumber = 0;
        }

        let theDayName = document.createElement("span");
        theDayName.textContent = weekDay[forecastDayNumber];
        console.log(">"+weekDay[forecastDayNumber]);

        let theTemp = document.createElement("p");
        theTemp.textContent = weatherInfo.list[i].main.temp + "°";

        let iconcode = weatherInfo.list[i].weather[0].icon;
        let iconPath = "//openweathermap.org/img/wn/" + iconcode + "@2x.png";
        let theIcon = document.createElement("img");
        theIcon.src=iconPath;

        let theDay = document.createElement("div");
        theDay.appendChild(theDayName);
        theDay.appendChild(theTemp);
        theDay.appendChild(theIcon);

        document.getElementById('weatherForecast').appendChild(theDay);
            } //end if
} //end for




});
