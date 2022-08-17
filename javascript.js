const screen = document.querySelector('#screen');

const buttons = document.querySelectorAll('input[type="button"]');
buttons.forEach(button => button.addEventListener('click', buttonClick));

//how to build up calculation of input?
//

function buttonClick() {
    const thisID = this.id
    const divText = document.createElement('div');
    switch (thisID) {
        case 'clear':
            screen.innerHTML = '';
            //also need to clear memory of equation "build-up" 
            break;
        case 'equals': 
            break;
        case '7': 
            divText.textContent = thisID;
            screen.appendChild(divText);
            break;
        case '8': 
            divText.textContent = thisID;
            screen.appendChild(divText);
            break;
        case '9': 
            divText.textContent = thisID;
            screen.appendChild(divText);
            break;
        case '+': 
            break;
        case '4': 
            divText.textContent = thisID;
            screen.appendChild(divText);
            break;
        case '5': 
            divText.textContent = thisID;
            screen.appendChild(divText);
            break;
        case '6': 
            divText.textContent = thisID;
            screen.appendChild(divText);
            break;
        case '-': 
            break;
        case '1': 
            divText.textContent = thisID;
            screen.appendChild(divText);
            break;
        case '2': 
            divText.textContent = thisID;
            screen.appendChild(divText);
            break;
        case '3': 
            divText.textContent = thisID;
            screen.appendChild(divText);
            break;
        case '*': 
            break;
        case '+/-': 
            break;
        case '0': 
            divText.textContent = thisID;
            screen.appendChild(divText);
            break;
        case '.': 
            break;
        case '/': 
            break;

    }
}

function showInput(button) {

}
console.log(buttons);