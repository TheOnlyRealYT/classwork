"use strict";
function calculate(a, b, ...rest) {
    if (a === "multiply") {
        const values = typeof b === "number" ? [b, ...rest] : rest;
        return values.reduce((acc, n) => acc * n, 1);
    }
    if (a === "max") {
        const values = typeof b === "number" ? [b, ...rest] : rest;
        if (values.length === 0)
            throw new Error("No numbers provided for max");
        return Math.max(...values);
    }
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    if (Array.isArray(a)) {
        return a.reduce((sum, n) => sum + n, 0);
    }
    if (typeof a === "object" && a !== null && "grades" in a) {
        const grades = a.grades;
        if (grades.length === 0)
            throw new Error("Grades array is empty");
        return grades.reduce((sum, n) => sum + n, 0) / grades.length;
    }
    throw new Error("Invalid arguments");
}
