/*Condition*/
let display = document.getElementById('display');

function clearDisplay() {
    display.value = '0';
}


/*Function*/
function addToDisplay(value) {
    if (display.value === '0') {
        display.value = value;
    } else {
        display.value = display.value + value;
    }
}

/*Calculate*/
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
