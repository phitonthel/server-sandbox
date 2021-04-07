const { Database } = require('../models/index')

class Controller {

  static showAll(req, res, next) {
    Database.findAll()
      .then((data) => {
        return res.status(201).json(data)
      })
      .catch((err) => {
        next(err)
      })
  }

  static add(req, res, next) {
    let { name, number, message1, message2, message3 } = req.body
    let payload = { name, number, message1, message2, message3 }
    console.log(payload);
    
    Database.create(payload)
      .then((data) => {
        return res.status(201).json({
          message: "Created!",
          data: data
        })
      })
      .catch((err) => {
        next(err)
      })
  }
}

module.exports = Controller