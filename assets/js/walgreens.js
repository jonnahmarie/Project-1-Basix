// store locator API
var zipCode = "91344";
var radius = "25";
var radiusInput = function () {
    var lessFive = $("option").val("Less than 5 miles");
    console.log(lessFive)
}
console.log(radiusInput)

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
      r: radius,
      s: 100,
      requestType: 'locator',
    }),
  }
  
//makes API call for store number based on location
  $.ajax(settings).then(function (response) {
      // store inventory API
    //   console.log(response)
    const storeArray = [];
    const storeNum = response.results.forEach((element) => {
        let storeId = element.storeNumber;
        storeArray.push(storeId)
        // console.log(storeId)
    });
    // console.log(storeArray)
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
          })
    }
  });



