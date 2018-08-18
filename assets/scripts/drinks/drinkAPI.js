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

module.exports = {
  getRandomDrink
}
