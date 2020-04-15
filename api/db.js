var express = require('express')
var mysql = require('mysql')
var app = express();

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