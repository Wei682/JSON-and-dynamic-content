var allButtonElement = document.getElementById("allButton");
var ManhattanButtonElement = document.getElementById("ManhattanButton");
var BrooklynButtonElement = document.getElementById("BrooklynButton");

AOS.init({
    duration: 800,
});

let restaurantGridElement = document.getElementById('restaurantGrid');

let restaurantDatabase = [
  {
    "Name" : "Daigo Sushi Roll Bar",
    "Location" : "Brooklyn",
    "Address" : "Dekalb Market Hall, 445 Albee Square W, Brooklyn, NY 11201",
    "Category": "Japanese",
    // Image is from https://daigobrooklyn.com/catering/
    "Website" : "https://daigobrooklyn.com/",
    "Image": "Img/Daigo.jpg"
  },
  {
    "Name" : "DIG",
    "Location" : "Brooklyn",
    "Address" : "138 Willoughby St, Brooklyn, NY 11201",
    "Category": "American",
    "Website" : "https://www.diginn.com/city-point",
    // Image is from https://www.downtownbrooklyn.com/listing/dig/
    "Image": "Img/DIG.jpeg"
  },
  {
    "Name" : "Kong Sihk Tong",
    "Location" : "Manhattan",
    "Address" : "65 Bayard St, New York, NY 10013",
    "Category": "Chinese",
    "Website" : "https://kongsihktong.com/",
    // Image is from https://kongsihktong.com/
    "Image": "Img/Kong Sihk Tong.png"
  },
  {
    "Name" : "Han Dynasty",
    "Location" : "Brooklyn",
    "Address" : "Dekalb Market Hall, 1 Dekalb Ave, Brooklyn, NY 11201",
    "Category": "Chinese",
    "Website" : "https://www.handynasty.net/location/han-dynasty-brooklyn/",
    // Image is from https://www.downtownbrooklyn.com/listing/han-dynasty/
    "Image": "Img/Han Dynasty.jpeg"
  },
  {
    "Name" : "Emily: West Village",
    "Location" : "Manhattan",
    "Address" : "35 Downing St, New York, NY 10014",
    "Category": "American",
    "Website" : "https://www.pizzalovesemily.com/location/west-village/",
    // Image is from https://ny.eater.com/2017/6/2/15727040/emily-manhattan-menu
    "Image": "Img/Emily.png"
  },
  {
    "Name" : "Antoya Korean BBQ",
    "Location" : "Manhattan",
    "Address" : "37 W 32nd St, New York, NY 10001",
    "Category": "Korean",
    "Website" : "https://antoyabbq.com/",
    // Image is from https://www.facebook.com/Antoyabbq/photos/a.163163874341039/905323660125053/?type=3
    "Image": "Img/Antoya.jpeg"
  },
  {
    "Name" : "Emporio",
    "Location" : "Manhattan",
    "Address" : "231 Mott St, New York, NY 10012",
    "Category": "Italian",
    "Website" : "https://www.emporiony.com/",
    // Image is from https://www.emporiony.com/
    "Image": "Img/Emporio.jpeg"
  },
  {
    "Name" : "Soothr",
    "Location" : "Manhattan",
    "Address" : "204 E 13th St, New York, NY 10003",
    "Category": "Thailand",
    "Website" : "https://www.soothrnyc.com/",
    "Image": "Img/Soothr.jpeg"
  },
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

  let newContentWebsite = document.createElement("p");
  let newContentLink =  document.createElement("a");
  newContentLink.href = incJSON['Website'];
  newContentLink.textContent = "Visit their website";
  newContentWebsite.appendChild(newContentLink);
  newContentElement.appendChild(newContentWebsite);

  let newImageContainer = document.createElement("div");
  newImageContainer.classList.add("restaurantImageContainer");
  let newImage = document.createElement("IMG");
  newImage.classList.add("restaurantImage");
  newImage.src = incJSON['Image'];
  newImageContainer.appendChild(newImage);
  newContentElement.appendChild(newImageContainer);

  /// Add the item to the page
  restaurantGridElement.appendChild(newContentElement);
}

allButtonElement.addEventListener("click", function(){
  while (restaurantGridElement.firstChild) {
    restaurantGridElement.removeChild(restaurantGridElement.firstChild);
  }
  restaurantGridElement = document.getElementById('restaurantGrid');
  for (var i = 0; i < restaurantDatabase.length; i++) {
    createElementProper(restaurantDatabase[i]);
  }
});

ManhattanButtonElement.addEventListener("click", function(){
  while (restaurantGridElement.firstChild) {
    restaurantGridElement.removeChild(restaurantGridElement.firstChild);
  }
  restaurantGridElement = document.getElementById('restaurantGrid');
  for (var i = 0; i < restaurantDatabase.length; i++) {
    if (restaurantDatabase[i]['Location'] == "Manhattan"){
      createElementProper(restaurantDatabase[i]);
    }
  }
});

BrooklynButtonElement.addEventListener("click", function(){
  while (restaurantGridElement.firstChild) {
    restaurantGridElement.removeChild(restaurantGridElement.firstChild);
  }
  restaurantGridElement = document.getElementById('restaurantGrid');
  for (var i = 0; i < restaurantDatabase.length; i++) {
    if (restaurantDatabase[i]['Location'] == "Brooklyn"){
      createElementProper(restaurantDatabase[i]);
    }
  }
});

