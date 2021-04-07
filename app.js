const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routers/index')

const PORT = process.env.PORT || 3000

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.use(routes)

app.use(errorHandlers)

app.listen(PORT, () => {
  console.log('Listening on port:' + PORT);
});

module.exports = app

// functions

function errorHandlers(err, req, res, next) {
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({message: 'Please provide a token!'})
  }
  if (err.name === 'SequelizeValidationError') {
    let errMessages = []
    err.errors.forEach(element => {
      errMessages.push(element.message)
    });
    return res.status(400).json({message: errMessages})
  }

  console.log(err);
  res.status(500).json(err)
} 