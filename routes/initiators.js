const express = require('express')
const router = express.Router()

router.get('/add', (req, res) => {
    res.render('initiatorsAdd')
})

module.exports = router