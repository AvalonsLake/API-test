const URL =
  "https://iskarr.github.io/austindonovan.github.io/api/business.json";

let cards = document.querySelector("div.cards");
let para = document.createElement("p");

fetch(URL)
  .then((response) => response.json())
  .then((jsObject) => {
    let business = jsObject.business;

    for (let i = 0; i < business.length; i++) {
      // console.log(business[i].name);
      // You must include your javascript below to display the following information:
      // 1. business names, 2.business image,
      // 3. business locations, 4. business descriptions
      // Here is an example for the name to start you off.

      // Creates card and places business name in h2 element
      let card = document.createElement("section");
      // Adds a classname to the section element above
      card.className = "card";
      let h2 = document.createElement("h2");
      h2.textContent = business[i].name;

      document.querySelector("div.cards").appendChild(card);

      // Create the image location, you can look up how to add image using javascript
      let cont = document.createElement("div");
      cont.className = "imgcontainer";
      let img = document.createElement("img");
      img.src = business[i].imageurl;
      cont.appendChild(img);
      card.appendChild(cont);
      card.appendChild(h2);

      // Include a business location
      let loc = document.createElement("p");
      loc.textContent = `📍 ${business[i].address}`;
      card.appendChild(loc);

      // Include a business Description
      let des = document.createElement("p");
      des.textContent = business[i].description;
      des.className = "des";
      card.appendChild(des);

      console.log(business[i]);
    }
  });
