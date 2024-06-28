// console.log('test message')

require('./database.js');
const express = require('express');
const UserModel = require('./database');
const app = express();

app.get("/users", async(req,res)=>{
    try{
        var result = await UserModel.find({});
        // res.send(result);
        res.render('userinfo.ejs',{record: result  });
        
    }
    catch(err){
        // console.log(err);
        res.send('Error in fetching data');
    }
});

app.post("/users",(req,res)=>{
    res.send('store data from mongoDB');
});

app.put("/users",(req,res)=>{
    res.send('update data from mongoDB');
});
app.delete("/users",(req,res)=>{
    res.send('delete data from mongoDB');
});

app.listen(9000);