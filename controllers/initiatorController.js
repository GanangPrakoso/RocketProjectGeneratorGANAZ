const Model = require('../models')
const Initiator = Model.Initiator

class InitiatorController {
    static add(req, res){
        let objReq = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
        Initiator.create({
            name: objReq.name,
            email: objReq.email,
            password: objReq.password
        })
            .then(initiator => {
                res.redirect('/')
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = InitiatorController