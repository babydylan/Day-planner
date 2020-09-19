var dateDisplay = document.querySelector("#currentDay");
var currentHour = moment().hour();
setInterval(function () {
    dateDisplay.textContent = "Today is " + moment().format("dddd, MMMM Do YYYY");
}, 1000);

var hr9 = $("#hour-9");
var hr10 = $("#hour-10");
var hr11 = $("#hour-11");
var hr12 = $("#hour-12");
var hr13 = $("#hour-13");
var hr14 = $("#hour-14");
var hr15 = $("#hour-15");
var hr16 = $("#hour-16");
var hr17 = $("#hour-17");
var hours = [hr9, hr10, hr11, hr12, hr13, hr14, hr15, hr16, hr17];
for (i=0; i < hours.length; i++) {
    if (i + 9 < currentHour) {
        hours[i].addClass("past");
    }else if (i + 9 > currentHour) {
        hours[i].addClass("future");
    }else if (i + 9 == currentHour) {
        hours[i].addClass("present");
    };
    
};
// var save = $(".saveBtn");
// var input = $(".description")
// // save.addEventListener("click", function () {

    
// //     localStorage.setItem("description", input);
// //   });