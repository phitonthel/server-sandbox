const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')

let db = [
  {
    contact: 'phitonthel',
    answer: 0.36,
    date: new Date()
  },
  {
    contact: 'Gio',
    answer: 0.66,
    date: new Date()
  },
]

router.get('/', (req, res) => {
  res.send('<h1>Welcome to my Sandbox Server!</h1>')
})

// Products
router.get('/database', (req, res) => {
  return res.status(200).json({data: db})
})

router.post('/database', (req, res) => {
  let { contact, answer } = req.body
  let date = new Date()

  let input = { contact, answer, date }
  db.push(input)

  return res.status(201).json({message: "Submitted"})
})

module.exports = router