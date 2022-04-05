const express = require("express")
const router = express.Router()

const UsersDAO = require("../DAO/UsersDAO");
const udao = new UsersDAO()

router.get("/", async (req, res, next) => {
    res.json(await udao.getAll())
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