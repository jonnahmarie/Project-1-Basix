// The below code fills in the first row of the table
// var zipCode = $('#user-zip')
// var radius = $('#user-radius')
//Parameters for storeID API call
var zipCode = 91367
var radius = 20

var storeIDQueryURL =
  'https://www.walmart.com/store/finder/electrode/api/stores?singleLineAddr=' +
  zipCode +
  '&serviceTypes=pharmacy&distance=' +
  radius

$.ajax({
  url: storeIDQueryURL,
  method: 'GET',
}).then(function (response) {
  var returnedStores = response.payload.storesData.stores
  for (i = 0; i < returnedStores.length; i++) {
    var storeID = returnedStores[i].id
    var upc = 681131381284
    var productQueryURL =
      'https://search.mobile.walmart.com/v1/products-by-code/UPC/' +
      upc +
      '?storeId=' +
      storeID
    $.ajax({
      url: productQueryURL,
      method: 'GET',
    }).then(function (response) {
      var availability = response.data.inStore.inventory.available
      var productInfo = response.data
      var productImg = response.data.common.productImageUrl
      var productTitle = response.data.common.name
      var productPrice = '$' + response.data.inStore.price.priceInCents / 100
      var productURL = response.data.common.productUrl

      if (availability) {
        console.log(productInfo)
        var cell = $('<div class="cell" data-category="hand-sanitizer"></div>')
        $('#product-container').append(cell)

        var img = $('<img class="thumbnail product-thumbnail"/>') //Equivalent: $(document.createElement('img'))
        img.attr('src', productImg)
        img.appendTo(cell)

        var title = $('<h5 class="product-title"></h5>').append(productTitle)
        title.appendTo(cell)

        var price = $('<p class="product-price"></p>').append(productPrice)
        price.appendTo(cell)

        var buyNow = $('<a class="button" href="">Buy Now</a>')
        buyNow.attr('href', productURL)
        buyNow.appendTo(cell)
      }
    })
  }
})

// <div class="cell" data-category="hand-sanitizer">
//   <img class="thumbnail product-thumbnail" src="https://placehold.it/500x600" />
//   <h5 class="product-title">Nulla At Nulla Justo, Eget</h5>
//   <p class="product-price">$400</p>
//   <a href="#" class="button expanded product-url">Buy</a>
// </div>
