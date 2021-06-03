//external imports
const router = require('express').Router()

//internal imports
const { getInbox } = require('../controller/inboxController')
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse')


// login page
router.get('/',decorateHtmlResponse('Inbox') , getInbox)

module.exports = router