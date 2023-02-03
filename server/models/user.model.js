const mongoose=require('mongoose');

const User=new mongoose.Schema({
name:{type:String,required:true,unique:true},
email:{type:String,required:true,unique:true},
password:{type:String,required:true,unique:true},
}
,
{collection:'User-Data'}

) 

const user_model=mongoose.model('User-Data',User);

module.exports=user_model;