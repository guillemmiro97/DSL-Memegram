const express = require('express')
const route = express.Router()

route.get('/', (req, res, next) =>{
    return res.json({post: 1})
})

route.get('/:id', (req, res, next) =>{
    return res.json({post: req.params.id})
})

module.exports = route