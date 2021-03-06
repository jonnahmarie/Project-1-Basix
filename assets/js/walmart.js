function getHandSanitizerProducts(upc) {
  // Takes user form inputs..
  var zipCode = 91367
  var radius = 20
  //..and inserts them into the API url.
  var storeIDQueryURL =
    'https://www.walmart.com/store/finder/electrode/api/stores?singleLineAddr=' +
    zipCode +
    '&serviceTypes=pharmacy&distance=' +
    radius
  //Makes the API call to get storeID's..
  $.ajax({
    url: storeIDQueryURL,
    method: 'GET',
  }).then(function (storeResponse) {
    //..and takes those returned storeID's..
    var returnedStores = storeResponse.payload.storesData.stores
    for (i = 0; i < returnedStores.length; i++) {
      var storeID = returnedStores[i].id
      const storeName = returnedStores[i].displayName
      var productQueryURL =
        'https://search.mobile.walmart.com/v1/products-by-code/UPC/' +
        upc +
        '?storeId=' +
        storeID
      //..and makes the API call for product info.
      $.ajax({
        url: productQueryURL,
        method: 'GET',
      }).then(function (productResponse) {
        //..and pushes the product info into the DOM
        //Availability
        var availability = productResponse.data.inStore.inventory.available
        //Image
        var productImg = productResponse.data.common.productImageUrl
        //Title
        var productTitle = productResponse.data.common.name
        //Price
        var productPrice =
          '$' + productResponse.data.inStore.price.priceInCents / 100
        var productURL = productResponse.data.common.productUrl
        // Only displays products that are in-stock
        if (availability) {
          var cell = $('<div class="cell" data-filter="hand-sanitizer"></div>')
          $('#product-container').append(cell)
          var img = $('<img class="thumbnail product-thumbnail"/>')
          img.attr('src', productImg)
          img.appendTo(cell)
          var title = $('<h5 class="product-title"></h5>').append(productTitle)
          title.appendTo(cell)
          var price = $('<p class="product-price"></p>').append(productPrice)
          price.appendTo(cell)
          var storeLogo = $(
            '<img class="store-logo" src="./assets/store-icons/walmart-product-logo.png" alt="Girl in a jacket" width="100px">'
          )
          storeLogo.appendTo(cell)
          var location = $('<p class="product-location"></p>').append(storeName)
          location.appendTo(cell)
          var buyNow = $('<a class="button" href="">Buy Now</a>')
          buyNow.attr('href', productURL)
          buyNow.appendTo(cell)
        }
      })
    }
  })
}
function getMasksProducts(upc) {
  // Takes user form inputs..
  var zipCode = 91367
  var radius = 20
  //..and inserts them into the API url.
  var storeIDQueryURL =
    'https://www.walmart.com/store/finder/electrode/api/stores?singleLineAddr=' +
    zipCode +
    '&serviceTypes=pharmacy&distance=' +
    radius
  //Makes the API call to get storeID's..
  $.ajax({
    url: storeIDQueryURL,
    method: 'GET',
  }).then(function (storeResponse) {
    //..and takes those returned storeID's..
    var returnedStores = storeResponse.payload.storesData.stores
    for (i = 0; i < returnedStores.length; i++) {
      var storeID = returnedStores[i].id
      const storeName = returnedStores[i].displayName
      var productQueryURL =
        'https://search.mobile.walmart.com/v1/products-by-code/UPC/' +
        upc +
        '?storeId=' +
        storeID
      //..and makes the API call for product info.
      $.ajax({
        url: productQueryURL,
        method: 'GET',
      }).then(function (productResponse) {
        //..and pushes the product info into the DOM
        //Availability
        var availability = productResponse.data.inStore.inventory.available
        //Image
        var productImg = productResponse.data.common.productImageUrl
        //Title
        var productTitle = productResponse.data.common.name
        //Price
        var productPrice =
          '$' + productResponse.data.inStore.price.priceInCents / 100
        var productURL = productResponse.data.common.productUrl
        // Only displays products that are in-stock
        if (availability) {
          var cell = $('<div class="cell" data-filter="masks"></div>')
          $('#product-container').append(cell)
          var img = $('<img class="thumbnail product-thumbnail"/>')
          img.attr('src', productImg)
          img.appendTo(cell)
          var title = $('<h5 class="product-title"></h5>').append(productTitle)
          title.appendTo(cell)
          var price = $('<p class="product-price"></p>').append(productPrice)
          price.appendTo(cell)
          var storeLogo = $(
            '<img class="store-logo" src="./assets/store-icons/walmart-product-logo.png" alt="Girl in a jacket" width="100px">'
          )
          storeLogo.appendTo(cell)
          var location = $('<p class="product-location"></p>').append(storeName)
          location.appendTo(cell)
          var buyNow = $('<a class="button" href="">Buy Now</a>')
          buyNow.attr('href', productURL)
          buyNow.appendTo(cell)
        }
      })
    }
  })
}
function getToothpasteProducts(upc) {
  // Takes user form inputs..
  var zipCode = 91367
  var radius = 20
  //..and inserts them into the API url.
  var storeIDQueryURL =
    'https://www.walmart.com/store/finder/electrode/api/stores?singleLineAddr=' +
    zipCode +
    '&serviceTypes=pharmacy&distance=' +
    radius
  //Makes the API call to get storeID's..
  $.ajax({
    url: storeIDQueryURL,
    method: 'GET',
  }).then(function (storeResponse) {
    //..and takes those returned storeID's..
    var returnedStores = storeResponse.payload.storesData.stores
    for (i = 0; i < returnedStores.length; i++) {
      var storeID = returnedStores[i].id
      const storeName = returnedStores[i].displayName
      var productQueryURL =
        'https://search.mobile.walmart.com/v1/products-by-code/UPC/' +
        upc +
        '?storeId=' +
        storeID
      //..and makes the API call for product info.
      $.ajax({
        url: productQueryURL,
        method: 'GET',
      }).then(function (productResponse) {
        //..and pushes the product info into the DOM
        //Availability
        var availability = productResponse.data.inStore.inventory.available
        //Image
        var productImg = productResponse.data.common.productImageUrl
        //Title
        var productTitle = productResponse.data.common.name
        //Price
        var productPrice =
          '$' + productResponse.data.inStore.price.priceInCents / 100
        var productURL = productResponse.data.common.productUrl
        // Only displays products that are in-stock
        if (availability) {
          var cell = $('<div class="cell" data-filter="toothpaste"></div>')
          $('#product-container').append(cell)
          var img = $('<img class="thumbnail product-thumbnail"/>')
          img.attr('src', productImg)
          img.appendTo(cell)
          var title = $('<h5 class="product-title"></h5>').append(productTitle)
          title.appendTo(cell)
          var price = $('<p class="product-price"></p>').append(productPrice)
          price.appendTo(cell)
          var storeLogo = $(
            '<img class="store-logo" src="./assets/store-icons/walmart-product-logo.png" alt="Girl in a jacket" width="100px">'
          )
          storeLogo.appendTo(cell)
          var location = $('<p class="product-location"></p>').append(storeName)
          location.appendTo(cell)
          var buyNow = $('<a class="button" href="">Buy Now</a>')
          buyNow.attr('href', productURL)
          buyNow.appendTo(cell)
        }
      })
    }
  })
}
function getSoapProducts(upc) {
  // Takes user form inputs..
  var zipCode = 91367
  var radius = 20
  //..and inserts them into the API url.
  var storeIDQueryURL =
    'https://www.walmart.com/store/finder/electrode/api/stores?singleLineAddr=' +
    zipCode +
    '&serviceTypes=pharmacy&distance=' +
    radius
  //Makes the API call to get storeID's..
  $.ajax({
    url: storeIDQueryURL,
    method: 'GET',
  }).then(function (storeResponse) {
    //..and takes those returned storeID's..
    var returnedStores = storeResponse.payload.storesData.stores
    for (i = 0; i < returnedStores.length; i++) {
      var storeID = returnedStores[i].id
      const storeName = returnedStores[i].displayName
      var productQueryURL =
        'https://search.mobile.walmart.com/v1/products-by-code/UPC/' +
        upc +
        '?storeId=' +
        storeID
      //..and makes the API call for product info.
      $.ajax({
        url: productQueryURL,
        method: 'GET',
      }).then(function (productResponse) {
        //..and pushes the product info into the DOM
        //Availability
        var availability = productResponse.data.inStore.inventory.available
        //Image
        var productImg = productResponse.data.common.productImageUrl
        //Title
        var productTitle = productResponse.data.common.name
        //Price
        var productPrice =
          '$' + productResponse.data.inStore.price.priceInCents / 100
        var productURL = productResponse.data.common.productUrl
        // Only displays products that are in-stock
        if (availability) {
          var cell = $('<div class="cell" data-filter="soap"></div>')
          $('#product-container').append(cell)
          var img = $('<img class="thumbnail product-thumbnail"/>')
          img.attr('src', productImg)
          img.appendTo(cell)
          var title = $('<h5 class="product-title"></h5>').append(productTitle)
          title.appendTo(cell)
          var price = $('<p class="product-price"></p>').append(productPrice)
          price.appendTo(cell)
          var storeLogo = $(
            '<img class="store-logo" src="./assets/store-icons/walmart-product-logo.png" alt="Girl in a jacket" width="100px">'
          )
          storeLogo.appendTo(cell)
          var location = $('<p class="product-location"></p>').append(storeName)
          location.appendTo(cell)
          var buyNow = $('<a class="button" href="">Buy Now</a>')
          buyNow.attr('href', productURL)
          buyNow.appendTo(cell)
        }
      })
    }
  })
}
function getGloveProducts(upc) {
  // Takes user form inputs..
  var zipCode = 91367
  var radius = 20
  //..and inserts them into the API url.
  var storeIDQueryURL =
    'https://www.walmart.com/store/finder/electrode/api/stores?singleLineAddr=' +
    zipCode +
    '&serviceTypes=pharmacy&distance=' +
    radius
  //Makes the API call to get storeID's..
  $.ajax({
    url: storeIDQueryURL,
    method: 'GET',
  }).then(function (storeResponse) {
    //..and takes those returned storeID's..
    var returnedStores = storeResponse.payload.storesData.stores
    for (i = 0; i < returnedStores.length; i++) {
      var storeID = returnedStores[i].id
      const storeName = returnedStores[i].displayName
      var productQueryURL =
        'https://search.mobile.walmart.com/v1/products-by-code/UPC/' +
        upc +
        '?storeId=' +
        storeID
      //..and makes the API call for product info.
      $.ajax({
        url: productQueryURL,
        method: 'GET',
      }).then(function (productResponse) {
        //..and pushes the product info into the DOM
        //Availability
        var availability = productResponse.data.inStore.inventory.available
        //Image
        var productImg = productResponse.data.common.productImageUrl
        //Title
        var productTitle = productResponse.data.common.name
        //Price
        var productPrice =
          '$' + productResponse.data.inStore.price.priceInCents / 100
        var productURL = productResponse.data.common.productUrl
        // Only displays products that are in-stock
        if (availability) {
          var cell = $('<div class="cell" data-filter="gloves"></div>')
          $('#product-container').append(cell)
          var img = $('<img class="thumbnail product-thumbnail"/>')
          img.attr('src', productImg)
          img.appendTo(cell)
          var title = $('<h5 class="product-title"></h5>').append(productTitle)
          title.appendTo(cell)
          var price = $('<p class="product-price"></p>').append(productPrice)
          price.appendTo(cell)
          var storeLogo = $(
            '<img class="store-logo" src="./assets/store-icons/walmart-product-logo.png" alt="Girl in a jacket" width="100px">'
          )
          storeLogo.appendTo(cell)
          var location = $('<p class="product-location"></p>').append(storeName)
          location.appendTo(cell)
          var buyNow = $('<a class="button" href="">Buy Now</a>')
          buyNow.attr('href', productURL)
          buyNow.appendTo(cell)
        }
      })
    }
  })
}
function getCleaningProducts(upc) {
  // Takes user form inputs..
  var zipCode = 91367
  var radius = 20
  //..and inserts them into the API url.
  var storeIDQueryURL =
    'https://www.walmart.com/store/finder/electrode/api/stores?singleLineAddr=' +
    zipCode +
    '&serviceTypes=pharmacy&distance=' +
    radius
  //Makes the API call to get storeID's..
  $.ajax({
    url: storeIDQueryURL,
    method: 'GET',
  }).then(function (storeResponse) {
    //..and takes those returned storeID's..
    var returnedStores = storeResponse.payload.storesData.stores
    for (i = 0; i < returnedStores.length; i++) {
      var storeID = returnedStores[i].id
      const storeName = returnedStores[i].displayName
      var productQueryURL =
        'https://search.mobile.walmart.com/v1/products-by-code/UPC/' +
        upc +
        '?storeId=' +
        storeID
      //..and makes the API call for product info.
      $.ajax({
        url: productQueryURL,
        method: 'GET',
      }).then(function (productResponse) {
        //..and pushes the product info into the DOM
        //Availability
        var availability = productResponse.data.inStore.inventory.available
        //Image
        var productImg = productResponse.data.common.productImageUrl
        //Title
        var productTitle = productResponse.data.common.name
        //Price
        var productPrice =
          '$' + productResponse.data.inStore.price.priceInCents / 100
        var productURL = productResponse.data.common.productUrl
        // Only displays products that are in-stock
        if (availability) {
          var cell = $(
            '<div class="cell" data-filter="cleaning-products"></div>'
          )
          $('#product-container').append(cell)
          var img = $('<img class="thumbnail product-thumbnail"/>')
          img.attr('src', productImg)
          img.appendTo(cell)
          var title = $('<h5 class="product-title"></h5>').append(productTitle)
          title.appendTo(cell)
          var price = $('<p class="product-price"></p>').append(productPrice)
          price.appendTo(cell)
          var storeLogo = $(
            '<img class="store-logo" src="./assets/store-icons/walmart-product-logo.png" alt="Girl in a jacket" width="100px">'
          )
          storeLogo.appendTo(cell)
          var location = $('<p class="product-location"></p>').append(storeName)
          location.appendTo(cell)
          var buyNow = $('<a class="button" href="">Buy Now</a>')
          buyNow.attr('href', productURL)
          buyNow.appendTo(cell)
        }
      })
    }
  })
}
function getBabyProducts(upc) {
  // Takes user form inputs..
  var zipCode = 91367
  var radius = 20
  //..and inserts them into the API url.
  var storeIDQueryURL =
    'https://www.walmart.com/store/finder/electrode/api/stores?singleLineAddr=' +
    zipCode +
    '&serviceTypes=pharmacy&distance=' +
    radius
  //Makes the API call to get storeID's..
  $.ajax({
    url: storeIDQueryURL,
    method: 'GET',
  }).then(function (storeResponse) {
    //..and takes those returned storeID's..
    var returnedStores = storeResponse.payload.storesData.stores
    for (i = 0; i < returnedStores.length; i++) {
      var storeID = returnedStores[i].id
      const storeName = returnedStores[i].displayName
      var productQueryURL =
        'https://search.mobile.walmart.com/v1/products-by-code/UPC/' +
        upc +
        '?storeId=' +
        storeID
      //..and makes the API call for product info.
      $.ajax({
        url: productQueryURL,
        method: 'GET',
      }).then(function (productResponse) {
        //..and pushes the product info into the DOM
        //Availability
        var availability = productResponse.data.inStore.inventory.available
        //Image
        var productImg = productResponse.data.common.productImageUrl
        //Title
        var productTitle = productResponse.data.common.name
        //Price
        var productPrice =
          '$' + productResponse.data.inStore.price.priceInCents / 100
        var productURL = productResponse.data.common.productUrl
        // Only displays products that are in-stock
        if (availability) {
          var cell = $('<div class="cell" data-filter="baby-products"></div>')
          $('#product-container').append(cell)
          var img = $('<img class="thumbnail product-thumbnail"/>')
          img.attr('src', productImg)
          img.appendTo(cell)
          var title = $('<h5 class="product-title"></h5>').append(productTitle)
          title.appendTo(cell)
          var price = $('<p class="product-price"></p>').append(productPrice)
          price.appendTo(cell)
          var storeLogo = $(
            '<img class="store-logo" src="./assets/store-icons/walmart-product-logo.png" alt="Girl in a jacket" width="100px">'
          )
          storeLogo.appendTo(cell)
          var location = $('<p class="product-location"></p>').append(storeName)
          location.appendTo(cell)
          var buyNow = $('<a class="button" href="">Buy Now</a>')
          buyNow.attr('href', productURL)
          buyNow.appendTo(cell)
        }
      })
    }
  })
}
function getFaceShieldProducts(upc) {
  // Takes user form inputs..
  var zipCode = 91367
  var radius = 20
  //..and inserts them into the API url.
  var storeIDQueryURL =
    'https://www.walmart.com/store/finder/electrode/api/stores?singleLineAddr=' +
    zipCode +
    '&serviceTypes=pharmacy&distance=' +
    radius
  //Makes the API call to get storeID's..
  $.ajax({
    url: storeIDQueryURL,
    method: 'GET',
  }).then(function (storeResponse) {
    //..and takes those returned storeID's..
    var returnedStores = storeResponse.payload.storesData.stores
    for (i = 0; i < returnedStores.length; i++) {
      var storeID = returnedStores[i].id
      const storeName = returnedStores[i].displayName
      var productQueryURL =
        'https://search.mobile.walmart.com/v1/products-by-code/UPC/' +
        upc +
        '?storeId=' +
        storeID
      //..and makes the API call for product info.
      $.ajax({
        url: productQueryURL,
        method: 'GET',
      }).then(function (productResponse) {
        //..and pushes the product info into the DOM
        //Availability
        var availability = productResponse.data.inStore.inventory.available
        //Image
        var productImg = productResponse.data.common.productImageUrl
        //Title
        var productTitle = productResponse.data.common.name
        //Price
        var productPrice =
          '$' + productResponse.data.inStore.price.priceInCents / 100
        var productURL = productResponse.data.common.productUrl
        // Only displays products that are in-stock
        if (availability) {
          var cell = $('<div class="cell" data-filter="face-shields"></div>')
          $('#product-container').append(cell)
          var img = $('<img class="thumbnail product-thumbnail"/>')
          img.attr('src', productImg)
          img.appendTo(cell)
          var title = $('<h5 class="product-title"></h5>').append(productTitle)
          title.appendTo(cell)
          var price = $('<p class="product-price"></p>').append(productPrice)
          price.appendTo(cell)
          var storeLogo = $(
            '<img class="store-logo" src="./assets/store-icons/walmart-product-logo.png" alt="Girl in a jacket" width="100px">'
          )
          storeLogo.appendTo(cell)
          var location = $('<p class="product-location"></p>').append(storeName)
          location.appendTo(cell)
          var buyNow = $('<a class="button" href="">Buy Now</a>')
          buyNow.attr('href', productURL)
          buyNow.appendTo(cell)
        }
      })
    }
  })
}

