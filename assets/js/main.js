// ===============================
//     Date_Methods_Level_1_1
// ===============================
console.log("%c=====Date_Methods_Level_1_1=====", "color:yellowgreen");

const date1 = new Date("September 2, 2019 09:00:00");
const date2 = new Date(0);
const date3 = new Date(31556908800);
const date4 = new Date(86400000);

document.body.querySelector(
  "#lvl1_1"
).innerHTML = `<h2>=====Date_Methods_Level_1_1=====</h2>${date1} = new Date("September 2, 2019 09:00:00")<br><br>${date2} = new Date(0)<br><br>${date3} = new Date(31556908800)<br><br>${date4} = new Date(86400000)`;

// ===============================
//     Date_Methods_Level_1_3
// ===============================
console.log("%c=====Date_Methods_Level_1_3=====", "color:yellowgreen");

const dateContainer = document.body.querySelector("#lvl1_3");
const date = new Date("2222, 10, 23, 13:25:11");
const creatDate = (paramDate) => {
  const p = document.createElement("p");
  p.textContent = paramDate;
  dateContainer.append(p);
};
creatDate(date);

date.setFullYear(2123);
date.setMonth(1);
date.setDate(24);
creatDate(date);

date.setMonth(2);
creatDate(date);

date.setDate(3);
creatDate(date);

const newDate = new Date();
newDate.setDate(newDate.getDate() + 30);
creatDate(newDate);

// ===============================
//     Date_Methods_Level_1_5
// ===============================
console.log("%c=====Date_Methods_Level_1_5=====", "color:yellowgreen");

let list = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

const monatsNamen = (paramDate) => {
  const date = new Date(paramDate);
  for (let i = 0; i < list.length; i++) {
    if (date.getMonth() === i) {
      return list[i];
    }
  }
};

console.log(monatsNamen("2001,3,4"));
console.log(monatsNamen("2019,12,24"));
console.log(monatsNamen("1410,07,15"));

// ===============================
//     Date_Methods_Level_1_6
// ===============================
console.log("%c=====Date_Methods_Level_1_6=====", "color:yellowgreen");

const date5 = new Date(1999, 10, 5, 15); // PM
const date6 = new Date();
const date7 = new Date(2019, 12, 3, 12); // PM
const date8 = new Date(2000, 1, 1, 11); // AM

const setAmPm = (paramDate) => {
  const date = new Date(paramDate);
  if (date.getHours() < 12) {
    return "AM";
  } else {
    return "PM";
  }
};

console.log(setAmPm(date5));
console.log(setAmPm(date6));
console.log(setAmPm(date7));
console.log(setAmPm(date8));

// ===============================
//     Date_Methods_Level_1_7
// ===============================
console.log("%c=====Date_Methods_Level_1_7=====", "color:yellowgreen");
const istWeekend = (paramDate) => {
  const date = new Date(paramDate);
  if (date.getDay() === 0 || date.getDay() === 6) {
    return "Weekend";
  } else {
    return "Arbeitstag";
  }
};

console.log(istWeekend("12, 15, 2019"));
console.log(istWeekend("2, 16, 2001"));
console.log(istWeekend("2, 1, 2020"));
console.log(istWeekend("2, 29, 2020"));

// ===============================
//     Date_Methods_Level_1_10
// ===============================
console.log("%c=====Date_Methods_Level_1_10=====", "color:yellowgreen");
const lvl1_10 = document.body.querySelector("#lvl1_10");

const datumZeigen = (paramDate) => {
  const date = new Date(paramDate);
  const p = document.createElement("p");
  p.style.fontSize = "1.5rem";
  p.style.fontFamily = "arial";
  p.textContent = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;
  lvl1_10.appendChild(p);
};
datumZeigen("3, 27, 2023");

// console.log(datumZeigen("27,3,2023"));
