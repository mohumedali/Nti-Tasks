let input = document.getElementById("numInput");

input.addEventListener("keydown", function(e) {
if (
    (e.key >= "0" && e.key <= "9") ||
    e.key === "Backspace" ||
    e.key === "ArrowLeft" ||
    e.key === "ArrowRight" ||
    e.key === "Tab"
) {
    return;
}else {
    e.preventDefault();
    alert("Numbers only please!");
}
});
