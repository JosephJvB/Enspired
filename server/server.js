const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const teapot = require('./teapot')

const server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, './public')))
server.use('/api/v1/tea', teapot)

module.exports = server
