var express = require('express')
var mysql = require('mysql')
var app = express();
var connection = mysql.createPool({
    connectionLimit: 10,
    password: 'vvitexamqp',
    user: 'vvitexamqp',
    database: 'vvitqpdb',
    host: '85.10.205.173',
    port: '3306'
})

app.get('/', function (req, res) {
    connection.getConnection(function (error, tempConn) {
        if (!!error) {
            tempConn.release();
            console.log('Error')
        }
        else {
            console.log('Connected!!')
            tempConn.query('SELECT * FROM LOGINCREDENTIALS', function (error, rows, fields) {
                tempConn.release()
                if (!!error) {
                    console.log('Error  in query')
                }
                else {
                    console.log(rows)
                    res.json(rows)
                }
            })
        }
    })
})
app.listen(1337);