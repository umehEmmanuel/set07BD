import { Router , Request, Response } from "express";
import { createStudent, deleteStudent, getOneStudent, getStudent, updateStudent } from "../Controller/userController";

const router =Router()

router.route("/home").get((req:Request, res:Response)=>{
return res.status(200).json({
    message:"Welcome Home😃😃"
});
});

router.route("/create").post(createStudent)
router.route("/getAll").get(getStudent)
router.route("/getOne/:studentID").get(getOneStudent)
router.route("/update-profile/:studentID").patch(updateStudent)
router.route("/delete-profile/:studentID").delete(deleteStudent)

export default router