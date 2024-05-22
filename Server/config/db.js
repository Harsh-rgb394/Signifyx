const mongooose=require("mongoose");

const MongoConnect=async()=>{
    try {
        
       await mongooose.connect(process.env.Mongo_Url);
       console.log("Connection Successfull");

    } catch (error) {
        console.log("Connection Error",error);
    }
}
module.exports=MongoConnect;