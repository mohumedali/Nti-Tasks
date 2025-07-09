function getDayName(dateStr) {
let date = new Date(dateStr);
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
return days[date.getDay()];
}
console.log(getDayName("2025-05-08")); 
console.log(getDayName("2024-12-01")); 
