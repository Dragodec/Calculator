let Input = document.getElementById("Input");
let opr = '';
let operand1 = '';
let operand2 = '';

const Append = (value) => {
    Input.value+=value;
}

const Clear = () => {
 Input.value = '';
 opr = '';
 operand1 = '';
 operand2 = '';
}


const Setopt = (op) => {
    opr = op;
    operand1 = Input.value;
    Input.value = '';
}

const Calc = () => {
    operand2 = Input.value;
    if(opr==='+'){
        Input.value  = (parseFloat(operand1) + parseFloat(operand2)).toString();
    }

    else if(opr==='-'){
        Input.value  = (parseFloat(operand1) - parseFloat(operand2)).toString();
    }

    else if(opr==='*'){
        Input.value  = (parseFloat(operand1) * parseFloat(operand2)).toString();
    }

    else if(opr==='/'){
        if(operand2==='0'){
            Input.value = 'Error';
        }
        else{
        Input.value  = (parseFloat(operand1) / parseFloat(operand2)).toString();
        }
    }

}

