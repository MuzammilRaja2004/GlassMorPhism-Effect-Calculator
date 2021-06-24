function getvalue(number){
    var result = document.getElementById("uservalue")
    uservalue.value += number;
}

function clearresult(){
    var result = document.getElementById("uservalue")
    uservalue.value = "";
}

function getresult(){
    var result = document.getElementById("uservalue")
    uservalue.value = eval(uservalue.value );
}