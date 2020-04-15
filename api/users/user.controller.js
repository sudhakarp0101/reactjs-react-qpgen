const {
    create,
    getUsers,
    getUserOnly,
    updateUser,
    deleteUser,
    userLogin,
    login
} = require('./user.service')
const { sign } = require('jsonwebtoken')
const md5 = require('md5')
module.exports = {
    createUser: (req, res) => {
        var body = req.body;
        body.Password = md5(body.Password);
        //console.log(md5(body.Password))
        create(body, (err, results) => {
            if (err) {
                console.log(err)
                return res.status(500).json({
                    status: 0,
                    message: 'Unable to Create User'
                })
            }
            return res.status(200).json({
                status: 1,
                message: 'User Inserted Successfully'
            })
        })
    },
    getUsers: (req, res) => {
        getUsers(req.body, (err, results) => {
            if (err) {
                console.log(err)
                return;
            }
            console.log(results)

            if (!results) {
                return res.status(500).json({
                    status: 0,
                    message: 'Users List is Empty'
                })
            }
            return res.status(200).json({
                status: 1,
                data: results
            })
        })
    },
    getUserOnly: (req, res) => {
        getUserOnly(req.body, (err, results) => {
            if (err) {
                console.log(err)
                return;
            }
            if (!results) {
                return res.status(500).json({
                    status: 0,
                    message: 'No Such User'
                })
            }
            return res.status(200).json({
                status: 1,
                data: results
            })
        })
    },
    updateUser: (req, res) => {
        var body = req.body
        body.Password = md5(body.Password);
        updateUser(body, (err, results) => {
            if (err) {
                console.log(err)
                return false;
            }
            console.log(results)
            if (results.affectedRows == 0) {
                return res.status(500).json({
                    status: 0,
                    message: 'No Such User'
                })
            }
            return res.status(200).json({
                status: 1,
                message: 'User Updated Successfully'
            })
        })
    },
    deleteUser: (req, res) => {
        deleteUser(req.body.Uname, (err, results) => {
            if (err) {
                console.log(err)
                return false;
            }
            console.log(results)
            if (results.affectedRows == 0) {
                return res.status(500).json({
                    status: 0,
                    message: 'No Such User'
                })
            }
            return res.status(200).json({
                status: 1,
                message: 'User Deleted Successfully'
            })
        })
    },
    login: (req, res) => {
        userLogin(req.body.Uname, (err, results) => {
            if (err) {
                console.log(err)
                return false;
            }
            console.log(results)
            if (results.Password != (md5(req.body.Password))) {
                return res.status(500).json({
                    status: 0,
                    message: 'User Name or Password Wrong'
                })
            } else {
                results.Password = undefined
                const jsontoken = sign({ result: results }, "qwe1234", {
                    expiresIn: "1h"
                })
                return res.status(200).json({
                    status: 1,
                    message: 'Login Successfull',
                    token: jsontoken
                })
            }
        })
    }
}