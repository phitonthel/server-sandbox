const express = require('express')
const router = express.Router()
const databaseController = require('../controllers/databaseController')

router.get('/', (req, res) => {
  res.send('<h1>Welcome to phitonthel\'s Sandbox Server!</h1>')
})

// database
router.get('/database', databaseController.showAll)
router.post('/database', databaseController.add)

module.exports = router