import studentModal from "../model/student.js";

const studentController={
    getAll:(req,res)=>{
        const students=studentModal.getAll()
        return res.json(students);
    }
};

export default studentController;