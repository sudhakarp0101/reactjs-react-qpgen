require('dotenv').config();
const express = require('express')
const app = express();
var cors = require('cors')
app.use(cors())
app.use(express.json())
const userRouter = require('./api/users/user.router')
app.use('/api/users', userRouter)
app.listen(process.env.APP_PORT, () => {
    console.log('Server up and running on port ', process.env.APP_PORT)
});