const mongoose= require ("mongoose")

const Connectdb=async()=>{
   try {
    await mongoose.connect(process.env.MONGO_URI)
      
    console.log("You are connected to the db")
   } catch (err) {
    console.log(err)
    
   }
}

module.exports=Connectdb 
