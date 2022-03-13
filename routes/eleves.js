const express = require('express')
const router = express.Router()

// Connect to database
const sqlite3 = require('sqlite3')
const dbname = 'main.db'

let db = new sqlite3.Database(dbname, err => {
    if (err)
        throw err
    console.log("Connected on " + dbname)
})


// Getting all
router.get('/', (req, res) => {
    try {
        var arr = []
        const sql = `SELECT * FROM eleves`
        db.all(sql, [], (err, rows) => {
            if (err)
                res.status(500).json({ message: err.message })
            rows.forEach((row) => {
                arr.push(row)
            })
            res.status(200).json(arr)
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Getting One
router.get('/:id', (req, res) => {
    try {
        const sql = `SELECT * FROM eleves WHERE id=?`
        db.all(sql, [req.params.id], (err, row) => {
            if (err)
                res.status(500).json({ message: err.message })
            if (row[0])
                res.status(200).json(row)
            else 
                res.status(404).json({ message: "Eleve not found" })
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Creating One
router.post('/', (req, res) => {
    try {
        const sql = `INSERT INTO eleves (id,first_name, last_name, grade, picture_url)
                VALUES(?,?,?,?,?)`
        db.run(sql, [
            req.body.id,
            req.body.first_name,
            req.body.last_name,
            req.body.grade,
            req.body.picture_url   
        ], (err)=>{
                if (err)
                    res.status(400).json({ message: err.message })
                else
                    res.status(201).json({ message : "A new row have been created" })
            })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Updating All
router.patch('/', (req, res) => {
    try {

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Updating One
router.patch('/:id', (req, res) => {
    try {

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Deleting All
router.delete('/', (req, res) => {
    try {

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Deleting One
router.delete('/:id', (req, res) => {
    try {

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

module.exports = router