let one = document.querySelector('[ value= "1" ]');
let two = document.querySelector('[ value= "2" ]');
let three = document.querySelector('[ value= "3" ]');
let four = document.querySelector('[ value= "4" ]');
let five = document.querySelector('[ value= "5" ]');
let six = document.querySelector('[ value= "6" ]');
let seven = document.querySelector('[ value= "7" ]');
let eight = document.querySelector('[ value= "8" ]');
let nine = document.querySelector('[ value= "9" ]');
let equal = document.querySelector('[ value= "=" ]');
let plus = document.querySelector('[ value= "+" ]');
let minus = document.querySelector('[ value= "-" ]');
let mul = document.querySelector('[ value= "*" ]');
let divid = document.querySelector('[ value= "/" ]');
let dot = document.querySelector('[ value= "." ]');
let clear = document.querySelector('[ value= "c" ]');
let answer = document.getElementById("Answer");
let firstNumber;
let operator;
let secondNumber ;

function EnterNumber(num){
    answer.value += num;
    fnum = answer.value;

}
let opr;
function EnterOperator(opr){
    answer.value = opr;
    let operator = answer.value;
}
console.log(fnum+operator)
function EnterEqual(){
    switch (opr)
    {
    case "+": console.log (num +=num);
    }
}

export function dis(){
    console.log("medo")
}
dis()
