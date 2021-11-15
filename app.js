var element = [];
var input = document.querySelector("input");

window.onload = function () {
    if (JSON.parse(localStorage.getItem("elements")) != null)
    {
        element = JSON.parse(localStorage.getItem("elements"));
        display();
    }
};