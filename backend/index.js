const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose(); // Import sqlite3

const app = express();
const port = 5050;


app.use(express.json());
app.use(cors()); // Only needed if frontend is on a different port
const DBPATH= './Database.sqlite';

const db= new sqlite3.Database(DBPATH,(err)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log("connected")
    }
}) 

// Fix the route (missing slash and extra parentheses)
app.get('/api/message', (req, res) => {
  const sql = 'SELECT * FROM message';
  db.all(sql,[],(err,rows)=>{
    if(err){
        console.log(err.message);
    }else{
        res.json(rows);
    }
  })

});
app.post('/api/post',(req,res)=>{
  sql = 'INSERT INTO message(name,text) VALUES(?,?)'
    db.run(sql,[req.body.name,req.body.message],(err)=>{
        if(err){
            console.log(err.message);
        }else{
            console.log("inserted")
        }
    })
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
app.get('/api/message', (req, res) => {

})