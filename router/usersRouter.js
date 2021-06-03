//external imports
const router = require('express').Router()

//internal imports
const { getUsers } = require('../controller/usersController')
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse')


// login page
router.get('/',decorateHtmlResponse('Users'), getUsers)

module.exports = router