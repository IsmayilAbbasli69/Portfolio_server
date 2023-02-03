const mongoose=require('mongoose');

const Blog=new mongoose.Schema({
title:{type:String,required:true,unique:true},
blog:{type:String,required:true,unique:true},
name:{type:String,required:true},
},
{collection:'Blog-Data'}
)
const blog_model=mongoose.model('Blog-Data',Blog);

module.exports =blog_model;