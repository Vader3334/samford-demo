const express = require('express')
const app = express()

app.get('/', function (request, response) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})