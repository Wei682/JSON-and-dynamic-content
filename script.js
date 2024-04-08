AOS.init({
    duration: 800,
});

let restaurantGridElement = document.getElementById('restaurantGrid');


let restaurantDatabase = [
  {
    "Name" : "Daigo Sushi Roll Bar",
    "Location" : "Downtown Brooklyn",
    "Address" : "Dekalb Market Hall, 445 Albee Square W, Brooklyn, NY 11201",
    "Category": "Japanese",
    "Website" : "https://daigobrooklyn.com/",
    "Image": ""
  },
  {
    "Name" : "AAA",
    "Location" : "",
    "Address" : "",
    "Category": "",
    "Website" : "",
    "Image": ""
  }
];


for (var i = 0; i < restaurantDatabase.length; i++) {
  createElementProper(restaurantDatabase[i]);
}

function createElementProper(incJSON) {

  let newContentElement = document.createElement("DIV");
  newContentElement.setAttribute('data-aos', 'flip-right');
  newContentElement.classList.add('contentItem');

  let newContentHeading = document.createElement("H2");
  newContentHeading.classList.add('restaurantName');
  newContentHeading.innerText = incJSON['Name'];
  newContentElement.appendChild(newContentHeading);

  let newContentCategory = document.createElement("p");
  newContentCategory.classList.add('restaurantCategory');
  newContentCategory.innerText = "Category: " + incJSON['Category'];
  newContentElement.appendChild(newContentCategory);

  let newContentLocation = document.createElement("p");
  newContentLocation.classList.add('restaurantLocation');
  newContentLocation.innerText = "Location: " + incJSON['Location'];
  newContentElement.appendChild(newContentLocation);

  let newContentAddress = document.createElement("p");
  newContentAddress.classList.add('restaurantAddress');
  newContentAddress.innerText = "Address: " + incJSON['Address'];
  newContentElement.appendChild(newContentAddress);

  /// Add the item to the page
  restaurantGridElement.appendChild(newContentElement);
}

