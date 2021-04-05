class Controller {

  static add(req, res, next) {
    let { contact, answer } = req.body
    let input = { contact, answer }

    User.create(input, {
      returning: true
    })
    .then((data) => {
      return res.status(201).json({message: "User created:" + data.email + 'role:' + data.role})
    })
    .catch((err) => {
      next(err)
    })
  }
}

module.exports = Controller