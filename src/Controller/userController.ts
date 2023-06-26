import { Request,Response } from "express";
import userModel, { iUser } from "../model/userModel";

export const createStudent = async(req: Request<{},{},iUser> , res:Response)=>{
    try {

        const{name,age, gender,hobbies,email} =req.body
        const newStudent= await userModel.create({
            name,age, gender,hobbies,email
        });
return res.status(201).json({
    message:"new student added" ,
    data: newStudent
})
    } catch (error) {
        return res.status(500).json({
            message:"an error has an occurred" ,
            data:error.message
        })
    }
}

export const getStudent =async(req:Request , res:Response)=>{
    try {
        const student= await userModel.find()
        return res.status(200).json({
            message:"successfully found all data" ,
            data: student
        })
    } catch (error) {
        return res.status(500).json({
            message:"not found" ,
            data : error.meessage
        })
    }
}

export const getOneStudent = async(req:Request , res:Response)=>{
    try {
        // const id =req.params.id
        const student =await userModel.findById(req.params.studentID)
if(!student){
    return res.status(400).json({
        message :"user not found" 
    })
}else{
    return res.status(200).json({
        message:"gotten one student" ,
        data: student
    })
}
    } catch (error) {
      return res.status(500).json({
        message:" can not get one student" ,
        data:error.message
      })  
    }
}
export const updateStudent =async(req:Request , res:Response)=>{
    try {
        const {name, age} = req.body
        const student = await userModel.findByIdAndUpdate(req.params.studentID,{
            name,age
        },{new :true})
        if(!student){
            return res.status(400).json({
                message :"user not found" 
            })
        }else{
            return res.status(200).json({
                message:"updated student successfully" ,
                data: student
            })
        }
    } catch (error) {
    return res.status(500).json({
        message:"cannot update student" ,
        data:error.message
    })
    }
}

export const deleteStudent =async(req:Request ,res:Response)=>{
    try {
        const student = await userModel.findByIdAndDelete(req.params.studentID)
        if(!student){
            return res.status(400).json({
                message :"user not found" 
            })
        }else{
            return res.status(200).json({
                message:"deleted student successfully" ,
                data: student
            })
        }
    } catch (error) {
        return res.status(500).json({
            message:"cannot delete student" ,
            data:error.message
        })
    }
}


//search with find, query 
//get all status code from 100 to 500
// design andela webpage, react slick, bga fixed