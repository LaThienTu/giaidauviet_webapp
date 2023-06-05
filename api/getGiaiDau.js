import {connection, checkConnect} from './connectDatabase'

if (checkConnect == -1) {
    return -1
}

const sql = "SELECT * FROM tournaments"
connection.query(sql, (err,result,fields)=> {
    if (err) {
        return err
    }
    const dataGiaiDau = result
})

module.exports = dataGiaiDau