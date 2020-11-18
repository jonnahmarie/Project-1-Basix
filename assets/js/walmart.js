// The below code fills in the first row of the table
var zipCode = $('#user-zip')
var radius = $('#user-radius')

var queryURL =
  'https://www.walmart.com/store/finder/electrode/api/stores?singleLineAddr=' +
  zipCode +
  '&serviceTypes=pharmacy&distance=' +
  radius

$.ajax({
  url: queryURL,
  method: 'GET',
}).then(function (response) {})

$('#submit-button').click(function () {
  $('#user-zip')
})
