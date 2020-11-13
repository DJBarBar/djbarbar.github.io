fetch(
  "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject["prophets"];
    for (let i = 0; i < prophets.length; i++) {
      let card = document.createElement("section");
      let name = document.createElement("h2");
      let birthinfo = document.createElement("p");
      let image = document.createElement("img");

      name.textContent = prophets[i].name + " " + prophets[i].lastname;
      birthinfo.innerHTML =
        "Date of Birth: " +
        prophets[i].birthdate +
        "<br>" +
        "Place of Birth: " +
        prophets[i].birthplace;
      image.setAttribute("src", prophets[i].imageurl);
      image.setAttribute(
        "alt",
        "A picture of a prophet of The Church of Jesus Christ of Latter-day Saints, Prophet:" +
          name
      );

      card.appendChild(name);
      card.appendChild(birthinfo);
      card.appendChild(image);

      document.querySelector("div.cards").appendChild(card);
    }
  });
