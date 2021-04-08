const date = new Date();
const todaysNumber = date.getDay();

const weekDayName = new Array(7);
weekDayName[0] = "Sunday";
weekDayName[1] = "Monday";
weekDayName[2] = "Tuesday";
weekDayName[3] = "Wednesday";
weekDayName[4] = "Thursday";
weekDayName[5] = "Friday";
weekDayName[6] = "Saturday";

const apiURL =
  "//api.openweathermap.org/data/2.5/onecall?lat=41.3071600&lon=-111.9602200&exclude=minutely,hourly&appid=315763426b2dc240b5321a30597fbda5&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    document.getElementById("currentForecast").textContent =
      weatherInfo.current.weather[0].description;
    document.getElementById("currentTemp").textContent =
      weatherInfo.current.temp + "\xB0" + " F";
    document.getElementById("windSpeed").textContent =
      weatherInfo.current.wind_speed + " mph";
    document.getElementById("currentHumidity").textContent =
      weatherInfo.current.humidity + "%";

    const tempNumber = parseFloat(
      (weatherInfo.textContent = weatherInfo.current.temp)
    );
    const speedNumber = parseFloat(
      (weatherInfo.textContent = weatherInfo.current.wind_speed)
    );

    let windChill = Math.round(
      35.74 +
        0.6215 * tempNumber -
        35.75 * Math.pow(speedNumber, 0.16) +
        0.4275 * tempNumber * Math.pow(speedNumber, 0.16)
    );

    if (tempNumber <= 50 && speedNumber > 3) {
      document.getElementById("windChill").textContent =
        windChill + "\xB0" + "F";
    } else {
      document.getElementById("windChill").textContent = "N/A";
    }

    let threeDayNum = todaysNumber;

    for (i = 0; i < 3; i++) {
      threeDayNum += 1;
      if (threeDayNum === 7) {
        threeDayNum = 0;
      }

      let dayName = document.createElement("h2");
      dayName.textContent = weekDayName[threeDayNum];

      let dayIcon = document.createElement("img");
      let dayIconCode = weatherInfo.daily[i].weather[0].icon;
      let dayIconPath = "//openweathermap.org/img/w/" + dayIconCode + ".png";
      let dayIconAlt = weatherInfo.daily[i].weather[0].description;

      dayIcon.src = dayIconPath;
      dayIcon.alt = dayIconAlt;

      let dayTemp = document.createElement("p");
      dayTemp.textContent = weatherInfo.textContent =
        weatherInfo.daily[i].temp.day + "\xB0";

      let card = document.createElement("div");
      card.appendChild(dayName);
      card.appendChild(dayIcon);
      card.appendChild(dayTemp);

      document.getElementById("card").appendChild(card);
    }
  });
