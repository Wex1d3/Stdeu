import Student from "../models/Student.js";

class StudentController {
    async getStudents(req , res) {
        try{
            const students = await Student.find();
            res.status(200).json(students)
        } catch (err) {
            res.status(404).json("Ошибка при получении Студентов:" + err)
        }
    }
    
    async getStudentOne(req , res){
        try{
            const {id} = req.params;
            const student = await Student.findById(id);
            if (!student) {
                res.status(404).json("Такого студента не сущестсвует!")
            }
            res.status(200).json(student)
        } catch (err) {
            res.status(500).json("Ошибка при выполнеии запроса " + err)
        }
    }

    async AddStudent(req , res){
        try{
            let fileName = null

            if (req.file && req.files.image) {
                fileName = await fileService.saveFile(req.file.image)
            }

            const { name , lastName , group , Date} = req.body;

            const newStudent = await Student.create({ name , lastName, group, Date , image: fileName})

            res.status(200).json(newStudent)
            newStudent.save()
        }   catch (err) {
            res.status(500).json("Ошибка при добавлении студента " + err)
        }
    }

    async UpdateStudent(req ,res) {
        try {
            const { id } = req.params;
            const [ name , lastName, group, Date] = req.body
            const updateStudent = await Student.findByIdAndUpdate(
                id,
                {
                    name,
                    lastName,
                    group,
                    Date,
                },
                {new: true} , 
            );
            if (!updateStudent) {
                res.status(404).json("Такого студента не существует!")
            }
            res.status(200).json(updateStudent)
        } catch (err) {
            res.status(500).json("Ошибка при обновлении:" + err)
        }
    }

    async deleteStudent(req , res) {
        try {
            const { id } = req.params;
            const student = await Student.findByIdAndDelete(id);
            if (!student){
                res.status(404).json("Такого студента не существует!")
            }
            res.status(200).json("Пользователь успешно удален!")
        }   catch (err) {
            res.status(500).json("Ошибка при выполнении запроса: " + err)
        }
    }
}

export default new StudentController();