require("dotenv").config()

const express = require('express')
const app = express()
const sqlite3 = require('sqlite3')
const dbname = 'main.db'

let db = new sqlite3.Database(dbname, err => {
    if (err)
        throw err
    console.log("Connected on " + dbname)
})

app.use(express.json())

const elevesRouter = require('./routes/eleves')
app.use('/eleves', elevesRouter)

// db.run(  
//     `CREATE TABLE eleves(id, first_name, last_name, grade, picture_url)`
// )

// const sql = `INSERT INTO eleves (id, first_name, last_name, grade, picture_url)
//             VALUES(?,?,?,?,?)`
// db.run(sql,[1,"Matteo","Dupond","Première G5","https://cdn.discordapp.com/attachments/952139795973435402/952139972679463003/F337ABEF-89E2-4776-A242-10EA5753992A.jpg"], (err)=>{
//     if (err)
//         throw err
//     console.log("A new row have been created")
// })

// const sql = `SELECT * FROM eleves`

// db.all(sql, [], (err,rows) => {
//     if (err)
//         throw err
//     rows.forEach((row) => {
//         console.log(row)
//     })
// })

// db.close(err => {
//     if (err)
//         throw err
//     console.log("Database closed.")
// })

app.listen(3000, () => console.log('Server started')) 