const express = require('express')
const router = express.Router()
const initiatorController = require('../controllers/initiatorController')

router.get('/add', (req, res) => {
    res.render('initiatorsAdd')
})

router.post('/add', initiatorController.add)

module.exports = router