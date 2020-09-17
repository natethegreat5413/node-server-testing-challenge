const express = require('express')
const helmet = require('helmet')
const friendsRouter = require('../router/friends-router')
const server = express()

server.use(express.json())
server.use(helmet())
server.use('/api/friends', friendsRouter)

server.get('/', (req, res) => {
    res.send({ API: 'IS UP YOU FOOL'})
})



module.exports = server