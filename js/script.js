const btn = document.querySelector('.btn-keypad')
const screen = document.querySelector('.screen')
const keypad = document.querySelector('.keypad-calculator')

function operacao(op, A, B){
  const obj = {
    '+': A + B,
    '-': A - B,
    '/': A / B,
    'X': A * B
  } 
  return obj[op];
}

let number1 = 0;
let operator = "";

keypad.addEventListener('click', event => {
  let number = 0;
  
  if(event.target.nodeName === 'BUTTON') {

    if(!event.target.classList.contains("operation")){
      screen.innerText += event.target.innerText
    }

    number = +screen.innerText;
    
    if (event.target.innerText === 'RESET')
      screen.innerText = "";

    if (event.target.innerText === '+' || event.target.innerText === '-' || event.target.innerText === '/' || event.target.innerText === 'X'){
      number1 = number;
      operator = event.target.innerText;
      console.log(operator)
      screen.innerText = "";
    }

    if (event.target.innerText === '='){
      console.log(operator)
      console.log(operator, number1, number)
      screen.innerText = operacao(operator, number1, number)
    }

  }

})




