// store locator API
var zipCode = "91344";
var userRadius = "20";

// var storeReturn = function () {
//     // var radiusInput = $("option :selected").text();
//     var radiusInput = "5-10 miles";
//     s = "0";

//     if (radiusInput === "Less than 5 miles") {
//         s = "15";
//     } else if (radiusInput === "5-10 miles") {
//         s = "20";
//     } else if (radiusInput === "10-20 miles") {
//         s = "45";
//     } else if (radiusInput === "More than 20 miles") {
//         s = "60";
//     }
// };

// storeReturn();

var settings = {
    url: 'https://services.walgreens.com/api/stores/search/v2',
    method: 'POST',
    timeout: 0,
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      apiKey: '2KkNRGLlzhp6kiPoz1iV2kPWr59a4NfA',
      affId: 'storesapi',
      zip: zipCode,
      r: userRadius,
      s: 20,
      requestType: 'locator',
    }),
  };
  
//makes API call for store number based on location
  $.ajax(settings).then(function (response) {
      // store inventory API
    //   console.log(response)
      var results = response.results;
      const storeArray = [];
    //   console.log(results);
      for (var i = 0; i < results.length; i++) {
        var responseRadius = results[i].distance;
        var storeId = results[i].storeNumber;
        // console.log(responseRadius);

        if (responseRadius < userRadius) {
            storeArray.push(storeId);
        }

      }

    for (var i = 0; i < storeArray.length; i++) {
        var settings = {
            url: 'https://services.walgreens.com/api/products/inventory/v2',
            method: 'POST',
            timeout: 0,
            headers: {
              'Content-Type': 'application/json',
            },
            data: JSON.stringify({
              apiKey: '2KkNRGLlzhp6kiPoz1iV2kPWr59a4NfA',
              affId: 'storesapi',
              store: storeArray[i],
              planograms: ['05400010060'],
            }),
          }
          $.ajax(settings).done(function (response) {
            console.log(response)
          });
    };
  });



