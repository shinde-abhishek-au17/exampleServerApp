const express = require('express');

const app = express()

app.get('/',(req,res) =>{

    res.send(`server working.this is homepage`)


})

const PORT = 3000

app.listen(PORT, () =>{
    console.log(`server started at port ${PORT}`)
})