//navigation
function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("hide");
}

//Current Date
const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};
document.getElementById("current-date").textContent = new Date().toLocaleString(
  "en-GB",
  options
);

//Pancake
new Date().getDay() == 5
  ? (document.getElementById("pancake").innerHTML =
      "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.")
  : (document.getElementById("pancake").style.display = "block");

//Wind Chill
window.onload = function windChill() {
  let temp = parseFloat(document.getElementById("currTemp").textContent);
  let speed = parseFloat(document.getElementById("windSpeed").textContent);
  let output = "N/A";
  if (temp <= 50 && speed >= 3) {
    let f =
      35.74 +
      0.6215 * temp -
      35.75 * Math.pow(speed, 0.16) +
      0.4275 * (temp * Math.pow(speed, 0.16));
    output = Math.round(f);
  }
  document.getElementById("chill").innerHTML = output + " &#8457;";
};

//Image Handleing
const imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px 50px 0px",
};

const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  }, imgOptions);
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}

//Slider
function adjustSlider(sslider) {
  document.getElementById("slidervalue").innerHTML = sslider;
}

//City Info
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
