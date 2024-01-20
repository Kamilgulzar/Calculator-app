let n = document.getElementById("textarea")
let currentInput = '';

function appendNum(num){
    currentInput += num;
    n.value = currentInput

}

function appendOperator(operator){
   currentInput += `${operator}`
   n.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    n.value = '';
}

function equal(){
   try {
    n.value = eval(currentInput)
   }   
   catch(error){
    console.log("error")
   }
   currentInput('')
}

