const express = require("express")
const router = express.Router()

const PostsDAO = require("../DAO/PostsDAO")
const pdao = new PostsDAO()

router.get("/", async (req, res, next) => {
    res.json(await pdao.getAll())
})

router.get("/:id", (req, res, next) => {
    next("not implemented yet")
})

router.post("/", (req, res, next) => {
    next("not implemented yet")
})


router.put("/:id", (req, res, next) => {
    next("not implemented yet")
})

router.delete("/:id", (req, res, next) => {
    next("not implemented yet")
})


module.exports = router;