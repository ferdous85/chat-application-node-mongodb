//external imports
const router = require('express').Router()


//internal imports
const { getUsers } = require('../controller/usersController')
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse')
const avatarUpload = require('../middlewares/users/avatarUpload')
const { addUserValidators, addUserValidationHandler } = require('../middlewares/users/userValidators')


// users page
router.get('/',decorateHtmlResponse('Users'), getUsers)

router.post('/', avatarUpload, addUserValidators, addUserValidationHandler)

module.exports = router