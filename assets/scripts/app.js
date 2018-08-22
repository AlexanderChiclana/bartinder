'use strict'

require('./auth/auth')

const getFormFields = require('../../lib/get-form-fields')
const drinkAPI = require('./drinks/drinkAPI')
const drinkUI = require('./drinks/drinkUI')


$(() => {
  const onGetRandomDrink = function (event) {
    event.preventDefault()
    drinkAPI.getRandomDrink()
      .then(drinkUI.getRandomDrinkSuccess)
      .catch(drinkUI.failure)
  }


  const onSearchDrinkDatabase = function (event) {
    event.preventDefault()

    const data = getFormFields(event.target)
    // console.log(data)
    drinkAPI.searchDrinkDatabase(data)

      .then(drinkUI.searchDrinkDatabaseSuccess)
      .catch(drinkUI.failure)

  }

  const onSearchIngredientDatabase = function (event) {
    event.preventDefault()

    const data = getFormFields(event.target)
    // console.log(data)
    drinkAPI.searchIngredientDatabase(data)

      .then(drinkUI.searchIngredientDatabaseSuccess)
      .catch(drinkUI.failure)

  }

  const onAddToCabinet = function (event) {
    event.preventDefault()
    console.log('working off click')
    drinkAPI.addToCabinet()
      .then(() => onGetCabinet(event))
      .then(() => onGetRandomDrink(event))
      .then(drinkUI.addToCabinetSuccess)
      .catch(drinkUI.failure)
  }

  const onGetCabinet = function (event) {
    event.preventDefault()
    drinkAPI.getCabinet()
      .then(drinkUI.getCabinetSuccess)
      .catch(drinkUI.failure)
  }

  const showHomePage = function () {
    $('#homepage').css('display', 'block')
    $('#searchResults').css('display', 'none')
  }

  const onDeleteDrink = (event) => {
    event.preventDefault()
    console.log('delete button working')
    const drinkID = $(event.target).closest('div').attr('data-id')
    console.log(drinkID)
    drinkAPI.deleteDrink(drinkID)
      .then(() => onGetCabinet(event))
      .catch(drinkUI.failure)
  }

  const onUpdateDrink = function (event) {
    event.preventDefault()
    console.log('updating')
    // const data = getFormFields(event.target.form)
    const data = getFormFields(event.target.form)
    const drinkID = $(event.target).closest('div').attr('data-id')
    console.log(data)
    console.log(drinkID)
    drinkAPI.updateDrink(data, drinkID)
      // .then(() => onGetCabinet(event))
      .then(drinkUI.onUpdateDrinkSuccess)
      .catch(drinkUI.failure)
  }

  const onAddToCabinetFromSearch = function (event) {

    event.preventDefault()
    console.log('adding from results')


    const idDrink= $(event.target).closest('div').attr('data-idDrink')
    const strDrink= $(event.target).closest('div').attr('data-strDrink')
    const strGlass= $(event.target).closest('div').attr('data-strGlass')
    const strInstructions= $(event.target).closest('div').attr('data-strInstructions')
    const strDrinkThumb= $(event.target).closest('div').attr('data-strDrinkThumb')
    const strIngredient1= $(event.target).closest('div').attr('data-strIngredient1')
    const strIngredient2= $(event.target).closest('div').attr('data-strIngredient2')
    const strIngredient3= $(event.target).closest('div').attr('data-strIngredient3')
    const strIngredient4= $(event.target).closest('div').attr('data-strIngredient4')
    const strIngredient5= $(event.target).closest('div').attr('data-strIngredient5')
    const strIngredient6= $(event.target).closest('div').attr('data-strIngredient6')
    const strIngredient7= $(event.target).closest('div').attr('data-strIngredient7')
    const strIngredient8= $(event.target).closest('div').attr('data-strIngredient8')
    const strIngredient9= $(event.target).closest('div').attr('data-strIngredient9')
    const strIngredient10= $(event.target).closest('div').attr('data-strIngredient10')
    const strMeasure1= $(event.target).closest('div').attr('data-strMeasure1')
    const strMeasure2= $(event.target).closest('div').attr('data-strMeasure2')
    const strMeasure3= $(event.target).closest('div').attr('data-strMeasure3')
    const strMeasure4= $(event.target).closest('div').attr('data-strMeasure4')
    const strMeasure5= $(event.target).closest('div').attr('data-strMeasure5')
    const strMeasure6= $(event.target).closest('div').attr('data-strMeasure6')
    const strMeasure7= $(event.target).closest('div').attr('data-strMeasure7')
    const strMeasure8= $(event.target).closest('div').attr('data-strMeasure8')
    const strMeasure9= $(event.target).closest('div').attr('data-strMeasure9')
    const strMeasure10= $(event.target).closest('div').attr('data-strMeasure10')

    drinkAPI.addToCabinetFromSearch(
      idDrink, strDrink, strGlass, strInstructions, strDrinkThumb, strIngredient1,
      strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6,
      strIngredient7, strIngredient8, strIngredient9, strIngredient10, strMeasure1,
      strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7,
      strMeasure8, strMeasure9, strMeasure10
    )

  }

  const onIngredientDetails = function (event) {
    event.preventDefault()

    const drinkID = $(event.target).closest('div').attr('data-id')

    console.log('bringing up modal')
    $('#ingredientModalCenter').modal('toggle');
    drinkAPI.getIngredient(drinkID)
      .then(drinkUI.getIngredientSuccess)
      .catch(drinkUI.failure)


  }


  // click handlers

  $('#randomDrink').on('click', onGetRandomDrink)
  $('#randomDrinkImg').on('click', onGetRandomDrink)

// search bar functions
  $('#drinkSearchForm').on('submit', onSearchDrinkDatabase)
  $('#drinkIngredientSearchForm').on('submit', onSearchIngredientDatabase)


  $('#addtoCabinetButton').on('click', onAddToCabinet)
  $('#addToCabinetModalButton').on('click', onAddToCabinet)

  $('#homepageButton').on('click', showHomePage)
  $('#cabinetButton').on('click', onGetCabinet)

  $('#cabinet').on('click', '.deleteDrink', onDeleteDrink)
  $('#cabinet').on('click', '.updateButton', onUpdateDrink)

  // search features
  $('#searchResults').on('click', '.addSearchResult', onAddToCabinetFromSearch)


  $('#ingredientSearchField').on('click', '.ingredientImage', onIngredientDetails)


  $('#randomDrink').click()
})
