const express=require("express")
const app=express()
const cors=require("cors")

app.use(cors({
    origin:"*"
}))
const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://vikesh667kumar:ImageCol123@imagecollection.wvaskdo.mongodb.net/imagecollection",{
   useNewUrlParser:true,
   useUnifiedTopology:true
})

const post_route=require('./routes/postRoutes')
app.use("/api",post_route)
app.listen(8000,()=>{
    console.log("server is running")
})