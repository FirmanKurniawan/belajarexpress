const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'belajarexpress'
})

connection.connect((error) => {
    if(error) throw error
    console.log('Database is Connected')
})

module.exports = connection