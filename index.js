const express = require("express")
const app = express() 
const port = 3000 //drfining the port 

// for extracting the request body from request
const bodyParser = require("body-parser") 

app.use(bodyParser.json()) //using body parser

//creating a route
app.get("/", (req, res) =>{  
    const a = req.query.a
    const b = req.query.b
    const sum = parseInt(a) + parseInt(b);
    return res.json({
        a,
        b,
        sum
    })
})
app.listen(port, ()=>{
    console.log("Server is runnin at port: ", port)
})
// module.exports = app;