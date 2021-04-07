const axios = require('axios')

axios({
  method: 'get',
  url: 'https://phitonthel-server-sandbox.herokuapp.com/database'
})
  .then((result) => {
    console.log(result.data);
  })
  .catch((err) => {
    console.log(err);
  })