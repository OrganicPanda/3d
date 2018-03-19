const Bundler = require('parcel-bundler')
const express = require('express')

let bundler = new Bundler('./index.html')
let app = express()

app.use('/static', express.static('./static'));
app.use(bundler.middleware())

app.listen(Number(process.env.PORT || 4321))
