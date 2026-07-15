import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema({
    name: {type:String, required:[true, "Name is required"]},
    level: {type:Number}
})

var departmentModel = mongoose.model("departments", departmentSchema);

export default departmentModel;