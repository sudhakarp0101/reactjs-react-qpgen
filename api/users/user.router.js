const { createUser,
    getUsers,
    getUserOnly,
    updateUser,
    deleteUser,
    login
} = require('./user.controller')
const { checkToken } = require('../../auth/token-validation')

const router = require('express').Router()
router.post("/", checkToken, createUser)
router.get("/", checkToken, getUsers)
router.get("/one", checkToken, getUserOnly)
router.patch("/", checkToken, updateUser)
router.delete("/", checkToken, deleteUser)
router.post("/login", login)

module.exports = router;