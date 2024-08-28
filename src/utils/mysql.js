import mysql from 'mysql'

const connection = mysql.createPool({
    connectionLimit: 10, // 最大连接数
    host: 'localhost',
    user: 'root',
    password: '131908w',
    database: 'admin',
})

export default connection