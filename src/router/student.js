import { Router } from "express";
import studentController from "../controller/student.js";

const studentRouter=new Router();
studentRouter.get("/students",studentController.getAll);


export default studentRouter;