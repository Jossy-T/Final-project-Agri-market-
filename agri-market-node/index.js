const express=require("express")
const app=express()
const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://yoseftanu994_db_user:yosef8517@cluster0.hqz8u2i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>console.log("mongo database connected "))
app.use(express.json())

const farmerSchema=new mongoose.Schema({
    fullName:{type:String, required:true},
    email:{type:String,unique:true,required:true},
    farmName:{type:String,required:true},
    location:{type:String,required:true},
    phoneNumber:{type:Number,unique:true,required:true},
    password:{type:String,unique:true,required:true},
    confirmPhoneNumber:{type:String,unique:true,required:true}
})
const farmer=mongoose.model("farmer",farmerSchema)

const clientSchema= new mongoose.Schema({
    fullName:{type:String, required:true},
    email:{type:String,unique:true,required:true},
    phoneNumber:{type:Number,unique:true,required:true},
    password:{type:String,unique:true,required:true},
    confirmPhoneNumber:{type:String,unique:true,required:true},
})
const client=mongoose.model("client",clientSchema)

const productSchema= new mongoose.Schema({
    productName:{type:String,required:true},
    price:{type:Number,required:true},
    category:{type:String,required:true},
    location:{type:String,required:true},
    farmerName:{type:String, required:true}
})
const product=new mongoose.model("product",productSchema)