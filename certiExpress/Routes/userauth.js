import { Router } from "express";
import {contObject} from "./instance.js"

const userauth = Router();

userauth. get('/',(req,res)=>{
    res.send("Hello world")
})

userauth.post('/addcertification',async(req,res)=>{
    const {Id,Name,Course,Grade,Date} =req.body;
    const textRecipt = await contObject.addcertification(Id,Name,Course,Grade,Date);
    console.log(textRecipt);
    if(textRecipt)
        res.status(201).json("certificate created");
    else
    res.status(400).json("Invalid request");
    
})

userauth.get('/getCertificate/:Id',async(req,res)=>{
    console.log(req.params.Id);
    const result = await contObject.certificates(req.params.Id)
    if(result){
        res.status(201).json(result);
        
    }
    else{
        res.status(400).json("Invaild Id")
    }

})

export default userauth;