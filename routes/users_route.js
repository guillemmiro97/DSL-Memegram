const express = require("express")
const router = express.Router()

const UsersDAO = require("../DAO/UsersDAO");
const udao = new UsersDAO()

router.get("/", async (req, res, next) => {
    if (await udao.checkToken(req)) {
        res.send(await udao.getAll())
    } else {
        res.sendStatus(401)
    }
})

router.get("/:id", async (req, res, next) => {
    if (await udao.checkToken(req)) {
        res.send(await udao.get(req.params.id))
    } else {
        res.sendStatus(401)
    }
})

router.post("/", async (req, res, next) => {
    console.log(req.body)
    res.json(await udao.insertUser(req.body.user, req.body.password))
})

router.put("/:id", async (req, res, next) => {
    const decoded = await udao.checkToken(req)

    if (decoded.id == req.params.id) {
        res.json(await udao.updateUser(req.params.id, req.body.password))
    } else {
        res.sendStatus(401)
    }
})

router.delete("/:id", async (req, res, next) => {
    const decoded = await udao.checkToken(req)

    if (decoded.id == req.params.id) {
        res.json(await udao.delete(req.params.id))
    } else {
        res.sendStatus(401)
    }
})

module.exports = router;