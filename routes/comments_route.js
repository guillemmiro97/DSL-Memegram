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
    console.log(req.body)
    res.json(await cdao.insertComment(req.body.idUser, req.body.idPost, req.body.idComent, req.body.contenido))
})

router.put("/:id", async (req, res, next) => {
    console.log(req.body, req.params.id)
    res.json(await cdao.updateComment(req.params.id, req.body.contenido))
})

router.delete("/:id", async (req, res, next) => {
    console.log(req.body, req.params.id)
    res.json(await cdao.delete(req.params.id))
})


module.exports = router;