require('dotenv').config()
const express = require('express')
const app = express()

PORT = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter',(req, res)=>{
    res.send('@papan')
});

app.get('/login', (req, res)=>{
    res.send('<h1>Please log in at chai aur code</h1>')
})

app.get('/youtube', (req, res)=>{
    res.send("<h2>chai aur code</h2>")
})

app.get('/json', (req, res)=>{
    res.send({
        username: "Jon Jones",
        country: "USA",
        sports: "UFC",
    })
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
