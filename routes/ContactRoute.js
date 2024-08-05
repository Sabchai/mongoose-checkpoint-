
const express= require("express")
const ContactRoute= express.Router()
const {getAll, ajout, update, remove}= require("../Controllers/ControllersContact")

ContactRoute.get("/allcontacts", getAll)
ContactRoute.post("/ajout", ajout)
ContactRoute.put("/update/:id", update)
ContactRoute.delete("/remove/:id", remove)

module.exports= ContactRoute 
