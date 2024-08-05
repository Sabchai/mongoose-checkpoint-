require('dotenv').config();
const express= require("express")
const ContactRoute = require("./routes/ContactRoute")
const Connect= require("./Config/Connectdb")
Connect()
const app= express ()
const port=process.env.PORT






app.use (express.json())
app.use("/contact", ContactRoute)



app.listen(port, (err) => {
err?console.log(err): console.log(`Server is running on port ${port}`)})

