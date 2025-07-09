function addNumbers(values) {
let sum=0
if(!Array.isArray(values)){
    alert("must be an array");
}
for(let value of values)
{
    if(typeof value !== "number" || isNaN(value))
    {
        alert("all values must be numbers");
    }else{
        sum += value
    }
}
alert(sum) ;
}
addNumbers([1,2,3,4])