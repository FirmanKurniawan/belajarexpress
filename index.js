const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const routes = require('./routing/routes')
routes(app)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))