let firstName;
let lastName;
let age = 22;
let lightOn = true;

function lightSwitch() {
    if (lightOn == true) {
        lightOn = false
        console.log(lightOn)
    }
    else {
        lightOn = true
        console.log(lightOn)
    }
}

lightSwitch()
lightSwitch()
lightSwitch()

let numberOne;
let numberTwo;
let total;

function addition(numberOne, numberTwo) {
    total = numberOne + numberTwo
    console.log(total)
}

addition(20, 30)
addition(123, 56)
addition(22, 0.222222222)
addition(-1, 3.1415926)
addition(1, i) //apparently doesn't know complex numbers