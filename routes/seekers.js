const express = require ('express')
const router = express.Router()
const seekerController = require('../controllers/seekerController')

router.get('/add', (req, res) => {
   res.render('seekersAdd.ejs')
})

router.post('/add', seekerController.add)

module.exports = router