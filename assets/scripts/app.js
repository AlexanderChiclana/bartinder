'use strict'

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


  $('#randomDrink').on('click', onGetRandomDrink)
  $('#randomDrinkImg').on('click', onGetRandomDrink)



})
