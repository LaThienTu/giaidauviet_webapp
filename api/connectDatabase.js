const mysql = require('mysql')

export var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "giaidauviet_webapp"
})

export function checkConnect() {
    connection.connect((err) => {
        if (err) {
            return -1
        }
    })
    return 1
}

