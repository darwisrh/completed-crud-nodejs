const express = require('express')
const bodyParser = require('body-parser')
const db = require('./handlers/user')

const app = express()
const port = 5000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

// Routes
app.get('/users', db.getAllUsers)
app.get('/user/:id', db.getUserById)
app.post('/user', db.createUser)
app.put('/user/:id', db.updateUser)
app.delete('/user/:id', db.deleteUser)

app.listen(port, (req, res) => {
  console.log(`Server run on port `+ port)
})