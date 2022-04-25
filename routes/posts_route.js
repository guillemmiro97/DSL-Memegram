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
    if (await pdao.checkToken(req)) {
        res.send(await pdao.insertPost(req.body.iduser, req.body.uidimagen))
    } else {
        res.sendStatus(401)
    }
})

router.put("/:id", async (req, res, next) => {
    const decoded = await pdao.checkToken(req)

    if (decoded.id == req.params.id) {
        res.json(await pdao.updatePost(req.params.id, req.body.uidimagen))
    } else {
        res.sendStatus(401)
    }
})

router.delete("/:id", async (req, res, next) => {
    const decoded = await pdao.checkToken(req)

    if (decoded.id == req.params.id) {
        res.json(await pdao.delete(req.params.id))
    } else {
        res.sendStatus(401)
    }
})


module.exports = router;