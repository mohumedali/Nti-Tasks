const nameRegex = /^[A-Za-z]{3,}( [A-Za-z]{3,})?$/;
const phoneRegex = /^01[0-2,5]{1}[0-9]{8}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

let name, phone, email;

do {
    name = prompt("Enter your name (letters only):");
    if (!nameRegex.test(name)) {
    alert("Invalid name. Please try again.");
}
} while (!nameRegex.test(name));

do {
    phone = prompt("Enter your phone number (e.g. 01012345678):");
    if (!phoneRegex.test(phone)) {
        alert("Invalid phone number. Please try again.");
    }
} while (!phoneRegex.test(phone));

do {
    email = prompt("Enter your email address (e.g. name@example.com):");
    if (!emailRegex.test(email)) {
    alert("Invalid email. Please try again.");
}
} while (!emailRegex.test(email));

alert(`Welcome, ${name}!\nPhone: ${phone}\nEmail: ${email}`);
