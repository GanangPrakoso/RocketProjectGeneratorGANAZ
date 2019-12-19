const express = require('express')
const router = express.Router()
const initiatorController = require('../controllers/initiatorController')
const projectController = require('../controllers/projectController')

// router.get('/add', (req, res) => {
//     res.render('initiatorsAdd')
// })

// router.post('/add', initiatorController.add)

router.post('/', initiatorController.login)

router.get('/:idInitiator/initiate-project', initiatorController.initiateProject)

router.post('/:idInitiator/initiate-project', projectController.addData)

// router.get('/:id/start', initiatorController.statusStart)

// router.get('/:id/finish', initiatorController.statusFinish)



module.exports = router