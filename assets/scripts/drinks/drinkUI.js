const drinkSearchTemplate = require('../templates/drink-search.handlebars')
const drinkCabinetTemplate = require('../templates/drinks-cabinet.handlebars')
const ingredientSearchTemplate = require('../templates/ingredient-search.handlebars')

const store = require('../store')


const getRandomDrinkSuccess = function (data) {
  store.drinks = data.drinks[0]

  console.log('got random')
  console.log(store)
  $('#testData').html(data.drinks[0].strIngredient1)
  $('#randomDrinkImg').attr('src', data.drinks[0].strDrinkThumb)
  $('#randomDrinkName').text(data.drinks[0].strDrink)

  $('#randomIngredient1').text(data.drinks[0].strIngredient1)
  $('#randomIngredient2').text(data.drinks[0].strIngredient2)
  $('#randomIngredient3').text(data.drinks[0].strIngredient3)
  $('#randomIngredient4').text(data.drinks[0].strIngredient4)
  $('#randomIngredient5').text(data.drinks[0].strIngredient5)
  $('#randomIngredient6').text(data.drinks[0].strIngredient6)

  // modal content
  $('#modalLongTitle').text(`How to make: ${data.drinks[0].strDrink}`)

  $('#modalIngredient1').text(data.drinks[0].strIngredient1)
  $('#modalIngredient2').text(data.drinks[0].strIngredient2)
  $('#modalIngredient3').text(data.drinks[0].strIngredient3)
  $('#modalIngredient4').text(data.drinks[0].strIngredient4)
  $('#modalIngredient5').text(data.drinks[0].strIngredient5)
  $('#modalIngredient6').text(data.drinks[0].strIngredient6)
  $('#modalIngredient7').text(data.drinks[0].strIngredient7)
  $('#modalIngredient8').text(data.drinks[0].strIngredient8)

  $('#modalQuantity1').text(data.drinks[0].strMeasure1)
  $('#modalQuantity2').text(data.drinks[0].strMeasure2)
  $('#modalQuantity3').text(data.drinks[0].strMeasure3)
  $('#modalQuantity4').text(data.drinks[0].strMeasure4)
  $('#modalQuantity5').text(data.drinks[0].strMeasure5)
  $('#modalQuantity6').text(data.drinks[0].strMeasure6)
  $('#modalQuantity7').text(data.drinks[0].strMeasure7)
  $('#modalQuantity8').text(data.drinks[0].strMeasure8)

  $('#modalInstructions').text(data.drinks[0].strInstructions)
  $('#modalGlass').text(`Best served in a ${data.drinks[0].strGlass.toLowerCase()}`)

  // end modal content
}

const searchDrinkDatabaseSuccess = (data) => {
  const showSearch = drinkSearchTemplate({
    drinks: data.drinks

    // this above line need to be fixed
  })

  $('#searchResults').html(showSearch)
  $('#searchResults').css('display', 'block')
  $('#homepage').css('display', 'none')
  $('#ingredientSearchField').css('display', 'none')
  $('#cabinet').css('display', 'none')

}

const searchIngredientDatabaseSuccess = (data) => {
  const showIngredientSearch = ingredientSearchTemplate({
    drinks: data.drinks
  })

  $('#ingredientSearchField').html(showIngredientSearch)
  $('#ingredientSearchField').css('display', 'block')
  $('#homepage').css('display', 'none')
  $('#searchResults').css('display', 'none')
  $('#cabinet').css('display', 'none')

  // $('#homepage').css('display', 'none')
}

const getIngredientSuccess = function (data) {
  store.drinksFromIngredientSearch = data.drinks[0]

  $('#ingredientSearchModalIngredient1').text(data.drinks[0].strIngredient1)
  $('#ingredientSearchModalIngredient2').text(data.drinks[0].strIngredient2)
  $('#ingredientSearchModalIngredient3').text(data.drinks[0].strIngredient3)
  $('#ingredientSearchModalIngredient4').text(data.drinks[0].strIngredient4)
  $('#ingredientSearchModalIngredient5').text(data.drinks[0].strIngredient5)
  $('#ingredientSearchModalIngredient6').text(data.drinks[0].strIngredient6)
  $('#ingredientSearchModalIngredient7').text(data.drinks[0].strIngredient7)
  $('#ingredientSearchModalIngredient8').text(data.drinks[0].strIngredient8)

  $('#ingredientSearchModalQuantity1').text(data.drinks[0].strMeasure1)
  $('#ingredientSearchModalQuantity2').text(data.drinks[0].strMeasure2)
  $('#ingredientSearchModalQuantity3').text(data.drinks[0].strMeasure3)
  $('#ingredientSearchModalQuantity4').text(data.drinks[0].strMeasure4)
  $('#ingredientSearchModalQuantity5').text(data.drinks[0].strMeasure5)
  $('#ingredientSearchModalQuantity6').text(data.drinks[0].strMeasure6)
  $('#ingredientSearchModalQuantity7').text(data.drinks[0].strMeasure7)
  $('#ingredientSearchModalQuantity8').text(data.drinks[0].strMeasure8)

  $('#ingredientSearchModalInstructions').text(data.drinks[0].strInstructions)
  $('#ingredientSearchModalGlass').text(`Best served in a ${data.drinks[0].strGlass.toLowerCase()}`)
}


const addToCabinetSuccess = function () {

  console.log('added to cabinet')
}

const getCabinetSuccess = (data) => {
  const showCabinet = drinkCabinetTemplate({
    drinks: data.drinks
  })
  console.log(data)
  $('#cabinet').html(showCabinet)
  $('#searchResults').css('display', 'none')
  $('#ingredientSearchField').css('display', 'none')
}

const onUpdateDrinkSuccess = function () {
  $('.clearModal').modal('hide')
  $('#cabinetButton').click()

}
const failure = function () {
  console.log('request failed')
}

module.exports = {
  getRandomDrinkSuccess,
  searchDrinkDatabaseSuccess,
  searchIngredientDatabaseSuccess,
  addToCabinetSuccess,
  getCabinetSuccess,
  onUpdateDrinkSuccess,
  getIngredientSuccess,
  failure
}
