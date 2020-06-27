var input = document.getElementById("input")
function getNumber(num) {
         input.value += num;
}

function pi(){
    input.value = input.value * 3.14
}
function clearResult(){
         input.value = "";
}

function getResult(){
     input.value = eval(input.value)
}

function square(){
    input.value = input.value * input.value;
}

function cube(){
    input.value = input.value * input.value * input.value;
}