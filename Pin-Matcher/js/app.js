function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}
function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();

    const displayPin = document.getElementById('pin-field');
    displayPin.value = pin;
})


document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previourTyped = typedNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typedNumberField.value = '';
        }
        else if (number === '<'){
            const digits = previourTyped.split('');
            digits.pop();
            const remdigits = digits.join('');
            typedNumberField.value = remdigits;

        }
    }
    else{
        
        
        const newTyped = previourTyped + number;
        typedNumberField.value = newTyped;
    }
    
})

document.getElementById('verify-pin').addEventListener('click',function(){
    const displayPinField = document.getElementById('pin-field');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;
    const pinSuccess = document.getElementById('pin-success');
    const pinNotSuccess = document.getElementById('pin-notsuccess');
    if(typedNumber === currentPin ){
        
        pinSuccess.style.display = 'block';
        pinNotSuccess.style.display = 'none';
    }
    else{
        pinNotSuccess.style.display = 'block';
        pinSuccess.style.display = 'none';
    }
})

console.log(Math.pow(4, 0.5)+"spiderman"+"987"+Math.sqrt(9));