var a;
var b;
var c;
var d;
const calculator = document.querySelector('#calculator');
const selectButton = calculator.querySelector('#calculator-operator');
const display = document.querySelector('#result');
const operator = calculator.querySelector('.operator');

function math() {
  switch (d) {
    case 'add':
      console.log('+');
      return (+b + +c);
    case 'subtract':
      console.log('-');
      return (+b - +c);
    case 'multiply':
      console.log('*');
      return (+b * +c);
    case 'divide':
      console.log('/');
      return (+b / +c);
    default:
      return +c;
  }
}

selectButton.addEventListener("click", a => {
  if (a.target.matches("button")) {
    const key = a.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;
    switch (action) {
      case "add":
      case "subtract":
      case "multiply":
      case "divide":
        b = displayedNum;
        d = action;
        display.textContent = '0';
        console.log('operator');
        break;
      case "decimal":
        if (!displayedNum.includes('.')) {
          display.textContent = displayedNum + '.';
          console.log('decimal');
        }
        break;
      case "clear":
        display.textContent = '0';
        b = '0';
        c = '0';
        d = '';
        console.log('clear');
        break;
      case "calculate":
        c = displayedNum;
        console.log('equal');
        display.textContent = math();
        b = '0';
        d = '';
        break;
      default:
        if (display.textContent == '0') {
          display.textContent = keyContent;
        } else {
          display.textContent = displayedNum + keyContent;
          console.log('add number');
        }
        break;
    }
  }
})