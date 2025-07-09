let answer = document.getElementById("Answer");
function EnterNumber(num){
    answer.value += num;

}
function EnterOperator(opr){
    if(answer.value=="")
    {
        alert("plz enter first operand")
    }else
    answer.value += opr;
    
}
function EnterEqual(){
    try{
    answer.value = eval(answer.value)
    }catch(error){
        answer.value="INVALID EXP"
    }
}
function EnterClear(){
    answer.value=""
}