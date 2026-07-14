import departmentModel from "../models/department.js";

export async function createDepartment(req, res){
    try{
        let dep = new departmentModel({
            name: req.body.name,
            level: req.body.level
        });
        await dep.save()
        return res.status(200).json({"message": "Department Created"});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export async function getDepartments(req, res) {
    try {
        let allDepartments = await departmentModel.find();
        res.status(200).json(allDepartments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}