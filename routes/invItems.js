const express = require('express')
const router = express.Router()
const invController = require('../controllers/invItems') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, invController.getInvItems)

router.post('/createInvItem', invController.createInvItem)

router.put('/setQuantity', invController.setQuantity)

router.delete('/deleteInvItem', invController.deleteInvItem)

module.exports = router