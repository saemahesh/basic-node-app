const { body } = require('express-validator/check')

exports.signup = [
        body('email', 'Invalid email').exists().isEmail(),
        body('password').exists()
]

exports.login = [
        body('email', 'Invalid email').exists().isEmail(),
        body('password').exists()
]