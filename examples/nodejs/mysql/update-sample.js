const mysql = require('mysql')
const config = require('./config')

const conn = mysql.createConnection({
  host: config.database.host,
  user: config.database.user,
  password: config.database.password,
  port: config.database.port,
  database: config.database.db
})

conn.connect((err) => {
  if (err)
    throw err
  
  console.log('connected!')
  console.log(`Connected as ID : ${conn.threadId}`)
})

const sql = mysql.format('UPDATE user SET name = ? WHERE id = ?', ['UpdateUser', 10])
conn.query(sql, ((err, res, fields) => {
              if(err)
                throw err
              console.log(res)
            }))
conn.end()
console.log('*** Connection end ***')
