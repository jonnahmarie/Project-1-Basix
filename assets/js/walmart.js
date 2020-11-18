// The below code fills in the first row of the table
// var zipCode = $('#user-zip')
// var radius = $('#user-radius')
//Parameters for storeID API call
var zipCode = 91367
var radius = 20

var queryURL =
  'https://www.walmart.com/store/finder/electrode/api/stores?singleLineAddr=' +
  zipCode +
  '&serviceTypes=pharmacy&distance=' +
  radius

$.ajax({
  url: queryURL,
  method: 'GET',
}).then(function (response) {
  var returnedStores = response.payload.storesData.stores
  for (i = 0; i < returnedStores.length; i++) {
    var storeID = returnedStores[i].id
    console.log(storeID)
  }
})
