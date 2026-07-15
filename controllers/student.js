import mongoose from "mongoose";
import studentModel from "../models/student.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function register(req, res){
    let student = new studentModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        address: {
            city: req.body.address?.city,
            street: req.body.address?.street,
            building: req.body.address?.building
        },
        department: req.body.departmentID
    });
    student.role = "student";
    if (!student){
        return res.status(400).json({"message": "ERROR: Bad student creation request"});
    }
    if (studentModel.email == student.email){
        return res.status(400).json({"message": "Email in use"});
    }
    await student.save()
    return res.status(200).json({"message": "Student Created"});
}

export async function login(req, res){
    const email = req.body.email;
    const password = req.body.password;
    if (!email || !password){
        return res.status(400).send("Email and password are required")
    }
    let std = await studentModel.findOne({email: email})
    if (!std) {
        return res.status(404).send({"Message": "Not Found"})
    }
    let hashpassword = await bcrypt.compare(password, std.password)
    if (!hashpassword) {
        return res.status(400).send({"Message": "Wrong Credentials"})
    }

    let token = jwt.sign({email: std.email, role:std.role}, "secret") //replace secret

    return res.status(200).json({ token: token })
}

export async function filteredSearch(req, res){

}

export async function getAllMembers(req, res) {
    try {
        let allMembers = await studentModel.find().populate('department');
        return res.status(200).json(allMembers);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}