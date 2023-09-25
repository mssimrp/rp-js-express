/* Express dependency */
// the path is relative to the node_modules folder by default
const express = require('express');
const ejs = require('ejs');
const app = express();

// set EJS as the "view engine"
// view engine = template engine
app.set("view engine", "ejs");

// ROUTES (a url fragment) => a JavaScript function

app.get("/", function(req,res){
    // req: request (what the client is sending over)
    // res: response (what you are going to sendn back to the client)
    res.render("index",{
        yourName:"Jon Snow",
        luckyNumber: Math.random() * 100
    }); // send back the content of index.ejs
        // second arg is an object (the key is the placeholder, the value is what it supposed to be container)
        // res.render() will assume the file to be in the ` views` folder
});


app.get("/about-us", function(req,res){
    res.send("About Us - yay");
})

// match hello/<anything>
// will match hello/paul or hello/daniel
app.get('/hello/:firstName', function(req,res){
    res.send("Hello, " + req.params.firstName);
})

// start server
app.listen(8080, function(){
    console.log("Express server has started");
})