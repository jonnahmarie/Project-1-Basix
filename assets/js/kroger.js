//Kroger API information 
//API KEY token = eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoiWjRGZDNtc2tJSDg4aXJ0N0xCNWM2Zz09IiwidHlwIjoiSldUIn0.eyJhdWQiOiJjb3ZpZGJhc2l4LTUxYjk4M2Q3ZjcxMzhiMTEyNTA0YmQ5MmI3MGRjMjUwMzI3ODM3OTE0MDg5NDMwOTIzNyIsImV4cCI6MTYwNTY1MTk3NSwiaWF0IjoxNjA1NjUwMTcwLCJpc3MiOiJhcGkua3JvZ2VyLmNvbSIsInN1YiI6IjdhNWJiODU3LTk5ZGYtNTM0My1hOThlLTlkM2YwZjNlZWI2MyIsInNjb3BlIjoicHJvZHVjdC5jb21wYWN0IiwiYXV0aEF0IjoxNjA1NjUwMTc1MTAzOTUzMDY5LCJhenAiOiJjb3ZpZGJhc2l4LTUxYjk4M2Q3ZjcxMzhiMTEyNTA0YmQ5MmI3MGRjMjUwMzI3ODM3OTE0MDg5NDMwOTIzNyJ9.Ee9nv6GdzqBo6Y1JzrmLniHoAW0ea-fTqqsTsO7ACp7vNauE0qB9QRREVdItd78-PsDGTVM7LwWUYuHma7nvyMuIPZrM5dq8L9jnzAK_yP4XmnaFq7ce6FFwlWi6Cl6rttajAVsewtvgNgM8LQYZKobnnGSaAYDOehHviQZqnYPmW_dvV7eN1svNvjbKbM97JriqvNLwbZdoX3pgQOj3aVSt6J943_HkPLpIeNsdAoQM9P37kGzH106zMo16jhGu1DY_LnO8pJspzemeOhLaKePT_EheK7EI9rrpRo7ApTqzhyDvwq_qBHf-h7ssjUXfp2oxZyIamiaNNUk0zZVkRw
// "https://api.kroger.com/v1/connect/oauth2/token" --output - "file_#1.txt"
// -H "Content-Type: application/x-www-form-urlencoded"
// -H "Authorization: Basic {{base64(covidbasix-51b983d7f7138b112504bd92b70dc2503278379140894309237:1KR96mKHsQihUqCxNCjrOeAakNoDEObnz3O9ZSfX)}}"
// -d "grant_type=client_credentials"

//     localStorage.setItem("location", response.location);
//     localStorage.getItem("location");
// Adding event listener to the search button 
//$("submitbutton").on("click", function() {

// + zipcodeInput + "&filter.radiusInMiles" + radiusInput
// var zipcodeInput = 23323
// var radiusInput = 30

      
//use the product search GET to find products that the user inputs in the search field
//use data /products endpoint 
//must include filter.locationId in the request 
//     localStorage.setItem("searchItem", response.price);
//     localStorage.getItem("response.price, response.curbside");

  //  var settings = {
  //    async: true,
  //    crossDomain: true,
  //    url: "https://api.kroger.com/v1/products?filter.term=" + product + "&filter.locationId=" + locationID
  //    method: "GET",
  //    headers: {
  //      Accept: "application/json",
  //      Authorization: "Bearer {{eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vYXBpLmtyb2dlci5jb20vdjEvLndlbGwta25vd24vandrcy5qc29uIiwia2lkIjoiWjRGZDNtc2tJSDg4aXJ0N0xCNWM2Zz09IiwidHlwIjoiSldUIn0.eyJhdWQiOiJjb3ZpZGJhc2l4LTUxYjk4M2Q3ZjcxMzhiMTEyNTA0YmQ5MmI3MGRjMjUwMzI3ODM3OTE0MDg5NDMwOTIzNyIsImV4cCI6MTYwNTY1MTk3NSwiaWF0IjoxNjA1NjUwMTcwLCJpc3MiOiJhcGkua3JvZ2VyLmNvbSIsInN1YiI6IjdhNWJiODU3LTk5ZGYtNTM0My1hOThlLTlkM2YwZjNlZWI2MyIsInNjb3BlIjoicHJvZHVjdC5jb21wYWN0IiwiYXV0aEF0IjoxNjA1NjUwMTc1MTAzOTUzMDY5LCJhenAiOiJjb3ZpZGJhc2l4LTUxYjk4M2Q3ZjcxMzhiMTEyNTA0YmQ5MmI3MGRjMjUwMzI3ODM3OTE0MDg5NDMwOTIzNyJ9.Ee9nv6GdzqBo6Y1JzrmLniHoAW0ea-fTqqsTsO7ACp7vNauE0qB9QRREVdItd78-PsDGTVM7LwWUYuHma7nvyMuIPZrM5dq8L9jnzAK_yP4XmnaFq7ce6FFwlWi6Cl6rttajAVsewtvgNgM8LQYZKobnnGSaAYDOehHviQZqnYPmW_dvV7eN1svNvjbKbM97JriqvNLwbZdoX3pgQOj3aVSt6J943_HkPLpIeNsdAoQM9P37kGzH106zMo16jhGu1DY_LnO8pJspzemeOhLaKePT_EheK7EI9rrpRo7ApTqzhyDvwq_qBHf-h7ssjUXfp2oxZyIamiaNNUk0zZVkRw}}"
  //   }
  //  }

  // $.ajax(settings).done(function (response) {
  //   console.log(response);

  // });
// }
//product grid = product, store location, radius, price, availability 
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
  };

  fetch("https://api.kroger.com/v1/locations?filter.zipCode.near=23323&filter.radiusInMiles=30", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
