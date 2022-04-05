const express = require("express")
const router = express.Router()

const UsersDAO = require("../DAO/UsersDAO");
const udao = new UsersDAO()

router.get("/", async (req, res, next) => {
    res.json(await udao.getAll())
})

router.get("/:id", async (req, res, next) => {
    res.json(await udao.get(req.params.id))
})

router.post("/", async (req, res, next) => {
    console.log(req.body)
    res.json(await udao.insertUser(req.body.user, req.body.password))
})

router.put("/:id", async (req, res, next) => {
    console.log(req.body, req.params.id)
    res.json(await udao.updateUser(req.params.id, req.body.password))
})

router.delete("/:id", async (req, res, next) => {
    console.log(req.body, req.params.id)
    res.json(await udao.delete(req.params.id))
})


module.exports = router;