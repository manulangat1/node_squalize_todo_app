const express = require('express')
const morgan = require('morgan')
const path = require('path')
const colors = require('colors')
const dotenv = require('dotenv')
dotenv.config()
const {sequelize} = require('./models')
const app = express()


app.use(express.json())
if (process.NODE_ENV === 'developement'){
    app.use(morgan('dev'))
}
// routes 
const todo = require('./routes/todo')
const todoControllers = require('./controllers')
app.use('/',todo)
// app.use('/', (req,res) => res.send('Hello'))

const PORT = process.env.PORT 
console.log(sequelize)
sequelize.sync().then(() => {
    app.listen(PORT,console.log(`Kuungana running in ${process.env.NODE_ENV} mode: on port ${PORT}`.yellow.bold))
})
