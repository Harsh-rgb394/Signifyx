const express=require("express");
const dotenv=require("dotenv");
const cors=require("cors");
const MongoConnect=require("./config/db");
const UserRoute=require("./Routes/UserRoute");

dotenv.config();
const PORT=process.env.PORT;
MongoConnect();

const app=express();



app.use(cors());
app.use(express.json({limit:"50mb"}));


app.get("/",(req,res)=>{
    res.send("Hello Server");

})

app.use("/api/user",UserRoute);


app.listen(PORT,()=>{
    console.log("Server ready");
})


