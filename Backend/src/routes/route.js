const express = require('express')
const route = express.Router()
const { addTopics, findTopic } = require('../controller/feynmanController');

route.post('/addTopic', addTopics)
route.get('/topics', findTopic)


module.exports = route