const express = require("express");
const path = require('path');
const {open} =  require('sqlite');
const sqlite3 = require("sqlite3");
const jwt = require("jsonwebtoken");


const app=express();
app.use(express.json());
const dbpath=path.join(__dirname,'goodreads');
let db=null;


const createConnection = async ()=>{
   try{
    db= await open({
        filename:dbpath,
        driver:sqlite3.Database,
        
    });
    console.log("connection complete")
    console.log(dbpath);
    app.listen(5090,()=>{console.log("sErver is running")})
   }
   catch(e){
    console.log(`Error is :${e.message}`)
   }
}

createConnection()

app.get('/books',async (req,res)=>{
    console.log("get");
    const sql=`select * from books where id=1;
    `
    const queryResult=await db.all(sql);
    res.send(queryResult);
  
})

app.post("/login", async (request, response) => {
    console.log("hii");
    const { username, password } = request.body;
    if (username === "hari" && password === "hari@123") {
      console.log("if condition entered");
      const payload = { username: username };
      const token = jwt.sign(payload, "secretkey");
      response.send({ jwt_token: token });
    }
  });