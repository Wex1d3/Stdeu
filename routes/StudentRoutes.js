import { Router } from "express";
import StudentController from "../controller/StudentController.js";

const router = new Router();

router.get("/students" , StudentController.getStudents)
router.get("/student/:id" , StudentController.getStudentOne)
router.post("/AddStudent" , StudentController.AddStudent)
router.patch("/student/:id" , StudentController.UpdateStudent)
router.delete("/student/:id" , StudentController.deleteStudent)

export default router;
