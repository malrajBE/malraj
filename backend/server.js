const express=require('express');
const mysql=require('mysql2');
const bodyparser=require('body-parser');
const cors=require('cors');
const app=express();
app.use(bodyparser.json());

app.use(cors())

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'lorry',
    port:3306
});

db.connect((error)=>{
    if(error){
        console.log("error connecting");
    }
    else{
        console.log("db connected");
    }
});

app.post('/post',(req, res)=>{
    const {name,brand,price,color}=req.body;
db.query('insert into game (name,brand,price,color) values (?,?,?,?)',[name,brand,price,color],(error,result,field)=>{
if(error){
    console.log("error showing",error.stack);
    res.status(500).send("error data");
}
else{
    console.log("insert data successfully");
    res.status(200).send("successfully");
}
});
});

app.get('/getAll',(req, res)=>{
    db.query('select * from game',(error,result,field)=>{
        if(error){
            console.log("error showing",error.stack);
                res.status(400).send("error data");
        }
        else{
            console.log("insert data successfully");
            res.status(200).send(result);
        }
    });
});

app.get('/getById/:name',(req, res)=>{
    const {name}=req.params;
    db.query('select * from game where id=? ',[name],(error,result,field)=>{
        if(error){
            console.log("error showing",error.stack);
            res.status(400).send("error data");
        }
        else{
            console.log("insert data successfully");
            res.status(200).send("successfully");
        }
    });
});

app.delete('/delete/:name',(req, res)=>{
    const{name}=req.params;
    db.query('delete from game where id=?',[name],(error,result,field)=>{
        if(error){
            console.log("error showing",error.stack);
            res.status(400).send("error data");
        }
        else{
            console.log("insert data successfully");
            res.status(200).send("successfully");
        }
    });
    });

    app.put("/update/:id",(req, res)=>{
        const{id}=req.params;
        const{name,brand,price,color}=req.body;
        db.query('update game set name=?,brand=?,price=?,color=? where id=?',
        [name,brand,price,color,id],(error,result,field)=>{
            if(error){
                console.log("error showing",error.stack);
                res.status(400).send("error data");
            }
            else{
                console.log("insert data successfully");
                res.status(200).send("update successfully");
            }
        })
    })

    
app.listen(3000);
