const pattern = /^[a-zA-Z]+$/;
let input;
do {
input = prompt("Enter letters only:");
} while (!pattern.test(input));

let count = 0;
input.split("");
for(let j = 0 ; j <= input.length ; j++)
{
if(input[j] ==="e")
    ++count ;
}
console.log(count)