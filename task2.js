let word = prompt("enter word")
function plindrome(word){
    let arr = word.split("")
    for(let i = 0 ; i < arr.length ; i++ )
    {
    if(arr[i] === arr.reverse()[i])
    {
        return alert(` ${word} is plindrome`)
    }else{
        return  alert(`${word} is NON PLINDROME`)
    }
}
}
console.log(plindrome(word))