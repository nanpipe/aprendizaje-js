

document.querySelector("#title").innerHTML = "Smart Parking";

document.querySelector("#totalSpots").innerHTML = 50;
document.querySelector("#occupiedSpots").innerHTML = 12;

let occupiedCount = 12; // Need to track state in JS variable

const button = document.querySelector('#addVehicle');
button.addEventListener('click', () => {
 occupiedCount += 1
 document.querySelector("#occupiedSpots").innerHTML = occupiedCount
  window.alert("Vehicle added!")

});

