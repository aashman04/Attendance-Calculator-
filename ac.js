function calculateAttendance() { 

    let total = Number(document.getElementById("totalDays").value);
    let present = Number(document.getElementById("presentDays").value);
    let required = Number(document.getElementById("requiredAttendance").value);

    if (total <= 0 || present < 0 || present > total ||
        required <= 0 || required > 100) {

        document.getElementById("result").innerHTML =
            "Please enter valid numbers.";

        return;
    }

    let attendance = (present / total) * 100;

    if (attendance >= required) {

        document.getElementById("result").innerHTML =
            "Your attendance is " + attendance.toFixed(2) +
            "%.<br>You have enough attendance.";

    } else {

        let extraDays = 0;

        while ((present + extraDays) /
               (total + extraDays) * 100 < required) {

            extraDays++;
        }

        document.getElementById("result").innerHTML =
            "Your attendance is " + attendance.toFixed(2) +
            "%.<br>You need " + extraDays +
            " more day(s) to reach " + required + "%.";
    }
}