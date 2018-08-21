'use strict'

require('./auth/auth')

const getFormFields = require('../../lib/get-form-fields')
const drinkAPI = require('./drinks/drinkAPI')
const drinkUI = require('./drinks/drinkUI')


$(() => {
  const onGetRandomDrink = function () {
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

  const onAddToCabinet = function () {
    event.preventDefault()
    console.log('working off click')
    drinkAPI.addToCabinet()
      .then(drinkUI.addToCabinetSuccess)
      .catch(drinkUI.failure)
  }

  const onGetCabinet = function () {
    event.preventDefault()
    drinkAPI.getCabinet()
      .then(drinkUI.getCabinetSuccess)
      .catch(drinkUI.failure)
  }

  const showHomePage = function () {
    $('#homepage').css('display', 'block')
    $('#searchResults').css('display','none')
  }

  const onDeleteDrink = (event) => {
    event.preventDefault()
    console.log('delete button working')
    // const itemId = $(event.target).closest('div').attr('data-id')
    // bucketApi.deleteBlItem(itemId)
    //   .then(() => onGetBlItems(event))
    //   .catch(bucketUi.failure)
  }

  $('#randomDrink').on('click', onGetRandomDrink)
  $('#randomDrinkImg').on('click', onGetRandomDrink)
  $('#drinkSearchForm').on('submit', onSearchDrinkDatabase)
  $('#addtoCabinetButton').on('click', onAddToCabinet)
  $('#homepageButton').on('click', showHomePage)
  $('#cabinetButton').on('click', onGetCabinet)

  $('#cabinet').on('click', '.deleteDrink', onDeleteDrink)

})
