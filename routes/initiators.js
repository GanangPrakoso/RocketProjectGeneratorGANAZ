const express = require('express')
const router = express.Router()
const initiatorController = require('../controllers/initiatorController')

router.get('/add', (req, res) => {
    res.render('initiatorsAdd')
})

router.post('/add', initiatorController.add)

router.get('/', initiatorController.findAll)

router.post('/', initiatorController.login)

router.get('/:id/start', initiatorController.statusStart)

router.get('/:id/finish', initiatorController.statusFinish)



module.exports = router