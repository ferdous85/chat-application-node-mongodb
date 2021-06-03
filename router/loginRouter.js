//external imports
const router = require('express').Router()

//internal imports
const { getLogin } = require('../controller/loginController')
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse')

// login page
router.get('/', decorateHtmlResponse('Login'), getLogin)

module.exports = router