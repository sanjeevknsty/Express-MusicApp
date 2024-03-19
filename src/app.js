const express = require("express")
const path = require("path")

const hbs = require("hbs")

const app = express()

staticPath = path.join(__dirname,"../public")
templatePath = path.join(__dirname,"../Templates/views")
partialPath = path.join(__dirname,"../Templates/partials")
console.log(staticPath)
app.set("view engine","hbs");
app.set("views",templatePath);
hbs.registerPartials(partialPath)


app.use(express.static(staticPath))


app.get("/",(req,res)=>{
  res.render('index',{
    channelName : "mee"
  })
})

app.get("/",(req,res)=>{
  res.send("<h1>Home Page</h1>")
  // res.send()
})

app.get("/about",(req,res)=>{
  res.render("about")
})
app.get("/about/*",(req,res)=>{
  res.render("404",{
    errorcomment :"Oops this about us page is not found" 
  })
})
app.get("*",(req,res)=>{
  res.render("404",{
    errorcomment :"Oops this page is not found" 
  })
})

// app.get("/about",(req,res)=>{
//   res.send(
//     [{
//       id : 1,
//       name : "Sanjeev"
//     },
//     {
//       id : 1,
//       name : "Sanjev"
//     },
//     {
//       id : 1,
//       name : "Sanjev"
//     }
//   ])
// })

app.listen(8000,()=>{
  console.log("Listening")
})