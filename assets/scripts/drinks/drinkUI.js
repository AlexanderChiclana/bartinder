const drinkSearchTemplate = require('../templates/drink-search.handlebars')


const getRandomDrinkSuccess = function (data) {

  console.log('got random')
  console.log(data)
  $('#testData').html(data.drinks[0].strIngredient1)
  $("#randomDrinkImg").attr("src", data.drinks[0].strDrinkThumb)
  $('#randomDrinkName').text(data.drinks[0].strDrink)

  $("#randomIngredient1").text(data.drinks[0].strIngredient1)
  $("#randomIngredient2").text(data.drinks[0].strIngredient2)
  $("#randomIngredient3").text(data.drinks[0].strIngredient3)
  $("#randomIngredient4").text(data.drinks[0].strIngredient4)
  $("#randomIngredient5").text(data.drinks[0].strIngredient5)
  $("#randomIngredient6").text(data.drinks[0].strIngredient6)

  // modal content
  $('#modalLongTitle').text(`How to make: ${data.drinks[0].strDrink}`)

  $("#modalIngredient1").text(data.drinks[0].strIngredient1)
  $("#modalIngredient2").text(data.drinks[0].strIngredient2)
  $("#modalIngredient3").text(data.drinks[0].strIngredient3)
  $("#modalIngredient4").text(data.drinks[0].strIngredient4)
  $("#modalIngredient5").text(data.drinks[0].strIngredient5)
  $("#modalIngredient6").text(data.drinks[0].strIngredient6)
  $("#modalIngredient7").text(data.drinks[0].strIngredient7)
  $("#modalIngredient8").text(data.drinks[0].strIngredient8)

  $("#modalQuantity1").text(data.drinks[0].strMeasure1)
  $("#modalQuantity2").text(data.drinks[0].strMeasure2)
  $("#modalQuantity3").text(data.drinks[0].strMeasure3)
  $("#modalQuantity4").text(data.drinks[0].strMeasure4)
  $("#modalQuantity5").text(data.drinks[0].strMeasure5)
  $("#modalQuantity6").text(data.drinks[0].strMeasure6)
  $("#modalQuantity7").text(data.drinks[0].strMeasure7)
  $("#modalQuantity8").text(data.drinks[0].strMeasure8)

 $("#modalInstructions").text(data.drinks[0].strInstructions)
 $("#modalGlass").text(`Best served in a ${data.drinks[0].strGlass.toLowerCase()}`)

  // end modal content
}

const searchDrinkDatabaseSuccess = (data) => {
  const showSearch = drinkSearchTemplate({
    drinks: data.drinks
    // this above line need to be fixed
  })
  $('#searchResults').html(showSearch)
}

const failure = function () {
  console.log('request failed')
}

module.exports = {
  getRandomDrinkSuccess,
  searchDrinkDatabaseSuccess,
  failure
}
