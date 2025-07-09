// -----------------task1-------------
// function numerical(values[]){

// }


// ---------------task2--------------

// function plindrome(word){
//     let arr = word.split("")
//     for(let i = 0 ; i < arr.length ; i++ )
//     {
//     if(arr[i] === arr.reverse()[i])
//     {
//         return(` ${word} is plindrome`)
//     }else{
//         return(`${word} is NON PLINDROME`)
//     }
// }
// }
// console.log(plindrome("meod"))

// ----------------task3--------------

// let input = prompt("enter your message")
// let count = 0;
// input.split("");
// for(let j = 0 ; j <= input.length ; j++)
// {
// if(input[j] ==="e")
//     ++count ;
// }
// console.log(count)

// ----------------task4------------


// let name=document.getElementById("name").value;
// let phone=document.getElementById("phone").value;
// let email=document.getElementById("email").value;

// const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// const nameReg = /^[A-Za-z]{2,}(?: [A-Za-z]{2,})?$/;

// const ageReg = /^(?:1[01][0-9]|120|[1-9][0-9]?)$/;

// if (!nameReg.test(name)) {
//     alert( "name is invalid");
    
// }


// --------------------task5----------

// let num1 =+prompt("enter num1")
// let num2 =+prompt("enter num2")
// let num3 =+prompt("enter num3")
// let sum = num1 + num2 + num3
// let multiplay = num1 * num2 * num3
// let divid = num1 / num2 / num3
// document.writeln(`sum of three values is : ${num1} + ${+num2} + ${+num3} = ${sum}`)
// document.writeln(`<Br>`)
// document.writeln(`multiply of three values is : ${num1} * ${+num2} * ${+num3} = ${multiplay}`)
// document.writeln(`<Br>`)
// document.writeln(`divid of three values is : ${num1} / ${+num2} / ${+num3} = ${divid}`)