const express = require('express')
const route = express.Router()

route.get('/', (req, res, next) =>{
    return res.json({user: 1})
})

route.get('/:id', (req, res, next) =>{
    return res.json({user: req.params.id})
})

module.exports = route