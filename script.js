let display = document.getElementById("display");

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function backspace(){
    display.value = display.value.slice(0, -1);
}

function calculate(){
    try{
        let expression = display.value;
        let result = eval(expression);

        document.getElementById("history").innerHTML +=
        expression + " = " + result + "<br>";

        display.value = result;
    }
    catch{
        display.value = "Error";
    }
}

function percentage(){
    display.value = Number(display.value) / 100;
}

function square(){
    display.value = Math.pow(Number(display.value), 2);
}

function sqrt(){
    display.value = Math.sqrt(Number(display.value));
}

function pi(){
    display.value += Math.PI.toFixed(8);
}

function sin(){
    display.value = Math.sin(Number(display.value) * Math.PI / 180).toFixed(6);
}

function cos(){
    display.value = Math.cos(Number(display.value) * Math.PI / 180).toFixed(6);
}

function tan(){
    display.value = Math.tan(Number(display.value) * Math.PI / 180).toFixed(6);
}

function log(){
    display.value = Math.log10(Number(display.value)).toFixed(6);
}

function toggleTheme(){
    document.body.classList.toggle("light");
}

document.addEventListener("keydown", function(event){

    if(!isNaN(event.key) || "+-*/.".includes(event.key)){
        appendValue(event.key);
    }

    if(event.key === "Enter"){
        calculate();
    }

    if(event.key === "Backspace"){
        backspace();
    }

    if(event.key === "Escape"){
        clearDisplay();
    }

});