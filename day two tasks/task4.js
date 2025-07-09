let name , phone , email ;

let nameRegEx = /^[A-Za-z]{3,}(?: [A-Za-z]{3,})*$/;
let phoneRegEx = /01[0125][0-9]{8}$/;
let emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

do{
    name = prompt("enter your name");
    if(!nameRegEx.test(name))
        alert("invalid name");
}while(!nameRegEx.test(name))

do{
    phone = prompt("enter your phone number");
    if(!phoneRegEx.test(phone))
        alert("invalid phone number");
}while(!phoneRegEx.test(phone))

do{
    email = prompt("enter your email");
    if(!emailRegEx.test(email))
        alert("invalid email");
}while(!emailRegEx.test(email))    

alert(`hello Sir ${name}
your phone is : ${phone}
your email is : ${email}
    `)