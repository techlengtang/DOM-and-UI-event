const COLORS = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "black", "white", "gray"];

//
// Get a random color among the list of available colors
//
function randomColor() {
  const randomIndex = Math.floor(Math.random() * COLORS.length);
  return COLORS[randomIndex];
}

//
// Create a new card
//
function createCard() {
  // 1 - Create card container
  const card = document.createElement("div");
  card.classList.add("card");

  // 2 - Set a random background color
  card.style.backgroundColor = randomColor();

  // 3 - Create and set card description
  const description = document.createElement("p");
  description.textContent = "Hello";
  
  // 4 - Create card footer
  const cardFooter = document.createElement("div");
  cardFooter.classList.add("card-footer");

  // 5 - Create remove button
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove Card";

  // 6 - Add event listener to remove the card when clicked
  removeButton.addEventListener("click", function () {
    card.remove();
  });

  // 7 - Append elements to the card
  cardFooter.appendChild(removeButton);
  card.appendChild(description);
  card.appendChild(cardFooter);

  // 8 - Append card to the container
  document.querySelector(".container").appendChild(card);
}

//--------------------------------------------------
// Code Start
//--------------------------------------------------

// Select the create button
const btnCreate = document.querySelector("#create");

// Add click event listener to the create button
btnCreate.addEventListener("click", createCard);
