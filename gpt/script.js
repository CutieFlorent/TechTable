// Elements data (You can add more elements)
const elements = [
  {
    symbol: "H",
    name: "Hydrogen",
    details:
      "Hydrogen is a chemical element with symbol H and atomic number 1. It is the lightest element.",
  },
  {
    symbol: "He",
    name: "Helium",
    details:
      "Helium is a chemical element with symbol He and atomic number 2. It is a colorless, odorless, tasteless, non-toxic, inert, monatomic gas.",
  },
  // Add more elements here
];

const periodicTable = document.querySelector(".periodic-table");
const elementDetails = document.querySelector(".element-details");

// Function to display element details
function showElementDetails(element) {
  elementDetails.innerHTML = `
      <h2>${element.name}</h2>
      <p>${element.details}</p>
    `;
  elementDetails.style.display = "block";
}

// Function to create elements in the periodic table
elements.forEach((element) => {
  const elementDiv = document.createElement("div");
  elementDiv.classList.add("element");
  elementDiv.textContent = element.symbol;
  elementDiv.addEventListener("click", () => showElementDetails(element));
  periodicTable.appendChild(elementDiv);
});
