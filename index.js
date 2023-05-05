const express=require("express");
require("./db/Config");
const User=require("./db/user");
const Product=require("./db/product")
const cors=require("cors");
const app=express();
app.use(express.json())
app.use(cors());
app.post("/register",async (req,resp)=>{
    let user=new User(req.body);
    let result=await user.save();
    result=result.toObject();
    delete result.password
    resp.send(result);
})
app.post("/login",async (req,resp)=>{
    if(req.body.email&&req.body.password){
        const result=await User.findOne(req.body).select("-password");
        if(result){
        resp.send(result)
        }else{
         resp.send({
            marks:"Either Email or password Wrong!"
         })
        }
    }else{
        resp.send("Enter Valid Fields")
    }
})

// products api

app.post("/add-product",async(req,resp)=>{
    const data=new Product(req.body);
    const result =await data.save();
    resp.send(result);
})

app.listen(5000);


