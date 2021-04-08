const requestURL = "https://djbarbar.github.io/pgbusiness.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (membersObject) {
    const members = membersObject["members"];

    const one = Math.floor(Math.random() * members.length);
    let two = Math.floor(Math.random() * members.length);
    let three = Math.floor(Math.random() * members.length);

    while (one === two || one === three || two === three) {
      two = Math.floor(Math.random() * members.length);
      three = Math.floor(Math.random() * members.length);
    }

    for (let i = 0; i < members.length; i++) {
      if (i == one || i == two || i == three) {
        let card = document.createElement("div");
        card.setAttribute("class", "businessBlock");

        let info = document.createElement("section");
        info.setAttribute("class", "infoBlock");
        let photo = document.createElement("picture");
        photo.setAttribute("class", "photoBlock");

        let h3 = document.createElement("h3");
        let logoImage = document.createElement("img");
        let street = document.createElement("p");
        let cityLine = document.createElement("p");
        let phoneNumber = document.createElement("p");
        let domain = document.createElement("p");

        logoImage.setAttribute("src", members[i].logo);
        logoImage.setAttribute("alt", "Logo");
        logoImage.setAttribute("width", "150");
        logoImage.setAttribute("height", "auto");
        h3.textContent = members[i].business;
        street.textContent = members[i].address;
        cityLine.textContent =
          members[i].city + " " + members[i].state + ", " + members[i].zipcode;
        phoneNumber.textContent = members[i].phonenumber;
        domain.textContent = members[i].webaddress;

        photo.appendChild(logoImage);
        card.appendChild(photo);

        info.appendChild(h3);
        info.appendChild(street);
        info.appendChild(cityLine);
        info.appendChild(phoneNumber);
        info.appendChild(domain);
        card.appendChild(info);

        document.querySelector("div.cards").appendChild(card);
      }
    }
  });
