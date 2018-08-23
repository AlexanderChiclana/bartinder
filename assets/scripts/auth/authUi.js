// 'use strict'
const store = require('../store')

const resetForms = function () {
  document.getElementById('sign-up').reset()
  document.getElementById('sign-in').reset()
  document.getElementById('change-password').reset()
}

const onSignUpSuccess = function () {
  $('#sign-up').trigger('reset')
  $('#signUpModalCenter').modal('toggle')
}

const onSignUpFailure = function () {
  $('#sign-up').trigger('reset')
  $('#errorModal').modal('toggle')
}

const onSignInSuccess = function (data) {
  store.user = data.user
  console.log('signed in')
  $('#entryToggle').css('display', 'none')
  $('#exitToggle').css('display', 'block')
  $('#cabinetButton').css('display', 'block')
  $('#accountEmail').text(data.user.email)
  $('#addToCabinetModalButtonIngredient').text('Add To Cabinet')
  $('.addSearchResult').text('Add To Cabinet')

  // $('#signInModalCenter').modal('toggle')

}
const onSignInFailure = function (error) {
  $('#sign-in').trigger('reset')
}

const onChangePasswordSuccess = function () {
  $('#change-password').trigger('reset')
  $('#passwordField').text('Changed password successfully')
  $('#changePasswordModalCenter').modal('toggle')

}

const onChangePasswordFailure = function () {
  $('#change-password').trigger('reset')
  $('#errorModal').modal('toggle')
}

const onSignOutSuccess = function () {
  $('#entryToggle').css('display', 'block')
  $('#exitToggle').css('display', 'none')
  $('#cabinetButton').css('display', 'none')
  $('#addToCabinetModalButtonIngredient').text('Log in to save')
  $('.addSearchResult').text('Log in to save')
  $('#logOutModalCenter').modal('toggle')





  // location.reload()

}

const onSignOutFailure = function () {
  $('#sign-out-message').text('Signed out failed.')
  $('#sign-out-message').css('background-color', 'red')
  $('#errorModal').modal('toggle')
}

module.exports = {
  // onSuccess
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
