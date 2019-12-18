const express = require ('express')
const router = express.Router()
// const seekerController = 

router.get('/add', (req, res) => {
   res.render('seekersAdd.ejs')
})

// router.post('/add', seekersAdd)

module.exports = router