const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routers/index')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.use(routes)

app.listen(3000, () => {
  console.log('Listening on port:' + 3000);
});

module.exports = app