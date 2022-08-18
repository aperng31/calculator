const screen = document.querySelector('#screen');

const buttons = document.querySelectorAll('input[type="button"]');
buttons.forEach(button => button.addEventListener('click', buttonClick));

let inputs = [0];
let operator = '+';
let operatorPressed = false; //to clear screen when number is entered next, and also to evaluate and show after next operator is pressed

function storeNumber() {
    const childrenNodes = screen.children;
    let storedNum = '';
    for (i = 0; i < childrenNodes.length; i++) {
        storedNum += childrenNodes[i].textContent;
    }
    return storedNum;
}

//selecting operator actually evaluates previous equation w/ previous equation's operator
function operate(operator) {
    let newSum = 0;
    switch (operator) {
        case '+': 
            newSum = Number(inputs[0]) + Number(inputs[1]);
            break;
        case '-': 
            newSum = inputs[0] - inputs[1];
            break;
        case '*': 
            newSum = inputs[0] * inputs[1];
            break;
        case '/': 
            newSum = inputs[0] / inputs[1];
            break;
    }
    return Math.round(newSum*1000000)/1000000;
}

function buttonClick() {
    const thisID = this.id //store num or operator

    const divText = document.createElement('div');
    switch (thisID) {
        case 'clear':
            screen.innerHTML = '';
            inputs = [0];
            operator = '+';
            operatorPressed = false;
            break;
        case 'equals': 
            inputs[1] = storeNumber();
            if (inputs[1] != '') {
                inputs[0] = operate(operator);
            }
            
            screen.innerHTML = inputs[0];
            operatorPressed = true;
            break;
        case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9':
            if (operatorPressed == true) {
                screen.innerHTML = ''
                operatorPressed = false;
            }
            divText.textContent = thisID;
            screen.appendChild(divText);
            break;
        case '+': case '-': case '*': case '/':
            inputs[1] = storeNumber();
            if (inputs[1] != '') { //check to make sure a number was input and not just "changing" operator (consec different operator clicks)
                inputs[0] = operate(operator);
            }
            
            operator = thisID; //change operator to pressed one AFTER operation of previous equation
            
            screen.innerHTML = inputs[0];
            operatorPressed = true;
            break;
        case '+/-': 
            if (operatorPressed == true) {
                screen.innerHTML = ''
                operatorPressed = false;
            }
            //check if any number has been input yet
            if (screen.firstElementChild == null) {
                break;
            }
            else if (screen.firstElementChild.innerHTML == '-') { //if already negative number
                screen.removeChild(screen.firstElementChild);
            }
            else { //turn number to negative number
                const negative = document.createElement('div');
                negative.innerHTML = '-';
                screen.prepend(negative);
            }
            break;
        case '0': 
            if (operatorPressed == true) {
                screen.innerHTML = ''
                operatorPressed = false;
            }
            if (screen.length == 0 || screen.firstElementChild.innerHTML == 0) //check if screen is blank or 0, thus shouldn't enter 0
            {
                break;
            }
            divText.textContent = thisID;
            screen.appendChild(divText);
            break;
        case '.': 

            if (operatorPressed == true) {
                screen.innerHTML = ''
                operatorPressed = false;
            }
            const currentScreen = [...storeNumber()];
            if (currentScreen.indexOf('.') != -1 && currentScreen.length > 0) { //if there is already a decimal, will return indexof '.', otherwise should return -1
                break;
            }
            divText.textContent = thisID;
            screen.appendChild(divText);
            break;
    }
}

//console.log(buttons);