const express = require("express")
const router = express.Router()

const PostsDAO = require("../DAO/PostsDAO")
const req = require("express/lib/request");
const pdao = new PostsDAO()

router.get("/", async (req, res, next) => {
    res.json(await pdao.getAll())
})

router.get("/:id", async (req, res, next) => {
    res.json(await pdao.get(req.params.id))
})

router.get("/getuserposts/:id", async (req, res, next) => {
    res.json(await pdao.getPostsByUser(req.params.id))
})

router.get("/howmanyposts/:id", async (req, res, next) => {
    res.json(await pdao.howManyPosts(req.params.id))
})

router.post("/", async (req, res, next) => {
    console.log(req.body)
    res.json(await pdao.insertPost(req.body.iduser, req.body.uidimagen))
})

router.put("/:id", async (req, res, next) => {
    console.log(req.body, req.params.id)
    res.json(await pdao.updatePost(req.params.id, req.body.uidimagen))
})

router.delete("/:id", async (req, res, next) => {
    console.log(req.body, req.params.id)
    res.json(await pdao.delete(req.params.id))
})


module.exports = router;