var dateDisplay = document.querySelector("#currentDay");


setInterval(function () {
    dateDisplay.textContent = "It is currently " + moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
}, 1000);