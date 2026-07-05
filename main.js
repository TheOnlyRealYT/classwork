//exercise 1
function sqr(num){
    if (typeof(num) != "number") console.error("ERROR: input is not a number");
    return num**2;
}
//exercise 2
let sqr2 = (num) => {
    if (typeof(num) != "number") console.error("ERROR: input is not a number");
    return num**2;
}
//exercise 3
(function(num1, num2){
    if (num1 > num2) return num1;
    else if (num2 > num1) return num2;
    else return "equal";
})
//exercise 4
function even_or_odd(num){
    if (num % 2 == 0){
        return "even";
    }
    return "odd";
}
//exercise 5
(function() {
    console.log("Welcome to Advanced JavaScript");
})();
//exericse 6
function sum_(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
//exercise 7
function largest_(...numbers) {
    let num = numbers[0];
    for (let j = 0; j<numbers.length; j++){
        if (numbers[j] > num) num = numbers[j];
        
    }
    return num;
}
//exercise 8
function average_(...numbers) {
    let sum = 0;
    for (let j = 0; j<numbers.length; j++){
        sum += numbers[j];
    }
    return sum/numbers.length;
}
//exercise 9
function hiyall(...names) {
    for (let j = 0; j<names.length; j++){
        console.log(`Hello! ${names[j]}`);
    }
}
//exercise 10
function how_many_(...args) {
    return args.length;
}
//exercise 11
function one_to_100(){
    for (let j = 1; j<=100; j++){
        console.log(j)
    }
}
//exercise 12



const employees = [
  { id: 1, name: "Ali", salary: 8000, department: "IT" },
  { id: 2, name: "Sara", salary: 12000, department: "HR" },
  { id: 3, name: "Omar", salary: 9500, department: "IT" },
  { id: 4, name: "Mona", salary: 15000, department: "Finance" }
];
