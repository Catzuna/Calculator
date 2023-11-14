
/*Condition*/
let display = document.getElementById('display');

function clearDisplay(){
    display.value ='0';
}

/*Function*/
function addToDisplay(value){
    if (display.value === '0' && value!=='.'){
        display.value = value;
    } else{
        display.value += value;
    }
}

