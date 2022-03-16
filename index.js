require('dotenv').config();
const express = require('express')
const mysql = require('mysql2/promise');
const app = express()
const router = express.Router()
const port = 3000

const usersRoute = require('./routes/users_route')
const postsRoute = require('./routes/posts_route')

app.get('/api/', async (req, res, next) => {
})

app.use("/users", usersRoute)
app.use("/posts", postsRoute)

app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message })
})

app.listen(port, () => {
    console.log(`http://localhost:${port}/users`)
    console.log(`http://localhost:${port}/posts`)
})

module.exports = router