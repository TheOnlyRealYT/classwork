import mongoose from "mongoose";
import bcrypt from "bcrypt";

const studentSchema = new mongoose.Schema(
    {
        name: {type:String, required:[true, "Name is required"]},
        email: {type:String, required:[true, "Email is required"], unique:[true, "Email exists"]},
        password: {
            type:String,
            required:[true, "Password is required"],
            minlength:[6, "Password must be at least 6 characters long"],
            maxlength:[20, "Password must be at most 20 characters long"]
        },
        role: {
            type:String,
            required:[true, "Role is required"],
            enum:["student", "teacher", "admin"],
            default:"student"
        },
        address: {
            city: {type:String},
            street: {type:String},
            building: {type:Number},
        },
        department: {type: mongoose.Schema.Types.ObjectId, ref:"departments"}
    }
)

studentSchema.pre("save", async function () {
    const salt = await bcrypt.genSalt(15);
    this.password = await bcrypt.hash(this.password, salt);
});

var studentModel = mongoose.model("Student", studentSchema);
export default studentModel;