import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true , "Имя обязательно для заполнения"],
        trim: true
    },

    lastName: {
        type: String,
        required: [true , "Фамилия обязательно для заполнения"],
        trim: true
    },
    group: {
        type: String , Number,
        required: [true , "Группа обязательно для заполнения"]
    },
    Date: {
        type: String,
        required: [true , "Дата рождения обязательна к заполнению"]
    },
    image: {
        type: String,
    }

})

export default mongoose.model("Student" , StudentSchema)