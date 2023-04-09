 const express = require('express');
 const app = express()
 const dbconnection = require('./src/utils')

 const post = require('./src/post/post.model');


 app.get('/', function(require, res){
    return res.json(req.headers)

    })
 app.get('/api/v1/posts', function(req,res){
    return res.json(post);
 })

 app,listen(3000, function(){
    console.log('egenco listening to port 3000')
    dbconnection.connect(function(cerr){
        if(err) throw err
        console.log('connected to mysql')
    }
 })