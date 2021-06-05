//external imports
const router = require('express').Router()


//internal imports
const { getUsers, addUser, removeUser } = require('../controller/usersController')
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse')
const avatarUpload = require('../middlewares/users/avatarUpload')
const { addUserValidators, addUserValidationHandler } = require('../middlewares/users/userValidators')


// users page
router.get('/',decorateHtmlResponse('Users'), getUsers)

router.post('/', avatarUpload, addUserValidators, addUserValidationHandler, addUser)

router.delete('/:id', removeUser)

module.exports = router