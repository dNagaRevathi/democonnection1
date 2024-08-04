const express = require('express');
const app=express();

app.get('/page',(request,response)=>{
    response.sendFile("./index.html",{root:__dirname});
});

app.listen(
    5090,()=>{console.log("server is running")});

