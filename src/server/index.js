const path = require('path')
const express = require('express')
const dotenv = require('dotenv');
dotenv.config();

const app = express()

app.use(express.static('dist'))

const cors = require('cors')
app.use(cors())

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
//    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.listen(8001, function () {
    console.log('Example app listening on port 8001!')
})

data = {}

app.post('/posting', (req, res) => {
    data = req
    console.log('posted')
    res.send('posted')
})

app.get('/getting', (req, res) => {
    console.log('getting')
    res.send(data)
})
