
const express = require('express')
const app= express()
const dbConnection = require('./src/utils/mysql.connector')

//importing importing post module
const post = require ('./src/posts/post.model')

//
app.get('/api/v1', function(req,res){
    // responding with the data that has been 
    return res.json(req.headers)
})

app.get('/api/v1/posts', function(req,res){
    // responding with the data from post
    return res.json([post])
})


app.listen(3000,function(){
    console.log('server running on port 3000')
    dbConnection.connect(function(err){
    if (err) throw err;

        console.log('Connected to mysql')
    })

    
})
 //import.Post()

