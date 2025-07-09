let num1,num2,num3;
const pattern = /^[0-9]+$/;

do {
    num1 = +prompt("Enter numbers only:");
    if (!pattern.test(num1)) {
        alert("Invalid input: only numbers are allowed.");
}
} while (!pattern.test(num1));

do {
    num2 = +prompt("Enter numbers only:");
    if (!pattern.test(num2)) {
        alert("Invalid input: only numbers are allowed.");
}
} while (!pattern.test(num2));

do {
    num3 = +prompt("Enter numbers only:");
    if (!pattern.test(num3)) {
        alert("Invalid input: only numbers are allowed.");
}
} while (!pattern.test(num3));

let sum = num1 + num2 + num3
let multiplay = num1 * num2 * num3
let divid = num1 / num2 / num3
document.writeln(`sum of three values is : ${num1} + ${+num2} + ${+num3} = ${sum}\n`)
document.writeln(`<br>`)
document.writeln(`multiply of three values is : ${num1} * ${+num2} * ${+num3} = ${multiplay}\n`)
document.writeln(`<br>`)
document.writeln(`divid of three values is : ${num1} / ${+num2} / ${+num3} = ${divid}\n`)