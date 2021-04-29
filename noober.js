window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code
  //Create a variable of the list of rides
  let availableRides = json

  //Create a variable representing where to write the rides to from the ride class
  let ridesSection = document.querySelector(`.rides`)
  //Iterate through the list to create the HTML
  for (i=0;i<availableRides.length;i++){
    let availableRide = availableRides[i]
  //crealogic that defines the type of ride
  let dropoffAddress = availableRide.dropoffLocation.address
  let dropoffCity = availableRide.dropoffLocation.city
  let dropoffState = availableRide.dropoffLocation.state
  let dropoffZip = availableRide.dropoffLocation.zip
  let numberOfPassengers = availableRide.numberOfPassengers
  let passengerFirstName = availableRide.passengerDetails.first
  let passengerFLastName = availableRide.passengerDetails.last
  let passengerPhoneNumber = availableRide.passengerDetails.phoneNumber
  let pickupAddress = availableRide.pickupLocation.address
  let pickupCity = availableRide.pickupLocation.city
  let pickupState = availableRide.pickupLocation.state
  let pickupZip = availableRide.pickupLocation.zip
  let isPurple = availableRide.purpleRequested
  let serviceLevel  
  let borderStyles
  if (isPurple == true){
    serviceLevel = `Noober Purple`
    borderStyles = `border-8 border-purple-900`
  } else if (numberOfPassengers > 3) {
    serviceLevel = `Noober XL`
    borderStyles = `border-4 border-gray-900`
  } else {
    serviceLevel = `Noober X`
    borderStyles = `border border-gray-700`
  }

  //add the html to the DOM 
    ridesSection.insertAdjacentHTML(`beforeend`,`
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
    <i class="fas fa-car-side"></i>
    <span>${serviceLevel}</span>
  </h1>

  <div class="${borderStyles} p-4 my-4 text-left">
    <div class="flex">
      <div class="w-1/2">
        <h2 class="text-2xl py-1">${passengerFirstName} ${passengerFLastName}</h2>
        <p class="font-bold text-gray-600">${passengerPhoneNumber}</p>
      </div>
      <div class="w-1/2 text-right">
        <span class="rounded-xl bg-gray-600 text-white p-2">
        ${numberOfPassengers}
        </span>
      </div>
    </div>
    <div class="mt-4 flex">
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">PICKUP</div>
        <p>${pickupAddress}</p>
        <p>${pickupCity}, ${pickupState} ${pickupZip}</p>
      </div>
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">DROPOFF</div>
        <p>${dropoffAddress}</p>
        <p>${dropoffCity}, ${dropoffState} ${dropoffZip}</p>
      </div>
    </div>
  </div>
  `)}
})