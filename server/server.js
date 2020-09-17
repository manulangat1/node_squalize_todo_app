const express = require('express')
const morgan = require('morgan')
const path = require('path')
const colors = require('colors')
const dotenv = require('dotenv')


const app = express()

dotenv.config()

if (process.NODE_ENV === 'developement'){
    app.use(morgan('dev'))
}
app.use('/', (req,res) => res.send('Hello'))

const PORT = process.env.PORT 
app.listen(PORT,console.log(`Kuungana running in ${process.env.NODE_ENV} mode: on port ${PORT}`))