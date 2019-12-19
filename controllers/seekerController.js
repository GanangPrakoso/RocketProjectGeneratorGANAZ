const Model = require ('../models')
const Seeker = Model.Seeker
const Project = Model.Project
const ProjectCollaborator = Model.ProjectCollaborator
const statusChange = require('../helpers/statusChange')
const statusSeeker = require('../helpers/statusSeeker')

class seekerController {

   static add(req, res) {
      let name = req.body.name
      let email = req.body.email
      let password = req.body.password
      let skills = req.body.skills

      Seeker.create({
         name : name,
         email : email,
         password : password,
         skills : skills
      })
         .then((data)=> {
            console.table(data);
            res.redirect('/')          
         })
         .catch(err => {
            res.send(err)
         })
   }

   static login (req, res) {
      let email = req.body.emailSeekers
      let password = req.body.passwordSeekers
      Seeker.findOne({
          where : {
              email : email,
              password : password
          }, include : {
             model : Project
          }
      })
          .then(data => {
            if (data){
               // res.send(data)
               res.render('seekersHome.ejs', {data, statusChange, statusSeeker})
            }
            else
            res.send(`ada yang salah bos`)
          })
          .catch(err=> {
              res.send(err)
          })
  }

  static findProject (req, res) {
     let idSeekers = req.params.SeekerId
     Project.findAll()
      .then(data=> {
         // res.send(data)
         Seeker.findByPk(idSeekers)
         .then(dataSeeker => {
            // res.send(data)
            res.render('seekersFindProjects.ejs', {data, dataSeeker, statusChange})
            })
            .catch(err => res.send(err))
      })
      .catch(err=>{
         res.send(err)
      })
  }

  static applyProject (req, res) {
     let seekerId = req.params.SeekerId
     let projectId = req.params.ProjectId

     ProjectCollaborator.create ({
        ProjectId : projectId,
        SeekerId : seekerId,
        statusSeeker : 0
     })
      .then(() => {
         res.send(`Berhasil mendaftar!`)
      })
      .catch(err => {
         res.send(err)
      })
  }
}

module.exports = seekerController