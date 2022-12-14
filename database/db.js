import mongoose  from "mongoose";

const connection=async(USERNAME,PASSWORD)=>{
    const URL=`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.djs4ptj.mongodb.net/wingsTech-db?retryWrites=true&w=majority`
    try{
        mongoose.set('strictQuery', false);
       await mongoose.connect(URL,{ useNewUrlParser:true})
       console.log("MongoDB Connected successfully..")
    }catch(error){
        console.log("Error while connecting with mongoDB",error.message)
    }
}

export default connection