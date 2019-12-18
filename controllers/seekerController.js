const Model = require ('../models')
const Seeker = Model.Seeker

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
}

module.exports = seekerController