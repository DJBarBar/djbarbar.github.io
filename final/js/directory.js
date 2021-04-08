const requestURL = "https://djbarbar.github.io/pgbusiness.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (membersObject) {
    const members = membersObject["members"];
    console.log(members);

    for (let i = 0; i < members.length; i++) {
      let card = document.createElement("div");
      card.setAttribute("class", "businessBlock");

      let info = document.createElement("section");
      info.setAttribute("class", "infoBlock");

      let logo = document.createElement("picture");
      logo.setAttribute("class", "logoBlock");

      let photo = document.createElement("picture");
      photo.setAttribute("class", "photoBlock");

      let h3 = document.createElement("ul");
      let logoImage = document.createElement("img");
      let street = document.createElement("li");
      let cityLine = document.createElement("li");
      let phoneNumber = document.createElement("li");
      let domain = document.createElement("li");
      let photoimg = document.createElement("img");

      logoImage.setAttribute("src", members[i].logo);
      logoImage.setAttribute("alt", "Logo");
      logoImage.setAttribute("width", "150");
      logoImage.setAttribute("height", "auto");

      photoimg.setAttribute("src", members[i].imageurl);
      photoimg.setAttribute("alt", "Store Image");
      photoimg.setAttribute("width", "300");
      photoimg.setAttribute("height", "auto");

      h3.textContent = members[i].business;
      street.textContent = members[i].address;
      cityLine.textContent =
        members[i].city + " " + members[i].state + ", " + members[i].zipcode;
      phoneNumber.textContent = members[i].phonenumber;
      domain.textContent = members[i].webaddress;

      logo.appendChild(logoImage);
      photo.appendChild(photoimg);

      card.appendChild(logo);
      info.appendChild(h3);
      info.appendChild(street);
      info.appendChild(cityLine);
      info.appendChild(phoneNumber);
      info.appendChild(domain);
      card.appendChild(info);
      card.appendChild(photo);

      document.querySelector("div.directory").appendChild(card);
    }
  });
