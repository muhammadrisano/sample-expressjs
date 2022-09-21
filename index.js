require('dotenv').config()
const express = require('express')
const port = process.env.PORT

const app = express()
app.use((req,res)=>{
    res.json({
        message: 'berhasil'
    })
})


app.listen(port, ()=>{console.log(`server running in port ${port}`);})