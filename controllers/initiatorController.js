const Model = require('../models')
const Initiator = Model.Initiator
const Project = Model.Project
const statusChange = require('../helpers/statusChange')

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

    static login (req, res) {
        let email = req.body.emailInitiator
        let password = req.body.passwordInitiator
        Initiator.findOne({
            include: [Project],
            where : {
                email : email,
                password : password
            }
        })
            .then(data => {
                // console.log(data);
                if (data)
                // res.send(data)
                res.render('initiatorsHome.ejs', {data, statusChange})
                else
                res.send(`ada yang salah`)
            })
            .catch(err=> {
                res.send(err)
            })
    }

    static initiateProject (req, res) {
        let id = Number(req.params.idInitiator)
        // console.log(id)
        Initiator.findOne({
            where: {
                id : id
            }
        })
            .then(initiator => {
                res.render('addProject.ejs', {data: initiator})

            })
            .catch(err => {
                res.send(err)
            })
    }

}

module.exports = InitiatorController