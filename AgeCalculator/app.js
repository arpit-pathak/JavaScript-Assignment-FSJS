let dob = document.getElementById("dob");
let currentDate = new Date();
const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");

const error = document.querySelector(".error");

document.getElementById("dob").addEventListener("input", () => {
    getAge(dob.value);
});

// current date
const now = new Date();
let currYear = now.getFullYear();
let currMonth = now.getMonth() + 1;
let currDate = now.getDate();

function getAge(dob) {
    let dobYear = parseInt(dob.substring(0, 4), 10); //Base 10
    let dobMonth = parseInt(dob.substring(5, 7), 10);
    let dobDate = parseInt(dob.substring(8, 10), 10);
    calcAge(dobYear, dobMonth, dobDate);
}

function calcAge(dobYear, dobMonth, dobDate) {
    //year difference
    let yearAgeDiff = currYear - dobYear;

    //month difference
    let monthAgeDiff;
    if (currMonth >= dobMonth) {
        monthAgeDiff = currMonth - dobMonth;
    } else {
        yearAgeDiff--;
        monthAgeDiff = 12 + currMonth - dobMonth;
    }

    //days difference
    let dateAgeDiff;
    if (currDate >= dobDate) {
        dateAgeDiff = currDate - dobDate;
    } else {
        monthAgeDiff--;
        noOfDaysInDOB = daysInMonth(dobMonth, dobYear);
        dateAgeDiff = noOfDaysInDOB + currDate - dobDate;

        //case when monthAgeDiff goes negative
        if (monthAgeDiff < 0) {
            monthAgeDiff = 11;
            yearAgeDiff--;
        }
    }

    displayAge(yearAgeDiff, monthAgeDiff, dateAgeDiff);
}

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

function displayAge(yearAgeDiff, monthAgeDiff, dateAgeDiff) {
    if (yearAgeDiff < 0) {
        error.style.display = "block";
        return;
    }
    years.innerText = yearAgeDiff;
    months.innerText = monthAgeDiff;
    days.innerText = dateAgeDiff;
}
