// Counter Functions
function tickUp() {
    let counterElement = document.getElementById("counter");
    let value = parseInt(counterElement.textContent);
    value++;
    counterElement.textContent = value;
}

function tickDown() {
    let counterElement = document.getElementById("counter");
    let value = parseInt(counterElement.textContent);
    value--;
    counterElement.textContent = value;
}

// Simple For Loop
function runForLoop() {
    let counterValue = parseInt(document.getElementById("counter").textContent);
    let result = "";

    for (let i = 0; i <= counterValue; i++) {
        result += i + " ";
    }

    document.getElementById("forLoopResult").textContent = result.trim();
}

// Repetition With Condition
function showOddNumbers() {
    let counterValue = parseInt(document.getElementById("counter").textContent);
    let result = "";

    for (let i = 1; i <= counterValue; i++) {
        if (i % 2 !== 0) {
            result += i + " ";
        }
    }

    document.getElementById("oddNumberResult").textContent = result.trim();
}

// Arrays (Reverse Multiples of 5)
function addMultiplesToArray() {
    let counterValue = parseInt(document.getElementById("counter").textContent);
    let multiples = [];

    if (counterValue >= 5) {
        for (let i = counterValue; i >= 5; i--) {
            if (i % 5 === 0) {
                multiples.push(i);
            }
        }
    }

    // Print the ARRAY itself (not individual values)
    console.log(multiples);
}

// Objects and Form Fields
function printCarObject() {
    let type = document.getElementById("carType").value;
    let mpg = document.getElementById("carMPG").value;
    let color = document.getElementById("carColor").value;

    let carObject = {
        cType: type,
        cMPG: mpg,
        cColor: color
    };

    console.log(carObject);
}

// Load Car Objects Into Form

function loadCar(carNumber) {
    let selectedCar;

    if (carNumber === 1) {
        selectedCar = carObject1;
    } else if (carNumber === 2) {
        selectedCar = carObject2;
    } else if (carNumber === 3) {
        selectedCar = carObject3;
    }

    document.getElementById("carType").value = selectedCar.cType;
    document.getElementById("carMPG").value = selectedCar.cMPG;
    document.getElementById("carColor").value = selectedCar.cColor;
}

// Changing Styles
function changeColor(choice) {
    let paragraph = document.getElementById("styleParagraph");

    if (choice === 1) {
        paragraph.style.color = "red";
    } else if (choice === 2) {
        paragraph.style.color = "green";
    } else if (choice === 3) {
        paragraph.style.color = "blue";
    }
}
