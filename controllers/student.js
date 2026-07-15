import mongoose from "mongoose";
import studentModel from "../models/student.js";

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

}

export async function filteredSearch(req, res){

}

export async function getAllMembers(req, res) {
    try {
        let allMembers = await studentModel.find().populate('department');
        res.status(200).json(allMembers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}