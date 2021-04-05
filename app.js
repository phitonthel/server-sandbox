const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routers/index')

const PORT = process.env.PORT || 3000

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.use(routes)

app.listen(PORT, () => {
  console.log('Listening on port:' + PORT);
});

module.exports = app