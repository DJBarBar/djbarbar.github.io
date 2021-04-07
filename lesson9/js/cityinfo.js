function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("hide");
}

(function fridayBanner() {
  let d = new Date();
  const ban = document.querySelector(".prestonBanner");

  if (d.getDay() == 5) {
    ban.style.display = "block";
  } else {
    ban.style.display = "none";
  }
})();

WebFont.load({
  google: {
    families: ["Abril Fatface", "Poppins"],
  },
});

const options = {
  dateStyle: "full",
};
document.getElementById(
  "current-date"
).textContent = new Date().toLocaleDateString("en-US", options);

const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject["towns"];
    function filterByName(item) {
      if (
        item.name == "Preston" ||
        item.name == "Fish Haven" ||
        item.name == "Soda Springs"
      ) {
        return true;
      }
    }
    let specificTowns = towns.filter(filterByName);
    for (let i = 0; i < specificTowns.length; i++) {
      let card = document.createElement("section");
      let townStats = document.createElement("dl");
      townStats.setAttribute("class", "townStats");
      let photo = document.createElement("img");
      let name = document.createElement("h2");
      let motto = document.createElement("p");
      let yearFoundedDiv = document.createElement("div");
      let currentPopulationDiv = document.createElement("div");
      let averageRainfallDiv = document.createElement("div");
      let yearFoundedNum = document.createElement("dt");
      let currentPopulationNum = document.createElement("dt");
      let averageRainfallNum = document.createElement("dt");
      let yearFoundedLabel = document.createElement("dd");
      let currentPopulationLabel = document.createElement("dd");
      let averageRainfallLabel = document.createElement("dd");
      name.textContent = specificTowns[i].name;
      motto.textContent = specificTowns[i].motto;
      yearFoundedNum.textContent = specificTowns[i].yearFounded;
      currentPopulationNum.textContent = specificTowns[i].currentPopulation;
      averageRainfallNum.textContent = specificTowns[i].averageRainfall + '"';
      yearFoundedLabel.textContent = "Founded";
      currentPopulationLabel.textContent = "Population";
      averageRainfallLabel.textContent = "Rain/yr";
      photo.setAttribute("src", "images/" + specificTowns[i].photo);
      photo.setAttribute("alt", "The lovely town of " + specificTowns[i].name);
      card.appendChild(photo);
      card.appendChild(name);
      card.appendChild(motto);
      card.appendChild(townStats);
      townStats.appendChild(yearFoundedDiv);
      townStats.appendChild(currentPopulationDiv);
      townStats.appendChild(averageRainfallDiv);
      yearFoundedDiv.appendChild(yearFoundedNum);
      yearFoundedDiv.appendChild(yearFoundedLabel);
      currentPopulationDiv.appendChild(currentPopulationNum);
      currentPopulationDiv.appendChild(currentPopulationLabel);
      averageRainfallDiv.appendChild(averageRainfallNum);
      averageRainfallDiv.appendChild(averageRainfallLabel);
      document.querySelector("div.cards").appendChild(card);
    }
  });
