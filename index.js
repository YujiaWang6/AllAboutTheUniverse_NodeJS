const express = require("express");
const path = require("path");

//const iss = require("./public/js/iss")
const info = require("./public/js/planets");

const app = express();
const port = process.env.PORT || "9999";

//define folders
app.set("views",path.join(__dirname,"views"));
app.set("view engine","pug");
//set public folder
app.use(express.static(path.join(__dirname, "public")));

//page routes
app.get("/",async(request,response)=>{
    response.render("index",{title:"Home"});
});
app.get("/iss",async(request,response)=>{
    //let isslocation = await iss.getIss();
    //console.log(isslocation);
    response.render("iss",{title: "ISS"});
});
app.get("/planets",async(request,response)=>{
    let infoP = await info.getPlanetsInfo();
    console.log(infoP);
    response.render("planets",{title: "Planets"});
});
app.get("/astronomyPic",async(request,response)=>{
    response.render("astronomyPic",{title:"Astronomy Picture"});
});

app.listen(port, ()=>{
    console.log(`Listening on http://localhost:${port}`);
});