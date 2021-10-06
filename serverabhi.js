const express = require('express');

const app = express()

app.get('/',(req,res) =>{

    res.send(`server working.this is homepage`)


})

console.log.apply(`heroku port number is ${process.env.PORT }`)
const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log(`server started at port ${PORT}`)
})