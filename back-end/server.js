// init project
const express = require('express');
const app = express();
// const db = require('./public/database.js');



// app.set('view engine', 'ejs');

// app.use(express.static('public'));
// app.use(require('cookie-parser')());

app.get('/', (req, res) => {
    console.log('root')
    res.status(200);
});

// app.get('/login', (req, res) => {
//   res.render('login')
// });

// app.get('/main', checkLogin, (req, res) => {
//   console.log('main page')
//   res.render('main')
// });

// app.get('/login/:user', (req, res) => {
//   console.log('logging in')
//   db.getOneUser(req.params.user)
//     .then((user) => {
//         if(user){
//           console.log('username: ' + JSON.stringify(user));
//           res.cookie('name', user.name);
//           res.cookie('username', user.username);
//           res.cookie('password', user.password);
//           res.cookie('_id', user.user_id);
//         } else {
//           console.log('username: ' + JSON.stringify(user));
//           res.status(404)
//         }
//         res.render('login');
//     })
//     .catch((err) => {
//       console.log('getting errors here');
//       console.error(err);
//       res.status(418)
//       // alert('error');
//     });
// });

// app.get('/sendgoal', (req, res) => {
//   console.log('sending goal')
//   db.addUserGoal(3901, 'day', 'clean house', 'I will clean the house today.')
//     .then((result) => {
//         console.log(res)
//         res.render('main');
//     })
//     .catch((err) => {
//       console.log('getting errors here');
//       console.error(err);
//       res.status(418)
//       // alert('error');
//     });
// });

// function checkLogin(req, res, next){
//   console.log('checking login')
//   if(req.cookies.username && req.cookies.password && req.cookies._id){
//     next();
//   } else {
//     res.redirect('/login')
//   }
// }

var port = process.env.PORT;
if (port == undefined) {
  port = 8080;
}


// listen for requests :)
const listener = app.listen(port, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});