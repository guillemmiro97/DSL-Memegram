const express = require("express")
const router = express.Router()

const CommentsDAO = require("../DAO/CommentsDAO");
const cdao = new CommentsDAO();

router.get("/", async (req, res, next) => {
    res.json(await cdao.getAll())
})

router.get("/:id", async (req, res, next) => {
    res.json(await cdao.get(req.params.id))
})

router.get("/commentsbypost/:id", async (req, res, next) => {
    res.json(await cdao.getCommentsByPost(req.params.id))
})

router.get("/numberofcommentsbyuser/:id", async (req, res, next) => {
    res.json(await cdao.getNumberOfCommentsByUser(req.params.id))
})

router.get("/numberofcommentsbypost/:id", async (req, res, next) => {
    res.json(await cdao.getNumberOfCommentsByPost(req.params.id))
})

router.post("/", async (req, res, next) => {
    if (await cdao.checkToken(req)) {
        res.send(await cdao.insertComment(req.body.idUser, req.body.idPost, req.body.idComent, req.body.contenido))
    } else {
        res.sendStatus(401)
    }
})

router.put("/:id", async (req, res, next) => {
    const decoded = await cdao.checkToken(req)

    if (decoded.id == req.params.id) {
        res.json(await cdao.updateComment(req.params.id, req.body.contenido))
    } else {
        res.sendStatus(401)
    }
})

router.delete("/:id", async (req, res, next) => {
    const decoded = await cdao.checkToken(req)

    if (decoded.id == req.params.id) {
        res.json(await cdao.delete(req.params.id))
    } else {
        res.sendStatus(401)
    }
})


module.exports = router;