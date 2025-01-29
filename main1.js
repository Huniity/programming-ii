const morningtime = "0000"
const daytime = "1200"
const nighttime = "2000"

let hours = prompt("What time it is?");
console.log(hours)

function check_hour() {
    let split_hours = hours.split(":")

    if (split_hours >= morningtime && split_hours < daytime) {
        console.log("Bom dia")
    }
    if (split_hours >= daytime && split_hours < nighttime) {
        console.log("Boa tarde")
    }
    if (split_hours >= nighttime && split_hours < "23:59" ){
        console.log("Boa noite")
    }
    else {
        console.log("Error, insert correct time")
    }
}

check_hour()