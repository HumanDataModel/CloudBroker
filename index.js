require('./controllers/CloudBroaker.js');


const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const loginRouter = require('./controllers/login')
const seedsRouter = require('./controllers/seeds')
const usersRouter = require('./controllers/users')
const config = require('./utils/config')

const extractToken = (request, response, next) => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    request.token = authorization.substring(7)
  }

  next()
}

//app.use(express.static('build'))

app.use(extractToken)
app.use(cors())
app.use(bodyParser.json())

mongoose.connect(config.mongoUrl)
mongoose.Promise = global.Promise

app.use('/api/login', loginRouter)
app.use('/api/users', usersRouter)
app.use('/api/seeds', seedsRouter)

const server = http.createServer(app)

server.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`)
})

server.on('close', () => {
  mongoose.connection.close()
})

module.exports = {
  app, server
}