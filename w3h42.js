"use strict";
const dateStr = new Date().toDateString();
const dateArr = dateStr.split(" ");
if (
  dateArr[0] === "Mon" ||
  dateArr[0] === "Tue" ||
  dateArr[0] === "Wed" ||
  dateArr[0] === "Thu"
) {
  console.log("Nyt on arkipäivä :(");
} else if (dateArr[0] === "Fri") {
  console.log("Nyt on arkipäivä, mutta kohta on viikonloppu :)");
} else if (dateArr[0] === "Sat" || dateArr[0] === "Sun") {
  console.log("Nyt on viikonloppu!");
}
let month = dateArr[1];
switch (dateArr[1]) {
  case "Jan":
    dateArr[1] = 1;
    break;
  case "Feb":
    dateArr[1] = 2;
    break;
  case "Mar":
    dateArr[1] = 3;
    break;
  case "Apr":
    dateArr[1] = 4;
    break;
  case "May":
    dateArr[1] = 5;
    break;
  case "Jun":
    dateArr[1] = 6;
    break;
  case "Jul":
    dateArr[1] = 7;
    break;
  case "Aug":
    dateArr[1] = 8;
    break;
  case "Sep":
    dateArr[1] = 9;
    break;
  case "Oct":
    dateArr[1] = 10;
    break;
  case "Nov":
    dateArr[1] = 11;
    break;
  case "Dec":
    dateArr[1] = 12;
    break;
}
const showDate = `${dateArr[2]}.${dateArr[1]}.${dateArr[3]}`;

const timeStr = new Date().toTimeString();
const timeArr = timeStr.split(":");
const showTime = `${timeArr[0]}:${timeArr[1]}`;
console.log(`${showDate} ${showTime}`);
console.log(dateArr[0]);
