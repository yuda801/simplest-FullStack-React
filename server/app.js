import express from "express";
import cors from 'cors'

import connection from './db.js'

const app = express();

app.use(express.json())
app.use(cors())

const getAll = async () => {
    let result = {
        success: false,
        data: null
    }

    try {
        let res = await connection.promise().query(
            'SELECT * FROM todos'
        )

        result.success = true
        result.data = res[0]

        return result
    } catch (err) {
        result.success = false
        result.data = err

        return result
    }
}

app.get('/todos', async (req, res) => {
    let data = await getAll()

    res.send(data)
})





//app.use('/api', customersRouter)

app.listen(5000, () => {
    console.log('Server started on port 5000');
})




// const express = require('express')
// const app = express()
// const port = 5000

// app.get('/todos', (req, res) => {
//     res.send('Hello World!')
// })

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })
