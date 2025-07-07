function addNumbers(values) {

if (!Array.isArray(values)) {
    return " must be array"
}
for (let value of values) {
    if (typeof value !== "number" || isNaN(value)) {
    return `all values must be numbers`;
}
}
let sum = 0;
for (let num of values) {
    sum += num;
}
return sum;
}
console.log(addNumbers([1, 2, 3]));              
console.log(addNumbers([1, "two", 3]));       
console.log(addNumbers("hello"));            
