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

module.exports = {
  getRandomDrink,
  searchDrinkDatabase
}

