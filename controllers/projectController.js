const Model = require('../models')
const Initiator = Model.Initiator
const Project = Model.Project

class ProjectController {
    static addData (req, res) {
        const idInitiator = req.params.idInitiator
        const name = req.body.projectname
        const deadline = req.body.deadline
        const qualifications = req.body.qualification
        const maxCollaborator = req.body.maxcollab
        // console.log(idInitiator)
        Project.create({
            name: name,
            status: 0,
            deadline: deadline,
            qualifications: qualifications,
            maxCollaborator: maxCollaborator,
            currentCollaborator: 0,
            InitiatorId: idInitiator
        })
            .then(project => {
                res.send(project)
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = ProjectController