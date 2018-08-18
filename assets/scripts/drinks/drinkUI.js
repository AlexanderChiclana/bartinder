

const getRandomDrinkSuccess = function (data) {
  console.log('got random')
  console.log(data)
  $('#testData').html(


    data.drinks[0].strIngredient1
  )
  $("#randomDrinkImg").attr("src", data.drinks[0].strDrinkThumb)
  $('#randomDrinkName').text(data.drinks[0].strDrink)
  $('#randomDrinkInstructions').text(data.drinks[0].strInstructions)

  // loop for checking ingredients. Going to be different number of ingredients for each
  for (let i = 1; i < 15; i++) {
    console.log((`${data.drinks[0].strIngredient}${i}`))
    // console.log(data.drinks[0].strIngredient1)

}
  //
}

const failure = function () {
  console.log('request failed')
}

module.exports = {
  getRandomDrinkSuccess,
  failure
}
