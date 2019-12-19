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

    static statusStart (req, res) {
        let id = req.params.id
        Project.update({
            status : 1
        },{
            where : {
                id : id
            }
        })
            .then (data => {
                res.send(`berhasil ubah status`)
                // res.redirect('/initiators')
            })
            .catch (err => {
                res.send(err)
            })
    }

    static statusFinish (req, res) {
        let id = req.params.id
        Project.update({
            status : 2
        },{
            where : {
                id : id
            }
        })
            .then (data => {
                res.send(`berhasil ubah status`)
                // res.redirect('/initiators')
            })
            .catch (err => {
                res.send(err)
            })
    }
}

module.exports = InitiatorController