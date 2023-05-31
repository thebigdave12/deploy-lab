const express = require('express')
const app = express()

app.use(express.static(`${__dirname}/Public`))

app.listen(4002, () => console.log('The Landing Page is Running on 4002'))