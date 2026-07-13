import express from "express";
import fs from "fs";
const filepath = "models/todo.json";

export function getTodo(req, res){
    let todos = JSON.parse(fs.readFileSync(filepath, "utf-8"));
    res.status(200).header({"Content-Type": "application/json"});
    res.json(todos);
}

export function createTodo(req, res) {
    let todos = JSON.parse(fs.readFileSync(filepath, "utf-8"));
    todos.push(req.body);
    fs.writeFileSync(filepath, JSON.stringify(todos));
    res.status(200).header({"Content-Type": "application/json"}).json(todos);
}

export function updateTodo(req, res) {
    let id = req.query.id;
    let todos = JSON.parse(fs.readFileSync(filepath, "utf-8"));
    let index = 0;
    let todo = todos.find((value, i) => {index = i; if (value.id == id) {return value}});
    todos[index] = req.body;
    fs.writeFileSync(filepath, JSON.stringify(todos));
    res.status(200).header({"Content-Type": "application/json"}).json(todo);
}

export function deleteTodo(req, res){
    let id = req.query.id;
    let todos = JSON.parse(fs.readFileSync(filepath, "utf-8"));
    let index = 0;
    let todo = todos.find((value, i) => {index = i; if (value.id == id) {return value}});
    todos.splice(index, 1);
    fs.writeFileSync(filepath, JSON.stringify(todos));
    res.status(200).header({"Content-Type": "application/json"}).json(todo);
}