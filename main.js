







var nowdate = new Date().getTime();
afterEid = new Date("16 june, 2024").getTime();
var leftTime = afterEid - nowdate
var month = Math.floor(leftTime / (1000 * 60 * 60 * 24 * 31));
var day = Math.floor(leftTime / (1000 * 60 * 60 *  24));
var hour = Math.floor(leftTime / (1000 * 60 * 60) % 60);
var minute = Math.floor(leftTime / (1000 * 60) % 60);
var second = Math.floor(leftTime / (1000) % 60);


// daysBox.innerHTML = day
var monthBox = document.querySelector(".months-box").innerHTML = month
var daysBox = document.querySelector(".days-box").innerHTML = day
var hoursBox = document.querySelector(".hours-box").innerHTML = hour
var minutesBox = document.querySelector(".minutes-box").innerHTML = minute
var secondBox = document.querySelector(".seconds-box").innerHTML = second