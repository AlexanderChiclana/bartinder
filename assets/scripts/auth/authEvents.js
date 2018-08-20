const getFormFields = require('../../../lib/get-form-fields')
const api = require('../auth/authApi')
const ui = require('../auth/authUi')

const store = require('../store')

const onSignup = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .then(setTimeout(() => $('#sign-up-message').text(''), 1000))
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .then(setTimeout(() => $('#sign-in-message').text(''), 1000))
    .catch(ui.onSignInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .then(setTimeout(() => $('#change-password-message').text(''), 1000))
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.onSignOutSuccess)
    .then(setTimeout(() => $('#sign-out-message').text(''), 1000))
    .catch(ui.onSignOutFailure)
}

module.exports = {
  onSignup,
  onSignIn,
  onChangePassword,
  onSignOut
}
