const express= require("express")
const ContactShema= require("../Model/Contact")


exports.getAll=async(req, res)=>{
 const contacts= await ContactShema.find()
 res.status(200).json({msg:"voici la liste des users", contacts})

    try {
        
    } catch (err) {
       console.log(err)  
    }
}


exports.ajout=async(req, res)=>{
try {
    const newcontact= new ContactShema(req.body)
    await newcontact.save()
    res.status(200).json({msg: "new contact dans votre db", newcontact})
} catch (err) {
    console.log(err)
    }
}

exports.update=async(req, res)=>{
try {
    const {id}= req.params
    const updatedContact= await ContactShema.findByIdAndUpdate(id,{$set:{...req.body}})
    res.status(200).json({msg:"contact  list updated"})
} catch (err) {
    console.log(err)
    
}
}

exports.remove=async(req, res)=>{
    try {
        const {id}= req.params
        const removeContact= await ContactShema.findByIdAndDelete(id)
        res.status(200).json({msg:"removed user"})
    } catch (err) {
        console.log(err)
        
    }
    
    
    }