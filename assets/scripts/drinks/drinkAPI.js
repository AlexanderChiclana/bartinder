'use strict'

const config = require('../config')
const store = require('../store')


const getRandomDrink = function () {
  console.log('getting random drink')
  return $.ajax({
    url: 'https://www.thecocktaildb.com/api/json/v1/1/random.php',
    method: 'GET'
  })
}

const searchDrinkDatabase = function (data) {
  console.log('searching')
  // console.log(data)
  return $.ajax({
    url: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + data.drink.search,
    method: 'GET'
  })
}

const addToCabinet = function () {
  console.log('adding to cabinet')
  console.log(store)
  return $.ajax({
    url: config.apiUrl + '/drinks',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      drink: {
        idDrink: store.drinks.idDrink,
        strDrink: store.drinks.strDrink,
        strGlass: store.drinks.strGlass,
        strInstructions: store.drinks.strInstructions,
        strDrinkThumb: store.drinks.strDrinkThumb,
        strIngredient1: store.drinks.strIngredient1,
        strIngredient2: store.drinks.strIngredient2,
        strIngredient3: store.drinks.strIngredient3,
        strIngredient4: store.drinks.strIngredient4,
        strIngredient5: store.drinks.strIngredient5,
        strIngredient6: store.drinks.strIngredient6,
        strIngredient7: store.drinks.strIngredient7,
        strIngredient8: store.drinks.strIngredient8,
        strIngredient9: store.drinks.strIngredient9,
        strIngredient10: store.drinks.strIngredient10,
        strMeasure1: store.drinks.strMeasure1,
        strMeasure2: store.drinks.strMeasure2,
        strMeasure3: store.drinks.strMeasure3,
        strMeasure4: store.drinks.strMeasure4,
        strMeasure5: store.drinks.strMeasure5,
        strMeasure6: store.drinks.strMeasure6,
        strMeasure7: store.drinks.strMeasure7,
        strMeasure8: store.drinks.strMeasure8,
        strMeasure9: store.drinks.strMeasure9,
        strMeasure10: store.drinks.strMeasure10
      }
    }
  })
}

const getCabinet = function () {
  return $.ajax({
    url: config.apiUrl + '/drinks',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getRandomDrink,
  searchDrinkDatabase,
  addToCabinet,
  getCabinet
}

