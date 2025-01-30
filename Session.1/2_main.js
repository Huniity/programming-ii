const min = 12.0
const max = 26.0
let temp = Math.random() * (max - min) + min;
temp = temp.toFixed(1)
let user_temp = 0.0

function validateTemp(){
    
    let user_temp = prompt("Please insert the preferred temperature:")

        if (user_temp < min || user_temp > max || user_temp == 0){
            console.log("Insert a valid temperature.")
            console.log("Temperature has to been between 12.0 and 26.0")
            validateTemp()
        }
        if (user_temp == temp){
            console.log("The room is already at this temperature. Nothing has changed.")
            return;
        }
        else {
            console.log("The temperature has been set to "+user_temp+" ºC.")
            thermostatChar()
        }
}

function thermostatChar(){
        if (user_temp > temp){
            console.log("The thermostat has been set to .:HEAT:. to reach preferred temperature.")
        }
        if (user_temp < temp){
            console.log("The thermostat has been set to .:COOL:. to reach preferred temperature.")
        }
}

console.log("The room temperature is now "+temp+" ºC.")
validateTemp()