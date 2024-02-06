import { packages } from "./data.js";

// Generates packages and puts them on the page

let packagesHtml = "";

packages.forEach((destination) => {
  packagesHtml += `
  <div class="package-card">
    <div class="package-img">
      <img src="${destination.image}" alt="img" loading="lazy">
    </div>
    <div class="package-details">
      <h4 class="package-name">${destination.name}</h4>
      <p class="package-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nisi nobis asperiores laudantium, earum pariatur.</p>
      <p class="package-days">Stay: ${destination.days} days</p>
      <p class="price">Price: $${destination.price}</p>
      <a href="index.html#contact" class="book-btn">Book Now</a>
    </div>
  </div>
  `;
});

document.querySelector(".js-packages-grid").innerHTML = packagesHtml;


// Search button

//Adds event listeners when search button is clicked or enter is pressed

document.getElementById("searchBtn").addEventListener("click", searchPackages);
document.getElementById("searchInput").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
      searchPackages();
  }
});

// Function that filters packages based on user input

function searchPackages() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const minPrice = parseFloat(document.getElementById("minPrice").value) || 0;
  const maxPrice = parseFloat(document.getElementById("maxPrice").value) || Infinity;

  const packageCards = document.querySelectorAll(".package-card");

  packageCards.forEach((card) => {
    const packageName = card.querySelector(".package-name").innerText.toLowerCase();
    const packagePrice = parseFloat(card.querySelector(".price").innerText.replace("Price: $", ""));

    const nameMatch = packageName.includes(searchInput);
    const priceMatch = packagePrice >= minPrice && packagePrice <= maxPrice;

    if (nameMatch && priceMatch) {
        card.style.display = "block";
    } else {
        card.style.display = "none";
    }
  });

  // refreshes the page

  let closeButton = document.querySelector(".closeSearch");
  closeButton.style.display = "inline";
  closeButton.addEventListener("click", function() {
    location.reload();
  });
};
