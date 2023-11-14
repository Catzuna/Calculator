/*Condition*/
//sir naka declare sa line 10 eon clear display 
let display = document.getElementById('display');

//Function po nung letter C para maibalik sa 0 eon value nya po
function clearDisplay() {
    display.value = '0';
}


/*Function*/
//lahat po nung addToDisplay yun po magiging value ng box
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
        display.value = eval(display.value); //pang evaluate since may function nmn po ang eval
    } catch (error) {
        display.value = 'Error';// example ser 10 / 0.
    }
}
