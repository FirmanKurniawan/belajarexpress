const connection = require('../config/database')
const bodyParser = require('body-parser')

exports.v2Profile = (req, res) => {
    res.send("Firman");
}

exports.showUsers = (req, res) => {
    const sql = 'SELECT * FROM users'
    connection.query(sql, (error, results) => {
        if(error) throw error
        res.json(results)
    })
}

exports.v2showUsers = (req, res) => {
    const sql = 'SELECT * FROM users'
    connection.query(sql, (error, results) => {
        if(error) throw error
        res.json(results)
    })
}

exports.usersId = (req, res) => {
    const id = req.params.id
    const sql = 'SELECT * FROM users WHERE id=?'
    connection.query(sql, [id], (error, results) => {
        if(error) throw error
        res.json(results)
    })
}

exports.v2usersId = (req, res) => {
    const id = req.params.id
    const sql = 'SELECT * FROM users WHERE id=?'
    connection.query(sql, [id], (error, results) => {
        if(error) throw error
        res.json(results)
    })
}

exports.usersAdd = (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const phone = req.body.phone
    const sql = 'INSERT INTO users(name,email,phone) VALUES(?,?,?)'
    connection.query(sql, [name,email,phone], (error, results) => {
        if(error) throw error
        res.json(results)
    })
}

exports.v2usersAdd = (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const phone = req.body.phone
    const sql = 'INSERT INTO users(name, email, phone) VALUES(?,?,?)'
    connection.query(sql, [name, email, phone], (error, results) => {
        if(error) throw error
        res.json(results)
    })
}

exports.usersEdit = (req, res) => {
    const id = req.params.id
    const name = req.body.name
    const email = req.body.email
    const phone = req.body.phone
    const sql = 'UPDATE users SET name=?, email=?, phone=? WHERE id=?'
    connection.query(sql, [name,email,phone,id], (error, results) => {
        if(error) throw error
        res.json(results)
    })
}

exports.v2usersEdit = (req, res) => {
    const id = req.params.id
    const name = req.body.name
    const email = req.body.email
    const phone = req.body.phone
    const sql = 'UPDATE users SET name=?, email=?, phone=? WHERE id=?'
    connection.query(sql, [name,email,phone,id], (error, results) => {
        if(error) throw error
        var changeRows = results.changeRows;
        if(changeRows>0){
            data.id = id;
            res.send(data, 200)
        }else{
            res.send(400)
        }
    })
}

exports.usersDelete = (req, res) => {
    const id = req.params.id
    const name = req.body.name
    const email = req.body.email
    const phone = req.body.phone
    const sql = 'DELETE FROM users WHERE id=?'
    connection.query(sql, [id], (error, results) => {
        if(error) throw error
        res.json(results)
    })
}

exports.v2usersDelete = (req, res) => {
    const id = req.params.id
    const name = req.body.name
    const email = req.body.email
    const phone = req.body.phone
    const sql = 'DELETE FROM users WHERE id=?'
    connection.query(sql, [id], (error, results) => {
        if(error) throw error
        res.json(results)
    })
}