var handSanitizerProducts = ['810007189963', '072785138643', '850000494220']
var masksProducts = ['860003794203']
var toothpasteProducts = []
var soapProducts = []
var gloveProducts = []
var cleaningProducts = []
var babyProducts = []
var faceShieldProducts = []

// getHandSanitizerProducts(810007189963)
// getMasksProducts(711719541080)
// getToothpasteProducts(711719541080)

for (i = 0; i < handSanitizerProducts.length; i++) {
  getHandSanitizerProducts(handSanitizerProducts[i])
}
for (i = 0; i < masksProducts.length; i++) {
  getMasksProducts(masksProducts[i])
}
for (i = 0; i < toothpasteProducts.length; i++) {
  getToothpasteProducts(toothpasteProducts[i])
}
for (i = 0; i < soapProducts.length; i++) {
  getSoapProducts(soapProducts[i])
}
for (i = 0; i < gloveProducts.length; i++) {
  getGloveProducts(gloveProducts[i])
}
for (i = 0; i < cleaningProducts.length; i++) {
  getCleaningProducts(cleaningProducts[i])
}
for (i = 0; i < babyProducts.length; i++) {
  getBabyProducts(babyProducts[i])
}
for (i = 0; i < faceShieldProducts.length; i++) {
  getFaceShieldProducts(faceShieldProducts[i])
}
