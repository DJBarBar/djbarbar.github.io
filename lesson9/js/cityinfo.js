fetch("https://byui-cit230.github.io/weather/data/towndata.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const cities = jsonObject["towns"];
    const arrCity = ["Fish Haven", "Preston", "Soda Springs"];
    for (let i = 0; i < cities.length; i++) {
      if (arrCity.includes(cities[i].name)) {
        let card = document.createElement("section");
        let info = document.createElement("div");
        let name = document.createElement("h2");
        let image = document.createElement("img");
        let motto = document.createElement("h3");
        let history = document.createElement("p");

        name.textContent = cities[i].name;
        motto.textContent = cities[i].motto;
        image.setAttribute("src", "images/" + cities[i].photo);
        image.setAttribute("alt", "Represetative Picture of " + cities[i].name);
        history.innerHTML =
          "The city of " +
          cities[i].name +
          " was founded in " +
          cities[i].yearFounded +
          ". We invite you to our quiet town where our population is " +
          cities[i].currentPopulation +
          ". The climate here is suitable for most out door activities. The annual percipitation is " +
          cities[i].averageRainfall +
          '" for both rain and snow, making it more ideal than Great Britain. Come visit us for one of our events!';

        info.setAttribute("class", "cityintro");
        info.appendChild(image);
        info.appendChild(history);

        card.appendChild(name);
        card.appendChild(motto);
        card.appendChild(info);

        document.querySelector("div.cityinfo").appendChild(card);
      }
    }
  });
