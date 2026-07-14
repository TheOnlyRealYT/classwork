import express from "express";
import fs from "fs";
const filepath = "models/todo.json";

export function getTodo(req, res){

    res.status(200).header({"Content-Type": "application/json"}).json(todos);
}

export function createTodo(req, res) {

    res.status(200).header({"Content-Type": "application/json"}).json(todos);
}

export function updateTodo(req, res) {

    res.status(200).header({"Content-Type": "application/json"}).json(todo);
}

export function deleteTodo(req, res){

    res.status(200).header({"Content-Type": "application/json"}).json(todo);
}