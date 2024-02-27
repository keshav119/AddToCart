document.addEventListener('DOMContentLoaded', function () {
    console.log('JavaScript is running!');
    states();

});
// hashmap for simple button state management
var map = new Map();

function states(){
    map.set('Button1', 'closed');
    map.set('Button2', 'closed');
    map.set('Button3', 'closed');
}
    
function toggleButtonHeight(buttonId) {

    setPrice(buttonId);
    moveCircle(buttonId);
    
    

    for (let [key, value] of map){
        if(key!=buttonId){
            if(value==='open'){
                moveCircle(key);
            }
        }
    }
    

}
function moveCircle(buttonId) {
    lists(buttonId);
    var rectangle = document.getElementById(buttonId);
    var dot = document.getElementById(buttonId + 'Dot');
    var sizeTitle = document.getElementById(buttonId + 'SizeTitle');
    var colorTitle = document.getElementById(buttonId + 'ColorTitle');
    var number1 = document.getElementById(buttonId + 'Number1');
    var number2 = document.getElementById(buttonId + 'Number2');
    var number3 = document.getElementById(buttonId + 'Number3');
    
    rectangle.classList.toggle('toggle');
    dot.classList.toggle('visible');
    sizeTitle.classList.toggle('toggle');
    colorTitle.classList.toggle('toggle');
    number1.classList.toggle('toggle');
    
    

    if(number2){
        number2.classList.toggle('toggle');
    }
    if(number3){
        number3.classList.toggle('toggle');
    }


    if (map.get(buttonId) === 'closed') {
        map.set(buttonId, 'open');
    } else {
        map.set(buttonId, 'closed');
    }
}

function moveStandardPrice(){
    var sp = document.getElementById('standard');
    sp.classList.toggle('toggle');
}

function setPrice(buttonId){
    var priceTag = document.getElementById('total');
    if (map.get(buttonId) === 'closed') {
        switch (buttonId) {
            case 'Button1':
                priceTag.textContent = 'Total : $10.00 USD';
                break;
            case 'Button2':
                priceTag.textContent = 'Total : $18.00 USD';
                break;
            case 'Button3':
                priceTag.textContent = 'Total : $24.00 USD';
                break;
            default:
                priceTag.textContent = 'Total : $0.00 USD';
        }
        
    } else {
        priceTag.textContent = 'Total : $0.00 USD';
        
    }
}

function lists(buttonId){
    var b1 = document.getElementById('b1');
    var b2 = document.getElementById('b2');
    var b3 = document.getElementById('b3');

    switch(buttonId){
        case 'Button1':
            b1.classList.toggle('toggle');
            break;
        case 'Button2':
            b2.classList.toggle('toggle');
            break;
        case 'Button3':
            b3.classList.toggle('toggle');
            break;
        default:
            return;
    }
}