const express = require("express");
const fs = require("fs")
const path = require("path");

const app = express();
const public_directory = path.join(__dirname, "../public")

app.use(express.json());
app.use(express.static(public_directory));

//MIDDLEWARE EXAMPLE
const myFunction = (req, res, next) => {
    console.log("This happens first");
    req.query.random = "something random"

    next();
}

const myOtherFuncion = (req, res, next) => {
    console.log("this happens second")
    req.query.morestuff = "something else";
    next();
}

// MYFUNCTION MIDDLEWARE BEING RUN
app.get("/", [myFunction, myOtherFuncion], (req, res)=> {
    console.log(".... then running controller");
    console.log(req.query);
    res.send("Hello world");
});

// app.get("/data", (req, res)=>{

//     console.log(req.query)
    
//     res.send({data: "Hello Dan"});
// });

// app.get("/me", (req, res)=>{
    
//     res.send({name: "Rachael", age:"27"});
// });

// app.get("/about", (req, res)=>{
    
//     res.send("YOYOYO");
// });

// app.get("/dog/:id", (req, res)=> {
//     console.log(req.params);
//     res.send("success");
// });

// app.get("/person/:id", (req, res)=> {
//     console.log(req.params.id);
//     res.send("success");
// });

// app.post("/", (req, res) => {
//     console.log(req.body);
//     res.send({data: req.body })
// });

// app.post("/practice", (req,res)=> {
//     console.log(req.body);
//     res.send({data: req.body})
// });

app.post("/task", (req, res) => {
    fs.writeFileSync("tasks.txt", req.body.task);
    res.send("Success")
});




app.listen(5000, ()=> {
    console.log("server started on port 5000")
});