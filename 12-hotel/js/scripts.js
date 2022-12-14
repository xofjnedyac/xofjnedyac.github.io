// what is the path to the JSON file?
const apiURL = "../hoteldata.json"

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((myList) => {
    //Once it comes back, display it to the console.
    console.log(myList);
    

    for (i = 0; i < myList.length; i++) {
    
    
    let hotelCard = document.createElement("div");
    hotelCard.classList.add('hotelCard');

    let innerFigure = document.createElement("figure");

    let img = document.createElement("img");
    img.src = myList[i].photo;
    img.alt = "hotel image " + [i];

    let imgCaption = document.createElement("figcaption");
    imgCaption.textContent = myList[i].name;




    let cardBottom = document.createElement("div");
    cardBottom.classList.add('cardBottom');

    let spanLeft = document.createElement("span");

    let iconLeft = document.createElement("i");
    iconLeft.classList.add("icon");
    iconLeft.classList.add("ion-md-car");

    let addressWrapper = document.createElement("div");
    addressWrapper.classList.add("addressWrapper");
    let address = document.createElement("p");
    address.textContent = myList[i].address[0];
    let cityState = document.createElement("p");
    cityState.textContent = myList[i].address[1];

    let spanRight = document.createElement("span");

    let iconRight = document.createElement("i");
    iconRight.classList.add("icon")
    iconRight.classList.add("ion-md-call")

    let phone = document.createElement("p");
    phone.textContent = myList[i].phone;

    spanRight.appendChild(iconRight);
    spanRight.appendChild(phone);

    addressWrapper.appendChild(address);
    addressWrapper.appendChild(cityState);

    spanLeft.appendChild(iconLeft);
    spanLeft.appendChild(addressWrapper);

    cardBottom.appendChild(spanLeft);
    cardBottom.appendChild(spanRight);

    innerFigure.appendChild(img);
    innerFigure.appendChild(imgCaption);

    hotelCard.appendChild(innerFigure);
    hotelCard.appendChild(cardBottom);

    
    
    
    document.getElementById('cardContainer').appendChild(hotelCard);

  }

}); //end of "then" fat arrow function

function newHotelCard() {
  let container=document.querySelector('#cardContainer');






}