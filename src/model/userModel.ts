import mongoose, {Document,model, Schema}from "mongoose";

export interface iUser extends Document{
name?:string;
age?:number;
gender?: string;
email?:string;
hobbies?:string
}

const userSchema: Schema<iUser> =new Schema({
name:{
    type:String,
    required:[true, "name is require"]
},
age:{
    type:Number,
    required:true
},
hobbies:{
    type:String
},
email:{
    type:String,
    required:[true , "email is required"] ,
    unique: true
},
gender:{
    type:String,
    required: true
},

})

const userModel = model<iUser>("User" , userSchema)

export default userModel