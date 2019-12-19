const express = require ('express')
const router = express.Router()
const seekerController = require('../controllers/seekerController')

router.get('/add', (req, res) => {
   res.render('seekersAdd.ejs')
})

router.post('/add', seekerController.add)

router.post('/', seekerController.login)

router.get('/:SeekerId/findProject', seekerController.findProject)

router.post('/:SeekerId/findProject/:ProjectId', seekerController.applyProject)


module.exports = router