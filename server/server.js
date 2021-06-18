const express = require('express')
const cors = require('cors')


const Home = require('./controller/HomePage.controller')


const app = express()
app.use(cors())
require('dotenv').config()

PORT = process.env.PORT || 4000









app.get('/', Home.homePage)












app.listen(PORT, () => { console.log(`APP IS LISINING TO ${PORT}`) });