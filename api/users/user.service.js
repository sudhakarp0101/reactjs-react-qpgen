const pool = require('../../config/database')

module.exports = {
    create: (data, callBack) => {
        pool.query('INSERT INTO LOGINCREDENTIALS (Uname, Password, Priority) values(?,?,?)',
            [data.Uname, data.Password, data.Priority],
            (err, results, fields) => {
                if (err)
                    return callBack(err)
                return callBack(null, results)
            })
    },
    getUsers: (data, callBack) => {
        pool.query('SELECT Uname, Priority FROM LOGINCREDENTIALS', [],
            (err, results, fields) => {
                if (err)
                    return callBack(err)
                return callBack(null, results)
            })
    },
    getUserOnly: (data, callBack) => {
        console.log(data.Uname)
        pool.query('SELECT Uname, Priority FROM LOGINCREDENTIALS WHERE Uname=?',
            [data.Uname],
            (err, results, fields) => {
                if (err)
                    return callBack(err)
                return callBack(null, results[0])
            })
    },
    deleteUser: (name, callBack) => {
        pool.query('DELETE FROM LOGINCREDENTIALS WHERE Uname = ?',
            [name],
            (err, results, fields) => {
                if (err)
                    return callBack(err)
                return callBack(null, results)
            })
    },
    updateUser: (data, callBack) => {
        // data.Password = md(data.Password)
        pool.query('UPDATE LOGINCREDENTIALS SET Password=?, Priority=? WHERE Uname=?',
            [data.Password, data.Priority, data.Uname],
            (err, results, fields) => {
                if (err)
                    return callBack(err)
                return callBack(null, results)
            })
    },
    userLogin: (uname, callBack) => {
        console.log(uname)
        pool.query('SELECT Uname, Password FROM LOGINCREDENTIALS WHERE Uname=?',
            [uname],
            (err, results, fields) => {
                if (err)
                    return callBack(err)
                return callBack(null, results[0])
            })
    }
}
