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

   static login (req, res) {
      let email = req.body.emailSeekers
      let password = req.body.passwordSeekers
      Seeker.findOne({
          where : {
              email : email,
              password : password
          }
      })
          .then(data => {
              // console.log(data);
              if (data)
            //   res.render('seekerHome.ejs')
            res.send('yoi masuk bos')

              else
              res.send(`ada yang salah`)
          })
          .catch(err=> {
              res.send(err)
          })
  }
}

module.exports = seekerController