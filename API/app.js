
const crypto = require('crypto');
const http = require('http');
var express = require('express');
var app = express();
var cors = require('cors')
const mongoose = require('mongoose')
require('./models/dbConfig');

const hostname = '127.0.0.1';
const port = 5000;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())



// const userSchema = new mongoose.Schema({
//     email: {
//         type: String,
//         trim: true,
//         required: true,
//         unique: true,
//         lowercase: true
//       },
//       name: {
//         type: String,
//         trim: true,
//         required: true
//       },
//       password: {
//         type: String,
//         required: true
//       },
//       salt: String,
//       role: {
//         type: String,
//         default: 'subscriber'
//       },
// })
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
       // match: /.+\@.+\..+/,
        lowercase: true
      },
      name: {
        type: String,
        trim: true,
        required: true
      },
      password: {
        type: String,
        required: true
      },
      salt: String,
      role: {
        type: String,
        default: 'subscriber'
      },
})

const User = new mongoose.model("users", userSchema)


// routage


app.post("/register", (req, res) => {
    const { name, email, password } = req.body;
    console.log("HELLO");
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            console.log("test");
            res.send({ message: "bien vu t'es enregistré" })
        } else {
            console.log("test2");
            const user = new User({
                name,
                email,
                password,
            })
            user.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: "sisi bg connecte toi mtn" })
                }
            })
        }
    })

})

app.post("/login", (req, res) => {
    const { email, password } = req.body
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            if (password === user.password) {
                res.send({ message: "tu tes co bien vu ", user: user })
                console.log(user)
                console.log(res)
            } else {
                res.send({ message: "mauvais mdp" })
            }
        } else {
            res.send({ message: "t pas enregistrer" })
        }
    })
})





app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// routage 

app.get('/lattana', function (req, res) {
  fetch('https://public.opendatasoft.com/api/records/1.0/search/?dataset=evenements-publics-cibul&q=date_start%3E%3D2021%2F09%2F02&refine.city=Paris')
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
    .catch(err => {
      console.log(err)
    })

})
