let hamberger=document.querySelector('.hamberger')
let rightSection=document.querySelector('.section-right')
let leftSection=document.querySelector('.section-left')
let cross=document.querySelector('.cross')

console.log(hamberger);
console.log('ji');

hamberger.addEventListener('click',()=>{
    rightSection.className='display-flex';
    console.log('class added');
    console.log(rightSection);
    leftSection.className='display-none'
})

cross.addEventListener('click',()=>{
    rightSection.className='display-none';
    leftSection.className='section-left'
})

window.addEventListener('resize',()=>{
    if(window.innerWidth>=889){
        rightSection.className='section-right';
    }
})




/*
let display = document.querySelector('.calculation-area');
let buttons = document.querySelectorAll('.calculator-btn');
let currentVal = document.querySelector('.current');
let wholeExp = document.querySelector('.whole');

let firstNumber = '';
let secondNumber = '';
let operator = '';
let isSecond = false;


function calculate(a, b, op) {
    a = Number(a);
    b = Number(b);

    if (op === '+') return a + b;
    if (op === '-') return a - b;
    if (op === '×') return a * b;
    if (op === '÷') return b !== 0 ? a / b : 'Error';

    return '';
}


buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        let value = btn.innerText;

        wholeExp.innerText=`${firstNumber} ${operator} ${secondNumber}`
        // numbers
        if (!isNaN(value)) {
            if (!isSecond) {
                firstNumber = value;
                currentVal.innerText = firstNumber;
            } else {
                secondNumber = value;
                currentVal.innerText = secondNumber;
            }
        }

        // operators
        if (value === '+' || value === '-' || value === '×' || value === '÷') {
            operator = value;
            isSecond = true;
        }

        // equal
        if (value === '=') {
            let result = calculate(firstNumber, secondNumber, operator);
            wholeExp.innerText=`${firstNumber} ${operator} ${secondNumber} =`
            currentVal.innerText = result;
            // reset
            firstNumber = result;
            secondNumber = '';
            operator = '';
            isSecond = false;
        }

        // clear
        if (value === 'C') {
            firstNumber = '';
            secondNumber = '';
            operator = '';
            isSecond = false;
            currentVal.innerText = '';
            wholeExp.innerText = '';
        }
    });
});
*/
let display = document.querySelector('.calculation-area');
let buttons = document.querySelectorAll('.calculator-btn');
let currentVal = document.querySelector('.current');
let wholeExp = document.querySelector('.whole');

let firstNumber = '';
let secondNumber = '';
let operator = '';
let isSecond = false;

function calculate(a, b, op) {
    a = Number(a);
    b = Number(b);

    if (op === '+') return a + b;
    if (op === '-') return a - b;
    if (op === '×') return a * b;
    if (op === '÷') return b !== 0 ? a / b : 'Error';

    return '';
}

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        let value = btn.innerText;

        // numbers
        if (!isNaN(value)) {
            if (!isSecond) {
                firstNumber += value;   // ✅ fixed
                currentVal.innerText = firstNumber;
            } else {
                secondNumber += value;  // ✅ fixed
                currentVal.innerText = secondNumber;
            }
        }

        // operators
        if (value === '+' || value === '-' || value === '×' || value === '÷') {

            if (firstNumber !== '' && secondNumber !== '') {
                let result = calculate(firstNumber, secondNumber, operator);

                firstNumber = result.toString();  // ✅ added
                secondNumber = '';
                currentVal.innerText = firstNumber;
            }

            operator = value;
            isSecond = true;
        }

        // equal
        if (value === '=') {
            let result = calculate(firstNumber, secondNumber, operator);
            wholeExp.innerText = `${firstNumber} ${operator} ${secondNumber} =`;
            currentVal.innerText = result;

            firstNumber = result.toString();  // ✅ fixed
            secondNumber = '';
            operator = '';
            isSecond = false;
        }

        // clear
        if (value === 'C') {
            firstNumber = '';
            secondNumber = '';
            operator = '';
            isSecond = false;
            currentVal.innerText = '';
            wholeExp.innerText = '';
        }

        // ✅ moved here (after updates)
        wholeExp.innerText = `${firstNumber} ${operator} ${secondNumber}`;
    });
});
