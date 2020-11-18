//var zipInput = document.getElementsByClassName(.zipCodeInput)
//var storeLocation = document.getElementsByClassName(.radiusInput)
//var subBtn = document.getElementsByClassName(.submitButton)
//var token = accessToken
//var searchItem = 

curl -X POST \
"https://api.kroger.com/v1/connect/oauth2/token" --output - "file_#1.txt" \
-H "Content-Type: application/x-www-form-urlencoded" \
-H "Authorization: Basic {{base64(covidbasix-51b983d7f7138b112504bd92b70dc2503278379140894309237:1KR96mKHsQihUqCxNCjrOeAakNoDEObnz3O9ZSfX)}}" \
-d "grant_type=client_credentials"

// var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://api.kroger.com/v1/locations",
//     "method": "GET",
//     "headers": {
//       "Accept": "application/json",
//       "Authorization": "Bearer {{TEy]w}}"
//     }
//   }

//   $.ajax(settings).done(function (response) {
//     console.log(response);
//   });

//   // decoded access token - TEy]w

//   var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://api.kroger.com/v1/products?filter.brand={{BRAND}}&filter.term={{TERM}}&filter.locationId={{LOCATION_ID}}",
//     "method": "GET",
//     "headers": {
//       "Accept": "application/json",
//       "Authorization": "Bearer {{TOKEN}}"
//     }
//   }
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.kroger.com/v1/locations/{{1400943}}",
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Authorization": "Bearer {{?VJ-*?/R?R*?K,-??/ʬJMQǧ?'e?d???d?%?d?($????d&?+????B}}",
    }
  }  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });

//use the filter.location.near parameter to narrow down close to user radiusInput
//change filter.radiusInMiles to set new mile radius
// var queryURL = "apikey" + storeLocation

// $.ajax ({
//     url: queryURL,
//     method: "GET"
// }).then(function(response) {
//     console.log(response);
//     localStorage.setItem("location", response.location);
//     localStorage.getItem("location");
// }

// //use the product search GET to find products that the user inputs in searchItem
// //use data /products endpoint 
// //must include filter.locationId in the request 
// var queryURL = "apikey" + searchItem

// $.ajax ({
//     url: queryURL,
//     method: "GET"
// }).then(function(response) {
//     console.log(response);
//     localStorage.setItem("searchItem", response.price, response.curbside);
//     localStorage.getItem("response.price, response.curbside");
// }

//product grid = product, store location, radius, price, availability 
