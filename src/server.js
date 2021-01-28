const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res)=> {
    console.log("Logging something cool");
    res.send("Hello world");
});

app.get("/data", (req, res)=>{

    console.log(req.query)
    
    res.send({data: "Hello Dan"});
});

app.get("/me", (req, res)=>{
    
    res.send({name: "Rachael", age:"27"});
});

app.get("/about", (req, res)=>{
    
    res.send("YOYOYO");
});

app.get("/dog/:id", (req, res)=> {
    console.log(req.params);
    res.send("success");
});

app.get("/person/:id", (req, res)=> {
    console.log(req.params.id);
    res.send("success");
});

app.post("/", (req, res) => {
    console.log(req.body);
    res.send({data: req.body })
});

app.post("/practice", (req,res)=> {
    console.log(req.body);
    res.send({data: req.body})
})


app.listen(5000, ()=> {
    console.log("server started on port 5000")
});