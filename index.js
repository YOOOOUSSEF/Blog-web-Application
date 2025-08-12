import express from "express";
import bodyParser from "body-parser";

var titleArr=[];
var contentArr=[];
var length=0;

const app=express();
const port=3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
res.render("index.ejs",{title:titleArr,content:contentArr});

});
app.get("/home",(req,res)=>{
res.render("index.ejs",{title:titleArr,content:contentArr});

});
app.get("/about",(req,res)=>{
res.render("about.ejs");
});
app.get("/contact",(req,res)=>{
res.render("contact.ejs");
});



app.post("/creation",(req,res)=>{
res.render("createPost.ejs");
});

app.post("/home",(req,res)=>{

titleArr[length]=req.body.title;
contentArr[length]=req.body.content;
length++;

res.redirect("/home"); //this because when refresh the browser, it make request like the last one.
});

app.post("/view",(req,res)=>{
var pos=parseInt(req.body.position, 10);;
res.render("viewPost.ejs",{title:titleArr[pos],content:contentArr[pos]});
});

app.post("/edit",(req,res)=>{
var pos=parseInt(req.body.position, 10);;
res.render("editPost.ejs",{title:titleArr[pos],content:contentArr[pos],i:pos});
});

app.post("/editWords",(req,res)=>{
var pos=parseInt(req.body.position, 10);;
titleArr[pos]=req.body.title;
contentArr[pos]=req.body.content;

res.redirect("/home"); //this because when refresh the browser, it make request like the last one.
});

app.post("/delete",(req,res)=>{
var pos=parseInt(req.body.position, 10);;
titleArr.splice(pos,1);
contentArr.splice(pos,1);
length--;

res.redirect("/home"); //this because when refresh the browser, it make request like the last one.
});

app.listen(port,()=>{
    console.log(`Server is running now on port ${port}`);
});