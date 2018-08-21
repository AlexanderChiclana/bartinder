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

const deleteDrink = (drinkID) => {
  return $.ajax({
    url: config.apiUrl + '/drinks/' + drinkID,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateDrink = function (data, drinkID) {
  return $.ajax({
    url: config.apiUrl + '/drinks/' + drinkID,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      drink: {
        idDrink: drinkID,
        strDrink: data.drink.strDrink,
        strGlass: data.drink.strGlass,
        strInstructions: data.drink.strInstructions,
        strDrinkThumb: data.drink.strDrinkThumb,
        strIngredient1: data.drink.strIngredient1,
        strIngredient2: data.drink.strIngredient2,
        strIngredient3: data.drink.strIngredient3,
        strIngredient4: data.drink.strIngredient4,
        strIngredient5: data.drink.strIngredient5,
        strIngredient6: data.drink.strIngredient6,
        strIngredient7: data.drink.strIngredient7,
        strIngredient8: data.drink.strIngredient8,
        strIngredient9: data.drink.strIngredient9,
        strIngredient10: data.drink.strIngredient10,
        strMeasure1: data.drink.strMeasure1,
        strMeasure2: data.drink.strMeasure2,
        strMeasure3: data.drink.strMeasure3,
        strMeasure4: data.drink.strMeasure4,
        strMeasure5: data.drink.strMeasure5,
        strMeasure6: data.drink.strMeasure6,
        strMeasure7: data.drink.strMeasure7,
        strMeasure8: data.drink.strMeasure8,
        strMeasure9: data.drink.strMeasure9,
        strMeasure10: data.drink.strMeasure10
      }
    }
  })
}

module.exports = {
  getRandomDrink,
  searchDrinkDatabase,
  addToCabinet,
  getCabinet,
  deleteDrink,
  updateDrink
}

